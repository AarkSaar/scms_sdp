// modules/profiles/services/profilesService.server.js
import { upsertProfile } from '@/modules/profiles/adapters/profilesAdapter.server';


export async function ensureProfileForAuthUser(user, extra = {}) {
  if (!user?.id) throw new Error('ensureProfileForAuthUser: user.id missing');

  const id = user.id;
  const name = user.user_metadata?.full_name ?? user.name ?? extra?.name ?? null;
  const email = user.email ?? (user.user_metadata && user.user_metadata.email) ?? null;

  const row = {
    id,
    email,
    name,
    role_id: extra.role_id ?? 'role_student', // DEFAULT role = student
    metadata: extra.metadata ?? {},
    avatar_url: extra.avatar_url ?? null,
    created_at: new Date().toISOString(),
    username: extra.username ?? user.user_metadata?.username ?? null,
  };

  // Upsert using the adapter (admin client)
  const profile = await upsertProfile(row);
  return profile;
}

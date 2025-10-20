// modules/shared/supabaseAdmin.js
import { createClient } from '@supabase/supabase-js';

const Admin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  {
    // Optional: set global options here.
    auth: { persistSession: false },
  },
);

export default Admin;

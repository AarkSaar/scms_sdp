// modules/issues/issuesService.client.js
export async function fetchIssuesWithMembers({ limit = 500 } = {}) {
  const res = await fetch(`/api/issues/with-members?limit=${limit}`);
  if (!res.ok) {
    const body = await res.json().catch(() => ({ error: 'Failed to fetch' }));
    throw new Error(body?.error || 'Failed to fetch issues');
  }
  const body = await res.json();
  return body.issues || [];
}

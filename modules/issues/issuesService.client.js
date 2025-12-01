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

export async function fetchIssueById(id) {
  const res = await fetch(`/api/issues/${id}`, { cache: 'no-store' });

  if (!res.ok) {
    // Try to read JSON, fallback to text (for 404 HTML pages)
    let errorMessage = 'Failed to load issue';
    try {
      const body = await res.json();
      errorMessage = body.error || errorMessage;
    } catch (e) {
      console.error('API returned non-JSON response:', res.status, res.statusText);
    }
    throw new Error(errorMessage);
  }

  return await res.json();
}

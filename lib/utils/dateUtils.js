// lib/utils/dateUtils.js
export function formatDateRange(createdAt, closedAt = null) {
  const created = new Date(createdAt);
  const createdStr = created.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });

  if (closedAt) {
    const closed = new Date(closedAt);
    const closedStr = closed.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
    return `${createdStr} - ${closedStr}`;
  }

  return createdStr;
}

export default function getNameDisplay(name, format = 'short') {
  if (!name || typeof name !== 'string') return 'U';

  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return 'U';

  // SHORT: "MS"
  if (format === 'short') {
    if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
    return (parts[0].charAt(0) + parts[1].charAt(0)).toUpperCase();
  }

  // INITIAL-EXPANDED: "Mahdi S"
  if (format === 'initial-expanded') {
    if (parts.length === 1) return parts[0];
    return `${parts[0]} ${parts[1].charAt(0).toUpperCase()}`;
  }

  // Default fallback
  return name;
}

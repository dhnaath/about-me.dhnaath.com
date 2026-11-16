export function isSafeHref(url?: string): url is string {
  if (!url) return false;
  const trimmed = url.trim();
  if (!trimmed || trimmed === '#') return false;

  return (
    trimmed.startsWith('https://') ||
    trimmed.startsWith('http://') ||
    trimmed.startsWith('mailto:') ||
    trimmed.startsWith('/')
  );
}

export function isExternalUrl(url: string): boolean {
  const trimmed = url.trim();
  return trimmed.startsWith('https://') || trimmed.startsWith('http://');
}

export function openSafeUrl(url?: string): void {
  if (!isSafeHref(url)) return;
  const trimmed = url.trim();

  if (trimmed.startsWith('mailto:')) {
    window.location.assign(trimmed);
    return;
  }

  window.open(trimmed, '_blank', 'noopener,noreferrer');
}

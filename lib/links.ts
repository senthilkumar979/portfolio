/** True for off-site URLs and document assets that should leave the app shell. */
export function isExternalHref(href: string, markedExternal = false): boolean {
  if (markedExternal) return true;
  if (/^https?:\/\//i.test(href) || href.startsWith("//")) return true;
  if (/\.pdf(?:$|[?#])/i.test(href)) return true;
  return false;
}

export function externalAnchorProps(href: string, markedExternal = false) {
  if (!isExternalHref(href, markedExternal)) return {};
  return { target: "_blank" as const, rel: "noopener noreferrer" as const };
}

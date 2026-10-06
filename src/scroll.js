/* Lenis smooth-scroll ka shared instance + helper */
export const lenisRef = { current: null };

export function scrollToId(id) {
  const el = id === "home" ? 0 : document.getElementById(id);
  if (lenisRef.current) lenisRef.current.scrollTo(el, { duration: 1.4 });
  else if (el === 0) window.scrollTo({ top: 0, behavior: "smooth" });
  else el?.scrollIntoView({ behavior: "smooth" });
}

// @maxpowerhq/logo — canonical Maxpower marks.
//
// Two variants × three forms.
//
// Variants:
//   color — racing red on transparent (default)
//   mono  — ink on transparent (for light backgrounds)
//   white — white on transparent (for dark backgrounds)
//
// Forms:
//   mark     — the square "M" monogram (icon / favicon / app / dock)
//   wordmark — the fat "MAX" wordmark (the signature logotype)
//   lockup   — monogram + MAX wordmark, side by side
//
// Design: heavy, squared-off strokes — a high-energy "max power" logotype.
// The monogram is the wordmark's M, cropped to a square so favicons stay
// legible at 16px while the wordmark carries the full brand at large sizes.

const COLOR_RED = '#E10600'; // racing red — max power
const COLOR_INK = '#0a0a0a';

// Square "M" monogram — the wordmark's M in a 64×64 box. Heavy stroke, miter
// joins; recolors cleanly (single stroke) to mono / white.
function markSvg(color: string): string {
  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="${color}" stroke-width="12" stroke-linecap="butt" stroke-linejoin="miter" aria-label="Maxpower">
  <path d="M9 52 L9 12 L32 43 L55 12 L55 52" />
</svg>`.trim();
}

// Fat "MAX" wordmark — three heavy letters built from thick strokes, so it
// carries a single fill and recolors like the monogram. Squared caps/joins
// give it an aggressive, high-power stance.
function wordmarkSvg(color: string): string {
  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 128" fill="none" stroke="${color}" stroke-width="26" stroke-linecap="butt" stroke-linejoin="miter" aria-label="MAX">
  <path d="M26 100 L26 34 L64 86 L102 34 L102 100" />
  <path d="M126 100 L156 34 L186 100 M139 76 L173 76" />
  <path d="M204 34 L268 100 M268 34 L204 100" />
</svg>`.trim();
}

// Lockup — monogram + MAX wordmark on one baseline.
function lockupSvg(color: string): string {
  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 128" fill="none" stroke="${color}" stroke-width="26" stroke-linecap="butt" stroke-linejoin="miter" aria-label="Maxpower — MAX">
  <path d="M18 100 L18 34 L52 80 L86 34 L86 100" />
  <path d="M150 100 L150 34 L188 86 L226 34 L226 100" />
  <path d="M250 100 L280 34 L310 100 M263 76 L297 76" />
  <path d="M332 34 L386 100 M386 34 L332 100" />
</svg>`.trim();
}

/* ── Mark (square monogram) ───────────────────────────────────────────── */
export const getMarkColor = (): string => markSvg(COLOR_RED);
export const getMarkMono  = (): string => markSvg(COLOR_INK);
export const getMarkWhite = (): string => markSvg('#ffffff');

/* ── Wordmark (fat MAX) ───────────────────────────────────────────────── */
export const getWordmarkColor = (): string => wordmarkSvg(COLOR_RED);
export const getWordmarkMono  = (): string => wordmarkSvg(COLOR_INK);
export const getWordmarkWhite = (): string => wordmarkSvg('#ffffff');

/* ── Lockup (monogram + wordmark) ─────────────────────────────────────── */
export const getLockupColor = (): string => lockupSvg(COLOR_RED);
export const getLockupMono  = (): string => lockupSvg(COLOR_INK);
export const getLockupWhite = (): string => lockupSvg('#ffffff');

/* ── Build-tool aliases (shared logo-family build.ts contract) ─────────────
 * The asset generator mints the hero, favicons, and every app / dock / tray /
 * social size from a canonical square icon — for Maxpower that icon is the M
 * monogram; the menubar/template form uses the mono variant. The optional
 * wordmark hook renders the fat MAX logotype alongside. These aliases are the
 * only brand-specific wiring the shared build needs. */
export const getColorSVG    = getMarkColor;
export const getMonoSVG     = getMarkMono;
export const getWhiteSVG    = getMarkWhite;
export const getMenuBarSVG  = getMarkMono;
export const getFaviconSVG  = getMarkColor;
export const getWordmarkSVG = getWordmarkColor; // optional wordmark asset

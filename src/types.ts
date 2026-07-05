export type LogoVariant = 'color' | 'mono' | 'white' | 'dark';

/**
 * mark      — square "M" monogram (icon, favicon, app, dock)
 * wordmark  — the fat "MAX" logotype
 * lockup    — monogram + wordmark, side by side
 */
export type LogoForm = 'mark' | 'wordmark' | 'lockup';

export interface LogoOptions {
  variant?: LogoVariant;
  form?: LogoForm;
  size?: number | string;
}

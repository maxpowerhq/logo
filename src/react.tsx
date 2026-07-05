import * as React from 'react';
import {
  getMarkColor,     getMarkMono,     getMarkWhite,
  getWordmarkColor, getWordmarkMono, getWordmarkWhite,
  getLockupColor,   getLockupMono,   getLockupWhite,
} from './logos';
import type { LogoVariant, LogoForm } from './types';

export interface MaxpowerLogoProps {
  variant?: LogoVariant;
  form?: LogoForm;
  size?: number | string;
  className?: string;
  style?: React.CSSProperties;
  title?: string;
}

function pick(form: LogoForm, variant: LogoVariant): string {
  const v: 'color' | 'mono' | 'white' = variant === 'dark' ? 'mono' : variant;
  if (form === 'wordmark') {
    return v === 'color' ? getWordmarkColor() : v === 'white' ? getWordmarkWhite() : getWordmarkMono();
  }
  if (form === 'lockup') {
    return v === 'color' ? getLockupColor() : v === 'white' ? getLockupWhite() : getLockupMono();
  }
  return v === 'color' ? getMarkColor() : v === 'white' ? getMarkWhite() : getMarkMono();
}

/**
 * Maxpower logo, as a React component.
 *
 * @example
 * <MaxpowerLogo size={64} />                          // red M monogram
 * <MaxpowerLogo form="wordmark" variant="white" />    // white MAX wordmark
 */
export const MaxpowerLogo: React.FC<MaxpowerLogoProps> = ({
  variant = 'color',
  form = 'mark',
  size = 64,
  className,
  style,
  title = 'Maxpower',
}) => {
  const svg = pick(form, variant);
  const dataUrl = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  return (
    <img
      src={dataUrl}
      alt={title}
      width={typeof size === 'number' ? size : undefined}
      height={form === 'mark' ? (typeof size === 'number' ? size : undefined) : undefined}
      className={className}
      style={style}
    />
  );
};

export default MaxpowerLogo;

import React from 'react';

interface BrandProps {
  compact?: boolean;
  variant?: 'primary' | 'alt' | 'warm' | 'forest';
  useSvg?: boolean;
  onClick?: () => void;
}

export default function Brand({ compact = false, variant = 'forest', useSvg = false, onClick }: BrandProps) {
  const imgSrc = `/brand-${variant}.svg`;

  // base color per variant (matches first/primary stop of each gradient)
  const baseColors: Record<string, string> = {
    primary: '#0b78ff',
    alt: '#7c3aed',
    warm: '#ff7a18',
    greenForest: '#2a9d8f'
  };

  const shadeColor = (hex: string, percent: number) => {
    const h = hex.replace('#', '');
    const num = parseInt(h, 16);
    let r = (num >> 16) & 0xff;
    let g = (num >> 8) & 0xff;
    let b = num & 0xff;
    const t = percent < 0 ? 0 : 255;
    const p = Math.abs(percent) / 100;
    r = Math.round((t - r) * p) + r;
    g = Math.round((t - g) * p) + g;
    b = Math.round((t - b) * p) + b;
    return `#${(r << 16 | g << 8 | b).toString(16).padStart(6, '0')}`;
  };

  const baseColor = '#1f2937';
  // darken ~20% to get a shadow/tinted color of the primary
  const nameColor = shadeColor(baseColor, -20);

  return (
    <div
      className={`brand ${compact ? 'compact' : ''} flex items-center space-x-3 cursor-pointer group`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter') onClick && onClick(); }}
    >
      {useSvg ? (
        <img src={imgSrc} alt="Felipe Goulart" className="w-9 h-9 rounded-lg shadow-md" />
      ) : (
        <div
          className={`brand-mark w-9 h-9 rounded-lg flex items-center justify-center shadow-md text-white font-bold text-sm tracking-tight`}
          style={{
            background: variant === 'alt'
              ? 'linear-gradient(135deg, var(--brand-accent), var(--brand-primary))'
              : variant === 'warm'
                ? 'linear-gradient(135deg, #ff7a18, #ff3cac)'
                : 'linear-gradient(135deg, var(--brand-primary), var(--brand-secondary))'
          }}
        >
          <span style={{ lineHeight: 1 }} aria-hidden>
            FG
          </span>
        </div>
      )}

      <span className="brand-name font-semibold text-lg tracking-tight transition-colors" style={{ color: nameColor }}>
        Felipe Goulart
      </span>
    </div>
  );
}

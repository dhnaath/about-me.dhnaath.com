import { ExternalLink } from 'lucide-react';
import type { CSSProperties } from 'react';
import type { TraitCardData } from '../types';

const defaultHeadingStyle: CSSProperties = {
  fontSize: 'clamp(1rem, 2vw, 1.5rem)',
  fontWeight: 900,
  textTransform: 'uppercase',
  margin: '0 0 0.2rem 0',
};

const defaultSubheadingStyle: CSSProperties = {
  fontSize: 'clamp(0.75rem, 1.5vw, 0.9rem)',
  fontWeight: 800,
  textTransform: 'uppercase',
  margin: 0,
  lineHeight: 1.2,
};

interface TraitCardProps {
  item: TraitCardData;
  layout: 'grid' | 'flex';
}

export function TraitCard({ item, layout }: TraitCardProps) {
  const cardContent = (
    <div
      style={{
        padding: 'clamp(0.5rem, 1.5vw, 1.5rem)',
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'clamp(0.5rem, 1.5vw, 1.5rem)',
        width: '100%',
        height: '100%',
      }}
      className="rounded-3xl bg-[#F2F0EF] dark:bg-[#3D3D3D] shadow-sm border border-black/10 dark:border-white/10 group-hover:shadow-md transition-shadow"
    >
      <div style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1, flexShrink: 0 }} aria-hidden="true">
        {item.emoji}
      </div>

      <div style={{ textAlign: 'left', width: '100%', ...(item.minWidthZero ? { minWidth: 0 } : {}) }}>
        <p
          style={{
            fontSize: 'clamp(0.6rem, 1.5vw, 0.8rem)',
            fontWeight: 900,
            textTransform: 'uppercase',
            padding: '0.25rem 0.5rem',
            margin: '0 0 0.5rem 0',
            display: 'inline-block',
          }}
          className="bg-[#3D3D3D] text-[#F2F0EF] dark:bg-[#F2F0EF] dark:text-[#3D3D3D] rounded-md"
        >
          {item.badge}
        </p>

        <p style={item.headingStyle ?? defaultHeadingStyle} className="text-[#3D3D3D] dark:text-[#F2F0EF]">
          {item.heading}
        </p>

        <p style={item.subheadingStyle ?? defaultSubheadingStyle} className="text-[#3D3D3D] dark:text-[#F2F0EF]">
          {item.subheading}
        </p>
      </div>
    </div>
  );

  const widthClass = layout === 'flex' ? 'w-full sm:w-[calc(50%-0.75rem)] lg:max-w-[25.92rem]' : 'w-full';

  if (item.ctaHref !== '#') {
    return (
      <a
        href={item.ctaHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`block ${widthClass} h-full group no-underline relative`}
      >
        {cardContent}
        <div className="absolute top-3 right-3 md:top-4 md:right-4 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
          <ExternalLink className="w-5 h-5 text-[#3D3D3D] dark:text-[#F2F0EF]" />
        </div>
      </a>
    );
  }

  return <div className={`block ${widthClass} h-full group`}>{cardContent}</div>;
}

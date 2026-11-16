import type { CSSProperties } from 'react';

export interface TraitCardData {
  id: string;
  emoji: string;
  badge: string;
  heading: string;
  subheading: string;
  ctaLabel: string;
  ctaHref: string;
  minWidthZero?: boolean;
  headingStyle?: CSSProperties;
  subheadingStyle?: CSSProperties;
}

export interface TraitSectionConfig {
  id: string;
  title: string;
  subtitle: string;
  layout: 'grid' | 'flex';
  itemIds: string[];
}

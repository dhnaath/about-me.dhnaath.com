import type { ReactNode } from 'react';
import type { Language } from '../../types';

export interface ExperienceCardProps {
  title: string;
  company: string | ReactNode;
  location: string;
  period: string;
  periodEn?: string;
  description: string;
  achievements: string[];
  achievementsEn?: string[];
  image?: string;
  images?: string[];
  imageLayout?: 'collage-right-tall';
  licenses?: string;
  employmentType?: string;
  employmentTypeEn?: string;
  companyLogo?: string;
  companyLogoDark?: string;
  companyLogos?: string[];
  tagColor?: string;
  companyUrl?: string;
  lang?: Language;
}

export interface TimelinePosition {
  title: string;
  period: string;
  periodEn?: string;
  location: string;
}

export interface PosIndoPosition extends TimelinePosition {
  achievements: string[];
  achievementsEn?: string[];
  employmentType?: string;
  employmentTypeEn?: string;
  image: string;
  image2?: string;
  image3?: string;
  image4?: string;
  image5?: string;
}

export interface PosIndoExperienceProps {
  company: string;
  companyLogo?: string;
  positions: PosIndoPosition[];
  description?: string;
  tagColor?: string;
  lang?: Language;
}

export interface KspNusantaraPosition extends TimelinePosition {
  achievements: string[];
  achievementsEn?: string[];
  employmentType?: string;
  employmentTypeEn?: string;
  image?: string;
  image2?: string;
  image3?: string;
  image4?: string;
}

export interface KspNusantaraExperienceProps {
  company: string;
  companyLogo?: string;
  companyLogoDark?: string;
  positions: KspNusantaraPosition[];
  description?: string;
  tagColor?: string;
  lang?: Language;
}

export interface DocumentationCardProps {
  title: string;
  description: string;
  type: string;
  tags: string[];
  link?: string;
  externalLink?: string;
  bgColor?: string;
  textColor?: string;
  hideFileIcon?: boolean;
  date?: string;
  credentialId?: string;
  compact?: boolean;
}

export interface FlipbookCardProps {
  category: string;
  title: ReactNode;
  content: ReactNode;
  darkContent?: ReactNode;
  darkImage?: string;
  darkImages?: string[];
  imageClassName?: string;
  link?: string;
  customIcon?: ReactNode;
  topLeftIcon?: ReactNode;
  topLeftLink?: string;
  disableFlip?: boolean;
  disableSlide?: boolean;
  lightMode?: boolean;
  slidingBgColor?: string;
  slidingTextColor?: string;
}

export interface DesignItem {
  title: string;
  image: string;
  rotation: string;
  delay: string;
}

export interface TranscriptLevel {
  title: string;
  npsn: string;
  institution: string;
  period: string;
  akreditasi: string;
  akreditasiBottom?: string;
  link: string;
}

export type LogbookCarouselItem =
  | {
      kind: 'flipbook';
      props: FlipbookCardProps;
    }
  | {
      kind: 'blank';
    }
  | {
      kind: 'image';
      src: string;
      alt: string;
    };


import type { ReactNode } from 'react';
import type { Instagram, Link2 } from 'lucide-react';

export interface WorkExperienceEntry {
  year: string;
  company: string;
  companyLogo?: string;
  role: ReactNode;
  roleEn?: ReactNode;
  rightTitle?: ReactNode;
  rightTitleEn?: ReactNode;
  location?: string;
  locationId?: string;
  href?: string;
  isPresent?: boolean;
  logoBg?: string;
  logoColor?: string;
  initials?: string;
  details?: ReactNode;
  detailsEn?: ReactNode;
}

export interface OrganizationEntry {
  year: string;
  role: ReactNode;
  roleEn?: ReactNode;
  company: ReactNode;
  companyEn?: ReactNode;
  location?: string;
  href?: string;
}

export interface ResumeListEntry {
  year: string;
  title: ReactNode;
  titleEn?: ReactNode;
  subtitle?: ReactNode;
  subtitleEn?: ReactNode;
  leftInfo?: ReactNode;
  leftInfoEn?: ReactNode;
  location?: string;
  locationId?: string;
  href?: string;
}

export interface ResumeData {
  sidebar: {
    name: string;
    role: string;
    quote: string;
    quoteAuthor: string;
    contact: Array<{ icon: typeof Link2; label: string; value: string }>;
    socials: Array<{ icon: typeof Instagram; label: string; value: string; color: string }>;
  };
  internships: WorkExperienceEntry[];
  contractWork: WorkExperienceEntry[];
  remoteWork: WorkExperienceEntry[];
  freelanceWork: WorkExperienceEntry[];
  organizations: OrganizationEntry[];
  community: OrganizationEntry[];
  certificate: ResumeListEntry[];
  license: ResumeListEntry[];
  formalSchool: ResumeListEntry[];
  tertiaryDegree: ResumeListEntry[];
  nonDegree: ResumeListEntry[];
  workshop: ResumeListEntry[];
  research: ResumeListEntry[];
}

export interface ResumeTranslations {
  socials: string;
  experience: string;
  internship: string;
  contract: string;
  remote: string;
  freelance: string;
  contribution: string;
  organizational: string;
  community: string;
  research: string;
  education: string;
  formalSchool: string;
  tertiaryDegree: string;
  nonDegree: string;
  workshop: string;
  competency: string;
  certificate: string;
  license: string;
  present: string;
  address: string;
}


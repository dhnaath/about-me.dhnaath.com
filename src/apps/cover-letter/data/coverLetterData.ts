import type { SignatureContactItem } from '../types';

export const SIGNATURE_IDENTITY = {
  name: 'DHIA NAJMI ATHALLAH',
  credentials: 'S.Tr.Log., CSSWB',
} as const;

export const SIGNATURE_CONTACTS: SignatureContactItem[] = [
  {
    id: 'phone',
    href: 'https://wa.me/6285161629923',
    label: '+62 851-6162-9923',
    external: true,
  },
  {
    id: 'email',
    href: 'mailto:contact@dhnaath.com',
    label: 'contact@dhnaath.com',
    external: false,
  },
  {
    id: 'website',
    href: 'https://dhnaath.com',
    label: 'www.dhnaath.com',
    external: true,
  },
];

export const GOOGLE_SCHOLAR_URL = 'https://scholar.dhnaath.com';

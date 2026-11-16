export interface SignatureContactItem {
  id: 'phone' | 'email' | 'website';
  href: string;
  label: string;
  external?: boolean;
}

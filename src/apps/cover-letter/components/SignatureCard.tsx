import { Mail, Phone, Globe } from 'lucide-react';
import { SIGNATURE_CONTACTS, SIGNATURE_IDENTITY } from '../data/coverLetterData';
import type { SignatureContactItem } from '../types';

function ContactIcon({ id }: { id: SignatureContactItem['id'] }) {
  switch (id) {
    case 'phone':
      return <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />;
    case 'email':
      return <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5" />;
    case 'website':
      return <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5" />;
  }
}

export function SignatureCard() {
  return (
    <div className="!mt-8 lg:!mt-12 font-times not-italic text-left select-text">
      <h4 className="text-[13pt] sm:text-[14pt] lg:text-[16pt] font-bold text-[#3D3D3D]/80 dark:text-[#F2F0EF]/80 leading-snug uppercase tracking-wide">
        {SIGNATURE_IDENTITY.name}
      </h4>
      <p className="text-[11pt] sm:text-[12pt] lg:text-[14pt] text-[#3D3D3D]/80 dark:text-[#F2F0EF]/80 font-normal mt-1">
        {SIGNATURE_IDENTITY.credentials}
      </p>
      <div className="w-full max-w-[260px] sm:max-w-[280px] lg:max-w-[320px] border-b border-[#3D3D3D]/20 dark:border-white/20 my-2.5 sm:my-3 lg:my-3.5" />
      <div className="space-y-2 sm:space-y-2.5 text-[11pt] sm:text-[12pt] lg:text-[14pt] text-[#3D3D3D]/80 dark:text-[#F2F0EF]/80">
        {SIGNATURE_CONTACTS.map((contact) => (
          <a
            key={contact.id}
            href={contact.href}
            target={contact.external ? '_blank' : undefined}
            rel={contact.external ? 'noopener noreferrer' : undefined}
            className="flex items-center gap-2.5 sm:gap-3 hover:opacity-75 transition-opacity w-fit text-[#3D3D3D]/80 dark:text-[#F2F0EF]/80"
          >
            <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#3D3D3D]/80 dark:bg-[#F2F0EF]/80 text-[#FAF8F5] dark:text-[#2A2A2A] flex items-center justify-center shrink-0 shadow-sm">
              <ContactIcon id={contact.id} />
            </span>
            <span className="font-normal">{contact.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

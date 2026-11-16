import type { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  noGap?: boolean;
  gapClassName?: string;
  className?: string;
}

export const Section = ({
  children,
  noGap = false,
  gapClassName,
  className = "mb-8",
}: SectionProps) => (
  <section className={className}>
    <div className={`flex flex-col ${noGap ? '' : gapClassName || 'gap-6'}`}>
      {children}
    </div>
  </section>
);

export const RecapGroupHeader = ({ title }: { title: string }) => (
  <div className="px-2.5 sm:px-4 mb-[10pt] flex items-center gap-[10pt]">
    <div className="h-px flex-1 bg-[#3D3D3D]/15 dark:bg-[#F2F0EF]/20" />
    <h3 className="text-[10pt] sm:text-[11pt] font-semibold italic text-[#3D3D3D] dark:text-[#F2F0EF] text-center shrink-0">
      {title}
    </h3>
    <div className="h-px flex-1 bg-[#3D3D3D]/15 dark:bg-[#F2F0EF]/20" />
  </div>
);

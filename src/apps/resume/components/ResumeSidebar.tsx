import { memo, useMemo } from 'react';
import type { ResumeData, ResumeTranslations } from '../types';

interface NavGroupConfig {
  parentPage: number;
  parentLabel: string;
  children: Array<{ page: number; label: string }>;
}

interface ResumeSidebarProps {
  sidebar: ResumeData['sidebar'];
  t: ResumeTranslations;
  page: number;
  onSelectPage: (nextPage: number) => void;
}

export const ResumeSidebar = memo(function ResumeSidebar({
  sidebar,
  t,
  page,
  onSelectPage,
}: ResumeSidebarProps) {
  const navGroups = useMemo<NavGroupConfig[]>(
    () => [
      {
        parentPage: 10,
        parentLabel: t.experience,
        children: [
          { page: 0, label: t.internship },
          { page: 1, label: t.contract },
          { page: 2, label: t.remote },
          { page: 3, label: t.freelance },
        ],
      },
      {
        parentPage: 11,
        parentLabel: t.education,
        children: [
          { page: 6, label: t.tertiaryDegree },
          { page: 5, label: t.formalSchool },
          { page: 15, label: t.nonDegree },
        ],
      },
      {
        parentPage: 12,
        parentLabel: t.competency,
        children: [
          { page: 7, label: t.certificate },
          { page: 8, label: t.license },
          { page: 9, label: t.workshop },
        ],
      },
      {
        parentPage: 13,
        parentLabel: t.contribution,
        children: [
          { page: 4, label: t.organizational },
          { page: 16, label: t.community },
          { page: 14, label: t.research },
        ],
      },
    ],
    [t]
  );

  return (
    <aside className="w-[37.66%] md:w-[21.1875rem] p-4 sm:p-6 lg:p-[2rem] flex flex-col gap-4 sm:gap-6 lg:gap-10 shrink-0 bg-transparent z-10 transition-colors duration-300 overflow-y-auto [&::-webkit-scrollbar]:hidden border-r border-[#3D3D3D]/10 dark:border-[#F2F0EF]/10 md:border-r-0">
      {/* Profile Header */}
      <div>
        <div className="w-full aspect-square rounded-2xl bg-[#EAE8E6] dark:bg-[#737171] mb-4 sm:mb-8 overflow-hidden">
          <img
            src="/images/profile-662.webp"
            srcSet="/images/profile-331.webp 331w, /images/profile-662.webp 662w"
            sizes="(max-width: 768px) 662px, 331px"
            alt="Profile"
            fetchPriority="high"
            width="662"
            height="662"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-1 sm:mb-2 text-[#3D3D3D] dark:text-[#F2F0EF] leading-tight">{sidebar.name}</h1>
        <p className="text-sm sm:text-base lg:text-[1.125rem] text-[#3D3D3D] dark:text-[#F2F0EF] font-medium mb-4 sm:mb-8 leading-tight">{sidebar.role}</p>

        {/* Contact */}
        <div className="flex flex-col gap-2.5 sm:gap-4 lg:gap-6">
          {sidebar.contact.map((item) => (
            <div key={item.label} className="flex items-center gap-2 sm:gap-3 lg:gap-4 min-w-0">
              <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full bg-[#3D3D3D] dark:bg-[#F2F0EF] flex items-center justify-center text-[#F2F0EF] dark:text-[#3D3D3D] shrink-0">
                <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-[1.125rem] lg:h-[1.125rem]" strokeWidth={2} />
              </div>
              <div className="flex flex-col min-w-0 overflow-hidden">
                <span className="text-[0.65rem] sm:text-[0.7rem] lg:text-[0.75rem] text-[#3D3D3D]/80 dark:text-[#F2F0EF] leading-tight truncate">
                  {item.label === "Address" ? t.address : item.label}
                </span>
                {item.label === "Website" ? (
                  <a
                    href={item.value.startsWith('http') ? item.value : `https://${item.value}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.72rem] sm:text-[0.75rem] lg:text-[0.875rem] font-medium text-[#3D3D3D] dark:text-[#F2F0EF] hover:underline truncate"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="text-[0.72rem] sm:text-[0.75rem] lg:text-[0.875rem] font-medium text-[#3D3D3D] dark:text-[#F2F0EF] truncate">
                    {item.value}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Menu */}
        <div className="flex flex-col gap-1 sm:gap-1.5 mt-4 sm:mt-8">
          {navGroups.map((group) => (
            <div key={group.parentPage} className="flex flex-col">
              <button
                onClick={() => onSelectPage(group.parentPage)}
                className={`text-left px-3 sm:px-4 py-1 sm:py-1.5 rounded-lg sm:rounded-xl text-[10.5pt] sm:text-[11pt] lg:text-[12.5pt] font-semibold italic tracking-tight transition-colors cursor-pointer ${
                  page === group.parentPage
                    ? 'bg-black text-white dark:bg-white dark:text-black shadow-sm'
                    : 'bg-transparent text-[#3D3D3D] dark:text-[#F2F0EF] hover:bg-[#E6E4E3] dark:hover:bg-[#8C8B8B]'
                }`}
              >
                {group.parentLabel}
              </button>

              <div className="flex flex-col gap-0.5 sm:gap-1 pl-2 sm:pl-2.5 ml-[1.375rem] sm:ml-[1.65rem] border-l-2 border-[#3D3D3D]/20 dark:border-[#F2F0EF]/25 my-1">
                {group.children.map((child) => (
                  <button
                    key={child.page}
                    onClick={() => onSelectPage(child.page)}
                    className={`text-left px-2.5 sm:px-3 py-1 sm:py-2 rounded-lg sm:rounded-xl text-[9pt] sm:text-[9.5pt] lg:text-[10.5pt] font-medium transition-colors ${
                      page === child.page
                        ? 'bg-black text-white dark:bg-white dark:text-black italic font-semibold shadow-sm'
                        : 'bg-transparent text-black/80 hover:bg-[#E6E4E3] dark:text-white/80 dark:hover:bg-[#8C8B8B] italic'
                    }`}
                  >
                    {child.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
});

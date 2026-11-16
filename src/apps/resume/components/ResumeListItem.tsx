import type { ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { Language } from '../../../types';
import { isExternalUrl, isSafeHref } from '../../../utils/url';
import { IndonesiaFlag, UKFlag, USFlag } from './FlagIcons';

export interface ResumeListItemProps {
  year: string;
  title: ReactNode;
  titleEn?: ReactNode;
  subtitle?: ReactNode;
  subtitleEn?: ReactNode;
  leftInfo?: ReactNode;
  leftInfoEn?: ReactNode;
  centerContent?: boolean;
  yearBelowLocation?: boolean;
  location?: ReactNode;
  locationId?: ReactNode;
  href?: string;
  lang?: Language;
  hideArrow?: boolean;
  paddingY?: string;
}

export function ListItem({
  year,
  title,
  titleEn,
  subtitle,
  subtitleEn,
  leftInfo,
  leftInfoEn,
  centerContent = false,
  yearBelowLocation = false,
  location,
  locationId,
  href,
  lang = 'id',
  hideArrow = false,
  paddingY,
}: ResumeListItemProps) {
  const displayTitle = lang === 'en' && titleEn ? titleEn : title;
  const displaySubtitle = lang === 'en' && subtitleEn ? subtitleEn : subtitle;
  const displayLeftInfo = lang === 'en' && leftInfoEn ? leftInfoEn : leftInfo;
  const rawLocation = lang === 'id' && locationId ? locationId : location;
  const displayLocation =
    rawLocation === "Indonesia" ? <IndonesiaFlag /> :
    rawLocation === "United States" ? <USFlag /> :
    rawLocation === "United Kingdom" ? <UKFlag /> :
    rawLocation;

  const content = centerContent ? (
    <div className={`grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-2 sm:gap-2.5 items-center group ${paddingY || 'p-2.5 sm:p-4'} px-2.5 sm:px-4 rounded-lg sm:rounded-xl hover:bg-[#EAE8E6] dark:hover:bg-[#737171] transition-colors w-full`}>
      <div className="flex flex-col items-start justify-center min-w-0 text-left gap-0.5">
        {displayLeftInfo && (
          <span className="text-[0.68rem] sm:text-[0.875rem] text-[#3D3D3D]/80 dark:text-[#F2F0EF]/80 leading-[1.5] sm:leading-[1.6] flex flex-col gap-0.5">
            {displayLeftInfo}
          </span>
        )}
      </div>

      <div className="flex flex-col items-center justify-center text-center min-w-0 max-w-[9.75rem] sm:max-w-[14.5rem]">
        <span className="text-[0.78rem] sm:text-[0.875rem] font-medium text-[#3D3D3D] dark:text-[#F2F0EF] leading-[1.5] sm:leading-[1.6]">{displayTitle}</span>
        {displaySubtitle && (
          <span className="text-[0.7rem] sm:text-[0.875rem] text-[#3D3D3D]/80 dark:text-[#F2F0EF]/80 leading-[1.5] sm:leading-[1.6] mt-0.5 flex flex-col items-center gap-0.5">
            {displaySubtitle}
          </span>
        )}
      </div>

      <div className="flex items-center justify-end min-w-0 text-right whitespace-nowrap">
        <div className="flex flex-col items-end justify-center gap-0.5">
          {displayLocation && (
            <span className="text-[0.68rem] sm:text-[0.875rem] text-[#3D3D3D]/80 dark:text-[#F2F0EF] leading-[1.5] sm:leading-[1.6]">
              {displayLocation}
            </span>
          )}
          {year && (
            <span className="text-[0.68rem] sm:text-[0.875rem] text-[#3D3D3D]/80 dark:text-[#F2F0EF]/80 leading-[1.5] sm:leading-[1.6]">
              {year}
            </span>
          )}
        </div>
        {isSafeHref(href) && !hideArrow && (
          <span className="ml-2 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline-flex">
            <ArrowUpRight className="w-4 h-4 text-[#3D3D3D]/40 dark:text-[#F2F0EF]/40" />
          </span>
        )}
      </div>
    </div>
  ) : yearBelowLocation ? (
    <div className={`flex flex-row justify-between gap-2 sm:gap-4 items-center group ${paddingY || 'p-2.5 sm:p-4'} px-2.5 sm:px-4 rounded-lg sm:rounded-xl hover:bg-[#EAE8E6] dark:hover:bg-[#737171] transition-colors w-full`}>
      <div className="flex flex-col items-start justify-center pr-1 sm:pr-4 flex-1 min-w-0">
        <span className="text-[0.78rem] sm:text-[0.875rem] font-medium text-[#3D3D3D] dark:text-[#F2F0EF] leading-[1.5] sm:leading-[1.6]">{displayTitle}</span>
        {displaySubtitle && (
          <span className="text-[0.7rem] sm:text-[0.875rem] text-[#3D3D3D]/80 dark:text-[#F2F0EF]/80 leading-[1.5] sm:leading-[1.6] mt-0.5 flex flex-col gap-0.5">
            {displaySubtitle}
          </span>
        )}
      </div>
      <div className="flex items-center justify-end shrink-0 whitespace-nowrap text-right">
        <div className="flex flex-col items-end justify-center gap-0.5">
          {displayLocation && (
            <span className="text-[0.68rem] sm:text-[0.875rem] text-[#3D3D3D]/80 dark:text-[#F2F0EF] leading-[1.5] sm:leading-[1.6]">
              {displayLocation}
            </span>
          )}
          {year && (
            <span className="text-[0.68rem] sm:text-[0.875rem] text-[#3D3D3D]/80 dark:text-[#F2F0EF]/80 leading-[1.5] sm:leading-[1.6]">
              {year}
            </span>
          )}
        </div>
        {isSafeHref(href) && !hideArrow && (
          <span className="ml-2 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline-flex">
            <ArrowUpRight className="w-4 h-4 text-[#3D3D3D]/40 dark:text-[#F2F0EF]/40" />
          </span>
        )}
      </div>
    </div>
  ) : (
    <div className={`flex flex-col justify-center group ${paddingY || 'p-2.5 sm:p-4'} px-2.5 sm:px-4 rounded-lg sm:rounded-xl hover:bg-[#EAE8E6] dark:hover:bg-[#737171] transition-colors w-full`}>
      <div className="flex flex-row justify-between items-center gap-2 sm:gap-4 w-full min-w-0">
        <div className="flex items-center gap-[30px] min-w-0 flex-1 pr-1 sm:pr-4">
          {year && (
            <span className="text-[0.78rem] sm:text-[0.875rem] font-medium text-[#3D3D3D]/80 dark:text-[#F2F0EF]/80 shrink-0 whitespace-nowrap tabular-nums leading-normal flex items-center">
              {year}
            </span>
          )}
          <div className="flex flex-col items-start justify-center min-w-0 flex-1">
            <span className="text-[0.78rem] sm:text-[0.875rem] font-medium text-[#3D3D3D] dark:text-[#F2F0EF] leading-[1.5] sm:leading-[1.6]">
              {displayTitle}
            </span>
            {displaySubtitle && (
              <span className="text-[0.7rem] sm:text-[0.875rem] text-[#3D3D3D]/80 dark:text-[#F2F0EF]/80 leading-[1.5] sm:leading-[1.6] mt-0.5 flex flex-col gap-0.5">
                {displaySubtitle}
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center justify-end gap-2 shrink-0 whitespace-nowrap text-right">
          {displayLocation && (
            <span className="text-[0.78rem] sm:text-[0.875rem] text-[#3D3D3D]/80 dark:text-[#F2F0EF] text-right whitespace-nowrap flex items-center justify-end">
              {displayLocation}
            </span>
          )}
          {isSafeHref(href) && !hideArrow && (
            <span className="ml-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline-flex items-center">
              <ArrowUpRight className="w-4 h-4 text-[#3D3D3D]/40 dark:text-[#F2F0EF]/40" />
            </span>
          )}
        </div>
      </div>
    </div>
  );

  if (isSafeHref(href)) {
    const external = isExternalUrl(href);
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className="block w-full"
      >
        {content}
      </a>
    );
  }
  return <div className="w-full">{content}</div>;
}

import { MapPin, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import type { Language } from '../../../types';
import type { WorkExperienceEntry } from '../types';

export interface WorkExperienceItemProps extends WorkExperienceEntry {
  presentText?: string;
  lang?: Language;
  isExpanded: boolean;
  onToggle: () => void;
}

export const WorkExperienceItem = ({
  year,
  role,
  roleEn,
  company,
  location,
  locationId,
  rightTitle,
  rightTitleEn,
  isPresent,
  presentText = "Present",
  details,
  detailsEn,
  lang = 'id',
  isExpanded,
  onToggle,
}: WorkExperienceItemProps) => {
  const displayRole = lang === 'en' && roleEn ? roleEn : role;
  const displayRightTitle = lang === 'en' && rightTitleEn ? rightTitleEn : rightTitle;
  const displayLocation = lang === 'id' && locationId ? locationId : location;

  return (
    <div
      className={`group flex flex-col p-2.5 sm:p-4 rounded-lg sm:rounded-xl mb-2.5 transition-colors cursor-pointer ${isPresent ? 'bg-[#EAE8E6] dark:bg-[#737171] hover:bg-[#E0DDDB] dark:hover:bg-[#686666]' : 'bg-transparent hover:bg-[#EAE8E6] dark:hover:bg-[#737171]'}`}
      onClick={onToggle}
    >
      <div className="flex items-center w-full">
        {/* Content */}
        <div className="flex flex-1 flex-col sm:flex-row sm:justify-between gap-1.5 sm:gap-0 min-w-0">
          <div className="flex flex-col justify-center py-0.5 sm:py-1 min-w-0">
            <span className="text-[0.825rem] sm:text-[1rem] font-medium text-[#3D3D3D] dark:text-[#F2F0EF] mb-0.5 leading-snug">{company}</span>
            <span className="text-[0.7rem] sm:text-[0.8125rem] text-[#3D3D3D]/80 dark:text-[#F2F0EF]/80 flex flex-col gap-0.5 leading-tight">{displayRole}</span>
          </div>

          <div className="flex flex-col sm:items-end justify-center shrink-0">
            {displayRightTitle && (
              <span className="font-medium text-[0.725rem] sm:text-[0.875rem] text-[#3D3D3D]/90 dark:text-[#F2F0EF]/90 mb-0.5 sm:mb-1 flex flex-col sm:items-end gap-0.5">
                {displayRightTitle}
              </span>
            )}
            {isPresent ? (
              <span className="bg-[#E6E4E3] dark:bg-[#8C8B8B] text-[#3D3D3D] dark:text-[#F2F0EF] text-[0.65rem] sm:text-[0.75rem] font-medium px-2 py-0.5 rounded-md w-fit mb-0.5 sm:mb-1.5">
                {presentText}
              </span>
            ) : year ? (
              <span className="text-[0.7rem] sm:text-[0.8125rem] text-[#3D3D3D]/80 dark:text-[#F2F0EF] mb-0.5 sm:mb-1">
                {year}
              </span>
            ) : null}
            {displayLocation && (
              <div className="flex items-center gap-1 text-[0.65rem] sm:text-[0.8125rem] text-[#3D3D3D]/80 dark:text-[#F2F0EF]">
                <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span>{displayLocation}</span>
              </div>
            )}
          </div>
        </div>
        <div className={`ml-2 sm:ml-4 shrink-0 transition-transform duration-300 opacity-60 group-hover:opacity-100 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}>
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-[#3D3D3D]/40 dark:text-[#F2F0EF]/40" />
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-3 mt-3 text-[0.75rem] sm:text-[0.875rem] text-[#3D3D3D] dark:text-[#F2F0EF] leading-relaxed">
              {lang === 'en' && detailsEn
                ? detailsEn
                : details || "Detail untuk posisi ini akan segera ditambahkan. Tetap terhubung untuk pembaruan lebih lanjut mengenai tanggung jawab dan pencapaian selama periode ini."}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

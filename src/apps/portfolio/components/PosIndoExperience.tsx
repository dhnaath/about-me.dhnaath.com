import { memo, useMemo } from "react";
import { ExternalLink } from "lucide-react";
import type { PosIndoExperienceProps, PosIndoPosition } from "../types";
import { ExperiencePhotoGrid } from "./ExperiencePhotoGrid";
import { ExperienceTimeline } from "./ExperienceTimeline";

export type { PosIndoExperienceProps, PosIndoPosition };

export const PosIndoExperience = memo(function PosIndoExperience({
  company,
  companyLogo,
  positions,
  lang = 'id',
}: PosIndoExperienceProps) {
  const allImages = useMemo(
    () =>
      Array.from(
        new Set(
          positions
            .flatMap((pos) => [pos.image, pos.image2, pos.image3, pos.image4, pos.image5])
            .filter((img): img is string => Boolean(img))
        )
      ),
    [positions]
  );

  return (
    <div className="bg-[#F2F0EF] dark:bg-[#3D3D3D] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {/* Header with Logo and Company */}
      <div className="px-6 py-2.5 sm:py-3 flex justify-between items-center gap-4 dark:bg-[#3D3D3D] transition-colors">
        <div className="flex items-center gap-4 sm:gap-5">
          {companyLogo && (
            <div className="w-24 h-[72px] sm:w-[120px] sm:h-[90px] shrink-0 flex items-center justify-center">
              <img
                src={companyLogo}
                alt={`${company} logo`}
                loading="eager"
                decoding="async"
                className="max-w-full max-h-full object-contain dark:brightness-0 dark:invert dark:opacity-95 dark:hover:opacity-100 transition-all duration-300"
              />
            </div>
          )}
          <div>
            <h3 className="text-xl text-[#222222] dark:text-[#F2F0EF] font-serif whitespace-pre-line">{company}</h3>
          </div>
        </div>
        <a
          href="https://drive.google.com/file/d/1KOLOerblpTaKTIVoJdEpZKFegU5Yg4Kz/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors ml-auto text-[#5B6572] dark:text-[#F2F0EF]/70 hover:text-[#222222] dark:hover:text-[#F2F0EF] flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <ExternalLink size={20} />
        </a>
      </div>

      {/* Images */}
      <div>
        <ExperiencePhotoGrid images={allImages} alt={company} />
        <ExperienceTimeline positions={positions} lang={lang} />
      </div>
    </div>
  );
});

import { Calendar, MapPin } from "lucide-react";
import type { Language } from "../../../types";
import type { TimelinePosition } from "../types";

export type { TimelinePosition };

interface ExperienceTimelineProps {
  positions: TimelinePosition[];
  lang: Language;
}

export function ExperienceTimeline({ positions, lang }: ExperienceTimelineProps) {
  return (
    <div className="px-6 py-6 pt-5 dark:bg-[#3D3D3D]">
      <div className="flex flex-col pb-0">
        {positions.map((pos, index) => (
          <div key={`${pos.title}-${pos.period}-${index}`} className="relative pb-4 last:pb-0">
            {/* Timeline connector */}
            {index !== positions.length - 1 && (
              <div className="absolute left-[0.4375rem] top-[0.875rem] -bottom-[0.875rem] w-[0.125rem] bg-[#3D3D3D] dark:bg-[#F2F0EF] z-0"></div>
            )}

            <div className="flex items-start gap-6">
              {/* Timeline dot */}
              <div className="w-4 h-4 rounded-full border-2 border-[#3D3D3D] dark:border-[#F2F0EF] bg-[#F2F0EF] dark:bg-[#3D3D3D] mt-1.5 shrink-0 relative z-10"></div>

              <div className="flex-1 overflow-hidden">
                <h4 className="text-base mb-1 text-[#222222] dark:text-[#F2F0EF] font-semibold">{pos.title}</h4>

                <div className="flex flex-col gap-1 text-[#5B6572] dark:text-[#F2F0EF]/80 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{pos.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{lang === 'en' && pos.periodEn ? pos.periodEn : pos.period}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

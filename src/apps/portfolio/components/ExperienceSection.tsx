import { memo } from 'react';
import { ExperienceCard } from './ExperienceCard';
import { PosIndoExperience } from './PosIndoExperience';
import { KspNusantaraExperience } from './KspNusantaraExperience';
import type { Language } from '../../../types';
import { experiences, kspNusantaraData, posIndoData } from '../data/experienceData';

interface ExperienceSectionProps {
  lang: Language;
  isCarouselPaused: boolean;
  onTogglePause: () => void;
}

const ExperienceMarqueeTrack = memo(function ExperienceMarqueeTrack({ lang }: { lang: Language }) {
  return (
    <>
      {[...Array(2)].map((_, i) => (
        <div key={`copy-${i}`} className="flex gap-[10pt] min-w-max items-start">
          <div className="w-[138vw] md:w-[550px] experience-scale-mobile">
            <ExperienceCard {...experiences[6]} lang={lang} />
          </div>
          <div className="w-[138vw] md:w-[550px] experience-scale-mobile">
            <ExperienceCard {...experiences[5]} lang={lang} />
          </div>
          <div className="w-[138vw] md:w-[550px] experience-scale-mobile">
            <KspNusantaraExperience {...kspNusantaraData} lang={lang} />
          </div>
          <div className="w-[138vw] md:w-[550px] experience-scale-mobile">
            <PosIndoExperience {...posIndoData} lang={lang} />
          </div>
          <div className="w-[138vw] md:w-[550px] experience-scale-mobile">
            <ExperienceCard {...experiences[1]} lang={lang} />
          </div>
          <div className="w-[138vw] md:w-[550px] experience-scale-mobile">
            <ExperienceCard {...experiences[0]} lang={lang} />
          </div>
          <div className="w-[138vw] md:w-[550px] experience-scale-mobile">
            <ExperienceCard {...experiences[2]} lang={lang} />
          </div>
          <div className="w-[138vw] md:w-[550px] experience-scale-mobile">
            <ExperienceCard {...experiences[4]} lang={lang} />
          </div>
          <div className="w-[138vw] md:w-[550px] experience-scale-mobile">
            <ExperienceCard {...experiences[3]} lang={lang} />
          </div>
          <div className="w-[138vw] md:w-[550px] experience-scale-mobile">
            <ExperienceCard {...experiences[7]} lang={lang} />
          </div>
        </div>
      ))}
    </>
  );
});

export const ExperienceSection = memo(function ExperienceSection({
  lang,
  isCarouselPaused,
  onTogglePause,
}: ExperienceSectionProps) {
  return (
    <section id="experience" className="pt-[15pt] pb-0 bg-transparent w-full">
      <div className="w-full px-[2.5pt] md:px-[10pt]">
        <div className="flex flex-col items-center justify-center gap-1 mt-[7pt] mb-[18pt]">
          <h2 className="text-xl md:text-2xl font-bold text-[#3D3D3D] dark:text-[#F2F0EF]">
            {lang === 'id' ? 'Pengalaman Kerja' : 'Working Experiences'}
          </h2>
          <p className="text-sm font-serif text-[#3D3D3D] dark:text-[#F2F0EF] text-center">
            {lang === 'id'
              ? 'Perjalanan Profesional, Jenjang Karier, dan Kontribusi Strategis'
              : 'Professional Journey, Career Path, and Strategic Contributions'}
          </p>
        </div>

        <div className="relative w-full overflow-hidden flex pt-0 pb-0">
          <div
            className="flex gap-[10pt] px-4 animate-marquee min-w-max group cursor-pointer"
            style={{ animationPlayState: isCarouselPaused ? 'paused' : 'running' }}
            onClick={onTogglePause}
          >
            <ExperienceMarqueeTrack lang={lang} />
          </div>
        </div>
      </div>
    </section>
  );
});

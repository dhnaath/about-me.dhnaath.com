import { memo, useCallback, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DocumentationCard } from './DocumentationCard';
import { useAutoAdvance } from '../../../hooks/useAutoAdvance';
import type { Language } from '../../../types';
import { designGroups, documentation } from '../data/projectsData';

interface ProjectsSectionProps {
  lang: Language;
}

const ProfileQualificationsColumn = memo(function ProfileQualificationsColumn({ lang }: { lang: Language }) {
  const [docPage, setDocPage] = useState(0);

  const advanceDocPage = useCallback(() => {
    setDocPage((prev) => (prev >= Math.max(0, documentation.length - 4) ? 0 : prev + 1));
  }, []);

  const prevDocPage = useCallback(() => {
    setDocPage((prev) => (prev === 0 ? Math.max(0, documentation.length - 4) : prev - 1));
  }, []);

  useAutoAdvance(advanceDocPage, 3000);

  return (
    <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
      <div className="flex flex-col w-full h-full">
        <div className="flex md:hidden flex-col items-center gap-1 mb-[10pt] w-full mt-[10pt]">
          <h2 className="text-xl md:text-2xl font-bold text-[#3D3D3D] dark:text-[#F2F0EF] text-center">
            {lang === 'id' ? 'Kualifikasi Profil' : 'Profile Qualifications'}
          </h2>
          <p className="text-sm font-serif text-[#3D3D3D] dark:text-[#F2F0EF] text-center">
            {lang === 'id' ? (
              <>
                Sertifikasi, Lisensi, Keanggotaan, Kompetensi,
                <span className="md:hidden">
                  <br />
                </span>
                <span className="hidden md:inline"> </span>Keahlian, dan Prestasi.
              </>
            ) : (
              <>
                Certifications, Licenses, Memberships, Competencies,
                <span className="md:hidden">
                  <br />
                </span>
                <span className="hidden md:inline"> </span>Skills, and Achievements.
              </>
            )}
          </p>
        </div>

        <div className="flex justify-center items-center gap-[35pt] mb-6 md:hidden">
          <button
            onClick={prevDocPage}
            className="p-2 rounded-full bg-[#F2F0EF] dark:bg-[#3D3D3D] shadow-md text-[#3D3D3D] dark:text-[#F2F0EF]  flex shrink-0 transition-all hover:scale-105"
            aria-label="Previous page"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={advanceDocPage}
            className="p-2 rounded-full bg-[#F2F0EF] dark:bg-[#3D3D3D] shadow-md text-[#3D3D3D] dark:text-[#F2F0EF]  flex shrink-0 transition-all hover:scale-105"
            aria-label="Next page"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex items-center justify-center gap-4 w-full h-full mt-0">
          <button
            onClick={prevDocPage}
            className="p-3 rounded-full bg-[#F2F0EF] dark:bg-[#3D3D3D] shadow-md text-[#3D3D3D] dark:text-[#F2F0EF]  hidden md:flex shrink-0 transition-all scale-[0.93] hover:scale-100"
            aria-label="Previous page"
          >
            <ChevronLeft size={36} />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-[90%] md:w-full proyek-content-scale">
            {documentation.slice(docPage, docPage + 4).map((doc) => (
              <DocumentationCard key={doc.title} {...doc} compact />
            ))}
          </div>

          <button
            onClick={advanceDocPage}
            className="p-3 rounded-full bg-[#F2F0EF] dark:bg-[#3D3D3D] shadow-md text-[#3D3D3D] dark:text-[#F2F0EF]  hidden md:flex shrink-0 transition-all scale-[0.93] hover:scale-100"
            aria-label="Next page"
          >
            <ChevronRight size={36} />
          </button>
        </div>
      </div>
    </div>
  );
});

const CreativeCraftColumn = memo(function CreativeCraftColumn({ lang }: { lang: Language }) {
  const [designPage, setDesignPage] = useState(0);

  const advanceDesignPage = useCallback(() => {
    setDesignPage((prev) => (prev + 1) % designGroups.length);
  }, []);

  const prevDesignPage = useCallback(() => {
    setDesignPage((prev) => (prev - 1 < 0 ? designGroups.length - 1 : prev - 1));
  }, []);

  useAutoAdvance(advanceDesignPage, 7000);

  return (
    <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
      <div className="flex md:hidden flex-col items-center gap-1 mb-6 w-full mt-[10pt]">
        <h2 className="text-xl md:text-2xl font-bold text-[#3D3D3D] dark:text-[#F2F0EF] text-center">
          {lang === 'id' ? 'Karya Kreatif' : 'Creative Craft'}
        </h2>
        <p className="text-sm font-serif text-[#3D3D3D] dark:text-[#F2F0EF] text-center">
          {lang === 'id' ? (
            <>
              Desain, Ilustrasi, Branding, Tipografi,
              <span className="md:hidden">
                <br />
              </span>
              <span className="hidden md:inline"> </span>Fotografi, dan Eksperimen
            </>
          ) : (
            <>
              Design, Illustration, Branding, Typography,
              <span className="md:hidden">
                <br />
              </span>
              <span className="hidden md:inline"> </span>Photography, and Experiments
            </>
          )}
        </p>
      </div>

      <div className="flex justify-center items-center gap-[35pt] mb-6 md:hidden">
        <button
          onClick={prevDesignPage}
          className="p-2 rounded-full bg-[#F2F0EF] dark:bg-[#3D3D3D] shadow-md text-[#3D3D3D] dark:text-[#F2F0EF]  flex shrink-0 transition-all hover:scale-105"
          aria-label="Previous page"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={advanceDesignPage}
          className="p-2 rounded-full bg-[#F2F0EF] dark:bg-[#3D3D3D] shadow-md text-[#3D3D3D] dark:text-[#F2F0EF]  flex shrink-0 transition-all hover:scale-105"
          aria-label="Next page"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="flex items-center justify-center gap-4 w-full h-full mt-0">
        <button
          onClick={prevDesignPage}
          className="p-3 rounded-full bg-[#F2F0EF] dark:bg-[#3D3D3D] shadow-md text-[#3D3D3D] dark:text-[#F2F0EF]  hidden md:flex shrink-0 transition-all scale-[0.93] hover:scale-100"
          aria-label="Previous design"
        >
          <ChevronLeft size={36} />
        </button>
        <div className="flex flex-col justify-center gap-[5pt] w-[85%] md:w-full mx-auto aspect-[1000/1414] md:aspect-auto md:h-full proyek-content-scale">
          {designGroups[designPage].map((design, index) => (
            <div
              key={`${design.title}-${index}`}
              className="w-full flex-1 min-h-0 relative animate-float-random"
              style={{ animationDelay: design.delay }}
            >
              <img
                src={design.image}
                alt={design.title}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-contain filter drop-shadow-xl pointer-events-none select-none"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
          ))}
        </div>

        <button
          onClick={advanceDesignPage}
          className="p-3 rounded-full bg-[#F2F0EF] dark:bg-[#3D3D3D] shadow-md text-[#3D3D3D] dark:text-[#F2F0EF]  hidden md:flex shrink-0 transition-all scale-[0.93] hover:scale-100"
          aria-label="Next design"
        >
          <ChevronRight size={36} />
        </button>
      </div>
    </div>
  );
});

export const ProjectsSection = memo(function ProjectsSection({ lang }: ProjectsSectionProps) {
  return (
    <section id="proyek" className="pt-[50pt] pb-[0pt] bg-transparent w-full">
      <div className="w-full px-[2.5pt] md:px-[10pt]">
        <div id="documentation" className="relative max-w-[92rem] mx-auto px-4 md:px-8">
          <div className="hidden md:flex w-full gap-[calc(2rem+50pt)] mb-6 mt-0">
            <div className="flex flex-col items-center gap-1 w-1/2">
              <h2 className="text-xl md:text-2xl font-bold text-[#3D3D3D] dark:text-[#F2F0EF] text-center">
                {lang === 'id' ? 'Kualifikasi Profil' : 'Profile Qualifications'}
              </h2>
              <p className="text-sm font-serif text-[#3D3D3D] dark:text-[#F2F0EF] text-center">
                {lang === 'id' ? (
                  <>
                    Sertifikasi, Lisensi, Keanggotaan, Kompetensi,
                    <span className="md:hidden">
                      <br />
                    </span>
                    <span className="hidden md:inline"> </span>Keahlian, dan Prestasi.
                  </>
                ) : (
                  <>
                    Certifications, Licenses, Memberships, Competencies,
                    <span className="md:hidden">
                      <br />
                    </span>
                    <span className="hidden md:inline"> </span>Skills, and Achievements.
                  </>
                )}
              </p>
            </div>
            <div className="flex flex-col items-center gap-1 w-1/2">
              <h2 className="text-xl md:text-2xl font-bold text-[#3D3D3D] dark:text-[#F2F0EF] text-center">
                {lang === 'id' ? 'Karya Kreatif' : 'Creative Craft'}
              </h2>
              <p className="text-sm font-serif text-[#3D3D3D] dark:text-[#F2F0EF] text-center">
                {lang === 'id' ? (
                  <>
                    Desain, Ilustrasi, Branding, Tipografi,
                    <span className="md:hidden">
                      <br />
                    </span>
                    <span className="hidden md:inline"> </span>Fotografi, dan Eksperimen
                  </>
                ) : (
                  <>
                    Design, Illustration, Branding, Typography,
                    <span className="md:hidden">
                      <br />
                    </span>
                    <span className="hidden md:inline"> </span>Photography, and Experiments
                  </>
                )}
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-stretch w-full gap-[calc(2rem+50pt)]">
            <ProfileQualificationsColumn lang={lang} />
            <CreativeCraftColumn lang={lang} />
          </div>
        </div>
      </div>
    </section>
  );
});

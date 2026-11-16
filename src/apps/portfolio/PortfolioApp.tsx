import { useCallback, useState } from 'react';
import { FloatingDocuments } from '../../components/shared/FloatingDocuments';
import { useAppContext } from '../../context/AppContext';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AcademicSection } from './components/AcademicSection';

export default function PortfolioApp() {
  const { lang } = useAppContext();
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);

  const toggleCarouselPause = useCallback(() => {
    setIsCarouselPaused((prev) => !prev);
  }, []);

  return (
    <div className="min-h-screen bg-transparent font-sans">
      <div className="mobile-scale-main w-full flex flex-col items-center">
        <ExperienceSection
          lang={lang}
          isCarouselPaused={isCarouselPaused}
          onTogglePause={toggleCarouselPause}
        />
        <ProjectsSection lang={lang} />
        <AcademicSection
          lang={lang}
          isCarouselPaused={isCarouselPaused}
          onTogglePause={toggleCarouselPause}
        />
      </div>
      <FloatingDocuments />
    </div>
  );
}

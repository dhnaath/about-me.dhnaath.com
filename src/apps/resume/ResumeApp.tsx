import { useCallback, useState } from 'react';
import { motion } from 'motion/react';
import { FloatingDocuments } from '../../components/shared/FloatingDocuments';
import { useAppContext } from '../../context/AppContext';
import { ResumeContent } from './components/ResumeContent';
import { ResumeSidebar } from './components/ResumeSidebar';
import { resumeData } from './data/resumeData';
import { resumeTranslations } from './data/resumeTranslations';

export default function ResumeApp() {
  const { lang } = useAppContext();
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);
  const [expandedWorkKey, setExpandedWorkKey] = useState<string | null>(null);

  const t = resumeTranslations[lang];

  const handleSelectPage = useCallback((nextPage: number) => {
    setPage(([currentPage]) => [nextPage, nextPage > currentPage ? 1 : -1]);
  }, []);

  const handleToggleWorkKey = useCallback((key: string) => {
    setExpandedWorkKey((prev) => (prev === key ? null : key));
  }, []);

  return (
    <div className="flex w-full min-h-screen bg-transparent dark:bg-transparent font-calibri">
      {/* Main Content Area */}
      <div className="flex-1 lg:h-screen lg:overflow-y-auto [&::-webkit-scrollbar]:hidden relative">
        <FloatingDocuments />

        <div className="w-full flex flex-col items-center z-10 px-2 sm:px-5 lg:px-10 pt-4 pb-8 sm:py-5 lg:py-10 min-h-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="paper-scale-mobile w-full max-w-[56.25rem] h-[88.375rem] sm:min-h-[88.375rem] lg:h-[88.375rem] rounded-[2.5rem] shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] flex flex-row overflow-hidden transition-colors duration-300 transform-gpu bg-[#F2F0EF] dark:bg-[#3D3D3D]"
          >
            <div className="flex flex-row w-full h-full overflow-hidden rounded-[2.5rem]">
              <ResumeSidebar
                sidebar={resumeData.sidebar}
                t={t}
                page={page}
                onSelectPage={handleSelectPage}
              />

              <ResumeContent
                data={resumeData}
                t={t}
                lang={lang}
                page={page}
                direction={direction}
                expandedWorkKey={expandedWorkKey}
                onToggleWorkKey={handleToggleWorkKey}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
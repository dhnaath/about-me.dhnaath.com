import { useCallback, useMemo } from 'react';
import { motion } from 'motion/react';
import { FloatingDocuments } from '../../components/shared/FloatingDocuments';
import { useAppContext } from '../../context/AppContext';
import type { AppId } from '../../types';
import { formatLocalizedLetterDate } from '../../utils/date';
import { LetterBody } from './components/LetterBody';

export default function CoverLetterApp() {
  const { lang, setActiveApp } = useAppContext();
  const formattedDate = useMemo(() => formatLocalizedLetterDate(lang), [lang]);

  const handleInlineNavigate = useCallback(
    (app: AppId) => {
      setActiveApp(app);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [setActiveApp]
  );

  return (
    <>
      <div className="flex w-full min-h-screen bg-transparent dark:bg-transparent font-times">
        {/* Main Content Area */}
        <div className="flex-1 lg:h-screen lg:overflow-y-auto [&::-webkit-scrollbar]:hidden relative">
          <FloatingDocuments />

          <div className="w-full flex flex-col items-center z-10 px-2 sm:px-10 lg:px-20 pt-4 pb-8 sm:py-10 lg:py-20 min-h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="paper-scale-mobile w-full max-w-[56.25rem] min-h-[88.375rem] lg:h-[88.375rem] p-6 sm:p-8 lg:p-[3rem] rounded-[2.5rem] shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] transition-colors duration-300 transform-gpu bg-[#F2F0EF] dark:bg-[#3D3D3D]"
            >
              <LetterBody
                lang={lang}
                formattedDate={formattedDate}
                onNavigate={handleInlineNavigate}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

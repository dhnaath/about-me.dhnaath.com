import { Suspense, lazy } from 'react';
import { Sun, Moon } from 'lucide-react';

import { AppProvider, useAppContext } from './context/AppContext';
import PortfolioApp from './apps/portfolio/PortfolioApp';
import { ErrorBoundary } from './components/shared/ErrorBoundary';

const ResumeApp = lazy(() => import('./apps/resume/ResumeApp'));
const CoverLetterApp = lazy(() => import('./apps/cover-letter/CoverLetterApp'));
const PersonalityTraitsApp = lazy(() => import('./apps/personality-traits/PersonalityTraitsApp'));

const FLOATING_BUTTON_CLASS =
  'w-[50.4px] h-[56px] md:w-[72px] md:h-[80px] rounded-l-[30px] md:rounded-l-[45px] rounded-r-none border-none flex items-center justify-center text-[0.875rem] md:text-[1.125rem] font-normal transition-all duration-300 opacity-100 cursor-pointer pointer-events-auto bg-[#F2F0EF] dark:bg-[#3D3D3D] text-[#3D3D3D] dark:text-[#F2F0EF]';

function AppShell() {
  const { activeApp, lang, toggleLang, theme, toggleTheme } = useAppContext();

  return (
    <div className="flex w-full min-h-screen bg-[#EDE8D0] dark:bg-[#BAB095]">
      <div className="flex-1 relative min-w-0 flex flex-col">
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[60] flex flex-col gap-[0.875rem] md:gap-5 pointer-events-none origin-right scale-[0.675] md:scale-100 items-end pb-[280px] md:pb-[400px]">
          <button
            onClick={toggleLang}
            className={FLOATING_BUTTON_CLASS}
            aria-label="Toggle language"
          >
            {lang === 'en' ? 'EN' : 'ID'}
          </button>

          <button
            onClick={toggleTheme}
            className={FLOATING_BUTTON_CLASS}
            aria-label="Toggle theme"
          >
            {theme === 'flat-black' ? (
              <Moon className="w-5 h-5 md:w-6 md:h-6" />
            ) : (
              <Sun className="w-5 h-5 md:w-6 md:h-6" />
            )}
          </button>
        </div>

        <ErrorBoundary resetKey={activeApp}>
          <Suspense
            fallback={
              <div className="flex-1 flex items-center justify-center h-screen bg-[#EDE8D0] dark:bg-[#BAB095]">
                <div className="w-8 h-8 border-4 border-black/20 dark:border-white/20 border-t-black dark:border-t-white rounded-full animate-spin"></div>
              </div>
            }
          >
            {activeApp === 'resume' && <ResumeApp />}
            {activeApp === 'portfolio' && <PortfolioApp />}
            {activeApp === 'cover-letter' && <CoverLetterApp />}
            {activeApp === 'personality-traits' && <PersonalityTraitsApp />}
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppShell />
    </AppProvider>
  );
}

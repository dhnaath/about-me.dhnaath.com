import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { useAppNavigation } from '../hooks/useAppNavigation';
import type { AppId, DocTarget, Language, ShowcaseTarget, ThemeMode } from '../types';

export interface AppContextValue {
  activeApp: AppId;
  docTarget: DocTarget;
  showcaseTarget: ShowcaseTarget;
  setActiveApp: (app: AppId) => void;
  onDocClick: () => void;
  onShowcaseClick: () => void;
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const {
    activeApp,
    docTarget,
    showcaseTarget,
    setActiveApp,
    handleDocClick,
    handleShowcaseClick,
  } = useAppNavigation('portfolio');

  const [lang, setLang] = useState<Language>('en');
  const [theme, setTheme] = useState<ThemeMode>('flat-white');

  useEffect(() => {
    if (theme === 'flat-black') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'en' ? 'id' : 'en'));
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'flat-black' ? 'flat-white' : 'flat-black'));
  }, []);

  const value = useMemo<AppContextValue>(
    () => ({
      activeApp,
      docTarget,
      showcaseTarget,
      setActiveApp,
      onDocClick: handleDocClick,
      onShowcaseClick: handleShowcaseClick,
      lang,
      setLang,
      toggleLang,
      theme,
      setTheme,
      toggleTheme,
    }),
    [
      activeApp,
      docTarget,
      showcaseTarget,
      setActiveApp,
      handleDocClick,
      handleShowcaseClick,
      lang,
      toggleLang,
      theme,
      toggleTheme,
    ]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext(): AppContextValue {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}

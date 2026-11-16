import { useCallback, useState } from 'react';
import type { AppId, DocTarget, ShowcaseTarget } from '../types';

export function useAppNavigation(initialApp: AppId = 'portfolio') {
  const [activeApp, setActiveAppState] = useState<AppId>(initialApp);
  const [docTarget, setDocTarget] = useState<DocTarget>(() =>
    initialApp === 'resume' ? 'cover-letter' : 'resume'
  );
  const [showcaseTarget, setShowcaseTarget] = useState<ShowcaseTarget>(() =>
    initialApp === 'portfolio' ? 'personality-traits' : 'portfolio'
  );

  const setActiveApp = useCallback((app: AppId) => {
    if (app === 'resume') {
      setDocTarget('cover-letter');
    } else if (app === 'cover-letter') {
      setDocTarget('resume');
    } else if (app === 'portfolio') {
      setShowcaseTarget('personality-traits');
    } else if (app === 'personality-traits') {
      setShowcaseTarget('portfolio');
    }
    setActiveAppState(app);
  }, []);

  const handleDocClick = useCallback(() => {
    setActiveApp(docTarget);
  }, [docTarget, setActiveApp]);

  const handleShowcaseClick = useCallback(() => {
    setActiveApp(showcaseTarget);
  }, [showcaseTarget, setActiveApp]);

  return {
    activeApp,
    docTarget,
    showcaseTarget,
    setActiveApp,
    handleDocClick,
    handleShowcaseClick,
  };
}

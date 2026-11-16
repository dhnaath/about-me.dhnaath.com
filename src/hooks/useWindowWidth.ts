import { useState, useEffect } from 'react';

export function useWindowWidth(defaultWidth = 1024, enabled = true): number {
  const [windowWidth, setWindowWidth] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth : defaultWidth
  );

  useEffect(() => {
    if (!enabled) return;

    const handleResize = () => {
      const nextWidth = window.innerWidth;
      setWindowWidth((prev) => (prev === nextWidth ? prev : nextWidth));
    };

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [enabled]);

  return windowWidth;
}

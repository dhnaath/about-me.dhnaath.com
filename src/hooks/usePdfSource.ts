import { useState, useEffect, useCallback } from 'react';
import { pdfjs } from 'react-pdf';

// Configure PDF.js worker once for all PDF viewers
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface UsePdfSourceOptions {
  enabled?: boolean;
  errorLabel?: string;
}

export function usePdfSource(url: string, options: UsePdfSourceOptions = {}) {
  const { enabled = true, errorLabel = 'PDF' } = options;
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pdfData, setPdfData] = useState<Blob | null>(null);
  const [pdfError, setPdfError] = useState<boolean>(false);

  useEffect(() => {
    if (!enabled) {
      setPdfData(null);
      setNumPages(null);
      setPdfError(false);
      return;
    }

    if (!url) {
      setPdfData(null);
      setNumPages(null);
      setPdfError(true);
      return;
    }

    let isMounted = true;
    const abortController = new AbortController();
    setPdfError(false);
    setPdfData(null);
    setNumPages(null);

    // Safely pre-fetch the PDF to avoid unhandled pdf.js exceptions
    fetch(url, { signal: abortController.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP ${response.status} while loading ${errorLabel}`);
        }
        return response.blob();
      })
      .then((blob) => {
        if (isMounted) setPdfData(blob);
      })
      .catch((error: unknown) => {
        if (error instanceof Error && error.name === 'AbortError') return;
        console.error(`Failed to fetch ${errorLabel}:`, url, error);
        if (isMounted) setPdfError(true);
      });

    return () => {
      isMounted = false;
      abortController.abort();
    };
  }, [url, enabled, errorLabel]);

  const onDocumentLoadSuccess = useCallback(({ numPages: loadedPages }: { numPages: number }) => {
    setNumPages(loadedPages);
  }, []);

  const onDocumentLoadError = useCallback(
    (error: unknown) => {
      console.error(`Failed to load ${errorLabel} document:`, error);
      setPdfError(true);
    },
    [errorLabel]
  );

  const onDocumentSourceError = useCallback(
    (error: unknown) => {
      console.error(`Invalid ${errorLabel} source:`, error);
      setPdfError(true);
    },
    [errorLabel]
  );

  return {
    numPages,
    pdfData,
    pdfError,
    onDocumentLoadSuccess,
    onDocumentLoadError,
    onDocumentSourceError,
  };
}

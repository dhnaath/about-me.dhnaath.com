import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { usePdfSource } from '../../../hooks/usePdfSource';
import { useWindowWidth } from '../../../hooks/useWindowWidth';

interface TranscriptImageProps {
  src: string;
  alt: string;
}

export function TranscriptImage({ src, alt }: TranscriptImageProps) {
  const isPdf = src.toLowerCase().endsWith('.pdf');
  const windowWidth = useWindowWidth(840, isPdf);
  const {
    numPages,
    pdfData,
    pdfError,
    onDocumentLoadSuccess,
    onDocumentLoadError,
    onDocumentSourceError,
  } = usePdfSource(src, { enabled: isPdf, errorLabel: 'PDF' });

  if (isPdf) {
    if (pdfError) {
      return (
        <div className="w-full flex justify-center relative -mt-[15pt]">
          <div className="text-red-500 py-10 text-center font-serif text-lg flex flex-col gap-2">
            <span>Failed to load PDF.</span>
            <span className="text-sm text-red-400">Please ensure the PDF is successfully uploaded to WordPress and CORS is enabled.</span>
          </div>
        </div>
      );
    }

    if (!pdfData) {
      return (
        <div className="w-full flex justify-center relative -mt-[15pt]">
          <div className="text-[#5B6572] py-10 font-serif italic text-lg text-center">
            Loading Document...
          </div>
        </div>
      );
    }

    const pageWidth = Math.max(240, Math.min(windowWidth - 40, 800));

    return (
      <div className="w-full flex flex-col items-center relative -mt-[15pt] overflow-hidden px-4 md:px-0">
        <Document
          file={pdfData}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
          onSourceError={onDocumentSourceError}
          loading={<div className="text-[#5B6572] py-10 font-serif italic text-lg">Loading Pages...</div>}
          className="max-w-full drop-shadow-lg"
        >
          {Array.from({ length: numPages || 0 }, (_, index) => (
            <div key={`page_${index + 1}`} className="mb-4 max-w-full overflow-hidden bg-white border-2 border-[#5B6572]/20 rounded-[2rem] shadow-sm">
              <Page
                pageNumber={index + 1}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                width={pageWidth}
                className="max-w-full flex justify-center p-4 md:p-8"
              />
            </div>
          ))}
        </Document>
      </div>
    );
  }

  return (
    <div className="w-[85%] md:w-full mx-auto flex justify-center relative items-start -mt-[15pt]">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="w-full max-h-[43.75rem] object-contain mix-blend-multiply pointer-events-none select-none"
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
      />
    </div>
  );
}

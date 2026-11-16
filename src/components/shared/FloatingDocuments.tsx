import { memo, type CSSProperties, type ReactNode } from "react";
import { motion } from "motion/react";
import { useAppContext } from "../../context/AppContext";
import { openSafeUrl } from "../../utils/url";

type HandleStyle = CSSProperties & {
  '--card-w-m': string;
  '--card-h-m': string;
  '--card-w-d': string;
  '--card-h-d': string;
  '--handle-radius-mobile': string;
  '--handle-radius-desktop': string;
};

interface FloatingDocumentCardProps {
  title: string;
  pdfUrl?: string;
  handleHeight?: string;
  handleWidth?: string;
  bgColor?: string;
  handleContent?: ReactNode;
  onClickAction?: () => void;
  position?: 'left' | 'right';
}

function FloatingDocumentCard({
  title,
  pdfUrl,
  handleHeight = "225px",
  handleWidth = "72px",
  bgColor,
  handleContent,
  onClickAction,
  position = 'left',
}: FloatingDocumentCardProps) {
  const isRight = position === 'right';

  const parsedHeight = Number.parseInt(handleHeight, 10);
  const parsedWidth = Number.parseInt(handleWidth, 10);
  const heightVal = Number.isNaN(parsedHeight) ? 225 : parsedHeight;
  const widthVal = Number.isNaN(parsedWidth) ? 72 : parsedWidth;
  const mHeight = heightVal * 0.70;
  const mWidth = widthVal * 0.70;

  const hasCustomBg = Boolean(bgColor);
  const bgClass = hasCustomBg ? '' : 'bg-[#F2F0EF] dark:bg-[#3D3D3D]';
  const textClass = hasCustomBg ? 'text-[#FFFFFF]' : 'text-[#3D3D3D] dark:text-[#F2F0EF]';

  const cardStyle: HandleStyle = {
    ...(hasCustomBg ? { backgroundColor: bgColor, borderColor: bgColor } : {}),
    '--card-w-m': `${mWidth}px`,
    '--card-h-m': `${mHeight}px`,
    '--card-w-d': `${widthVal}px`,
    '--card-h-d': `${heightVal}px`,
    '--handle-radius-mobile': isRight ? '30px 0 0 30px' : '0 30px 30px 0',
    '--handle-radius-desktop': isRight ? '45px 0 0 45px' : '0 45px 45px 0',
  };

  return (
    <motion.div
      onClick={() => {
        if (onClickAction) {
          onClickAction();
        } else if (pdfUrl) {
          openSafeUrl(pdfUrl);
        }
      }}
      className={`w-[var(--card-w-m)] h-[var(--card-h-m)] md:w-[var(--card-w-d)] md:h-[var(--card-h-d)] flex items-center justify-center cursor-pointer border-none pointer-events-auto transition-all select-none ${isRight ? 'border-r-0' : 'border-l-0'} rounded-[var(--handle-radius-mobile)] md:rounded-[var(--handle-radius-desktop)] ${bgClass}`}
      style={cardStyle}
      whileHover={{ scaleX: 1.05, originX: isRight ? 1 : 0 }}
      whileTap={{ scaleX: 0.95, originX: isRight ? 1 : 0 }}
    >
      {handleContent ? (
        handleContent
      ) : (
        <div
          className={`${textClass} font-sans font-semibold text-[0.75rem] md:text-lg tracking-widest whitespace-nowrap italic pointer-events-none select-none`}
          style={{
            writingMode: "vertical-rl",
            transform: isRight ? "rotate(0deg)" : "rotate(180deg)",
          }}
        >
          {title}
        </div>
      )}
    </motion.div>
  );
}

export const FloatingDocuments = memo(function FloatingDocuments() {
  const { docTarget, showcaseTarget, onDocClick, onShowcaseClick } = useAppContext();

  const docTitle = docTarget === 'cover-letter' ? 'Cover Letter' : 'Curriculum Vitae';
  const showcaseTitle = showcaseTarget === 'personality-traits' ? 'Personality' : 'Portfolio';

  return (
    <>
      {/* Left side documents */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-[0.875rem] md:gap-5 pointer-events-none origin-left scale-[0.675] md:scale-100">
        <div>
          <FloatingDocumentCard
            title={docTitle}
            handleHeight="222px"
            onClickAction={onDocClick}
          />
        </div>
        <div>
          <FloatingDocumentCard
            title={showcaseTitle}
            handleHeight="178px"
            onClickAction={onShowcaseClick}
          />
        </div>

        <div>
          <FloatingDocumentCard
            title="LinkedIn"
            pdfUrl="https://linkedin.com/in/dhnaath"
            handleHeight="80px"
            handleWidth="72px"
            bgColor="#0a66c2"
            handleContent={
              <div className="flex w-full h-full items-center justify-center -translate-x-[2px] md:-translate-x-[4px]">
                <img
                  src="https://dhnaath.com/wp-content/uploads/2026/08/icons8-linkedin-50.png"
                  alt="LinkedIn"
                  decoding="async"
                  className="w-8 h-8 md:w-10 md:h-10 object-contain"
                />
              </div>
            }
          />
        </div>
      </div>

      {/* Right side documents */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-[0.875rem] md:gap-5 pointer-events-none origin-right scale-[0.675] md:scale-100">
        <div className="h-[126px] md:h-[180px]" />

        <div>
          <FloatingDocumentCard
            position="right"
            title="Mail"
            pdfUrl="mailto:contact@dhnaath.com"
            handleHeight="80px"
            handleWidth="72px"
            bgColor="#459AF5"
            handleContent={
              <div className="flex w-full h-full items-center justify-center translate-x-[2px] md:translate-x-[4px]">
                <img
                  src="https://dhnaath.com/wp-content/uploads/2026/08/icons8-mail-50.png"
                  alt="Mail"
                  decoding="async"
                  className="w-8 h-8 md:w-10 md:h-10 object-contain"
                />
              </div>
            }
          />
        </div>

        <div>
          <FloatingDocumentCard
            position="right"
            title="WhatsApp"
            pdfUrl="https://wa.me/6285161629923"
            handleHeight="80px"
            handleWidth="72px"
            bgColor="#25D366"
            handleContent={
              <div className="flex w-full h-full items-center justify-center translate-x-[2px] md:translate-x-[4px]">
                <img
                  src="https://dhnaath.com/wp-content/uploads/2026/08/icons8-whatsapp-50.png"
                  alt="WhatsApp"
                  decoding="async"
                  className="w-8 h-8 md:w-10 md:h-10 object-contain"
                />
              </div>
            }
          />
        </div>
      </div>
    </>
  );
});

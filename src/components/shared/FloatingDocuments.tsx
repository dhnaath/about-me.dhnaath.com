import { motion } from "motion/react";
import React from "react";

function FloatingDocumentCard({ 
  title, 
  pdfUrl,
  handleHeight = "225px",
  handleWidth = "72px",
  bgColor,
  handleContent,
  onClickAction,
  position = 'left'
}: { 
  title: string, 
  pdfUrl?: string,
  handleHeight?: string,
  handleWidth?: string,
  bgColor?: string,
  handleContent?: React.ReactNode,
  onClickAction?: () => void,
  position?: 'left' | 'right'
}) {
  const isRight = position === 'right';
  const id = title.replace(/[^a-zA-Z0-9]/g, '');
  
  const heightVal = parseInt(handleHeight);
  const widthVal = parseInt(handleWidth);
  const mHeight = heightVal * 0.70;
  const mWidth = widthVal * 0.70;
  
  const hasCustomBg = !!bgColor;
  const bgClass = hasCustomBg ? '' : 'bg-[#F2F0EF] dark:bg-[#3D3D3D]';
  const textClass = hasCustomBg ? 'text-[#FFFFFF]' : 'text-[#3D3D3D] dark:text-[#F2F0EF]';
  
  return (
    <>
      <style>{`
        .card-dynamic-${id} {
          width: ${mWidth}px;
          height: ${mHeight}px;
        }
        @media (min-width: 768px) {
          .card-dynamic-${id} {
            width: ${widthVal}px;
            height: ${heightVal}px;
          }
        }
      `}</style>
      <motion.div 
        onClick={() => {
          if (onClickAction) {
            onClickAction();
          } else if (pdfUrl) {
            window.open(pdfUrl, '_blank');
          }
        }}
        className={`card-dynamic-${id} flex items-center justify-center cursor-pointer border-none pointer-events-auto transition-all select-none ${isRight ? 'border-r-0' : 'border-l-0'} rounded-[var(--handle-radius-mobile)] md:rounded-[var(--handle-radius-desktop)] ${bgClass}`}
        style={{ 
          ...(hasCustomBg ? { backgroundColor: bgColor, borderColor: bgColor } : {}),
          '--handle-radius-mobile': isRight ? '30px 0 0 30px' : '0 30px 30px 0',
          '--handle-radius-desktop': isRight ? '45px 0 0 45px' : '0 45px 45px 0',
        } as React.CSSProperties}
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
              transform: isRight ? "rotate(0deg)" : "rotate(180deg)"
            }}
          >
            {title}
          </div>
        )}
      </motion.div>
    </>
  );
}

let globalDocTarget: 'resume' | 'cover-letter' = 'resume';
let globalShowcaseTarget: 'portfolio' | 'personality-traits' = 'portfolio';

export function updateGlobalTargets(app: 'resume' | 'portfolio' | 'cover-letter' | 'personality-traits') {
  if (app === 'resume') {
    globalDocTarget = 'cover-letter';
  } else if (app === 'cover-letter') {
    globalDocTarget = 'resume';
  } else if (app === 'portfolio') {
    globalShowcaseTarget = 'personality-traits';
  } else if (app === 'personality-traits') {
    globalShowcaseTarget = 'portfolio';
  }
}

export function FloatingDocuments({ 
  activeApp, 
  setActiveApp,
  docTarget,
  showcaseTarget,
  onDocClick,
  onShowcaseClick
}: { 
  activeApp?: 'resume' | 'portfolio' | 'cover-letter' | 'personality-traits',
  setActiveApp?: (app: 'resume' | 'portfolio' | 'cover-letter' | 'personality-traits') => void,
  docTarget?: 'resume' | 'cover-letter',
  showcaseTarget?: 'portfolio' | 'personality-traits',
  onDocClick?: () => void,
  onShowcaseClick?: () => void,
  lastStaticDoc?: 'resume' | 'cover-letter'
}) {
  if (activeApp) {
    updateGlobalTargets(activeApp);
  }

  const currentDocTarget = docTarget || globalDocTarget;
  const currentShowcaseTarget = showcaseTarget || globalShowcaseTarget;

  const app1 = {
    id: currentDocTarget,
    title: currentDocTarget === 'cover-letter' ? 'Cover Letter' : 'Curriculum Vitae'
  };

  const app2 = {
    id: currentShowcaseTarget,
    title: currentShowcaseTarget === 'personality-traits' ? 'Personality' : 'Portfolio'
  };

  const handleApp1Click = () => {
    if (onDocClick) {
      onDocClick();
    } else if (setActiveApp) {
      const nextTarget = currentDocTarget;
      updateGlobalTargets(nextTarget);
      setActiveApp(nextTarget);
    }
  };

  const handleApp2Click = () => {
    if (onShowcaseClick) {
      onShowcaseClick();
    } else if (setActiveApp) {
      const nextTarget = currentShowcaseTarget;
      updateGlobalTargets(nextTarget);
      setActiveApp(nextTarget);
    }
  };

  return (
    <>
      {/* Left side documents */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-[0.875rem] md:gap-5 pointer-events-none origin-left scale-[0.675] md:scale-100">
        <div>
          <FloatingDocumentCard 
            title={app1.title} 
            handleHeight="222px"
            onClickAction={handleApp1Click}
          />
        </div>
        <div>
          <FloatingDocumentCard 
            title={app2.title} 
            handleHeight="178px"
            onClickAction={handleApp2Click}
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
                  className="w-8 h-8 md:w-10 md:h-10 object-contain"
                />
              </div>
            }
          />
        </div>
      </div>


    </>
  );
}

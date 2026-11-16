import { memo, useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { isSafeHref } from '../../../utils/url';
import type { FlipbookCardProps } from '../types';

export const FlipbookCard = memo(function FlipbookCard({
  category,
  title,
  content,
  darkContent,
  darkImage,
  darkImages,
  imageClassName,
  link,
  customIcon,
  topLeftIcon,
  topLeftLink,
  disableFlip,
  disableSlide,
  lightMode,
  slidingBgColor,
  slidingTextColor,
}: FlipbookCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isInView, setIsInView] = useState(
    () => typeof IntersectionObserver === 'undefined'
  );
  const [phase, setPhase] = useState<'idle' | 'spill' | 'text' | 'revert'>('idle');
  const [currentDirection, setCurrentDirection] = useState<'left' | 'right' | 'up' | 'down'>('left');
  const [revertDirection, setRevertDirection] = useState<'left' | 'right' | 'up' | 'down'>('right');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const darkImagesLength = darkImages?.length || 0;
  const titleText = typeof title === 'string' ? title : category;

  useEffect(() => {
    if (disableSlide || typeof IntersectionObserver === 'undefined') return;
    const node = cardRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: '200px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [disableSlide]);

  useEffect(() => {
    if (disableSlide || !isInView) {
      setPhase('idle');
      setCurrentImageIndex(0);
      return;
    }

    let isMounted = true;
    let activeTimerId: number | null = null;

    const sleep = (ms: number) =>
      new Promise<void>((resolve) => {
        activeTimerId = window.setTimeout(() => {
          activeTimerId = null;
          resolve();
        }, ms);
      });

    const initialDelay = Math.random() * 2000;
    const directions: ('left' | 'right' | 'up' | 'down')[] = ['left', 'right', 'up', 'down'];

    const run = async () => {
      await sleep(initialDelay);
      while (isMounted) {
        setPhase('idle');
        setCurrentImageIndex(0);
        // Randomize direction before each animation cycle
        setCurrentDirection(directions[Math.floor(Math.random() * directions.length)]);
        setRevertDirection(directions[Math.floor(Math.random() * directions.length)]);

        // Wait in idle for 5.5s
        await sleep(5500);
        if (!isMounted) break;

        setPhase('spill');
        // Slide animation duration
        await sleep(1200);
        if (!isMounted) break;

        setPhase('text');

        if (darkImagesLength > 0) {
          // Hold first image for 6 seconds
          await sleep(6000);
          if (!isMounted) break;

          for (let i = 1; i < darkImagesLength; i++) {
            setCurrentImageIndex(i);
            // Hold subsequent images for 6 seconds as well
            await sleep(6000);
            if (!isMounted) break;
          }
        } else {
          // Hold short paragraph for 6 seconds
          await sleep(6000);
        }

        if (!isMounted) break;

        setPhase('revert');
        // Revert animation duration
        await sleep(1000);
      }
    };

    run();
    return () => {
      isMounted = false;
      if (activeTimerId !== null) {
        window.clearTimeout(activeTimerId);
      }
    };
  }, [darkImagesLength, disableSlide, isInView]);

  const getInitialPosition = () => {
    switch (currentDirection) {
      case 'left':
        return { x: '-100%', y: '0%' };
      case 'right':
        return { x: '100%', y: '0%' };
      case 'up':
        return { x: '0%', y: '100%' };
      case 'down':
        return { x: '0%', y: '-100%' };
    }
  };

  const getRevertPosition = () => {
    switch (revertDirection) {
      case 'left':
        return { x: '-100%', y: '0%' };
      case 'right':
        return { x: '100%', y: '0%' };
      case 'up':
        return { x: '0%', y: '100%' };
      case 'down':
        return { x: '0%', y: '-100%' };
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative w-full h-[18.125rem] [perspective:1500px] ${!disableFlip ? 'cursor-pointer' : ''}`}
      onClick={() => {
        if (!disableFlip) setIsFlipped(!isFlipped);
      }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        className={`w-full h-full transition-all duration-700 [transform-style:preserve-3d] ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* Front Face (Cover) */}
        <div className="absolute w-full h-full bg-[#F2F0EF] dark:bg-[#3D3D3D] rounded-[2rem] transition-shadow duration-300 p-8 flex flex-col justify-center items-center text-center [backface-visibility:hidden] overflow-hidden shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]">
          {/* Sliding Background Element */}
          <motion.div
            className={`absolute inset-0 z-10 ${slidingBgColor ? '' : 'bg-[#F2F0EF] dark:bg-[#3D3D3D]'}`}
            style={{ backgroundColor: slidingBgColor }}
            initial={false}
            animate={{
              x:
                phase === 'spill' || phase === 'text'
                  ? '0%'
                  : phase === 'revert'
                    ? getRevertPosition().x
                    : getInitialPosition().x,
              y:
                phase === 'spill' || phase === 'text'
                  ? '0%'
                  : phase === 'revert'
                    ? getRevertPosition().y
                    : getInitialPosition().y,
            }}
            transition={{
              duration: phase === 'idle' ? 0 : 1.2,
              ease: [0.76, 0, 0.24, 1],
            }}
          />

          {/* Hidden Short Paragraph / Image */}
          <motion.div
            className={`absolute z-20 ${slidingTextColor ? '' : 'text-[#3D3D3D] dark:text-[#F2F0EF]'} text-center flex flex-col justify-center items-center ${darkImage || darkImages ? 'inset-0 rounded-[2rem] overflow-hidden' : 'p-8'}`}
            style={{ pointerEvents: phase === 'text' ? 'auto' : 'none', color: slidingTextColor }}
            initial={false}
            animate={{
              opacity: phase === 'text' ? 1 : 0,
              y: phase === 'text' ? 0 : 20,
              scale: phase === 'text' ? 1 : 0.95,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {darkImages && darkImages.length > 0 ? (
              darkImages.map((img, idx) => (
                <motion.img
                  key={`${img}-${idx}`}
                  src={img}
                  alt={`${titleText} - ${idx}`}
                  loading="eager"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  initial={false}
                  animate={{
                    x: currentImageIndex === idx ? '0%' : idx < currentImageIndex ? '-100%' : '100%',
                    opacity: currentImageIndex === idx ? 1 : idx < currentImageIndex ? 0.5 : 0,
                  }}
                  transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                />
              ))
            ) : darkImage ? (
              <div className={`absolute inset-0 flex items-center justify-center ${imageClassName?.includes('scale') ? 'bg-white' : ''}`}>
                <img
                  src={darkImage}
                  alt={titleText}
                  loading="eager"
                  decoding="async"
                  className={`w-full h-full object-cover ${imageClassName || ''} pointer-events-none select-none`}
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
            ) : darkContent ? (
              <div className="w-full">{darkContent}</div>
            ) : (
              <p className="font-serif text-[1.0625rem] italic leading-relaxed">
                "Terkadang apa yang terlihat di luar, menyembunyikan sesuatu yang lebih dalam."
              </p>
            )}
          </motion.div>

          <motion.div
            className="relative z-20 text-[0.6875rem] font-semibold text-[#5B6572]/70 uppercase tracking-widest mb-4 font-sans origin-center"
            animate={
              phase === 'spill' || phase === 'text'
                ? {
                    scale: 0.95,
                    opacity: 0,
                    filter: "blur(12px)",
                    x: currentDirection === 'left' ? '50%' : currentDirection === 'right' ? '-50%' : '0%',
                    y: currentDirection === 'up' ? '-50%' : currentDirection === 'down' ? '50%' : '0%',
                  }
                : {
                    scale: 1,
                    opacity: 1,
                    filter: "blur(0px)",
                    x: '0%',
                    y: '0%',
                  }
            }
            transition={
              phase === 'spill'
                ? {
                    duration: 1.2,
                    ease: [0.76, 0, 0.24, 1],
                  }
                : {
                    duration: 0.8,
                    ease: "easeOut",
                  }
            }
          >
            {category}
          </motion.div>
          <motion.div
            className="relative z-20 text-[1.375rem] font-bold text-[#3D3D3D] dark:text-[#F2F0EF] leading-tight mb-8 mt-[15pt] font-serif origin-center"
            animate={
              phase === 'spill' || phase === 'text'
                ? {
                    scale: 0.95,
                    opacity: 0,
                    filter: "blur(12px)",
                    x: currentDirection === 'left' ? '50%' : currentDirection === 'right' ? '-50%' : '0%',
                    y: currentDirection === 'up' ? '-50%' : currentDirection === 'down' ? '50%' : '0%',
                  }
                : {
                    scale: 1,
                    opacity: 1,
                    filter: "blur(0px)",
                    x: '0%',
                    y: '0%',
                  }
            }
            transition={
              phase === 'spill'
                ? {
                    duration: 1.2,
                    ease: [0.76, 0, 0.24, 1],
                  }
                : {
                    duration: 0.8,
                    ease: "easeOut",
                  }
            }
          >
            {title}
          </motion.div>
        </div>

        {/* Back Face (Inside Page) */}
        <div className="absolute w-full h-full bg-[#F2F0EF] dark:bg-[#3D3D3D] rounded-[2rem] shadow-lg p-8 flex flex-col justify-center items-center text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
          {topLeftIcon &&
            (isSafeHref(topLeftLink) ? (
              <a
                href={topLeftLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="absolute top-0 left-0 p-8 text-[#3D3D3D] dark:text-[#F2F0EF]  md:hover:drop-shadow-[0_0_12px_rgba(0,0,0,0.3)] transition-all duration-300 z-30 flex items-center justify-center cursor-pointer outline-none"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                {topLeftIcon}
              </a>
            ) : (
              <div className="absolute top-8 left-8 text-[#5B6572] z-30 pointer-events-none">
                {topLeftIcon}
              </div>
            ))}
          <div
            className={`text-[0.6875rem] font-semibold text-[#5B6572]/70 uppercase tracking-wider mb-6 pb-4 border-b ${lightMode ? 'border-[#E5E5E5]' : 'border-[#222222]'} w-full font-sans italic`}
          >
            {title}
          </div>
          <div className="text-[0.9375rem] md:text-[1.0625rem] font-medium text-[#3D3D3D] dark:text-[#F2F0EF] leading-snug font-serif">
            {content}
          </div>
          <a
            href={isSafeHref(link) ? link : "#"}
            target={isSafeHref(link) ? "_blank" : undefined}
            rel={isSafeHref(link) ? "noopener noreferrer" : undefined}
            onClick={(e) => {
              e.stopPropagation();
              if (!isSafeHref(link)) {
                e.preventDefault();
              }
            }}
            className="absolute bottom-0 right-0 p-8 text-[#3D3D3D] dark:text-[#F2F0EF]  md:hover:drop-shadow-[0_0_12px_rgba(0,0,0,0.3)] transition-all duration-300 z-30 flex items-center justify-center cursor-pointer outline-none"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            {customIcon || (isSafeHref(link) ? <ExternalLink size={24} className="rotate-90" /> : null)}
          </a>
        </div>
      </div>
    </motion.div>
  );
});

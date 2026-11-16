import { useId } from 'react';

const FLAG_SIZE_CLASS = "w-[1.3125rem] h-[0.91875rem] sm:w-[1.575rem] sm:h-[1.05rem]";

export function IndonesiaFlag({ className = FLAG_SIZE_CLASS }: { className?: string }) {
  return (
    <span title="Indonesia" className="inline-flex items-center justify-center">
      <svg
        viewBox="0 0 900 600"
        className={`overflow-hidden shrink-0 ${className}`}
        aria-label="Indonesia"
      >
        <rect width="900" height="300" fill="#E70011" />
        <rect y="300" width="900" height="300" fill="#FFFFFF" />
      </svg>
    </span>
  );
}

export function USFlag({ className = FLAG_SIZE_CLASS }: { className?: string }) {
  return (
    <span title="United States" className="inline-flex items-center justify-center">
      <svg
        viewBox="0 0 900 600"
        className={`overflow-hidden shrink-0 ${className}`}
        aria-label="United States"
      >
        <rect width="900" height="600" fill="#B22234" />
        <path
          d="M0,69.23H900M0,161.54H900M0,253.85H900M0,346.15H900M0,438.46H900M0,530.77H900"
          stroke="#FFFFFF"
          strokeWidth="46.15"
        />
        <rect width="360" height="323.08" fill="#3C3B6E" />
        <g fill="#FFFFFF">
          {[0, 1, 2, 3, 4].map((row) =>
            [0, 1, 2, 3, 4, 5].map((col) => (
              <circle key={`a-${row}-${col}`} cx={30 + col * 60} cy={32.3 + row * 64.6} r="10" />
            ))
          )}
          {[0, 1, 2, 3].map((row) =>
            [0, 1, 2, 3, 4].map((col) => (
              <circle key={`b-${row}-${col}`} cx={60 + col * 60} cy={64.6 + row * 64.6} r="10" />
            ))
          )}
        </g>
      </svg>
    </span>
  );
}

export function UKFlag({ className = FLAG_SIZE_CLASS }: { className?: string }) {
  const clipId = useId();

  return (
    <span title="United Kingdom" className="inline-flex items-center justify-center">
      <svg
        viewBox="0 0 60 40"
        className={`overflow-hidden shrink-0 ${className}`}
        aria-label="United Kingdom"
      >
        <clipPath id={clipId}>
          <rect width="60" height="40" />
        </clipPath>
        <g clipPath={`url(#${clipId})`}>
          <rect width="60" height="40" fill="#012169" />
          <path d="M0,0 L60,40 M60,0 L0,40" stroke="#FFFFFF" strokeWidth="8" />
          <path d="M0,0 L60,40 M60,0 L0,40" stroke="#C8102E" strokeWidth="4.8" />
          <path d="M30,0 V40 M0,20 H60" stroke="#FFFFFF" strokeWidth="13.3" />
          <path d="M30,0 V40 M0,20 H60" stroke="#C8102E" strokeWidth="8" />
        </g>
      </svg>
    </span>
  );
}

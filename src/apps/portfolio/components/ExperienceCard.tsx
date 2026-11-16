import { memo } from "react";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import type { ExperienceCardProps } from "../types";
import { ExperiencePhotoGrid } from "./ExperiencePhotoGrid";

export type { ExperienceCardProps };

export const ExperienceCard = memo(function ExperienceCard({ 
  title, 
  company, 
  location, 
  period,
  periodEn,
  image,
  images,
  imageLayout,
  licenses,
  companyLogo,
  companyLogoDark,
  companyLogos,
  companyUrl,
  lang = 'id',
}: ExperienceCardProps) {
  const photoList = images && images.length > 0 ? images : (image ? [image] : []);
  const companyLabel = typeof company === 'string' ? company : title;

  return (
    <div className="bg-[#F2F0EF] dark:bg-[#3D3D3D] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {/* Header with Logo and Company */}
      <div className="px-6 py-2.5 sm:py-3 flex justify-between items-center gap-4 dark:bg-[#3D3D3D] transition-colors">
        <div className={`flex items-center ${companyLogos && companyLogos.length > 0 ? 'gap-[calc(0.75rem+10pt)] sm:gap-[calc(1rem+10pt)]' : 'gap-3 sm:gap-4'}`}>
          {companyLogos && companyLogos.length > 0 ? (
            <div className="flex items-center gap-[calc(0.625rem+10pt)] sm:gap-[calc(0.875rem+10pt)] shrink-0">
              {companyLogos.map((logo, idx) => (
                <div key={`${logo}-${idx}`} className="w-[70px] h-[56px] sm:w-[91px] sm:h-[70px] shrink-0 flex items-center justify-center">
                  <img 
                    src={logo}
                    alt={`Logo ${idx + 1}`} 
                    loading="eager"
                    decoding="async"
                    className="max-w-full max-h-full object-contain dark:brightness-0 dark:invert dark:opacity-95 dark:hover:opacity-100 transition-all duration-300" 
                  />
                </div>
              ))}
            </div>
          ) : companyLogo ? (
            <div className="w-24 h-[72px] sm:w-[120px] sm:h-[90px] shrink-0 flex items-center justify-center">
              <img 
                src={companyLogo}
                alt={`${companyLabel} logo`} 
                loading="eager"
                decoding="async"
                className={`max-w-full max-h-full object-contain dark:brightness-0 dark:invert dark:opacity-95 dark:hover:opacity-100 transition-all duration-300 ${companyLogoDark ? 'dark:hidden' : ''}`} 
              />
              {companyLogoDark && (
                <img 
                  src={companyLogoDark}
                  alt={`${companyLabel} logo`} 
                  loading="eager"
                  decoding="async"
                  className="max-w-full max-h-full object-contain hidden dark:block dark:brightness-0 dark:invert dark:opacity-95 dark:hover:opacity-100 transition-all duration-300" 
                />
              )}
            </div>
          ) : null}      
          <div>
            <h3 className="text-xl text-[#222222] dark:text-[#F2F0EF] font-serif whitespace-pre-line">
              {company}
            </h3>
          </div>
        </div>
        {companyUrl && (
          <a
            href={companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors ml-auto text-[#5B6572] dark:text-[#F2F0EF]/70 hover:text-[#222222] dark:hover:text-[#F2F0EF] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={20} />
          </a>
        )}
      </div>

      {/* Images */}
      <div>
        <ExperiencePhotoGrid
          images={photoList}
          alt={typeof company === 'string' ? company : 'Company'}
          imageLayout={imageLayout}
        />

        <div className="px-6 py-6 pt-5 dark:bg-[#3D3D3D]">
          
          <div className="flex flex-col pb-0">
            <div className="relative pb-4 last:pb-0">
              <div className="flex items-start gap-6">
                {/* Timeline dot (single) */}
                <div className="w-4 h-4 rounded-full border-2 border-[#3D3D3D] dark:border-[#F2F0EF] bg-[#F2F0EF] dark:bg-[#3D3D3D] mt-1.5 shrink-0 relative z-10"></div>
                
                <div className="flex-1 overflow-hidden">
                  <h4 className="text-base mb-1 text-[#222222] dark:text-[#F2F0EF] font-semibold">{title}</h4>
                  
                  <div className="flex flex-col gap-1 text-[#5B6572] dark:text-[#F2F0EF]/80 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{lang === 'en' && periodEn ? periodEn : period}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {licenses && (
            <div className="mt-4">
              <p className="font-semibold text-[#222222] dark:text-[#F2F0EF] mb-1 text-sm">{lang === 'en' ? 'Professional Licenses:' : 'Sertifikasi & Lisensi Profesional:'}</p>
              <p className="text-[#5B6572] dark:text-[#F2F0EF]/80 text-sm">{licenses}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

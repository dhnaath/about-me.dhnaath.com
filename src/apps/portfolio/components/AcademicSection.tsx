import { memo, useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { TranscriptTable } from './TranscriptTable';
import { HighSchoolTable } from './HighSchoolTable';
import { MiddleSchoolTable } from './MiddleSchoolTable';
import { ElementarySchoolTable } from './ElementarySchoolTable';
import type { Language } from '../../../types';
import {
  academicLogbookItems,
  achievementLogbookItems,
  transcriptLevels,
} from '../data/academicData';
import type { LogbookCarouselItem } from '../types';
import { FlipbookCard } from './FlipbookCard';

interface AcademicSectionProps {
  lang: Language;
  isCarouselPaused: boolean;
  onTogglePause: () => void;
}

const LogbookCarouselItems = memo(function LogbookCarouselItems({ items }: { items: LogbookCarouselItem[] }) {
  return (
    <>
      {[...Array(2)].map((_, i) => (
        <div key={`copy-${i}`} className="flex gap-[30pt] min-w-max items-start">
          {items.map((item, idx) => {
            const itemKey = `${item.kind}-${item.kind === 'image' ? item.src : idx}-${idx}`;
            if (item.kind === 'flipbook') {
              return (
                <div key={itemKey} className="w-[25.375rem]">
                  <FlipbookCard {...item.props} />
                </div>
              );
            }
            if (item.kind === 'blank') {
              return (
                <div key={itemKey} className="w-[25.375rem] shrink-0">
                  <div className="w-full h-[18.125rem] rounded-[2rem] overflow-hidden shadow-sm bg-white relative" />
                </div>
              );
            }
            return (
              <div key={itemKey} className="w-[25.375rem] shrink-0">
                <div className="w-full h-[18.125rem] rounded-[2rem] overflow-hidden shadow-sm bg-white relative">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="eager"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                  />
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </>
  );
});

export const AcademicSection = memo(function AcademicSection({
  lang,
  isCarouselPaused,
  onTogglePause,
}: AcademicSectionProps) {
  const [transcriptPage, setTranscriptPage] = useState(3);

  return (
    <section id="akademik" className="pt-0 pb-0 bg-transparent w-full">
      <div className="w-full px-[2.5pt] md:px-[10pt]">
        <div className="flex flex-col items-center justify-center gap-1 mt-[40pt] mb-[25pt]">
          <h2 className="text-xl md:text-2xl font-bold text-[#3D3D3D] dark:text-[#F2F0EF]">
            {lang === 'id' ? 'Buku Log Akademik' : 'Academic Logbook'}
          </h2>
          <p className="text-sm font-serif text-[#3D3D3D] dark:text-[#F2F0EF] text-center">
            {lang === 'id' ? (
              <>
                Skripsi, Publikasi, Rencana Penelitian, Proyek, Kegiatan, <br className="block md:hidden" />
                Kompetisi, Seminar, dan Transkrip
              </>
            ) : (
              <>
                Thesis, Publications, Research Planning, Projects, Events, <br className="block md:hidden" />
                Competitions, Seminars, and Transcripts
              </>
            )}
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 max-w-7xl mx-auto w-full relative">
          <div className="w-full max-w-7xl">
            <div id="transcript" className="flex items-center justify-center gap-4 w-full h-full group mt-0">
              {/* Desktop Buttons */}
              <button
                onClick={() =>
                  setTranscriptPage((prev) => (prev === 0 ? transcriptLevels.length - 1 : prev - 1))
                }
                className="hidden md:flex shrink-0 p-3 rounded-full bg-[#F2F0EF] dark:bg-[#3D3D3D] shadow-md text-[#3D3D3D] dark:text-[#F2F0EF]  transition-all scale-[0.93] hover:scale-100 z-10"
                aria-label="Previous transcript"
              >
                <ChevronLeft size={36} />
              </button>
              <div className="flex flex-col-reverse md:flex-row items-center w-full gap-8">
                {/* Text Section (30%) */}
                <div className="w-full md:w-[30%] flex flex-col items-center justify-start text-center">
                  {/* Container to vertically align content relative to the image */}
                  <div className="w-full flex-1 flex flex-col items-center justify-center gap-[15pt] md:gap-[50pt]">
                    {/* Level / Degree and Period */}
                    <div className="w-full flex flex-col items-center shrink-0 -mt-[10pt] md:mt-0">
                      {/* Level / Degree */}
                      <div className="w-full flex justify-center items-start shrink-0">
                        <p className="text-lg md:text-xl text-[#000000] dark:text-[#FFFFFF] font-serif italic transition-opacity duration-300 m-0 leading-tight text-center">
                          {transcriptPage !== 3
                            ? transcriptLevels[transcriptPage].title
                            : 'D-IV/S-1/KKNI Level 6/Sederajat'}
                        </p>
                      </div>

                      {/* Period */}
                      {transcriptLevels[transcriptPage].period && (
                        <div className="flex flex-col items-center mt-[5pt]">
                          <p className="text-sm md:text-base text-[#000000] dark:text-[#FFFFFF] font-sans transition-opacity duration-300 m-0 leading-tight text-center">
                            {transcriptLevels[transcriptPage].period}
                          </p>
                        </div>
                      )}

                      {/* Mobile Buttons */}
                      <div className="flex md:hidden items-center justify-center gap-[35pt] w-full mt-[15pt]">
                        <button
                          onClick={() =>
                            setTranscriptPage((prev) => (prev === 0 ? transcriptLevels.length - 1 : prev - 1))
                          }
                          className="p-2 rounded-full bg-[#F2F0EF] dark:bg-[#3D3D3D] shadow-md text-[#3D3D3D] dark:text-[#F2F0EF]  flex shrink-0 transition-all hover:scale-105"
                          aria-label="Previous transcript"
                        >
                          <ChevronLeft size={24} />
                        </button>
                        <button
                          onClick={() =>
                            setTranscriptPage((prev) => (prev >= transcriptLevels.length - 1 ? 0 : prev + 1))
                          }
                          className="p-2 rounded-full bg-[#F2F0EF] dark:bg-[#3D3D3D] shadow-md text-[#3D3D3D] dark:text-[#F2F0EF]  flex shrink-0 transition-all hover:scale-105"
                          aria-label="Next transcript"
                        >
                          <ChevronRight size={24} />
                        </button>
                      </div>
                    </div>

                    {/* Group: Program, Details Grid, and Button */}
                    <div
                      className={`w-full flex flex-col items-center ${transcriptPage === 0 || transcriptPage === 1 ? 'gap-[16pt]' : 'gap-[25pt]'}`}
                    >
                      {/* Program / Major / Juara Umum */}
                      <div className="w-full flex flex-col justify-center items-center shrink-0">
                        {transcriptPage === 0 || transcriptPage === 1 ? (
                          <div className="text-[13.5pt] md:text-[15pt] text-[#000000] dark:text-[#FFFFFF] font-serif text-center leading-tight">
                            Juara Umum dan
                            <br />
                            Peraih Nilai Tertinggi
                            <br />
                            Ujian Akhir <span className="opacity-50">(</span>
                            {transcriptPage === 0 ? '26.40' : '295.50'}
                            <span className="opacity-50">/{transcriptPage === 0 ? '30' : '400'})</span>
                            <br />
                            Lulusan {transcriptPage === 0 ? '2014' : '2017'}
                          </div>
                        ) : (
                          <h3 className="text-xl md:text-2xl text-[#000000] dark:text-[#FFFFFF] font-serif m-0 leading-tight text-center">
                            {transcriptPage === 3 ? (
                              transcriptLevels[transcriptPage].institution
                            ) : (
                              <>
                                Matematika dan
                                <br />
                                Ilmu Pengetahuan Alam
                                <br />
                                (MIPA)
                              </>
                            )}
                          </h3>
                        )}
                      </div>

                      {(transcriptPage === 0 || transcriptPage === 1) && (
                        <div className="grid grid-cols-[auto_auto_1fr] gap-x-2 text-[13.5pt] md:text-[15pt] text-[#000000] dark:text-[#FFFFFF] font-serif leading-tight text-left shrink-0">
                          {transcriptPage === 0 ? (
                            <>
                              <span className="text-right">Bahasa Indonesia</span>
                              <span>:</span>
                              <span>8.40</span>
                              <span className="text-right">Matematika</span>
                              <span>:</span>
                              <span>8.75</span>
                              <span className="text-right">Ilmu Pengetahuan Alam</span>
                              <span>:</span>
                              <span>9.25</span>
                            </>
                          ) : (
                            <>
                              <span className="text-right">Bahasa Indonesia</span>
                              <span>:</span>
                              <span>88.00</span>
                              <span className="text-right">Bahasa Inggris</span>
                              <span>:</span>
                              <span>70.00</span>
                              <span className="text-right">Matematika</span>
                              <span>:</span>
                              <span>72.50</span>
                              <span className="text-right">Ilmu Pengetahuan Alam</span>
                              <span>:</span>
                              <span>65.00</span>
                            </>
                          )}
                        </div>
                      )}

                      {transcriptLevels[transcriptPage].period && (
                        <>
                          {transcriptPage !== 3 && (
                            <div className="grid grid-cols-[auto_auto_1fr] gap-x-2 gap-y-[7pt] text-lg md:text-xl text-[#000000] dark:text-[#FFFFFF] font-serif transition-opacity duration-300 m-0 leading-tight mt-0 text-left shrink-0">
                              <span className="text-right">NPSN</span>
                              <span>:</span>
                              <span>{transcriptLevels[transcriptPage].npsn.replace('NPSN: ', '')}</span>
                              <span className="text-right">Akreditasi</span>
                              <span>:</span>
                              <span>{transcriptLevels[transcriptPage].akreditasi}</span>
                            </div>
                          )}
                          {transcriptPage === 3 && (
                            <div className="grid grid-cols-[auto_auto_1fr] gap-x-2 gap-y-[7pt] text-lg md:text-xl text-[#000000] dark:text-[#FFFFFF] font-serif transition-opacity duration-300 m-0 leading-tight mt-0 text-left shrink-0">
                              <span className="text-right">Program Studi</span>
                              <span>:</span>
                              <span>Logistik Bisnis</span>
                              <span className="text-right">Akreditasi</span>
                              <span>:</span>
                              <span>
                                {transcriptLevels[transcriptPage].akreditasiBottom ||
                                  transcriptLevels[transcriptPage].akreditasi}
                              </span>
                              <span className="text-right">SKS</span>
                              <span>:</span>
                              <span>149</span>
                              <span className="text-right">IPK</span>
                              <span>:</span>
                              <span>
                                3.26<span className="opacity-50">/4.00</span>
                              </span>
                              <span className="text-right">Predikat</span>
                              <span>:</span>
                              <span>Sangat Memuaskan</span>
                            </div>
                          )}
                          <a
                            href={transcriptLevels[transcriptPage].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 text-[#3D3D3D] dark:text-[#F2F0EF] transition-colors cursor-pointer  outline-none focus:outline-none shrink-0"
                            style={{ WebkitTapHighlightColor: 'transparent' }}
                          >
                            <img
                              key={transcriptPage === 3 ? 'pdikti' : 'kemdikbud'}
                              src={
                                transcriptPage === 3
                                  ? "https://dhnaath.com/wp-content/uploads/2026/09/pddikti-baru-26-7.webp"
                                  : "https://dhnaath.com/wp-content/uploads/2026/09/Desain-tanpa-judul-1.webp"
                              }
                              alt="Document"
                              loading="lazy"
                              decoding="async"
                              className={`object-cover object-center pointer-events-none select-none ${
                                transcriptPage === 3
                                  ? "w-[12.125rem] h-[3.625rem] md:w-[14.5625rem] md:h-[4.3125rem]"
                                  : "w-[10.625rem] h-[3.1875rem] md:w-[12.75rem] md:h-[3.8125rem]"
                              }`}
                              draggable={false}
                              onContextMenu={(e) => e.preventDefault()}
                            />
                            <ExternalLink size={20} />
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Image Section (70%) */}
                <div className="w-full md:w-[70%] flex flex-col items-center">
                  <div className="w-full flex flex-col items-center gap-[25pt]">
                    <h2 className="text-2xl md:text-3xl text-[#000000] dark:text-[#FFFFFF] font-serif m-0 leading-tight text-center">
                      {transcriptPage === 3
                        ? transcriptLevels[transcriptPage].title
                        : transcriptLevels[transcriptPage].institution}
                    </h2>
                    <div key={transcriptPage} className="w-full h-full flex justify-center items-start">
                      {transcriptPage === 0 && <ElementarySchoolTable />}
                      {transcriptPage === 1 && <MiddleSchoolTable />}
                      {transcriptPage === 2 && <HighSchoolTable />}
                      {transcriptPage === 3 && <TranscriptTable />}
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop Buttons */}
              <button
                onClick={() =>
                  setTranscriptPage((prev) => (prev >= transcriptLevels.length - 1 ? 0 : prev + 1))
                }
                className="hidden md:flex shrink-0 p-3 rounded-full bg-[#F2F0EF] dark:bg-[#3D3D3D] shadow-md text-[#3D3D3D] dark:text-[#F2F0EF]  transition-all scale-[0.93] hover:scale-100 z-10"
                aria-label="Next transcript"
              >
                <ChevronRight size={36} />
              </button>
            </div>
          </div>
        </div>

        <div className="relative w-full overflow-hidden flex pt-[50pt] pb-[15pt] mt-0 mb-0">
          <div
            className="flex gap-[30pt] px-4 animate-marquee-reverse min-w-max group cursor-pointer carousel-scale-mobile"
            style={{ animationPlayState: isCarouselPaused ? 'paused' : 'running' }}
            onClick={onTogglePause}
          >
            <LogbookCarouselItems items={academicLogbookItems} />
          </div>
        </div>

        <div className="relative w-full overflow-hidden flex pt-[15pt] pb-[50pt]">
          <div
            className="flex gap-[30pt] px-4 animate-marquee-78 min-w-max group cursor-pointer carousel-scale-mobile"
            style={{ animationPlayState: isCarouselPaused ? 'paused' : 'running' }}
            onClick={onTogglePause}
          >
            <LogbookCarouselItems items={achievementLogbookItems} />
          </div>
        </div>
      </div>
    </section>
  );
});

import type { AppId, Language } from '../../../types';
import { GOOGLE_SCHOLAR_URL } from '../data/coverLetterData';
import { SignatureCard } from './SignatureCard';

interface LetterBodyProps {
  lang: Language;
  formattedDate: string;
  onNavigate: (app: AppId) => void;
}

const inlineLinkButtonClass =
  'font-bold text-[#3D3D3D] dark:text-[#F2F0EF] hover:opacity-70 transition-opacity cursor-pointer inline p-0 bg-transparent border-none text-inherit font-inherit';

export function LetterBody({ lang, formattedDate, onNavigate }: LetterBodyProps) {
  if (lang === 'en') {
    return (
      <div className="text-[#3D3D3D]/80 dark:text-[#F2F0EF]/80 font-times leading-relaxed space-y-4 sm:space-y-5 lg:space-y-6 text-[11pt] sm:text-[12pt] lg:text-[14pt] text-justify">
        <p>{formattedDate}</p>
        <p className="!mt-8 lg:!mt-12"><strong>To whoever is reading this</strong>,</p>
        <p>Thank you for taking the time to get to know me better.</p>
        <p>
          I am <strong>Dhia Najmi Athallah</strong>, a graduate in <strong>Applied Bachelor of Logistics</strong>. My educational journey has been defined not only by academic study, but also by diverse practical experiences and projects that deepened my practical understanding of the field. Explorations beyond my core discipline have continually enriched my perspective and experience, ensuring that my path is not confined to a single track.
        </p>
        <p>
          My academic foundation and diverse interdisciplinary experiences shape how I analyze and solve problems. I am accustomed to understanding situations from multiple perspectives before making informed decisions. A proactive attitude, strong adaptability, and an openness to possibilities are central to how I approach challenges while continuously evolving.
        </p>
        <p>
          I view every opportunity (whether employment, collaboration, projects, or partnerships) as a meaningful space to deliver valuable contributions and create shared value. The knowledge, experience, and perspectives I bring are open to being developed through various forms of cooperation that bring mutual benefit. This process also represents an essential part of my journey to keep learning and growing.
        </p>
        <p>
          You can get to know me further through my{' '}
          <button
            type="button"
            onClick={() => onNavigate('portfolio')}
            className={inlineLinkButtonClass}
          >
            Portfolio
          </button>
          ,{' '}
          <button
            type="button"
            onClick={() => onNavigate('resume')}
            className={inlineLinkButtonClass}
          >
            Curriculum Vitae
          </button>
          , and{' '}
          <button
            type="button"
            onClick={() => onNavigate('personality-traits')}
            className={inlineLinkButtonClass}
          >
            Personality
          </button>{' '}
          available on this website. Should you require my academic research profile, my{' '}
          <a
            href={GOOGLE_SCHOLAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={inlineLinkButtonClass}
          >
            Google Scholar
          </a>{' '}
          profile is also available. Together, they provide a broader picture of my journey, interests, experience, and character. Opportunities to connect, exchange perspectives, or build collaborations are always welcomed toward possibilities that create mutual value.
        </p>
        <p>Thank you for your time and consideration.</p>
        <p className="mt-8 lg:mt-12"><span className="font-bold">Sincerely</span>,</p>
        <SignatureCard />
      </div>
    );
  }

  return (
    <div className="text-[#3D3D3D]/80 dark:text-[#F2F0EF]/80 font-times leading-relaxed space-y-4 sm:space-y-5 lg:space-y-6 text-[11pt] sm:text-[12pt] lg:text-[14pt] text-justify">
      <p>{formattedDate}</p>
      <p className="!mt-8 lg:!mt-12"><strong>Kepada siapa pun yang membaca tulisan ini</strong>,</p>
      <p>Terima kasih telah meluangkan waktu untuk mengenal saya lebih jauh.</p>
      <p>
        Saya <strong>Dhia Najmi Athallah</strong>, lulusan <strong>Sarjana Terapan Logistik</strong>. Perjalanan pendidikan saya tidak hanya diisi dengan pembelajaran akademis, tetapi juga berbagai pengalaman praktik dan proyek yang memperdalam pemahaman saya terhadap bidang tersebut. Berbagai eksplorasi di luar bidang utama turut memperkaya pengalaman dan perspektif saya, sehingga perjalanan yang saya jalani tidak terbatas pada satu jalur saja.
      </p>
      <p>
        Latar belakang akademis dan pengalaman lintas bidang membentuk cara saya dalam melihat dan menyelesaikan persoalan. Saya terbiasa memahami suatu situasi melalui berbagai sudut pandang sebelum mengambil keputusan. Sikap proaktif, kemampuan beradaptasi, serta keterbukaan terhadap berbagai kemungkinan menjadi bagian dari cara saya menghadapi tantangan sekaligus terus berkembang.
      </p>
      <p>
        Setiap kesempatan, baik pekerjaan, kolaborasi, proyek, maupun kemitraan, saya pandang sebagai ruang untuk memberikan kontribusi yang bermakna dan menciptakan nilai bersama. Pengetahuan, pengalaman, dan perspektif yang saya miliki terbuka untuk dikembangkan melalui berbagai bentuk kerja sama yang memberikan manfaat bagi kedua pihak. Proses tersebut juga menjadi bagian dari perjalanan saya untuk terus belajar dan bertumbuh.
      </p>
      <p>
        Anda dapat mengenal saya lebih jauh melalui{' '}
        <button
          type="button"
          onClick={() => onNavigate('portfolio')}
          className={inlineLinkButtonClass}
        >
          Portofolio
        </button>
        ,{' '}
        <button
          type="button"
          onClick={() => onNavigate('resume')}
          className={inlineLinkButtonClass}
        >
          Curriculum Vitae
        </button>
        , dan{' '}
        <button
          type="button"
          onClick={() => onNavigate('personality-traits')}
          className={inlineLinkButtonClass}
        >
          Personality
        </button>{' '}
        yang tersedia pada situs ini. Apabila Anda memerlukan profil akademis atau publikasi ilmiah, profil{' '}
        <a
          href={GOOGLE_SCHOLAR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={inlineLinkButtonClass}
        >
          Google Scholar
        </a>{' '}
        saya juga dapat ditinjau. Seluruh media ini memberikan gambaran yang lebih luas mengenai perjalanan, minat, pengalaman, serta diri saya. Kesempatan untuk bertemu, berdiskusi, atau membangun kerja sama selalu terbuka bagi berbagai kemungkinan yang dapat memberikan nilai bersama.
      </p>
      <p>Terima kasih atas waktu dan perhatian Anda.</p>
      <p className="mt-8 lg:mt-12"><span className="font-bold">Hormat saya</span>,</p>
      <SignatureCard />
    </div>
  );
}

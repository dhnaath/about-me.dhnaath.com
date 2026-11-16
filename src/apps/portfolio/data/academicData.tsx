import { FileText } from 'lucide-react';
import type { LogbookCarouselItem, TranscriptLevel } from '../types';

export const transcriptLevels: TranscriptLevel[] = [
  {
    title: "SD/MI/Sederajat",
    npsn: "NPSN: 30103040",
    institution: "SD Negeri 01 Lanjak",
    period: "Tahun Pelajaran 2013/2014",
    akreditasi: "A",
    link: "https://sekolah.data.kemendikdasmen.go.id/profil-sekolah/903B0F09-30F5-E011-9EB4-8B25DB501A9D",
  },
  {
    title: "SMP/MTs/Sederajat",
    npsn: "NPSN: 30102940",
    institution: "SMP Negeri 1 Batang Lupar",
    period: "Tahun Pelajaran 2016/2017",
    akreditasi: "B",
    link: "https://sekolah.data.kemendikdasmen.go.id/profil-sekolah/F09BB109-30F5-E011-90C6-F9C4ACF3E380",
  },
  {
    title: "SMA/MA/SMK/MAK/Sederajat",
    npsn: "NPSN: 30105204",
    institution: "SMA Negeri 8 Pontianak",
    period: "Tahun Pelajaran 2019/2020",
    akreditasi: "A",
    link: "https://sekolah.data.kemendikdasmen.go.id/profil-sekolah/04531D4B-7A11-4B2D-B063-6664362CE129",
  },
  {
    title: "Universitas Logistik dan Bisnis Internasional (ULBI)",
    npsn: "PDDikti: 041104",
    institution: "Sarjana Terapan Logistik (S.Tr.Log.)",
    period: "Oktober 2021 – November 2025",
    akreditasi: "B",
    akreditasiBottom: "Baik Sekali",
    link: "https://pddikti.kemdiktisaintek.go.id/detail-prodi/ODloXNDeYp9ggYjIE1_rHnAoLqKGWJDhO3uFfP-zRjprQ4PjJGEX5QcL9E1w28bgTBt3vQ==",
  },
];

export const academicLogbookItems: LogbookCarouselItem[] = [
  {
    kind: 'flipbook',
    props: {
      category: "Kegiatan",
      title: <>CHARACTER BUILDING<br />KE-20</>,
      content: "Kegiatan Character Building ke-20 untuk pembentukan karakter.",
      darkImage: "https://dhnaath.com/wp-content/uploads/2026/08/CB-1_page-0001-1_11zon.webp",
      disableFlip: true,
      lightMode: true,
    },
  },
  {
    kind: 'flipbook',
    props: {
      category: "Kegiatan",
      title: "LKMM TERABUMI 2021",
      content: "Latihan Keterampilan Manajemen Mahasiswa (LKMM) Tingkat Dasar.",
      darkImage: "https://dhnaath.com/wp-content/uploads/2026/08/LKMM.webp",
      disableFlip: true,
      lightMode: true,
    },
  },
  {
    kind: 'flipbook',
    props: {
      category: "Kunjungan Industri",
      title: "PT DSV Solutions Indonesia",
      content: "Mahasiswa tahun kedua Program Studi D3 dan D4 Logistik Bisnis melaksanakan kunjungan industri pada 9 Juni 2023 ke PT DSV Solutions Indonesia (Pondok Ungu Site), Kota Bekasi, Jawa Barat.",
      darkImage: "https://dhnaath.com/wp-content/uploads/2026/08/KI-1_11zon.webp",
      disableFlip: true,
      lightMode: true,
    },
  },
  {
    kind: 'flipbook',
    props: {
      category: "TUGAS KELOMPOK",
      title: "Wawancara",
      content: "Kegiatan Wawancara",
      darkImage: "https://dhnaath.com/wp-content/uploads/2026/08/IMG_1537-1_11zon.webp",
      disableFlip: true,
      lightMode: true,
    },
  },
  {
    kind: 'flipbook',
    props: {
      category: "Proyek Logistik I",
      title: "Business Process",
      content: "Tugas besar berupa observasi 𝗣𝗿𝗼𝘀𝗲𝘀 𝗕𝗶𝘀𝗻𝗶𝘀 milik perusahaan untuk memenuhi syarat kelulusan mata kuliah 𝗣𝗿𝗼𝘆𝗲𝗸 𝗟𝗼𝗴𝗶𝘀𝘁𝗶𝗸 𝟭 dalam kurikulum 𝗦𝗲𝗺𝗲𝘀𝘁𝗲𝗿 𝟮 pada studi 𝗦𝗮𝗿𝗷𝗮𝗻𝗮 𝗧𝗲𝗿𝗮𝗽𝗮𝗻 𝗟𝗼𝗴𝗶𝘀𝘁𝗶𝗸.",
      darkImages: [
        "https://dhnaath.com/wp-content/uploads/2026/09/1708894833625-1.webp",
        "https://dhnaath.com/wp-content/uploads/2026/09/1711427302442.webp",
      ],
      link: "https://drive.google.com/drive/folders/1_VnnesMIhYmNrWu-i6gTr94dlg4ioTuL?usp=sharing",
    },
  },
  {
    kind: 'blank',
  },
  {
    kind: 'flipbook',
    props: {
      category: "Proyek Logistik II",
      title: "Design Thinking",
      content: "Tugas besar berbentuk 𝗗𝗲𝘀𝗶𝗴𝗻 𝗧𝗵𝗶𝗻𝗸𝗶𝗻𝗴 untuk memenuhi syarat kelulusan mata kuliah 𝗣𝗿𝗼𝘆𝗲𝗸 𝗟𝗼𝗴𝗶𝘀𝘁𝗶𝗸 𝟮 dalam kurikulum 𝗦𝗲𝗺𝗲𝘀𝘁𝗲𝗿 𝟯 pada studi 𝗦𝗮𝗿𝗷𝗮𝗻𝗮 𝗧𝗲𝗿𝗮𝗽𝗮𝗻 𝗟𝗼𝗴𝗶𝘀𝘁𝗶𝗸.",
      darkContent: "Tugas Design Thinking Logistik",
      darkImage: "https://dhnaath.com/wp-content/uploads/2026/08/Poster-Proyek-II-1_11zon.webp",
      link: "https://drive.google.com/drive/folders/1UWIkR6LBHFneedvGCq1SOkNNh7ROdiPm?usp=sharing",
    },
  },
  {
    kind: 'flipbook',
    props: {
      category: "Proyek Logistik III",
      title: "House of Quality",
      content: "Tugas besar berbentuk 𝗛𝗼𝘂𝘀𝗲 𝗼𝗳 𝗤𝘂𝗮𝗹𝗶𝘁𝘆 (𝗛𝗢𝗤) untuk memenuhi syarat kelulusan mata kuliah 𝗣𝗿𝗼𝘆𝗲𝗸 𝗟𝗼𝗴𝗶𝘀𝘁𝗶𝗸 𝟯 dalam kurikulum 𝗦𝗲𝗺𝗲𝘀𝘁𝗲𝗿 𝟱 pada studi 𝗦𝗮𝗿𝗷𝗮𝗻𝗮 𝗧𝗲𝗿𝗮𝗽𝗮𝗻 𝗟𝗼𝗴𝗶𝘀𝘁𝗶𝗸.",
      darkContent: "HOQ Inovasi Whoosh Pengiriman Barang Same Day Jakarta–Bandung",
      darkImages: [
        "https://dhnaath.com/wp-content/uploads/2026/09/1708894126465-1.webp",
        "https://dhnaath.com/wp-content/uploads/2026/09/1714586513717.webp",
      ],
      link: "https://drive.google.com/drive/folders/1ml-A4wYLbJKZ4pEbDgFU4pSxZ9J327vN?usp=sharing",
    },
  },
  {
    kind: 'flipbook',
    props: {
      category: "Seminar",
      title: "International Joint Effort Seminar Programme on Logistics and Supply Chain",
      content: "Seminar dan Kompetisi Internasional dengan tema Inovasi pada Logistik dan Supply Chain Management hasil kolaborasi dengan Politeknik Nilai Malaysia",
      darkImages: [
        "https://dhnaath.com/wp-content/uploads/2026/08/seminar-baru-1-1-1.webp",
        "https://dhnaath.com/wp-content/uploads/2026/09/1709873546407.webp",
      ],
      link: "https://www.youtube.com/watch?v=tq6LsPKmaVY&t=19372s",
    },
  },
  {
    kind: 'flipbook',
    props: {
      category: "Seminar",
      title: "Presenter",
      content: "Penghargaan untuk Presenter pada acara Seminar Internasional.",
      darkImage: "https://dhnaath.com/wp-content/uploads/2026/08/APPRECIATION-CERT_page-0001-1_11zon.webp",
      disableFlip: true,
      lightMode: true,
    },
  },
  {
    kind: 'flipbook',
    props: {
      category: "Seminar",
      title: "Favourite Judges",
      content: "Penghargaan untuk Favourite Judges pada acara Seminar Internasional.",
      darkImage: "https://dhnaath.com/wp-content/uploads/2026/08/FAVJUDG-1_11zon.webp",
      disableFlip: true,
      lightMode: true,
    },
  },
  {
    kind: 'flipbook',
    props: {
      category: "Kerja Praktik I",
      title: "Rencana Penelitian",
      content: "Sebagai syarat untuk memenuhi kelulusan pada mata kuliah 𝗞𝗲𝗿𝗷𝗮 𝗣𝗿𝗮𝗸𝘁𝗶𝗸 𝟭 dan 𝗟𝗮𝗽𝗼𝗿𝗮𝗻 𝗔𝗸𝗵𝗶𝗿 dalam kurikulum 𝗦𝗲𝗺𝗲𝘀𝘁𝗲𝗿 𝟳 pada studi 𝗦𝗮𝗿𝗷𝗮𝗻𝗮 𝗧𝗲𝗿𝗮𝗽𝗮𝗻 𝗟𝗼𝗴𝗶𝘀𝘁𝗶𝗸.",
      lightMode: true,
      darkContent: (
        <div
          className="font-serif font-bold not-italic text-[1rem] md:text-[1.125rem]"
          style={{ lineHeight: "calc(1.25em + 1pt)" }}
        >
          <span className="block">Optimalisasi Persediaan</span>
          <span className="block">Toyota Motor Oil (TMO) Engine Oil</span>
          <span className="block">pada Gudang Suku Cadang</span>
          <span className="block">Toyota Auto2000 Cabang Pasteur</span>
          <span className="block">Menggunakan Metode</span>
          <span className="block">EOQ Deterministik dan</span>
          <span className="block">Least Unit Cost</span>
        </div>
      ),
      topLeftIcon: <FileText size={24} />,
      topLeftLink: "https://drive.google.com/file/d/1ZpdHl4ABP2CNCyaZlSs19R5ngxjG09Ke/view?usp=sharing",
      link: "https://drive.google.com/file/d/1zifrsxdsi9nh4n8u2JSnRG8Et6pxJRht/view?usp=sharing",
    },
  },
  {
    kind: 'flipbook',
    props: {
      category: "Kerja Praktik II",
      title: "Skripsi",
      content: "Sebagai syarat untuk memenuhi kelulusan pada mata kuliah 𝗞𝗲𝗿\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD𝗮 𝗣𝗿𝗮𝗸𝘁𝗶𝗸 𝟮 dan 𝗦𝗸𝗿𝗶𝗽𝘀𝗶 dalam kurikulum 𝗦𝗲𝗺𝗲𝘀𝘁𝗲𝗿 𝟴 pada studi 𝗦𝗮𝗿𝗷𝗮𝗻𝗮 𝗧𝗲𝗿𝗮𝗽𝗮𝗻 𝗟𝗼𝗴𝗶𝘀𝘁𝗶𝗸.",
      lightMode: true,
      darkContent: (
        <div
          className="font-serif font-bold not-italic text-[1rem] md:text-[1.125rem]"
          style={{ lineHeight: "calc(1.25em + 1pt)" }}
        >
          <span className="block">Analisis Kualitas Pelayanan</span>
          <span className="block">PT Pos Indonesia (Persero)</span>
          <span className="block">Cabang KPRK Sintang 78600</span>
          <span className="block">untuk Meningkatkan</span>
          <span className="block">Kepuasan Pelanggan dengan</span>
          <span className="block">Integrasi ServQual dan IPA</span>
        </div>
      ),
      topLeftIcon: <FileText size={24} />,
      topLeftLink: "https://drive.google.com/file/d/1ACG-GMGG3btYs0Vz0ZdQHzoa4eNDucmU/view?usp=sharing",
      link: "https://drive.google.com/file/d/1p-r0nD3-OhsOTnOi7oZSdusYS-oyTTn6/view?usp=sharing",
    },
  },
];

export const achievementLogbookItems: LogbookCarouselItem[] = [
  {
    kind: 'flipbook',
    props: {
      category: "Perwakilan",
      title: "Dokter Kecil UKS",
      content: "SDN 01 LANJAK",
      darkImage: "https://dhnaath.com/wp-content/uploads/2026/08/ChatGPT-Image-21-Jul-2026-14.52.51-1_11zon.webp",
      disableFlip: true,
    },
  },
  {
    kind: 'image',
    src: "https://dhnaath.com/wp-content/uploads/2026/08/WhatsApp-Image-2026-07-21-at-14.15.33.webp",
    alt: "Penghargaan",
  },
  {
    kind: 'flipbook',
    props: {
      category: "OLIMPIADE SAINS NASIONAL",
      title: "OSN SD/MI 2013",
      content: "Peserta Olimpiade Sains Nasional SD/MI Tahun 2013.",
      darkImage: "https://dhnaath.com/wp-content/uploads/2026/08/ChatGPT-Image-23-Jul-2026-11.25.26-1_11zon.webp",
      disableFlip: true,
      lightMode: true,
      imageClassName: "scale-[0.93] object-contain",
    },
  },
  {
    kind: 'image',
    src: "https://dhnaath.com/wp-content/uploads/2026/09/Desain-tanpa-judul-4.webp",
    alt: "Sertifikat",
  },
  {
    kind: 'flipbook',
    props: {
      category: "OLIMPIADE SAINS NASIONAL",
      title: "OSN SD/MI 2013",
      content: "Peserta Olimpiade Sains Nasional SD/MI Tahun 2013.",
      darkImage: "https://dhnaath.com/wp-content/uploads/2026/08/Desain-tanpa-judul-2-1_11zon.webp",
      disableFlip: true,
      lightMode: true,
    },
  },
  {
    kind: 'flipbook',
    props: {
      category: "PRAMUKA",
      title: "Bumi Perkemahan Siluk Muara Tawang",
      content: "Kegiatan Bumi Perkemahan Siluk Muara Tawang.",
      darkImage: "https://dhnaath.com/wp-content/uploads/2026/08/sertif-pramuka-suhaid-1-1_11zon.webp",
      disableFlip: true,
      lightMode: true,
    },
  },
  {
    kind: 'flipbook',
    props: {
      category: "PRAMUKA",
      title: "Jamnas X–2016",
      content: "Peserta Jambore Nasional X Tahun 2016.",
      darkImage: "https://dhnaath.com/wp-content/uploads/2026/08/Desain-tanpa-judul-3-1_11zon.webp",
      disableFlip: true,
      lightMode: true,
    },
  },
  {
    kind: 'image',
    src: "https://dhnaath.com/wp-content/uploads/2026/09/Pramuka-penggalang-Dari-berbagai-kwartir-ranting-se-Kab.kapuas-Hulu-Melakukan-Latihan-Pemantap.webp",
    alt: "Pramuka Penggalang",
  },
  {
    kind: 'flipbook',
    props: {
      category: "OLIMPIADE SAINS NASIONAL",
      title: "OSN SMP/MTs",
      content: "Peserta Olimpiade Sains Nasional SMP/MTs.",
      darkContent: (
        <div className="font-serif font-bold text-3xl leading-tight text-[#3D3D3D] dark:text-[#F2F0EF] not-italic">
          <span className="block mb-2">Ilmu</span>
          <span className="block mb-2">Pengetahuan</span>
          <span className="block">Alam</span>
        </div>
      ),
      disableFlip: true,
    },
  },
  {
    kind: 'flipbook',
    props: {
      category: "KOMPETISI DEBAT",
      title: <>English Festival and<br />National Schools Debating<br />Championship 2019</>,
      content: "Peserta English Festival and National Schools Debating Championship 2019. Penyelenggara: FKIP UNTAN dan MGMP Bahasa Inggris Kota Pontianak.",
      darkContent: (
        <div className="font-serif font-bold text-3xl leading-tight text-[#3D3D3D] dark:text-[#F2F0EF] not-italic">
          <span className="block mb-2">FKIP UNTAN</span>
          <span className="block mb-2">dan MGMP</span>
          <span className="block mb-2">Bahasa Inggris</span>
          <span className="block">Kota Pontianak</span>
        </div>
      ),
      disableFlip: true,
    },
  },
  {
    kind: 'flipbook',
    props: {
      category: "LOMBA FOTOGRAFI",
      title: <>Festival Sungai Kapuas<br />BPNB Kalbar</>,
      content: "Peserta Lomba Fotografi Festival Sungai Kapuas.",
      darkImage: "https://dhnaath.com/wp-content/uploads/2026/08/ChatGPT-Image-23-Jul-2026-11.29.33-1_11zon.webp",
      disableFlip: true,
      lightMode: true,
    },
  },
  {
    kind: 'image',
    src: "https://dhnaath.com/wp-content/uploads/2026/08/IMG_1614-1_11zon.webp",
    alt: "Kegiatan Baru",
  },
];

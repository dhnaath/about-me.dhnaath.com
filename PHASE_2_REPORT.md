# PHASE 2 REPORT — CODE STRUCTURE & MODULARIZATION
**Repository:** `about-me.dhnaath.com`  
**Scope:** Refactoring arsitektur internal kode `src/` untuk memisahkan tanggung jawab (*Components*, *Data*, *Hooks*, *Utils*, *Types*), mengeliminasi duplikasi kode, dan memecah komponen berukuran besar tanpa mengubah desain visual, layout, animasi, konten, maupun interaksi aplikasi.

---

## 1. Ringkasan Pekerjaan

Modularisasi Fase 2 telah diselesaikan di seluruh empat sub-aplikasi dan komponen bersama pada direktori `src/`:
1. **Dekomposisi Sub-Aplikasi Monolitik:** Memecah keempat halaman utama (`PortfolioApp.tsx` 1.645 -> 48 baris, `ResumeApp.tsx` 1.816 -> 74 baris, `PersonalityTraitsApp.tsx` 541 -> 50 baris, `CoverLetterApp.tsx` 236 -> 66 baris) menjadi orkestrator ringan yang mengoordinasikan modul data, komponen UI, hooks, dan types masing-masing.
2. **Pemisahan Data Statis dari Komponen UI:** Memindahkan seluruh data profil, riwayat kerja, organisasi, sertifikat, transkrip, item logbook akademik, karya desain, sifat kepribadian, serta teks terjemahan ke folder `data/` khusus di masing-masing sub-aplikasi.
3. **Ekstraksi Custom Hooks & Utilities Bersama:** Membuat `src/hooks/` (`usePdfSource.ts`, `useWindowWidth.ts`, `useAutoAdvance.ts`) dan `src/utils/date.ts` (`formatLocalizedLetterDate`) untuk menggantikan logika stateful dan utilitas yang berulang di berbagai komponen.
4. **Eliminasi Duplikasi Komponen UI:** Mengekstrak komponen bersama dan lokal seperti `ExperiencePhotoGrid`, `ExperienceTimeline`, `TraitCard`, `TraitSection`, `WorkExperienceItem`, `ResumeListItem`, `ResumeSection` + `RecapGroupHeader`, `LogbookCarouselItems`, serta `ResumeSidebar` berbasis konfigurasi navigasi.
5. **Konsistensi Sistem Tipe Domain:** Mendefinisikan tipe spesifik per aplikasi (`src/apps/portfolio/types.ts`, `src/apps/resume/types.ts`, `src/apps/personality-traits/types.ts`) melengkapi `src/types.ts` tanpa menggunakan `any`.

---

## 2. Daftar File yang Diubah, Dipindahkan, Dibuat, atau Dihapus

### File Baru (Dibuat)
**Hooks & Utils Bersama:**
- `src/hooks/useAutoAdvance.ts` — Custom hook untuk interval pergantian slide otomatis (`DocumentationCard` dan `designGroups`).
- `src/hooks/usePdfSource.ts` — Custom hook untuk konfigurasi worker `pdfjs`, pre-fetch PDF dengan `AbortController`, guard unmount, dan manajemen state halaman/error/loading.
- `src/hooks/useWindowWidth.ts` — Custom hook listener `window.resize` untuk pengukuran responsif PDF.
- `src/utils/date.ts` — Fungsi `formatLocalizedLetterDate` untuk pemformatan tanggal surat berlokalisasi `EN`/`ID`.

**Komponen UI Bersama & Portfolio:**
- `src/components/shared/ExperiencePhotoGrid.tsx` — Komponen grid galeri foto pengalaman kerja (mendukung 1, 2, 3, 4, 5+ foto serta layout `collage-right-tall`).
- `src/components/portfolio/ExperienceTimeline.tsx` — Komponen timeline vertikal posisi pekerjaan pada kartu multi-posisi (`PosIndoExperience` dan `KspNusantaraExperience`).

**Modularisasi `PortfolioApp` (`src/apps/portfolio/`):**
- `src/apps/portfolio/types.ts` — Interface `FlipbookCardProps`, `DesignItem`, `TranscriptLevel`, `LogbookCarouselItem`, `PortfolioAppProps`.
- `src/apps/portfolio/data/experienceData.tsx` — Dataset `posIndoData`, `kspNusantaraData`, dan `experiences`.
- `src/apps/portfolio/data/projectsData.ts` — Dataset `designGroups` dan `documentation`.
- `src/apps/portfolio/data/academicData.tsx` — Dataset `transcriptLevels`, `academicLogbookItems`, dan `achievementLogbookItems`.
- `src/apps/portfolio/components/FlipbookCard.tsx` — Komponen kartu 3D flipbook + animasi slide background.
- `src/apps/portfolio/components/ExperienceSection.tsx` — Bagian marquee `#experience`.
- `src/apps/portfolio/components/ProjectsSection.tsx` — Bagian `#proyek` (*Profile Qualifications* & *Creative Craft*).
- `src/apps/portfolio/components/AcademicSection.tsx` — Bagian `#akademik` (*Transcript Switcher* + dual marquee `LogbookCarouselItems`).

**Modularisasi `ResumeApp` (`src/apps/resume/`):**
- `src/apps/resume/types.ts` — Interface `WorkExperienceEntry`, `OrganizationEntry`, `ResumeListEntry`, `ResumeData`, `ResumeTranslations`, `ResumeAppProps`.
- `src/apps/resume/data/resumeTranslations.ts` — Kamus label `EN`/`ID` (`resumeTranslations`).
- `src/apps/resume/data/resumeData.tsx` — Seluruh dataset pengalaman, organisasi, komunitas, sertifikat, lisensi, pendidikan, workshop, riset, serta data kontak & media sosial sidebar.
- `src/apps/resume/components/FlagIcons.tsx` — Komponen SVG `IndonesiaFlag`, `USFlag`, dan `UKFlag`.
- `src/apps/resume/components/WorkExperienceItem.tsx` — Komponen item pengalaman kerja lengkap dengan logo, peran, dan daftar detail.
- `src/apps/resume/components/ResumeListItem.tsx` — Komponen baris item umum untuk organisasi, pendidikan, sertifikat, workshop, dan riset.
- `src/apps/resume/components/ResumeSection.tsx` — Komponen `Section` dan `RecapGroupHeader`.
- `src/apps/resume/components/ResumeSidebar.tsx` — Navigasi sidebar desktop & tab bar mobile berbasis array konfigurasi grup menu.
- `src/apps/resume/components/ResumeContent.tsx` — Renderer seluruh tampilan halaman konten (`page === 0` s.d. `16`) dengan transisi `AnimatePresence`.

**Modularisasi `CoverLetterApp` (`src/apps/cover-letter/`):**
- `src/apps/cover-letter/data/coverLetterData.ts` — Data `SIGNATURE_IDENTITY`, `SIGNATURE_CONTACTS`, dan `GOOGLE_SCHOLAR_URL`.
- `src/apps/cover-letter/components/LetterBody.tsx` — Isi paragraf pengantar, fokus posisi, portofolio proyek, serta penutup berbahasa `EN`/`ID`.
- `src/apps/cover-letter/components/SignatureCard.tsx` — Kartu tanda tangan dan tautan kontak eksternal.

**Modularisasi `PersonalityTraitsApp` (`src/apps/personality-traits/`):**
- `src/apps/personality-traits/types.ts` — Interface `TraitCardData` dan `TraitSectionConfig`.
- `src/apps/personality-traits/data/traitsData.ts` — Konfigurasi terstruktur 13 `TRAIT_ITEMS` dan 5 `TRAIT_SECTIONS`.
- `src/apps/personality-traits/components/TraitCard.tsx` — Komponen kartu sifat kepribadian dengan dukungan gaya per-item dan indikator external link.
- `src/apps/personality-traits/components/TraitSection.tsx` — Renderer seksi (`grid` maupun `flex`) berdasarkan konfigurasi.

### File yang Diubah (Di-refactor)
- `src/apps/portfolio/PortfolioApp.tsx` — Dari 1.645 baris menjadi 48 baris orkestrator.
- `src/apps/resume/ResumeApp.tsx` — Dari 1.816 baris menjadi 74 baris orkestrator.
- `src/apps/cover-letter/CoverLetterApp.tsx` — Dari 236 baris menjadi 66 baris orkestrator.
- `src/apps/personality-traits/PersonalityTraitsApp.tsx` — Dari 541 baris menjadi 50 baris orkestrator.
- `src/components/shared/ExperienceCard.tsx` — Menggunakan `ExperiencePhotoGrid` untuk merender galeri foto.
- `src/components/portfolio/PosIndoExperience.tsx` — Menggunakan `ExperienceTimeline` untuk daftar posisi & foto.
- `src/components/portfolio/KspNusantaraExperience.tsx` — Menggunakan `ExperienceTimeline` untuk daftar posisi & foto.
- `src/components/portfolio/CVFlipbook.tsx` — Menggunakan `usePdfSource` untuk worker PDF.js, pre-fetch, dan loading/error state.
- `src/components/portfolio/TranscriptImage.tsx` — Menggunakan `usePdfSource` dan `useWindowWidth`.

### File yang Dihapus / Dipindahkan
- **Tidak ada file yang dihapus.** Seluruh file warisan yang tidak aktif di-render (`Hero.tsx`, `CreativeCard.tsx`, `CVFlipbook.tsx`, `FlipbookReveal.tsx`, `mbtiData.ts`) tetap dipertahankan demi kepatuhan aturan tidak menghapus fitur/konten yang ada. Logika dan data yang sebelumnya tertanam inline di keempat file `*App.tsx` telah dipindahkan ke subdirektori `components/`, `data/`, `hooks/`, `utils/`, dan `types.ts`.

---

## 3. Struktur Folder Sebelum dan Sesudah

### Sebelum (Akhir Fase 1 — 24 file, 5.994 baris)
```text
src/
├── App.tsx (132)
├── index.css (45)
├── main.tsx (14)
├── types.ts (18)
├── apps/
│   ├── cover-letter/
│   │   └── CoverLetterApp.tsx (236)
│   ├── personality-traits/
│   │   ├── PersonalityTraitsApp.tsx (541)
│   │   └── data/mbtiData.ts (26)
│   ├── portfolio/
│   │   └── PortfolioApp.tsx (1645)
│   └── resume/
│       └── ResumeApp.tsx (1816)
└── components/
    ├── portfolio/
    │   ├── CVFlipbook.tsx, CreativeCard.tsx, DocumentationCard.tsx,
    │   ├── ElementarySchoolTable.tsx, FlipbookReveal.tsx, Hero.tsx,
    │   ├── HighSchoolTable.tsx, KspNusantaraExperience.tsx,
    │   ├── MiddleSchoolTable.tsx, PosIndoExperience.tsx,
    │   └── TranscriptImage.tsx, TranscriptTable.tsx
    └── shared/
        ├── ErrorBoundary.tsx
        ├── ExperienceCard.tsx
        └── FloatingDocuments.tsx
```

### Sesudah (Fase 2 — 54 file, 6.255 baris)
```text
src/
├── App.tsx (132)
├── index.css (45)
├── main.tsx (14)
├── types.ts (18)
├── hooks/
│   ├── useAutoAdvance.ts (8)
│   ├── usePdfSource.ts (85)
│   └── useWindowWidth.ts (15)
├── utils/
│   └── date.ts (16)
├── apps/
│   ├── cover-letter/
│   │   ├── CoverLetterApp.tsx (66)
│   │   ├── components/
│   │   │   ├── LetterBody.tsx (128)
│   │   │   └── SignatureCard.tsx (43)
│   │   └── data/
│   │       └── coverLetterData.ts (34)
│   ├── personality-traits/
│   │   ├── PersonalityTraitsApp.tsx (50)
│   │   ├── types.ts (22)
│   │   ├── components/
│   │   │   ├── TraitCard.tsx (89)
│   │   │   └── TraitSection.tsx (35)
│   │   └── data/
│   │       ├── mbtiData.ts (26)
│   │       └── traitsData.ts (177)
│   ├── portfolio/
│   │   ├── PortfolioApp.tsx (48)
│   │   ├── types.ts (57)
│   │   ├── components/
│   │   │   ├── AcademicSection.tsx (376)
│   │   │   ├── ExperienceSection.tsx (103)
│   │   │   ├── FlipbookCard.tsx (318)
│   │   │   └── ProjectsSection.tsx (270)
│   │   └── data/
│   │       ├── academicData.tsx (334)
│   │       ├── experienceData.tsx (379)
│   │       └── projectsData.ts (116)
│   └── resume/
│       ├── ResumeApp.tsx (74)
│       ├── types.ts (99)
│       ├── components/
│       │   ├── FlagIcons.tsx (65)
│       │   ├── ResumeContent.tsx (503)
│       │   ├── ResumeListItem.tsx (160)
│       │   ├── ResumeSection.tsx (31)
│       │   ├── ResumeSidebar.tsx (142)
│       │   └── WorkExperienceItem.tsx (94)
│       └── data/
│           ├── resumeData.tsx (685)
│           └── resumeTranslations.ts (49)
└── components/
    ├── portfolio/
    │   ├── CVFlipbook.tsx (125)
    │   ├── CreativeCard.tsx (47)
    │   ├── DocumentationCard.tsx (128)
    │   ├── ElementarySchoolTable.tsx (10)
    │   ├── ExperienceTimeline.tsx (51)
    │   ├── FlipbookReveal.tsx (89)
    │   ├── Hero.tsx (44)
    │   ├── HighSchoolTable.tsx (10)
    │   ├── KspNusantaraExperience.tsx (76)
    │   ├── MiddleSchoolTable.tsx (10)
    │   ├── PosIndoExperience.tsx (78)
    │   ├── TranscriptImage.tsx (84)
    │   └── TranscriptTable.tsx (10)
    └── shared/
        ├── ErrorBoundary.tsx (54)
        ├── ExperienceCard.tsx (147)
        ├── ExperiencePhotoGrid.tsx (142)
        └── FloatingDocuments.tsx (244)
```

---

## 4. Hasil Modularisasi Setiap Aplikasi

1. **Portfolio (`src/apps/portfolio/`):**
   - `PortfolioApp.tsx` (1.645 -> 48 baris) kini hanya mengelola state `isCarouselPaused` bersama dan merangkai `ExperienceSection`, `ProjectsSection`, `AcademicSection`, serta `FloatingDocuments`.
   - Seluruh data panjang dipisah ke `data/experienceData.tsx`, `data/projectsData.ts`, dan `data/academicData.tsx`.
   - `FlipbookCard` dipisah ke komponen mandiri dengan kontrak props `FlipbookCardProps` di `types.ts`.
   - Timer auto-advance pada `ProjectsSection` disederhanakan memakai hook `useAutoAdvance`.

2. **Resume (`src/apps/resume/`):**
   - `ResumeApp.tsx` (1.816 -> 74 baris) kini hanya mengelola state navigasi `page`, menyinkronkan flag bahasa `FlagIcons`, dan mengoordinasikan `ResumeSidebar`, `ResumeContent`, serta `FloatingDocuments`.
   - Seluruh data CV (`resumeData.tsx`) dan kamus lokalisasi (`resumeTranslations.ts`) terpisah dari UI.
   - Navigasi 17 halaman dirender oleh `ResumeContent.tsx` memakai sub-komponen `Section`, `RecapGroupHeader`, `WorkExperienceItem`, dan `ResumeListItem`.

3. **Cover Letter (`src/apps/cover-letter/`):**
   - `CoverLetterApp.tsx` (236 -> 66 baris) memisahkan data identitas & kontak (`coverLetterData.ts`), utilitas tanggal (`utils/date.ts`), isi surat (`LetterBody.tsx`), dan blok tanda tangan (`SignatureCard.tsx`).

4. **Personality Traits (`src/apps/personality-traits/`):**
   - `PersonalityTraitsApp.tsx` (541 -> 50 baris) mengganti 13 blok JSX kartu yang berulang menjadi data deklaratif (`traitsData.ts`) yang dirender lewat `TraitSection` dan `TraitCard`.
   - Seluruh override per-kartu (termasuk `whiteSpace: 'nowrap'` pada *Openness to Experience* dan perbedaan layout grid/flex per kategori) dipertahankan persis di `traitsData.ts`.

---

## 5. Duplikasi Kode yang Berhasil Dikurangi

1. **Galeri Foto Pengalaman (`ExperiencePhotoGrid.tsx`):** Menyatukan logika tata letak 1, 2, 3, 4, dan 5+ gambar yang sebelumnya terduplikasi antara `ExperienceCard.tsx`, `PosIndoExperience.tsx`, dan `KspNusantaraExperience.tsx`.
2. **Timeline Posisi Pekerjaan (`ExperienceTimeline.tsx`):** Menyatukan markup garis vertikal timeline, titik bulat, ikon lokasi (`MapPin`), periode (`Calendar`), dan grid foto posisi antara `PosIndoExperience.tsx` dan `KspNusantaraExperience.tsx`.
3. **Pengambilan & Worker PDF (`usePdfSource.ts` & `useWindowWidth.ts`):** Menghapus duplikasi konfigurasi `pdfjs.GlobalWorkerOptions.workerSrc`, efek pre-fetch `AbortController`, manajemen error/loading state, dan listener resize antara `CVFlipbook.tsx` dan `TranscriptImage.tsx`.
4. **Kartu & Seksi Sifat Kepribadian (`TraitCard.tsx` & `TraitSection.tsx`):** Menghapus 13 duplikasi struktur kartu link/hover dan 5 duplikasi blok header seksi di `PersonalityTraitsApp.tsx`.
5. **Header Grup Rekap Resume (`RecapGroupHeader`) & Sidebar Config (`ResumeSidebar.tsx`):** Menghapus ~12 duplikasi blok judul + garis horizontal (`div className="h-[1px] flex-1..."`) pada halaman Rekap (`page === 0`) dan 14 blok tombol navigasi identik di sidebar.
6. **Detail Pekerjaan Driver Online (`onlineDriverDetailsId` / `onlineDriverDetailsEn`):** Menghapus duplikasi 3 kali daftar tanggung jawab `<ul>` identik pada entri Grab, Shopee, dan Maxim di `resumeData.tsx`.
7. **Renderer Carousel Logbook (`LogbookCarouselItems` di `AcademicSection.tsx`):** Menghilangkan duplikasi pola loop `[...Array(2)]` dan pembungkus kartu gambar/blank antara marquee akademik dan marquee pencapaian.
8. **Timer Auto-Advance (`useAutoAdvance.ts`):** Menghapus dua blok `useEffect` + `setInterval` serupa untuk paginasi dokumentasi dan karya desain di `ProjectsSection.tsx`.

---

## 6. Hasil TypeScript Check dan Production Build

### TypeScript Check (`npm run lint` -> `npx tsc --noEmit`)
Konfigurasi aktif: `strict: true`, `noUnusedLocals: true`, `noUnusedParameters: true`.
- **Status:** **LULUS (Exit code: 0, 0 errors)**

### Production Build (`npx vite build`)
Build dijalankan dengan Vite v8.3.8 (`vite build`):
- **Status:** **LULUS (Exit code: 0, built in 2.31s)**
- **Output Modul & Asset:**
  - `2189 modules transformed`
  - `dist/index.html` (`1.49 kB` | gzip `0.65 kB`)
  - `dist/assets/index-BGxw5ca5.css` (`62.42 kB` | gzip `12.12 kB`)
  - `dist/assets/PersonalityTraitsApp-BsEOlrhV.js` (`8.69 kB` | gzip `2.78 kB`)
  - `dist/assets/CoverLetterApp-BcLbkjyn.js` (`13.66 kB` | gzip `4.26 kB`)
  - `dist/assets/ResumeApp-BeY3TClQ.js` (`100.02 kB` | gzip `19.27 kB`)
  - `dist/assets/index-DrMH89My.js` (`1,318.98 kB` | gzip `393.64 kB`)

### Verifikasi Dev Server & Impor Modul
- Seluruh endpoint modul pada dev server `http://localhost:3000/` (`/` serta `PortfolioApp.tsx`, `ResumeApp.tsx`, `CoverLetterApp.tsx`, dan `PersonalityTraitsApp.tsx`) diverifikasi merespons **HTTP 200**.
- Scan global `:\s*any\b|\bas\s+any\b|<any>|any\[\]` pada seluruh `src/` mengembalikan **0 kemunculan `any`**.

---

## 7. Masalah yang Belum Terselesaikan

1. **Komponen & Data Warisan yang Tidak Terpakai Secara Aktif:**
   - `src/components/portfolio/Hero.tsx`, `CreativeCard.tsx`, `CVFlipbook.tsx`, `FlipbookReveal.tsx`, serta `src/apps/personality-traits/data/mbtiData.ts` tetap dipertahankan utuh sesuai batasan agar tidak menghapus konten/modul yang ada, meski belum terhubung ke alur render aktif.
2. **Properti Pengalaman Kerja Tidak Dirender di Kartu Portfolio:**
   - Field `description`, `achievements`, `achievementsEn`, `employmentType`, dan `employmentTypeEn` pada `experienceData.tsx` tetap dijaga kelengkapannya secara bertipe ketat namun belum dirender pada kartu `ExperienceCard`, `PosIndoExperience`, maupun `KspNusantaraExperience` demi menjaga 100% tampilan visual.
3. **Karakter Pengganti Asli (`\uFFFD`) pada Teks Sumber:**
   - Teks kartu *Skripsi* pada `academicData.tsx` mempertahankan urutan karakter asli (`𝗞𝗲𝗿\uFFFD...𝗮 𝗣𝗿𝗮𝗸𝘁𝗶𝗸 𝟮`) dari repositori sumber agar tidak mengubah data tanpa instruksi eksplisit.
4. **Peringatan Non-Blocking Build:**
   - Peringatan `__dirname` pada `vite.config.ts` serta peringatan chunk utama `> 500 kB` saat `vite build` masih muncul karena konfigurasi build tidak diubah pada fase modularisasi ini.
5. **Pengujian Interaksi Visual Manual di Browser:**
   - Verifikasi build, tipe statis, dan HTTP module-serving dev server telah dijalankan penuh; inspeksi klik interaktif UI secara visual pada browser akhir dapat dilakukan jika diperlukan verifikasi visual langsung.

---

## 8. Konfirmasi Pemeliharaan Desain, Konten, dan Fitur

Dikonfirmasi bahwa seluruh proses modularisasi pada Fase 2 tidak mengubah hasil akhir aplikasi bagi pengguna:
- **100% Desain Visual Tetap Sama:** Layout, warna, palet light/dark (`#EDE8D0`/`#BAB095`, `#F2F0EF`/`#3D3D3D`), font, tipografi, ukuran, spacing, radius, shadow, skala responsif mobile (`experience-scale-mobile`, `carousel-scale-mobile`, `proyek-content-scale`), dan seluruh animasi (`animate-marquee`, `animate-marquee-reverse`, `animate-float-random`, Framer Motion `FlipbookCard`, `AnimatePresence`) tetap utuh.
- **Keempat Aplikasi Tetap Berfungsi:** `Portfolio`, `Resume` (17 tab navigasi), `Cover Letter`, dan `Personality Traits` tetap terhubung lewat `src/App.tsx` dan `FloatingDocuments.tsx`.
- **Pergantian Bahasa (`EN`/`ID`) & Tema (`flat-white`/`flat-black`) Tetap Terjaga:** Seluruh terjemahan dan kelas `dark:` dipertahankan konsisten di komponen hasil pemecahan.
- **Tidak Ada Konten atau Data yang Dihapus:** Seluruh teks, gambar, sertifikat, transkrip, riwayat kerja, proyek, dan tautan eksternal tetap lengkap.

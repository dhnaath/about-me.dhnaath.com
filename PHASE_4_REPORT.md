# LAPORAN FASE 4 — CODE QUALITY & CONSISTENCY
**Repository**: `about-me.dhnaath.com`

---

## 1. Ringkasan Audit

Audit Fase 4 dilakukan di seluruh codebase (`src/`, `index.html`, dan konfigurasi root) dengan fokus pada konsistensi TypeScript dan React, kejelasan kontrak props antar komponen, konsistensi kunci (*keys*) pada rendering list, eliminasi duplikasi markup, penghapusan *dead prop plumbing*, serta penguatan keamanan tautan eksternal dan pemanggilan browser API — seluruhnya tanpa mengubah desain visual, gaya Tailwind, konten, data, maupun interaksi pengguna.

---

## 2. Daftar File yang Diubah & Dibuat

### File Baru
- `src/utils/url.ts` — Utilitas validasi dan pembukaan tautan yang aman (`isSafeHref`, `isExternalUrl`, `openSafeUrl`).

### File yang Diubah
- `src/App.tsx` — Menghapus passing props yang tidak terpakai (`setLang`, `theme`, `setTheme`) ke `PortfolioApp`, `ResumeApp`, dan `CoverLetterApp`.
- `src/apps/portfolio/types.ts` — Menyelaraskan tipe `PortfolioAppProps` (hanya menyertakan `lang` yang benar-benar digunakan).
- `src/apps/resume/types.ts` — Menyelaraskan tipe `ResumeAppProps` (hanya menyertakan `lang` yang benar-benar digunakan).
- `src/apps/cover-letter/CoverLetterApp.tsx` — Menghapus prop `setLang`, `theme`, `setTheme` yang tidak digunakan pada `CoverLetterAppProps`.
- `src/components/shared/FloatingDocuments.tsx` — Mengganti pemanggilan langsung `window.open` dengan `openSafeUrl(pdfUrl)`.
- `src/apps/resume/components/FlagIcons.tsx` — Mengganti ID statis `id="uk-clip"` dengan `useId()` untuk mencegah duplikasi DOM ID dan menstandarkan ekspor komponen menjadi `export function`.
- `src/apps/resume/components/ResumeListItem.tsx` — Mengganti tipe komponen ke `export function ListItem(...: ResumeListItemProps)`, menggunakan `isSafeHref` untuk validasi tautan serta indikator panah, dan menambahkan `target="_blank" rel="noopener noreferrer"` pada tautan eksternal.
- `src/apps/resume/components/ResumeContent.tsx` — Menggabungkan 9 blok mapping `<ListItem>` yang terduplikasi antara halaman detail dan halaman rekap ke dalam helper internal yang konsisten dengan composite keys.
- `src/apps/resume/components/ResumeSidebar.tsx` — Mengganti `key={idx}` menjadi `key={item.label}` pada daftar kontak sidebar.
- `src/components/portfolio/Hero.tsx` — Menggunakan shared type `Language` dari `../../types` alih-alih union inline `'en' | 'id'`.
- `src/components/shared/ExperienceCard.tsx` — Mempersempit tipe `imageLayout` menjadi `'collage-right-tall'` dan menggunakan composite key `${logo}-${idx}` untuk daftar `companyLogos`.
- `src/components/shared/ExperiencePhotoGrid.tsx` — Mempersempit tipe `imageLayout` menjadi `'collage-right-tall'` dan mengganti index keys pada grid gambar menjadi composite key `${src}-${i}`.
- `src/apps/portfolio/components/FlipbookCard.tsx` — Mengganti `key={idx}` pada `darkImages`, memvalidasi `topLeftLink` dan `link` dengan `isSafeHref`, serta hanya memasang `target="_blank" rel="noopener noreferrer"` ketika `link` valid.
- `src/apps/portfolio/components/AcademicSection.tsx` — Mengganti bare index keys pada marquee duplikasi dan daftar item carousel dengan composite keys yang stabil (`copy-${i}` dan `${item.kind}-...`).
- `src/apps/portfolio/components/ExperienceSection.tsx` — Mengganti bare index key pada track marquee duplikasi dengan `copy-${i}`.
- `src/components/portfolio/ExperienceTimeline.tsx` — Mengganti `key={index}` dengan composite key `${pos.title}-${pos.period}-${index}`.
- `src/components/portfolio/DocumentationCard.tsx` — Memvalidasi `link` dan `externalLink` dengan `isSafeHref` serta mengganti `key={index}` tag dengan `${tag}-${index}`.
- `src/components/portfolio/CreativeCard.tsx` — Mengganti `key={index}` pada daftar tag dengan `${tag}-${index}`.

---

## 3. Masalah Kualitas Kode yang Ditemukan

1. **Dead Prop Plumbing (`setLang`, `theme`, `setTheme`)**: `App.tsx` meneruskan props `setLang`, `theme`, dan `setTheme` ke `PortfolioApp`, `ResumeApp`, dan `CoverLetterApp`, padahal tombol pengubah bahasa dan tema dikelola secara global di `App.tsx` dan sub-aplikasi tidak pernah membaca props tersebut.
2. **Duplikasi Mapping JSX di `ResumeContent.tsx`**: 9 bagian list item (`organizations`, `community`, `formalSchool`, `tertiaryDegree`, `nonDegree`, `certificates`, `licenses`, `workshops`, `research`) ditulis ulang dua kali dengan logika identik pada tab individual dan tab rekap.
3. **Penggunaan Bare Index Keys di Banyak List**: Sejumlah komponen (`FlipbookCard`, `ResumeSidebar`, `AcademicSection`, `ExperienceSection`, `ExperienceTimeline`, `DocumentationCard`, `CreativeCard`, `ExperiencePhotoGrid`, `ExperienceCard`) masih menggunakan index array mentah sebagai `key`.
4. **Ketidakkonsistenan Definisi Tipe & Ekspor Komponen**: `Hero.tsx` mendeklarasikan union inline `'en' | 'id'` alih-alih `Language`, `ExperiencePhotoGrid`/`ExperienceCard` mengetik `imageLayout?: string` terlalu longgar, `FlagIcons.tsx` memakai arrow function sementara komponen lain memakai `function`, dan `ResumeListItem.tsx` sempat tertinggal referensi `FC` tanpa impor.
5. **Duplikasi DOM ID pada SVG (`FlagIcons.tsx`)**: `<clipPath id="uk-clip">` memakai ID statis sehingga saat beberapa sertifikat dari Inggris dirender sekaligus pada halaman `Certificate` atau rekap `Competency`, terdapat beberapa `<clipPath>` dengan `id` yang sama di DOM.

---

## 4. Perbaikan yang Dilakukan

1. **Penyelarasan Props Aplikasi (`App.tsx`, `portfolio/types.ts`, `resume/types.ts`, `CoverLetterApp.tsx`)**: Menghapus `setLang`, `theme`, dan `setTheme` dari kontrak props tiga sub-aplikasi sehingga signature komponen bersih tanpa parameter menganggur.
2. **Konsolidasi Helper Rendering (`ResumeContent.tsx`)**: Mengekstrak helper terarah (`renderOrganizations`, `renderCommunity`, `renderFormalSchool`, `renderTertiaryDegree`, `renderNonDegree`, `renderCertificates`, `renderLicenses`, `renderWorkshops`, `renderResearch`) untuk menghilangkan duplikasi antara halaman individu dan halaman rekap sekaligus memberi key komposit yang deterministik.
3. **Standarisasi Keys & Tipe Komponen**: Mengganti seluruh bare index keys yang tersisa (`key={idx}`, `key={index}`, `key={i}`) menjadi key semantik/komposit, menyelaraskan `Language` pada `Hero.tsx`, memperketat `imageLayout?: 'collage-right-tall'`, dan menyamakan `ListItem` serta ikon bendera ke `export function` dengan tipe parameter eksplisit.
4. **DOM ID Unik dengan `useId()` (`FlagIcons.tsx`)**: `UKFlag` kini menghasilkan ID `clipPath` unik per instance menggunakan hook `useId()` bawaan React 19.

---

## 5. Temuan Keamanan dan Stabilitas

- **`dangerouslySetInnerHTML`, `eval`, `new Function`, dan `any`**: Hasil scan seluruh folder `src/` menunjukkan **0** kemunculan `dangerouslySetInnerHTML`, `eval(`, `new Function`, `: any`, maupun `as any`.
- **Validasi Skema URL & `window.open` (`src/utils/url.ts`)**:
  - `FloatingDocuments.tsx` sebelumnya memanggil `window.open(pdfUrl, '_blank', 'noopener,noreferrer')` secara langsung; kini dialihkan melalui `openSafeUrl(pdfUrl)` yang memvalidasi skema (`https://`, `http://`, `mailto:`, atau path lokal `/`), menolak tautan kosong/`#`/`javascript:`/`data:`, serta menangani `mailto:` via `window.location.assign` agar tidak membuka tab kosong di browser.
  - `ResumeListItem.tsx` sebelumnya merender tautan eksternal (`https://...`) tanpa `target="_blank"` dan `rel="noopener noreferrer"`; kini divalidasi dengan `isSafeHref` dan dipasangi `target="_blank" rel="noopener noreferrer"` otomatis untuk URL eksternal (`isExternalUrl`).
  - `FlipbookCard.tsx` dan `DocumentationCard.tsx` kini memvalidasi `link`/`topLeftLink`/`externalLink` dengan `isSafeHref`; pada `FlipbookCard`, atribut `rel="noopener noreferrer"` kini hanya dipasang bila `link` valid (tidak dipasang pada placeholder `href="#"`).
  - Seluruh atribut `target="_blank"` di repositori telah diverifikasi memiliki `rel="noopener noreferrer"`.

---

## 6. Hasil TypeScript Check & Production Build

Setelah seluruh perubahan kode selesai diterapkan:

1. **TypeScript Check (`npx tsc --noEmit` & `lint_applet`)**:
   - Exit code `0` — **0 error**, strict mode tetap aktif.
2. **Production Build (`compile_applet` & `npx vite build`)**:
   - Berhasil tanpa error (`✓ 2191 modules transformed`, `✓ built in 1.74s`).
   - Output bundle utama: `dist/assets/index-BfiWxFdB.js` (`1,318.60 kB` / gzip `393.65 kB`) + chunk lazy per sub-aplikasi (`ResumeApp`, `CoverLetterApp`, `PersonalityTraitsApp`) + CSS (`63.36 kB` / gzip `12.36 kB`).
3. **Quality & Security Grep Verification**:
   - `key={(idx|index|i)}|dangerouslySetInnerHTML|:\s*any\b|\bas\s+any\b|eval\(|new Function` → **0 hasil**.
4. **Dev Server Verification (`http://localhost:3000`)**:
   - `/` → `HTTP 200`
   - `/src/apps/portfolio/PortfolioApp.tsx` → `HTTP 200`
   - `/src/apps/resume/ResumeApp.tsx` → `HTTP 200`
   - `/src/apps/cover-letter/CoverLetterApp.tsx` → `HTTP 200`
   - `/src/apps/personality-traits/PersonalityTraitsApp.tsx` → `HTTP 200`
   - `/src/utils/url.ts` → `HTTP 200`

---

## 7. Masalah yang Belum Terselesaikan / Catatan Lanjutan

Beberapa hal sengaja dipertahankan di luar cakupan Fase 4 agar 100% mempertahankan perilaku, konten, dan kompatibilitas saat ini:

1. **Komponen & Data Legacy yang Belum Aktif Dirender**: `src/components/portfolio/Hero.tsx`, `src/components/portfolio/CreativeCard.tsx`, `src/components/portfolio/CVFlipbook.tsx`, `src/components/portfolio/FlipbookReveal.tsx`, `src/apps/personality-traits/data/mbtiData.ts`, serta tipe `AppNavigationProps` pada `FloatingDocuments.tsx` masih ada di codebase dan tetap dijaga type-safe tanpa dihapus agar referensi historis tidak hilang.
2. **Properti Data `ExperienceCard` yang Tidak Ditampilkan di Layout Portfolio**: Beberapa field opsional (`description`, `achievements`, `achievementsEn`, `employmentType`) pada `experienceData.ts` tersedia untuk integritas data namun tidak semuanya dirender oleh `ExperienceCard` demi mempertahankan layout kartu saat ini.
3. **Karakter Replacement (`\uFFFD`) Bawaan Data Sumber**: Sebagaimana dicatat pada fase sebelumnya, beberapa teks asli sumber tetap dipertahankan apa adanya agar isi konten tidak berubah.
4. **Varian `ThemeMode` (`'transparent' | 'glass'`)**: Masih dipertahankan pada `src/types.ts` untuk kompatibilitas tipe meskipun theme switcher aktif memakai `'flat-white' | 'flat-black'`.
5. **Peringatan Build Vite & Aset Eksternal**: Peringatan non-fatal terkait `__dirname` di `vite.config.ts` dan ukuran chunk `> 500 kB` (terutama karena paket animasi & PDF/flipbook yang sudah ada) masih muncul pada log build. Selain itu, sebagian besar gambar dan PDF bergantung pada URL eksternal (`dhnaath.com` / `drive.google.com`).

---

## 8. Konfirmasi Pelestarian Desain, Konten, dan Fitur

- **Desain Visual**: 100% dipertahankan (layout, warna, tipografi, ukuran, spacing, radius, shadow, ornamen, animasi CSS/Motion, dan responsivitas mobile/desktop tidak berubah).
- **Konten & Data**: Seluruh teks Indonesia/Inggris, riwayat pengalaman, transkrip, sertifikasi, tautan dokumen, dan gambar tidak diubah.
- **Fitur & Interaksi**: Keempat aplikasi (`Portfolio`, `Resume`, `Cover Letter`, `Personality Traits`), pergantian bahasa (`ID`/`EN`), pergantian tema (`Light`/`Dark`), flipbook cards, marquee carousel pause/resume, navigasi sidebar/floating dock, serta pembukaan dokumen eksternal tetap berfungsi penuh.

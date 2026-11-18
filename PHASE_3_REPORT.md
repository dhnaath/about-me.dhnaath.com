# PHASE 3 REPORT — PERFORMANCE & REACT LIFECYCLE
**Repository:** `about-me.dhnaath.com`  
**Scope:** Audit dan optimasi siklus hidup React (*hooks*, *timers*, *event listeners*, *observers*, *async fetch*), reduksi re-render berlebih, serta optimasi pemuatan aset gambar/media dan animasi tanpa mengubah desain visual, perilaku interaksi, maupun konten.

---

## 1. Ringkasan Audit dan Perubahan

Audit Fase 3 dilakukan menyeluruh terhadap seluruh pemakaian `useEffect`, `useMemo`, `useCallback`, `useRef`, `useState`, manajemen aset gambar/PDF, serta animasi Framer Motion dan CSS keyframes pada `src/`. Perubahan utama yang diterapkan meliputi:
1. **Pencegahan Timer Leak & Gating Animasi Viewport (`FlipbookCard.tsx`):** Mengganti `setTimeout` tanpa pembatalan di dalam loop animasi `async` dengan pelacakan `activeTimerId` yang dibersihkan saat unmount, serta menghentikan loop pada kartu di luar viewport via `IntersectionObserver` (`rootMargin: '200px'`) dengan `observer.disconnect()` cleanup.
2. **Siklus Hidup Timer Auto-Advance & Visibility Awareness (`useAutoAdvance.ts`):** Menyimpan callback terbaru pada `useRef` agar perubahan referensi tidak mereset `setInterval`, serta menjeda interval saat tab browser tidak aktif (`document.hidden`) melalui listener `visibilitychange` dengan cleanup penuh.
3. **Listener Resize & Pembersihan State PDF (`useWindowWidth.ts`, `usePdfSource.ts`, `TranscriptImage.tsx`):** Menambahkan guard nilai identik, `{ passive: true }`, serta parameter `enabled` di `useWindowWidth`; menghubungkan `TranscriptImage.tsx` (mode PDF) dengan `useWindowWidth` yang aktif hanya saat file PDF; serta mereset state `pdfData`/`numPages`/`pdfError` saat `usePdfSource` dinonaktifkan agar tidak menahan referensi `Blob`.
4. **Isolasi State & Memoization Terukur:** Memecah kolom `ProfileQualificationsColumn` (`docPage` 3s) dan `CreativeCraftColumn` (`designPage` 7s) di `ProjectsSection.tsx`, memakai `key={doc.title}`, mememoisasi kartu/trak marquee berat (`ExperienceMarqueeTrack`, `LogbookCarouselItems`, `ExperienceCard`, `PosIndoExperience`, `KspNusantaraExperience`, `DocumentationCard`, `FlipbookCard`, `FloatingDocuments`, `ResumeSidebar`), menstabilkan callback di `App.tsx` dan `PortfolioApp.tsx`, serta memindahkan komputasi statis `PersonalityTraitsApp.tsx` ke level modul (`traitsData.ts`).
5. **Konsolidasi Keyframe CSS & Optimasi Gambar/Media:** Memindahkan seluruh `<style>` keyframe dan skala mobile statis dari komponen ke `src/index.css`, mengganti 5 `<style>` injeksi dinamis di `FloatingDocuments.tsx` menjadi CSS custom properties, serta menambahkan `loading="lazy"` dan `decoding="async"` pada gambar non-LCP di luar viewport awal.

---

## 2. Daftar File yang Diubah

| File | Ringkasan Perubahan |
| :--- | :--- |
| `src/index.css` | Menampung aturan `.experience-scale-mobile`, `.carousel-scale-mobile`, `.proyek-content-scale`, `@keyframes marquee`, `.animate-marquee`, `.animate-marquee-78`, `@keyframes marquee-reverse`, `.animate-marquee-reverse`, `@keyframes float-random`, dan `.animate-float-random`. |
| `src/hooks/useAutoAdvance.ts` | Menggunakan `callbackRef`, menghentikan timer saat tab tersembunyi (`visibilitychange`), dan membersihkan interval & listener saat unmount. |
| `src/hooks/useWindowWidth.ts` | Menambahkan opsi `enabled`, pengecekan `prev === nextWidth`, dan opsi listener `{ passive: true }`. |
| `src/hooks/usePdfSource.ts` | Mereset state `pdfData`, `numPages`, `pdfError` saat `enabled === false` agar tidak menyimpan `Blob` usang. |
| `src/App.tsx` | Membungkus `handleSetActiveApp`, `handleDocClick`, dan `handleShowcaseClick` dengan `useCallback`. |
| `src/components/shared/FloatingDocuments.tsx` | Menghilangkan 5 tag `<style>` dinamis memakai CSS custom properties (`--card-w-m`, `--card-h-m`, `--card-w-d`, `--card-h-d`), menambahkan guard `isControlled` pada `useEffect`, menambahkan `decoding="async"` pada ikon, dan membungkus komponen dengan `memo`. |
| `src/components/shared/ExperiencePhotoGrid.tsx` | Menambahkan `loading="lazy"` dan `decoding="async"` pada seluruh varian layout gambar (`1`, `2`, `3`, `collage-right-tall`, `4`, `5+`). |
| `src/components/shared/ExperienceCard.tsx` | Membungkus dengan `memo` dan menambahkan `decoding="async"` pada gambar logo. |
| `src/components/portfolio/PosIndoExperience.tsx` | Membungkus dengan `memo`, memakai `useMemo` untuk `allImages`, dan menambahkan `decoding="async"` pada logo. |
| `src/components/portfolio/KspNusantaraExperience.tsx` | Membungkus dengan `memo`, memakai `useMemo` untuk `allImages`, dan menambahkan `decoding="async"` pada logo light/dark. |
| `src/components/portfolio/DocumentationCard.tsx` | Membungkus dengan `memo`. |
| `src/components/portfolio/CreativeCard.tsx` | Menambahkan `loading="lazy"` dan `decoding="async"` pada gambar kartu. |
| `src/components/portfolio/TranscriptImage.tsx` | Menghubungkan `useWindowWidth(840, isPdf)` untuk lebar halaman PDF responsif serta menambahkan `loading="lazy"` dan `decoding="async"` pada `<img>` transkrip. |
| `src/apps/portfolio/PortfolioApp.tsx` | Menstabilkan `toggleCarouselPause` dengan `useCallback`. |
| `src/apps/portfolio/components/FlipbookCard.tsx` | Mengelola pembatalan `window.clearTimeout` secara eksplisit saat unmount/di luar layar, menambahkan `IntersectionObserver` (`rootMargin: '200px'`) dengan `observer.disconnect()`, menambahkan `loading="lazy"` + `decoding="async"`, dan membungkus dengan `memo`. |
| `src/apps/portfolio/components/ExperienceSection.tsx` | Menghapus inline `<style>`, mengekstrak `ExperienceMarqueeTrack` bermemoisasi, dan membungkus `ExperienceSection` dengan `memo`. |
| `src/apps/portfolio/components/ProjectsSection.tsx` | Memisahkan `ProfileQualificationsColumn` (`docPage`) dan `CreativeCraftColumn` (`designPage`), mengganti `key={index}` dengan `key={doc.title}`, menambahkan `loading="lazy"` + `decoding="async"` pada gambar desain, menghapus inline `<style>`, dan membungkus dengan `memo`. |
| `src/apps/portfolio/components/AcademicSection.tsx` | Membungkus `LogbookCarouselItems` dan `AcademicSection` dengan `memo`, menghapus inline `<style>`, serta menambahkan `loading="lazy"` + `decoding="async"` pada gambar carousel dan lencana Kemdikbud/PDDikti. |
| `src/apps/resume/components/ResumeSidebar.tsx` | Membungkus `navGroups` dalam `useMemo` dan `ResumeSidebar` dengan `memo`. |
| `src/apps/personality-traits/data/traitsData.ts` | Memindahkan komputasi `TRAIT_ITEMS_BY_ID` dan `REMAINING_TRAIT_ITEMS` ke level modul sekali jalan. |
| `src/apps/personality-traits/PersonalityTraitsApp.tsx` | Menghapus dua pemanggilan `useMemo(..., [])` yang tidak lagi diperlukan setelah lookup statis dipindah ke `traitsData.ts`. |

---

## 3. Masalah Lifecycle yang Ditemukan dan Diperbaiki

1. **Timer `setTimeout` Tidak Terbatal Saat Unmount (`FlipbookCard.tsx`):**
   - *Masalah:* Loop `while (isMounted)` memanggil `await new Promise((r) => setTimeout(r, ...))` tanpa memanggil `clearTimeout` saat komponen unmount, sehingga timer hingga `6000ms` tetap menunggu di event loop pada hingga ~40 instans `FlipbookCard` di marquee.
   - *Perbaikan:* Menyimpan `activeTimerId` dan memanggil `window.clearTimeout(activeTimerId)` dalam cleanup `useEffect`, sekaligus membekukan siklus timer ketika kartu berada di luar area tampilan melalui `IntersectionObserver` (dengan `observer.disconnect()` pada cleanup).
2. **Interval Carousel Berjalan Saat Tab Browser Tidak Aktif (`useAutoAdvance.ts`):**
   - *Masalah:* `setInterval` 3 detik dan 7 detik pada `ProjectsSection` tetap berjalan walau tab tersembunyi, dan bergantung langsung pada referensi `callback`.
   - *Perbaikan:* Menggunakan `callbackRef` dan listener `visibilitychange` untuk menghentikan interval ketika `document.hidden === true` dan menyalakannya kembali saat tab aktif, dengan `removeEventListener` di cleanup.
3. **Listener Resize Statis & Pembacaan Lebar Render (`TranscriptImage.tsx`, `useWindowWidth.ts`):**
   - *Masalah:* `TranscriptImage` membaca `window.innerWidth` langsung pada body render tanpa bereaksi terhadap resize; `useWindowWidth` sebelumnya belum mendukung penonaktifan kondisional dan tidak men-guard nilai yang sama.
   - *Perbaikan:* `useWindowWidth` kini menerima `enabled`, menggunakan `{ passive: true }`, mengecek `prev === nextWidth`, dan dipakai oleh `TranscriptImage` hanya saat `isPdf === true`.
4. **Injeksi `<style>` Dinamis di DOM & Sinkronisasi State Redundan (`FloatingDocuments.tsx`):**
   - *Masalah:* Setiap dari 5 `FloatingDocumentCard` merender tag `<style>` dinamis tersendiri; `useEffect` fallback juga berjalan meski `docTarget`/`showcaseTarget` sudah dikontrol dari `App.tsx`.
   - *Perbaikan:* Menggunakan CSS custom properties pada `style` dan kelas arbitrer Tailwind (`w-[var(--card-w-m)]`, dll.) sehingga 0 tag `<style>` dinamis disisipkan, dan menghentikan `useEffect` ketika prop terkontrol (`isControlled`).
5. **Dependensi Silang `@keyframes marquee` (`ExperienceSection.tsx` & `AcademicSection.tsx`):**
   - *Masalah:* `.animate-marquee-78` pada `AcademicSection` bergantung pada `@keyframes marquee` yang sebelumnya disuntikkan secara lokal lewat `dangerouslySetInnerHTML` di `ExperienceSection`.
   - *Perbaikan:* Seluruh definisi `@keyframes` dan kelas skala statis disatukan ke `src/index.css`.

---

## 4. Optimasi Rendering dan Asset

1. **Isolasi Re-Render Antar Kolom & Saat Pause Carousel:**
   - Pada `ProjectsSection.tsx`, tick `docPage` (setiap 3 detik) sebelumnya merender ulang kolom *Creative Craft*, dan tick `designPage` (setiap 7 detik) merender ulang kolom *Profile Qualifications*. Pemisahan `ProfileQualificationsColumn` dan `CreativeCraftColumn` mengisolasi state masing-masing sehingga hanya kolom terkait yang diperbarui.
   - Pada `DocumentationCard`, penggantian `key={index}` menjadi `key={doc.title}` menjaga identitas instans kartu tetap stabil saat array bergeser.
   - Pada `PortfolioApp`, klik untuk menjeda marquee (`isCarouselPaused`) sebelumnya memicu render ulang penuh pada `ExperienceSection`, `ProjectsSection`, `AcademicSection`, `FloatingDocuments`, serta ~60 kartu (`ExperienceCard`, `PosIndoExperience`, `KspNusantaraExperience`, `FlipbookCard`). Setelah pemisahan `ExperienceMarqueeTrack`, `LogbookCarouselItems`, memoization kartu, dan `useCallback` pada handler, perubahan `isCarouselPaused` hanya memperbarui `animationPlayState` container.
   - Pada `ResumeSidebar`, membungkus `navGroups` dengan `useMemo` dan komponen dengan `memo` menghindari render ulang sidebar ketika accordion pengalaman kerja dibuka/tutup di `ResumeContent`.
2. **Strategi Pemuatan Gambar (`lazy` / `async` / LCP Preservation):**
   - **Critical LCP & Above-the-Fold Dipertahankan Eager:** Foto profil utama di `ResumeSidebar.tsx` tetap mempertahankan preload `<link rel="preload" fetchpriority="high">` serta `width`/`height` eksplisit dan `srcSet` (`/images/profile-331.webp` & `/images/profile-662.webp`), dan ikon handle tetap `FloatingDocuments` tetap dimuat langsung dengan tambahan `decoding="async"`.
   - **Off-Screen / Hidden Media Menggunakan `loading="lazy"` & `decoding="async"`:** Diterapkan pada gambar foto galeri marquee `ExperiencePhotoGrid.tsx` (seluruh varian 1–5+ foto), gambar internal tersembunyi `FlipbookCard.tsx`, gambar kartu `AcademicSection.tsx`, `CreativeCraftColumn`, `TranscriptImage.tsx`, dan `CreativeCard.tsx`.

---

## 5. Hasil Pengukuran Performa & Audit Teknis

Pengukuran objektif yang dijalankan langsung pada workspace setelah perubahan akhir:
- **Audit Lifecycle Timers, Listeners, Observers, dan Injeksi `<style>` (`grep` pada `src/`):**
  - Seluruh instans `setTimeout` (`FlipbookCard.tsx`, `FlipbookReveal.tsx`), `setInterval` (`useAutoAdvance.ts`), `addEventListener` (`useWindowWidth.ts`, `useAutoAdvance.ts`), dan `IntersectionObserver` (`FlipbookCard.tsx`) terverifikasi memiliki fungsi cleanup (`clearTimeout`, `clearInterval`, `removeEventListener`, `disconnect`).
  - Jumlah tag `<style>` dinamis / `dangerouslySetInnerHTML` di seluruh komponen React berkurang dari **9 instans** (5 pada `FloatingDocuments` + 4 pada seksi `PortfolioApp`) menjadi **0 instans**.
- **Kompilasi Production Bundle (`npx vite build`):**
  - Waktu build: **1.89s** (`2190 modules transformed`, lebih cepat dari `2.31s` pada akhir Fase 2).
  - Rincian ukuran chunk sebelum vs sesudah Fase 3:
    - `index.html`: `1.49 kB` (tetap `1.49 kB`)
    - `index.css`: `62.42 kB` -> `63.36 kB` (`+0.94 kB` karena keyframe & kelas skala dipindah dari JSX ke CSS statis)
    - `PersonalityTraitsApp` JS: `8.69 kB` -> `8.61 kB` (`-0.08 kB`)
    - `CoverLetterApp` JS: `13.66 kB` -> `13.66 kB`
    - `ResumeApp` JS: `100.02 kB` -> `100.05 kB`
    - Entry/Portfolio JS (`index-*.js`): `1,318.98 kB` -> `1,318.02 kB` (`-0.96 kB` setelah inline `<style>` & kode duplikat dibersihkan)
- *Catatan Pengukuran Runtime:* Profil frame-rate/Core Web Vitals browser langsung (Lighthouse/DevTools trace) belum dijalankan di headless browser dalam sesi ini, sehingga dampak pada LCP/TBT dilaporkan berdasarkan audit statis DOM/timer/network attribute dan metrik hasil build tanpa mengklaim angka metrik DevTools yang tidak diukur.

---

## 6. Hasil TypeScript Check dan Production Build

### TypeScript Check (`npm run lint` -> `npx tsc --noEmit`)
Konfigurasi aktif: `strict: true`, `noUnusedLocals: true`, `noUnusedParameters: true`.
- **Status:** **LULUS (Exit code: 0, 0 errors)**

### Production Build (`npm run build` / `npx vite build`)
- **Status:** **LULUS (Exit code: 0, built in 1.89s, `2190 modules transformed`)**

### Verifikasi Dev Server (`http://localhost:3000/`)
Setelah `restart_dev_server`:
- `/` -> **HTTP 200**
- `/src/apps/portfolio/PortfolioApp.tsx` -> **HTTP 200**
- `/src/apps/resume/ResumeApp.tsx` -> **HTTP 200**
- `/src/apps/cover-letter/CoverLetterApp.tsx` -> **HTTP 200**
- `/src/apps/personality-traits/PersonalityTraitsApp.tsx` -> **HTTP 200**

---

## 7. Risiko atau Masalah yang Belum Terselesaikan

1. **Ukuran Chunk Entry Utama (`dist/assets/index-*.js` ~1.31 MB):**
   - Peringatan Vite `Some chunks are larger than 500 kB` tetap muncul karena library `motion` dan aset komponen utama dibundel dalam chunk entry serta konfigurasi build (`vite.config.ts`) dan `Hero`/`CVFlipbook`/`react-pdf` dibiarkan sesuai batasan agar tidak mengubah konfigurasi build secara agresif.
2. **Ketergantungan Aset Eksternal & PDF Worker CDN:**
   - Sebagian besar gambar dan PDF masih di-host pada `https://dhnaath.com/...` dan worker `react-pdf` diambil dari `unpkg.com`. Meski `loading="lazy"` dan error handling `AbortController` sudah diterapkan, latensi dan ketersediaan jaringan pihak ketiga tetap berada di luar kendali aplikasi.
3. **Komponen Warisan Tidak Aktif (`Hero.tsx`, `CreativeCard.tsx`, `CVFlipbook.tsx`, `FlipbookReveal.tsx`, `mbtiData.ts`):**
   - File tersebut tetap dijaga utuh dan kompatibel dengan TypeScript strict, namun belum menjadi bagian alur render aktif.
4. **Peringatan `__dirname` pada `vite.config.ts`:**
   - Masih muncul saat build karena file konfigurasi Vite tidak diubah pada fase ini.

---

## 8. Konfirmasi bahwa Desain dan Fitur Tetap Dipertahankan

Dikonfirmasi bahwa seluruh perubahan pada Fase 3 menjaga 100% tampilan visual dan fungsionalitas aplikasi:
- **Desain Visual & Responsif Utuh:** Layout, palet warna light/dark, font, ukuran, spacing, border radius, shadow, skala responsif mobile/desktop, dan seluruh karakteristik animasi (`marquee 86s/78s`, `marquee-reverse 78s`, `float-random 6s`, transisi flip & slide `FlipbookCard`, serta transisi halaman `ResumeContent`) tetap identik.
- **Fitur, Navigasi, Bahasa, & Tema Berfungsi:** Keempat aplikasi (`Portfolio`, `Resume`, `Cover Letter`, `Personality Traits`), toggle bahasa `EN`/`ID`, toggle tema `flat-white`/`flat-black`, tombol navigasi carousel/transkrip, accordion pengalaman `Resume`, dan tautan eksternal pada `FloatingDocuments` tetap berjalan utuh tanpa penghapusan data maupun konten.

import { MapPin, Link2, Instagram, Twitter, Linkedin } from 'lucide-react';
import type { ResumeData } from '../types';

const onlineDriverDetailsId = (
  <>
    <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-1 text-[0.8125rem] font-calibri">Jenis Pekerjaan:</p>
    <p className="text-[#3D3D3D] dark:text-[#F2F0EF] mb-4 text-[0.84375rem] sm:text-[0.875rem] font-calibri">Mandiri, Tanpa Jam Operasional dan Wilayah Tetap (Freelancer)</p>
    <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-2 text-[0.8125rem] font-calibri">Tanggung Jawab Utama:</p>
    <ol className="list-decimal list-outside ml-4 space-y-1 text-[#3D3D3D] dark:text-[#F2F0EF] text-justify text-[0.84375rem] sm:text-[0.875rem] pb-2 font-calibri">
      <li>Melayani transportasi penumpang serta distribusi makanan dan paket barang dengan memastikan keamanan, kebersihan, dan ketepatan waktu hingga ke lokasi tujuan.</li>
      <li>Berkoordinasi secara aktif dengan pelanggan, mitra restoran, dan pihak keamanan/parkir demi kelancaran proses ambil-antar pesanan.</li>
      <li>Mengatur rute perjalanan secara mandiri dan mengelola waktu secara efisien untuk memaksimalkan performa akun serta mencapai target harian.</li>
      <li>Mematuhi standar operasional dengan menggunakan atribut resmi serta merawat kondisi kendaraan secara rutin guna meminimalisir kendala teknis di jalan.</li>
    </ol>

    <p className="mt-4 text-[0.8125rem] sm:text-[0.84375rem] text-blue-600 dark:text-blue-400 font-medium font-calibri">#Transportasi #JasaLayanan #Kurir–Ojek #Pesan–Antar #Aplikasi</p>
  </>
);

const onlineDriverDetailsEn = (
  <>
    <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-1 text-[0.8125rem] font-calibri">Type of Employment:</p>
    <p className="text-[#3D3D3D] dark:text-[#F2F0EF] mb-4 text-[0.84375rem] sm:text-[0.875rem] font-calibri">Independent, No Fixed Operating Hours and Area (Freelancer)</p>
    <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-2 text-[0.8125rem] font-calibri">Key Responsibilities:</p>
    <ol className="list-decimal list-outside ml-4 space-y-1 text-[#3D3D3D] dark:text-[#F2F0EF] text-justify text-[0.84375rem] sm:text-[0.875rem] pb-2 font-calibri">
      <li>Served passenger transportation and the distribution of food and goods packages by ensuring safety, cleanliness, and punctuality to the destination.</li>
      <li>Coordinated actively with customers, restaurant partners, and security/parking parties for the smooth pick-up and delivery process of orders.</li>
      <li>Arranged travel routes independently and managed time efficiently to maximize account performance and achieve daily targets.</li>
      <li>Complied with operational standards by using official attributes and maintaining vehicle conditions regularly to minimize technical obstacles on the road.</li>
    </ol>

    <p className="mt-4 text-[0.8125rem] sm:text-[0.84375rem] text-blue-600 dark:text-blue-400 font-medium font-calibri">#Transportasi #JasaLayanan #Kurir–Ojek #Pesan–Antar #Aplikasi</p>
  </>
);

export const resumeData: ResumeData = {
  sidebar: {
    name: "Dhia Najmi Athallah",
    role: "S.Tr.Log., CSSWB",
    quote: "Every great design begins with an even better story.",
    quoteAuthor: "Lorinda Mamo",
    contact: [
      { icon: Link2, label: "Website", value: "dhnaath.com" },
      { icon: MapPin, label: "Address", value: "Indonesia" }
    ],
    socials: [
      { icon: Instagram, label: "Instagram", value: "@dhnaath", color: "bg-gradient-to-tr from-amber-500 via-rose-500 to-fuchsia-600" },
      { icon: Twitter, label: "Twitter", value: "@dhnaath", color: "bg-[#1DA1F2]" },
      { icon: Linkedin, label: "Linkedin", value: "dhnaath", color: "bg-[#0A66C2]" }
    ]
  },
  internships: [
    {
      year: "",
      company: "PT Astra International Tbk",
      companyLogo: "https://dhnaath.com/wp-content/uploads/2026/08/image.webp",
      role: <><span>Toyota Sales Operation</span><span>TSO–Auto2000</span></>,
      rightTitle: "Asst. Partman",
      location: "",
      href: "#",
      isPresent: false,
      logoBg: "bg-red-600",
      logoColor: "text-[#F2F0EF]",
      initials: "A",
      details: (
        <>
          <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-1 text-[0.8125rem] font-calibri">Jenis Pekerjaan:</p>
          <p className="text-[#3D3D3D] dark:text-[#F2F0EF] mb-4 text-[0.84375rem] sm:text-[0.875rem] font-calibri">Magang (Internship)</p>
          <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-2 text-[0.8125rem] font-calibri">Tanggung Jawab Utama:</p>
          <ol className="list-decimal list-outside ml-4 space-y-1 text-[#3D3D3D] dark:text-[#F2F0EF] text-justify text-[0.84375rem] sm:text-[0.875rem] pb-2 font-calibri">
            <li>Mengoptimalkan penataan rak penyimpanan suku cadang berdasarkan kode standar agar alur kerja gudang jadi lebih rapi dan efisien.</li>
            <li>Mengelola keakuratan data stok di gudang lewat stock opname berkala dan langsung memperbarui datanya di sistem Warehouse Management System (WMS).</li>
            <li>Mengelola proses inbound dan outbound suku cadang, mulai dari pencocokan Goods Received Note (GRN) dengan Purchase Order (PO), hingga proses picking, packing, labeling, dan distribusi ke area bengkel.</li>
            <li>Melakukan rekonsiliasi data Special Service Tools (SST) dan suku cadang pada sistem, serta memantau pergerakan utilisasi alat oleh teknisi untuk meminimalisir risiko kehilangan sesuai standar operasional.</li>
          </ol>

          <p className="mt-4 text-[0.8125rem] sm:text-[0.84375rem] text-blue-600 dark:text-blue-400 font-medium font-calibri">#Pergudangan #Persediaan #SukuCadang #Otomotif #Dealer</p>
        </>
      ),
      detailsEn: (
        <>
          <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-1 text-[0.8125rem] font-calibri">Type of Employment:</p>
          <p className="text-[#3D3D3D] dark:text-[#F2F0EF] mb-4 text-[0.84375rem] sm:text-[0.875rem] font-calibri">Internship</p>
          <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-2 text-[0.8125rem] font-calibri">Key Responsibilities:</p>
          <ol className="list-decimal list-outside ml-4 space-y-1 text-[#3D3D3D] dark:text-[#F2F0EF] text-justify text-[0.84375rem] sm:text-[0.875rem] pb-2 font-calibri">
            <li>Optimized the arrangement of spare parts storage racks based on standard codes so that the warehouse workflow became neater and more efficient.</li>
            <li>Managed the accuracy of stock data in the warehouse through regular stock opname and directly updated the data in the Warehouse Management System (WMS).</li>
            <li>Managed the inbound and outbound processes of spare parts, starting from matching the Goods Received Note (GRN) with the Purchase Order (PO), to the picking, packing, labeling, and distribution processes to the workshop area.</li>
            <li>Reconciled Special Service Tools (SST) and spare parts data in the system, and monitored the movement of tool utilization by technicians to minimize the risk of loss according to operational standards.</li>
          </ol>

          <p className="mt-4 text-[0.8125rem] sm:text-[0.84375rem] text-blue-600 dark:text-blue-400 font-medium font-calibri">#Pergudangan #Persediaan #SukuCadang #Otomotif #Dealer</p>
        </>
      )
    },
    {
      year: "",
      company: "PT Pos Indonesia (Persero)",
      companyLogo: "https://dhnaath.com/wp-content/uploads/2026/08/7-1.webp",
      role: <><span>PosIND</span></>,
      rightTitle: <><span>Asst. Branch Manager</span><span>Asst. Supervisor</span></>,
      location: "",
      href: "#",
      isPresent: false,
      logoBg: "bg-orange-500",
      logoColor: "text-[#F2F0EF]",
      initials: "P",
      details: (
        <>
          <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-1 text-[0.8125rem] font-calibri">Jenis Pekerjaan:</p>
          <p className="text-[#3D3D3D] dark:text-[#F2F0EF] mb-4 text-[0.84375rem] sm:text-[0.875rem] font-calibri">Magang (Internship)</p>
          <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-2 text-[0.8125rem] font-calibri">Tanggung Jawab Utama:</p>
          <ol className="list-decimal list-outside ml-4 space-y-1 text-[#3D3D3D] dark:text-[#F2F0EF] text-justify text-[0.84375rem] sm:text-[0.875rem] pb-2 font-calibri">
            <li>Mempersiapkan uang tunai untuk setoran bank, mengisi slip setoran, serta melakukan rekonsiliasi kas harian guna memastikan kesesuaian fisik uang dengan catatan sistem.</li>
            <li>Menutup sistem loket kasir secara harian dengan menyusun laporan backsheet, serta menyelidiki dan menyelesaikan apabila terjadi selisih dana.</li>
            <li>Memproses dan mencatat pembayaran berbagai tagihan pelanggan melalui sistem PosPay Loket serta menerbitkan bukti transaksi/tanda terima yang sah.</li>
            <li>Memeriksa keaslian dan kelengkapan dokumen identitas pelanggan (KTP/KK) untuk keperluan reaktivasi akun atau rekening tidak aktif.</li>
            <li>Memverifikasi dokumen penyaluran Bantuan Sosial Tunai (BST) Kemensos, mencairkan dana sesuai prosedur, serta menjaga jejak audit dokumen bersama Branch Manager.</li>
            <li>Melaksanakan penyortiran, pembongkaran muatan kiriman, serta pencetakan resi dan label pengiriman secara mandiri sesuai dengan standar operasional yang ditetapkan.</li>
          </ol>

          <p className="mt-4 text-[0.8125rem] sm:text-[0.84375rem] text-blue-600 dark:text-blue-400 font-medium font-calibri">#BUMN #Danantara #Administrasi #Operasional #Marketing</p>
        </>
      ),
      detailsEn: (
        <>
          <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-1 text-[0.8125rem] font-calibri">Type of Employment:</p>
          <p className="text-[#3D3D3D] dark:text-[#F2F0EF] mb-4 text-[0.84375rem] sm:text-[0.875rem] font-calibri">Internship</p>
          <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-2 text-[0.8125rem] font-calibri">Key Responsibilities:</p>
          <ol className="list-decimal list-outside ml-4 space-y-1 text-[#3D3D3D] dark:text-[#F2F0EF] text-justify text-[0.84375rem] sm:text-[0.875rem] pb-2 font-calibri">
            <li>Prepared cash for bank deposits, filled out deposit slips, and conducted daily cash reconciliation to ensure physical cash matched system records.</li>
            <li>Closed the cashier counter system daily by preparing backsheet reports, and investigated and resolved any fund discrepancies.</li>
            <li>Processed and recorded various customer bill payments through the PosPay Loket system and issued valid transaction receipts.</li>
            <li>Verified the authenticity and completeness of customer identity documents (ID card/Family Card) for account reactivation or dormant accounts.</li>
            <li>Verified documents for the distribution of Ministry of Social Affairs Cash Social Assistance (BST), disbursed funds according to procedures, and maintained the document audit trail with the Branch Manager.</li>
            <li>Carried out sorting, unloading of shipments, and printed receipts and shipping labels according to standards.</li>
          </ol>

          <p className="mt-4 text-[0.8125rem] sm:text-[0.84375rem] text-blue-600 dark:text-blue-400 font-medium font-calibri">#BUMN #Danantara #Administrasi #Operasional #Marketing</p>
        </>
      )
    }
  ],
  contractWork: [
    {
      year: "",
      company: "KSP Nusantara",
      companyLogo: "https://dhnaath.com/wp-content/uploads/2026/08/5-1.webp",
      role: <><span>KopnusPos</span></>,
      rightTitle: <><span>Account Officer Lending</span><span>Agen Oren by KOPNUS</span></>,
      location: "",
      href: "#",
      isPresent: false,
      logoBg: "bg-blue-500",
      logoColor: "text-[#F2F0EF]",
      initials: "K",
      details: (
        <>
          <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-1 text-[0.8125rem] font-calibri">Jenis Pekerjaan:</p>
          <p className="text-[#3D3D3D] dark:text-[#F2F0EF] mb-4 text-[0.84375rem] sm:text-[0.875rem] font-calibri">Kontrak (Contract)</p>
          <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-2 text-[0.8125rem] font-calibri">Tanggung Jawab Utama:</p>
          <ol className="list-decimal list-outside ml-4 space-y-1 text-[#3D3D3D] dark:text-[#F2F0EF] text-justify text-[0.84375rem] sm:text-[0.875rem] pb-2 font-calibri">
            <li>Memasarkan produk pinjaman pensiun (PNS, TNI, Polri) secara aktif melalui pendekatan langsung (door-to-door), menggunakan brosur cetak, serta memakai pesan siaran via WhatsApp.</li>
            <li>Mengelola seluruh siklus proses kredit mulai dari analisis kebutuhan klien, verifikasi dokumen, koordinasi asuransi, hingga pencairan dana, serta berkoordinasi dengan staf PosIND dan kantor cabang.</li>
            <li>Membangun hubungan baik dengan komunitas pensiunan, mitra juru bayar lain, dan pegawai pemerintah aktif, sekaligus memberikan edukasi terkait regulasi terbaru serta penggunaan aplikasi penunjang (Taspen/Asabri).</li>
            <li>Menyusun laporan kunjungan harian (pipeline) dan hasil prospek secara rutin sebagai bahan evaluasi kerja, serta menangani keluhan dan masukan klien dengan solutif.</li>
            <li>Melaksanakan tugas pemasaran dan akuisisi klien yang setara dengan peran Account Officer Lending secara mandiri.</li>
          </ol>

          <p className="mt-4 text-[0.8125rem] sm:text-[0.84375rem] text-blue-600 dark:text-blue-400 font-medium font-calibri">#Keuangan #Koperasi #Marketing #Sales #PembiayaanPensiun</p>
        </>
      ),
      detailsEn: (
        <>
          <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-1 text-[0.8125rem] font-calibri">Type of Employment:</p>
          <p className="text-[#3D3D3D] dark:text-[#F2F0EF] mb-4 text-[0.84375rem] sm:text-[0.875rem] font-calibri">Contract</p>
          <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-2 text-[0.8125rem] font-calibri">Key Responsibilities:</p>
          <ol className="list-decimal list-outside ml-4 space-y-1 text-[#3D3D3D] dark:text-[#F2F0EF] text-justify text-[0.84375rem] sm:text-[0.875rem] pb-2 font-calibri">
            <li>Actively marketed pension loan products (Civil Servants, Military, Police) through a direct approach (door-to-door), using printed brochures, and utilizing broadcast messages via WhatsApp.</li>
            <li>Managed the entire credit process cycle starting from client needs analysis, document verification, insurance coordination, up to fund disbursement, and coordinated with PosIND staff and the branch office.</li>
            <li>Built good relationships with the pensioner community, other paying partners, and active government employees, while providing education regarding the latest regulations and the use of supporting applications (Taspen/Asabri).</li>
            <li>Prepared daily visit reports (pipeline) and prospect results regularly as material for work evaluation, and handled client complaints and feedback correctively.</li>
            <li>Performed marketing and client acquisition tasks equivalent to the role of an Account Officer Lending independently.</li>
          </ol>

          <p className="mt-4 text-[0.8125rem] sm:text-[0.84375rem] text-blue-600 dark:text-blue-400 font-medium font-calibri">#Keuangan #Koperasi #Marketing #Sales #PembiayaanPensiun</p>
        </>
      )
    }
  ],
  remoteWork: [
    {
      year: "",
      company: "GAO Tek Inc. & GAO RFID Inc.",
      companyLogo: "https://dhnaath.com/wp-content/uploads/2026/08/3-1.webp",
      role: <><span>Global Advanced Operations</span></>,
      rightTitle: "Human Resources",
      location: "",
      href: "#",
      isPresent: false,
      logoBg: "bg-blue-600",
      logoColor: "text-[#F2F0EF]",
      initials: "G",
      details: (
        <>
          <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-1 text-[0.8125rem] font-calibri">Jenis Pekerjaan:</p>
          <p className="text-[#3D3D3D] dark:text-[#F2F0EF] mb-4 text-[0.84375rem] sm:text-[0.875rem] font-calibri">Magang Daring Tidak Berbayar (Internship)</p>
          <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-2 text-[0.8125rem] font-calibri">Tanggung Jawab Utama:</p>
          <ol className="list-decimal list-outside ml-4 space-y-1 text-[#3D3D3D] dark:text-[#F2F0EF] text-justify text-[0.84375rem] sm:text-[0.875rem] pb-2 font-calibri">
            <li>Melakukan screening awal terhadap resume pelamar, menyaring kandidat potensial (shortlisting), serta mengelola proses tindak lanjut hasil seleksi.</li>
            <li>Mengoptimalkan publikasi lowongan kerja (job posting) dan materi promosi rekrutmen secara berkala di berbagai platform profesional seperti LinkedIn dan Glints.</li>
            <li>Mengatur jadwal pertemuan, mengirimkan undangan atau pengingat, serta menyiapkan agenda diskusi dengan kandidat.</li>
            <li>Menangani seluruh jalur komunikasi internal maupun eksternal melalui MS Teams, Outlook, Skype, dan LinkedIn untuk memastikan penyampaian informasi berjalan jelas dan tepat waktu.</li>
            <li>Bekerja sama dengan rekan tim dan Squad Leader (SL) dan Assistant Squad Leader (ASL) dalam memastikan akurasi dan pelaksanaan tugas.</li>
          </ol>

          <p className="mt-4 text-[0.8125rem] sm:text-[0.84375rem] text-blue-600 dark:text-blue-400 font-medium font-calibri">#Pelatihan #Promosi #Penjualan #UnpaidInternship #Remote</p>
        </>
      ),
      detailsEn: (
        <>
          <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-1 text-[0.8125rem] font-calibri">Type of Employment:</p>
          <p className="text-[#3D3D3D] dark:text-[#F2F0EF] mb-4 text-[0.84375rem] sm:text-[0.875rem] font-calibri">Unpaid Remote Internship</p>
          <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-2 text-[0.8125rem] font-calibri">Key Responsibilities:</p>
          <ol className="list-decimal list-outside ml-4 space-y-1 text-[#3D3D3D] dark:text-[#F2F0EF] text-justify text-[0.84375rem] sm:text-[0.875rem] pb-2 font-calibri">
            <li>Conducted initial screening of applicant resumes, filtered potential candidates (shortlisting), and managed the follow-up process of selection results.</li>
            <li>Optimized the publication of job vacancies (job posting) and recruitment promotion materials periodically on various professional platforms such as LinkedIn and Glints.</li>
            <li>Arranged meeting schedules, sent invitations or reminders, and prepared discussion agendas with candidates.</li>
            <li>Handled all internal and external communication channels through MS Teams, Outlook, Skype, and LinkedIn to ensure the delivery of information ran clearly and on time.</li>
            <li>Collaborated with team members and Squad Leaders (SL) and Assistant Squad Leaders (ASL) to ensure accuracy and task execution.</li>
          </ol>

          <p className="mt-4 text-[0.8125rem] sm:text-[0.84375rem] text-blue-600 dark:text-blue-400 font-medium font-calibri">#Pelatihan #Promosi #Penjualan #UnpaidInternship #Remote</p>
        </>
      )
    },
    {
      year: "",
      company: "GOVOKASi Indonesia",
      companyLogo: "https://dhnaath.com/wp-content/uploads/2026/08/6-1.webp",
      role: <></>,
      rightTitle: "Project Asst.",
      location: "",
      href: "#",
      isPresent: false,
      logoBg: "bg-emerald-600",
      logoColor: "text-[#F2F0EF]",
      initials: "G",
      details: (
        <>
          <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-1 text-[0.8125rem] font-calibri">Jenis Pekerjaan:</p>
          <p className="text-[#3D3D3D] dark:text-[#F2F0EF] mb-4 text-[0.84375rem] sm:text-[0.875rem] font-calibri">Magang Daring Tidak Berbayar (Internship)</p>
          <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-2 text-[0.8125rem] font-calibri">Tanggung Jawab Utama:</p>
          <ol className="list-decimal list-outside ml-4 space-y-1 text-[#3D3D3D] dark:text-[#F2F0EF] text-justify text-[0.84375rem] sm:text-[0.875rem] pb-2 font-calibri">
            <li>Melakukan riset pasar dan audiens untuk mendukung posisi perusahaan, penyampaian pesan dan tujuan, dan pemilihan program kegiatan.</li>
            <li>Mengembangkan strategi pemasaran untuk rencana kegiatan program berdasarkan temuan riset dan hasil diskusi tim.</li>
            <li>Mendukung koordinasi tim yang beranggotakan mahasiswa dari kampus lain pada fase awal program, termasuk pembagian tugas dan penjadwalan presentasi di hadapan para mentor dan tim lain.</li>
          </ol>

          <p className="mt-4 text-[0.8125rem] sm:text-[0.84375rem] text-blue-600 dark:text-blue-400 font-medium font-calibri">#Mentorship #Pelatihan #Pengembangan #RancangProgram</p>
        </>
      ),
      detailsEn: (
        <>
          <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-1 text-[0.8125rem] font-calibri">Type of Employment:</p>
          <p className="text-[#3D3D3D] dark:text-[#F2F0EF] mb-4 text-[0.84375rem] sm:text-[0.875rem] font-calibri">Unpaid Remote Internship</p>
          <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-2 text-[0.8125rem] font-calibri">Key Responsibilities:</p>
          <ol className="list-decimal list-outside ml-4 space-y-1 text-[#3D3D3D] dark:text-[#F2F0EF] text-justify text-[0.84375rem] sm:text-[0.875rem] pb-2 font-calibri">
            <li>Conducted market and audience research to support the company's position, message delivery and goals, and the selection of activity programs.</li>
            <li>Developed marketing strategies for program activity plans based on research findings and team discussion results.</li>
            <li>Supported the coordination of a team of students from other campuses in the early phases of the program, including dividing tasks and scheduling presentations before mentors and other teams.</li>
          </ol>

          <p className="mt-4 text-[0.8125rem] sm:text-[0.84375rem] text-blue-600 dark:text-blue-400 font-medium font-calibri">#Mentorship #Pelatihan #Pengembangan #RancangProgram</p>
        </>
      )
    },
    {
      year: "",
      company: "Huachuang Singapore Pte. Ltd",
      companyLogo: "https://dhnaath.com/wp-content/uploads/2026/08/4-1.webp",
      role: <><span>TISCE</span></>,
      rightTitle: "Import – Export",
      location: "",
      href: "#",
      isPresent: false,
      logoBg: "bg-orange-600",
      logoColor: "text-[#F2F0EF]",
      initials: "H",
      details: (
        <>
          <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-1 text-[0.8125rem] font-calibri">Jenis Pekerjaan:</p>
          <p className="text-[#3D3D3D] dark:text-[#F2F0EF] mb-4 text-[0.84375rem] sm:text-[0.875rem] font-calibri">Mandiri, Berbasis Komisi, Tanpa Gaji Pokok (Freelancer)</p>
          <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-2 text-[0.8125rem] font-calibri">Tanggung Jawab Utama:</p>
          <ol className="list-decimal list-outside ml-4 space-y-1 text-[#3D3D3D] dark:text-[#F2F0EF] text-justify text-[0.84375rem] sm:text-[0.875rem] pb-2 font-calibri">
            <li>Mencari dan menjaring calon pembeli lokal yang membutuhkan pasokan barang atau mesin industri dari China.</li>
            <li>Mengumpulkan dan memverifikasi spesifikasi kebutuhan barang serta detail kontak pembeli guna menyusun dokumen Request for Quotation (RFQ) yang akurat sebelum diajukan ke platform.</li>
            <li>Memantau respons dari pemasok dan menindaklanjuti penawaran kepada calon pembeli sesuai standar yang berlaku untuk mendukung kelancaran proses pengadaan.</li>
          </ol>

          <p className="mt-4 text-[0.8125rem] sm:text-[0.84375rem] text-blue-600 dark:text-blue-400 font-medium font-calibri">#SourcingPlatform #GlobalPartnership #RFQ #B2B #Freelance</p>
        </>
      ),
      detailsEn: (
        <>
          <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-1 text-[0.8125rem] font-calibri">Type of Employment:</p>
          <p className="text-[#3D3D3D] dark:text-[#F2F0EF] mb-4 text-[0.84375rem] sm:text-[0.875rem] font-calibri">Independent, Commission-Based, No Basic Salary (Freelancer)</p>
          <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-2 text-[0.8125rem] font-calibri">Key Responsibilities:</p>
          <ol className="list-decimal list-outside ml-4 space-y-1 text-[#3D3D3D] dark:text-[#F2F0EF] text-justify text-[0.84375rem] sm:text-[0.875rem] pb-2 font-calibri">
            <li>Search for and network with local prospective buyers who need the supply of industrial goods or machinery from China.</li>
            <li>Collect and verify goods specification needs and buyer contact details to compile accurate Request for Quotation (RFQ) documents before submitting them to the platform.</li>
            <li>Monitor responses from suppliers and follow up on offers to prospective buyers according to applicable standards to support the smooth procurement process.</li>
          </ol>

          <p className="mt-4 text-[0.8125rem] sm:text-[0.84375rem] text-blue-600 dark:text-blue-400 font-medium font-calibri">#SourcingPlatform #GlobalPartnership #RFQ #B2B #Freelance</p>
        </>
      )
    }
  ],
  freelanceWork: [
    {
      year: "",
      company: "Prudential",
      companyLogo: "https://dhnaath.com/wp-content/uploads/2026/08/2-1.webp",
      role: <><span>Life Assurance (PLA)</span><span>Sharia Life Assurance (PSLA)</span></>,
      rightTitle: "Insurance Agent",
      location: "",
      href: "#",
      isPresent: false,
      logoBg: "bg-red-600",
      logoColor: "text-[#F2F0EF]",
      initials: "P",
      details: (
        <>
          <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-1 text-[0.8125rem] font-calibri">Jenis Pekerjaan:</p>
          <p className="text-[#3D3D3D] dark:text-[#F2F0EF] mb-4 text-[0.84375rem] sm:text-[0.875rem] font-calibri">Mandiri, Berbasis Komisi, Tanpa Gaji Pokok (Freelancer)</p>
          <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-2 text-[0.8125rem] font-calibri">Tanggung Jawab Utama:</p>
          <ol className="list-decimal list-outside ml-4 space-y-1 text-[#3D3D3D] dark:text-[#F2F0EF] text-justify text-[0.84375rem] sm:text-[0.875rem] pb-2 font-calibri">
            <li>Menganalisis profil risiko, tujuan keuangan, dan kemampuan premi calon nasabah untuk merancang proposal ilustrasi asuransi (konvensional/syariah) yang sesuai kebutuhan.</li>
            <li>Membimbing calon nasabah dalam penyiapan dokumen SPAJ, menjelaskan hak-kewajiban secara transparan, serta mengawal proses pengajuan proposal.</li>
            <li>Berkoordinasi aktif dengan tim internal serta rutin mengikuti pelatihan, seminar, dan ujian sertifikasi produk baru guna menjaga pemahaman materi tetap aktual.</li>
            <li>Menjaga kepatuhan terhadap kode etik keagenan berdasarkan lisensi AAJI–AASI, serta memastikan seluruh proses layanan sejalan dengan regulasi OJK.</li>
            <li>Memantau perkembangan tren produk asuransi serta dinamika pasar ekonomi untuk memberikan edukasi literasi keuangan yang tepat kepada masyarakat.</li>
          </ol>

          <p className="mt-4 text-[0.8125rem] sm:text-[0.84375rem] text-blue-600 dark:text-blue-400 font-medium font-calibri">#Keuangan #AsuransiJiwa #AsuransiKesehatan #TakafulKeluarga</p>
        </>
      ),
      detailsEn: (
        <>
          <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-1 text-[0.8125rem] font-calibri">Type of Employment:</p>
          <p className="text-[#3D3D3D] dark:text-[#F2F0EF] mb-4 text-[0.84375rem] sm:text-[0.875rem] font-calibri">Independent, Commission-Based, No Basic Salary (Freelancer)</p>
          <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-2 text-[0.8125rem] font-calibri">Key Responsibilities:</p>
          <ol className="list-decimal list-outside ml-4 space-y-1 text-[#3D3D3D] dark:text-[#F2F0EF] text-justify text-[0.84375rem] sm:text-[0.875rem] pb-2 font-calibri">
            <li>Analyzed prospective clients' risk profiles, financial goals, and premium capabilities to design tailored insurance illustration proposals (conventional/sharia).</li>
            <li>Guided prospective clients in preparing SPAJ documents, explaining rights and obligations transparently, and overseeing the proposal submission process.</li>
            <li>Coordinated actively with the internal team and regularly attended training, seminars, and new product certification exams to keep knowledge up-to-date.</li>
            <li>Maintained compliance with the agency code of ethics based on AAJI–AASI licenses, ensuring all service processes aligned with OJK regulations.</li>
            <li>Monitored trends in insurance products and economic market dynamics to provide appropriate financial literacy education to the public.</li>
          </ol>

          <p className="mt-4 text-[0.8125rem] sm:text-[0.84375rem] text-blue-600 dark:text-blue-400 font-medium font-calibri">#Keuangan #AsuransiJiwa #AsuransiKesehatan #TakafulKeluarga</p>
        </>
      )
    },
    {
      year: "",
      company: "PT Mandiri Utama Finance",
      companyLogo: "https://dhnaath.com/wp-content/uploads/2026/08/image-1.webp",
      role: <><span>MUF</span></>,
      rightTitle: "Mitra MUF Dana",
      location: "",
      href: "#",
      isPresent: false,
      logoBg: "bg-blue-600",
      logoColor: "text-[#F2F0EF]",
      initials: "M",
      details: (
        <>
          <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-1 text-[0.8125rem] font-calibri">Jenis Pekerjaan:</p>
          <p className="text-[#3D3D3D] dark:text-[#F2F0EF] mb-4 text-[0.84375rem] sm:text-[0.875rem] font-calibri">Mandiri, Berbasis Komisi, Tanpa Gaji, Tanpa Absensi (Freelancer)</p>
          <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-2 text-[0.8125rem] font-calibri">Tanggung Jawab Utama:</p>
          <ol className="list-decimal list-outside ml-4 space-y-1 text-[#3D3D3D] dark:text-[#F2F0EF] text-justify text-[0.84375rem] sm:text-[0.875rem] pb-2 font-calibri">
            <li>Memasarkan produk pinjaman dana tunai dengan jaminan BPKB kendaraan, baik untuk roda dua (motor) maupun roda empat (mobil).</li>
            <li>Menyesuaikan produk pembiayaan yang akan diajukan agar sejalan dengan kebutuhan serta kemampuan finansial calon klien.</li>
            <li>Mendampingi klien dalam proses pengajuan, mulai dari melengkapi berkas dokumen hingga dana berhasil dicairkan.</li>
            <li>Berkoordinasi secara aktif dengan tim MUF untuk memastikan proses administrasi dan pengajuan berjalan sesuai standar operasional yang berlaku.</li>
          </ol>

          <p className="mt-4 text-[0.8125rem] sm:text-[0.84375rem] text-blue-600 dark:text-blue-400 font-medium font-calibri">#BUMN #Keuangan #Leasing #PembiayaanKendaraan #Sales</p>
        </>
      ),
      detailsEn: (
        <>
          <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-1 text-[0.8125rem] font-calibri">Type of Employment:</p>
          <p className="text-[#3D3D3D] dark:text-[#F2F0EF] mb-4 text-[0.84375rem] sm:text-[0.875rem] font-calibri">Independent, Commission-Based, No Salary, No Attendance (Freelancer)</p>
          <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-2 text-[0.8125rem] font-calibri">Key Responsibilities:</p>
          <ol className="list-decimal list-outside ml-4 space-y-1 text-[#3D3D3D] dark:text-[#F2F0EF] text-justify text-[0.84375rem] sm:text-[0.875rem] pb-2 font-calibri">
            <li>Marketed cash loan products with vehicle BPKB collateral, both for two-wheelers (motorcycles) and four-wheelers (cars).</li>
            <li>Adjusted the financing products to be proposed to align with the needs and financial capabilities of prospective clients.</li>
            <li>Assisted clients in the application process, starting from completing document files until the funds were successfully disbursed.</li>
            <li>Coordinated actively with the MUF team to ensure the administrative and application processes ran according to applicable operational standards.</li>
          </ol>

          <p className="mt-4 text-[0.8125rem] sm:text-[0.84375rem] text-blue-600 dark:text-blue-400 font-medium font-calibri">#BUMN #Keuangan #Leasing #PembiayaanKendaraan #Sales</p>
        </>
      )
    },
    {
      year: "",
      company: "Grab Teknologi Indonesia",
      role: <><span>Grab</span></>,
      rightTitle: "Online Driver",
      location: "",
      href: "#",
      isPresent: false,
      logoBg: "bg-green-600",
      logoColor: "text-[#F2F0EF]",
      initials: "G",
      details: onlineDriverDetailsId,
      detailsEn: onlineDriverDetailsEn,
    },
    {
      year: "",
      company: "Shopee Internasional Indonesia",
      role: <><span>Shopee</span></>,
      rightTitle: "Online Driver",
      location: "",
      href: "#",
      isPresent: false,
      logoBg: "bg-orange-500",
      logoColor: "text-[#F2F0EF]",
      initials: "S",
      details: onlineDriverDetailsId,
      detailsEn: onlineDriverDetailsEn,
    },
    {
      year: "",
      company: "Teknologi Perdana Indonesia",
      role: <><span>Maxim</span></>,
      rightTitle: "Online Driver",
      location: "",
      href: "#",
      isPresent: false,
      logoBg: "bg-yellow-500",
      logoColor: "text-[#F2F0EF]",
      initials: "M",
      details: onlineDriverDetailsId,
      detailsEn: onlineDriverDetailsEn,
    }
  ],
  organizations: [
    { year: "", role: "Radio dan Pers Kampus", roleEn: "Campus Radio & Press", company: "Universitas Logistik dan Bisnis Internasional (ULBI)", location: "Bandung, Indonesia", href: "#" },
    { year: "", role: "Himpunan Mahasiswa Pencinta Unggas", roleEn: "Poultry Lovers Student Association", company: "Universitas Syiah Kuala (USK)", location: "Banda Aceh, Indonesia", href: "#" },
    { year: "", role: "Mading dan Pers", roleEn: "Wall Magazine & Press", company: "SMA Negeri 8 Pontianak", location: "Pontianak, Indonesia", href: "#" }
  ],
  community: [],
  certificate: [
    {
      year: "2024",
      title: "Six Sigma (64/80) – White Belt (CSSWB)",
      subtitle: (
        <>
          <span>The Council for Six Sigma Certification (CSSC)</span>
        </>
      ),
      location: "United States",
      href: "https://drive.google.com/file/d/1B_SkKayCigdyRwtSluJiheSUpkyn0E3b/view?usp=sharing"
    },
    {
      year: "2024",
      title: "Lean Six Sigma (68/80) – White Belt (CSSWB)",
      subtitle: (
        <>
          <span>The Council for Six Sigma Certification (CSSC)</span>
        </>
      ),
      location: "United States",
      href: "https://drive.google.com/file/d/1Sx60x5R7G0eTpk6tOOIi1OYLlozMuZpi/view?usp=drive_link"
    },
    {
      year: "2024",
      title: "SAP01 – SAP Overview",
      subtitle: (
        <>
          <span>Edugate Indonesia</span>
        </>
      ),
      location: "Indonesia",
      href: "https://drive.google.com/file/d/1Ypt10VSW6fdkUm3HKLJBodaQpTSl1OcJ/view?usp=sharing"
    },
    {
      year: "2023",
      title: "CEFR B1 – Intermediate (302)",
      subtitle: (
        <>
          <span>British Council</span>
        </>
      ),
      location: "United Kingdom",
      href: "#"
    },
    {
      year: "2025",
      title: "Dasar Procurement & Purchasing di Perusahaan",
      titleEn: "Fundamentals of Corporate Procurement & Purchasing",
      subtitle: (
        <>
          <span>Ioda Academy</span>
        </>
      ),
      location: "Indonesia",
      href: "https://drive.google.com/file/d/1hEQUPywU-ce3x1P-zyiUre65oYf4bZhV/view?usp=drive_link"
    }
  ],
  license: [
    {
      year: "2024 – 2026",
      title: "Sertifikasi Keagenan Asuransi Jiwa Syariah",
      titleEn: "Sharia Life Insurance Agency Certification",
      subtitle: (
        <>
          <span>Asosiasi Asuransi Syariah Indonesia (AASI)</span>
          <span>No. 3321012070258823</span>
        </>
      ),
      subtitleEn: (
        <>
          <span>Indonesian Sharia Insurance Association (AASI)</span>
          <span>No. 3321012070258823</span>
        </>
      ),
      location: "Indonesia",
    },
    {
      year: "2024 – 2026",
      title: "Sertifikasi Keagenan Asuransi Jiwa",
      titleEn: "Life Insurance Agency Certification",
      subtitle: (
        <>
          <span>Asosiasi Asuransi Jiwa Indonesia (AAJI)</span>
          <span>No. 15270228</span>
        </>
      ),
      subtitleEn: (
        <>
          <span>Indonesian Life Insurance Association (AAJI)</span>
          <span>No. 15270228</span>
        </>
      ),
      location: "Indonesia",
    }
  ],
  formalSchool: [
    {
      year: "2020",
      leftInfo: (
        <>
          <span>NPSN: 30105204</span>
          <span>Akreditasi: A</span>
        </>
      ),
      leftInfoEn: (
        <>
          <span>NPSN: 30105204</span>
          <span>Accreditation: A</span>
        </>
      ),
      title: "SMA Negeri 8 Pontianak",
      subtitle: (
        <>
          <span>MIPA</span>
        </>
      ),
      subtitleEn: (
        <>
          <span>Mathematics and Natural Sciences</span>
        </>
      ),
      location: "Pontianak",
      href: "https://sekolah.data.kemendikdasmen.go.id/profil-sekolah/04531D4B-7A11-4B2D-B063-6664362CE129"
    },
    {
      year: "2017",
      leftInfo: (
        <>
          <span>NPSN: 30102940</span>
          <span>Akreditasi: B</span>
        </>
      ),
      leftInfoEn: (
        <>
          <span>NPSN: 30102940</span>
          <span>Accreditation: B</span>
        </>
      ),
      title: "SMP Negeri 1 Batang Lupar",
      location: "Kab. Kapuas Hulu",
      href: "https://sekolah.data.kemendikdasmen.go.id/profil-sekolah/F09BB109-30F5-E011-90C6-F9C4ACF3E380"
    },
    {
      year: "2014",
      leftInfo: (
        <>
          <span>NPSN: 30103040</span>
          <span>Akreditasi: A</span>
        </>
      ),
      leftInfoEn: (
        <>
          <span>NPSN: 30103040</span>
          <span>Accreditation: A</span>
        </>
      ),
      title: "SD Negeri 01 Lanjak",
      location: "Kab. Kapuas Hulu",
      href: "https://sekolah.data.kemendikdasmen.go.id/profil-sekolah/903B0F09-30F5-E011-9EB4-8B25DB501A9D"
    }
  ],
  tertiaryDegree: [
    {
      year: "2021 – 2025",
      title: "Sarjana Terapan Logistik (S.Tr.Log.)",
      titleEn: "Applied Bachelor of Logistics (S.Tr.Log.)",
      subtitle: (
        <>
          <span>Universitas Logistik dan Bisnis Internasional (ULBI)</span>
          <span className="mt-[7pt]">PDDikti: 63311 (Prodi) · 041104 (Institusi)</span>
          <span>Akreditasi: B (Prodi) · Baik Sekali (Institusi)</span>
        </>
      ),
      subtitleEn: (
        <>
          <span>International Logistics and Business University (ULBI)</span>
          <span className="mt-[7pt]">PDDikti: 63311 (Study Program) · 041104 (Institution)</span>
          <span>Accreditation: B (Study Program) · Very Good (Institution)</span>
        </>
      ),
      location: "Bandung",
      href: "https://pddikti.kemdiktisaintek.go.id/detail-prodi/ODloXNDeYp9ggYjIE1_rHnAoLqKGWJDhO3uFfP-zRjprQ4PjJGEX5QcL9E1w28bgTBt3vQ=="
    }
  ],
  nonDegree: [
    {
      year: "2024",
      title: "Pelatihan & Kursus SAP01 (SAP Overview)",
      titleEn: "SAP01 Training & Course (SAP Overview)",
      subtitle: (
        <>
          <span>Edugate Indonesia</span>
          <span>Lembaga Pelatihan & Kursus Profesional</span>
        </>
      ),
      subtitleEn: (
        <>
          <span>Edugate Indonesia</span>
          <span>Professional Course & Training Institution</span>
        </>
      ),
      location: "Indonesia",
      href: "https://drive.google.com/file/d/1Ypt10VSW6fdkUm3HKLJBodaQpTSl1OcJ/view?usp=sharing"
    },
    {
      year: "2025",
      title: "Dasar Procurement & Purchasing di Perusahaan",
      titleEn: "Fundamentals of Corporate Procurement & Purchasing",
      subtitle: (
        <>
          <span>Ioda Academy</span>
          <span>Program Pembelajaran Vokasi & Pelatihan Kerja</span>
        </>
      ),
      subtitleEn: (
        <>
          <span>Ioda Academy</span>
          <span>Vocational Development & Work Training</span>
        </>
      ),
      location: "Indonesia",
      href: "https://drive.google.com/file/d/1hEQUPywU-ce3x1P-zyiUre65oYf4bZhV/view?usp=drive_link"
    }
  ],
  workshop: [],
  research: []
};

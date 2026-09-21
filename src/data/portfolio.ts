export const profile = {
  name: "Muhamad Haerudin",
  initials: "MH",
  tagline:
    "Mengelola mutu laboratorium pengujian, menilai kesesuaian produk, dan merancang solusi digital — teliti, sistematis, dan akurat.",
  roles: [
    "Programmer & Analis Sistem",
    "Supervisor Lab Uji SNI",
    "Petugas Pengambil Contoh (PPC)",
    "Auditor Sertifikasi Produk",
  ],
  shortRoles: ["Supervisor Lab Uji", "PPC & Tim Audit", "Mahasiswa Informatika"],
  birth: "Bogor, 25 Januari 2001",
  location: "Kp. Cilejit, Kel. Batok, Kec. Tenjo, Kab. Bogor, Jawa Barat",
  office:
    "PT Pengujian Produk Indonesia — Jl. Desa Ranca Iyuh No. 08, Panongan, Kab. Tangerang, Banten 15711",
  officePhone: "021 5940 1282",
  email: "mhaerudin945@gmail.com",
  secondaryEmail: "haer7457@gmail.com",
  whatsapp: "+62 856-9366-9591",
  linkedin: "",
  cvUrl: "/CV-Muhamad-Haerudin.pdf",
  bio: [
    "Lulusan Administrasi Perkantoran 2019 yang kini menjabat Supervisor (SPV) Laboratorium Uji di PT Pengujian Produk Indonesia — mengoordinasikan operasional laboratorium, mengelola data pengujian, dan memastikan kepatuhan terhadap SNI serta sistem manajemen mutu ISO/IEC 17025:2017.",
    "Aktif sebagai Petugas Pengambil Contoh (PPC) dan anggota tim audit sertifikasi produk, bertugas sampling APAP serta Bata Beton/Paving Block di berbagai pabrik. Di sela-sela pekerjaan, menempuh S1 Teknik Informatika untuk memperkuat analisis sistem dan pengembangan perangkat lunak.",
  ],
  stats: [
    { value: "4+", label: "Tahun di Lab Uji" },
    { value: "11", label: "Penugasan PPC & Audit" },
    { value: "3", label: "Skema Produk SNI" },
    { value: "2", label: "Lembaga Didukung" },
  ],
  funFacts: [
    "Mendukung pendirian Lab Uji ruang lingkup APAP, Beton & Fire Alarm",
    "Mendukung pendirian LSPro untuk APAP & Paving Block",
    "11+ penugasan PPC reguler & witness di pabrik manufaktur",
    "Menempuh S1 Teknik Informatika — Python, PHP, JavaScript, MySQL",
  ],
};

export type Education = {
  school: string;
  major: string;
  year: string;
};

export const educations: Education[] = [
  {
    school: "Universitas Pamulang",
    major: "S1 Teknik Informatika",
    year: "Sekarang",
  },
  {
    school: "SMK Mulia Buana",
    major: "Administrasi Perkantoran",
    year: "2018",
  },
  { school: "SMPN 3 Parung Panjang", major: "-", year: "2014" },
  { school: "SDN 1 Batok", major: "-", year: "2011" },
];

export type Role = {
  icon: string;
  title: string;
  period: string;
  org: string;
  accent: string;
  description: string;
  points: string[];
};

export const roles: Role[] = [
  {
    icon: "⌨️",
    title: "Programmer & Analis Sistem",
    period: "2023 – Sekarang",
    org: "Universitas Pamulang · S1 Teknik Informatika",
    accent: "from-blue-500 to-cyan-400",
    description:
      "Membangun fondasi rekayasa perangkat lunak dan analisis sistem untuk mendigitalisasi proses kerja laboratorium.",
    points: [
      "Pemrograman: Python, PHP, JavaScript, HTML/CSS, dan MySQL.",
      "Perancangan alur kerja & analisis sistem dengan Draw.io dan Visio.",
      "Digitalisasi administrasi dan rekapitulasi data pengujian.",
    ],
  },
  {
    icon: "🧩",
    title: "Analis Programmer",
    period: "2023 – Sekarang",
    org: "Studi & Penerapan Lapangan",
    accent: "from-violet-500 to-fuchsia-400",
    description:
      "Menerjemahkan kebutuhan operasional menjadi desain sistem dan alur proses yang terstruktur.",
    points: [
      "Menganalisis proses bisnis dan memetakan kebutuhan sistem.",
      "Menyusun diagram alur, dokumentasi teknis, dan skema database.",
      "Menjembatani kebutuhan pengguna dengan solusi berbasis kode.",
    ],
  },
  {
    icon: "🔬",
    title: "Supervisor Laboratorium Uji",
    period: "Des 2025 – Sekarang",
    org: "PT Pengujian Produk Indonesia",
    accent: "from-emerald-500 to-teal-400",
    description:
      "Mengoordinasikan operasional dan administrasi laboratorium uji sesuai standar SNI dan sistem manajemen mutu.",
    points: [
      "Mengoordinasikan operasional & administrasi laboratorium uji.",
      "Mengawasi pengelolaan data pengujian dan rekapitulasi laporan.",
      "Memastikan kepatuhan terhadap prosedur SNI & ISO/IEC 17025:2017.",
    ],
  },
  {
    icon: "🛡️",
    title: "Auditor Sertifikasi Produk",
    period: "2024 – Sekarang",
    org: "Tim Audit & PPC · LSPro",
    accent: "from-amber-500 to-orange-400",
    description:
      "Anggota tim audit sertifikasi produk dan Petugas Pengambil Contoh (PPC) dengan penugasan reguler serta witness.",
    points: [
      "Pengambilan contoh APAP dan Bata Beton/Paving Block sesuai SNI.",
      "Mendukung audit & penilaian kesesuaian produk di pabrik manufaktur.",
      "Dokumentasi lapangan, pelabelan contoh, dan pencatatan data.",
    ],
  },
  {
    icon: "🗂️",
    title: "Admin Laboratorium",
    period: "Feb 2022 – Des 2025",
    org: "PT Pengujian Produk Indonesia",
    accent: "from-cyan-500 to-sky-400",
    description:
      "Mengelola administrasi dan data pengujian laboratorium serta mendukung operasional penilaian kesesuaian.",
    points: [
      "Input, validasi, dan rekapitulasi data hasil pengujian.",
      "Pengendalian dokumen dan administrasi klien laboratorium.",
      "Dukungan dokumentasi pendirian Lab Uji & LSPro.",
    ],
  },
  {
    icon: "🧪",
    title: "Petugas Pengambil Contoh",
    period: "Agu 2021 – 2023",
    org: "PT Pengujian Produk Indonesia",
    accent: "from-teal-500 to-emerald-400",
    description:
      "Melakukan pengambilan dan penyiapan contoh uji sesuai prosedur SNI di lapangan.",
    points: [
      "Pelaksanaan sampling produk sesuai SNI dan instruksi kerja.",
      "Pelabelan, pengemasan, dan pengiriman contoh ke laboratorium.",
      "Dokumentasi kondisi lapangan untuk kesesuaian penilaian.",
    ],
  },
  {
    icon: "📞",
    title: "Desk Collection",
    period: "Agu 2019 – Mei 2020",
    org: "PT Tritunggal Buana Sejahtra",
    accent: "from-slate-500 to-zinc-400",
    description:
      "Pengalaman awal penagihan dan administrasi data pelanggan sebelum berkarier di penilaian kesesuaian.",
    points: [
      "Rekapitulasi dan monitoring data piutang pelanggan.",
      "Komunikasi dan koordinasi penjadwalan pembayaran.",
      "Pelaporan progres tagihan secara berkala.",
    ],
  },
];

export type SkillGroup = {
  name: string;
  icon: string;
  skills: { name: string; level: number }[];
};

export const skillGroups: SkillGroup[] = [
  {
    name: "Rekayasa & Analisis Sistem",
    icon: "💻",
    skills: [
      { name: "Python", level: 72 },
      { name: "PHP & JavaScript", level: 65 },
      { name: "HTML / CSS", level: 70 },
      { name: "MySQL & Basis Data", level: 62 },
      { name: "Analisis Sistem & Draw.io/Visio", level: 76 },
      { name: "Microsoft Excel (Lanjutan)", level: 86 },
    ],
  },
  {
    name: "Penilaian Kesesuaian & Mutu",
    icon: "🧪",
    skills: [
      { name: "SNI ISO/IEC 17025:2017", level: 86 },
      { name: "SNI ISO/IEC 17065:2012", level: 72 },
      { name: "Teknik PPC / Sampling SNI", level: 82 },
      { name: "SNI Produk (APAP & Paving Block)", level: 82 },
      { name: "Audit & Witness", level: 74 },
      { name: "Pengendalian Dokumen Mutu", level: 84 },
    ],
  },
];

export type Credential = {
  title: string;
  issuer: string;
  year: string;
  tag: string;
  image?: string;
};

export const credentials: Credential[] = [
  {
    title: "Sistem Manajemen Mutu Lab ISO/IEC 17025:2017",
    issuer: "Pelatihan Ketidakpastian, Validasi & Verifikasi",
    year: "2022–2025",
    tag: "Laboratorium",
  },
  {
    title: "Audit SMK — ISO 9001:2015 & ISO 19011:2018",
    issuer: "Pelatihan Audit Sistem Manajemen Mutu",
    year: "2023",
    tag: "Audit",
  },
  {
    title: "Teknis Produk APAP — SNI 180-1:2022",
    issuer: "Pelatihan Teknis & Refreshment",
    year: "2022",
    tag: "Produk",
  },
  {
    title: "Pengujian Beton & Produk Beton",
    issuer: "Pelatihan Berbasis SNI",
    year: "2023",
    tag: "Pengujian",
  },
];

export type Project = {
  title: string;
  category: string;
  icon: string;
  description: string;
  tags: string[];
  wide?: boolean;
};

export const projects: Project[] = [
  {
    title: "Persiapan Pendirian Lab Uji & LSPro",
    category: "Penilaian Kesesuaian",
    icon: "🧪",
    description:
      "Dukungan administrasi, dokumentasi, dan kesiapan operasional pendirian Laboratorium Uji (APAP, Beton, Fire Alarm) serta Lembaga Sertifikasi Produk untuk APAP & Paving Block.",
    tags: ["ISO/IEC 17025", "ISO/IEC 17065", "LSPro"],
    wide: true,
  },
  {
    title: "PPC APAP — SNI 180-1:2022",
    category: "Audit & PPC",
    icon: "🧯",
    description:
      "Pengambilan contoh Alat Pemadam Api Portabel secara reguler dan witness di berbagai pabrik manufaktur APAP.",
    tags: ["APAP", "PPC", "Witness"],
  },
  {
    title: "PPC Bata Beton / Paving Block — SNI 03-0691:1996",
    category: "PPC",
    icon: "🧱",
    description:
      "Sampling bata beton dan paving block, pelabelan contoh, serta dokumentasi kegiatan lapangan sesuai standar SNI.",
    tags: ["Paving Block", "PPC", "SNI 03-0691:1996"],
  },
  {
    title: "SMK ISO/IEC 17025:2017 & Data Pengujian",
    category: "Mutu Laboratorium",
    icon: "⚙️",
    description:
      "Input, validasi, dan pengendalian data hasil pengujian serta pemeliharaan sistem manajemen mutu laboratorium.",
    tags: ["ISO/IEC 17025", "Data", "QMS"],
  },
];
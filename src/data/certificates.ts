export type CertificateItem = {
  title: string;
  file: string;
  year: string;
};

export type CertificateGroup = {
  name: string;
  icon: string;
  accent: string;
  items: CertificateItem[];
};

export const certificateGroups: CertificateGroup[] = [
  {
    name: "Laboratorium — ISO/IEC 17025:2017",
    icon: "🔬",
    accent: "from-emerald-500 to-teal-400",
    items: [
      {
        title: "ISO/IEC 17025:2017 — Calibration Laboratory (Pengukuran)",
        file: "ISO-IEC-17025-2017-Calibration-Lab-Muhamad-Haerudin.pdf",
        year: "2021",
      },
      {
        title: "ISO/IEC 17025:2017 — Ketidakpastian Pengukuran",
        file: "ISO-IEC-17025-2017-Pengukuran-Muhamad-Haerudin.pdf",
        year: "2021",
      },
      {
        title: "ISO/IEC 17025:2017 — Validasi & Verifikasi",
        file: "ISO-IEC-17025-2017-Validasi-dan-Verifikasi-Muhamad-Haerudin.pdf",
        year: "2021",
      },
      {
        title: "ISO/IEC 17025:2017 — Quality Assurance Testing",
        file: "ISO-IEC-17025-2017-Quality-Assurance-Testing-Muhamad-Haerudin.pdf",
        year: "2021",
      },
    ],
  },
  {
    name: "Mutu, Audit & Sertifikasi",
    icon: "🛡️",
    accent: "from-blue-500 to-violet-500",
    items: [
      {
        title: "ISO 9001:2015 — Quality Management System",
        file: "ISO-9001-2015-Quality-Management-System-Muhamad-Haerudin.pdf",
        year: "2022",
      },
      {
        title: "ISO 19011:2018 — Guidelines for Auditing Management System",
        file: "ISO-19011-2018-Guidelines-For-Auditing-Management-System-Muhamad-Haerudin.pdf",
        year: "2022",
      },
      {
        title: "ISO/IEC 17021-1:2015 & 17021-3:2017",
        file: "ISO-IEC-17021-1-2015-dan-ISO-IEC-17021-3-2017-Muhamad-Haerudin.pdf",
        year: "2022",
      },
      {
        title: "ISO/IEC 17065:2012 — Sertifikasi Produk",
        file: "ISO-IEC-17065-2012-Muhamad-Haerudin.pdf",
        year: "2022",
      },
      {
        title: "ISO/IEC 17067:2013 — Skema Sertifikasi Produk",
        file: "ISO-IEC-17067-2013-Muhamad-Haerudin.pdf",
        year: "2022",
      },
      {
        title: "ISO/IEC 17021-1:2015 — Audit & Sertifikasi SMK",
        file: "17021-1-2015-Muhamad-Haerudin.pdf",
        year: "2024",
      },
      {
        title: "ISO/IEC 17021-3:2017 — Kompetensi Audit SMM",
        file: "17021-3-2017-Muhamad-Haerudin.pdf",
        year: "2024",
      },
      {
        title: "IAF MD 1:2023 — Mandatory Document",
        file: "IAF-MD-1-Muhamad-Haerudin.pdf",
        year: "2024",
      },
      {
        title: "IAF MD 2:2023 — Mandatory Document",
        file: "IAF-MD-2-Muhamad-Haerudin.pdf",
        year: "2024",
      },
      {
        title: "IAF MD 4:2023 — Mandatory Document",
        file: "IAF-MD-4-Muhamad-Haerudin.pdf",
        year: "2024",
      },
      {
        title: "IAF MD 5:2023 — Mandatory Document",
        file: "IAF-MD-5-Muhamad-Haerudin.pdf",
        year: "2024",
      },
      {
        title: "IAF MD 11:2023 — Mandatory Document",
        file: "IAF-MD-11-Muhamad-Haerudin.pdf",
        year: "2024",
      },
      {
        title: "IAF MD 15:2023 — Mandatory Document",
        file: "IAF-MD-15-Muhamad-Haerudin.pdf",
        year: "2024",
      },
      {
        title: "IAF MD 17:2023 — Mandatory Document",
        file: "IAF-MD-17-Muhamad-Haerudin.pdf",
        year: "2024",
      },
      {
        title: "IAF MD 23:2023 — Mandatory Document",
        file: "IAF-MD-23-Muhamad-Haerudin.pdf",
        year: "2024",
      },
    ],
  },
  {
    name: "Produk APAP & Proteksi Kebakaran",
    icon: "🧯",
    accent: "from-rose-500 to-orange-400",
    items: [
      {
        title: "Tekanan Hidrostatik — SNI 180:2021",
        file: "Tekanan-Hidrostatik-dengan-Spesifikasi-SNI-180-2021-Muhamad-Haerudin.pdf",
        year: "2021",
      },
      {
        title: "Daya Padam — SNI 180:2021",
        file: "Daya-Padam-dengan-Spesifikasi-SNI-180-2021-Muhamad-Herudin.pdf",
        year: "2021",
      },
      {
        title: "Toleransi Isi Media — SNI 180:2021",
        file: "Toleransi-Isi-Media-dengan-Spesifikasi-SNI-180-2021-Media-Muhamad-Haerudin.pdf",
        year: "2021",
      },
      {
        title: "Pengujian Konduktivitas — SNI 180:2021",
        file: "Pengujian-Konduktivitas-dengan-Spesifikasi-SNI-180-2021-Muhamad-Haerudin.pdf",
        year: "2021",
      },
      {
        title: "Teknis & Proses Produk APAP",
        file: "Proses-Produk-APAP-Muhamad-Haerudin.pdf",
        year: "2022",
      },
      {
        title: "SNI 7240-2:2017 — Panel Kontrol & Alarm",
        file: "SNI-7240-2-2017-Sistem-Deteksi-Kebakaran-dan-Alarm-Muhamad-Haerudin.pdf",
        year: "2023",
      },
      {
        title: "SNI 7240-5:2018 — Detektor Panas Tipe Titik",
        file: "SNI-7240-5-2018-Sistem-Deteksi-Kebakaran-dan-Alarm-Muhamad-Haerudin.pdf",
        year: "2023",
      },
      {
        title: "SNI 7240-7:2018 — Detektor Asap Tipe Titik",
        file: "SNI-7240-7-2018-Sistem-Deteksi-Kebakaran-dan-Alarm-Muhamad-Haerudin.pdf",
        year: "2023",
      },
      {
        title: "Pengetahuan Produk: Detektor Asap Tipe Titik",
        file: "Pengetahuan-Produk-Detektor-Asap-Tipe-Titik-Menggunakan-Cahaya-Muhamad-Haerudin.pdf",
        year: "2023",
      },
      {
        title: "Pengetahuan Produk: Detektor Panas Tipe Titik",
        file: "Pengetahuan-Produk-Detektor-Panas-Tipe-Titik-Muhamad-Haerudin.pdf",
        year: "2023",
      },
      {
        title: "Pengetahuan Produk: Panel Kontrol Kebakaran",
        file: "Pengetahuan-Produk-Panel-Kontrol-Deteksi-dan-Petunjuk-Kebakaran-Muhamad-Haerudin.pdf",
        year: "2023",
      },
    ],
  },
  {
    name: "Material Bangunan & Pengujian Beton",
    icon: "🧱",
    accent: "from-amber-500 to-yellow-400",
    items: [
      {
        title: "SNI 03-0691:1996 — Paving Block",
        file: "SNI-03-0691-1996-Paving-Block-Muhamad-Haerudin.pdf",
        year: "2024",
      },
      {
        title: "Standar SNI 03-0691:1996 — Paving Block",
        file: "Standar-SNI-03-0691-1996-Paving-Block-Muhamad-Haerudin.pdf",
        year: "2023",
      },
      {
        title: "Refreshment Paving Block — SNI 03-0691:1996",
        file: "SNI-03-0691-1996-Paving-Block--Refreshment--M.-Haerudin.pdf",
        year: "2025",
      },
      {
        title: "Pengetahuan Produk: Paving Block",
        file: "Pengetahuan-Produk-Paving-Block-Muhamad-Haerudin.pdf",
        year: "2023",
      },
      {
        title: "SNI 03-2095:1998 — Genteng Keramik",
        file: "SNI-03-2095-1998-Genteng-Keramik-M.-Haerudin.pdf",
        year: "2024",
      },
      {
        title: "SNI 03-2134:1996 — Genteng Keramik Berglasir",
        file: "SNI-03-2134-1996-Genteng-Keramik-Berglasir-M.-Haerudin.pdf",
        year: "2024",
      },
      {
        title: "Pelatihan Genteng & Bata Ringan (5 SNI)",
        file: "Pelatihan-Bata-Ringan-dan-Genteng-M-Haerudin-2025.pdf",
        year: "2025",
      },
      {
        title: "SNI 03-0028:1987 — Ubin Semen Polos",
        file: "SNI-03-0028-1987-Ubin-Semen-Polos-Muhamad-Haerudin.pdf",
        year: "2024",
      },
      {
        title: "SNI 03-0349:1989 — Bata Beton untuk Pasangan Dinding",
        file: "SNI-03-0349-1989-Bata-Beton-Untuk-Pasangan-Dinding-Muhamad-Haerudin.pdf",
        year: "2024",
      },
      {
        title: "SNI 15-2094:2000 — Bata Merah Pejal",
        file: "SNI-15-2094-2000-Bata-merah-pejal-untuk-pasangan-dinding-Muhamad-Haerudin.pdf",
        year: "2024",
      },
      {
        title: "SNI 03-1974:1990 — Uji Kuat Tekan Beton Inti Bor",
        file: "SNI-03-1974-1990-Metode-Pengujian-Kuat-Tekan-Beton-Inti-Pemboran-Muhamad-Haerudin.pdf",
        year: "2024",
      },
      {
        title: "SNI 03-1974:1990 — Pengujian Kuat Tekan Beton",
        file: "SNI-03-1974-1990-Pengujian-Kuat-Tekan-Beton-Muhamad-Haerudin.pdf",
        year: "2024",
      },
      {
        title: "SNI 1974:2011 — Cara Uji Kuat Tekan Beton (Benda Uji Silinder)",
        file: "SNI-1974-2011-Tentang-Cara-Uji-Kuat-Tekan-Beton-dengan-Benda-Uji-Silinder-Muhamad-Haerudin.pdf",
        year: "2024",
      },
      {
        title: "SNI 4154:2014 — Kuat Lentur Beton",
        file: "SNI-4154-2014-Kuat-Lentur-Beton-Menggunakan-Balok-Sederhana-dengan-Beban-Terpusat-Muhamad-Haerudin.pdf",
        year: "2024",
      },
      {
        title: "SNI 4431:2011 — Kuat Lentur Beton Normal",
        file: "SNI-4431_2011-Kuat-Lentur-Beton-Normal-Muhamad-Haerudin.pdf",
        year: "2024",
      },
      {
        title: "SNI 03-6428:2000 — Ketahanan Abrasi Permukaan Beton",
        file: "SNI-03-6428-2000-Metode-Pengujian-Ketahanan-Abrasi-Permukaan-Beton-Muhamad-Haerudin.pdf",
        year: "2024",
      },
    ],
  },
  {
    name: "Kelistrikan & EMC (2025)",
    icon: "⚡",
    accent: "from-cyan-500 to-blue-400",
    items: [
      {
        title: "Tusuk Kontak & Kotak Kontak — SNI IEC 60884",
        file: "Pelatihan-Tusuk-Kontak-dan-Kotak-Kontak-SNI-IEC-60884---M-Haerudin--2025.pdf",
        year: "2025",
      },
      {
        title: "Tusuk Kontak & Kotak Kontak — SNI 04-3892.1.1:2003",
        file: "Pelatihan-Tusuk-Kontak-dan-Kotak-Kontak-SNI-04-3892---M-Haerudin--2025.pdf",
        year: "2025",
      },
      {
        title: "Kotak & Selungkup — SNI IEC 60670",
        file: "Pelatihan-Kotak-dan-Selungkup-SNI-IEC-60670---M-Haerudin--2025.pdf",
        year: "2025",
      },
      {
        title: "Sakelar — SNI IEC 60669",
        file: "Pelatihan-Sakelar-SNI-60669---M-Haerudin--2025.pdf",
        year: "2025",
      },
      {
        title: "Fiting Lampu — SNI IEC 60838",
        file: "Pelatihan-Fiting-lampu-SNI-60838-1---M-Haerudin--2025.pdf",
        year: "2025",
      },
      {
        title: "Fitting Lampu Arus Bolak-Balik — SNI 04-0534:1989",
        file: "Pelatihan-Fiting-lampu---M-Haerudin--2025.pdf",
        year: "2025",
      },
      {
        title: "Sistem Konduit untuk Manajemen Kabel — SNI IEC 61386",
        file: "Pelatihan-Konduit---M-Haerudin--2025.pdf",
        year: "2025",
      },
      {
        title: "Luminer — SNI IEC 60598",
        file: "Pelatihan-Luminer-SNI-IEC-60598---M-Haerudin--2025.pdf",
        year: "2025",
      },
      {
        title: "EMC Basic & Test Requirement",
        file: "Pelatihan-EMC-Basic---Test-Requirement---M-Haerudin--2025.pdf",
        year: "2025",
      },
    ],
  },
  {
    name: "Kalibrasi & Pendukung",
    icon: "⚖️",
    accent: "from-fuchsia-500 to-pink-400",
    items: [
      {
        title: "Caliper & Weight Mass Calibration (Anak Timbangan)",
        file: "Caliper---Weight-Mass-Calibration---Muhamad-Haerudin.pdf",
        year: "2025",
      },
    ],
  },
];

export const certificateFileBase = "/sertifikat/";
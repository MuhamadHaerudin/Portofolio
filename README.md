# Portofolio Profesional

Website portofolio pribadi berbasis **Next.js (App Router)** + **Tailwind CSS** yang menggabungkan empat peran dalam satu halaman:

1. **Programmer**
2. **Analis Programmer**
3. **Supervisor Laboratorium Pengujian SNI**
4. **Auditor Sertifikasi Produk**

## Struktur Halaman

- Beranda (hero + peran)
- Tentang
- Peran & Pengalaman
- Kompetensi & Skill
- Sertifikasi & Pelatihan
- Proyek & Capaian
- Kontak

## Menjalankan

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Kustomisasi

Semua data profil (nama, kontak, role, pengalaman, sertifikasi, proyek) berada di file `src/app/page.tsx` pada objek seperti `profile`, `roles`, `skillGroups`, `credentials`, dan `projects`. Cukup ubah placeholder tersebut.

## Production Build

```bash
npm run build
npm run start
```

## Deploy

Mendukung Vercel, Netlify, atau GitHub Pages (static export). Untuk Vercel cukup hubungkan repositori GitHub.
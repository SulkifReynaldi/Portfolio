# Developer Portfolio — Full-Stack & Automation Specialist

Website portofolio profesional berstandar industri yang dirancang dengan konsep **Premium Modern Minimalist Developer Portfolio** menggunakan kombinasi warna abu-abu elegan, hijau hutan (*forest/sage green*), dan aksen emas (*gold*).

Website ini dibangun menggunakan **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, **Motion for React**, dan **Lucide Icons**.

---

## 🎨 Palet Warna Desain (Design System)

- **Background Utama**: `#252827`
- **Background Sekunder**: `#303633`
- **Background Card**: `#353C38`
- **Forest Green**: `#527A59`
- **Sage Green**: `#759779`
- **Gold Accent**: `#C6A15B`
- **Teks Utama**: `#F3F3EF`
- **Teks Sekunder**: `#B4B9B4`

---

## 📂 Struktur Folder Proyek

```text
src/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Endpoint Backend API Contact Form (Validasi & Pemrosesan)
│   ├── favicon.ico
│   ├── globals.css               # Desain Sistem Tailwind v4 & Variabel Warna
│   ├── layout.tsx                # Root Layout, Metadata SEO, OpenGraph
│   ├── page.tsx                  # Halaman Utama (One-Page Portfolio)
│   ├── robots.ts                 # SEO Robots Configuration
│   └── sitemap.ts                # SEO Sitemap Generator
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx            # Sticky Navbar, Monogram Logo, Smooth Scroll, Mobile Drawer
│   │   └── Footer.tsx            # Footer Lengkap, Navigasi Cepat, Media Sosial, Copyright
│   ├── sections/
│   │   ├── Hero.tsx              # Hero Section + Foto Profil + CTA
│   │   ├── About.tsx             # Tentang Saya + Highlight Keahlian
│   │   ├── Skills.tsx            # Keahlian Teknis Berdasarkan Kategori
│   │   ├── Projects.tsx          # Galeri Project Unggulan + Filter + Modal Detail
│   │   ├── Services.tsx          # 6 Layanan Bisnis & Nilai Tambah Klien
│   │   ├── Experience.tsx        # Timeline Pengalaman Kerja & Pencapaian
│   │   ├── Workflow.tsx          # 6 Tahapan Alur Kerja Pengembangan
│   │   ├── Achievements.tsx      # Sertifikat Teknis & Testimoni Klien
│   │   └── Contact.tsx           # Formulir Kontak Terintegrasi & Saluran Langsung
│   └── ui/
│       ├── Badge.tsx             # Komponen Label / Tag
│       ├── Button.tsx            # Komponen Tombol Reusable (Varian Gold, Forest, Outline)
│       ├── Card.tsx              # Komponen Kartu Modern
│       ├── Icons.tsx             # Ikon Vektor Tambahan (GitHub & LinkedIn)
│       └── SectionHeading.tsx    # Header Tiap Section Standar
│
├── data/                         # PUSAT DATA KONTEN (Paling Sering Diedit)
│   ├── profile.ts                # Profil, Nama, Bio, Sosial Media, Kontak
│   ├── skills.ts                 # Daftar Keahlian Teknis per Kategori
│   ├── projects.ts               # Data Project, Masalah, Solusi, Stack, Link
│   ├── services.ts               # 6 Layanan yang Ditawarkan ke Klien
│   ├── experience.ts             # Timeline Pengalaman Kerja & Tanggung Jawab
│   ├── workflow.ts               # 6 Langkah Alur Pengembangan Produk
│   └── achievements.ts           # Sertifikasi & Testimoni
│
├── lib/
│   └── utils.ts                  # Helper Utility Functions
│
public/
├── documents/
│   └── cv.pdf                    # File CV PDF yang Dapat Diunduh
└── images/
    ├── profile.jpg               # Foto Profil Anda
    └── projects/
        ├── project-01.png        # Screenshot Project 01
        ├── project-02.png        # Screenshot Project 02
        └── project-03.png        # Screenshot Project 03
```

---

## 🛠️ Panduan Kustomisasi Konten

Semua data telah dipisahkan dari komponen tampilan (*separation of concerns*) agar Anda dapat memperbarui portofolio tanpa mengubah kode UI:

### 1. Mengganti Nama, Bio, dan Kontak
Buka file `src/data/profile.ts`:
- Ubah `name` menjadi nama lengkap Anda.
- Ubah `role` dan `heroDescription` sesuai persona profesional Anda.
- Ubah `socialLinks` (GitHub, LinkedIn, WhatsApp, dan Email).

### 2. Mengganti Foto Profil
- Siapkan foto profil beresolusi tinggi (rasio 1:1 atau persegi).
- Simpan file ke `public/images/profile.jpg` (menggantikan file yang sudah ada).

### 3. Mengganti Dokumen CV
- Ekspor CV resmi Anda ke dalam format PDF.
- Simpan file dengan nama `cv.pdf` di folder `public/documents/cv.pdf`.

### 4. Menambahkan atau Mengubah Project
Buka file `src/data/projects.ts`:
- Anda dapat mengedit project yang sudah ada atau menambahkan objek baru ke array `projectsData`:
```typescript
{
  id: "nama-project-baru",
  name: "Nama Aplikasi Anda",
  category: "Web Development", // Pilihan: "Web Development" | "Dashboard Development" | "Automation" | "Full-Stack"
  description: "Deskripsi singkat aplikasi...",
  problemStatement: "Masalah nyata yang diselesaikan...",
  solutionStatement: "Solusi teknis yang Anda bangun...",
  technologies: ["Next.js", "TypeScript", "PostgreSQL"],
  status: "Completed", // Pilihan: "Completed" | "In Progress" | "Concept / Prototype"
  image: "/images/projects/project-baru.png",
  githubUrl: "https://github.com/username/repo", // Kosongkan/undefined jika belum tersedia
  liveDemoUrl: "https://demo.domain.com",       // Kosongkan/undefined jika belum tersedia
  featured: true
}
```

### 5. Memperbarui Skills
Buka file `src/data/skills.ts`:
- Anda dapat menambah atau mengurangi teknologi pada masing-masing kategori (`frontend`, `backend`, `database`, `automation`, `tools`).

### 6. Memperbarui Layanan (Services)
Buka file `src/data/services.ts`:
- Sesuaikan penawaran layanan dan poin manfaat (*clientBenefits*) yang Anda berikan kepada klien.

### 7. Memperbarui Pengalaman Kerja
Buka file `src/data/experience.ts`:
- Sesuaikan riwayat pekerjaan, tanggung jawab, dan pencapaian terukur yang Anda miliki.

### 8. Mengatur Contact Form
File `src/app/api/contact/route.ts` saat ini sudah memvalidasi input nama, email, subjek, pesan, dan mencatat pengiriman secara aman.
Jika ingin meneruskan pesan langsung ke inbox email pribadi Anda saat online, Anda dapat menghubungkannya dengan layanan seperti **Resend** (`npm install resend`) atau **Nodemailer** dengan menambahkan API Key di file environment `.env.local`.

---

## 🚀 Menjalankan Proyek di Komputer Lokal

1. **Jalankan Development Server**:
```bash
npm run dev
```
Buka browser di [http://localhost:3000](http://localhost:3000).

2. **Memeriksa Kode (Linting & Types)**:
```bash
npm run lint
npx tsc --noEmit
```

3. **Membuat Build Produksi**:
```bash
npm run build
```

4. **Menjalankan Hasil Build**:
```bash
npm run start
```

---

## 🌐 Panduan Deployment ke Vercel

1. **Buat Repository di GitHub**:
   - Buka [GitHub](https://github.com) dan buat repository baru (misal: `portfolio`).
   - Di terminal direktori proyek ini, jalankan:
     ```bash
     git add .
     git commit -m "Initial commit: Professional Developer Portfolio"
     git branch -M main
     git remote add origin https://github.com/USERNAME/portfolio.git
     git push -u origin main
     ```

2. **Deploy via Vercel**:
   - Kunjungi [Vercel](https://vercel.com) dan masuk dengan akun GitHub Anda.
   - Klik **"Add New Project"** dan pilih repository `portfolio`.
   - Vercel akan otomatis mendeteksi Framework **Next.js**.
   - Klik **"Deploy"**.
   - Dalam 1-2 menit, website portofolio Anda sudah aktif di internet dengan domain gratis `*.vercel.app` dan sertifikat SSL otomatis!

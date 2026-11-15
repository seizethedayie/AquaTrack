# AquaTrack
### Water Usage Monitoring System

**AquaTrack** merupakan aplikasi sederhana berbasis Node.js yang dirancang untuk membantu memantau dan mengelola penggunaan air. Aplikasi ini memungkinkan pengguna untuk melihat total penggunaan air, menghitung rata-rata penggunaan air, serta menambahkan catatan penggunaan air berdasarkan tanggal.

Project ini dikembangkan sebagai tugas kelompok mata kuliah **Rekayasa Perangkat Lunak (RPL)** dengan menerapkan konsep *Continuous Integration* (CI) menggunakan GitHub Actions.

---

## 1. Identitas Kelompok

**Kelompok 8 – Rekayasa Perangkat Lunak**

Disusun oleh:

1. **Adelia Hafsani** – F5512520054
2. **Khalifah Azarine** – F5512520062
3. **Mulya Zazillah** – F5512520068

---

## 2. Tujuan Project

Project AquaTrack dibuat untuk menerapkan proses pengembangan perangkat lunak sederhana yang dilengkapi dengan pengujian otomatis.

Adapun tujuan pengembangan project ini adalah:

- Membuat aplikasi sederhana untuk memantau penggunaan air.
- Mengimplementasikan fungsi perhitungan total dan rata-rata penggunaan air.
- Menyediakan fitur penambahan catatan penggunaan air.
- Menerapkan pengujian otomatis untuk memastikan fungsi program berjalan sesuai harapan.
- Menggunakan GitHub Actions untuk menjalankan pipeline Continuous Integration secara otomatis.

---

## 3. Fitur Utama

AquaTrack memiliki beberapa fitur utama, yaitu:

1. **Menampilkan Total Penggunaan Air**

   Menghitung keseluruhan jumlah air yang telah digunakan berdasarkan data yang tersimpan.

2. **Menghitung Rata-rata Penggunaan Air**

   Menghitung rata-rata penggunaan air dari seluruh catatan yang tersedia.

3. **Menambahkan Data Penggunaan Air**

   Memungkinkan pengguna menambahkan catatan penggunaan air berdasarkan tanggal dan jumlah air dalam satuan liter.

4. **Validasi Data**

   Memastikan tanggal penggunaan tidak kosong dan jumlah penggunaan air harus berupa angka positif.

5. **Menampilkan Riwayat Penggunaan Air**

   Menampilkan daftar catatan penggunaan air yang telah tersimpan.

---

## 4. Teknologi yang Digunakan

Project ini menggunakan beberapa teknologi berikut:

| Teknologi | Kegunaan |
|---|---|
| JavaScript | Bahasa pemrograman untuk membuat logika aplikasi. |
| Node.js | Menjalankan program JavaScript di lingkungan lokal. |
| Node.js Test Runner | Menjalankan pengujian otomatis menggunakan `node:test`. |
| Node.js Assert | Memeriksa kesesuaian hasil pengujian. |
| Git | Mengelola perubahan dan versi kode program. |
| GitHub | Menyimpan repository project. |
| GitHub Actions | Menjalankan proses Continuous Integration secara otomatis. |

---

## 5. Struktur Folder Project

Struktur folder project AquaTrack disusun sebagai berikut:

```text
aquatrack/
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── data/
│   └── waterUsage.json
│
├── src/
│   ├── app.js
│   └── waterUsage.js
│
├── test/
│   └── waterUsage.test.js
│
├── package.json
├── package-lock.json
└── README.md
```

**Keterangan:**

- `.github/workflows/ci.yml`: Berisi konfigurasi workflow untuk menjalankan pipeline CI.
- `data/waterUsage.json`: Menyimpan data penggunaan air.
- `src/app.js`: Berisi program utama untuk menampilkan dashboard dan menambahkan data penggunaan air.
- `src/waterUsage.js`: Berisi fungsi perhitungan dan validasi penggunaan air.
- `test/waterUsage.test.js`: Berisi pengujian otomatis terhadap fungsi-fungsi pada AquaTrack.
- `package.json`: Berisi informasi project dan perintah yang digunakan untuk menjalankan aplikasi.
- `package-lock.json`: Menyimpan informasi versi dependency project.
- `README.md`: Berisi dokumentasi project dan panduan penggunaan.

---

## 6. Persyaratan Sistem

Sebelum menjalankan project AquaTrack, pastikan perangkat sudah memiliki:

- Node.js versi 20 atau versi yang kompatibel.
- NPM (Node Package Manager).
- Git.
- Koneksi internet untuk mengakses repository dan GitHub Actions.

---

## 7. Cara Instalasi dan Menjalankan Project

### 7.1 Mengunduh Repository

Clone repository menggunakan perintah:

```bash
git clone https://github.com/seizethedayie/AquaTrack.git
```

Masuk ke direktori project:

```bash
cd AquaTrack
```

### 7.2 Menginstal Dependencies

Jalankan perintah berikut:

```bash
npm install
```

Perintah tersebut digunakan untuk menyiapkan dependencies yang dibutuhkan oleh project.

### 7.3 Menjalankan Aplikasi

Untuk menjalankan aplikasi dan menampilkan dashboard AquaTrack, gunakan:

```bash
npm start
```

Aplikasi akan menampilkan total penggunaan air, rata-rata penggunaan air, serta riwayat penggunaan air yang tersimpan.

### 7.4 Menambahkan Data Penggunaan Air

Untuk menambahkan catatan penggunaan air baru, gunakan format perintah:

```bash
node src/app.js add "YYYY-MM-DD" JUMLAH_AIR
```

Contoh:

```bash
node src/app.js add "2026-11-15" 200
```

Perintah tersebut digunakan untuk menambahkan catatan penggunaan air sebanyak 200 liter pada tanggal 15 November 2026.

---

## 8. Pengujian Program

AquaTrack menggunakan fitur bawaan Node.js, yaitu `node:test` dan `node:assert/strict`, untuk melakukan pengujian otomatis.

Pengujian dilakukan untuk memastikan setiap fungsi utama berjalan sesuai dengan hasil yang diharapkan.

Untuk menjalankan seluruh pengujian, gunakan perintah:

```bash
npm test
```

Pengujian yang diterapkan meliputi:

1. Menghitung total penggunaan air.
2. Menghitung rata-rata penggunaan air.
3. Memastikan rata-rata data kosong menghasilkan nilai nol.
4. Menambahkan catatan penggunaan air.
5. Menolak penggunaan air dengan nilai negatif.
6. Menolak penambahan data dengan tanggal kosong.

Pengujian dinyatakan berhasil apabila seluruh test menunjukkan hasil lulus dan tidak terdapat kegagalan.

---

## 9. Continuous Integration (CI)

Project AquaTrack menerapkan konsep *Continuous Integration* menggunakan GitHub Actions.

Continuous Integration merupakan proses otomatis untuk memeriksa dan menguji perubahan kode program agar kesalahan dapat diketahui lebih awal selama proses pengembangan perangkat lunak.

Pada project ini, workflow CI dijalankan secara otomatis ketika terdapat aktivitas:

- `push` ke branch `main`.
- `pull_request` yang ditujukan ke branch `main`.

Konfigurasi tersebut terdapat pada file `.github/workflows/ci.yml`.

### 9.1 Tahapan Pipeline CI

Pipeline CI AquaTrack terdiri atas beberapa tahapan:

1. **Checkout Repository**

   Mengambil kode project dari repository GitHub agar dapat diproses oleh workflow.

2. **Setup Node.js**

   Menyiapkan lingkungan Node.js versi 20 untuk menjalankan project.

3. **Install Dependencies**

   Menjalankan instalasi dependencies menggunakan perintah `npm install`.

4. **Run Tests**

   Menjalankan seluruh pengujian otomatis menggunakan perintah `npm test`.

5. **Check Syntax**

   Memeriksa sintaks file JavaScript menggunakan perintah `npm run build`.

### 9.2 Tujuan Penerapan CI

Penerapan CI pada AquaTrack bertujuan untuk:

- Membantu mendeteksi kesalahan kode lebih awal.
- Memastikan fungsi program tetap berjalan sesuai kebutuhan.
- Mengurangi risiko kesalahan ketika terdapat perubahan kode.
- Mempermudah proses pengujian melalui otomatisasi.
- Menjaga kualitas kode selama pengembangan project.

---

## 10. Pengujian Kegagalan dan Perbaikan CI

Dalam penerapan Continuous Integration, dilakukan simulasi kesalahan pada fungsi perhitungan total penggunaan air untuk mengetahui apakah sistem CI dapat mendeteksi kesalahan secara otomatis.

### 10.1 Simulasi Kegagalan

Simulasi dilakukan dengan menambahkan nilai tambahan sebesar 10 pada hasil perhitungan total penggunaan air.

Perubahan tersebut menyebabkan hasil perhitungan tidak sesuai dengan nilai yang diharapkan pada pengujian otomatis.

Akibatnya, beberapa test mengalami kegagalan karena hasil aktual berbeda dari hasil yang seharusnya.

GitHub Actions kemudian menjalankan workflow dan menampilkan status **Failure** karena terdapat pengujian yang tidak berhasil.

### 10.2 Perbaikan Kesalahan

Setelah kesalahan terdeteksi, fungsi perhitungan total penggunaan air diperbaiki dengan menghilangkan nilai tambahan yang sebelumnya menyebabkan hasil perhitungan menjadi tidak sesuai.

Setelah kode diperbaiki, pengujian otomatis dijalankan kembali menggunakan perintah:

```bash
npm test
```

Hasil pengujian menunjukkan bahwa seluruh test berhasil dilewati. GitHub Actions juga menjalankan kembali pipeline CI dan menampilkan status **Success**.

### 10.3 Hasil Pengujian CI

Berdasarkan simulasi yang telah dilakukan, diperoleh hasil sebagai berikut:

| Kondisi Pengujian | Hasil |
|---|---|
| Pengujian sebelum simulasi kesalahan | Success |
| Pengujian ketika terdapat kesalahan kode | Failure |
| Pengujian setelah kode diperbaiki | Success |
| Pengujian melalui Pull Request | Success |

Pengujian ini menunjukkan bahwa GitHub Actions dapat membantu mendeteksi kesalahan kode secara otomatis serta memastikan perubahan yang telah diperbaiki dapat berjalan sesuai harapan.

---

## 11. Cara Menjalankan Pipeline CI

Untuk menjalankan pipeline CI melalui GitHub Actions, lakukan langkah-langkah berikut:

1. Pastikan seluruh perubahan kode sudah disimpan.
2. Tambahkan perubahan menggunakan perintah:

   ```bash
   git add .
   ```

3. Buat commit menggunakan perintah:

   ```bash
   git commit -m "Update AquaTrack"
   ```

4. Kirim perubahan ke branch `main` menggunakan perintah:

   ```bash
   git push origin main
   ```

5. Buka repository AquaTrack di GitHub.
6. Pilih menu **Actions**.
7. Pilih workflow **AquaTrack CI**.
8. Periksa hasil setiap tahapan pipeline.

Selain melalui push ke branch `main`, pengujian CI juga dapat dilakukan melalui Pull Request dengan membuat permintaan penggabungan perubahan dari branch lain menuju branch `main`.

Apabila seluruh tahapan berhasil dijalankan, GitHub Actions akan menampilkan status **Success** atau tanda centang hijau.

Jika terdapat kesalahan pada kode atau pengujian, workflow dapat menampilkan status **Failure** sehingga kesalahan dapat segera diperiksa dan diperbaiki.

---

## 12. Pembagian Tugas Kelompok

Dalam pengerjaan project AquaTrack, setiap anggota kelompok memiliki tanggung jawab dalam proses pengembangan, pengujian, dan dokumentasi project.

Pembagian tugas anggota kelompok adalah sebagai berikut:

| Nama Anggota | Tanggung Jawab |
|---|---|
| Adelia Hafsani | [Mengembangkan aplikasi AquaTrack menggunakan Node.js, membuat fungsi perhitungan dan validasi penggunaan air, menyusun test otomatis, mengonfigurasi GitHub Actions, melakukan simulasi kegagalan dan perbaikan CI, mengelola repository GitHub, serta menyusun dokumentasi README.] |
| Khalifah Azarine | [Membantu meninjau hasil pengujian aplikasi, memahami alur kerja Continuous Integration, serta memberikan masukan terhadap dokumentasi project.] |
| Mulya Zazillah | [Membantu meninjau fitur aplikasi, memahami proses pengujian otomatis, serta memberikan masukan terhadap hasil pengembangan project.] |

Pembagian tugas tersebut dilakukan untuk membantu proses pengerjaan project agar setiap anggota dapat berkontribusi dalam penyelesaian tugas kelompok.

---

## 13. Link Repository

Repository project AquaTrack dapat diakses melalui tautan berikut:

https://github.com/seizethedayie/AquaTrack

Repository tersebut berisi source code aplikasi, file pengujian, konfigurasi workflow GitHub Actions, serta dokumentasi project.

---

## 14. Kesimpulan

AquaTrack merupakan aplikasi pemantauan penggunaan air sederhana yang dikembangkan menggunakan JavaScript dan Node.js. Selain menyediakan fungsi perhitungan dan pencatatan penggunaan air, project ini juga menerapkan pengujian otomatis serta Continuous Integration menggunakan GitHub Actions.

Melalui penerapan CI, proses pemeriksaan dan pengujian program dapat dilakukan secara otomatis setiap kali terdapat perubahan kode pada repository. Pengujian dengan simulasi kesalahan juga menunjukkan bahwa workflow CI dapat mendeteksi kegagalan dan memastikan kode yang telah diperbaiki dapat berjalan kembali dengan baik.

Dengan demikian, penerapan Continuous Integration pada project AquaTrack membantu meningkatkan proses pengujian dan menjaga kualitas perangkat lunak selama pengembangan project.
# SpaceKu - Halaman Cari Ruangan #

# Deskripsi

Spaceku adalah aplikasi yang memudahkan akses dan peminjaman ruangan kampus. Repositori ini berisi implementasi satu halaman dari wifeframe yang dibuat sebelumnya menggunakan figma, yaitu halaman "Cari Ruangan", yang dibuat dengan HTML, CSS dan JavaScript.

# Fitur yang tersedia:
1. Pencarian Ruangan : Pencarian berdasarkan nama ruangan.
2. Filter Status : Tersedia beberapa kategori status ruangan (Semua, Tersedia, Terisi, dan Perbaikan).
3. Urutkan A-Z : Lewat ikon yang berada pada header, ketika di klik akan mengurutkan ruangan dari nama A-Z.
4. Jumlah Hasil : Akan muncul pesan khusus bila ruangan ditemukan atau tidak ditemukan.
5. Menu navigasi bawah : Sebagai penanda halaman yang sedang aktif.

## Struktur Proyek
```
SpaceKu Project/
├── index.html          # struktur halaman SpaceKu
├── styles.css          # tampilan halaman SpaceKu
├── script.js           # interaktivitas: pencarian, filter, dan urutan
├── assets/             # foto ruangan
│   ├── Lab Aegis.jpg
│   ├── Lab Matrix.jpg
│   ├── Lab Nova.jpg
│   ├── Lab Orion.jpg
│   └── Ruangan Nebula.jpg
└── README.md           # dokumentasi proyek SpaceKu
```
# Komponen
1. Header
-> Isi : Tombol kembali, Judul dan Ikon Urutkan.
-> Lokasi Code : 
    - index.html — header class="topbar"
    - styles.css — .topbar, .topbar__title, .icon-btn
    - script.js — sortButton.addEventListener('click', function ()

2. Form Pencarian
-> Isi : Input nama ruangan
-> Lokasi Code :
    - index.html — .search, .search__input
    - styles.css — .search, .search__input, .search__icon
    - script.js — search-input, filterRooms()

3. Filter Status
-> Isi : Status Ruangan (Semua, Tersedia, Terisi, Perbaikan)
-> Lokasi Code :
    - index.html — .chips, .chip
    - styles.css — .chips, .chip, .chiparia-pressed="true"
    - script.js — chips.forEach(), filterRooms()

4. Kartu Ruangan
-> Isi : Foto ruangan, nama ruangan, status ruangan.
-> Lokasi Code:
    - index.html — .room-list, .room-card
    - styles.css — .room-card, .room-card__img, .room-card__body, .badge
    - script.js — filterRooms()

5. Navigasi Bawah
-> Isi : Beranda, Ruangan, Riwayat, Akun
-> Lokasi Code :
    - index.html — nav class="bottom-nav"
    - styles.css — .bottom-nav, .bottom-nav__link, .bottom-nav__link

# Cara Menjalankan

-- Langsung akses melalui browser --
1. Buka folder proyek SpaceKu.
2. Klik dua kali `index.html` agar terbuka di browser.

-- Cara memakai fitur halaman --
1. Mencari ruangan: ketik nama ruangan pada kolom pencarian, misalnya “orion”. Kartu yang tidak cocok akan hilang sendiri.
2. Memfilter status ruangan: klik tombol Semua, Tersedia, Terisi, atau Perbaikan. Tombol yang aktif berwarna biru.
3. Memakai keduanya sekaligus (Cari & Filter status ruangan): misalnya klik Tersedia, lalu ketik “lab”. Yang tampil hanya lab yang tersedia.
4. Mengurutkan A-Z: klik ikon panah di pojok kanan atas. Klik lagi untuk kembali ke urutan awal.
5. Jika hasil kosong: akan muncul pesan “Ruangan tidak ditemukan”. Hapus kata kunci atau pilih filter lain.
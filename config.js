/* ============================================================
   KONFIGURASI PORTAL SELEKSI — NEW HIRE
   ------------------------------------------------------------
   Tahap 2 (CCA OPS / CCA SLIK):
     - false  = TERKUNCI (seleksi Tahap 1 sedang berlangsung)
     - true   = TERBUKA  (kandidat bisa mengakses Tahap 2)

   Cara mengubah: ganti nilai di bawah, lalu commit & push.
   Vercel auto-deploy ±45 detik.
   ============================================================ */
window.PORTAL_CONFIG = {
  stage2Open: false,
  /* ------------------------------------------------------------
     portalOpen — kendali mode portal seleksi
       false = TERTUTUP (seleksi selesai): popup pengumuman permanen
               "Seleksi Telah Selesai", kartu tahap 1 & 2 nonaktif.
       true  = TERBUKA (seleksi susulan berlangsung): popup ketentuan
               dapat ditutup, kartu tahap 1 & 2 menjadi tautan aktif,
               halaman Tahap 2 menampilkan tombol panduan & ujian.
     Cara mengubah: ganti nilai di bawah, lalu commit & push.
     Vercel auto-deploy ±45-60 detik.
     ------------------------------------------------------------ */
  portalOpen: false
};

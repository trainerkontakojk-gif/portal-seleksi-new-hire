/* ============================================================
   KONFIGURASI PORTAL SELEKSI — NEW HIRE
   ------------------------------------------------------------
   Ada dua kunci independen:

   stage1Open — Seleksi Tahap 1
     false = SELESAI (kartu Tahap 1 nonaktif, chip "SELESAI")
     true  = DIBUKA  (kartu Tahap 1 menjadi tautan FlexiQuiz)

   stage2Open — Akses Tahap 2 (CCA OPS / CCA SLIK)
     false = TIDAK DIBUKA (kartu Tahap 2 nonaktif; halaman
             tahap-2 menampilkan pesan penutupan)
     true  = DIBUKA  (kartu Tahap 2 menjadi tautan ke tahap-2.html;
             halaman Tahap 2 menampilkan tombol panduan & ujian)

   Popup pengumuman: bila salah satu tahap DIBUKA, popup Ketentuan
   Seleksi (dapat ditutup) yang tampil; bila keduanya false, popup
   pengumuman permanen "Seleksi Telah Selesai" yang tampil.

   Cara mengubah: ganti nilai di bawah, lalu commit & push.
   Vercel auto-deploy ±45-60 detik.
   ============================================================ */
window.PORTAL_CONFIG = {
  stage1Open: false,
  stage2Open: false
};

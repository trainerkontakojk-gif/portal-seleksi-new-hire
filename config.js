/* ============================================================
   KONFIGURASI PORTAL SELEKSI — NEW HIRE
   ------------------------------------------------------------
   Ada SATU KUNCI MASTER + DUA KUNCI PER TAHAP:

   1) portalOpen — KUNCI MASTER (buka/tutup laman secara umum)
      false = LAMAN TERTUTUP: popup pengumuman "Seleksi Telah
              Selesai" (permanen) tampil, SEMUA kartu nonaktif,
              halaman Tahap 2 terkunci — apa pun nilai kunci
              per tahap di bawah.
      true  = LAMAN TERBUKA: kunci per tahap (stage1Open &
              stage2Open) yang menentukan status tiap kartu.

   2) stage1Open — Seleksi Tahap 1 (berlaku bila portalOpen=true)
      false = SELESAI (kartu Tahap 1 nonaktif, chip "SELESAI")
      true  = DIBUKA  (kartu Tahap 1 menjadi tautan FlexiQuiz)

   3) stage2Open — Akses Tahap 2 CCA OPS / CCA SLIK
      false = TIDAK DIBUKA (kartu Tahap 2 nonaktif; halaman
              tahap-2 menampilkan pesan penutupan)
      true  = DIBUKA  (kartu Tahap 2 menjadi tautan ke tahap-2.html;
              halaman Tahap 2 menampilkan tombol panduan & ujian)

   Popup: bila portal terbuka dan salah satu tahap DIBUKA, popup
   Ketentuan Seleksi (dapat ditutup) yang tampil; bila portal
   tertutup (atau tak ada tahap yang dibuka), popup pengumuman
   permanen yang tampil.

   Cara mengubah: ganti nilai di bawah, lalu commit & push.
   Vercel auto-deploy ±45-60 detik.
   ============================================================ */
window.PORTAL_CONFIG = {
  portalOpen: true,
  stage1Open: false,
  stage2Open: false
};

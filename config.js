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
  stage2Open: false
};

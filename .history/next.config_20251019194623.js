/** @type {import('next').NextConfig} */
const nextConfig = {
  // Opsi konfigurasi lainnya mungkin sudah ada di sini

  // TAMBAHKAN BAGIAN INI
  serverActions: {
    bodySizeLimit: '10mb', // Naikkan batas menjadi 10 MB
  },
};

module.exports = nextConfig;
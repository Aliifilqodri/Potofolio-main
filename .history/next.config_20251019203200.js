/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },

  images: {
    // Konfigurasi untuk mengizinkan gambar dari Cloudinary
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '**',
      },
    ],
    // Konfigurasi untuk menaikkan batas waktu tunggu unduh gambar
    imageResponseTimeout: 30000, // Waktu tunggu dinaikkan jadi 30 detik
  },
};

module.exports = nextConfig;
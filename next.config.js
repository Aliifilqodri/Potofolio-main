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
    // Baris 'imageResponseTimeout' sudah dihapus untuk mengatasi error
  },
};

module.exports = nextConfig;
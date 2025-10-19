/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },

  // TAMBAHKAN BAGIAN INI UNTUK MENGIZINKAN GAMBAR DARI CLOUDINARY
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig; // Gunakan 'module.exports' untuk file .js
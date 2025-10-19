/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '25mb', // Kita naikkan jadi 25MB untuk jaga-jaga
    },
  },
};

module.exports = nextConfig;
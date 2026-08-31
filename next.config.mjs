/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Ignora gli errori di linting durante le build di produzione
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
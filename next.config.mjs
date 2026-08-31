/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Ignora gli errori di linting durante le build di produzione
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
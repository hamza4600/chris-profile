/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'],
    remotePatterns: [
      {
        hostname: 'framerusercontent.com',
      },
    ],
  },
};

export default nextConfig;

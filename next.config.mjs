/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'framerusercontent.com',
      },
    ],
  },
};

export default nextConfig;

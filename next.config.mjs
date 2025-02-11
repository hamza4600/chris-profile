/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['cdn.sanity.io', 'pub-f3904ae1bf834a09a44d1c4ad718470e.r2.dev'],
    remotePatterns: [
      {
        hostname: 'framerusercontent.com',
      },
    ],
  },
};

export default nextConfig;
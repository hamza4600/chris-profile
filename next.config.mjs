/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();

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

export default withNextIntl(nextConfig);
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
  async headers() {
    return [
      {
        source: '/(.*)', // Apply to all routes // skip /studio 
        
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.googleapis.com https://*.gstatic.com https://*.google.com https://cdn.sanity.io https://*.sanity.io https://www.googletagmanager.com https://www.google-analytics.com https://www.hkdev.co;
              style-src 'self' 'unsafe-inline' https://*.googleapis.com https://*.gstatic.com;
              img-src 'self' data: https://*.googleapis.com https://*.gstatic.com https://cdn.sanity.io https://*.sanity.io https://pub-f3904ae1bf834a09a44d1c4ad718470e.r2.dev;
              font-src 'self' https://*.googleapis.com https://*.gstatic.com;
              connect-src 'self' https://*.googleapis.com https://cdn.sanity.io https://*.sanity.io https://www.google-analytics.com wss://9pyj1cbj.api.sanity.io;
              frame-src 'self' https://*.google.com;
              media-src 'self' https://*.googleapis.com https://*.gstatic.com https://cdn.sanity.io https://*.sanity.io https://pub-f3904ae1bf834a09a44d1c4ad718470e.r2.dev;
              object-src 'none';
              base-uri 'self';
              form-action 'self';
              upgrade-insecure-requests;
            `
              .replace(/\s{2,}/g, ' ') // Remove extra spaces
              .trim(),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
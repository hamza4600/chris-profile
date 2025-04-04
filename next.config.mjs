const nextConfig = {
  images: {
    domains: ['cdn.sanity.io', 'pub-f3904ae1bf834a09a44d1c4ad718470e.r2.dev'],
    remotePatterns: [
      {
        hostname: 'framerusercontent.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/work/marketing-digital',
        destination: '/work/marketeq-digital-website-development', // Replace with your new destination URL
        permanent: true,
      },
      {
        source: '/blog/ai-agents-cyber',
        destination: '/blog', // Replace with your new destination URL
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)', // Apply to all routes
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.googleapis.com https://*.gstatic.com https://*.google.com https://cdn.sanity.io https://*.sanity.io https://www.googletagmanager.com https://www.google-analytics.com https://www.hkdev.co https://googleads.g.doubleclick.net;
              style-src 'self' 'unsafe-inline' https://*.googleapis.com https://*.gstatic.com;
              img-src 'self' data: https://*.googleapis.com https://*.gstatic.com https://cdn.sanity.io https://*.sanity.io https://pub-f3904ae1bf834a09a44d1c4ad718470e.r2.dev https://www.google.com https://www.google.com.pk https://www.googleadservices.com;
              font-src 'self' https://*.googleapis.com https://*.gstatic.com;
              connect-src 'self' https://*.googleapis.com https://cdn.sanity.io https://*.sanity.io https://www.google-analytics.com wss://9pyj1cbj.api.sanity.io https://www.google.com https://googleads.g.doubleclick.net;
              frame-src 'self' https://*.google.com https://www.googletagmanager.com https://td.doubleclick.net;
              frame-ancestors 'none';
              media-src 'self' https://*.googleapis.com https://*.gstatic.com https://cdn.sanity.io https://*.sanity.io https://pub-f3904ae1bf834a09a44d1c4ad718470e.r2.dev;
              object-src 'none';
              base-uri 'self';
              form-action 'self';
              upgrade-insecure-requests;
            `.replace(/\s{2,}/g, ' ').trim()
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), microphone=(), camera=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
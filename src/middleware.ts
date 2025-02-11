import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const prod = process.env.NODE_ENV === "production";

export async function middleware(request: NextRequest) {
  const nonce = crypto.randomUUID();
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.headers.set('X-Content-Type-Options', 'nosniff');

  const scriptSrcDirectives = [
    "'self'",
    `'nonce-${nonce}'`,
    ...(prod ? ["'unsafe-eval'"] : ["'unsafe-eval'"]),
    "https://*.vercel.live",
    "https://*.vercel.app",
    "https://vercel.live",
    "https://*.googleapis.com",
    "https://*.gstatic.com",
    "https://*.google.com",
    "https://cdn.sanity.io",
    "https://*.sanity.io",
    "https://pub-f3904ae1bf834a09a44d1c4ad718470e.r2.dev/",
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com",
    "https://www.hkdev.co"
  ].join(" ");

  response.headers.set(
    "Content-Security-Policy",
    `default-src 'self';` +
      `script-src ${scriptSrcDirectives};` +
      `style-src 'self' 'unsafe-inline' https://www.hkdev.co;` +
      `img-src 'self' data: blob: https://*.cloudflare.com https://cdn.sanity.io https://*.sanity.io https://pub-f3904ae1bf834a09a44d1c4ad718470e.r2.dev https://*.framerusercontent.com https://www.google-analytics.com https://www.googletagmanager.com https://*.your-other-image-domains.com https://www.hkdev.co;` +
      `media-src 'self' data: blob: https://*.cloudflare.com https://*.googleapis.com https://cdn.sanity.io https://*.sanity.io https://pub-f3904ae1bf834a09a44d1c4ad718470e.r2.dev https://www.hkdev.co;` +
      `font-src 'self' https://www.hkdev.co;` +
      `connect-src 'self' https://*.googleapis.com https://*.gstatic.com https://*.vercel.live https://cdn.sanity.io https://*.sanity.io https://pub-f3904ae1bf834a09a44d1c4ad718470e.r2.dev https://www.google-analytics.com https://www.googletagmanager.com https://www.hkdev.co;` +
      `frame-src 'self' https://*.google.com https://vercel.live https://cdn.sanity.io https://pub-f3904ae1bf834a09a44d1c4ad718470e.r2.dev;` +
      `object-src 'none';` +
      `base-uri 'self';` +
      `form-action 'self';` +
      `frame-ancestors 'none';` +
      `upgrade-insecure-requests`
  );

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};


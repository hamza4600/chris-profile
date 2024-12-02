import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './constants';

export default createMiddleware({
  // A list of all locales that are supported
  locales,
  
  // Used when no locale matches
  defaultLocale,
// Optional: Specify patterns for specific pathnames
  // localePrefix: 'always'
  localePrefix: 'as-needed'
});
 
export const config = {
  // Match only internationalized pathnames
  // matcher: ['/', '/(ar|en|fr)/:path*']
  matcher: [
    // Match all paths
    '/((?!api|_next|.*\\..*).*)',
    // Match all paths that start with one of the supported locales
    '/(ar|fr)/:path*'
  ]
};
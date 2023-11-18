import createMiddleware from 'next-intl/middleware';
import { pathnames, locales } from './navigation';

export default createMiddleware({
    defaultLocale: 'th',
    locales,
    pathnames
});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(th|en)/:path*']
};

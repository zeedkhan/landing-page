import {
    createLocalizedPathnamesNavigation,
    Pathnames
} from 'next-intl/navigation';

export const locales = ['th', 'en'] as const;

export const pathnames = {
    '/': '/',
    '/pathnames': {
        th: '/pathnames',
        en: '/pathnames',
    }
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter } =
    createLocalizedPathnamesNavigation({
        locales,
        pathnames
    });

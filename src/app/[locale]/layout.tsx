import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter } from "../fonts";
import Nav from "@/components/layout/nav";
// import Footer from "@/components/layout/footer";
import { Suspense } from "react";
import Footer from "@/components/layout/footer";
import { notFound } from 'next/navigation';
import { unstable_setRequestLocale } from 'next-intl/server';
import { Metadata } from "next";
import seoEN from "../../../messages/en.json"
import seoTH from "../../../messages/th.json"

const locales = ['en', 'th'];

const env = process.env.NODE_ENV

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {

  if (params.locale === "en") {
    return {
      ...seoEN.SEO,
      "robots": {
        "index": false,
        "follow": true,
        "nocache": true,
        "googleBot": {
          "index": true,
          "follow": false,
          "noimageindex": true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1
        }
      },
      openGraph: {
        type: 'website',
        url: env === "development" ? "http://localhost:3000/" : "https://landing-page-zeta-two-11.vercel.app/",
        images: [
          {
            url: '/seed-jr.jpg',
            width: 250,
            height: 250,
            alt: "Sample - website"
          }
        ],
        ...seoEN.SEO,
      },
    }
  }

  return {
    ...seoTH.SEO,
    "robots": {
      "index": false,
      "follow": true,
      "nocache": true,
      "googleBot": {
        "index": true,
        "follow": false,
        "noimageindex": true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1
      }
    },
    openGraph: {
      type: 'website',
      url: env === "development" ? "http://localhost:3000/" : "https://landing-page-zeta-two-11.vercel.app/",
      images: [
        {
          url: '/seed-jr.jpg',
          width: 250,
          height: 250,
          alt: "Sample - website"
        }
      ],
      ...seoEN.SEO,
    },
  }
}


export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string }
}) {

  if (!locales.includes(params.locale as any)) notFound();

  unstable_setRequestLocale(params.locale);

  return (
    <html lang={params.locale}>
      <body className={cx(sfPro.variable, inter.variable)}>
        <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-sky-500" />
        <Suspense fallback="...">
          <Nav lang={params.locale} />
        </Suspense>
        <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

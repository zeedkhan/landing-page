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


const locales = ['en', 'th'];


export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata = {
  title: "Sample - Building website for your next project",
  description:
    "Sample is the all-in-one solution for your next project. It includes a design system, analytics, and more.",
  metadataBase: new URL("https://www.google.com"),
  themeColor: "#FFF",
};

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

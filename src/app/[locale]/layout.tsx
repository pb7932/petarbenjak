import type { Metadata } from "next";
import "../globals.css";
import Navbar from "../sections/Navbar";
import Head from "next/head";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import Footer from "../sections/Footer";

export const metadata: Metadata = {
  title: "Petar Benjak",
  description: "Life long learner",
  robots: "index, follow",
  other: {
    'msvalidate.01': "FA0645BC70B0DA868CF880BE096B7ECD"
  }
};

export default async function RootLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale};
}>) {
//   if (!routing.locales.includes(locale as any)) {
//         notFound();
//   }

  const messages = await getMessages();
  
  return (
    <html lang={locale}>
      <Head>
        <meta name="title" content="Petar Benjak" />
        <meta name="description" content="Life long learner" />
        <meta name="robots" content="index, follow" />
        <meta name="msvalidate.01" content="FA0645BC70B0DA868CF880BE096B7ECD" />
      </Head>
      <body


        className={`font-montserrat antialiased overflow-x-hidden box-border`}
      >
        <NextIntlClientProvider messages={messages}>
            <Navbar locale={locale}></Navbar>
        </NextIntlClientProvider>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <NextIntlClientProvider messages={messages}>
            <Footer></Footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

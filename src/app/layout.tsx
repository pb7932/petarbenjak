import "./globals.css";
import Navbar from "./sections/Navbar";
import Head from "next/head";
import hr from '../../messages/hr.json'
import Footer from "./sections/Footer";

export default async function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

  return (
    <html lang="hr">
      <Head>
        <meta name="title" content="Petar Benjak" />
        <meta name="description" content="Life long learner" />
        <meta name="robots" content="index, follow" />
        <meta name="msvalidate.01" content="FA0645BC70B0DA868CF880BE096B7ECD" />
      </Head>
      <body


        className={`font-montserrat antialiased overflow-x-hidden box-border`}
      >
          <Navbar t={hr}></Navbar>
          {children}
          <Footer t={hr}></Footer>
      </body>
    </html>
  );
}


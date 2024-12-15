import "../globals.css";
import Navbar from "../sections/Navbar";
import Head from "next/head";
import Footer from "../sections/Footer";
import en from '../../../messages/en.json'

export default async function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  
  return (
    <html lang="en">
      <Head>
        <meta name="title" content="Petar Benjak" />
        <meta name="description" content="Life long learner" />
        <meta name="robots" content="index, follow" />
        <meta name="msvalidate.01" content="FA0645BC70B0DA868CF880BE096B7ECD" />
      </Head>
      <body


        className={`font-montserrat antialiased overflow-x-hidden box-border`}
      >
          <Navbar t={en}></Navbar>
          {children}
          <Footer t={en}></Footer>
      </body>
    </html>
  );
}


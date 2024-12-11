import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./sections/Navbar";

export const metadata: Metadata = {
  title: "Petar Benjak",
  description: "Life long learner",
  robots: "index, follow"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-montserrat antialiased overflow-x-hidden box-border`}
      >
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}

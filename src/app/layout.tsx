import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "React練習",
  description: "React練習しています。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

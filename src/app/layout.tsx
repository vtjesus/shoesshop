import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

//Components
import Navbar from "@/components/header/navbar";
import Footer from "@/components/footer/footer";

//context
import { CartProvider } from "@/context/cartContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Hunters Shoe Store",
  description: "A demo website of my capabilities as a developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen 2xl:container 2xl:mx-auto`}
      >
        <CartProvider>
          <Navbar/>
          <main className="flex-grow">{children}</main>
          <Footer/>
        </CartProvider>

      </body>
    </html>
  );
}

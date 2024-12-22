import Footer from "@/components/Footer";

import Navbar from "@/components/Navbar";
import localFont from "next/font/local";
import "./globals.css";

// Local Fonts
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

export const metadata = {
  title: "Quantum Institute",
  description:
    "Welcome to Quantum Institute - A hub for learning and innovation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-serif bg-[#FAF4F1]`}
        style={{ fontFamily: "'Fraunces', serif" }}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import Footer from "@/components/Footer";

import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Quantum Institute",
  description:
    "Welcome to Quantum Institute - A hub for learning and innovation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="antialiased font-sans  bg-[#FAF4F1]"
        style={{
          fontFamily:
            "ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
        }}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

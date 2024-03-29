import type { Metadata } from "next";
import { Dosis } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const dosis = Dosis({ subsets: ["latin"] });
// const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Witty Word",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dosis.className}>
        <div className="absolute top-0 left-0 text-white w-full z-10 mx-auto">
          <Header />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}

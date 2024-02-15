import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Generated by create next app",
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
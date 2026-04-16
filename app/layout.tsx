import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Motorcycle Reveal",
  description: "Scroll-Driven Motorcycle Reveal Hero",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

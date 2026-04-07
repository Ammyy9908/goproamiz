import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Universal Code Compiler",
  description: "A professional online code editor and compiler that supports multiple languages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

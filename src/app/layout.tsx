import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-hacker",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Programiz // TERMINAL",
  description: "Online code editor and compiler — terminal interface.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${jetbrainsMono.variable} font-mono`}>
        {children}
      </body>
    </html>
  );
}

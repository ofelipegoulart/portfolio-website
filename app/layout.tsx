import { JsonLd } from "./components/JsonLd";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://felipegoulart.dev"),
  title: "Felipe Goulart | Desenvolvedor Fullstack — React, Next.js & Node.js",
  description: "Portfólio pessoal explorando a interseção entre engenharia de software, design de interfaces e arquitetura de sistemas.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Felipe Goulart | Desenvolvedor Fullstack",
    description: "Portfólio pessoal explorando a interseção entre engenharia de software, design de interfaces e arquitetura de sistemas.",
    url: "https://felipegoulart.dev",
    siteName: "Felipe Goulart",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/brand.png",
        width: 1200,
        height: 630,
        alt: "Felipe Goulart - Fullstack Developer",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <JsonLd />
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Libre_Bodoni, Caudex } from "next/font/google";

const libreBodoni = Libre_Bodoni({
  subsets: ["latin"],
  variable: "--font-libre-bodoni",
  weight: ["400", "500", "600", "700"],
});

const caudex = Caudex({
  subsets: ["latin"],
  variable: "--font-caudex",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://casa-do-cavalinho.vercel.app"),
  title: "Joalharia Cavalinho – Gold & Watch Repairs in Albufeira",
  description:
    "Joalharia Cavalinho (Ourivesaria Cavalinho) in Albufeira offers fine jewelry, custom commissions, watches, clocks, and expert repairs. Gold, silver, diamonds, wedding rings, and watch battery changes. Visit Rua João de Deus, Albufeira.",
  keywords: [
    "Joalharia Cavalinho",
    "Ourivesaria Cavalinho",
    "Casa do Cavalinho",
    "gold jewelry Albufeira",
    "diamond rings Albufeira",
    "custom jewelry Albufeira",
    "watches Albufeira",
    "clock repairs Albufeira",
    "watch battery change Albufeira",
    "jewelry repair Albufeira",
    "Jorge Matias"
  ],
  authors: [{ name: "Jorge Matias" }],
  openGraph: {
    title: "Joalharia Cavalinho – Gold & Watch Repairs in Albufeira",
    description:
      "Visit Joalharia Cavalinho in Albufeira for fine jewelry, custom commissions, watches, clocks, and expert repairs. Gold, silver, diamonds, wedding rings, and watch battery changes.",
    url: "/",
    siteName: "Joalharia Cavalinho",
    images: [
      {
        url: "/shop-outside.webp",
        width: 1200,
        height: 630,
        alt: "Joalharia Cavalinho storefront"
      }
    ],
    locale: "pt_PT",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Joalharia Cavalinho – Gold & Watch Repairs in Albufeira",
    description:
      "Fine jewelry, watches, repairs, custom commissions, and expert repairs at Joalharia Cavalinho, Albufeira. Gold, silver, diamonds, wedding rings, and watch battery changes.",
    images: ["/shop-outside.webp"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${libreBodoni.variable} ${caudex.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
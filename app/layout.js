import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const display = Manrope({ subsets: ["latin"], variable: "--font-display", weight: ["600","700","800"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const __jsonld = {"@context":"https://schema.org","@type":"CreativeWork","name":"Positive Crave — Konsep Amber","description":"Landing page brand keintiman","url":"https://crave-amber.pintuweb.com"};

export const metadata = {
  metadataBase: new URL("https://crave-amber.pintuweb.com"),
  title: "Positive Crave — Konsep Amber",
  description: "Landing page Positive Crave konsep \"Amber\": keintiman modern dengan kehangatan amber — passion meets precision.",
  applicationName: "Positive Crave",
  keywords: ["intimacy brand", "wellness pasangan", "landing page", "desain web"],
  authors: [{ name: "Positive Crave" }],
  creator: "Positive Crave",
  publisher: "Positive Crave",
  alternates: { canonical: "https://crave-amber.pintuweb.com" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://crave-amber.pintuweb.com",
    siteName: "Positive Crave",
    title: "Positive Crave — Konsep Amber",
    description: "Landing page Positive Crave konsep \"Amber\": keintiman modern dengan kehangatan amber — passion meets precision.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Positive Crave — Konsep Amber" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Positive Crave — Konsep Amber",
    description: "Landing page Positive Crave konsep \"Amber\": keintiman modern dengan kehangatan amber — passion meets precision.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export const viewport = {
  themeColor: "#17110b",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${display.variable} ${inter.variable} antialiased bg-night text-smoke overflow-x-hidden max-w-[100vw]`}>
        <a
          href="#konten"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-amber focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-night"
        >
          Lompat ke konten utama
        </a>
        <Navbar />
        <main id="konten">{children}</main>
        <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}

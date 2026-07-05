import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const display = Manrope({ subsets: ["latin"], variable: "--font-display", weight: ["600","700","800"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Positive Crave — Konsep Amber",
  description: "Positive Crave: keintiman modern dengan kehangatan amber — passion meets precision.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${display.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

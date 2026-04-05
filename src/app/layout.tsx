import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RZ Mega Resources | Unifying Excellence",
  description: "The parent organization for RZ Kitchen, WSS Digital Labs, RXZ Ventures, and Cahayateras Consultation.",
  keywords: ["Holding Company Malaysia", "Corporate Website Development", "RZ Mega Resources", "Business Solutions"],
  openGraph: {
    title: "RZ Mega Resources | Unifying Excellence",
    description: "The parent organization for RZ Kitchen, WSS Digital Labs, RXZ Ventures, and Cahayateras Consultation.",
    type: "website",
    locale: "en_MY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-slate-50 text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Vectra | Decentralized AI-Powered Robotic Marketplace',
  description:
    'Vectra is a Web3 platform combining AI, robotics, and blockchain to automate tasks globally with secure, transparent, decentralized technology.',
  openGraph: {
    title: 'Vectra | Decentralized AI-Powered Robotic Marketplace',
    description:
      'Vectra is a Web3 platform combining AI, robotics, and blockchain to automate tasks globally with secure, transparent, decentralized technology.',
    url: 'https://yourdomain.com',
    siteName: 'Vectra',
    images: [
      {
        url: 'https://yourdomain.com/Metadata.png',
        width: 1200,
        height: 630,
        alt: 'Vectra Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vectra | Decentralized AI-Powered Robotic Marketplace',
    description:
      'Vectra is a Web3 platform combining AI, robotics, and blockchain to automate tasks globally with secure, transparent, decentralized technology.',
    images: ['https://yourdomain.com/Metadata.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#c8102e',
}

export const metadata: Metadata = {
  title: {
    default: 'UU AI Society',
    template: '%s | UU AI Society'
  },
  description: 'Uppsala University AI Society - Connecting students passionate about Artificial Intelligence',
  keywords: ['AI', 'Artificial Intelligence', 'Uppsala University', 'Student Society', 'Tech Events'],
  authors: [{ name: 'UU AI Society' }],
  creator: 'UU AI Society',
  publisher: 'UU AI Society',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/images/favicon-96x96.png',
    shortcut: '/images/favicon-96x96.png',
    apple: '/images/apple-touch-icon.png',
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/images/apple-touch-icon.png',
      }
    ],
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://uuais.com/',
    siteName: 'UU AI Society',
    title: 'UU AI Society',
    description: 'Uppsala University AI Society - Connecting students passionate about Artificial Intelligence',
    images: [
      {
        url: '/images/campus.png',
        width: 1200,
        height: 630,
        alt: 'UU AI Society Campus',
      },
      {
        url: '/images/logo.png',
        width: 512,
        height: 512,
        alt: 'UU AI Society Logo',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UU AI Society',
    description: 'Uppsala University AI Society - Connecting students passionate about Artificial Intelligence',
    images: ['/images/campus.png'],
    creator: '@uuais',
  },
  applicationName: 'UU AI Society',
  other: {
    'msapplication-TileColor': '#c8102e',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans bg-[#1a1a1a] text-white min-h-screen`}>
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}

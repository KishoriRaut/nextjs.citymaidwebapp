import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from 'next/script';
import "./globals.css";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "City Maid Services",
  "image": "https://citymaidservices.net/logo.png",
  "@id": "https://citymaidservices.net",
  "url": "https://citymaidservices.net",
  "telephone": "+1-XXX-XXX-XXXX",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main St",
    "addressLocality": "Your City",
    "addressRegion": "Your State",
    "postalCode": "12345",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 37.7749,
    "longitude": -122.4194
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "08:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.facebook.com/citymaidservices",
    "https://www.instagram.com/citymaidservices",
    "https://www.linkedin.com/company/city-maid-services"
  ]
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://citymaidservices.net';

export const metadata: Metadata = {
  title: "City Maid Services - Professional Home & Office Cleaning",
  description: "Professional cleaning services for homes and offices. We offer full-time, part-time, and live-in maids to keep your space spotless.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: 'City Maid Services - Professional Home & Office Cleaning',
    description: 'Professional cleaning services for homes and offices. We offer full-time, part-time, and live-in maids to keep your space spotless.',
    url: siteUrl,
    siteName: 'City Maid Services',
    locale: 'en_US',
    type: 'website',
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

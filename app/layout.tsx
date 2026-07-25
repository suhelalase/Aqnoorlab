import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://aqnoorlabs.com";

export const metadata: Metadata = {
  title: {
    default: "AqNoorLabs",
    template: "%s | AqNoorLabs",
  },
  description:
    "AqNoorLabs is a premium software development company building custom websites, web apps, mobile apps, desktop software, and AI automation systems for startups and enterprises.",
  keywords: [
    "AqNoorLabs",
    "software development company",
    "custom website development",
    "web application development",
    "mobile app development",
    "Android iOS app development",
    "desktop software development",
    "AI solutions",
    "AI automation",
    "business automation",
    "Next.js development agency",
    "UI UX design",
    "React developer",
    "Node.js backend",
    "SaaS development",
    "startup software development",
    "enterprise software solutions",
    "cloud infrastructure",
    "API development",
    "n8n automation",
  ],
  authors: [{ name: "AqNoorLabs", url: SITE_URL }],
  creator: "AqNoorLabs",
  publisher: "AqNoorLabs",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "AqNoorLabs",
    description:
      "Transforming business ideas into reliable, scalable software products. Custom web, mobile, desktop, and AI systems built for startups and enterprises.",
    siteName: "AqNoorLabs",
    images: [
      {
        url: "/logos/logo.png",
        width: 512,
        height: 512,
        alt: "AqNoorLabs Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AqNoorLabs",
    description:
      "Transforming business ideas into reliable, scalable software products. Custom web, mobile, desktop, and AI systems built for startups and enterprises.",
    images: ["/logos/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/logos/logo.png", type: "image/png" },
    ],
    apple: "/logos/logo.png",
    shortcut: "/logos/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#F5F4FA",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AqNoorLabs",
  url: "https://aqnoorlabs.com",
  logo: "https://aqnoorlabs.com/logos/logo.png",
  description:
    "AqNoorLabs is a premium software development company building custom websites, web apps, mobile apps, desktop software, and AI automation systems for startups and enterprises.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    url: "https://aqnoorlabs.com/#contact",
  },
  sameAs: [],
  serviceType: [
    "Website Development",
    "Web Application Development",
    "Mobile App Development",
    "Desktop Software Development",
    "AI Solutions",
    "Business Automation",
    "UI/UX Design",
    "API Development",
    "Cloud Infrastructure",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${plusJakarta.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <head>
        <Script
          id="json-ld-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col selection:bg-brand/20 selection:text-brand" suppressHydrationWarning>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
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

export const metadata: Metadata = {
  title: {
    default: "AqNoorLabs | Premium Software Development Company",
    template: "%s | AqNoorLabs",
  },
  description:
    "AqNoorLabs designs and builds custom websites, web applications, mobile apps, desktop software, and intelligent AI solutions for startups and enterprises.",
  keywords: [
    "AqNoorLabs",
    "Software Development",
    "Web Application Development",
    "Mobile Apps Android iOS",
    "Desktop Software Development",
    "AI Solutions",
    "Business Automation",
    "Custom Websites",
    "Next.js Developer",
    "UI/UX Design",
  ],
  authors: [{ name: "AqNoorLabs", url: "https://aqnoorlabs.com" }],
  creator: "AqNoorLabs",
  publisher: "AqNoorLabs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aqnoorlabs.com",
    title: "AqNoorLabs | Premium Software Development Company",
    description:
      "Transforming business ideas into reliable, scalable software products. Custom web, mobile, desktop and AI systems built for startups and enterprises.",
    siteName: "AqNoorLabs",
  },
  twitter: {
    card: "summary_large_image",
    title: "AqNoorLabs | Premium Software Development Company",
    description:
      "Transforming business ideas into reliable, scalable software products. Custom web, mobile, desktop and AI systems built for startups and enterprises.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#F5F4FA",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
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
    >
      <body className="min-h-full flex flex-col selection:bg-brand/20 selection:text-brand">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}

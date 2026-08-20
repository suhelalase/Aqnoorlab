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

const SITE_URL = "https://aqnoorlabs.online";

export const metadata: Metadata = {
  title: {
    default: "AqNoorLabs — Software Development Agency for Indian Businesses",
    template: "%s | AqNoorLabs",
  },
  description:
    "AqNoorLabs is a software development company in India helping businesses build websites, mobile apps, desktop software, and AI automation tools that actually work — delivered on time, on budget.",
  authors: [{ name: "AqNoorLabs", url: SITE_URL }],
  creator: "AqNoorLabs",
  publisher: "AqNoorLabs",
  metadataBase: new URL(SITE_URL),

  alternates: {
    canonical: SITE_URL,
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    title:
      "AqNoorLabs — Custom Websites, Apps & AI Systems for Indian Businesses",
    description:
      "Hire custom website, mobile app & AI automation developers in India. On-time delivery, milestone-based pricing, and reliable support.",
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
    title:
      "AqNoorLabs — Custom Websites, Apps & AI Systems for Indian Businesses",
    description:
      "Hire custom website, mobile app & AI automation developers in India. On-time delivery, milestone-based pricing, and reliable support.",
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
    icon: [{ url: "/logos/logo.png", type: "image/png" }],
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

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "AqNoorLabs",
  url: SITE_URL,
  logo: `${SITE_URL}/logos/logo.png`,
  image: `${SITE_URL}/logos/logo.png`,
  description:
    "AqNoorLabs is a custom website development company, mobile app agency, and AI automation partner helping Indian businesses build software that actually works.",
  telephone: "+91-7387450332",
  email: "hi@aqnoorlabs.online",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressRegion: "Maharashtra",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  sameAs: [],
  knowsAbout: [
    "Website Development",
    "Mobile App Development",
    "Desktop Software Development",
    "AI Automation",
    "n8n Automation",
    "UI UX Design",
    "Next.js Development",
  ],
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I get started with AqNoorLabs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fill out our contact form or book a free call. We'll understand what you need, share a clear plan with cost and timeline, and get started once you're comfortable.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with businesses outside metro cities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work with founders, SMEs, D2C brands, and local businesses across India, including Tier-2 and Tier-3 cities.",
      },
    },
    {
      "@type": "Question",
      name: "What are your payment terms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We follow transparent, milestone-based pricing. Typically 30% advance to start, with remaining payments tied to clear project milestones.",
      },
    },
    {
      "@type": "Question",
      name: "Will my app slow down or break as my business grows?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We plan for scale from day one using optimized databases, appropriate hosting, caching, and scalable architecture.",
      },
    },
    {
      "@type": "Question",
      name: "What is your approach to design and user experience?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We focus on fast, intuitive, modern interfaces with clear navigation and responsive experiences across desktop and mobile.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide post-launch maintenance and support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer ongoing maintenance, hosting setup, performance monitoring, and software updates.",
      },
    },
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
        <link rel="help" href="/llms.txt" type="text/markdown" />
        <link rel="index" href="/sitemap.xml" type="application/xml" />

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N5LB6Z9D');
          `}
        </Script>

        <Script
          id="json-ld-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdOrganization),
          }}
        />

        <Script
          id="json-ld-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdFaq),
          }}
        />
      </head>

      <body
        className="min-h-full flex flex-col selection:bg-brand/20 selection:text-brand"
        suppressHydrationWarning
      >
        <SmoothScroll />

        {children}

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N5LB6Z9D"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Archivo, Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo-display",
  subsets: ["latin"],
  weight: ["800", "900"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Vendonexa | Enterprise Software & Cybersecurity Solutions",
    template: "%s | Vendonexa",
  },
  description:
    "Vendonexa delivers enterprise software solutions (Vendor Management System, Hospital Management System) and cybersecurity services (VAPT, SOC, Cloud Security, SIEM).",
  keywords: [
    "Vendor Management System",
    "Hospital Management System",
    "Cybersecurity Services",
    "VAPT Services",
    "Healthcare Management Software",
    "Enterprise Workflow Automation",
    "SOC Services",
    "SIEM Implementation",
    "Custom Software Development",
  ],
  authors: [{ name: "Vendonexa Enterprise Technologies" }],
  creator: "Vendonexa",
  publisher: "Vendonexa",
  openGraph: {
    title: "Vendonexa | Enterprise Software & Cybersecurity Solutions",
    description:
      "Technology That Manages, Connects & Protects Your Business. Manage Smarter. Operate Better. Stay Secure.",
    url: "https://vendonexa.com",
    siteName: "Vendonexa",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vendonexa | Enterprise Software & Cybersecurity Solutions",
    description: "Building Smarter Systems. Securing Digital Businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Vendonexa",
  url: "https://vendonexa.com",
  logo: "https://vendonexa.com/logo.png",
  description:
    "Enterprise software and cybersecurity company providing Vendor Management Systems, Hospital Management Systems, and VAPT / SOC services.",
  slogan: "Manage Smarter. Operate Better. Stay Secure.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-800-555-8363",
    contactType: "customer support",
    email: "contact@vendonexa.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${plusJakartaSans.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#101820]">
        {children}
      </body>
    </html>
  );
}

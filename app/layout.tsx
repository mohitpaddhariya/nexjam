import type { Metadata } from "next";
import { Inter, Cinzel, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nexjam.vercel.app"),
  title: {
    default: "NexJam | Research-Driven Hackathon — 10 Hours, Infinite Fun",
    template: "%s | NexJam",
  },
  description:
    "NexJam is a 10-hour research-driven hackathon focused on solving core limitations in modern technology. Build, break, and ship with your crew. Tracks include AI Safety, Cybersecurity, DevOps, and more.",
  keywords: [
    "NexJam",
    "hackathon",
    "research hackathon",
    "coding competition",
    "AI safety",
    "cybersecurity hackathon",
    "deepfake detection",
    "machine unlearning",
    "passwordless authentication",
    "DevOps hackathon",
    "college hackathon",
    "10 hour hackathon",
    "Nexus Club",
  ],
  authors: [{ name: "Nexus Club" }],
  creator: "Mohit Paddhariya",
  publisher: "Nexus Club — Department of Computer Science",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexjam.vercel.app",
    siteName: "NexJam",
    title: "NexJam | Research-Driven Hackathon — 10 Hours, Infinite Fun",
    description:
      "A 10-hour research-driven hackathon. Build something that doesn't crash — or crash it spectacularly. AI Safety, Cybersecurity, DevOps & more.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NexJam — Research-Driven Hackathon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NexJam | Research-Driven Hackathon",
    description:
      "10 hours. 4 friends. Infinite fun. Build, break, and ship at NexJam — a research-driven hackathon by Nexus Club.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  alternates: {
    canonical: "https://nexjam.vercel.app",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "NexJam — Research-Driven Hackathon",
  description:
    "A 10-hour research-driven hackathon focused on solving core limitations in modern technology. Tracks include Forensic Analysis of Synthetic Media, Passwordless Authentication, Secure Knowledge Access, Machine Unlearning, Network Anomaly Detection, and Developer Pipeline Intelligence.",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  organizer: {
    "@type": "Organization",
    name: "Nexus Club — Department of Computer Science",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
    availability: "https://schema.org/LimitedAvailability",
    url: "https://forms.gle/D21eZFngVmCzSnYb8",
  },
  image: "https://nexjam.vercel.app/og-image.png",
  url: "https://nexjam.vercel.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${cinzel.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground min-h-screen font-sans`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

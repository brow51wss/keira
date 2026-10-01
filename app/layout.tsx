import type { Metadata } from "next";
import { Great_Vibes, Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
  display: "swap",
});

const siteTitle = "Host Keira — Dream Big Events Management";
const siteDescription =
  "Event hosting, events management, inspirational speaking and training by Host Keira in Malolos, Bulacan.";
const ogImage = {
  url: "/assets/OpenGraph.jpg",
  width: 1200,
  height: 630,
  alt: "Host Keira — Dream Big Events Management",
};

export const metadata: Metadata = {
  // Resolves relative URLs (like the OpenGraph image) to absolute ones.
  // Update this when the custom domain goes live.
  metadataBase: new URL("https://keira-delta.vercel.app"),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    type: "website",
    siteName: "Host Keira",
    locale: "en_PH",
    title: siteTitle,
    description: siteDescription,
    url: "/",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [ogImage.url],
  },
  icons: {
    icon: { url: "/assets/favicon.png", type: "image/png" },
    apple: "/assets/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable} ${greatVibes.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

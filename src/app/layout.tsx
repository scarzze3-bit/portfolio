import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "whybh labs | Blockchain, Web3 & Cybersecurity Engineering Studio",
  description:
    "whybh labs is a specialized technical engineering studio architecting resilient Web3 protocols, formally verified smart contracts, and high-throughput zero-trust web systems.",
  keywords: [
    "whybh labs",
    "Blockchain Engineering",
    "Smart Contract Audit",
    "Cybersecurity Studio",
    "Web3 Security",
    "Solidity",
    "Foundry",
    "Rust EVM Indexing",
    "Full-Stack Web Development",
    "Next.js App Router",
  ],
  authors: [{ name: "whybh labs", url: "https://whybh.dev" }],
  creator: "whybh labs",
  metadataBase: new URL("https://whybh.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://whybh.dev",
    siteName: "whybh labs",
    title: "whybh labs | Blockchain, Web3 & Cybersecurity Engineering Studio",
    description:
      "Engineering resilient Web3 protocols, hardened smart contracts, zero-trust cybersecurity architectures, and scalable full-stack web applications.",
  },
  twitter: {
    card: "summary_large_image",
    title: "whybh labs | Blockchain, Web3 & Cybersecurity Engineering Studio",
    description:
      "Engineering resilient Web3 protocols, hardened smart contracts, zero-trust cybersecurity architectures, and scalable full-stack web applications.",
    creator: "@whybh_labs",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-[#09090b] text-[#fafafa] antialiased selection:bg-emerald-500/25 selection:text-white">
        {children}
      </body>
    </html>
  );
}
import { setDefaultOptions } from "date-fns";
import { pl } from "date-fns/locale";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { headers } from "next/headers";
import Script from "next/script";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { PhraseSearch } from "@/components/phrase-search";
import { SocialSidebar } from "@/components/socials-sidebar";
import { Toaster } from "@/components/ui/sonner";
import { BugReportProvider } from "@/hooks/use-bug-report";
import { QueryProvider } from "@/lib/query-client";

import "./globals.css";

setDefaultOptions({ locale: pl });

const WEBSITE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://juwenalia.solvro.pl";

export const metadata: Metadata = {
  title: "Juwenalia 2025 #WrocławRazem",
  description:
    "Oficjalna strona Juwenaliów Wrocław Razem 2025 – program, line-up, bilety i strefy wydarzeń.",
  keywords: [
    "Juwenalia 2025",
    "Wrocław",
    "studenci",
    "Juwenalia Wrocław",
    "Juwenalia Wrocław 2025",
    "Juwenalia 2025 Wrocław Razem",
    "Juwenalia 2025 #WrocławRazem",
    "Juwenalia #WrocławRazem",
    "Juwenalia",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  metadataBase: new URL(WEBSITE_URL),
  openGraph: {
    title: "Juwenalia 2025 #WrocławRazem",
    description: "Oficjalna strona wydarzenia Juwenalia 2025 #WrocławRazem",
    type: "website",
    locale: "pl_PL",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Juwenalia 2025 #WrocławRazem",
      },
    ],
  },
};

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const nonce = headersList.get("x-nonce");

  return (
    <html lang="pl" className={montserrat.variable}>
      <body className="relative">
        <QueryProvider>
          <BugReportProvider>
            <SocialSidebar />
            <Navbar />
            <PhraseSearch />
            {children}
            <Footer />
            <Toaster />
            <SocialSidebar />
            <Script
              defer
              src="https://analytics.solvro.pl/script.js"
              data-website-id={"46b3f072-4242-452a-8d10-89f95a49f275"}
              data-domains="juwenalia.wroc.pl,juwenalia.solvro.pl"
              nonce={nonce ?? undefined}
            />
          </BugReportProvider>
        </QueryProvider>
      </body>
    </html>
  );
}

import { setDefaultOptions } from "date-fns";
import { pl } from "date-fns/locale";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { PhraseSearch } from "@/components/phrase-search";
import { SocialSidebar } from "@/components/socials-sidebar";
import { Toaster } from "@/components/ui/sonner";
import { QueryProvider } from "@/lib/query-client";

import "./globals.css";

setDefaultOptions({ locale: pl });

export const metadata: Metadata = {
  title: "Juwenalia 2025 #WrocławRazem",
  description: "Juwenalia Wrocław",
  icons: {
    icon: "/favicon.svg",
  },
};

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={montserrat.variable}>
      <QueryProvider>
        <body className="relative">
          <SocialSidebar />
          <Navbar />
          <PhraseSearch />
          {children}
          <Footer />
          <Toaster />
          <SocialSidebar />
        </body>
      </QueryProvider>
    </html>
  );
}

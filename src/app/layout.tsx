import { setDefaultOptions } from "date-fns";
import { pl } from "date-fns/locale";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { QueryProvider } from "@/lib/query-client";

import "./globals.css";

setDefaultOptions({ locale: pl });

export const metadata: Metadata = {
  title: "Juwenalia by Solvro",
  description: "Juwenalia Wrocław",
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
        <body>
          <Navbar />
          {children}
          <Footer />
        </body>
      </QueryProvider>
    </html>
  );
}

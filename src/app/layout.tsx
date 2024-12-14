import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import { Navbar } from "@/components/navbar";
import { QueryProvider } from "@/lib/query-client";
import { Footer } from "@/components/Footer";


import "./globals.css";

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
    <html lang="en" className={montserrat.variable}>
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

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/lib/queryClient";
import { Navbar } from "@/components/Navbar";
import SocialSidebar from "@/components/SocialsSidebar";

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
          <SocialSidebar />
          <Navbar />
          {children}
        </body>
      </QueryProvider>
    </html>
  );
}

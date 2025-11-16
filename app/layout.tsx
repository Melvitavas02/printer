import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";
import "../styles/animations.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PrintPress - Professional Printing & Design Services",
  description: "Premium printing solutions and creative design services for businesses of all sizes. Offset printing, digital printing, and branding.",
  keywords: "printing, design, branding, offset printing, digital printing, graphics design",
  openGraph: {
    title: "PrintPress - Professional Printing & Design Services",
    description: "Premium printing solutions and creative design services",
    type: "website",
  },
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      {/* body no longer has geist classes so Poppins from <html> applies globally */}
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

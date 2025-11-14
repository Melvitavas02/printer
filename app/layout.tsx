import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

const geistSans = Geist({ subsets: ['latin'] });
const geistMono = Geist_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PrintPress - Professional Printing & Design Services',
  description: 'Premium printing solutions and creative design services for businesses of all sizes. Offset printing, digital printing, and branding.',
  keywords: 'printing, design, branding, offset printing, digital printing, graphics design',
  openGraph: {
    title: 'PrintPress - Professional Printing & Design Services',
    description: 'Premium printing solutions and creative design services',
    type: 'website',
  },
    generator: 'v0.app'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} ${geistMono.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

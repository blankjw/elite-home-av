import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Elite Home AV | Complete Home Solutions SE Texas',
    template: '%s | Elite Home AV',
  },
  description:
    'Home audio, video, automation, security, electrical & more. One company for every trade. Serving Lumberton, Beaumont, Port Arthur & SE Texas. (409) 790-7889.',
  keywords: [
    'home audio installation SE Texas',
    'home theater Beaumont TX',
    'smart home automation Lumberton TX',
    'home security system Port Arthur TX',
    'surveillance cameras Beaumont TX',
    'electrical contractor Lumberton TX',
    'home remodel Beaumont TX',
    'structured wiring SE Texas',
    'Control4 installer Southeast Texas',
    'Elite Home AV',
  ],
  authors: [{ name: 'Elite Home AV LLC' }],
  creator: 'Elite Home AV LLC',
  publisher: 'Elite Home AV LLC',
  metadataBase: new URL('https://www.elitehomeav.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.elitehomeav.com',
    siteName: 'Elite Home AV LLC',
    title: 'Elite Home AV | Complete Home Solutions SE Texas',
    description:
      'Home audio, video, automation, security, electrical & more. One company for every trade. Serving SE Texas.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elite Home AV | Complete Home Solutions SE Texas',
    description:
      'Home audio, video, automation, security, electrical & more. One company for every trade. Serving SE Texas.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0A0A0A" />
      </head>
      <body className="bg-[#0A0A0A] text-white min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

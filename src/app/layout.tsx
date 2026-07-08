import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Golden Chinar | Kachi Ghani Mustard Oil | Jai Vaishno Oil Mills',
  description: "Golden Chinar — India's premium Kachi Ghani mustard oil manufacturer since 1992. AGMARK Grade 1 certified. 100 TPD capacity. Private label, bulk supply & consumer packaging.",
  keywords: ['Kachi Ghani Mustard Oil', 'Golden Chinar', 'Jai Vaishno Oil Mills', 'AGMARK Grade 1', 'Private Label Mustard Oil', 'Bulk Mustard Oil', 'Khairthal Alwar Rajasthan'],
  openGraph: {
    title: 'Golden Chinar | Heritage. Purity. Manufacturing Excellence.',
    description: 'Premium Kachi Ghani mustard oil manufacturer. Trusted by Patanjali, Modicare & Louis Dreyfus. Est. 1992.',
    url: 'https://goldenchinar.com',
    siteName: 'Golden Chinar',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#991B1B" />
      </head>
      <body className="antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}

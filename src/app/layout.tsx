import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Golden Chinar | Kachi Ghani Mustard Oil | Jai Vaishno Oil Mills',
  description:
    'Golden Chinar — India\'s premium Kachi Ghani mustard oil manufacturer since 1992. AGMARK Grade 1 certified. 100 TPD capacity. Private label, bulk supply & consumer packaging. Khairthal, Alwar, Rajasthan.',
  keywords: [
    'Kachi Ghani Mustard Oil',
    'Golden Chinar',
    'Jai Vaishno Oil Mills',
    'Mustard Oil Manufacturer India',
    'AGMARK Grade 1 Mustard Oil',
    'Private Label Mustard Oil',
    'Bulk Mustard Oil Supply',
    'Khairthal Alwar Rajasthan',
    'Cold Pressed Mustard Oil',
    'Mustard Oil Distributor',
  ],
  authors: [{ name: 'Jai Vaishno Oil Mills' }],
  creator: 'Jai Vaishno Oil Mills',
  openGraph: {
    title: 'Golden Chinar | Heritage. Purity. Manufacturing Excellence.',
    description:
      'Premium Kachi Ghani mustard oil manufacturer. Trusted by Patanjali, Modicare, Dalmia Bharat & Louis Dreyfus. 100 TPD capacity. Est. 1992.',
    url: 'https://goldenchinar.com',
    siteName: 'Golden Chinar',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Golden Chinar | Kachi Ghani Mustard Oil',
    description: 'Premium mustard oil manufacturer from the heart of Rajasthan.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#050505" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FoodEstablishment',
              name: 'Golden Chinar — Jai Vaishno Oil Mills',
              description: 'Premium Kachi Ghani mustard oil manufacturer',
              foundingDate: '1992',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'G-46, RIICO Industrial Area',
                addressLocality: 'Khairthal',
                addressRegion: 'Rajasthan',
                postalCode: '301404',
                addressCountry: 'IN',
              },
              telephone: '+919783820000',
              email: 'jvomsales@gmail.com',
              url: 'https://goldenchinar.com',
            }),
          }}
        />
      </head>
      <body className="bg-black text-ivory antialiased overflow-x-hidden grain">
        {children}
      </body>
    </html>
  );
}

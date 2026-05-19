export const metadata = {
  title: "Side Hustle Tax Estimator | Calculate What You'll Owe",
  description: "Estimate your self-employment taxes, federal income tax, and quarterly payments from side hustle or freelance income. See exactly what to set aside so tax season never surprises you.",
  
  alternates: {
    canonical: "https://www.sidehustletaxestimator.com",           // ← MUST CHANGE
  },

  openGraph: {
    title: "Side Hustle Tax Estimator | Calculate What You'll Owe",
    description: "Estimate your self-employment taxes, federal income tax, and quarterly payments from side hustle or freelance income. See exactly what to set aside so tax season never surprises you.",
    url: "https://www.sidehustletaxestimator.com",                 // ← MUST CHANGE
    siteName: "Moneywise Calculators",             // ← Change
    images: [
      {
        url: "https://www.sidehustletaxestimator.com/og-image.png", // ← MUST CHANGE
        width: 1200,
        height: 630,
        alt: "Side Hustle Tax Estimator",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Side Hustle Tax Estimator | Calculate What You'll Owe",
    description: "Estimate your self-employment taxes, federal income tax, and quarterly payments from side hustle or freelance income. See exactly what to set aside so tax season never surprises you.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },

  authors: [{name: "David Graham" }],
  creator: "MoneyWise Calculators",
  publisher: "MoneyWise Calculators",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3475627763908800"
          crossOrigin="anonymous"
        ></script>
              <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "side-hustle-profit-tax-estimator",
              description: "Financial calculator tool",
              url: "https://www.side-hustle-profit-tax-estimator.com",
              applicationCategory: "Finance",
              operatingSystem: "All",
              offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
            }),
          }}
        />
    </head>
      <body>{children}</body>
    </html>
  );
}

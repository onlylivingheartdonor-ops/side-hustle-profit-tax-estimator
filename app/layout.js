export const metadata = {
  title: "Side Hustle Tax Estimator | Calculate What You'll Owe",
  description: "Estimate your self-employment taxes, federal income tax, and quarterly payments from side hustle or freelance income. See exactly what to set aside so tax season never surprises you.",

  alternates: {
    canonical: "https://www.sidehustletaxestimator.com",
  },

  openGraph: {
    title: "Side Hustle Tax Estimator | Calculate What You'll Owe",
    description: "Estimate your self-employment taxes, federal income tax, and quarterly payments from side hustle or freelance income. See exactly what to set aside so tax season never surprises you.",
    url: "https://www.sidehustletaxestimator.com",
    siteName: "Side Hustle Tax Estimator",
    images: [
      {
        url: "https://www.sidehustletaxestimator.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Side Hustle Tax Estimator -- Calculate what you will owe",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Side Hustle Tax Estimator | Calculate What You'll Owe",
    description: "Estimate your self-employment taxes, federal income tax, and quarterly payments from side hustle or freelance income.",
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

  authors: [{ name: "David Graham" }],
  creator: "MoneyWise Calculators",
  publisher: "MoneyWise Calculators",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
              name: "Side Hustle Tax Estimator",
              description: "Free tool to estimate self-employment taxes, federal income tax, and quarterly payments from side hustle or freelance income.",
              url: "https://www.sidehustletaxestimator.com",
              applicationCategory: "FinanceApplication",
              operatingSystem: "All",
              browserRequirements: "Requires JavaScript",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD"
              },
              author: {
                "@type": "Organization",
                name: "MoneyWise Calculators",
                url: "https://moneywisecalculator.com"
              }
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

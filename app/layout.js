export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Side Hustle Profit and Tax Estimator</title>
        <meta
          name="description"
          content="Estimate side hustle profit and taxes after expenses. Designed for freelancers, gig workers, and independent contractors."
        />

        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3475627763908800"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>{children}</body>
    </html>
  )
}

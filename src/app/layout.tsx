import Script from "next/script";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <Script id='google_tag_manager' async src="https://www.googletagmanager.com/gtag/js?id=G-MJQPJSSJF1" />
        <Script
          id='ga_data_layer'
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-MJQPJSSJF1');`
          }} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

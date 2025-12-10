import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Ayodeji - Frontend Web Developer specializing in React, Next.js, and modern web technologies. Building beautiful, responsive, and performant web experiences." />
        <meta name="keywords" content="Frontend Developer, React Developer, Next.js, Web Developer, Portfolio, Ayodeji" />
        <meta name="author" content="Ayodeji" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/" />
        <meta property="og:title" content="Ayodeji - Frontend Web Developer" />
        <meta property="og:description" content="Building modern, fast, responsive, and beautiful web experiences." />
        <meta property="og:image" content="https://yourwebsite.com/og-image.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://yourwebsite.com/" />
        <meta property="twitter:title" content="Ayodeji - Frontend Web Developer" />
        <meta property="twitter:description" content="Building modern, fast, responsive, and beautiful web experiences." />
        <meta property="twitter:image" content="https://yourwebsite.com/og-image.jpg" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
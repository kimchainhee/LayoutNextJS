import ThemeTest from "./theme/ThemeTest"
import { Inter, Roboto_Mono } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
})

export const metadata = {
  title: 'Sign up | Hahalolo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable}`}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="author" content="Kimchainhee" />
        <meta name="refresh" content="30" />
        <meta name="description" content="Tìm hiểu về NextJS" />
        <meta name="viewport" content="width=device-width initial-scale=1.0" />
        <meta name="application-name" content="Next.js" />
        <meta name="keywords" content="Next.js,React,JavaScript" />
        <meta property="og:image" content="https://media.hahalolo.com/2023/04/21/09/04/b229a2e095cea60f416bcc8852de1af4-1682067856_1080xauto_high.jpg.webp" />
        <link rel="icon" href="https://test-html.hahalolo.com/cdn/logo/hahalolo/favicon.ico" type="image/x-icon" sizes="any" />
      </head>
      <body>
        <ThemeTest>
          {children}
        </ThemeTest>
      </body>
    </html>
  )
}

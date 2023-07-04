import ThemeTest from "./theme/ThemeTest"

export const metadata = {
  title: 'Sign up | Hahalolo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeTest>
          {children}
        </ThemeTest>
      </body>
    </html>
  )
}

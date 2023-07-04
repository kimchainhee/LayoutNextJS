'use client'
// import './globals.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#24a8d8', // Màu primary
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif', // Font family
  },
});

// export const metadata = {
//   title: 'Sign up | Hahalolo',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

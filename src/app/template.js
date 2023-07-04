'use client'
import { ThemeProvider, createTheme, } from '@mui/material'

export default function Template({ children }) {
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

  return (
    <ThemeProvider theme={theme}>
      <>{children}</>
    </ThemeProvider>
  )
}
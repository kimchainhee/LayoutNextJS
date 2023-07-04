'use client'
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

export default function ThemeTest({ children }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}
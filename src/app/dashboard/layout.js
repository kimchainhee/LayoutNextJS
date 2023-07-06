import AppbarDemo from "../Atomic/organisms/AppbarDemo"

export const metadata = {
  title: 'Dashboard | Hahalolo',
}

export default function RootLayout({ children }) {
  return (
    <AppbarDemo>{children}</AppbarDemo>
  )
}
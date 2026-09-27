import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import { Settings } from '@/components/common/Settings'
import { ThemeProvider } from '@/provider/themesProvider'
import Tawk from '@/components/common/Tawk'
import GithubStar from '@/components/common/GithubStar'

export const metadata: Metadata = {
  title: 'Andika | Portfolio',
  description: 'Andika | Portfolio',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="mb-10 p-5 md:p-8">{children}</main>
          {/* <Footer /> */}
          <Settings />
          <GithubStar />
          {/* <Tawk /> */}
        </ThemeProvider>
      </body>
    </html>
  )
}

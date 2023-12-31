import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './Navbar'
import { SessionProvider } from 'next-auth/react'
import AuthProvider from './auth/Provider'
import GoogleAnalyticsScript from './GoogleAnalyticsScript'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  openGraph: {
    title: '...',
    description: '...'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="winter">
      <GoogleAnalyticsScript />
      <body className={inter.className}>
        <AuthProvider>
          <Navbar></Navbar>
          <main className='p-5'>
              {children}
            </main>
        </AuthProvider>
      </body>
    </html>
  )
}

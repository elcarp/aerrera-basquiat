import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

const pxGrotesk = localFont({
  src: './fonts/PxGrotesk-Regular.otf',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Alexandre Errera - Basquiat Exhibition',
  description: 'Basquiat Exhibition Information March 24 - May 5, 2025',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${pxGrotesk.className}  antialiased`}>
        {children}
      </body>
    </html>
  )
}

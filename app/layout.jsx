import { Source_Sans_3 } from 'next/font/google'
import './globals.css'

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-source-sans',
  display: 'swap',
})

export const metadata = {
  title: 'Food Blog',
  description: 'Discover the best food and drinks',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sourceSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}


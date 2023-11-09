import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'dynamic_send_input_resend_react-hook-forms',
  description: 'A way to get dynamic input fields in next.js web-app, This is for solutions that uses node.js runtime, this does not work on Edge Runtime',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

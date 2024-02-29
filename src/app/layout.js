import { Inter } from 'next/font/google'
import './globals.css'
import Notify from './components/Notify'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'nanoData',
  description: 'Aplicação para upload e download de XMLs'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="https://nanodata.com.br/wp-content/uploads/2020/02/nanodata-76px.png"
        />
      </head>
      <body className={inter.className}>
        <Notify />
        {children}
      </body>
    </html>
  )
}

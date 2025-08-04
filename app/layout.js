import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/component/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The Magic of Mom | Home-Style Tiffin Service',
  description:
    'Experience the warmth of home with The Magic of Mom — a subscription-based tiffin service offering fresh, hygienic, and customizable meals for students, professionals, and seniors. Delivered with care, just like Mom makes.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main className='lg:max-w-[80rem] mx-auto'>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  )
}

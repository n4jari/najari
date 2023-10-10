import { AppProvider } from '@/context/AppContext'
import './globals.css'
import { Baloo_Da_2 } from 'next/font/google'

const myFont = Baloo_Da_2({
  subsets: ['latin'],
})

export const metadata = {
  title: 'AmirReza Najari | CV Resume',
  description: 'A front-end site programmer and react developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  )
}


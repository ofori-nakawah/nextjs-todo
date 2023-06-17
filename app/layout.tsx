import './globals.css'
import { Sen } from 'next/font/google'

const inter = Sen({
  subsets: ['latin'],
  weight: ["400", "800"]
})

export const metadata = {
  title: 'todo',
  description: 'todo app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

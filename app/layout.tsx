import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PurpleRain — Login',
  description: 'Sign in to PurpleRain TechSafe',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh antialiased">
        {children}
      </body>
    </html>
  )
}


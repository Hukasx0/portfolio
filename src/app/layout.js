import { Inter } from 'next/font/google'
import './globals.css'

import { Toaster } from "@/components/ui/toaster"

import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hubert Kasperek\'s portfolio website',
  description: 'Hubert \'Hukasx0\' Kasperek\'s portfolio website',
  keywords: ["portfolio", "Hubert Kasperek", "projects", "projects list", "skills", "contact", "Hukasx0", "fullstack developer", "backend developer", "frontend developer"]
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
          >
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}

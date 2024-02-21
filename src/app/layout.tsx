import { Navbar } from "@/components"
import { Footer } from "@/components"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: 'Pugtatoes - The Official Pugtatoes Store',
    template: '%s - Pugtatoes',
  },
  description: 'Pugtatoes - Unique and cute pug art for cool people.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

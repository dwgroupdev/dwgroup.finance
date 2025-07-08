import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "DWGroup - Investment Solutions",
  description:
    "DWGroup Joint Stock Company Limited - Your trusted partner for comprehensive investment solutions and wealth management services in Hong Kong and beyond.",
  generator: "DWGroup",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen w-full overflow-x-hidden">{children}</body>
    </html>
  )
}

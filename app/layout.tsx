import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "DW Group - Investment Solutions",
  description:
    "DW Group Joint Stock Company Limited - Your trusted partner for comprehensive investment solutions and wealth management services in Hong Kong and beyond.",
  generator: "DW Group",
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

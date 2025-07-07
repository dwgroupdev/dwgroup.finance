import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  const footerLinks = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#team" },
      { name: "Careers", href: "#careers" },
      { name: "News & Updates", href: "#news" },
    ],
    services: [
      { name: "Portfolio Management", href: "#services" },
      { name: "Investment Advisory", href: "#services" },
      { name: "Real Estate Investment", href: "#services" },
      { name: "Private Banking", href: "#services" },
    ],
    resources: [
      { name: "Market Research", href: "#research" },
      { name: "Investment Guides", href: "#guides" },
      { name: "Financial Calculator", href: "#calculator" },
      { name: "Client Portal", href: "#portal" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Data Deletion", href: "/data-deletion" },
      { name: "Risk Disclosure", href: "#risk" },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ]

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <Image src="/logo.png" alt="DWGroup Logo" width={60} height={60} className="h-12 w-12" />
          </div>

          <div>
            <h3 className="font-bold text-xl mb-2">DWGroup Investment Joint Stock Company Limited</h3>
            <div className="space-y-1 text-gray-400">
              <p>Unit 1411, 14/Floor, Cosco Tower</p>
              <p>183 Queen's Road Central, Sheung Wan, Hong Kong</p>
              <p>Phone: +852 5801 1555</p>
            </div>
          </div>

          <div className="flex justify-center flex-wrap gap-4 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/data-deletion" className="text-gray-400 hover:text-white transition-colors">
              Data Deletion
            </Link>
            <Link href="#risk" className="text-gray-400 hover:text-white transition-colors">
              Risk Disclosure
            </Link>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <p className="text-sm text-gray-400">
              © 2025 DWGroup Investment Joint Stock Company Limited. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Investment involves risks. Past performance is not indicative of future results.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

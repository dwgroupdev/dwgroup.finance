"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Menu, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ContactModal from "./contact-modal"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ]

  const handleContactClick = () => {
    setIsContactModalOpen(true)
    setIsOpen(false) // Close mobile menu if open
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-3">
            <Image src="/logo.png" alt="DWGroup Logo" width={40} height={40} className="h-10 w-10" />
            <span className="font-bold text-xl text-gray-900">DWGroup</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-[#572c7c] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="h-4 w-4" />
              <span>+852 5801 1555</span>
            </div>
            <button onClick={handleContactClick} className="btn-gradient px-6 py-2 text-sm font-medium">
              Contact Us
            </button>
          </div>

          {/* Mobile Navigation */}
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild className="md:hidden">
              <button className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                <Menu className="h-6 w-6" />
              </button>
            </DialogTrigger>
            <DialogContent side="right" className="sm:max-w-sm">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium text-gray-600 hover:text-[#572c7c] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t">
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
                    <Phone className="h-4 w-4" />
                    <span>+852 5801 1555</span>
                  </div>
                  <button onClick={handleContactClick} className="btn-gradient w-full px-6 py-2 text-sm font-medium">
                    Contact Us
                  </button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </header>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} title="Contact DWGroup" />
    </>
  )
}

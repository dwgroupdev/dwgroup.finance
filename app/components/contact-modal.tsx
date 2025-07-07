"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin } from "lucide-react"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
}

export default function ContactModal({ isOpen, onClose, title = "Contact Us" }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // You can add your form submission logic here
    alert("Thank you for your inquiry! We will contact you soon.")
    onClose()
    setFormData({ name: "", email: "", phone: "", company: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 mb-2">{title}</DialogTitle>
          <p className="text-gray-600">
            Ready to start your investment journey? Fill out the form below and our team will contact you within 24
            hours.
          </p>
        </DialogHeader>

        <div className="grid gap-6 py-4">
          {/* Contact Information */}
          <div className="grid gap-4 p-4 bg-gradient-to-r from-[#572c7c]/5 to-[#a034fa]/5 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Get in Touch</h3>
            <div className="grid gap-3 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#572c7c]" />
                <span>+852 5801 1555</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#572c7c]" />
                <span>info@dwgroup.finance</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-[#572c7c]" />
                <span>Unit 1411, 14/Floor, Cosco Tower, 183 Queen's Road Central, Sheung Wan, Hong Kong</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="border-gray-300 focus:border-[#572c7c] focus:ring-[#572c7c]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  className="border-gray-300 focus:border-[#572c7c] focus:ring-[#572c7c]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="border-gray-300 focus:border-[#572c7c] focus:ring-[#572c7c]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Enter your company name"
                  className="border-gray-300 focus:border-[#572c7c] focus:ring-[#572c7c]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message *</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us about your investment goals and how we can help you..."
                rows={4}
                className="border-gray-300 focus:border-[#572c7c] focus:ring-[#572c7c]"
              />
            </div>

            <div className="flex gap-3 pt-4">
              <button type="submit" className="btn-gradient flex-1 px-6 py-3 text-sm font-medium">
                Send Message
              </button>
              <button type="button" onClick={onClose} className="btn-gradient-outline px-6 py-3 text-sm font-medium">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}

"use client"

import { useState } from "react"
import { ArrowRight, Smartphone } from "lucide-react"
import Image from "next/image"
import ContactModal from "./contact-modal"

export default function Hero() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [modalTitle, setModalTitle] = useState("")

  const handleGetStarted = () => {
    setModalTitle("Get Started with DWGroup")
    setIsContactModalOpen(true)
  }

  const handleLearnMore = () => {
    setModalTitle("Learn More About Our Services")
    setIsContactModalOpen(true)
  }

  const handleDownloadAndroid = () => {
    const androidUrl = process.env.NEXT_PUBLIC_ANDROID_APP_URL || "#"
    if (androidUrl !== "#") {
      window.open(androidUrl, "_blank")
    } else {
      alert("DWG Finance Android app will be available soon!")
    }
  }

  const handleDownloadIOS = () => {
    const iosUrl = process.env.NEXT_PUBLIC_IOS_APP_URL || "#"
    if (iosUrl !== "#") {
      window.open(iosUrl, "_blank")
    } else {
      alert("DWG Finance iOS app will be available soon!")
    }
  }

  return (
    <>
      <section id="home" className="py-20 md:py-32 bg-gradient-to-br from-purple-50 to-purple-100">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-8">
            <div className="flex justify-center mb-8">
              <Image
                src="/logo.png"
                alt="DWGroup Logo"
                width={120}
                height={120}
                className="h-24 w-24 md:h-32 md:w-32"
              />
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-gray-900">DWGroup</h1>
              <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-[#572c7c] via-[#572c7c] to-[#a034fa] bg-clip-text text-transparent">
                Joint Stock Company Limited
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your trusted partner for comprehensive investment solutions and wealth management services in Hong Kong
                and beyond.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleGetStarted}
                className="btn-gradient text-lg px-8 py-3 inline-flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button onClick={handleLearnMore} className="btn-gradient-outline text-lg px-8 py-3">
                Learn More
              </button>
            </div>

            {/* App Download Section */}
            <div className="mt-12 pt-8 border-t border-purple-200">
              <div className="space-y-6">
                <div className="flex justify-center">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Smartphone className="h-5 w-5 text-[#572c7c]" />
                    <span className="font-semibold">Download DWG Finance App</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  {/* Android Download Button */}
                  <button onClick={handleDownloadAndroid} className="hover:opacity-80 transition-opacity">
                    <Image
                      src="/android-download.webp"
                      alt="Get it on Google Play"
                      width={200}
                      height={60}
                      className="h-[60px] w-auto"
                    />
                  </button>

                  {/* iOS Download Button */}
                  <button onClick={handleDownloadIOS} className="hover:opacity-80 transition-opacity">
                    <Image
                      src="/ios-download.webp"
                      alt="Download on the App Store"
                      width={200}
                      height={60}
                      className="h-[60px] w-auto"
                    />
                  </button>
                </div>

                <p className="text-sm text-gray-500 max-w-md mx-auto">
                  Access your investment portfolio, track market trends, and manage your finances on the go with DWG
                  Finance mobile app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} title={modalTitle} />
    </>
  )
}

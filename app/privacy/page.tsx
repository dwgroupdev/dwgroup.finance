import Header from "../components/header"
import Footer from "../components/footer"
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen w-full bg-white overflow-x-hidden">
      <Header />
      <main className="w-full">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center text-[#572c7c] hover:text-[#a034fa] transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <div className="bg-gradient-to-r from-[#572c7c]/5 to-[#a034fa]/5 rounded-lg p-6">
              <div className="grid gap-2 text-sm text-gray-600">
                <p>
                  <strong>Effective Date:</strong> June 23, 2025
                </p>
                <p>
                  <strong>Application:</strong> DWG Finance
                </p>
                <p>
                  <strong>Operator:</strong> DWGroup Investment Joint Stock Company Limited
                </p>
                <p>
                  <strong>Contact Email:</strong> contact@dwgroup.finance
                </p>
                <p>
                  <strong>Registered Address:</strong> Unit 1411, 14/Floor, Cosco Tower, 183 Queen's Road Central,
                  Sheung Wan, Hong Kong
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-[#572c7c] to-[#a034fa] bg-clip-text text-transparent">
                1. Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Welcome to DWG Finance. We deeply value the trust you place in us by choosing our application as your
                companion on your financial journey. At DWGroup Investment Joint Stock Company Limited ("we," "our," or
                "us"), safeguarding your personal data and respecting your privacy is a responsibility we uphold with
                the utmost sincerity and dedication.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This Privacy Policy transparently outlines how we collect, use, disclose, and protect your personal
                information when you engage with the DWG Finance application. By accessing or using our services, you
                signify your consent to the practices described herein, designed to ensure your data is handled with
                care, integrity, and in full compliance with applicable laws and regulations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-[#572c7c] to-[#a034fa] bg-clip-text text-transparent">
                2. Information We Collect
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In our unwavering commitment to delivering a seamless and secure user experience, we collect certain
                information necessary to facilitate your interaction with our application:
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">a. Personal Data</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                When you create an account or utilize our services, we may collect personally identifiable information
                including but not limited to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Your full legal name</li>
                <li>Contact details such as email address and phone number</li>
                <li>A securely encrypted password to protect your account</li>
                <li>Profile photograph or avatar, should you choose to upload one</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">b. NFC Authentication Data</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                To enhance convenience and security, DWG Finance offers login via NFC technology. We collect only the
                unique identifier (UUID) of your NFC card, ensuring no biometric or sensitive personal data is extracted
                or stored during this process.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">c. Device and Usage Information</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                To optimize performance and provide continuous improvements, we collect technical details about your
                device and application usage patterns, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Device type, operating system, and version</li>
                <li>Language preferences and regional settings</li>
                <li>Internet Protocol (IP) address</li>
                <li>Diagnostic logs and error reports to help maintain app stability</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-[#572c7c] to-[#a034fa] bg-clip-text text-transparent">
                3. Purpose and Use of Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Your data is entrusted to us solely for the purpose of:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Enabling secure account registration and authentication, including NFC-based login</li>
                <li>Facilitating smooth and uninterrupted access to our services</li>
                <li>Communicating essential updates and notifications regarding your account</li>
                <li>Enhancing the application's functionality, user experience, and security infrastructure</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-[#572c7c] to-[#a034fa] bg-clip-text text-transparent">
                4. Information Sharing and Disclosure
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                At DWG Finance, your privacy is paramount. We categorically do not sell, trade, or rent your personal
                information. Disclosure of your data may occur only under the following exceptional circumstances:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>
                  To our trusted service providers and partners who assist in the operation and maintenance of our
                  application, all bound by strict confidentiality agreements
                </li>
                <li>When required by law, regulation, or valid legal process</li>
                <li>With your explicit prior consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-[#572c7c] to-[#a034fa] bg-clip-text text-transparent">
                5. Data Security and Protection
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Protecting your information is a core priority. We employ industry-leading security measures including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Encryption of data during transmission and storage</li>
                <li>Robust authentication protocols to prevent unauthorized access</li>
                <li>Continuous monitoring and regular security assessments</li>
                <li>Restricted access to personal data on a need-to-know basis within our organization</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-[#572c7c] to-[#a034fa] bg-clip-text text-transparent">
                6. Your Rights and Control
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                We empower you with the following rights concerning your personal information:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>The right to access and review your data held by us</li>
                <li>The ability to update or correct inaccurate or incomplete information</li>
                <li>The option to request deletion of your account and associated personal data</li>
                <li>
                  The choice to withdraw your consent to data processing, recognizing that certain app features may
                  become limited or unavailable as a result
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                To exercise these rights, you may use the settings within the app or contact our Data Protection Officer
                directly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-[#572c7c] to-[#a034fa] bg-clip-text text-transparent">
                7. Data Retention
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We retain your personal data only as long as necessary to provide our services or to comply with legal
                obligations. Upon account termination or your request for deletion, we will promptly delete or
                irreversibly anonymize your information in accordance with applicable data protection laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-[#572c7c] to-[#a034fa] bg-clip-text text-transparent">
                8. Children's Privacy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                DWG Finance is intended exclusively for individuals aged 18 and above. We do not knowingly collect or
                solicit personal information from minors. If you believe we have inadvertently gathered such data,
                please contact us immediately for prompt removal.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-[#572c7c] to-[#a034fa] bg-clip-text text-transparent">
                9. Updates to This Privacy Policy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                As we evolve, so too will our commitment to your privacy. We reserve the right to update this Privacy
                Policy to reflect changes in our practices or legal requirements. All material changes will be
                communicated through the app or via email. Your continued use of DWG Finance following such updates
                constitutes acceptance of the revised terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-[#572c7c] to-[#a034fa] bg-clip-text text-transparent">
                10. Contact Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Your privacy concerns are important to us. Should you have any questions, requests, or concerns
                regarding this Privacy Policy or how your data is handled, please reach out to:
              </p>

              <div className="bg-gradient-to-r from-[#572c7c]/5 to-[#a034fa]/5 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">DWGroup Investment Joint Stock Company Limited</h3>
                <div className="grid gap-3">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-[#572c7c]" />
                    <span className="text-gray-700">contact@dwgroup.finance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-[#572c7c]" />
                    <span className="text-gray-700">+852 5801 1555</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-[#572c7c] mt-1" />
                    <div className="text-gray-700">
                      <p>Unit 1411, 14/Floor, Cosco Tower,</p>
                      <p>183 Queen's Road Central, Sheung Wan, Hong Kong</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="bg-gradient-to-r from-[#572c7c] to-[#a034fa] rounded-lg p-6 text-white text-center">
              <p className="text-lg font-medium">
                Thank you for trusting DWG Finance as your partner. We remain dedicated to protecting your privacy while
                providing you with a reliable and secure financial management experience.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

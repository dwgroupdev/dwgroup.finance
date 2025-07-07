import Header from "../components/header"
import Footer from "../components/footer"
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function TermsOfServicePage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <div className="bg-gradient-to-r from-[#572c7c]/5 to-[#a034fa]/5 rounded-lg p-6">
              <div className="grid gap-2 text-sm text-gray-600">
                <p>
                  <strong>Effective Date:</strong> June 23, 2025
                </p>
                <p>
                  <strong>Application:</strong> DW Finance
                </p>
                <p>
                  <strong>Service Provider:</strong> DWGroup Investment Joint Stock Company Limited
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
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By downloading, installing, accessing, or using the DW Finance mobile application ("App"), you agree to
                be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the App.
                These Terms constitute a legally binding agreement between you and DWGroup Investment Joint Stock
                Company Limited ("Company," "we," "us," or "our").
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-[#572c7c] to-[#a034fa] bg-clip-text text-transparent">
                2. License Grant and Restrictions
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable,
                revocable license to use the App for personal, non-commercial purposes.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">You may not:</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Copy, modify, distribute, sell, or lease any part of the App</li>
                <li>Reverse engineer, decompile, or attempt to extract the source code</li>
                <li>Use the App for any unlawful purpose or in violation of applicable laws</li>
                <li>Interfere with or disrupt the App's functionality or security features</li>
                <li>Use automated systems to access the App without our written permission</li>
                <li>Create derivative works based on the App or its content</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-[#572c7c] to-[#a034fa] bg-clip-text text-transparent">
                3. User Accounts and Security
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                To use certain features of the App, you must create an account. You are responsible for:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Providing accurate and complete information during registration</li>
                <li>Maintaining the security of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use of your account</li>
                <li>Keeping your contact information up to date</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to suspend or terminate accounts that violate these Terms or engage in fraudulent
                activity.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-[#572c7c] to-[#a034fa] bg-clip-text text-transparent">
                4. Financial Services Disclaimer
              </h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <p className="text-yellow-800 font-medium">
                  <strong>Important:</strong> This App provides financial information and tools for educational and
                  informational purposes only.
                </p>
              </div>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>
                  The App does not provide investment advice, financial planning, or recommendations to buy or sell
                  securities
                </li>
                <li>All investment decisions are made at your own risk and discretion</li>
                <li>Past performance does not guarantee future results</li>
                <li>You should consult with qualified financial advisors before making investment decisions</li>
                <li>We are not liable for any financial losses resulting from your use of the App</li>
                <li>Market data and information may be delayed or inaccurate</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-[#572c7c] to-[#a034fa] bg-clip-text text-transparent">
                5. Privacy and Data Protection
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your privacy is important to us. Our collection and use of personal information is governed by our{" "}
                <Link href="/privacy" className="text-[#572c7c] hover:text-[#a034fa] underline">
                  Privacy Policy
                </Link>
                , which is incorporated into these Terms by reference.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By using the App, you consent to the collection, use, and sharing of your information as described in
                our Privacy Policy and these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-[#572c7c] to-[#a034fa] bg-clip-text text-transparent">
                6. User Conduct
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                You agree to use the App in a responsible manner and comply with all applicable laws. You must not:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Use the App for any illegal or unauthorized purpose</li>
                <li>Violate any laws in your jurisdiction</li>
                <li>Transmit any harmful, threatening, or offensive content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Impersonate any person or entity</li>
                <li>Collect or harvest any personally identifiable information from other users</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-[#572c7c] to-[#a034fa] bg-clip-text text-transparent">
                7. Intellectual Property Rights
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The App and its original content, features, and functionality are owned by the Company and are protected
                by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may not use our trademarks, logos, or other proprietary information without our express written
                consent.
              </p>
              <p className="text-gray-700 leading-relaxed">
                All rights not expressly granted to you in these Terms are reserved by the Company.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-[#572c7c] to-[#a034fa] bg-clip-text text-transparent">
                8. Disclaimer of Warranties
              </h2>
              <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mb-4">
                <p className="text-gray-800 font-medium">
                  <strong>Important:</strong> The App is provided "as is" without warranties of any kind.
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT
                NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
                NON-INFRINGEMENT.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We do not warrant that the App will be uninterrupted, error-free, or free of viruses or other harmful
                components.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-[#572c7c] to-[#a034fa] bg-clip-text text-transparent">
                9. Limitation of Liability
              </h2>
              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                <p className="text-red-800 font-medium">
                  <strong>Important Limitation:</strong> Please read this section carefully as it limits our liability.
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE COMPANY SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
                SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE,
                GOODWILL, OR OTHER INTANGIBLE LOSSES.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our total liability to you for all claims arising from or relating to the App shall not exceed HK$1,000
                or the equivalent in your local currency.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-[#572c7c] to-[#a034fa] bg-clip-text text-transparent">
                10. Termination
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may terminate or suspend your access to the App immediately, without prior notice, for any reason,
                including breach of these Terms.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may terminate your account at any time by contacting us directly or following the account deletion
                process outlined in our{" "}
                <Link href="/data-deletion" className="text-[#572c7c] hover:text-[#a034fa] underline">
                  Data Deletion Policy
                </Link>
                .
              </p>
              <p className="text-gray-700 leading-relaxed">
                Upon termination, your right to use the App will cease immediately, and we may delete your account and
                data in accordance with our data retention policies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-[#572c7c] to-[#a034fa] bg-clip-text text-transparent">
                11. Governing Law and Dispute Resolution
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms shall be governed by and construed in accordance with the laws of Hong Kong, without regard
                to conflict of law principles.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Any disputes arising from these Terms or your use of the App shall be resolved through binding
                arbitration in Hong Kong, except where prohibited by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-[#572c7c] to-[#a034fa] bg-clip-text text-transparent">
                12. Changes to Terms
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right to modify these Terms at any time. We will notify you of any material changes by
                posting the new Terms in the App and updating the "Effective Date" above.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Your continued use of the App after any such changes constitutes your acceptance of the new Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-[#572c7c] to-[#a034fa] bg-clip-text text-transparent">
                13. Contact Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you have any questions about these Terms of Service, please contact us:
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
                By using DW Finance, you acknowledge that you have read, understood, and agree to be bound by these
                Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

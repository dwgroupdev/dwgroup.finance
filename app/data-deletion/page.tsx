import Header from "../components/header"
import Footer from "../components/footer"
import { ArrowLeft, Mail, Phone, MapPin, Trash2, Shield, CheckCircle, Clock } from "lucide-react"
import Link from "next/link"

export default function DataDeletionPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Data Deletion Policy</h1>
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
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-[#572c7c] to-[#a034fa] bg-clip-text text-transparent">
                1. Your Right to Data Deletion
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                At DW Finance, we respect your privacy and your right to control your personal data. You have the right
                to request the deletion of your personal information from our systems at any time. This policy outlines
                our data deletion process and what happens to your information when you request deletion.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <p className="text-blue-800">
                  <strong>Important:</strong> Data deletion is permanent and cannot be undone. Please ensure you have
                  backed up any important information before proceeding with a deletion request.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-[#572c7c] to-[#a034fa] bg-clip-text text-transparent">
                2. How to Request Data Deletion
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To request deletion of your personal data, please contact us using any of the following methods:
              </p>

              <div className="grid gap-4 mb-6">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-[#572c7c]" />
                    Email Request
                  </h4>
                  <p className="text-gray-700 text-sm mb-2">
                    Send an email to{" "}
                    <a href="mailto:contact@dwgroup.finance" className="text-[#572c7c] hover:text-[#a034fa] underline">
                      contact@dwgroup.finance
                    </a>{" "}
                    with the subject line "Data Deletion Request"
                  </p>
                  <p className="text-gray-600 text-sm">
                    Include your full name, email address, and phone number associated with your account for
                    verification.
                  </p>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-[#572c7c]" />
                    Phone Request
                  </h4>
                  <p className="text-gray-700 text-sm mb-2">
                    Call us at{" "}
                    <a href="tel:+85258011555" className="text-[#572c7c] hover:text-[#a034fa] underline">
                      +852 5801 1555
                    </a>{" "}
                    during business hours
                  </p>
                  <p className="text-gray-600 text-sm">
                    Monday-Friday, 9:00 AM - 6:00 PM (Hong Kong Time). You will need to verify your identity before we
                    can process your request.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-[#572c7c] to-[#a034fa] bg-clip-text text-transparent">
                3. Data Deletion Process
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Once we receive your deletion request, we follow a structured process to ensure secure and complete data
                removal:
              </p>

              <div className="grid gap-4 mb-6">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="bg-[#572c7c] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Request Verification</h4>
                    <p className="text-gray-600 text-sm">
                      We verify your identity to ensure the request is legitimate and protect against unauthorized
                      deletions. This process typically takes 1-2 business days.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="bg-[#572c7c] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Data Review</h4>
                    <p className="text-gray-600 text-sm">
                      We review your account to identify all personal data associated with your profile, including data
                      stored in our primary systems and backup systems.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="bg-[#572c7c] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Secure Deletion</h4>
                    <p className="text-gray-600 text-sm">
                      We permanently delete your personal data from our active systems, databases, and backup systems
                      using industry-standard secure deletion methods.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Confirmation</h4>
                    <p className="text-gray-600 text-sm">
                      We send you a confirmation email once the deletion process is complete, typically within 7-14
                      business days from the initial request.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-[#572c7c] to-[#a034fa] bg-clip-text text-transparent">
                4. What Data Will Be Deleted
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Upon confirmation of your deletion request, we will permanently remove the following categories of data:
              </p>

              <div className="grid gap-4 mb-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Personal Information
                  </h4>
                  <ul className="list-disc pl-6 text-red-700 text-sm">
                    <li>Name, email address, and phone number</li>
                    <li>Profile photos and personal preferences</li>
                    <li>Account credentials and authentication data</li>
                    <li>NFC card identifiers and login tokens</li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Financial and Usage Data
                  </h4>
                  <ul className="list-disc pl-6 text-red-700 text-sm">
                    <li>Financial data and transaction history</li>
                    <li>Investment preferences and portfolio information</li>
                    <li>App usage patterns and analytics data</li>
                    <li>Device information and technical logs</li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Communication Records
                  </h4>
                  <ul className="list-disc pl-6 text-red-700 text-sm">
                    <li>Customer support conversations</li>
                    <li>Email communications and notifications</li>
                    <li>Feedback and survey responses</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-[#572c7c] to-[#a034fa] bg-clip-text text-transparent">
                5. Data Retention for Legal Compliance
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                While we will delete most of your personal data, certain information may be retained for legal and
                regulatory compliance purposes:
              </p>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                  <Shield className="h-4 w-4 mr-2" />
                  Legal Compliance Data
                </h4>
                <ul className="list-disc pl-6 text-yellow-700 text-sm">
                  <li>Financial transaction records (required by financial regulations)</li>
                  <li>Tax-related information (as required by tax authorities)</li>
                  <li>Anti-money laundering (AML) and Know Your Customer (KYC) records</li>
                  <li>Records required for ongoing legal proceedings or investigations</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                This retained data will be anonymized where possible and deleted once the legal retention period
                expires, typically within 7 years as required by Hong Kong financial regulations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-[#572c7c] to-[#a034fa] bg-clip-text text-transparent">
                6. Timeline for Data Deletion
              </h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  Standard Processing Time
                </h4>
                <ul className="list-disc pl-6 text-blue-700 text-sm">
                  <li>
                    <strong>Acknowledgment:</strong> Within 24 hours of receiving your request
                  </li>
                  <li>
                    <strong>Identity Verification:</strong> 1-2 business days
                  </li>
                  <li>
                    <strong>Data Deletion:</strong> 7-14 business days from verification
                  </li>
                  <li>
                    <strong>Confirmation:</strong> Email confirmation sent upon completion
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-[#572c7c] to-[#a034fa] bg-clip-text text-transparent">
                7. Contact Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                For questions about data deletion or to submit a deletion request, contact us:
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
                Your privacy and data rights are important to us. We are committed to providing you with full control
                over your personal information and ensuring secure data deletion when requested.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

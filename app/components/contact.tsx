import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail } from "lucide-react"

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["Unit 1411, 14/Floor, Cosco Tower", "183 Queen's Road Central", "Sheung Wan, Hong Kong"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+852 5801 1555"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@dwgroup.finance"],
    },
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your investment goals? Contact our team for a personalized consultation.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#572c7c]/10 via-[#572c7c]/10 to-[#a034fa]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-8 w-8 text-[#572c7c]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">{info.title}</h3>
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-gray-600">
                    {detail}
                  </p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, Award } from "lucide-react"

export default function About() {
  const features = [
    {
      icon: Shield,
      title: "Secure & Regulated",
      description: "Licensed and regulated by Hong Kong financial authorities with the highest security standards.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our experienced professionals provide personalized investment strategies and guidance.",
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "15+ years of consistent performance and award-winning investment solutions.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            DWGroup Investment is a leading investment firm dedicated to providing comprehensive financial solutions and
            wealth management services to individuals and institutions across Asia-Pacific.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#572c7c]/10 via-[#572c7c]/10 to-[#a034fa]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-[#572c7c]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Star, Clock, Shield } from "lucide-react"

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Star,
      title: "Award-Winning Excellence",
      description: "Recognized by industry leaders for outstanding performance and client service.",
      stats: "50+ Industry Awards",
    },
    {
      icon: CheckCircle,
      title: "Proven Results",
      description: "Consistent outperformance with average annual returns exceeding market benchmarks.",
      stats: "24.8% Average Annual Return",
    },
    {
      icon: Clock,
      title: "15+ Years Experience",
      description: "Deep market knowledge and expertise gained through various market cycles.",
      stats: "Since 2008",
    },
    {
      icon: Shield,
      title: "Regulatory Compliance",
      description: "Fully licensed and regulated by Hong Kong Securities and Futures Commission.",
      stats: "SFC Licensed",
    },
  ]

  return (
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose DWGroup Investment?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence, proven track record, and client-focused approach make us the preferred choice
            for sophisticated investors.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {reasons.map((reason, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <reason.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600 mb-4">{reason.description}</p>
                <div className="text-lg font-bold text-blue-600">{reason.stats}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Investment Journey?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied clients who trust DWGroup Investment with their financial future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

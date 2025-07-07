import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, TrendingUp, Building, Briefcase } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: PieChart,
      title: "Portfolio Management",
      description: "Customized investment portfolios tailored to your risk tolerance and financial objectives.",
    },
    {
      icon: TrendingUp,
      title: "Investment Advisory",
      description: "Expert guidance on market trends, investment opportunities, and strategic financial planning.",
    },
    {
      icon: Building,
      title: "Real Estate Investment",
      description: "Access to premium real estate opportunities in Hong Kong and international markets.",
    },
    {
      icon: Briefcase,
      title: "Corporate Finance",
      description: "Comprehensive financial solutions for businesses including M&A, IPO, and capital raising.",
    },
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-[#572c7c]/5 to-[#a034fa]/5">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of investment and financial services designed to meet your diverse needs.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-[#572c7c]/10 via-[#572c7c]/10 to-[#a034fa]/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-[#572c7c]" />
                </div>
                <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

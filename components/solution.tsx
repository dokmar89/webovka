import { Shield, UserCheck, Palette, CreditCard, Lock, Code } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const features = [
  {
    icon: Shield,
    title: "Multi-Method Verification",
    description:
      "BankID, MojeID, OCR, and AI Face Scan options to suit your needs.",
  },
  {
    icon: UserCheck,
    title: "'Remember Me' & Secondary Authentication",
    description:
      "Streamlined verification for returning customers with secure options.",
  },
  {
    icon: Palette,
    title: "White-Label Customization",
    description:
      "Fully customizable interface to match your brand's look and feel.",
  },
  {
    icon: CreditCard,
    title: "Credit-Based System",
    description:
      "Simple pay-as-you-go pricing with transparent usage tracking.",
  },
  {
    icon: Lock,
    title: "Compliance & Security",
    description:
      "GDPR-compliant with comprehensive audit logs and security measures.",
  },
  {
    icon: Code,
    title: "Developer-Friendly Integration",
    description:
      "Easy integration with APIs, SDKs, and ready-made plugins.",
  },
]

export function Solution() {
  return (
    <section className="bg-[#014653] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            PassProve: Your All-in-One Solution for Secure and Seamless Age
            Verification
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            PassProve empowers you to confidently sell age-restricted goods while
            providing a smooth and trustworthy experience for your customers. Our
            platform combines cutting-edge technology with a focus on compliance,
            customization, and ease of use.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-white/5 border-none text-white hover:bg-white/10 transition-colors"
            >
              <CardHeader>
                <feature.icon className="w-12 h-12 mb-4 text-[#d9b40a]" />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


import { AlertTriangle, ShoppingCart, CreditCard, Shield } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const challenges = [
  {
    icon: AlertTriangle,
    title: "Legal and Financial Risks",
    description:
      "Non-compliance with age verification regulations can result in hefty fines and legal consequences for your business.",
  },
  {
    icon: ShoppingCart,
    title: "Cart Abandonment and Lost Sales",
    description:
      "Complex verification processes can frustrate customers and lead to abandoned purchases.",
  },
  {
    icon: CreditCard,
    title: "Fraud and Chargebacks",
    description:
      "Inadequate age verification can result in fraudulent purchases and costly chargebacks.",
  },
  {
    icon: Shield,
    title: "Reputational Damage",
    description:
      "Failing to properly verify age can damage your brand's reputation and trustworthiness.",
  },
]

export function Challenges() {
  return (
    <section className="bg-[#292927] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
          The High Cost of Inadequate Age Verification
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((challenge, index) => (
            <Card
              key={index}
              className="bg-[#014653]/20 border-none text-white"
            >
              <CardHeader>
                <challenge.icon className="w-12 h-12 mb-4 text-[#d9b40a]" />
                <CardTitle className="text-xl">{challenge.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  {challenge.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


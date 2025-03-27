import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="bg-[#014653] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Get Started with PassProve Today
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          Choose the plan that fits your needs and start verifying with confidence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            size="lg"
            className="bg-[#d9b40a] hover:bg-[#d9b40a]/90 text-black w-full sm:w-auto"
          >
            <Link href="/signup">Sign Up</Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-[#d9b40a] hover:bg-[#d9b40a]/90 text-black w-full sm:w-auto"
          >
            <Link href="/demo">Launch Demo</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="text-[#95c4ca] border-[#95c4ca] hover:bg-[#95c4ca]/10 w-full sm:w-auto"
          >
            <Link href="/contact">Contact Sales</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}


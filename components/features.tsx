"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const features = [
  {
    title: "What is PassProve?",
    content: "PassProve is an adaptive IDE designed to enhance your coding experience with AI integration.",
  },
  {
    title: "Why did you create PassProve and what's the story behind it?",
    content: "We created PassProve to revolutionize the way developers interact with AI, making it more natural and efficient.",
  },
  {
    title: "How is PassProve different from other coding editors?",
    content: "PassProve uniquely combines AI assistance with a flow-state optimized interface, creating a seamless coding experience.",
  },
  {
    title: "Will PassProve work with my existing development setup?",
    content: "Yes, PassProve is designed to integrate seamlessly with your existing development environment and tools.",
  },
  {
    title: "What's next for PassProve and what are you working on?",
    content: "We're constantly improving PassProve with new features and AI capabilities to enhance your development experience.",
  },
]

export function Features() {
  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white mb-8">Frequently asked questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {features.map((feature, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-white hover:text-[#00FFB2]">
                {feature.title}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                {feature.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}


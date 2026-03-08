import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    question: "How much can I really save with automation?",
    answer: "Most businesses see 60-80% cost reductions in automated processes. We provide a detailed ROI analysis during our free consultation, showing exactly where you'll save and how quickly you'll see returns.",
  },
  {
    question: "How long does implementation take?",
    answer: "Simple automations can be live in 1-2 weeks. More complex AI agent systems typically take 4-8 weeks. We'll give you a clear timeline during the proposal phase.",
  },
  {
    question: "Do I need technical knowledge to use the automation?",
    answer: "Not at all. We build intuitive dashboards and provide full training. Our systems are designed for business users, not developers. You'll have full visibility and control without needing to write a single line of code.",
  },
  {
    question: "What if my processes change?",
    answer: "Our automations are built to be flexible. We design modular systems that can be easily updated as your business evolves. Plus, our ongoing support plans include process adjustments.",
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We follow enterprise-grade security practices including end-to-end encryption, SOC 2 compliance, and strict access controls. Your data never leaves your approved systems.",
  },
  {
    question: "What's your pricing model?",
    answer: "We offer project-based pricing tailored to your needs. Every engagement starts with a free consultation where we scope the work and provide transparent pricing. No hidden fees, no surprises.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding py-20 md:py-28 bg-card/40">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">FAQ</h2>
            <p className="text-muted-foreground text-lg">Everything you need to know</p>
          </div>
        </ScrollReveal>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 0.06}>
              <div className="glass-card overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/30 transition-colors"
                >
                  <span className="font-display font-semibold text-sm md:text-base pr-4">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300",
                      openIndex === index && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Discovery Call",
    description: "We analyze your current processes, identify automation opportunities, and calculate potential ROI. This consultation is completely free.",
  },
  {
    number: "2",
    title: "Custom Proposal",
    description: "Receive a detailed automation plan with timeline, costs, and expected outcomes. We explain everything in plain English, no tech jargon.",
  },
  {
    number: "3",
    title: "Build & Test",
    description: "Our team develops your automation with regular check-ins. You'll see progress every week and can request changes anytime.",
  },
  {
    number: "4",
    title: "Launch & Support",
    description: "We deploy your automation, train your team, and provide ongoing support. Your AI agents get smarter over time with continuous optimization.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="section-padding py-20 md:py-28 bg-card/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">How We Work</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Simple, transparent process from idea to implementation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="relative group">
              <div className="glass-card p-6 h-full hover:border-primary/30 transition-all duration-300">
                <div className="font-display text-5xl font-bold gradient-text mb-4">
                  {step.number}
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn-filled text-base py-3.5 px-8">
            Start Your Project
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

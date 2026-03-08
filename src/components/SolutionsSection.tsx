import { Bot, Workflow, Brain, Plug } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const solutions = [
  {
    icon: Bot,
    title: "AI Agent Development",
    description: "Custom AI agents that handle customer support, data processing, lead qualification, and complex business logic autonomously with human-level intelligence.",
    features: ["Natural language processing", "Multi-platform integration", "Self-learning capabilities"],
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "End-to-end process automation connecting your tools, databases, and systems. Eliminate manual data entry and repetitive tasks forever.",
    features: ["API & system integration", "Data synchronization", "Real-time monitoring"],
  },
  {
    icon: Brain,
    title: "Intelligent Automation",
    description: "Decision-making systems powered by AI that analyze data, predict outcomes, and take action automatically based on your business rules.",
    features: ["Predictive analytics", "Smart decision engines", "Anomaly detection"],
  },
  {
    icon: Plug,
    title: "System Integration",
    description: "Seamlessly connect all your business tools, from CRMs to payment processors, creating a unified, automated ecosystem that works in harmony.",
    features: ["1000+ platform integrations", "Custom API development", "Legacy system modernization"],
  },
];

const SolutionsSection = () => {
  return (
    <section id="solutions" className="section-padding py-20 md:py-28">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              AI-Powered Solutions
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We build intelligent systems that eliminate repetitive work and scale your business
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((solution, i) => (
            <ScrollReveal key={solution.title} delay={i * 0.1}>
              <div className="glass-card glow-border p-8 group hover:border-primary/30 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <solution.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{solution.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {solution.description}
                </p>
                <ul className="space-y-2">
                  {solution.features.map((feature) => (
                    <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;

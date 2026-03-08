import { ArrowRight, Headphones, TrendingUp, Database } from "lucide-react";

const caseStudies = [
  {
    icon: Headphones,
    title: "AI Customer Support",
    description: "Automated 85% of customer inquiries with intelligent AI agents, saving $120K annually while improving response times.",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: TrendingUp,
    title: "Sales Automation",
    description: "Automated lead qualification and outreach, generating 300% more qualified leads with zero additional headcount.",
    color: "from-accent/20 to-accent/5",
  },
  {
    icon: Database,
    title: "Data Integration",
    description: "Connected 12 disparate systems into one automated workflow, eliminating 40 hours of manual data entry per week.",
    color: "from-primary/20 to-accent/5",
  },
];

const CaseStudiesSection = () => {
  return (
    <section id="work" className="section-padding py-20 md:py-28">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">Success Stories</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real results from businesses we've transformed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <div key={study.title} className="glass-card overflow-hidden group hover:border-primary/30 transition-all duration-300">
              <div className={`bg-gradient-to-b ${study.color} p-8 flex items-center justify-center`}>
                <study.icon className="w-12 h-12 text-foreground/80" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold mb-2">{study.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{study.description}</p>
                <button className="text-sm text-primary font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Read Case Study <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;

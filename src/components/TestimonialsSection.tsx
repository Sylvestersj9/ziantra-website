import { Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    quote: "Ziantra automated our entire customer onboarding flow. What used to take 3 hours now happens in under 5 minutes — completely hands-free.",
    name: "Sarah Chen",
    role: "COO, TechFlow",
    stars: 5,
  },
  {
    quote: "We were skeptical about AI agents handling client inquiries, but the results speak for themselves. Support costs dropped 70% in the first quarter.",
    name: "Marcus Webb",
    role: "Director of Ops, Meridian",
    stars: 5,
  },
  {
    quote: "The team at Ziantra didn't just build automations — they fundamentally rethought how our sales pipeline works. Revenue is up 40% with the same team.",
    name: "Priya Kapoor",
    role: "VP Sales, NovaBridge",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding py-20 md:py-28 bg-card/40">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Don't just take our word for it
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.12}>
              <div className="glass-card p-8 h-full flex flex-col justify-between hover:border-primary/30 transition-all duration-300">
                <div>
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-foreground/85 italic mb-6">
                    "{t.quote}"
                  </p>
                </div>
                <div>
                  <p className="font-display font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

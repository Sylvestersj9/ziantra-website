import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const clients = [
  "TechFlow",
  "Meridian",
  "Apex Systems",
  "NovaBridge",
  "Catalyst AI",
  "Prism Digital",
  "Vertex Labs",
  "Quantum Edge",
];

const SocialProofSection = () => {
  return (
    <section className="section-padding py-14 border-b border-border overflow-hidden">
      <ScrollReveal>
        <p className="text-center text-sm text-muted-foreground uppercase tracking-widest font-medium mb-10">
          Trusted by forward-thinking companies
        </p>
      </ScrollReveal>

      <div className="relative max-w-7xl mx-auto">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-12 items-center w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {[...clients, ...clients].map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex-shrink-0 px-6 py-3 rounded-lg border border-border/50 bg-card/30"
            >
              <span className="font-display text-lg font-bold text-muted-foreground/60 whitespace-nowrap tracking-tight">
                {name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;

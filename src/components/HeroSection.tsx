import { ArrowRight, Bot } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-44 md:pb-32 section-padding relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-8">
          <Bot className="w-4 h-4" />
          AI AUTOMATION AGENCY
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-6">
          Automate Anything{" "}
          <span className="gradient-text">Scale Everything</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Transform your business with custom AI agents and intelligent automation that work 24/7, reduce costs by 80%, and scale without limits.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="btn-filled text-base py-3.5 px-8">
            Start Automating Today
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#work" className="btn-transparent text-base py-3.5 px-8">
            See Our Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

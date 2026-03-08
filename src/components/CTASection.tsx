import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="section-padding py-20 md:py-28 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/8 rounded-full blur-[120px]" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
          Ready to Automate?
        </h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
          Join forward-thinking businesses that are scaling faster, saving more, and working smarter with AI automation.
        </p>

        <a href="mailto:sylvester@ziantra.co.uk" className="btn-filled text-base py-4 px-10 mb-4 inline-flex">
          Book Your Free Consultation
          <ArrowRight className="w-4 h-4" />
        </a>

        <p className="text-sm text-muted-foreground mt-4">
          No commitment required • 30-minute call • Free ROI analysis
        </p>
      </div>
    </section>
  );
};

export default CTASection;

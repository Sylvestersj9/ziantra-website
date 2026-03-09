import { Hero } from "@/components/ui/animated-hero";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <Hero />
    </div>
  );
};

export default HeroSection;

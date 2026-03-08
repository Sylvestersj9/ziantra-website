import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Bookings = () => {
  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement("script");
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20 section-padding">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Book a <span className="gradient-text">Free Consultation</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Pick a time that works for you. We'll discuss your automation needs and show you how AI can transform your business.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Or email us at{" "}
            <a href="mailto:sylvester@ziantra.co.uk" className="text-primary hover:underline">
              sylvester@ziantra.co.uk
            </a>
          </p>
        </div>

        <div className="max-w-4xl mx-auto rounded-xl overflow-hidden border border-border bg-card">
          <iframe
            src="https://cal.com/sylvesteratziantra?embed=true&theme=dark"
            className="w-full border-0"
            style={{ height: "700px" }}
            title="Book a consultation with Ziantra"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Bookings;

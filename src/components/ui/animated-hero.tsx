import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["smarter", "faster", "more powerful", "intelligent", "scalable"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <section className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 md:py-32 lg:py-40 items-center justify-center flex-col">
          <div>
            <Button variant="secondary" size="sm" className="gap-4">
              <Bot className="w-4 h-4" />
              AI AUTOMATION AGENCY
            </Button>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-display font-bold">
              <span className="text-foreground">Make Your Business</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-bold gradient-text"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              Transform your business with custom AI agents and intelligent
              automation that work 24/7, reduce costs by 80%, and scale without
              limits.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <Button asChild size="lg" className="gap-4" variant="outline">
              <a href="#work">
                Jump on a call <PhoneCall className="w-4 h-4" />
              </a>
            </Button>
            <Button asChild size="lg" className="gap-4">
              <a href="/bookings">
                Start Automating Today <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Hero };

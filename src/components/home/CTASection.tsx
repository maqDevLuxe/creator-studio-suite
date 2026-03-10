import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="container mx-auto"
      >
        <div className="relative rounded-3xl overflow-hidden p-12 md:p-20 text-center" style={{ background: "var(--gradient-card)" }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-primary/20 blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-accent/15 blur-[120px]" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Ready to <span className="gradient-text">Create?</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              Join 50,000+ creators using StudioAI to edit videos and record podcasts faster than ever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-primary-foreground px-8 glow-primary" style={{ background: "var(--gradient-primary)" }}>
                Start Creating Free <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-muted">
                Talk to Sales
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;

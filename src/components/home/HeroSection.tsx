import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroMockup from "@/assets/hero-mockup.jpg";

const Waveform = () => (
  <div className="flex items-end gap-[3px] h-10">
    {Array.from({ length: 20 }).map((_, i) => (
      <div
        key={i}
        className="waveform-bar w-[3px] bg-primary"
        style={{ height: `${Math.random() * 100}%`, animationDelay: `${i * 0.08}s` }}
      />
    ))}
  </div>
);

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
    {/* Background glow */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" />
    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-[120px]" />

    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center max-w-4xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-6"
        >
          <Sparkles className="w-4 h-4" />
          AI-Powered Studio — Now in Beta
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          Edit Videos.{" "}
          <span className="gradient-text">Record Podcasts.</span>
          <br />
          Ship Faster with AI.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
        >
          The all-in-one creator platform that uses AI to auto-cut, caption, clean audio,
          and export to every platform — in minutes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button size="lg" className="text-primary-foreground px-8 glow-primary" style={{ background: "var(--gradient-primary)" }}>
            Start Creating Free <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-muted">
            Watch Demo
          </Button>
        </motion.div>
      </div>

      {/* Hero mockup */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative max-w-5xl mx-auto"
      >
        <div className="absolute -inset-4 rounded-2xl opacity-30 blur-2xl" style={{ background: "var(--gradient-primary)" }} />
        <div className="relative rounded-xl overflow-hidden border border-border/50 glow-primary">
          <img src={heroMockup} alt="StudioAI editing interface" className="w-full" />
        </div>
        {/* Floating waveform */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute -bottom-4 -left-4 glass-card p-3 rounded-xl"
        >
          <Waveform />
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;

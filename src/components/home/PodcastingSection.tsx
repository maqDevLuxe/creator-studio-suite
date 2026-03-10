import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mic, Volume2, Headphones, AudioLines } from "lucide-react";

const audioFeatures = [
  { icon: Volume2, title: "Noise Removal", desc: "AI removes background noise, hum, and echo in real-time." },
  { icon: Mic, title: "Voice Enhancement", desc: "Studio-quality voice processing that makes every host sound professional." },
  { icon: Headphones, title: "Multi-Speaker Detection", desc: "Automatically detects and labels different speakers in your podcast." },
  { icon: AudioLines, title: "Audio Leveling", desc: "Automatic loudness normalization across all tracks and episodes." },
];

const PodcastingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-card/30" ref={ref}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-mono text-accent tracking-wider uppercase">Podcasting</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
              Crystal-Clear <span className="gradient-text">Audio Cleanup</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Professional-grade audio processing powered by AI. Record anywhere, sound like a studio.
            </p>
            <div className="space-y-4">
              {audioFeatures.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                    <f.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{f.title}</h4>
                    <p className="text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Waveform visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 rounded-2xl relative"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse-glow" />
              <span className="text-sm font-mono text-muted-foreground">Recording — 00:14:32</span>
            </div>
            {/* Animated waveform rows */}
            {[1, 2, 3].map((row) => (
              <div key={row} className="flex items-center gap-[2px] h-12 mb-3">
                {Array.from({ length: 60 }).map((_, i) => (
                  <div
                    key={i}
                    className="waveform-bar w-[2px] flex-shrink-0"
                    style={{
                      height: `${20 + Math.random() * 80}%`,
                      background: row === 1 ? "hsl(var(--primary))" : row === 2 ? "hsl(var(--accent))" : "hsl(var(--muted-foreground))",
                      animationDelay: `${i * 0.05}s`,
                      opacity: row === 3 ? 0.4 : 0.8,
                    }}
                  />
                ))}
              </div>
            ))}
            <div className="flex gap-2 mt-4">
              {["Speaker 1", "Speaker 2", "Ambient"].map((label, i) => (
                <span key={label} className={`text-xs px-2 py-1 rounded-md ${i === 0 ? "bg-primary/20 text-primary" : i === 1 ? "bg-accent/20 text-accent" : "bg-muted text-muted-foreground"}`}>
                  {label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PodcastingSection;

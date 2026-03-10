import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Scissors, Captions, Wand2, Layers, Zap, Film } from "lucide-react";

const features = [
  { icon: Scissors, title: "Auto-Cut & Trim", desc: "AI detects silences, filler words, and dead air — removes them instantly." },
  { icon: Captions, title: "Smart Captions", desc: "Generate accurate, stylized captions in 40+ languages with one click." },
  { icon: Wand2, title: "AI B-Roll", desc: "Automatically find and insert relevant B-roll footage from your library." },
  { icon: Layers, title: "Multi-Track Editing", desc: "Manage unlimited video and audio tracks with AI-assisted arrangement." },
  { icon: Zap, title: "Instant Highlights", desc: "AI identifies the best moments and creates short-form clips automatically." },
  { icon: Film, title: "Scene Detection", desc: "Smart scene detection splits your footage into organized, editable segments." },
];

const AIFeatures = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-mono text-primary tracking-wider uppercase">AI Editing</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Edit at the <span className="gradient-text">Speed of Thought</span>
          </h2>
          <p className="text-muted-foreground">
            Powerful AI tools that handle the tedious work, so you can focus on creating.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 hover:border-primary/30 transition-all group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;

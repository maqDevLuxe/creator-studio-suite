import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Gauge, Cpu, Cloud, Timer } from "lucide-react";

const metrics = [
  { icon: Gauge, value: "10x", label: "Faster Rendering", desc: "Compared to traditional editors" },
  { icon: Cpu, value: "GPU", label: "Cloud Processing", desc: "No local hardware needed" },
  { icon: Cloud, value: "4K", label: "Max Resolution", desc: "Export in ultra-high quality" },
  { icon: Timer, value: "<2min", label: "Average Export", desc: "For a 30-minute video" },
];

const RenderingSpeed = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-mono text-primary tracking-wider uppercase">Performance</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Blazing-Fast <span className="gradient-text">Rendering</span>
          </h2>
          <p className="text-muted-foreground">
            Cloud-powered GPU rendering that exports your projects in minutes, not hours.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 text-center group hover:border-primary/30 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center" style={{ background: "var(--gradient-glow)" }}>
                <m.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-1">{m.value}</div>
              <div className="font-semibold text-sm mb-1">{m.label}</div>
              <p className="text-xs text-muted-foreground">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RenderingSpeed;

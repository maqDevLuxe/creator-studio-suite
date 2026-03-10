import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const counters = [
  { value: 2500000, suffix: "+", label: "Hours Exported" },
  { value: 50000, suffix: "+", label: "Active Creators" },
  { value: 120, suffix: "+", label: "Countries" },
  { value: 99.9, suffix: "%", label: "Uptime" },
];

const formatNum = (n: number) => {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
  if (n >= 1000) return (n / 1000).toFixed(0) + "K";
  return n.toString();
};

const AnimatedCounter = ({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span>{formatNum(Math.floor(count))}{suffix}</span>;
};

const CreatorCounters = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {counters.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                <AnimatedCounter target={c.value} suffix={c.suffix} inView={isInView} />
              </div>
              <p className="text-sm text-muted-foreground">{c.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreatorCounters;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Heart, Users } from "lucide-react";

const stats = [
  { icon: Users, value: "15K+", label: "Discord Members" },
  { icon: MessageCircle, value: "2K+", label: "Forum Posts/Week" },
  { icon: Heart, value: "500+", label: "Community Templates" },
];

const CommunitySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto text-center">
        <span className="text-sm font-mono text-accent tracking-wider uppercase">Community</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
          Join the <span className="gradient-text">Creator Community</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-12">
          Connect with thousands of creators sharing templates, tips, and workflows.
        </p>
        <div className="grid sm:grid-cols-3 gap-5 max-w-2xl mx-auto mb-12">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6"
            >
              <s.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold gradient-text mb-1">{s.value}</div>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;

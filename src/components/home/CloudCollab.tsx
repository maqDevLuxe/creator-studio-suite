import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, MessageSquare, Share2, Lock } from "lucide-react";

const features = [
  { icon: Users, title: "Real-Time Co-Editing", desc: "Multiple team members can edit the same project simultaneously." },
  { icon: MessageSquare, title: "Timeline Comments", desc: "Leave timestamped feedback directly on the video timeline." },
  { icon: Share2, title: "Instant Sharing", desc: "Share project links with reviewers — no downloads needed." },
  { icon: Lock, title: "Role Permissions", desc: "Control who can view, comment, or edit each project." },
];

const CloudCollab = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-card/30" ref={ref}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="glass-card p-6 rounded-2xl"
          >
            {/* Fake collaboration UI */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-mono text-muted-foreground">Project: Brand Campaign v3</span>
              <div className="flex -space-x-2">
                {["bg-primary", "bg-accent", "bg-green-500", "bg-blue-500"].map((bg, i) => (
                  <div key={i} className={`w-7 h-7 rounded-full ${bg} border-2 border-card flex items-center justify-center text-[10px] font-bold text-primary-foreground`}>
                    {["A", "J", "M", "K"][i]}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              {["Cut intro — 00:00 to 00:12", "Add transition at 02:34", "Replace B-roll at 04:15"].map((task, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                  <div className={`w-2 h-2 rounded-full ${i === 0 ? "bg-green-400" : i === 1 ? "bg-accent" : "bg-primary"}`} />
                  <span className="text-sm text-foreground">{task}</span>
                  <span className="text-xs text-muted-foreground ml-auto">{["Done", "In progress", "To do"][i]}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 rounded-lg bg-primary/5 border border-primary/10">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-5 h-5 rounded-full bg-accent text-[10px] font-bold flex items-center justify-center text-accent-foreground">J</div>
                <span className="text-xs text-muted-foreground">Jake commented at 02:34</span>
              </div>
              <p className="text-sm text-foreground/80">"Let's try a smoother transition here 🎬"</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-sm font-mono text-primary tracking-wider uppercase">Collaboration</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
              Your Team's <span className="gradient-text">Creative Hub</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Work together in real-time from anywhere. Comment, review, and ship content as a team.
            </p>
            <div className="space-y-4">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
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
        </div>
      </div>
    </section>
  );
};

export default CloudCollab;

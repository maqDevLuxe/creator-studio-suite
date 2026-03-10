import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const posts = [
  { tag: "Tutorial", title: "10 AI Editing Tricks to Cut Your Workflow in Half", date: "Mar 5, 2026", read: "5 min" },
  { tag: "News", title: "StudioAI 3.0: New Podcasting Suite & Multi-Track Editor", date: "Feb 28, 2026", read: "3 min" },
  { tag: "Tips", title: "How Top YouTubers Use AI to Produce Daily Content", date: "Feb 20, 2026", read: "7 min" },
];

const CreatorBlog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-card/30" ref={ref}>
      <div className="container mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-sm font-mono text-primary tracking-wider uppercase">Blog</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">Creator Tips & News</h2>
          </div>
          <a href="#" className="hidden md:flex items-center gap-1 text-sm text-primary hover:underline">
            View all <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 hover:border-primary/30 transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary">{p.tag}</span>
                <span className="text-xs text-muted-foreground">{p.date}</span>
              </div>
              <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors leading-snug">{p.title}</h3>
              <span className="text-xs text-muted-foreground">{p.read} read</span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreatorBlog;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const reviews = [
  { name: "Sarah Chen", role: "YouTuber · 1.2M subs", text: "StudioAI cut my editing time from 6 hours to 45 minutes. The AI auto-cut is insanely good.", rating: 5 },
  { name: "Marcus Williams", role: "Podcast Host", text: "The audio cleanup is magic. I record in my apartment and it sounds like a professional studio.", rating: 5 },
  { name: "Aisha Patel", role: "Video Producer", text: "Our team collaborates in real-time now. The cloud workspace is a game-changer for remote production.", rating: 5 },
  { name: "David Kim", role: "Vlogger · 500K subs", text: "Smart captions + auto B-roll means I can publish daily without burning out. Worth every penny.", rating: 5 },
  { name: "Elena Torres", role: "Content Agency", text: "We migrated our entire agency to StudioAI. 10x faster turnaround for client projects.", rating: 5 },
  { name: "James O'Brien", role: "Podcaster & Author", text: "Multi-speaker detection and auto leveling made our interview podcast sound professional from day one.", rating: 5 },
];

const ReviewsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-card/30" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-mono text-primary tracking-wider uppercase">Reviews</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Loved by <span className="gradient-text">Creators</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card p-6"
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-foreground/80 mb-4 leading-relaxed">"{r.text}"</p>
              <div>
                <p className="text-sm font-semibold">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

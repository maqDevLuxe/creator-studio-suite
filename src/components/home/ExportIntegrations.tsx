import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Upload, Youtube, Music, Radio, Tv, Globe, Podcast, Share } from "lucide-react";

const platforms = [
  { icon: Youtube, name: "YouTube", color: "text-red-500" },
  { icon: Music, name: "Spotify", color: "text-green-500" },
  { icon: Tv, name: "TikTok", color: "text-pink-500" },
  { icon: Radio, name: "Apple Podcasts", color: "text-purple-500" },
  { icon: Podcast, name: "Anchor", color: "text-accent" },
  { icon: Globe, name: "Web Embed", color: "text-blue-400" },
  { icon: Share, name: "Social Media", color: "text-primary" },
  { icon: Upload, name: "Custom Export", color: "text-muted-foreground" },
];

const ExportIntegrations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto text-center">
        <span className="text-sm font-mono text-accent tracking-wider uppercase">Export</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
          Publish <span className="gradient-text">Everywhere</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-16">
          One-click export to every major platform. Optimized formats, thumbnails, and metadata included.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {platforms.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass-card p-6 flex flex-col items-center gap-3 hover:border-primary/30 transition-all cursor-pointer group"
            >
              <p.icon className={`w-8 h-8 ${p.color} group-hover:scale-110 transition-transform`} />
              <span className="text-sm font-medium">{p.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExportIntegrations;

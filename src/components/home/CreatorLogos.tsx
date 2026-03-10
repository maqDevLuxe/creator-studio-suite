import { motion } from "framer-motion";

const logos = [
  "Netflix", "Spotify", "YouTube", "Adobe", "TikTok", "Twitch",
  "Apple", "Discord", "Figma", "Slack",
];

const CreatorLogos = () => (
  <section className="section-padding border-y border-border/30">
    <div className="container mx-auto">
      <p className="text-center text-sm text-muted-foreground mb-8 tracking-widest uppercase">
        Trusted by 50,000+ creators worldwide
      </p>
      <div className="overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
        <motion.div className="flex gap-16 animate-marquee">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 text-xl font-bold text-muted-foreground/40 font-display whitespace-nowrap hover:text-muted-foreground transition-colors"
            >
              {logo}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default CreatorLogos;

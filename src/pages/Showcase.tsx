import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Play, ExternalLink } from "lucide-react";

const projects = [
  { title: "Travel Vlog Series", creator: "Sarah Chen", type: "Video", views: "2.4M views", color: "from-primary to-accent" },
  { title: "Tech Review Podcast", creator: "Marcus Williams", type: "Podcast", views: "500K listens", color: "from-accent to-yellow-500" },
  { title: "Cooking Channel Rebrand", creator: "Aisha Patel", type: "Video", views: "1.8M views", color: "from-blue-500 to-primary" },
  { title: "True Crime Episodes", creator: "David Kim", type: "Podcast", views: "3.1M listens", color: "from-green-500 to-blue-500" },
  { title: "Fitness Transformation", creator: "Elena Torres", type: "Video", views: "900K views", color: "from-primary to-pink-400" },
  { title: "Startup Stories Weekly", creator: "James O'Brien", type: "Podcast", views: "750K listens", color: "from-accent to-red-500" },
];

const Showcase = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-24 section-padding">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-mono text-primary tracking-wider uppercase">Showcase</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-3 mb-4">
            Made with <span className="gradient-text">StudioAI</span>
          </h1>
          <p className="text-muted-foreground">
            See what creators are building with our AI-powered tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card overflow-hidden group cursor-pointer hover:border-primary/30 transition-all"
            >
              <div className={`h-48 bg-gradient-to-br ${p.color} relative flex items-center justify-center`}>
                <div className="w-14 h-14 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 fill-current text-foreground" />
                </div>
                <span className="absolute top-3 right-3 text-xs px-2 py-1 rounded-md bg-background/30 backdrop-blur-sm text-foreground">
                  {p.type}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">by {p.creator}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{p.views}</span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Showcase;

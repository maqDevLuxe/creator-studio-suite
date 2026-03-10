import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Scissors, Captions, Wand2, Mic, Volume2, Headphones, Layers, Zap, Film, AudioLines, Sparkles, Video } from "lucide-react";

const categories = [
  {
    title: "Video Editing",
    icon: Video,
    tools: [
      { icon: Scissors, name: "Auto-Cut", desc: "Remove silences and filler words automatically with AI precision." },
      { icon: Captions, name: "Smart Captions", desc: "Generate styled captions in 40+ languages instantly." },
      { icon: Wand2, name: "AI B-Roll", desc: "Automatically find and insert contextual B-roll footage." },
      { icon: Film, name: "Scene Detection", desc: "Split footage into organized, editable segments." },
      { icon: Zap, name: "Highlights Reel", desc: "AI picks the best moments for short-form content." },
      { icon: Layers, name: "Multi-Track Editor", desc: "Unlimited tracks with AI-assisted arrangement." },
    ],
  },
  {
    title: "Audio & Podcasting",
    icon: Mic,
    tools: [
      { icon: Volume2, name: "Noise Removal", desc: "Remove background noise, hum, and echo in real-time." },
      { icon: Headphones, name: "Voice Enhancement", desc: "Studio-quality voice processing for every recording." },
      { icon: AudioLines, name: "Audio Leveling", desc: "Automatic loudness normalization across all tracks." },
      { icon: Sparkles, name: "Speaker Detection", desc: "Auto-detect and label different speakers." },
    ],
  },
];

const Tools = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-24 section-padding">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-sm font-mono text-primary tracking-wider uppercase">Tools</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-3 mb-4">
            Your AI <span className="gradient-text">Toolkit</span>
          </h1>
          <p className="text-muted-foreground">
            Every tool you need to create professional video and audio content, powered by AI.
          </p>
        </div>

        {categories.map((cat, ci) => (
          <div key={cat.title} className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
                <cat.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold">{cat.title}</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {cat.tools.map((tool, i) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="glass-card p-6 hover:border-primary/30 transition-all group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                    <tool.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{tool.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{tool.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </div>
);

export default Tools;

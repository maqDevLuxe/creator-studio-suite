import { Link } from "react-router-dom";
import { Play, Twitter, Youtube, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/50 bg-card/30">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
              <Play className="w-4 h-4 fill-current text-primary-foreground" />
            </div>
            <span className="text-lg font-bold gradient-text">StudioAI</span>
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed">
            AI-powered video editing & podcasting platform for modern creators.
          </p>
          <div className="flex gap-3 mt-4">
            {[Twitter, Youtube, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
        {[
          { title: "Product", links: ["Features", "Pricing", "Showcase", "Changelog"] },
          { title: "Resources", links: ["Blog", "Tutorials", "Community", "Support"] },
          { title: "Company", links: ["About", "Careers", "Press", "Contact"] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="font-semibold text-sm mb-4 text-foreground">{col.title}</h4>
            <ul className="space-y-2.5">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border/50 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground">© 2026 StudioAI. All rights reserved.</p>
        <div className="flex gap-6">
          {["Privacy", "Terms", "Cookies"].map((t) => (
            <a key={t} href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">{t}</a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

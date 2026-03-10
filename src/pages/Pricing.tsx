import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    desc: "Perfect for trying out StudioAI",
    features: ["5 exports/month", "720p max resolution", "AI auto-cut", "Basic captions", "Community support"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$24",
    period: "/month",
    desc: "For serious creators",
    features: ["Unlimited exports", "4K resolution", "All AI tools", "Smart captions (40+ languages)", "Cloud collaboration", "Priority support", "Custom branding"],
    cta: "Start Pro Trial",
    popular: true,
  },
  {
    name: "Team",
    price: "$79",
    period: "/month",
    desc: "For agencies & teams",
    features: ["Everything in Pro", "5 team members", "Role permissions", "Shared asset library", "API access", "Dedicated support", "SSO & compliance"],
    cta: "Contact Sales",
    popular: false,
  },
];

const Pricing = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-24 section-padding">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-mono text-primary tracking-wider uppercase">Pricing</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-3 mb-4">
            Simple, <span className="gradient-text">Creator-Friendly</span> Pricing
          </h1>
          <p className="text-muted-foreground">
            Start free. Upgrade when you're ready. No surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass-card p-8 relative ${plan.popular ? "border-primary/50 glow-primary" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>
                  Most Popular
                </div>
              )}
              <h3 className="font-semibold text-lg mb-1">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{plan.desc}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground text-sm">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${plan.popular ? "text-primary-foreground glow-primary" : "bg-secondary text-secondary-foreground hover:bg-muted"}`}
                style={plan.popular ? { background: "var(--gradient-primary)" } : undefined}
              >
                {plan.cta} {plan.popular && <ArrowRight className="w-4 h-4 ml-2" />}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Pricing;

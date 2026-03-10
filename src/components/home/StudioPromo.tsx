import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import studioPromo from "@/assets/studio-promo.jpg";

const StudioPromo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative" ref={ref}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden"
      >
        <img
          src={studioPromo}
          alt="Professional creator studio setup"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold max-w-lg">
              Built for <span className="gradient-text">Professional Creators</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-md">
              Whether you're a solo vlogger or a production team, StudioAI scales with your creative ambitions.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default StudioPromo;

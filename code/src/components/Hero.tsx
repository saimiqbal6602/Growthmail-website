import { motion } from "framer-motion";
import HeroScene from "./HeroScene";

const CALENDLY_LINK = "https://calendly.com/saim-outreach-growthmailco/30min";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-radial-fade" />
      <HeroScene />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-glow bg-secondary/50 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-xs font-medium text-muted-foreground tracking-wide uppercase">
              ZeroRisk Launch Offer — Pay Only Per Meeting
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-6">

          We fill your pipeline.
          <br />
          <span className="text-gradient">You close deals.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">Cold email lead generation built for B2B SaaS companies. No retainers. No setup fees. You only pay when qualified meetings land on your calendar.




        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4">

          <a
            href={CALENDLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold text-base hover:opacity-90 transition-opacity glow-md">

            Book a Free Strategy Call
          </a>
          <a
            href="#how-it-works"
            className="px-8 py-3.5 rounded-lg font-medium text-base border border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground transition-all">

            See How It Works
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>);

};

export default Hero;
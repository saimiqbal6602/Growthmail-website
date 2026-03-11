import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Settings, Send, ClipboardCheck, CalendarCheck } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Onboarding & Setup",
    desc: "We set up your email domains, inboxes, warmup, and outreach sequences. You pay nothing.",
    tags: ["Domain Auth", "SPF/DKIM", "Inbox Warmup", "Sequence Design"],
    icon: Settings,
    accent: "from-primary/20 to-primary/5",
  },
  {
    num: "02",
    title: "Campaign Launch",
    desc: "Personalized cold emails sent to verified SaaS decision-makers. We manage all replies.",
    tags: ["ICP Targeting", "A/B Testing", "Reply Mgmt", "Deliverability"],
    icon: Send,
    accent: "from-primary/15 to-primary/5",
  },
  {
    num: "03",
    title: "Prospect Qualifies",
    desc: "Interested prospects answer qualifying questions via a form before booking on your calendar.",
    tags: ["Lead Scoring", "Qual Form", "Auto-Filter", "CRM Sync"],
    icon: ClipboardCheck,
    accent: "from-primary/20 to-primary/5",
  },
  {
    num: "04",
    title: "You Get Meetings",
    desc: "Qualified, confirmed meetings land directly on your calendar. No meeting, no charge.",
    tags: ["Calendar Sync", "Confirmation", "Prep Brief", "Zero Risk"],
    icon: CalendarCheck,
    accent: "from-primary/15 to-primary/5",
  },
];

const ScanLine = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute inset-0 pointer-events-none z-30 overflow-hidden rounded-2xl"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay }}
  >
    <motion.div
      className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent"
      initial={{ top: "-2px" }}
      whileInView={{ top: "100%" }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay: delay + 0.1, ease: "easeInOut" }}
    />
  </motion.div>
);

const GlitchNumber = ({ num, delay }: { num: string; delay: number }) => {
  const [glitch, setGlitch] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setGlitch(false), (delay + 1.5) * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="relative select-none">
      <span className="text-[8rem] md:text-[10rem] font-bold leading-none tracking-tighter text-gradient opacity-[0.07]">
        {num}
      </span>
      {glitch && (
        <>
          <motion.span
            className="absolute inset-0 text-[8rem] md:text-[10rem] font-bold leading-none tracking-tighter text-primary/10"
            animate={{
              x: [0, -3, 2, -1, 0],
              opacity: [0.1, 0.15, 0.08, 0.12, 0.1],
            }}
            transition={{ duration: 0.3, repeat: 5, repeatType: "mirror" }}
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)" }}
          >
            {num}
          </motion.span>
          <motion.span
            className="absolute inset-0 text-[8rem] md:text-[10rem] font-bold leading-none tracking-tighter text-primary/10"
            animate={{
              x: [0, 2, -3, 1, 0],
              opacity: [0.1, 0.08, 0.15, 0.1, 0.1],
            }}
            transition={{ duration: 0.25, repeat: 5, repeatType: "mirror", delay: 0.05 }}
            style={{ clipPath: "polygon(0 55%, 100% 55%, 100% 100%, 0 100%)" }}
          >
            {num}
          </motion.span>
        </>
      )}
    </div>
  );
};

const StepCard = ({ step, index }: { step: typeof steps[0]; index: number }) => {
  const Icon = step.icon;
  const delay = index * 0.25;

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.01, delay }}
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-6 md:gap-10 items-center">
        {/* Left: Giant number */}
        <div className={`flex justify-center md:justify-end ${index % 2 !== 0 ? "md:order-2 md:justify-start" : ""}`}>
          <GlitchNumber num={step.num} delay={delay} />
        </div>

        {/* Right: Content card */}
        <div className={`relative ${index % 2 !== 0 ? "md:order-1" : ""}`}>
          <ScanLine delay={delay} />

          <motion.div
            className="relative rounded-2xl border border-border bg-card overflow-hidden"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: delay + 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Top accent bar */}
            <motion.div
              className="h-[2px] bg-gradient-to-r from-primary/80 via-primary/40 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: delay + 0.4 }}
              style={{ transformOrigin: "left" }}
            />

            <div className="p-6 md:p-8">
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center"
                  initial={{ rotate: -90, opacity: 0 }}
                  whileInView={{ rotate: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: delay + 0.5, type: "spring" }}
                >
                  <Icon className="w-5 h-5 text-primary" />
                </motion.div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-semibold">
                    Step {step.num}
                  </p>
                  <h3 className="text-lg md:text-xl font-bold tracking-tight">
                    {step.title}
                  </h3>
                </div>
              </div>

              {/* Description with typewriter-like reveal */}
              <motion.p
                className="text-muted-foreground leading-relaxed mb-6 text-sm md:text-base"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: delay + 0.6 }}
              >
                {step.desc}
              </motion.p>

              {/* Tags with staggered reveal */}
              <div className="flex flex-wrap gap-2">
                {step.tags.map((tag, idx) => (
                  <motion.span
                    key={tag}
                    className="relative text-[11px] font-mono px-3 py-1.5 rounded-md bg-secondary/60 text-secondary-foreground border border-border overflow-hidden"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: delay + 0.7 + idx * 0.1,
                      type: "spring",
                      stiffness: 300,
                    }}
                  >
                    <span className="relative z-10">{tag}</span>
                    {/* Hover shimmer */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                    />
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Bottom accent strip */}
            <div className="h-8 border-t border-border bg-secondary/20 flex items-center px-4 overflow-hidden">
              <motion.div
                className="flex-1 h-[3px] rounded-full bg-secondary overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: delay + 0.9 }}
              >
                <motion.div
                  className="h-full w-full bg-gradient-to-r from-primary/70 via-primary to-primary/70 rounded-full"
                  initial={{ x: "-100%" }}
                  whileInView={{ x: "0%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, delay: delay + 1, ease: [0.22, 1, 0.36, 1] }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Connector between steps */}
      {index < steps.length - 1 && (
        <div className="flex justify-center my-8 md:my-12">
          <motion.div
            className="flex flex-col items-center gap-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: delay + 1 }}
          >
            {[...Array(3)].map((_, dotIdx) => (
              <motion.div
                key={dotIdx}
                className="w-1 h-1 rounded-full bg-primary/40"
                animate={{ opacity: [0.2, 0.8, 0.2] }}
                transition={{
                  duration: 1.5,
                  delay: dotIdx * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-fade pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-xs font-mono text-primary tracking-widest uppercase">
              System Online
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            How it <span className="text-gradient">works</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm md:text-base">
            Four automated steps from zero to qualified meetings on your calendar.
          </p>
        </motion.div>

        <div className="space-y-4 md:space-y-0">
          {steps.map((step, i) => (
            <StepCard key={step.num} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

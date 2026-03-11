import { motion } from "framer-motion";

const reasons = [
  {
    title: "Zero Risk, Literally",
    desc: "No setup fees. No monthly retainers. You pay only when a qualified meeting is booked on your calendar.",
  },
  {
    title: "Built for SaaS",
    desc: "We specialize in SaaS outbound. We know your ICP, your language, and how to get past the noise.",
  },
  {
    title: "Full Transparency",
    desc: "Every meeting comes with proof of qualification. Weekly reports. No black boxes.",
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-32 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            Why GrowthMail
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Skin in the game
          </h2>
        </motion.div>

        <div className="space-y-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-6 items-start p-6 rounded-2xl border border-border hover:border-glow bg-card/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-display font-bold text-lg">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">{r.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

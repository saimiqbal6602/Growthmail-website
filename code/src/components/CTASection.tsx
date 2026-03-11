import { motion } from "framer-motion";

const CALENDLY_LINK = "https://calendly.com/saim-outreach-growthmailco/30min";

const CTASection = () => {
  return (
    <section className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative p-12 md:p-16 rounded-3xl border border-border bg-card/50 overflow-hidden"
        >
          {/* Glow background */}
          <div className="absolute inset-0 bg-radial-fade opacity-50" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Ready to fill your pipeline?
            </h2>
            <p className="text-lg text-muted-foreground max-w-lg mx-auto mb-8">
              Let's talk about your ICP, your goals, and how we can start booking
              qualified meetings — at zero upfront cost.
            </p>
            <a
              href={CALENDLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-base hover:opacity-90 transition-opacity glow-md"
            >
              Book Your Free Strategy Call →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

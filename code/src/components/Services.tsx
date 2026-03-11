import { motion } from "framer-motion";
import { Mail, Users, BarChart3, Shield, Target, MessageSquare } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Infrastructure Setup",
    desc: "Dedicated sending domains, warmed inboxes, and deliverability monitoring — all done for you, free.",
  },
  {
    icon: Target,
    title: "ICP Research & List Building",
    desc: "500+ verified SaaS decision-makers per month, enriched with company context and buying signals.",
  },
  {
    icon: Mail,
    title: "Cold Email Campaigns",
    desc: "Multi-step, hyper-personalized outreach sequences. A/B tested and optimized continuously.",
  },
  {
    icon: MessageSquare,
    title: "Reply Management",
    desc: "We handle every reply — qualifying interested prospects and moving them toward booking.",
  },
  {
    icon: Users,
    title: "Qualified Meeting Booking",
    desc: "Prospects self-qualify via a custom form before booking. Only real opportunities reach your calendar.",
  },
  {
    icon: BarChart3,
    title: "Reporting & Optimization",
    desc: "Weekly reports on open rates, reply rates, and meetings. Transparent data, no guesswork.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 relative bg-radial-fade">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            Full-Service
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Everything handled, end to end
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 rounded-2xl bg-card/50 border border-border hover:border-glow transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <svc.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{svc.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {svc.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

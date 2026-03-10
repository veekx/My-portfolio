import { motion } from "motion/react";
import {
  MonitorSmartphone,
  Megaphone,
  LineChart,
  LayoutDashboard,
} from "lucide-react";

const services = [
  {
    title: "Website Development",
    description:
      "Custom, high-converting websites built to scale your service-based business.",
    icon: <MonitorSmartphone size={32} className="text-juice" />,
    features: [
      "Custom Design",
      "Mobile Responsive",
      "SEO Optimized",
      "Fast Loading",
    ],
  },
  {
    title: "Paid Ads",
    description:
      "Targeted advertising campaigns that drive qualified leads directly to your inbox.",
    icon: <Megaphone size={32} className="text-juice" />,
    features: ["Google Ads", "Meta Ads", "Retargeting", "Conversion Tracking"],
  },
  {
    title: "SEO / Ranking",
    description:
      "Dominate local search results and get found by clients actively looking for your services.",
    icon: <LineChart size={32} className="text-juice" />,
    features: [
      "Keyword Strategy",
      "On-Page SEO",
      "Local SEO",
      "Content Creation",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-4 py-1.5 text-sm font-medium text-juice bg-juice/10 rounded-full mb-6 border border-juice/20"
          >
            Our Services
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6"
          >
            Leads, Sales, and{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-juice to-juice-light">
              Growth
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted"
          >
            The same systems that run our business are the ones we implement for
            clients.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-card border border-border rounded-3xl p-8 lg:p-10 hover:border-juice/50 transition-all overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-juice/5 rounded-full blur-[80px] group-hover:bg-juice/10 transition-colors pointer-events-none" />

              <div className="relative z-10">
                <div className="w-16 h-16 bg-background border border-border rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-lg">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-display font-bold mb-4">
                  {service.title}
                </h3>
                <p className="text-muted mb-8 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className="flex items-center text-sm text-muted-light"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-juice mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

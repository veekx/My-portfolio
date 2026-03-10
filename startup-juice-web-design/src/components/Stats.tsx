import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export default function Stats() {
  return (
    <section
      id="about"
      className="py-32 relative border-t border-border overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center px-4 py-1.5 text-sm font-medium text-juice bg-juice/10 rounded-full mb-6 border border-juice/20"
            >
              Driving Results!
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-8"
            >
              Delivering high-quality designs with strategic impact. Elevate
              your digital presence in style.
            </motion.h2>

            <div className="space-y-6 mb-12">
              {[
                "Web Design Specialist",
                "Proven Track Record of Driving Online Growth",
                "Customized Solutions for Every Client",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-4 text-lg text-muted-light"
                >
                  <CheckCircle2 className="text-juice shrink-0" size={24} />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-juice hover:bg-juice-dark rounded-full transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(255,87,34,0.5)]"
            >
              Book Consultation Call
            </motion.a>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { label: "Reviews", value: "64+", suffix: "5-Star" },
              { label: "Projects", value: "120+", suffix: "Completed" },
              { label: "Revenue", value: "$2M+", suffix: "Generated" },
              { label: "Support", value: "24/7", suffix: "Available" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="bg-card border border-border p-8 rounded-3xl flex flex-col justify-center items-center text-center hover:border-juice/50 transition-colors"
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-juice font-medium mb-1">{stat.suffix}</div>
                <div className="text-sm text-muted">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

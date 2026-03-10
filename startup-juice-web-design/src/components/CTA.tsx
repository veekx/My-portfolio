import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="contact"
      className="py-32 relative border-t border-border overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center px-4 py-1.5 text-sm font-medium text-juice bg-juice/10 rounded-full mb-8 border border-juice/20"
        >
          Get in Touch
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter text-balance leading-[1.1] mb-8"
        >
          Every Project is a{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-juice to-juice-light">
            Unique Opportunity.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-muted max-w-2xl mx-auto text-balance mb-12"
        >
          Need a site but not sure where to start? Let's map it out together on
          a free strategy call.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-white bg-juice hover:bg-juice-dark rounded-full transition-all hover:scale-105 shadow-[0_0_60px_-15px_rgba(255,87,34,0.6)] group"
          >
            Book FREE Strategy Call
            <ArrowRight
              className="ml-2 group-hover:translate-x-1 transition-transform"
              size={24}
            />
          </a>
          <a
            href="tel:08125794014"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-foreground bg-card hover:bg-border border border-border rounded-full transition-all"
          >
            Call 08125794014
          </a>
        </motion.div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Why should I get a website for my business?",
    answer:
      "A website acts as your digital storefront, open 24/7. It builds credibility, helps you get found on Google, and serves as a central hub for your marketing efforts, ultimately driving more leads and sales.",
  },
  {
    question: "How long does it take to develop?",
    answer:
      "Most of our standard website projects take between 2 to 4 weeks from kickoff to launch. Complex custom dashboards or extensive e-commerce builds may take longer. We'll provide a clear timeline during our strategy call.",
  },
  {
    question: "What makes you different to other web design agencies?",
    answer:
      "We don't just build pretty websites; we build conversion systems. Our approach combines strategic design, SEO best practices, and automated lead generation to ensure your site actually grows your business.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Absolutely. Over 60% of web traffic comes from mobile devices. Every site we build is fully responsive, ensuring it looks and performs perfectly on smartphones, tablets, and desktops.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-32 relative border-t border-border"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center px-4 py-1.5 text-sm font-medium text-juice bg-juice/10 rounded-full mb-6 border border-juice/20"
            >
              Asked Questions
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6"
            >
              Have questions? Our FAQ section has you covered.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted mb-12"
            >
              Quick answers to the most common inquiries about working with us.
            </motion.p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-3xl overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none group"
                >
                  <span className="text-xl font-display font-bold pr-8 group-hover:text-juice transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center border transition-colors ${
                      openIndex === index
                        ? "bg-juice border-juice text-white"
                        : "border-border text-muted group-hover:border-juice group-hover:text-juice"
                    }`}
                  >
                    {openIndex === index ? (
                      <Minus size={20} />
                    ) : (
                      <Plus size={20} />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 md:px-8 pb-8 pt-0 text-muted leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

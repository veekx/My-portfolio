import { motion } from "motion/react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Big shout out to Startup Juice for designing our new site! It's live and we love it! They will crush a new site for you too!",
    author: "Sean Conlon",
    role: "Ferrum Films",
    image: "https://i.pravatar.cc/150?img=11",
  },
  {
    quote:
      "I've had so many compliments already and it's made a real difference to how we present our brand online. I couldn't recommend them more highly.",
    author: "Maryanne Memmolo",
    role: "Step 'n' Style",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    quote:
      "I had an awesome experience with Startup Juice through the whole process of my website being built. I plan on creating more projects and ideas with them.",
    author: "Lu Polanco",
    role: "AdventureDR",
    image: "https://i.pravatar.cc/150?img=13",
  },
  {
    quote:
      "They absolutely cooked with our new website. By far the easiest web designer I have ever worked with. A completely new and original website fit our vision perfectly!",
    author: "Jack Watson",
    role: "Ripple Media",
    image: "https://i.pravatar.cc/150?img=14",
  },
  {
    quote:
      "They delivered a customized solution that addressed all of our business needs. The website is sleek, functional, and improved our customer experience.",
    author: "Richard",
    role: "Local Business Owner",
    image: "https://i.pravatar.cc/150?img=15",
  },
  {
    quote:
      "We are super happy with the final result. Startup Juice delivered a beautifully designed website that perfectly reflects our brand and what we were looking for.",
    author: "Kourtney",
    role: "Video Agency",
    image: "https://i.pravatar.cc/150?img=16",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 overflow-hidden border-y border-border relative">
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4">
          Working With Us
        </h2>
        <p className="text-muted text-lg">
          Hear from those who experienced the Startup Juice effect.
        </p>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee flex whitespace-nowrap group-hover:pause">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="w-[350px] md:w-[450px] shrink-0 mx-4 bg-card border border-border p-8 rounded-2xl flex flex-col justify-between hover:border-juice/50 transition-colors"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={16}
                      className="fill-juice text-juice"
                    />
                  ))}
                </div>
                <p className="text-lg text-muted-light text-wrap leading-relaxed mb-8">
                  "{t.quote}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.author}
                  className="w-12 h-12 rounded-full object-cover border border-border"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{t.author}</h4>
                  <p className="text-sm text-muted">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

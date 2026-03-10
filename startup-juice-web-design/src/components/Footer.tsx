import { motion } from "motion/react";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border pt-24 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 group mb-6">
              <div className="w-10 h-10 rounded-full bg-juice flex items-center justify-center text-white font-display font-bold text-2xl group-hover:scale-110 transition-transform">
                S
              </div>
              <span className="font-display font-bold text-2xl tracking-tight">
                Startup Juice
              </span>
            </a>
            <p className="text-muted max-w-sm leading-relaxed mb-6">
              We build modern, conversion-driven websites that help
              service-based businesses scale and stand out online.
            </p>
            <p className="text-foreground font-medium mb-8 flex items-center gap-2">
              Call us: <a href="tel:08125794014" className="hover:text-juice transition-colors">08125794014</a>
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/startup_juice"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted hover:text-juice hover:border-juice transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted hover:text-juice hover:border-juice transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted hover:text-juice hover:border-juice transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted hover:text-juice hover:border-juice transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-foreground">
              Navigation
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#services"
                  className="text-muted hover:text-juice transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-muted hover:text-juice transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-muted hover:text-juice transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-muted hover:text-juice transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-foreground">
              Subscribe
            </h4>
            <p className="text-muted mb-4">
              Get the latest insights and tips delivered to your inbox.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-light focus:outline-none focus:border-juice transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-juice hover:bg-juice-dark text-white font-semibold rounded-lg px-4 py-3 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-light text-sm">
            © {new Date().getFullYear()} Startup Juice Web Design. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-light">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

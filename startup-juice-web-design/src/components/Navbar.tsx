import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-juice flex items-center justify-center text-white font-display font-bold text-xl group-hover:scale-110 transition-transform">
            S
          </div>
          <span className="font-display font-bold text-xl tracking-tight">
            Startup Juice
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#services"
            className="text-sm font-medium text-muted-light hover:text-foreground transition-colors"
          >
            Services
          </a>
          <a
            href="#portfolio"
            className="text-sm font-medium text-muted-light hover:text-foreground transition-colors"
          >
            Portfolio
          </a>
          <a
            href="#about"
            className="text-sm font-medium text-muted-light hover:text-foreground transition-colors"
          >
            About
          </a>
          <a
            href="#faq"
            className="text-sm font-medium text-muted-light hover:text-foreground transition-colors"
          >
            FAQ
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-juice hover:bg-juice-dark rounded-full transition-colors"
          >
            Get in Touch
          </a>
        </div>

        <button
          className="md:hidden text-muted-light hover:text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-card border-b border-border p-6 md:hidden flex flex-col gap-4 shadow-2xl"
        >
          <a
            href="#services"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg font-medium text-muted-light hover:text-foreground"
          >
            Services
          </a>
          <a
            href="#portfolio"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg font-medium text-muted-light hover:text-foreground"
          >
            Portfolio
          </a>
          <a
            href="#about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg font-medium text-muted-light hover:text-foreground"
          >
            About
          </a>
          <a
            href="#faq"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg font-medium text-muted-light hover:text-foreground"
          >
            FAQ
          </a>
          <div className="flex items-center justify-between mt-4">
            <ThemeToggle />
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-juice hover:bg-juice-dark rounded-full transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}

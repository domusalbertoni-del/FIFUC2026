import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Ticket } from "lucide-react";
import { expo } from "@/lib/utils";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Programa", href: "#programa" },
  { label: "Speakers", href: "#speakers" },
  { label: "Startups", href: "#startups" },
  { label: "Sede", href: "#sede" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-strong shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo — starburst iso in navbar, full logo lives in hero */}
          <a href="#inicio" className="flex-shrink-0 flex items-center gap-2.5">
            <img
              src="/images/iso-fif-color.png"
              alt="FIFUC 2026"
              className="h-9 md:h-10 w-auto"
            />
            <span className="font-display font-bold text-white text-sm md:text-base leading-tight hidden sm:block">
              FIFUC<span className="text-fifuc-cyan">26</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#registro"
              className="flex items-center gap-2 bg-white text-fifuc-navy px-5 py-2.5 rounded-full text-sm font-bold hover:bg-fifuc-white transition-colors shadow-lg shadow-black/10"
            >
              <Ticket className="w-4 h-4" />
              Compra tu Entrada
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: expo }}
            className="md:hidden glass-strong border-t border-white/10"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-medium text-white/80 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#registro"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 bg-white text-fifuc-navy px-5 py-3.5 rounded-full font-bold mt-2 shadow-lg"
              >
                <Ticket className="w-4 h-4" />
                Compra tu Entrada
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

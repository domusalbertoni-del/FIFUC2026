import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Ticket, Sun, Moon } from "lucide-react";
import { expo } from "@/lib/utils";
import { useTheme } from "@/lib/ThemeContext";

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
  const { isLight, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // When scrolled + light mode, use dark text on white glass
  const scrolledLight = scrolled && isLight;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? `glass-strong shadow-lg ${isLight ? "shadow-black/5" : "shadow-black/20"}`
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <a href="#inicio" className="flex-shrink-0 flex items-center gap-2.5">
            <img
              src="/images/iso-fif-color.png"
              alt="FIFUC 2026"
              className="h-9 md:h-10 w-auto"
            />
            <span className={`font-display font-bold text-sm md:text-base leading-tight hidden sm:block ${scrolledLight ? "text-gray-900" : "text-white"}`}>
              FIFUC<span className="text-fifuc-cyan">26</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  scrolledLight
                    ? "text-gray-500 hover:text-gray-900"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}

            {/* Theme toggle */}
            <button
              type="button"
              onClick={toggle}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer border ${
                scrolledLight
                  ? "bg-gray-100 text-gray-600 hover:bg-gray-200 border-gray-200"
                  : "bg-white/10 text-white/70 hover:bg-white/20 border-white/10"
              }`}
            >
              {isLight ? <Moon className="w-3 h-3" /> : <Sun className="w-3 h-3" />}
              {isLight ? "Oscuro" : "Claro"}
            </button>

            <a
              href="#registro"
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-colors shadow-lg ${
                scrolledLight
                  ? "bg-fifuc-navy text-white shadow-fifuc-navy/10 hover:bg-fifuc-navy/90"
                  : "bg-white text-fifuc-navy shadow-black/10 hover:bg-fifuc-white"
              }`}
            >
              <Ticket className="w-4 h-4" />
              Compra tu Entrada
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 ${scrolledLight ? "text-gray-900" : "text-white"}`}
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
            className={`md:hidden glass-strong ${isLight ? "border-t border-gray-200/50" : "border-t border-white/10"}`}
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-lg font-medium transition-colors ${
                    isLight ? "text-gray-700 hover:text-gray-900" : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-3 mt-2">
                <a
                  href="#registro"
                  onClick={() => setMobileOpen(false)}
                  className={`flex-1 flex items-center justify-center gap-2 px-5 py-3.5 rounded-full font-bold shadow-lg ${
                    isLight
                      ? "bg-fifuc-navy text-white"
                      : "bg-white text-fifuc-navy"
                  }`}
                >
                  <Ticket className="w-4 h-4" />
                  Compra tu Entrada
                </a>
                <button
                  type="button"
                  onClick={toggle}
                  className={`p-3.5 rounded-full border cursor-pointer ${
                    isLight
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-white/10 text-white/70 border-white/10"
                  }`}
                >
                  {isLight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

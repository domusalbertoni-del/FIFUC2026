import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { expo } from "@/lib/utils";
import { useTheme } from "@/lib/ThemeContext";

const placeholderLogos = Array.from({ length: 12 }, (_, i) => `Startup ${i + 1}`);

export default function StartupsSection() {
  const { isLight } = useTheme();

  return (
    <section id="startups" className={`py-24 md:py-32 overflow-hidden ${isLight ? "bg-white" : "bg-fifuc-navy"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: expo }}
          className="text-center mb-12"
        >
          <p className={`font-medium text-sm tracking-wider uppercase mb-4 ${isLight ? "text-fifuc-blue" : "text-fifuc-cyan"}`}>
            Innovación
          </p>
          <h2
            className={`font-display font-bold mb-4 ${isLight ? "text-gray-900" : "text-fifuc-white"}`}
            style={{ fontSize: "var(--text-fluid-3xl)" }}
          >
            Expo <span className="text-gradient-brand">Startups</span>
          </h2>
          <p
            className={`max-w-2xl mx-auto ${isLight ? "text-gray-500" : "text-fifuc-white/60"}`}
            style={{ fontSize: "var(--text-fluid-base)" }}
          >
            Más de 120 startups y emprendimientos exhibirán sus soluciones
            innovadoras. Conecta con los fundadores que están transformando
            industrias.
          </p>
        </motion.div>

        {/* Marquee */}
        <div className="relative mb-12">
          {/* Fade edges */}
          <div className={`absolute left-0 top-0 bottom-0 w-20 z-10 ${isLight ? "bg-gradient-to-r from-white to-transparent" : "bg-gradient-to-r from-fifuc-navy to-transparent"}`} />
          <div className={`absolute right-0 top-0 bottom-0 w-20 z-10 ${isLight ? "bg-gradient-to-l from-white to-transparent" : "bg-gradient-to-l from-fifuc-navy to-transparent"}`} />

          <div className="flex animate-marquee gap-6 w-max">
            {[...placeholderLogos, ...placeholderLogos].map((name, i) => (
              <div
                key={i}
                className={`flex-shrink-0 w-32 h-16 rounded-lg border flex items-center justify-center ${
                  isLight
                    ? "border-gray-200 bg-gray-50"
                    : "border-fifuc-white/10 bg-fifuc-navy-light"
                }`}
              >
                <span className={`text-xs font-medium ${isLight ? "text-gray-400" : "text-fifuc-white/30"}`}>
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: expo }}
          className="text-center"
        >
          <motion.a
            href="#registro"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-display font-semibold transition-colors duration-300 border ${
              isLight
                ? "border-fifuc-blue/30 text-fifuc-blue hover:bg-fifuc-blue/5"
                : "border-fifuc-cyan/30 text-fifuc-cyan hover:bg-fifuc-cyan/10"
            }`}
          >
            <Rocket className="w-4 h-4" />
            Postula tu Startup
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

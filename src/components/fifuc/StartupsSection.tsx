import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { expo } from "@/lib/utils";

const placeholderLogos = Array.from({ length: 12 }, (_, i) => `Startup ${i + 1}`);

export default function StartupsSection() {
  return (
    <section id="startups" className="py-24 md:py-32 bg-fifuc-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: expo }}
          className="text-center mb-12"
        >
          <p className="text-fifuc-cyan font-medium text-sm tracking-wider uppercase mb-4">
            Innovación
          </p>
          <h2
            className="font-display font-bold text-fifuc-white mb-4"
            style={{ fontSize: "var(--text-fluid-3xl)" }}
          >
            Expo <span className="text-gradient-brand">Startups</span>
          </h2>
          <p
            className="text-fifuc-white/60 max-w-2xl mx-auto"
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
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-fifuc-navy to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-fifuc-navy to-transparent z-10" />

          <div className="flex animate-marquee gap-6 w-max">
            {[...placeholderLogos, ...placeholderLogos].map((name, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-32 h-16 rounded-lg border border-fifuc-white/10 bg-fifuc-navy-light flex items-center justify-center"
              >
                <span className="text-fifuc-white/30 text-xs font-medium">
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-fifuc-cyan/30 text-fifuc-cyan font-display font-semibold hover:bg-fifuc-cyan/10 transition-colors duration-300"
          >
            <Rocket className="w-4 h-4" />
            Postula tu Startup
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { expo } from "@/lib/utils";

const concepts = [
  "Ciencia Aplicada",
  "Productividad",
  "Crecimiento Inteligente",
  "Innovación",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        backgroundImage: "url(/images/seccion2-fondo.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-fifuc-navy/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: expo }}
          >
            <p className="text-fifuc-cyan font-medium text-sm tracking-wider uppercase mb-4">
              8va Edición
            </p>
            <h2
              className="font-display font-bold text-fifuc-white mb-6 leading-tight"
              style={{ fontSize: "var(--text-fluid-3xl)" }}
            >
              Conocimiento y{" "}
              <span className="text-gradient-brand">Crecimiento</span>
            </h2>
            <p
              className="text-fifuc-white/70 mb-8 leading-relaxed"
              style={{ fontSize: "var(--text-fluid-base)" }}
            >
              FIFUC 2026 no pregunta qué viene, sino cómo lo capitalizamos. Una
              colisión de ideas donde la ciencia, la tecnología y el
              emprendimiento se aceleran para desbloquear el crecimiento de
              Chile. Dos días de conferencias, workshops y networking con los
              líderes que están transformando el futuro.
            </p>

            {/* Concept Tags */}
            <div className="flex flex-wrap gap-3">
              {concepts.map((concept, i) => (
                <motion.span
                  key={concept}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5, ease: expo }}
                  className="px-4 py-2 rounded-full border border-fifuc-cyan/20 bg-fifuc-cyan/5 text-fifuc-cyan text-sm font-medium"
                >
                  {concept}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: expo, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-fifuc-cyan/10">
              <img
                src="/images/colision1-azul.jpeg"
                alt="Colisión de Partículas"
                className="w-full h-auto"
              />
              {/* Gradient overlay on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-fifuc-navy/40 to-transparent" />
            </div>
            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-fifuc-cyan/5 rounded-3xl blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { MapPin, Phone, Calendar, Ticket } from "lucide-react";
import { expo } from "@/lib/utils";
import { useTheme } from "@/lib/ThemeContext";

export default function LocationSection() {
  const { isLight } = useTheme();

  return (
    <section id="sede" className={`py-24 md:py-32 ${isLight ? "bg-gray-50" : "bg-fifuc-navy"}`}>
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
            Sede
          </p>
          <h2
            className={`font-display font-bold ${isLight ? "text-gray-900" : "text-white"}`}
            style={{ fontSize: "var(--text-fluid-3xl)" }}
          >
            Cómo <span className="text-gradient-brand">Llegar</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: expo }}
            className="rounded-2xl overflow-hidden h-80 md:h-full min-h-[320px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.2!2d-70.64!3d-33.44!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5a5b0d5cd2d%3A0x5c0d5c0d5c0d5c0d!2sCentro%20de%20Extensi%C3%B3n%20UC!5e0!3m2!1ses!2scl!4v1700000000000!5m2!1ses!2scl"
              width="100%"
              height="100%"
              style={{ border: 0, filter: isLight ? "none" : "invert(0.9) hue-rotate(180deg) brightness(0.8) contrast(1.2)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Centro de Extensión UC Alameda"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: expo, delay: 0.1 }}
            className={`rounded-2xl p-8 flex flex-col justify-center gap-8 ${
              isLight
                ? "bg-white border border-gray-100 shadow-sm"
                : "glass"
            }`}
          >
            {[
              {
                icon: MapPin,
                title: "Centro de Extensión UC Alameda",
                sub: "Av. Libertador Bernardo O'Higgins 390, Santiago, Chile",
              },
              {
                icon: Calendar,
                title: "8 – 9 Julio 2026",
                sub: "Dos días de conferencias, workshops y networking",
              },
              {
                icon: Phone,
                title: "Contacto",
                sub: "+56 (2) 2354 2132 / 2354 2738",
              },
            ].map(({ icon: Icon, title, sub }) => (
              <div key={title} className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  isLight ? "bg-fifuc-blue/10" : "bg-fifuc-cyan/10"
                }`}>
                  <Icon className={`w-5 h-5 ${isLight ? "text-fifuc-blue" : "text-fifuc-cyan"}`} />
                </div>
                <div>
                  <h3 className={`font-display font-semibold text-lg mb-1 ${isLight ? "text-gray-900" : "text-white"}`}>
                    {title}
                  </h3>
                  <p className={`text-sm ${isLight ? "text-gray-500" : "text-white/50"}`}>
                    {sub}
                  </p>
                </div>
              </div>
            ))}

            {/* Inline CTA */}
            <a
              href="#registro"
              className={`flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-display font-bold shadow-lg transition-shadow mt-2 ${
                isLight
                  ? "bg-fifuc-navy text-white hover:shadow-fifuc-navy/15"
                  : "bg-white text-fifuc-navy hover:shadow-fifuc-cyan/10"
              }`}
            >
              <Ticket className="w-4 h-4" />
              Compra tu Entrada
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

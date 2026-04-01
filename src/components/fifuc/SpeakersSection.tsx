import { motion } from "framer-motion";
import { User } from "lucide-react";
import { expo } from "@/lib/utils";
import { useTheme } from "@/lib/ThemeContext";

interface Speaker {
  name: string;
  title: string;
  org: string;
  topic: string;
  photo?: string;
}

const speakers: Speaker[] = [
  { name: "Por confirmar", title: "Keynote Speaker", org: "", topic: "Ciencia & Tecnología" },
  { name: "Por confirmar", title: "Panelista", org: "", topic: "Inteligencia Artificial" },
  { name: "Por confirmar", title: "Panelista", org: "", topic: "Transferencia Tech" },
  { name: "Por confirmar", title: "Keynote Speaker", org: "", topic: "Crecimiento Sostenible" },
  { name: "Por confirmar", title: "Workshop Leader", org: "", topic: "Innovación Aplicada" },
  { name: "Por confirmar", title: "Panelista", org: "", topic: "Productividad" },
];

export default function SpeakersSection() {
  const { isLight } = useTheme();

  return (
    <section id="speakers" className={`py-24 md:py-32 ${isLight ? "bg-gray-50" : "bg-fifuc-navy-light"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: expo }}
          className="text-center mb-16"
        >
          <p className={`font-medium text-sm tracking-wider uppercase mb-4 ${isLight ? "text-fifuc-blue" : "text-fifuc-cyan"}`}>
            Speakers
          </p>
          <h2
            className={`font-display font-bold ${isLight ? "text-gray-900" : "text-fifuc-white"}`}
            style={{ fontSize: "var(--text-fluid-3xl)" }}
          >
            Quiénes <span className="text-gradient-brand">Inspiran</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {speakers.map((speaker, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: expo }}
              whileHover={{ scale: 1.02, y: -4 }}
              className={`group rounded-2xl p-6 transition-all duration-300 cursor-default ${
                isLight
                  ? "bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-fifuc-blue/20"
                  : "glass hover:border-fifuc-cyan/30"
              }`}
            >
              {/* Photo / Placeholder */}
              <div className={`w-24 h-24 mx-auto mb-5 rounded-full border-2 flex items-center justify-center overflow-hidden transition-colors duration-300 ${
                isLight
                  ? "bg-gray-100 border-gray-200 group-hover:border-fifuc-blue/40"
                  : "bg-fifuc-navy-light border-fifuc-cyan/20 group-hover:border-fifuc-cyan/50 group-hover:shadow-lg group-hover:shadow-fifuc-cyan/10"
              }`}>
                {speaker.photo ? (
                  <img src={speaker.photo} alt={speaker.name} className="w-full h-full object-cover" />
                ) : (
                  <User className={`w-10 h-10 ${isLight ? "text-gray-300" : "text-fifuc-white/30"}`} />
                )}
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className={`font-display font-semibold text-lg mb-1 ${isLight ? "text-gray-900" : "text-fifuc-white"}`}>
                  {speaker.name}
                </h3>
                <p className={`text-sm mb-3 ${isLight ? "text-gray-500" : "text-fifuc-white/50"}`}>
                  {speaker.title}
                  {speaker.org && ` · ${speaker.org}`}
                </p>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                  isLight
                    ? "bg-fifuc-blue/10 border border-fifuc-blue/15 text-fifuc-blue"
                    : "bg-fifuc-cyan/10 border border-fifuc-cyan/20 text-fifuc-cyan"
                }`}>
                  {speaker.topic}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

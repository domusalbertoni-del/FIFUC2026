import { motion } from "framer-motion";
import { User } from "lucide-react";
import { expo } from "@/lib/utils";

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
  return (
    <section id="speakers" className="py-24 md:py-32 bg-fifuc-navy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: expo }}
          className="text-center mb-16"
        >
          <p className="text-fifuc-cyan font-medium text-sm tracking-wider uppercase mb-4">
            Speakers
          </p>
          <h2
            className="font-display font-bold text-fifuc-white"
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
              className="group glass rounded-2xl p-6 hover:border-fifuc-cyan/30 transition-all duration-300 cursor-default"
            >
              {/* Photo / Placeholder */}
              <div className="w-24 h-24 mx-auto mb-5 rounded-full bg-fifuc-navy-light border-2 border-fifuc-cyan/20 flex items-center justify-center overflow-hidden group-hover:border-fifuc-cyan/50 transition-colors duration-300 group-hover:shadow-lg group-hover:shadow-fifuc-cyan/10">
                {speaker.photo ? (
                  <img
                    src={speaker.photo}
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User className="w-10 h-10 text-fifuc-white/30" />
                )}
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="font-display font-semibold text-fifuc-white text-lg mb-1">
                  {speaker.name}
                </h3>
                <p className="text-fifuc-white/50 text-sm mb-3">
                  {speaker.title}
                  {speaker.org && ` · ${speaker.org}`}
                </p>
                <span className="inline-block px-3 py-1 rounded-full bg-fifuc-cyan/10 border border-fifuc-cyan/20 text-fifuc-cyan text-xs font-medium">
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

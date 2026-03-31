import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock } from "lucide-react";
import { expo } from "@/lib/utils";

interface TimeSlot {
  time: string;
  title: string;
  speaker: string;
  description: string;
}

const day1: TimeSlot[] = [
  {
    time: "09:00",
    title: "Apertura Oficial",
    speaker: "Comité Organizador FIFUC",
    description: "Bienvenida y presentación del programa del festival.",
  },
  {
    time: "09:30",
    title: "Keynote: El Futuro de la Ciencia en Chile",
    speaker: "Por confirmar",
    description: "Visión estratégica sobre el rol de la ciencia en el desarrollo económico del país.",
  },
  {
    time: "11:00",
    title: "Panel: Productividad e Inteligencia Artificial",
    speaker: "Por confirmar",
    description: "Cómo la IA está transformando la productividad en industrias clave de Chile.",
  },
  {
    time: "14:00",
    title: "Workshop: Innovación Aplicada",
    speaker: "Por confirmar",
    description: "Sesión práctica de metodologías de innovación para startups y corporativos.",
  },
  {
    time: "16:00",
    title: "Expo Startups — Ronda 1",
    speaker: "60+ Startups",
    description: "Primera ronda de exhibición de startups y emprendimientos innovadores.",
  },
];

const day2: TimeSlot[] = [
  {
    time: "09:00",
    title: "Keynote: Tecnología y Crecimiento Sostenible",
    speaker: "Por confirmar",
    description: "El camino hacia un crecimiento económico impulsado por tecnología limpia.",
  },
  {
    time: "10:30",
    title: "Panel: Transferencia Tecnológica Universidad-Empresa",
    speaker: "Por confirmar",
    description: "Casos de éxito en la colaboración entre academia y sector privado.",
  },
  {
    time: "12:00",
    title: "Networking Lunch",
    speaker: "Todos los asistentes",
    description: "Espacio de networking y conexiones estratégicas entre asistentes.",
  },
  {
    time: "14:30",
    title: "Expo Startups — Ronda 2",
    speaker: "60+ Startups",
    description: "Segunda ronda de exhibición con pitch sessions y reuniones 1-a-1.",
  },
  {
    time: "17:00",
    title: "Ceremonia de Cierre y Premiación",
    speaker: "Comité Organizador FIFUC",
    description: "Reconocimientos, conclusiones y cierre oficial del festival.",
  },
];

export default function ProgramSection() {
  const [activeDay, setActiveDay] = useState<1 | 2>(1);
  const schedule = activeDay === 1 ? day1 : day2;

  return (
    <section id="programa" className="py-24 md:py-32 bg-fifuc-navy">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: expo }}
          className="text-center mb-12"
        >
          <p className="text-fifuc-cyan font-medium text-sm tracking-wider uppercase mb-4">
            Programa
          </p>
          <h2
            className="font-display font-bold text-fifuc-white"
            style={{ fontSize: "var(--text-fluid-3xl)" }}
          >
            Agenda del <span className="text-gradient-brand">Festival</span>
          </h2>
        </motion.div>

        {/* Day Toggle */}
        <div className="flex justify-center gap-2 mb-12">
          {([1, 2] as const).map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-6 py-2.5 rounded-full font-display font-semibold text-sm transition-all duration-300 ${
                activeDay === day
                  ? "bg-gradient-brand text-fifuc-navy shadow-lg shadow-fifuc-cyan/20"
                  : "border border-fifuc-white/20 text-fifuc-white/60 hover:border-fifuc-cyan/40 hover:text-fifuc-white"
              }`}
            >
              Día {day} — {day === 1 ? "8 Julio" : "9 Julio"}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: expo }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-[18px] top-0 bottom-0 w-px bg-fifuc-cyan/20 md:left-[22px]" />

            <div className="flex flex-col gap-6">
              {schedule.map((slot, i) => (
                <motion.div
                  key={slot.time + slot.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: expo }}
                  className="relative pl-12 md:pl-14"
                >
                  {/* Dot */}
                  <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-fifuc-cyan shadow-md shadow-fifuc-cyan/40 md:left-3.5 md:w-3.5 md:h-3.5" />

                  <div className="glass rounded-xl p-5 hover:border-fifuc-cyan/30 transition-colors duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-fifuc-cyan" />
                      <span className="text-fifuc-cyan font-display font-semibold text-sm">
                        {slot.time}
                      </span>
                    </div>
                    <h3
                      className="font-display font-semibold text-fifuc-white mb-1"
                      style={{ fontSize: "var(--text-fluid-lg)" }}
                    >
                      {slot.title}
                    </h3>
                    <p className="text-fifuc-yellow/80 text-sm font-medium mb-2">
                      {slot.speaker}
                    </p>
                    <p className="text-fifuc-white/50 text-sm leading-relaxed">
                      {slot.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

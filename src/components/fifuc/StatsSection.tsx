import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { expo } from "@/lib/utils";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { value: 1000, suffix: "+", label: "Asistentes presenciales" },
  { value: 800000, suffix: "+", label: "Visualizaciones por Emol TV" },
  { value: 100, suffix: "+", label: "Startups y emprendimientos" },
  { value: 85, suffix: "%", label: "Generó nuevos contactos" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    let start: number | null = null;
    let frame: number;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const t = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.floor(eased * value));
      if (t < 1) {
        frame = requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [isInView, value]);

  const formatted =
    count >= 1000
      ? count.toLocaleString("es-CL")
      : count.toString();

  return (
    <span ref={ref} className="tabular-nums">
      {formatted}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="relative py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-fifuc-blue/50 font-medium text-sm tracking-wider uppercase mb-12"
        >
          Impacto de ediciones anteriores
        </motion.p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: expo }}
              className="text-center"
            >
              <div
                className="font-display font-bold text-fifuc-navy mb-2"
                style={{ fontSize: "var(--text-fluid-3xl)" }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-fifuc-navy/50 text-sm md:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { expo } from "@/lib/utils";

const partners = [
  "MBA UC",
  "Duoc UC",
  "Centro de Innovación UC Anacleto Angelini",
  "Dirección de Transferencia y Desarrollo UC",
];

export default function PartnersSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-fifuc-navy/40 text-sm tracking-wider uppercase font-medium mb-10"
        >
          Organizan
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {partners.map((partner, i) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: expo }}
              className="px-6 py-3 rounded-xl border border-fifuc-navy/10 bg-fifuc-navy/[0.03] hover:bg-fifuc-navy/[0.06] transition-colors"
            >
              <span className="text-fifuc-navy/60 text-sm font-medium whitespace-nowrap">
                {partner}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

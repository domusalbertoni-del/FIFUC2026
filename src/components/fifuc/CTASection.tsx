import { motion } from "framer-motion";
import { Ticket, ArrowRight } from "lucide-react";
import { expo } from "@/lib/utils";

export default function CTASection() {
  return (
    <section id="registro" className="relative py-28 md:py-36 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-brand opacity-90" />
      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: expo }}
          className="flex flex-col items-center"
        >
          {/* Date reminder */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            8 – 9 JULIO 2026
          </div>

          <h2
            className="font-display font-bold text-white mb-4"
            style={{ fontSize: "var(--text-fluid-3xl)" }}
          >
            Sé parte del futuro
          </h2>
          <p className="text-white/80 mb-10 text-lg max-w-lg">
            Reserva tu lugar en la 8va edición del Festival de Innovación y
            Futuro de la UC. Cupos limitados.
          </p>

          {/* Primary CTA — huge white button */}
          <motion.a
            href="https://toliv.cl"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-3 bg-white text-fifuc-navy px-10 py-5 rounded-full font-display font-bold text-xl shadow-2xl shadow-black/20 hover:shadow-white/20 transition-all duration-300 mb-4"
          >
            <Ticket className="w-6 h-6 transition-transform group-hover:-rotate-12" />
            Compra tu Entrada
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.a>

          <p className="text-white/50 text-xs font-medium tracking-wide mb-6">
            ENTRADA PRESENCIAL + ACCESO STREAMING
          </p>

          <a
            href="mailto:fifuc@uc.cl"
            className="text-white/60 text-sm font-medium hover:text-white transition-colors underline underline-offset-4"
          >
            ¿Dudas? Escríbenos a fifuc@uc.cl
          </a>
        </motion.div>
      </div>
    </section>
  );
}

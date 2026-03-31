import { motion } from "framer-motion";
import { ChevronDown, Ticket } from "lucide-react";
import { expo } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-end justify-center overflow-hidden pb-20 md:pb-28"
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/colision1.jpeg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/colision-movimiento.mp4" type="video/mp4" />
      </video>

      {/* Overlay — darker bottom for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-fifuc-navy via-fifuc-navy/80 to-fifuc-navy/20" />
      <div className="absolute inset-0 bg-fifuc-navy/30" />

      {/* Content — anchored to bottom */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center flex flex-col items-center gap-5">
        {/* Full UC + FIFUC combined logo — centered and prominent */}
        <motion.img
          src="/images/logo-color.png"
          alt="UC — Festival de Innovación y Futuro 2026"
          className="w-[280px] sm:w-[380px] md:w-[480px] lg:w-[560px] h-auto mb-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: expo }}
        />

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: expo, delay: 0.3 }}
          className="font-display font-bold tracking-tight leading-[0.9] text-white"
          style={{ fontSize: "var(--text-fluid-hero)" }}
        >
          CRECIMIENTO{" "}
          <span className="text-gradient-brand">FUTURO</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: expo, delay: 0.5 }}
          className="text-white/80 max-w-xl"
          style={{ fontSize: "var(--text-fluid-lg)" }}
        >
          Ciencia y Tecnología para Impulsar a Chile
        </motion.p>

        {/* Date Block — big, white, unmissable */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: expo, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 mt-2"
        >
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-3">
            <div className="text-center">
              <div className="font-display font-bold text-white text-2xl md:text-3xl leading-none">
                8 – 9
              </div>
              <div className="font-display font-semibold text-fifuc-cyan text-sm md:text-base uppercase tracking-wider">
                Julio 2026
              </div>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div className="text-white/70 text-sm leading-tight">
              Centro de Extensión<br />
              <span className="text-white font-medium">UC Alameda, Santiago</span>
            </div>
          </div>
        </motion.div>

        {/* CTA — Big white button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: expo, delay: 0.85 }}
          className="flex flex-col items-center gap-3 mt-4"
        >
          <motion.a
            href="#registro"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-3 bg-white text-fifuc-navy px-10 py-4 rounded-full font-display font-bold text-lg md:text-xl shadow-2xl shadow-black/30 hover:shadow-fifuc-cyan/20 transition-shadow duration-300"
          >
            <Ticket className="w-5 h-5 transition-transform group-hover:-rotate-12" />
            Compra tu Entrada
          </motion.a>
          <p className="text-white/40 text-xs font-medium tracking-wide">
            CUPOS LIMITADOS — ENTRADA PRESENCIAL
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}

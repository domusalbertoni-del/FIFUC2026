import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Ticket } from "lucide-react";
import { expo } from "@/lib/utils";

export default function StickyTicketBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: expo }}
          className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
        >
          <div className="bg-fifuc-navy-light/95 backdrop-blur-lg border-t border-white/10 px-4 py-3">
            <a
              href="#registro"
              className="flex items-center justify-center gap-2 bg-white text-fifuc-navy w-full py-3.5 rounded-full font-display font-bold shadow-xl"
            >
              <Ticket className="w-4 h-4" />
              Compra tu Entrada — 8-9 Julio
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

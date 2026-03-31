import { expo } from "@/lib/utils";

const footerLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Programa", href: "#programa" },
  { label: "Speakers", href: "#speakers" },
  { label: "Startups", href: "#startups" },
  { label: "Sede", href: "#sede" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/fifuc_uc" },
  { label: "LinkedIn", href: "https://linkedin.com/company/fifuc" },
  { label: "YouTube", href: "https://youtube.com/@fifuc" },
];

export default function Footer() {
  return (
    <footer id="contacto" className="bg-fifuc-navy-light border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <img
              src="/images/logo-white.png"
              alt="UC FIFUC 2026"
              className="h-10 mb-4"
            />
            <p className="text-white/40 text-sm max-w-sm leading-relaxed mb-4">
              Festival de Innovación y Futuro. Organizado por la Pontificia
              Universidad Católica de Chile. 8va edición — 8 y 9 de Julio, 2026.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-fifuc-cyan" />
              8 – 9 Julio 2026 — Santiago, Chile
            </div>
          </div>

          {/* Nav Links */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-4">
              Navegación
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/40 text-sm hover:text-fifuc-cyan transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-4">
              Síguenos
            </h4>
            <ul className="flex flex-col gap-2.5">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 text-sm hover:text-fifuc-cyan transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; 2026 Pontificia Universidad Católica de Chile. Todos los derechos reservados.
          </p>
          <p className="text-white/20 text-xs">
            Powered by{" "}
            <a
              href="https://toliv.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fifuc-cyan/40 hover:text-fifuc-cyan transition-colors"
            >
              Toliv
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

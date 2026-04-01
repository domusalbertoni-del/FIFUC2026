import { useTheme } from "@/lib/ThemeContext";

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
  const { isLight } = useTheme();

  return (
    <footer id="contacto" className={`border-t ${isLight ? "bg-gray-50 border-gray-200" : "bg-fifuc-navy-light border-white/5"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <img
              src="/images/logo-white.png"
              alt="UC FIFUC 2026"
              className={`h-10 mb-4 ${isLight ? "brightness-0" : ""}`}
            />
            <p className={`text-sm max-w-sm leading-relaxed mb-4 ${isLight ? "text-gray-500" : "text-white/40"}`}>
              Festival de Innovación y Futuro. Organizado por la Pontificia
              Universidad Católica de Chile. 8va edición — 8 y 9 de Julio, 2026.
            </p>
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium ${
              isLight
                ? "bg-gray-100 border border-gray-200 text-gray-500"
                : "bg-white/5 border border-white/10 text-white/60"
            }`}>
              <span className="w-1.5 h-1.5 rounded-full bg-fifuc-cyan" />
              8 – 9 Julio 2026 — Santiago, Chile
            </div>
          </div>

          {/* Nav Links */}
          <div>
            <h4 className={`font-display font-semibold text-sm mb-4 ${isLight ? "text-gray-900" : "text-white"}`}>
              Navegación
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`text-sm transition-colors ${
                      isLight ? "text-gray-400 hover:text-fifuc-blue" : "text-white/40 hover:text-fifuc-cyan"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className={`font-display font-semibold text-sm mb-4 ${isLight ? "text-gray-900" : "text-white"}`}>
              Síguenos
            </h4>
            <ul className="flex flex-col gap-2.5">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm transition-colors ${
                      isLight ? "text-gray-400 hover:text-fifuc-blue" : "text-white/40 hover:text-fifuc-cyan"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`mt-12 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${isLight ? "border-gray-200" : "border-white/5"}`}>
          <p className={`text-xs ${isLight ? "text-gray-400" : "text-white/30"}`}>
            &copy; 2026 Pontificia Universidad Católica de Chile. Todos los derechos reservados.
          </p>
          <p className={`text-xs ${isLight ? "text-gray-300" : "text-white/20"}`}>
            Powered by{" "}
            <a
              href="https://toliv.cl"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${isLight ? "text-fifuc-blue/40 hover:text-fifuc-blue" : "text-fifuc-cyan/40 hover:text-fifuc-cyan"}`}
            >
              Toliv
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

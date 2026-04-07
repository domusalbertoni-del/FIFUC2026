import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Ticket, Check, Calendar } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { expo } from "@/lib/utils";
import { useTheme } from "@/lib/ThemeContext";

/* ─── Constants ─── */

const INDUSTRIAS = [
  "Agroindustria",
  "Minería",
  "Energía",
  "Construcción",
  "Manufactura",
  "Transporte y logística",
  "Telecomunicaciones",
  "Tecnología / Software",
  "Banca y finanzas",
  "Retail y consumo masivo",
  "Salud",
  "Educación",
  "Sector público",
  "Consultoría / Servicios profesionales",
  "Medios y entretenimiento",
  "Otro",
];

const TIPOS_CARGO = [
  "Profesional",
  "Jefatura",
  "Gerencia",
  "Dirección / C-level",
  "Fundador/a",
];

const ROLES_EVENTO = [
  "Academia",
  "Ejecutivo/a corporativo",
  "Emprendedor/a",
  "Estudiante",
  "Gobierno / Sector público",
  "Innovación corporativa",
  "Inversionista",
  "Medios / Prensa",
  "ONG / Sociedad civil",
  "Proveedor / Servicios",
  "Startup",
  "Otro",
];

const INTERESES = [
  "Networking",
  "Generar negocios",
  "Levantar inversión",
  "Aprender sobre tendencias",
  "Buscar partners estratégicos",
  "Difusión y visibilidad",
];

const GCAL_BASE = "https://calendar.google.com/calendar/render?action=TEMPLATE";
const GCAL_LOCATION = encodeURIComponent("Centro de Extensión UC Alameda, Av. Libertador Bernardo O'Higgins 390, Santiago, Chile");
const GCAL_DETAILS = encodeURIComponent("8vo Festival de Innovación y Futuro UC\nMás info: fifuc.cl");
const GCAL_DAY1 = `${GCAL_BASE}&text=${encodeURIComponent("FIFUC 2026 – Día 1")}&dates=20260708T083000/20260708T180000&location=${GCAL_LOCATION}&details=${GCAL_DETAILS}&ctz=America/Santiago`;
const GCAL_DAY2 = `${GCAL_BASE}&text=${encodeURIComponent("FIFUC 2026 – Día 2")}&dates=20260709T083000/20260709T180000&location=${GCAL_LOCATION}&details=${GCAL_DETAILS}&ctz=America/Santiago`;

/* ─── Types ─── */

interface FormData {
  nombre: string;
  apellido: string;
  correo: string;
  whatsapp: string;
  organizacion: string;
  cargo: string;
  tipoCargo: string;
  industria: string;
  diasEvento: string;
  rolEvento: string;
  intereses: string[];
  esAuspiciador: boolean;
  autorizaWhatsapp: boolean;
}

interface FormErrors {
  [key: string]: string;
}

const initialForm: FormData = {
  nombre: "",
  apellido: "",
  correo: "",
  whatsapp: "",
  organizacion: "",
  cargo: "",
  tipoCargo: "",
  industria: "",
  diasEvento: "ambos",
  rolEvento: "",
  intereses: [],
  esAuspiciador: false,
  autorizaWhatsapp: false,
};

/* ─── Validation ─── */

function validate(data: FormData): FormErrors {
  const err: FormErrors = {};
  if (!data.nombre.trim()) err.nombre = "Ingresa tu nombre";
  if (!data.apellido.trim()) err.apellido = "Ingresa tu apellido";
  if (!data.correo.trim()) {
    err.correo = "Ingresa tu correo";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.correo)) {
    err.correo = "Correo no válido";
  }
  if (!data.whatsapp.trim()) {
    err.whatsapp = "Ingresa tu WhatsApp";
  } else if (!/^\+?\d[\d\s\-]{6,}$/.test(data.whatsapp.trim())) {
    err.whatsapp = "Formato: +56 9 1234 5678";
  }
  if (!data.organizacion.trim()) err.organizacion = "Ingresa tu organización";
  if (!data.cargo.trim()) err.cargo = "Ingresa tu cargo";
  if (!data.tipoCargo) err.tipoCargo = "Selecciona tipo de cargo";
  if (!data.industria) err.industria = "Selecciona una industria";
  if (!data.rolEvento) err.rolEvento = "Selecciona tu rol";
  if (data.intereses.length === 0) err.intereses = "Selecciona al menos un interés";
  return err;
}

/* ─── Theme styles ─── */

const dark = {
  input: "w-full bg-fifuc-navy-light/80 border border-white/10 rounded-lg px-4 py-3.5 text-white text-sm font-medium placeholder-white/30 outline-none transition-all duration-200 focus:border-fifuc-cyan/60 focus:bg-fifuc-navy-light",
  select: "w-full bg-fifuc-navy-light/80 border border-white/10 rounded-lg px-4 py-3.5 text-white text-sm font-medium outline-none transition-all duration-200 focus:border-fifuc-cyan/60 focus:bg-fifuc-navy-light appearance-none cursor-pointer",
  selectEmpty: "text-white/30",
  option: "text-gray-900 bg-white",
  err: "text-red-400 text-[11px] mt-1 pl-1",
  errBorder: "!border-red-400/60",
  dayActive: "bg-fifuc-cyan/15 border-fifuc-cyan text-fifuc-cyan",
  dayInactive: "bg-fifuc-navy-light/80 border-white/10 text-white/40 hover:border-white/20 hover:text-white/60",
  chipActive: "bg-fifuc-cyan/15 border-fifuc-cyan text-fifuc-cyan",
  chipInactive: "bg-fifuc-navy-light/80 border-white/10 text-white/40 hover:border-white/20",
  chipLabel: "text-white/30",
  checkbox: "border-white/20 bg-fifuc-navy-light accent-[#00D4FF]",
  checkboxText: "text-white/40 group-hover:text-white/60",
  note: "text-white/25",
  submit: "bg-fifuc-cyan/80 hover:bg-fifuc-cyan/90 text-fifuc-navy shadow-fifuc-cyan/15",
  privacy: "text-white/25",
  heading: "text-white",
  subheading: "text-white/60",
  card: "",
  successIcon: "bg-fifuc-cyan/15 border-fifuc-cyan/30",
  successIconColor: "text-fifuc-cyan",
  successText: "text-white/50",
  summaryBg: "bg-white/5",
  summaryLabel: "text-white/30",
  summaryValue: "text-white/80",
  link: "text-white/30 hover:text-white/60",
};

const light = {
  input: "w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 text-fifuc-navy text-sm font-medium placeholder-gray-400 outline-none transition-all duration-200 focus:border-fifuc-blue/60 focus:bg-white focus:ring-2 focus:ring-fifuc-blue/10",
  select: "w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 text-fifuc-navy text-sm font-medium outline-none transition-all duration-200 focus:border-fifuc-blue/60 focus:bg-white focus:ring-2 focus:ring-fifuc-blue/10 appearance-none cursor-pointer",
  selectEmpty: "text-gray-400",
  option: "",
  err: "text-red-500 text-[11px] mt-1 pl-1",
  errBorder: "!border-red-400",
  dayActive: "bg-fifuc-blue/10 border-fifuc-blue text-fifuc-blue shadow-sm",
  dayInactive: "bg-gray-50 border-gray-200 text-gray-400 hover:border-gray-300 hover:text-gray-500",
  chipActive: "bg-fifuc-blue/10 border-fifuc-blue text-fifuc-blue",
  chipInactive: "bg-gray-50 border-gray-200 text-gray-400 hover:border-gray-300",
  chipLabel: "text-gray-400",
  checkbox: "border-gray-300 bg-gray-50 accent-fifuc-blue",
  checkboxText: "text-gray-500 group-hover:text-gray-700",
  note: "text-gray-400",
  submit: "bg-fifuc-navy hover:bg-fifuc-navy/90 text-white shadow-fifuc-navy/15",
  privacy: "text-gray-400",
  heading: "text-fifuc-navy",
  subheading: "text-gray-500",
  card: "bg-white rounded-2xl p-6 md:p-8 shadow-2xl shadow-black/10",
  successIcon: "bg-green-50 border-green-200",
  successIconColor: "text-green-600",
  successText: "text-gray-500",
  summaryBg: "bg-gray-50 border border-gray-100",
  summaryLabel: "text-gray-400",
  summaryValue: "text-fifuc-navy",
  link: "text-gray-400 hover:text-fifuc-blue",
};

/* ─── Component ─── */

export default function RegistrationSection() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const { isLight } = useTheme();

  const t = isLight ? light : dark;

  const updateField = (field: keyof FormData, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const toggleInterest = (interest: string) => {
    setForm((prev) => ({
      ...prev,
      intereses: prev.intereses.includes(interest)
        ? prev.intereses.filter((i) => i !== interest)
        : [...prev.intereses, interest],
    }));
    if (errors.intereses) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.intereses;
        return next;
      });
    }
  };

  const handleSubmit = () => {
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  const qrPayload = JSON.stringify({
    n: form.nombre,
    a: form.apellido,
    e: form.correo,
    o: form.organizacion,
    d: form.diasEvento,
  });

  return (
    <section id="registro" className="relative py-24 md:py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-brand opacity-90" />
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-lg md:max-w-3xl mx-auto px-4">
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: expo }}
              className={t.card}
            >
              {/* Header */}
              <div className="text-center mb-10">
                <h2
                  className={`font-display font-bold mb-3 ${t.heading}`}
                  style={{ fontSize: "var(--text-fluid-3xl)" }}
                >
                  Regístrate y asegura tu lugar.
                </h2>
                <p className={`text-base ${t.subheading}`}>
                  Completa tus datos para la 8va edición del FIFUC.
                </p>
              </div>

              {/* Fields */}
              <div className="space-y-3">
                {/* Name row */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <input type="text" value={form.nombre} onChange={(e) => updateField("nombre", e.target.value)} placeholder="NOMBRE" className={`${t.input} ${errors.nombre ? t.errBorder : ""}`} />
                    {errors.nombre && <p className={t.err}>{errors.nombre}</p>}
                  </div>
                  <div>
                    <input type="text" value={form.apellido} onChange={(e) => updateField("apellido", e.target.value)} placeholder="APELLIDO" className={`${t.input} ${errors.apellido ? t.errBorder : ""}`} />
                    {errors.apellido && <p className={t.err}>{errors.apellido}</p>}
                  </div>
                </div>

                {/* Org */}
                <div>
                  <input type="text" value={form.organizacion} onChange={(e) => updateField("organizacion", e.target.value)} placeholder="ORGANIZACIÓN / EMPRESA" className={`${t.input} ${errors.organizacion ? t.errBorder : ""}`} />
                  {errors.organizacion && <p className={t.err}>{errors.organizacion}</p>}
                </div>

                {/* Cargo + Tipo */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <input type="text" value={form.cargo} onChange={(e) => updateField("cargo", e.target.value)} placeholder="CARGO" className={`${t.input} ${errors.cargo ? t.errBorder : ""}`} />
                    {errors.cargo && <p className={t.err}>{errors.cargo}</p>}
                  </div>
                  <div>
                    <select value={form.tipoCargo} onChange={(e) => updateField("tipoCargo", e.target.value)} className={`${t.select} ${!form.tipoCargo ? t.selectEmpty : ""} ${errors.tipoCargo ? t.errBorder : ""}`}>
                      <option value="" disabled>TIPO CARGO</option>
                      {TIPOS_CARGO.map((v) => (<option key={v} value={v} className={t.option}>{v}</option>))}
                    </select>
                    {errors.tipoCargo && <p className={t.err}>{errors.tipoCargo}</p>}
                  </div>
                </div>

                {/* Phone + Email */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <input type="tel" value={form.whatsapp} onChange={(e) => updateField("whatsapp", e.target.value)} placeholder="WHATSAPP" className={`${t.input} ${errors.whatsapp ? t.errBorder : ""}`} />
                    {errors.whatsapp && <p className={t.err}>{errors.whatsapp}</p>}
                  </div>
                  <div>
                    <input type="email" value={form.correo} onChange={(e) => updateField("correo", e.target.value)} placeholder="E-MAIL" className={`${t.input} ${errors.correo ? t.errBorder : ""}`} />
                    {errors.correo && <p className={t.err}>{errors.correo}</p>}
                  </div>
                </div>

                {/* Industria + Rol */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <select value={form.industria} onChange={(e) => updateField("industria", e.target.value)} className={`${t.select} ${!form.industria ? t.selectEmpty : ""} ${errors.industria ? t.errBorder : ""}`}>
                      <option value="" disabled>INDUSTRIA</option>
                      {INDUSTRIAS.map((v) => (<option key={v} value={v} className={t.option}>{v}</option>))}
                    </select>
                    {errors.industria && <p className={t.err}>{errors.industria}</p>}
                  </div>
                  <div>
                    <select value={form.rolEvento} onChange={(e) => updateField("rolEvento", e.target.value)} className={`${t.select} ${!form.rolEvento ? t.selectEmpty : ""} ${errors.rolEvento ? t.errBorder : ""}`}>
                      <option value="" disabled>ROL EN EVENTO</option>
                      {ROLES_EVENTO.map((v) => (<option key={v} value={v} className={t.option}>{v}</option>))}
                    </select>
                    {errors.rolEvento && <p className={t.err}>{errors.rolEvento}</p>}
                  </div>
                </div>

                {/* Interests — chips */}
                <div className="pt-1">
                  <p className={`text-[11px] font-semibold tracking-widest uppercase mb-2 ${t.chipLabel}`}>
                    Interés de participación
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {INTERESES.map((interest) => {
                      const selected = form.intereses.includes(interest);
                      return (
                        <button key={interest} type="button" onClick={() => toggleInterest(interest)} className={`px-3 py-1.5 rounded-full text-[11px] font-semibold transition-all duration-200 border cursor-pointer ${selected ? t.chipActive : t.chipInactive}`}>
                          {selected && <Check className="w-3 h-3 inline mr-0.5 -mt-px" />}
                          {interest}
                        </button>
                      );
                    })}
                  </div>
                  {errors.intereses && <p className={t.err}>{errors.intereses}</p>}
                </div>

                {/* Checkboxes */}
                <div className="space-y-2 pt-1">
                  <label className="flex items-center gap-2.5 cursor-pointer group">
                    <input type="checkbox" checked={form.esAuspiciador} onChange={(e) => updateField("esAuspiciador", e.target.checked)} className={`w-3.5 h-3.5 rounded cursor-pointer ${t.checkbox}`} />
                    <span className={`text-xs transition-colors ${t.checkboxText}`}>
                      Me interesa ser auspiciador/patrocinador
                    </span>
                  </label>
                  <label className="flex items-center gap-2.5 cursor-pointer group">
                    <input type="checkbox" checked={form.autorizaWhatsapp} onChange={(e) => updateField("autorizaWhatsapp", e.target.checked)} className={`w-3.5 h-3.5 rounded cursor-pointer ${t.checkbox}`} />
                    <span className={`text-xs transition-colors ${t.checkboxText}`}>
                      Autorizo recibir información del evento por WhatsApp
                    </span>
                  </label>
                </div>
              </div>

              {/* Obligatory note */}
              <p className={`text-[11px] text-right tracking-wide mt-4 mb-5 ${t.note}`}>
                TODOS LOS CAMPOS SON OBLIGATORIOS
              </p>

              {/* Submit */}
              <motion.button
                type="button"
                onClick={handleSubmit}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className={`w-full flex items-center justify-center gap-2.5 py-4 rounded-lg font-display font-bold text-sm tracking-wide shadow-lg transition-colors cursor-pointer ${t.submit}`}
              >
                <Ticket className="w-4 h-4" />
                REGISTRARME
              </motion.button>

              {/* Privacy + Terms */}
              <p className={`text-[10px] text-center mt-4 leading-relaxed ${t.privacy}`}>
                Al registrarte, aceptas los{" "}
                <a
                  href="https://toliv.cl/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:opacity-80"
                >
                  Términos y Condiciones
                </a>{" "}
                de Toliv. Tus datos están protegidos y se emplearán solo para la participación en el evento.
              </p>
            </motion.div>
          ) : (
            /* ─── Success / QR ─── */
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: expo }}
              className={`text-center ${isLight ? "bg-white rounded-2xl p-8 shadow-2xl shadow-black/10" : ""}`}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                className={`w-14 h-14 rounded-full border flex items-center justify-center mx-auto mb-5 ${t.successIcon}`}
              >
                <Check className={`w-7 h-7 ${t.successIconColor}`} />
              </motion.div>

              <h3 className={`font-display font-bold mb-2 ${t.heading}`} style={{ fontSize: "var(--text-fluid-xl)" }}>
                ¡Tu entrada ha sido registrada!
              </h3>
              <p className={`text-sm mb-8 max-w-xs mx-auto ${t.successText}`}>
                Presenta este QR en la entrada del evento. También lo recibirás por correo.
              </p>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.25, duration: 0.5, ease: expo }}
                className={`inline-block rounded-2xl p-5 shadow-2xl mb-8 ${isLight ? "bg-gray-50 border border-gray-100 shadow-gray-200/50" : "bg-white shadow-black/30"}`}
              >
                <QRCodeSVG value={qrPayload} size={170} level="M" bgColor={isLight ? "#F9FAFB" : "#FFFFFF"} fgColor="#040D21" />
              </motion.div>

              <div className={`rounded-xl p-4 text-left space-y-1.5 max-w-sm mx-auto ${t.summaryBg}`}>
                <Row label="Nombre" value={`${form.nombre} ${form.apellido}`} t={t} />
                <Row label="Correo" value={form.correo} t={t} />
                <Row label="Organización" value={form.organizacion} t={t} />
                <Row label="Día(s)" value="8 – 9 julio 2026" t={t} />
              </div>

              <p className={`text-xs mt-4 ${t.successText}`}>
                Tu ticket sirve para ambos días
              </p>

              {/* Google Calendar buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-5">
                <a
                  href={GCAL_DAY1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 border ${t.dayActive}`}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  Día 1 — 8 julio
                </a>
                <a
                  href={GCAL_DAY2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 border ${t.dayActive}`}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  Día 2 — 9 julio
                </a>
              </div>
              <p className={`text-[11px] mt-1.5 ${t.note}`}>Agregar a Google Calendar</p>

              <a href="https://fifuc.cl" target="_blank" rel="noopener noreferrer" className={`inline-block mt-6 text-xs transition-colors underline underline-offset-4 ${t.link}`}>
                ¿Problemas? fifuc.cl
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function Row({ label, value, t }: { label: string; value: string; t: { summaryLabel: string; summaryValue: string } }) {
  return (
    <div className="flex justify-between items-baseline gap-3">
      <span className={`text-xs shrink-0 ${t.summaryLabel}`}>{label}</span>
      <span className={`text-sm text-right ${t.summaryValue}`}>{value}</span>
    </div>
  );
}

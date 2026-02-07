"use client";
import { useMemo, useState } from "react";
import { z } from "zod";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";
type ContactFormData = {
  nombre: string;
  email: string;
  telefono?: string;
  especialidad: "nariz" | "oido" | "garganta" | "general";
  conocePadecimiento?:
    | "no"
    | "sinusitis"
    | "ronquidos"
    | "apnea del sueno"
    | "transtornos de la voz"
    | "congestion nasal"
    | "veertigo y mareo"
    | "perdida de audicion";
  mensaje: string;
};

export default function ContactPage() {
  const { t, i18n } = useTranslation();
  const contactSchema = useMemo(
    () =>
      z.object({
        nombre: z.string().min(1, t("El nombre es requerido")),
        email: z.string().email(t("Correo electrónico inválido")),
        telefono: z.string().optional(),
        especialidad: z.enum(["nariz", "oido", "garganta", "general"]),
        conocePadecimiento: z
          .enum([
            "no",
            "sinusitis",
            "ronquidos",
            "apnea del sueno",
            "transtornos de la voz",
            "congestion nasal",
            "veertigo y mareo",
            "perdida de audicion",
          ])
          .optional(),
        mensaje: z.string().min(1, t("El mensaje es requerido")),
      }),
    [i18n.language, t]
  );
  const [formData, setFormData] = useState<ContactFormData>({
    nombre: "",
    email: "",
    telefono: "",
    especialidad: "" as ContactFormData["especialidad"],
    conocePadecimiento: "" as ContactFormData["conocePadecimiento"],
    mensaje: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name as keyof ContactFormData]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({}); // Limpiar errores previos

    // Validación manual antes de usar Zod
    let hasError = false;
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = t("El nombre es requerido");
      hasError = true;
    }

    if (!formData.email.trim()) {
      newErrors.email = t("El correo electrónico es requerido");
      hasError = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t("Correo electrónico inválido");
      hasError = true;
    }

    if (!formData.especialidad) {
      newErrors.especialidad = t("Por favor selecciona una especialidad");
      hasError = true;
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = t("El mensaje es requerido");
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      toast.error(t("Por favor, corrige los errores en el formulario."));
      setIsSubmitting(false);
      return; // Detener el envío si hay errores
    }

    try {
      // Crear un objeto con los datos en el formato correcto para Zod
      const dataForValidation = {
        nombre: formData.nombre,
        email: formData.email,
        telefono: formData.telefono || undefined,
        especialidad: formData.especialidad as
          | "nariz"
          | "oido"
          | "garganta"
          | "general",
        conocePadecimiento: formData.conocePadecimiento || undefined,
        mensaje: formData.mensaje,
      };

      // Validar con Zod (validación adicional para el backend)
      const validatedData = contactSchema.parse(dataForValidation);

      // Enviar datos al servidor
      const response = await axios.post(
        "https://drlumban.com/api/contact",
        validatedData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Mostrar toast de éxito
      toast.success(
        t(
          "Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto."
        )
      );

      // Resetear formulario
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        especialidad: "" as ContactFormData["especialidad"],
        conocePadecimiento: "" as ContactFormData["conocePadecimiento"],
        mensaje: "",
      });

      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Este error no debería ocurrir si la validación manual fue exitosa
        console.error("Error de validación Zod inesperado:", error);
        toast.error(
          t("Error en la validación de datos. Por favor, intenta nuevamente.")
        );
      } else if (axios.isAxiosError(error)) {
        // Manejar errores de Axios
        console.error("Error al enviar el formulario:", error);
        toast.error(
          error.response?.data?.message ||
            t("Error al enviar el mensaje. Por favor, intenta nuevamente.")
        );
      } else {
        // Manejar otros errores
        console.error("Error inesperado:", error);
        toast.error(
          t("Ocurrió un error inesperado. Por favor, intenta nuevamente.")
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            {t("Contáctanos")}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("Agenda tu cita con el Dr. Lumbán o envíanos tus dudas")}
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Info Cards */}

            {/* Map Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="h-96 md:h-[610px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.8822268706056!2d-117.02573584883764!3d32.53185422267431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d948519ab1c2d5%3A0x6c47ea1f6d5a92ab!2sOtorrinolaringologo%20Dr.%20Lumban!5e0!3m2!1ses-419!2smx!4v1762983205886!5m2!1ses-419!2smx"
                  width="100%"
                  height="100%"
                  className="border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  RIO MEDICA
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {t("Leona Vicario 1451, Zona Urbana Rio Tijuana")}
                  <br />
                  {t("22010 Tijuana, B.C.")}
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400 text-sm">
                    ★★★★<span className="text-gray-300">★</span>
                  </div>
                  <span className="text-xs text-gray-500">
                    {t("4.6 (86 opiniones)")}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                {t("Agenda tu Cita")}
              </h2>
              <p className="text-gray-600 mb-8">
                {t(
                  "Completa el formulario y nos pondremos en contacto contigo a la brevedad"
                )}
              </p>

              <div className="space-y-6">
                {/* Name and Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="nombre"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      {t("Nombre completo")} <span className="text-azul">*</span>
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-azul focus:border-transparent ${
                        errors.nombre ? "border-azul" : "border-gray-300"
                      }`}
                      placeholder={t("Escribe tu nombre completo")}
                    />
                    {errors.nombre && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.nombre}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      {t("Correo electrónico")} <span className="text-azul">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-azul focus:border-transparent ${
                        errors.email ? "border-azul" : "border-gray-300"
                      }`}
                      placeholder={t("Ingresa tu correo electrónico")}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="telefono"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    {t("Teléfono")}
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azul focus:border-transparent"
                    placeholder={t("Ej: +52 664 123 4567")}
                  />
                </div>

                {/* Specialty and Knowledge */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="especialidad"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      {t("Deseo atenderme de")} <span className="text-azul">*</span>
                    </label>
                    <select
                      id="especialidad"
                      name="especialidad"
                      required
                      value={formData.especialidad}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-azul focus:border-transparent ${
                        errors.especialidad ? "border-azul" : "border-gray-300"
                      }`}
                    >
                      <option value="">{t("Selecciona una opción")}</option>
                      <option value="nariz">{t("Nariz")}</option>
                      <option value="oido">{t("Oído")}</option>
                      <option value="garganta">{t("Garganta")}</option>
                      <option value="general">{t("Consulta general")}</option>
                    </select>
                    {errors.especialidad && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.especialidad}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="conocePadecimiento"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      {t("¿Conoce su padecimiento?")}
                    </label>
                    <select
                      id="conocePadecimiento"
                      name="conocePadecimiento"
                      value={formData.conocePadecimiento}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azul focus:border-transparent"
                    >
                      <option value="">{t("Selecciona una opción")}</option>
                      <option value="no">{t("No lo conozco")}</option>
                      <option value="sinusitis">{t("Sinusitis")}</option>
                      <option value="ronquidos">{t("Ronquidos")}</option>
                      <option value="apnea del sueno">{t("Apnea del sueño")}</option>
                      <option value="transtornos de la voz">
                        {t("Trastornos de la voz")}
                      </option>
                      <option value="congestion nasal">{t("Congestión nasal")}</option>
                      <option value="veertigo y mareo">{t("Vértigo y mareo")}</option>
                      <option value="perdida de audicion">
                        {t("Pérdida de audición")}
                      </option>
                      <option value="rinoplastia">{t("Rinoplastia")}</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="mensaje"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    {t("Mensaje")} <span className="text-azul">*</span>
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={6}
                    required
                    value={formData.mensaje}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-azul focus:border-transparent resize-none ${
                      errors.mensaje ? "border-azul" : "border-gray-300"
                    }`}
                    placeholder={t(
                      "Describa brevemente el motivo de su consulta o cualquier información adicional que considere importante"
                    )}
                  />
                  {errors.mensaje && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.mensaje}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className={`bg-azul text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-md hover:shadow-lg ${
                      isSubmitting
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-azul/90"
                    }`}
                  >
                    {isSubmitting ? t("Enviando...") : t("Enviar mensaje")}
                  </button>
                  <p className="text-xs text-gray-500">
                    <span className="text-azul">*</span> {t("Campos requeridos")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Toaster position="top-right" />
      </div>
    </div>
  );
}

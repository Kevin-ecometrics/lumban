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
    | "perdida de audicion"
    | "rinoplastia";
  mensaje: string;
};

export default function ContactPage() {
  const { t, i18n } = useTranslation();

  const contactSchema = useMemo(
    () =>
      z.object({
        nombre: z.string().min(1, t("contact.error_name_required")),
        email: z.string().email(t("contact.error_email_invalid")),
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
            "rinoplastia",
          ])
          .optional(),
        mensaje: z.string().min(1, t("contact.error_message_required")),
      }),
    [i18n.language, t],
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
    >,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

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
    setErrors({});

    let hasError = false;
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = t("contact.error_name_required");
      hasError = true;
    }

    if (!formData.email.trim()) {
      newErrors.email = t("contact.error_email_required");
      hasError = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t("contact.error_email_invalid");
      hasError = true;
    }

    if (!formData.especialidad) {
      newErrors.especialidad = t("contact.error_specialty_required");
      hasError = true;
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = t("contact.error_message_required");
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      toast.error(t("contact.error_form_correction"));
      setIsSubmitting(false);
      return;
    }

    try {
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

      const validatedData = contactSchema.parse(dataForValidation);

      await axios.post("https://drlumban.com/api/contact", validatedData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      toast.success(t("contact.success_message"));

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
        console.error("Zod validation error:", error);
        toast.error(t("contact.error_validation"));
      } else if (axios.isAxiosError(error)) {
        console.error("Axios error:", error);
        toast.error(error.response?.data?.message || t("contact.error_send"));
      } else {
        console.error("Unexpected error:", error);
        toast.error(t("contact.error_unexpected"));
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
            {t("contact.title")}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-2 space-y-6">
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
                  {t("contact.map_title")}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {t("contact.map_address")}
                  <br />
                  {t("contact.map_city")}
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400 text-sm">
                    ★★★★<span className="text-gray-300">★</span>
                  </div>
                  <span className="text-xs text-gray-500">
                    {t("contact.map_rating")}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                {t("contact.form_title")}
              </h2>
              <p className="text-gray-600 mb-8">{t("contact.form_subtitle")}</p>

              <div className="space-y-6">
                {/* Name and Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="nombre"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      {t("contact.label_name")}{" "}
                      <span className="text-azul">*</span>
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
                      placeholder={t("contact.placeholder_name")}
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
                      {t("contact.label_email")}{" "}
                      <span className="text-azul">*</span>
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
                      placeholder={t("contact.placeholder_email")}
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
                    {t("contact.label_phone")}
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azul focus:border-transparent"
                    placeholder={t("contact.placeholder_phone")}
                  />
                </div>

                {/* Specialty and Condition */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="especialidad"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      {t("contact.label_specialty")}{" "}
                      <span className="text-azul">*</span>
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
                      <option value="">{t("contact.select_option")}</option>
                      <option value="nariz">
                        {t("contact.select_specialty_nariz")}
                      </option>
                      <option value="oido">
                        {t("contact.select_specialty_oido")}
                      </option>
                      <option value="garganta">
                        {t("contact.select_specialty_garganta")}
                      </option>
                      <option value="general">
                        {t("contact.select_specialty_general")}
                      </option>
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
                      {t("contact.label_condition")}
                    </label>
                    <select
                      id="conocePadecimiento"
                      name="conocePadecimiento"
                      value={formData.conocePadecimiento}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azul focus:border-transparent"
                    >
                      <option value="">{t("contact.select_option")}</option>
                      <option value="no">
                        {t("contact.select_condition_no")}
                      </option>
                      <option value="sinusitis">
                        {t("contact.select_condition_sinusitis")}
                      </option>
                      <option value="ronquidos">
                        {t("contact.select_condition_snoring")}
                      </option>
                      <option value="apnea del sueno">
                        {t("contact.select_condition_apnea")}
                      </option>
                      <option value="transtornos de la voz">
                        {t("contact.select_condition_voice")}
                      </option>
                      <option value="congestion nasal">
                        {t("contact.select_condition_congestion")}
                      </option>
                      <option value="veertigo y mareo">
                        {t("contact.select_condition_vertigo")}
                      </option>
                      <option value="perdida de audicion">
                        {t("contact.select_condition_hearing_loss")}
                      </option>
                      <option value="rinoplastia">
                        {t("contact.select_condition_rhinoplasty")}
                      </option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="mensaje"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    {t("contact.label_message")}{" "}
                    <span className="text-azul">*</span>
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
                    placeholder={t("contact.placeholder_message")}
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
                    {isSubmitting
                      ? t("contact.button_submitting")
                      : t("contact.button_submit")}
                  </button>
                  <p className="text-xs text-gray-500">
                    <span className="text-azul">*</span>{" "}
                    {t("contact.required_fields")}
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

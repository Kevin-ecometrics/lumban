"use client";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaLock, FaWhatsapp } from "react-icons/fa6";
import { z } from "zod";
import JsonLdFaq from "@components/JsonLdFaq";

const contactSchema = z.object({
  nombre: z.string().min(2, "Mínimo 2 caracteres").max(100, "Máximo 100 caracteres"),
  email: z.string().email("Correo electrónico inválido"),
  telefono: z.string().max(20, "Máximo 20 caracteres").optional().or(z.literal("")),
  mensaje: z.string().min(10, "Mínimo 10 caracteres").max(1000, "Máximo 1000 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;
type FormErrors = Partial<Record<keyof ContactFormData, string>>;

export default function ContactPage() {
  const { t } = useTranslation();
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const [formData, setFormData] = useState<ContactFormData>({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name as keyof ContactFormData]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: FormErrors = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof ContactFormData;
        if (!fieldErrors[field]) fieldErrors[field] = issue.message;
      }
      setErrors(fieldErrors);
      toast.error(t("contact.error_form_correction"));
      setIsSubmitting(false);
      return;
    }

    const captchaToken = recaptchaRef.current?.getValue();
    if (!captchaToken) {
      toast.error("Por favor completa el captcha");
      setIsSubmitting(false);
      return;
    }

    try {
      await fetch("https://drlumban.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.email,
          telefono: formData.telefono || undefined,
          especialidad: "general",
          mensaje: formData.mensaje,
          captchaToken,
        }),
      });

      toast.success(t("contact.success_message"));
      setFormData({ nombre: "", email: "", telefono: "", mensaje: "" });
      setErrors({});
      recaptchaRef.current?.reset();
    } catch {
      toast.error(t("contact.error_send"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <JsonLdFaq
        questions={[
          { questionKey: "home.faq.question1", answerKey: "home.faq.answer1" },
          { questionKey: "home.faq.question2", answerKey: "home.faq.answer2" },
          { questionKey: "home.faq.question3", answerKey: "home.faq.answer3" },
          { questionKey: "home.faq.question4", answerKey: "home.faq.answer4" },
        ]}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            {t("contact.title")}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d567.2420416371925!2d-117.02496789895783!3d32.53131455821253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d948519ab1c2d5%3A0x6c47ea1f6d5a92ab!2sOtorrinolaringologo%20Dr.%20Lumban!5e0!3m2!1ses!2smx!4v1776874884979!5m2!1ses!2smx"
                width="100%"
                height="100%"
                className="border-0"
                allowFullScreen
                loading="eager"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Dr. Jaime Lumbán"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {t("contact.map_title")}
              </h3>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-9 h-9 bg-azul/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-azul"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-md font-semibold text-gray-900 mb-2">
                      {t("contact.info_phone_label")}
                    </p>

                    <div className="flex flex-col gap-2">
                      <a
                        href="tel:+526646842364"
                        className="group flex items-center gap-2 px-3 py-2 bg-gray-50 hover:bg-azul/5 rounded-lg transition-colors"
                      >
                        <span className="text-lg">🇲🇽</span>
                        <span className="text-md text-azul group-hover:underline">
                          664 684 2364
                        </span>
                        <span className="text-xs text-gray-400">(MX)</span>
                      </a>

                      <a
                        href="tel:+526646388135"
                        className="group flex items-center gap-2 px-3 py-2 bg-gray-50 hover:bg-azul/5 rounded-lg transition-colors"
                      >
                        <span className="text-lg">🇲🇽</span>
                        <span className="text-md text-azul group-hover:underline">
                          664 638 8135
                        </span>
                        <span className="text-xs text-gray-400">(MX)</span>
                      </a>

                      <a
                        href="tel:+16197137722"
                        className="group flex items-center gap-2 px-3 py-2 bg-gray-50 hover:bg-azul/5 rounded-lg transition-colors"
                      >
                        <span className="text-lg">🇺🇸</span>
                        <span className="text-md text-azul group-hover:underline">
                          619 713 7722
                        </span>
                        <span className="text-xs text-gray-400">(US)</span>
                      </a>
                    </div>

                    <p className="text-sm text-gray-500 mt-2">
                      {t("contact.info_phone_note")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-9 h-9 bg-azul/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-azul"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-md font-semibold text-gray-900 mb-0.5">
                      {t("contact.info_schedule_label")}
                    </p>
                    <p className="text-md text-gray-600">
                      {t("contact.info_schedule_weekdays")}
                    </p>
                    <p className="text-md text-gray-600">
                      {t("contact.info_schedule_saturday")}
                    </p>
                    <p className="text-md text-gray-400">
                      {t("contact.info_schedule_sunday")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-9 h-9 bg-azul/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-azul"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-md font-semibold text-gray-900 mb-0.5">
                      Email
                    </p>
                    <a
                      href="mailto:contacto@drlumban.com"
                      className="text-md text-azul hover:underline"
                    >
                      contacto@drlumban.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-9 h-9 bg-azul/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-azul"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-md font-semibold text-gray-900 mb-0.5">
                      {t("contact.info_address_label")}
                    </p>
                    <p className="text-md text-gray-600">
                      Leona Vicario 1451, Zona Urbana Rio
                    </p>
                    <p className="text-md text-gray-600">22010 Tijuana, B.C.</p>
                  </div>
                </div>
                <a
                  href="https://www.google.com/maps/dir//Otorrinolaringologo+Dr.+Lumban,+Leona+Vicario+1451,+Zona+Urbana+Rio+Tijuana,+22010+Tijuana,+B.C./@32.5313301,-117.0255576,20z/data=!3m1!5s0x80d94855df4f99ab:0x77da01b122ffdd27!4m17!1m7!3m6!1s0x80d948519ab1c2d5:0x6c47ea1f6d5a92ab!2sOtorrinolaringologo+Dr.+Lumban!8m2!3d32.5314167!4d-117.0253995!16s%2Fg%2F1tgwsk28!4m8!1m0!1m5!1m1!1s0x80d948519ab1c2d5:0x6c47ea1f6d5a92ab!2m2!1d-117.0253995!2d32.5314167!3e0?entry=ttu&g_ep=EgoyMDI2MDQxOS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-azul text-white py-2.5 px-4 rounded-xl transition-colors hover:bg-azul/90 text-sm font-medium mt-5"
                >
                  <FaMapMarkerAlt className="w-4 h-4" />
                  {t("contact.get_directions")}
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl border border-gray-100 p-6 lg:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {t("contact.form_title")}
            </h2>
            <p className="text-gray-600 mb-5">{t("contact.form_subtitle")}</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="nombre"
                    className="block text-sm font-semibold text-gray-700 mb-1.5"
                  >
                    {t("contact.label_name")}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-azul focus:border-transparent transition-all ${errors.nombre ? "border-red-500 bg-red-50" : "border-gray-200 hover:border-gray-300"}`}
                    placeholder={t("contact.placeholder_name")}
                  />
                  {errors.nombre && (
                    <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-1.5"
                  >
                    {t("contact.label_email")}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-azul focus:border-transparent transition-all ${errors.email ? "border-red-500 bg-red-50" : "border-gray-200 hover:border-gray-300"}`}
                    placeholder={t("contact.placeholder_email")}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label
                    htmlFor="telefono"
                    className="block text-sm font-semibold text-gray-700 mb-1.5"
                  >
                    {t("contact.label_phone")}
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 hover:border-gray-300 rounded-xl focus:ring-2 focus:ring-azul focus:border-transparent transition-all"
                    placeholder={t("contact.placeholder_phone")}
                  />
                </div>

                <div className="md:col-span-2">
                  <label
                    htmlFor="mensaje"
                    className="block text-sm font-semibold text-gray-700 mb-1.5"
                  >
                    {t("contact.label_message")}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={10}
                    required
                    value={formData.mensaje}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-azul focus:border-transparent resize-none transition-all ${errors.mensaje ? "border-red-500 bg-red-50" : "border-gray-200 hover:border-gray-300"}`}
                    placeholder={t("contact.placeholder_message")}
                  />
                  {errors.mensaje && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.mensaje}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex justify-center">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-azul text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl ${isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-azul/90"}`}
              >
                {isSubmitting
                  ? t("contact.button_submitting")
                  : t("contact.button_submit")}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-start gap-3">
                <FaLock className="w-6 h-6 text-azul" />

                <div>
                  <p className="text-xl font-semibold text-gray-900 mb-1">
                    {t("contact.privacy_title")}
                  </p>
                  <p className="text-md text-gray-500">
                    {t("contact.privacy_text")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Toaster position="top-right" />
      </div>

      <a
        href="https://wa.me/526643683081"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 hover:shadow-green-500/50 z-50"
        aria-label="Contact via WhatsApp"
      >
        <FaWhatsapp className="w-8 h-8" />
      </a>
    </div>
  );
}

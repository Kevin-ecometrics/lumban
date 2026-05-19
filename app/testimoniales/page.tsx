/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import StickyVideoHero from "@/app/Components/StickyVideoHero";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { getRouteByKey } from "../i18n/routeMap";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaQuoteLeft,
  FaUserCircle,
  FaCheckCircle,
  FaGoogle,
  FaAward,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCamera,
  FaRegComment,
  FaTimes,
} from "react-icons/fa";

const SINUSITIS_HERO_POSTER = "/testimoniales/testimonial.webp";

// Resultados de rinoplastias - 15 pacientes
const RHINOPLASTY_RESULTS = [
  {
    src: `/rinoplastia/paciente 1.1.webp`,
    label: `testimonials.case_1`,
  },
  {
    src: `/rinoplastia/paciente 1.2.webp`,
    label: `testimonials.case_2`,
  },
  {
    src: `/rinoplastia/paciente 1.4.webp`,
    label: `testimonials.case_3`,
  },
  {
    src: `/rinoplastia/paciente 1.5.webp`,
    label: `testimonials.case_4`,
  },
  {
    src: `/rinoplastia/paciente 1.6.webp`,
    label: `testimonials.case_5`,
  },
  {
    src: `/rinoplastia/Cirugia de nariz estetica y funcional para hombres en Tijuana.webp`,
    label: `testimonials.case_6`,
  },
  {
    src: `/rinoplastia/Perfil armonico y respingado con hecho por un otorrino especializado en rinoplastia.webp`,
    label: `testimonials.case_2`,
  },
  {
    src: `/rinoplastia/Luce una nariz mas delicada y armoniosa con tu rostro con una rinoplastia con el Dr Lumban.webp`,
    label: `testimonials.case_3`,
  },
  {
    src: `/rinoplastia/Rinoplastia sutil para hombres con el dr Jaime Lumban.webp`,
    label: `testimonials.case_4`,
  },
  {
    src: `/rinoplastia/Correcion de giba y punta de nariz en Tijuana con Dr Jaime Lumban.webp`,
    label: `testimonials.case_5`,
  },
  {
    src: `/rinoplastia/Nariz respingada y pequena para rostro con facciones finas solo con un experto en rinoplastia.webp`,
    label: `testimonials.case_6`,
  },
  {
    src: `/rinoplastia/Rinoplastia minima invasiva en Tijuana con el Dr Lumban.webp`,
    label: `testimonials.case_7`,
  },
  {
    src: `/rinoplastia/Nariz recta y varonil con el mejor otorrino en tijuana dr Lumban.webp`,
    label: `testimonials.case_8`,
  },
  {
    src: `/rinoplastia/luce un perfil mas bello con una rinoplastia con un especialista en nariz en tijuana.webp`,
    label: `testimonials.case_9`,
  },
  {
    src: `/rinoplastia/Correcion de giba y punta caida con un otorrinolaringologo en Tijuana.webp`,
    label: `testimonials.case_10`,
  },
  {
    src: `/rinoplastia/Remodelacion de punta de nariz para hombre con el Dr. Jaime Lumban.webp`,
    label: `testimonials.case_11`,
  },
  {
    src: `/rinoplastia/Antes y despues de paciente con una rinoplastia en tijuana con el dr jaime Lumban.webp`,
    label: `testimonials.case_12`,
  },
  {
    src: `/rinoplastia/Vista comparativa antes y despues de su rinoplastia con el dr lumban.webp`,
    label: `testimonials.case_13`,
  },
  {
    src: `/rinoplastia/nariz respingada con aspecto natural solo con el dr lumban en tijuana.webp`,
    label: `testimonials.case_14`,
  },
  {
    src: `/rinoplastia/Antes y despues de paciente del dr lumban con resultados masculinos.webp`,
    label: `testimonials.case_15`,
  },
];

// Tipo para testimonio
type Testimonial = {
  id: number;
  name: string;
  date?: string;
  dateKey?: string;
  rating?: number;
  text?: string;
  textKey?: string;
  source: "google" | "doctoralia";
  verified: boolean;
  hasPhoto?: boolean;
  hasImage?: boolean;
  imageSrc?: string;
  location?: string;
  locationKey?: string;
  likes?: number;
  tags?: string[];
  tagKeys?: string[];
  isLocalGuide?: boolean;
  visitType?: string;
};

// Componente para mostrar estrellas de rating
const StarRating = ({ rating }: { rating: number | undefined }) => {
  if (!rating) return null;

  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-0.5">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={`full-${i}`} className="w-4 h-4 text-yellow-400" />
      ))}
      {hasHalfStar && <FaStarHalfAlt className="w-4 h-4 text-yellow-400" />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
      ))}
    </div>
  );
};

// Badge para la fuente del testimonio
const SourceBadge = ({ source }: { source: string }) => {
  const { t } = useTranslation();
  const isGoogle = source === "google";
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
        isGoogle ? "bg-blue-50 text-blue-700" : "bg-purple-50 text-purple-700"
      }`}
    >
      {isGoogle ? (
        <FaGoogle className="w-3 h-3" />
      ) : (
        <FaAward className="w-3 h-3" />
      )}
      {isGoogle
        ? t("testimonials.badges.google")
        : t("testimonials.badges.doctoralia")}
    </span>
  );
};

// Modal para ver review completo
const ReviewModal = ({
  testimonial,
  t,
  onClose,
}: {
  testimonial: Testimonial;
  t: any;
  onClose: () => void;
}) => {
  const isGoogle = testimonial.source === "google";

  const getTestimonialText = () => {
    if (testimonial.textKey) {
      return t(`testimonials.reviews.${testimonial.textKey}.text`);
    }
    return testimonial.text;
  };

  const getTestimonialName = () => {
    if (testimonial.name.includes(" ")) {
      return testimonial.name;
    }
    if (testimonial.textKey) {
      return t(`testimonials.reviews.${testimonial.textKey}.name`);
    }
    return testimonial.name;
  };

  const getDate = () => {
    if (testimonial.dateKey) {
      return t(`testimonials.dates.${testimonial.dateKey}`);
    }
    return testimonial.date;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition z-10"
        >
          <FaTimes className="w-4 h-4 text-gray-600" />
        </button>

        {/* Imagen si existe */}
        {testimonial.hasImage && testimonial.imageSrc && (
          <div className="relative h-[500px] overflow-hidden rounded-t-2xl">
            <img
              src={testimonial.imageSrc}
              alt={`Foto de ${getTestimonialName()}`}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <StarRating rating={testimonial.rating} />
          </div>

          {/* Quote */}

          <FaQuoteLeft className="w-8 h-8 text-gray-200 mb-4" />

          {/* Texto completo */}
          <p className="text-gray-700 leading-relaxed mb-6 whitespace-pre-line">
            &quot;{getTestimonialText()}&quot;
          </p>

          {/* Información del paciente */}
          <div className="flex items-start gap-3 pt-4 border-t border-gray-100">
            <FaUserCircle className="w-12 h-12 text-gray-400 flex-shrink-0" />
            <div className="flex-1">
              <div className="font-semibold text-gray-900 flex items-center gap-2 flex-wrap">
                {getTestimonialName()}
                {testimonial.verified && (
                  <FaCheckCircle
                    className="w-4 h-4 text-green-500"
                    title={t("testimonials.badges.verified")}
                  />
                )}
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                <FaCalendarAlt className="w-3 h-3" />
                <span>{getDate()}</span>
                {isGoogle && testimonial.hasPhoto && (
                  <>
                    <span>•</span>
                    <FaCamera className="w-3 h-3" />
                    <span>{t("testimonials.badges.photo")}</span>
                  </>
                )}
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
                <FaMapMarkerAlt className="w-2.5 h-2.5" />
                <span>Tijuana, México</span>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <SourceBadge source={testimonial.source} />
          </div>

          {/* Botón para ver reseña original */}
          {/* <div className="mt-6 pt-4 border-t border-gray-100">
            <a
              href={
                isGoogle
                  ? "https://g.page/r/review"
                  : "https://www.doctoralia.com.mx/opiniones"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700"
            >
              {t("testimonials.modal.view_original")}
              <FaExternalLinkAlt className="w-3 h-3" />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

// Componente de Tarjeta de Testimonio
const TestimonialCard = ({
  testimonial,
  t,
  onCardClick,
}: {
  testimonial: Testimonial;
  t: any;
  onCardClick: (testimonial: Testimonial) => void;
}) => {
  const isGoogle = testimonial.source === "google";

  const getTestimonialText = () => {
    if (testimonial.textKey) {
      return t(`testimonials.reviews.${testimonial.textKey}.text`);
    }
    return testimonial.text;
  };

  const getTestimonialName = () => {
    if (testimonial.name.includes(" ")) {
      return testimonial.name;
    }
    if (testimonial.textKey) {
      return t(`testimonials.reviews.${testimonial.textKey}.name`);
    }
    return testimonial.name;
  };

  const getLocation = () => {
    if (testimonial.locationKey) {
      return t(`testimonials.locations.${testimonial.locationKey}`);
    }
    return testimonial.location;
  };

  const getDate = () => {
    if (testimonial.dateKey) {
      return t(`testimonials.dates.${testimonial.dateKey}`);
    }
    return testimonial.date;
  };

  const getTags = () => {
    if (testimonial.tagKeys && testimonial.tagKeys.length > 0) {
      return testimonial.tagKeys.map((tagKey: string) =>
        t(`testimonials.tags.${tagKey}`),
      );
    }
    return testimonial.tags || [];
  };

  const getVisitTypeText = () => {
    if (testimonial.visitType) {
      return t(`testimonials.labels.${testimonial.visitType}`);
    }
    return "";
  };

  // Truncar texto para vista previa
  const getPreviewText = () => {
    const fullText = getTestimonialText();
    if (fullText.length > 150) {
      return fullText.substring(0, 150) + "...";
    }
    return fullText;
  };

  return (
    <div
      className="group bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
      onClick={() => onCardClick(testimonial)}
    >
      {/* Header con rating y fuente */}
      <div className="flex items-center justify-between mb-4">
        <StarRating rating={testimonial.rating} />
        <SourceBadge source={testimonial.source} />
      </div>

      {/* Texto del testimonio (vista previa) */}
      <div className="mb-4">
        <FaQuoteLeft className="w-6 h-6 text-gray-200 mb-2" />
        <p className="text-gray-700 leading-relaxed line-clamp-4">
          &quot;{getPreviewText()}&quot;
        </p>
      </div>

      {/* Tags */}
      {getTags().length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {getTags().map((tag: string, idx: number) => (
            <span
              key={idx}
              className="px-2 py-0.5 bg-gray-100 rounded-full text-xs text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Información del paciente */}
      <div className="flex items-start gap-3 pt-4 border-t border-gray-100">
        {testimonial.hasImage && testimonial.imageSrc ? (
          <img
            src={testimonial.imageSrc}
            alt={getTestimonialName()}
            className="w-10 h-10 rounded-full object-cover flex-shrink-0"
          />
        ) : (
          <FaUserCircle className="w-10 h-10 text-gray-400 flex-shrink-0" />
        )}
        <div className="flex-1 min-w-0">
          <div className="font-medium text-gray-900 flex items-center gap-2 flex-wrap">
            {getTestimonialName()}
            {isGoogle && testimonial.isLocalGuide && (
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-green-50 text-green-700 rounded text-xs">
                <FaCamera className="w-2.5 h-2.5" />
                {t("testimonials.badges.local_guide")}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500 mt-1 flex-wrap">
            {isGoogle ? (
              <>
                <FaCalendarAlt className="w-3 h-3" />
                <span>{getDate()}</span>
                {testimonial.hasPhoto && (
                  <>
                    <span>•</span>
                    <FaCamera className="w-3 h-3" />
                    <span>1 {t("testimonials.badges.photo")}</span>
                  </>
                )}
              </>
            ) : (
              <>
                <FaCalendarAlt className="w-3 h-3" />
                <span>{getDate()}</span>
                <span>•</span>
                <FaRegComment className="w-3 h-3" />
                <span className="truncate">{getVisitTypeText()}</span>
              </>
            )}
          </div>
          {getLocation() && (
            <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
              <FaMapMarkerAlt className="w-2.5 h-2.5" />
              <span>Tijuana</span>
            </div>
          )}
        </div>
        {testimonial.verified && (
          <FaCheckCircle
            className="w-5 h-5 text-green-500 flex-shrink-0"
            title={t("testimonials.badges.verified")}
          />
        )}
      </div>
    </div>
  );
};

export default function TestimonialsPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";
  const [activeTab, setActiveTab] = useState<"all" | "google" | "doctoralia">(
    "all",
  );
  const [selectedTestimonial, setSelectedTestimonial] =
    useState<Testimonial | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  );

  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImageIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === "ArrowLeft") {
        setSelectedImageIndex(
          selectedImageIndex === 0
            ? RHINOPLASTY_RESULTS.length - 1
            : selectedImageIndex - 1,
        );
      } else if (e.key === "ArrowRight") {
        setSelectedImageIndex(
          selectedImageIndex === RHINOPLASTY_RESULTS.length - 1
            ? 0
            : selectedImageIndex + 1,
        );
      } else if (e.key === "Escape") {
        setSelectedImageIndex(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex]);

  // Obtener testimonios traducidos
  const getTestimonials = (): Testimonial[] => {
    // Testimonios de Google con imágenes
    const googleTestimonials: Testimonial[] = [
      {
        id: 1,
        name: "AHS Bienes Raíces",
        textKey: "ahs",
        dateKey: "one_month_ago",
        rating: 5,
        source: "google",
        verified: true,
        hasPhoto: true,
        hasImage: true,
        imageSrc:
          "/testimoniales/Resultados de una rinoplastia despues de 3 meses con el dr lumban.webp",
        locationKey: "mexico",
        likes: 0,
        tagKeys: ["surgery", "natural_results"],
        isLocalGuide: true,
      },
      {
        id: 2,
        name: "Jasmine Perez",
        textKey: "jasmine",
        dateKey: "two_months_ago",
        rating: 5,
        source: "google",
        verified: true,
        hasPhoto: true,
        hasImage: true,
        imageSrc:
          "/testimoniales/Resultado de rinoplastia despues de semanas con el mejor otorrino el dr lumban.webp",
        locationKey: "international",
        likes: 1,
        tagKeys: ["rhinoplasty", "international_experience"],
        isLocalGuide: false,
      },
      {
        id: 3,
        name: "Nydia Mendoza",
        textKey: "nydia",
        dateKey: "four_months_ago",
        rating: 5,
        source: "google",
        verified: true,
        hasPhoto: true,
        hasImage: true,
        imageSrc:
          "/testimoniales/Recibe la mejor atencion con el mejor otorrino en Tijuana.webp",
        locationKey: "mexico",
        likes: 0,
        tagKeys: ["attention", "experience"],
        isLocalGuide: false,
      },
      {
        id: 4,
        name: "Mr Mendez",
        textKey: "mendez",
        dateKey: "two_months_ago",
        rating: 5,
        source: "google",
        verified: true,
        hasPhoto: false,
        hasImage: false,
        locationKey: "mexico",
        likes: 0,
        tagKeys: ["professionalism", "follow_up"],
        isLocalGuide: false,
      },
    ];

    // Testimonios de Doctoralia
    const doctoraliaTestimonials: Testimonial[] = [
      {
        id: 5,
        name: "JPM",
        textKey: "jpm",
        date: "1 de abril de 2026",
        rating: 5,
        source: "doctoralia",
        verified: true,
        visitType: "first_visit",
        locationKey: "mexico_city",
      },
      {
        id: 6,
        name: "Luis Hernández",
        textKey: "luis",
        date: "7 de abril de 2026",
        rating: 5,
        source: "doctoralia",
        verified: true,
        visitType: "biopsy",
        locationKey: "mexico",
      },
      {
        id: 7,
        name: "Paula Pérez",
        textKey: "paula",
        date: "19 de marzo de 2026",
        rating: 5,
        source: "doctoralia",
        verified: true,
        visitType: "first_visit",
        locationKey: "mexico",
      },
      {
        id: 8,
        name: "Laura Vega",
        textKey: "laura",
        date: "18 de marzo de 2026",
        rating: 5,
        source: "doctoralia",
        verified: true,
        visitType: "first_visit",
        locationKey: "mexico",
      },
    ];

    return [...googleTestimonials, ...doctoraliaTestimonials];
  };

  const allTestimonials = getTestimonials();
  const googleTestimonials = allTestimonials.filter(
    (t) => t.source === "google",
  );
  const doctoraliaTestimonials = allTestimonials.filter(
    (t) => t.source === "doctoralia",
  );

  const googleCount = googleTestimonials.length;
  const doctoraliaCount = doctoraliaTestimonials.length;
  const totalTestimonials = allTestimonials.length;

  // Filtrar testimonios según tab activa
  const filteredTestimonials =
    activeTab === "all"
      ? allTestimonials
      : activeTab === "google"
        ? googleTestimonials
        : doctoraliaTestimonials;

  const handleCardClick = (testimonial: Testimonial) => {
    setSelectedTestimonial(testimonial);
  };

  const closeModal = () => {
    setSelectedTestimonial(null);
  };

  return (
    <main className="bg-white">
      {/* Modal para review completo */}
      {selectedTestimonial && (
        <ReviewModal
          testimonial={selectedTestimonial}
          t={t}
          onClose={closeModal}
        />
      )}

      {/* Hero con video */}
      <StickyVideoHero
        src={currentLang === "en" ? "/testimonial-english.webm" : "/testimonial.webm"}
        poster={SINUSITIS_HERO_POSTER}
        ariaLabel={t("testimonials.hero_aria_label")}
        title={t("testimonials.hero_title")}
        subtitle={t("testimonials.hero_subtitle")}
        textClassName="max-w-3xl mx-auto px-4 -mt-8 md:-mt-4"
        titleClassName="text-5xl sm:text-4xl md:text-6xl"
        subtitleClassName="text-2lg sm:text-xl md:text-2xl -mt-2"
        mediaClassName="-mt-8 md:mt-28"
        startTime={0}
      />

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {/* H1 principal */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            {t("testimonials.h1_title")}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("testimonials.h1_subtitle")}
          </p>
        </div>

        {/* TABS PARA FILTRAR */}
        <div className="flex justify-center border-b border-gray-200">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab("all")}
              className={`pb-3 px-2 text-sm font-medium transition-colors relative ${
                activeTab === "all"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {t("testimonials.tabs.all")} ({totalTestimonials})
            </button>
            <button
              onClick={() => setActiveTab("google")}
              className={`pb-3 px-2 text-sm font-medium transition-colors relative ${
                activeTab === "google"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {t("testimonials.tabs.google")} ({googleCount})
            </button>
            <button
              onClick={() => setActiveTab("doctoralia")}
              className={`pb-3 px-2 text-sm font-medium transition-colors relative ${
                activeTab === "doctoralia"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {t("testimonials.tabs.doctoralia")} ({doctoraliaCount})
            </button>
          </div>
        </div>

        {/* TESTIMONIALS EN FORMATO CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTestimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              t={t}
              onCardClick={handleCardClick}
            />
          ))}
        </div>

        {/* SECCIÓN DE RESULTADOS DE RINOPLASTIAS */}
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {t("testimonials.results_title")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("testimonials.results_subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {RHINOPLASTY_RESULTS.map((result, index) => (
              <motion.figure
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                onClick={() => setSelectedImageIndex(index)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-md">
                  <img
                    src={result.src}
                    alt={result.label}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                      {t("testimonials.view_result")}
                    </span>
                  </div>
                </div>
              </motion.figure>
            ))}
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="rounded-3xl border border-gray-200 bg-gradient-to-r from-blue-50 to-white p-10 text-center space-y-6 shadow-sm">
          <h3 className="text-2xl font-semibold text-gray-900">
            {t("testimonials.cta_title")}
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("testimonials.cta_subtitle")}
          </p>
          <a
            href={getRouteByKey("contact", currentLang)}
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
          >
            {t("testimonials.cta_button")}
          </a>
        </div>
      </div>

      {/* MODAL DE GALERÍA */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedImageIndex(null)}
          >
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="absolute top-4 right-4 z-50 bg-white/20 backdrop-blur-sm text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              aria-label={t("testimonials.gallery_close")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <motion.div
              className="relative max-h-[90vh] max-w-[90vw] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={RHINOPLASTY_RESULTS[selectedImageIndex].src}
                  src={RHINOPLASTY_RESULTS[selectedImageIndex].src}
                  alt={RHINOPLASTY_RESULTS[selectedImageIndex].label}
                  className="max-w-full max-h-[85vh] rounded-lg shadow-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                />
              </AnimatePresence>
              {RHINOPLASTY_RESULTS.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImageIndex(
                        selectedImageIndex === 0
                          ? RHINOPLASTY_RESULTS.length - 1
                          : selectedImageIndex - 1,
                      );
                    }}
                    className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-sm text-white w-12 h-12 rounded-full items-center justify-center hover:bg-white/30 transition-colors"
                    aria-label={t("testimonials.gallery_previous")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImageIndex(
                        selectedImageIndex === RHINOPLASTY_RESULTS.length - 1
                          ? 0
                          : selectedImageIndex + 1,
                      );
                    }}
                    className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white/20 backdrop-blur-sm text-white w-12 h-12 rounded-full items-center justify-center hover:bg-white/30 transition-colors"
                    aria-label={t("testimonials.gallery_next")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </>
              )}
              {RHINOPLASTY_RESULTS.length > 1 && (
                <div className="md:hidden flex items-center justify-between w-full mt-4 px-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImageIndex(
                        selectedImageIndex === 0
                          ? RHINOPLASTY_RESULTS.length - 1
                          : selectedImageIndex - 1,
                      );
                    }}
                    className="bg-gray-100 text-gray-800 w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                    aria-label={t("testimonials.gallery_previous")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImageIndex(
                        selectedImageIndex === RHINOPLASTY_RESULTS.length - 1
                          ? 0
                          : selectedImageIndex + 1,
                      );
                    }}
                    className="bg-gray-100 text-gray-800 w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                    aria-label={t("testimonials.gallery_next")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import StickyVideoHero from "@/app/Components/StickyVideoHero";
import { useTranslation } from "react-i18next";
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
  FaExternalLinkAlt,
} from "react-icons/fa";

const SINUSITIS_HERO_VIDEO = "/testimonial.webm";
const SINUSITIS_HERO_POSTER = "/testimoniales/testimonial.webp";

// Resultados de rinoplastias - Imágenes
const RHINOPLASTY_RESULTS = [
  {
    src: "/testimoniales/Resultados de una rinoplastia despues de 3 meses con el dr lumban.webp",
    alt: "Paciente disfrutando de sus resultados de rinoplastia con el DR.Lumbán  después de 3 meses  ",
  },
  {
    src: "/testimoniales/Resultado de rinoplastia despues de semanas con el mejor otorrino el dr lumban.webp",
    alt: "Paciente con par de semanas postoperada mostrando resultados de rinoplastia con el Dr. lumbán  ",
  },
  {
    src: "/testimoniales/Recibe la mejor atencion con el mejor otorrino en Tijuana.webp",
    alt: "Recibe atención especializada con el mejor otorrinolaringólogo en la Ciudad de Tijuana",
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
        src={SINUSITIS_HERO_VIDEO}
        poster={SINUSITIS_HERO_POSTER}
        ariaLabel={t("testimonials.hero_aria_label")}
        title={t("testimonials.hero_title")}
        subtitle={t("testimonials.hero_subtitle")}
        textClassName="max-w-3xl mx-auto px-4 -mt-8 md:-mt-4"
        titleClassName="text-5xl sm:text-4xl md:text-6xl"
        subtitleClassName="text-2lg sm:text-xl md:text-2xl -mt-2"
        mediaClassName="-mt-8 md:mt-28"
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
        {/* <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {t("testimonials.results_title")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("testimonials.results_subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {RHINOPLASTY_RESULTS.map((result, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <img
                  src="/testimoniales/Cirugia de nariz estetica y funcional para hombres en Tijuana.jpg"
                  alt={result.alt}
                  className="w-auto h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <span className="text-white text-sm font-medium">
                    {t("testimonials.view_result")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div> */}

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
    </main>
  );
}

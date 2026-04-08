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
} from "react-icons/fa";

const SINUSITIS_HERO_VIDEO = "/testimonial.webm";
const SINUSITIS_HERO_POSTER = "/testimoniales/testimonial.webp";

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

// Componente de Tarjeta de Testimonio
const TestimonialCard = ({
  testimonial,
  t,
}: {
  testimonial: Testimonial;
  t: any;
}) => {
  const isGoogle = testimonial.source === "google";

  // Obtener el texto del testimonio traducido
  const getTestimonialText = () => {
    if (testimonial.textKey) {
      return t(`testimonials.reviews.${testimonial.textKey}.text`);
    }
    return testimonial.text;
  };

  // Obtener el nombre traducido
  const getTestimonialName = () => {
    if (testimonial.name.includes(" ")) {
      return testimonial.name;
    }
    if (testimonial.textKey) {
      return t(`testimonials.reviews.${testimonial.textKey}.name`);
    }
    return testimonial.name;
  };

  // Obtener la ubicación traducida
  const getLocation = () => {
    if (testimonial.locationKey) {
      return t(`testimonials.locations.${testimonial.locationKey}`);
    }
    return testimonial.location;
  };

  // Obtener la fecha traducida
  const getDate = () => {
    if (testimonial.dateKey) {
      return t(`testimonials.dates.${testimonial.dateKey}`);
    }
    return testimonial.date;
  };

  // Obtener los tags traducidos
  const getTags = () => {
    if (testimonial.tagKeys && testimonial.tagKeys.length > 0) {
      return testimonial.tagKeys.map((tagKey: string) =>
        t(`testimonials.tags.${tagKey}`),
      );
    }
    return testimonial.tags || [];
  };

  // Obtener el tipo de visita traducido
  const getVisitTypeText = () => {
    if (testimonial.visitType) {
      return t(`testimonials.labels.${testimonial.visitType}`);
    }
    return "";
  };

  return (
    <div className="group bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {/* Header con rating y fuente */}
      <div className="flex items-center justify-between mb-4">
        <StarRating rating={testimonial.rating} />
        <SourceBadge source={testimonial.source} />
      </div>

      {/* Texto del testimonio */}
      <div className="mb-4">
        <FaQuoteLeft className="w-6 h-6 text-gray-200 mb-2" />
        <p className="text-gray-700 leading-relaxed line-clamp-4">
          &quot;{getTestimonialText()}&quot;
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
        <FaUserCircle className="w-10 h-10 text-gray-400 flex-shrink-0" />
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

      {/* Likes de Google */}
      {/* {isGoogle && testimonial.likes && testimonial.likes > 0 && (
        <div className="mt-3 flex items-center gap-1 text-xs text-gray-400">
          <FaThumbsUp className="w-3 h-3" />
          <span>
            {testimonial.likes}{" "}
            {testimonial.likes === 1
              ? t("testimonials.labels.likes")
              : t("testimonials.labels.likes_plural")}
          </span>
        </div>
      )} */}
    </div>
  );
};

export default function TestimonialsPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("en") ? "en" : "es";
  const [activeTab, setActiveTab] = useState<"all" | "google" | "doctoralia">(
    "all",
  );

  // Obtener testimonios traducidos
  const getTestimonials = (): Testimonial[] => {
    const googleCount = t("testimonials.stats.google_count", {
      returnObjects: false,
    });
    const doctoraliaCount = t("testimonials.stats.doctoralia_count", {
      returnObjects: false,
    });

    // Testimonios de Google con claves de traducción
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
        locationKey: "mexico",
        likes: 0,
        tagKeys: ["professionalism", "follow_up"],
        isLocalGuide: false,
      },
    ];

    // Testimonios de Doctoralia con claves de traducción
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

  // Obtener estadísticas desde i18n
  const googleAverage = parseFloat(
    t("testimonials.stats.google_average", { returnObjects: false }) || "4.6",
  );

  // Filtrar testimonios según tab activa
  const filteredTestimonials =
    activeTab === "all"
      ? allTestimonials
      : activeTab === "google"
        ? googleTestimonials
        : doctoraliaTestimonials;

  // FAQs desde i18n
  const faqItems = [
    { q: "faq1_q", a: "faq1_a" },
    { q: "faq2_q", a: "faq2_a" },
    { q: "faq3_q", a: "faq3_a" },
    { q: "faq4_q", a: "faq4_a" },
    { q: "faq5_q", a: "faq5_a" },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="bg-white">
      {/* Hero con video - Totalmente traducido */}
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
        {/* TÍTULO Y DESCRIPCIÓN DE TESTIMONIALES - Traducido */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            {t("testimonials.title")}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </div>

        {/* ESTADÍSTICAS - Traducido */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-6 text-center border border-yellow-100">
            <div className="flex justify-center mb-2">
              <FaStar className="w-8 h-8 text-yellow-400" />
            </div>
            <div className="text-3xl font-bold text-gray-900">
              {googleAverage}
            </div>
            <div className="text-sm text-gray-600">
              {t("testimonials.stats.google_rating")}
            </div>
            <div className="text-xs text-gray-500 mt-1">
              ⭐ {t("testimonials.stats.based_on")}{" "}
              {t("testimonials.stats.google_count")}{" "}
              {t("testimonials.stats.reviews")}
            </div>
          </div>

          <div
            className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 text-center border border-blue-100 cursor-pointer hover:shadow-md transition"
            onClick={() => setActiveTab("google")}
          >
            <div className="flex justify-center mb-2">
              <FaGoogle className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">
              {googleCount}
            </div>
            <div className="text-sm text-gray-600">
              {t("testimonials.stats.google_reviews")}
            </div>
          </div>

          <div
            className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 text-center border border-purple-100 cursor-pointer hover:shadow-md transition"
            onClick={() => setActiveTab("doctoralia")}
          >
            <div className="flex justify-center mb-2">
              <FaAward className="w-8 h-8 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">
              {doctoraliaCount}
            </div>
            <div className="text-sm text-gray-600">
              {t("testimonials.stats.doctoralia_reviews")}
            </div>
          </div>
        </div> */}

        {/* TABS PARA FILTRAR - Traducido */}
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
            />
          ))}
        </div>

        {/* SECCIÓN PARA COMPARTIR EXPERIENCIA - Traducido */}
        {/* <div className="rounded-3xl bg-gradient-to-r from-gray-900 to-gray-800 p-8 md:p-12 text-center text-white">
          <FaQuoteLeft className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            {t("testimonials.share_section.title")}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            {t("testimonials.share_section.subtitle")}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://g.page/r/xxxxx/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-gray-900 font-medium hover:bg-gray-100 transition"
            >
              <FaGoogle className="w-4 h-4" />
              {t("testimonials.share_section.google_button")}
            </a>
            <a
              href="https://www.doctoralia.es/xxxxx/opiniones"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-600 text-white font-medium hover:bg-purple-700 transition"
            >
              <FaAward className="w-4 h-4" />
              {t("testimonials.share_section.doctoralia_button")}
            </a>
          </div>
        </div> */}

        {/* FAQ SECTION - Traducido */}
        {/* <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 space-y-4 text-gray-700">
          <h2 className="text-3xl font-semibold">
            {t("sinusitis-surgery.faq_title")}
          </h2>
          <div className="space-y-4">
            {faqItems.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-gray-200 bg-white"
              >
                <button
                  className="w-full text-left px-5 py-4 flex justify-between items-center font-medium"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={openFaq === idx}
                >
                  <span className="text-gray-900">
                    {t(`sinusitis-surgery.${faq.q}`)}
                  </span>
                  <span className="text-gray-500">
                    {openFaq === idx ? "-" : "+"}
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                    {t(`sinusitis-surgery.${faq.a}`)}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div> */}

        {/* CTA FINAL - Traducido */}
        <div className="rounded-3xl border border-gray-200 bg-gradient-to-r from-blue-50 to-white p-10 text-center space-y-6 shadow-sm">
          <h2 className="text-2xl font-semibold">
            {t("testimonials.cta.title")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("testimonials.cta.subtitle")}
          </p>
          <a
            href={getRouteByKey("contact", currentLang)}
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
          >
            {t("testimonials.cta.button")}
          </a>
        </div>
      </div>
    </main>
  );
}

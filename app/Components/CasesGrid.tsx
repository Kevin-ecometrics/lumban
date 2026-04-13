"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import { useTranslation } from "react-i18next";
import { getRouteByKey, RouteKey } from "../i18n/routeMap";

export default function CasesGrid() {
  const { t, i18n } = useTranslation();

  const lang = i18n.language.startsWith("en") ? "en" : "es";

  interface Case {
    title: string;
    routeKey: RouteKey;
    image: string;
    type: "image" | "video";
    tag?: string;
    objectFit?: "contain" | "cover";
    objectPosition?: string;
  }

  const CASES: Case[] = [
    {
      title: t("home.cases.case1"),
      routeKey: "aesthetic-nose",
      image: "/nariz.png",
      type: "image",
      objectFit: "contain",
      objectPosition: "center",
    },
    {
      title: t("home.cases.case2"),
      routeKey: "profile",
      image: "/dr lumban about.webm",
      type: "video",
    },
    {
      title: t("home.cases.case3"),
      routeKey: "testimonials",
      image: "/testimonial.webm",
      type: "video",
    },
    {
      title: t("home.cases.case4"),
      routeKey: "guia-completa-para-tu-primera-visita-con-el-dr-lumban",
      image:
        "/blog/Como prepararte para una cita con el dr lumban en tijuana.webp",
      type: "image",
    },
  ];

  return (
    <section className="px-6 py-20">
      <h2 className="text-4xl md:text-5xl font-light mb-12">
        {t("Casos Destacados")}
      </h2>

      <div className="grid grid-cols-12 gap-6">
        {CASES.map((item, i) => {
          const isEvenRow = Math.floor(i / 2) % 2 === 0;
          const isFirstInRow = i % 2 === 0;

          const colSpan = isEvenRow
            ? isFirstInRow
              ? "col-span-12 md:col-span-7"
              : "col-span-12 md:col-span-5"
            : isFirstInRow
              ? "col-span-12 md:col-span-5"
              : "col-span-12 md:col-span-7";

          return (
            <Link
              key={i}
              href={getRouteByKey(item.routeKey, lang)} // 🔥 aquí usas tu map
              className={`group relative ${colSpan}`}
            >
              <motion.div
                className={`relative h-[320px] md:h-[440px] rounded-2xl overflow-hidden${
                  item.type === "image" && item.objectFit === "contain"
                    ? " bg-white "
                    : ""
                }`}
                initial="rest"
                whileHover="hover"
                animate="rest"
                onMouseEnter={
                  item.type === "video"
                    ? (e) => {
                        const video = e.currentTarget.querySelector("video");
                        if (video) {
                          video.play().catch(() => {});
                        }
                      }
                    : undefined
                }
                onMouseLeave={
                  item.type === "video"
                    ? (e) => {
                        const video = e.currentTarget.querySelector("video");
                        if (video) {
                          video.pause();
                          video.currentTime = 0;
                        }
                      }
                    : undefined
                }
              >
                {/* MEDIA */}
                {item.type === "video" ? (
                  <motion.video
                    src={item.image}
                    muted
                    playsInline
                    preload="metadata"
                    className="pointer-events-none absolute inset-0 w-full h-full object-cover"
                    variants={{
                      rest: { scale: 1 },
                      hover: { scale: 1.06 },
                    }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                ) : (
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className={`absolute inset-0 w-full h-full max-w-full max-h-full ${
                      item.objectFit === "contain"
                        ? "object-contain"
                        : "object-cover"
                    }`}
                    style={{
                      objectPosition: item.objectPosition ?? "center",
                    }}
                    variants={{
                      rest: { scale: 1, filter: "blur(0px)" },
                      hover: { scale: 1.06 },
                    }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}

                {/* OVERLAY */}
                <motion.div
                  className="absolute inset-0 bg-black/30"
                  variants={{
                    rest: { opacity: 0 },
                    hover: { opacity: 1 },
                  }}
                  transition={{ duration: 0.4 }}
                />

                {/* TAG */}
                {item.tag && (
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 text-xs rounded-full bg-white/20 text-white backdrop-blur">
                      {item.tag}
                    </span>
                  </div>
                )}

                {/* ARROW */}
                <motion.div
                  className="absolute top-4 right-4 z-20 w-12 h-12 rounded-full bg-black/70 flex items-center justify-center text-white text-lg"
                  variants={{
                    rest: { opacity: 0, scale: 0.6 },
                    hover: { opacity: 1, scale: 1 },
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <GoArrowUpRight />
                </motion.div>

                {/* TITLE */}
                <motion.div
                  className="absolute bottom-6 left-6 z-20"
                  variants={{
                    rest: { opacity: 0, y: 20 },
                    hover: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.45 }}
                >
                  <h3 className="text-white text-2xl md:text-3xl font-light italic">
                    {item.title}
                  </h3>
                </motion.div>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

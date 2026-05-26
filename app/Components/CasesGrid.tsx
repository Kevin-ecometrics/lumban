"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import { useTranslation } from "react-i18next";
import { getRouteByKey, RouteKey } from "../i18n/routeMap";

export default function CasesGrid() {
  const { t, i18n } = useTranslation();
  const [firstHovered, setFirstHovered] = useState(false);

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
      image: "/rinoplastia estetica funcional nariz dr lumban Tijuana.webp",
      type: "image",
      objectFit: "contain",
      objectPosition: "center",
    },
    {
      title: t("home.cases.case2"),
      routeKey: "profile",
      image: "/portada video Dr Jaime Lumban otorrinolaringologo Tijuana.webp",
      type: "image",
      objectFit: "cover",
      objectPosition: "center",
    },
    {
      title: t("home.cases.case3"),
      routeKey: "testimonials",
      image: "/portada video testimonios pacientes rinoplastia dr lumban Tijuana.webp",
      type: "image",
      objectFit: "cover",
      objectPosition: "center",
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
    <section className="px-6 py-8">
      <h2 className="text-3xl md:text-4xl font-light mb-6">
        {t("home.cases.title")}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {CASES.map((item, i) => {
          const colSpan =
            i === 0 ? "col-span-2 md:col-span-2" :
            i === 1 ? "col-span-2 md:col-span-1" :
            i === 2 ? "col-span-2 md:col-span-1" :
                      "col-span-2 md:col-span-2";

          return (
            <Link
              key={i}
              href={getRouteByKey(item.routeKey, lang)}
              className={`group relative ${colSpan}`}
            >
              <motion.div
                className={`relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden${
                  i === 0 && firstHovered
                    ? " bg-verde "
                    : item.type === "image" && item.objectFit === "contain"
                      ? " bg-white "
                      : ""
                }`}
                initial="rest"
                whileHover="hover"
                animate="rest"
                onMouseEnter={(e) => {
                  if (i === 0) setFirstHovered(true);
                  if (item.type === "video") {
                    const video = e.currentTarget.querySelector("video");
                    if (video) {
                      video.play().catch(() => {});
                    }
                  }
                }}
                onMouseLeave={(e) => {
                  if (i === 0) setFirstHovered(false);
                  if (item.type === "video") {
                    const video = e.currentTarget.querySelector("video");
                    if (video) {
                      video.pause();
                      video.currentTime = 0;
                    }
                  }
                }}
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
                    src={
                      i === 0 && firstHovered ? "/rinoplastia resultado antes despues nariz dr lumban Tijuana.webp" : item.image
                    }
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

                {/* CARD 1 STATIC TEXT */}
                {i === 1 && (
                  <>
                    <motion.div
                      className="absolute top-5 left-5 z-20"
                      variants={{ rest: { opacity: 1 }, hover: { opacity: 0 } }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-white text-2xl md:text-4xl font-bold drop-shadow-lg">
                        Dr. Lumbán
                      </span>
                    </motion.div>
                    <motion.div
                      className="absolute bottom-15 right-4 z-20"
                      variants={{ rest: { opacity: 1 }, hover: { opacity: 0 } }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-white text-lg md:text-2xl font-semibold drop-shadow-lg leading-tight">
                        {t("home.cases.card1_specialty")}
                      </p>
                      <p className="text-white/80 text-base md:text-xl drop-shadow-lg">
                        {t("home.cases.card1_experience")}
                      </p>
                    </motion.div>
                  </>
                )}

                {/* CARD 2 STATIC TEXT */}
                {i === 2 && (
                  <>
                    <motion.div
                      className="absolute top-5 left-5 z-20"
                      variants={{ rest: { opacity: 1 }, hover: { opacity: 0 } }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-white text-2xl md:text-4xl font-bold drop-shadow-lg">
                        {t("home.cases.card2_before_after")}
                      </span>
                    </motion.div>
                    <motion.div
                      className="absolute bottom-15 right-4 z-20"
                      variants={{ rest: { opacity: 1 }, hover: { opacity: 0 } }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-white text-lg md:text-2xl font-semibold drop-shadow-lg leading-tight">
                        {t("home.cases.card2_patient")}
                      </p>
                    </motion.div>
                  </>
                )}
              </motion.div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

/* ---------------- TEXT CONFIG ---------------- */

const TEXT_ES = [
  { word: "Dr.", emphasis: false },
  { word: "Jaime", emphasis: true },
  { word: "Lumbán", emphasis: true },
  { word: "experto", emphasis: false },
  { word: "en", emphasis: false },
  { word: "rinoplastia", emphasis: true },
  { word: "estética", emphasis: true },
  { word: "y", emphasis: false },
  { word: "funcional", emphasis: true },
  { word: "con", emphasis: false },
  { word: "3", emphasis: false },
  { word: "décadas", emphasis: false },
  { word: "de", emphasis: false },
  { word: "experiencia", emphasis: false },
  { word: "en", emphasis: false },
  { word: "el", emphasis: false },
  { word: "tratamiento", emphasis: false },
  { word: "integral", emphasis: false },
  { word: "en", emphasis: false },
  { word: "OÍDOS,", emphasis: true },
  { word: "NARIZ", emphasis: true },
  { word: "y", emphasis: false },
  { word: "GARGANTA", emphasis: true },
  { word: "en", emphasis: false },
  { word: "Tijuana", emphasis: true },
];

const TEXT_EN = [
  { word: "Dr.", emphasis: false },
  { word: "Jaime", emphasis: true },
  { word: "Lumbán", emphasis: true },
  { word: "expert", emphasis: false },
  { word: "in", emphasis: false },
  { word: "aesthetic", emphasis: true },
  { word: "and", emphasis: false },
  { word: "functional", emphasis: true },
  { word: "rhinoplasty", emphasis: true },
  { word: "with", emphasis: false },
  { word: "3", emphasis: false },
  { word: "decades", emphasis: false },
  { word: "of", emphasis: false },
  { word: "experience", emphasis: false },
  { word: "in", emphasis: false },
  { word: "comprehensive", emphasis: false },
  { word: "treatment", emphasis: false },
  { word: "of", emphasis: false },
  { word: "EARS,", emphasis: true },
  { word: "NOSE", emphasis: true },
  { word: "and", emphasis: false },
  { word: "THROAT", emphasis: true },
  { word: "in", emphasis: false },
  { word: "Tijuana", emphasis: true },
];

/* ---------------- WORD COMPONENT (INTERNAL) ---------------- */

function RevealWord({
  word,
  emphasis,
  index,
  total,
  progress,
}: {
  word: string;
  emphasis: boolean;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const end = start + 1 / total;

  const baseColor = emphasis ? "#9ca3af" : "#d1d5db";

  const color = useTransform(progress, [start, end], [baseColor, "#111"]);

  const textShadow = useTransform(
    progress,
    [start, end],
    [
      "0px 0px 0px rgba(0,0,0,0)",
      emphasis
        ? "0px 10px 28px rgba(0,0,0,0.28)"
        : "0px 6px 18px rgba(0,0,0,0.18)",
    ],
  );

  return (
    <motion.span
      style={{
        color,
        textShadow,
        opacity: 1,
      }}
      className={emphasis ? "italic font-light" : "font-normal"}
    >
      {word}
    </motion.span>
  );
}

/* ---------------- MAIN COMPONENT ---------------- */

export default function ScrollRevealText() {
  const { i18n } = useTranslation();
  const ref = useRef<HTMLParagraphElement>(null);
  const TEXT = i18n.language?.startsWith("en") ? TEXT_EN : TEXT_ES;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 40%"],
  });

  return (
    <section className="py-16 flex items-center justify-center px-6">
      <p
        ref={ref}
        className="max-w-6xl text-4xl md:text-6xl leading-tight flex flex-wrap gap-x-3 gap-y-2"
      >
        {TEXT.map((item, index) => (
          <RevealWord
            key={index}
            word={item.word}
            emphasis={item.emphasis}
            index={index}
            total={TEXT.length}
            progress={scrollYProgress}
          />
        ))}
      </p>
    </section>
  );
}

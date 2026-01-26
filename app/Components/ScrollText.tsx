"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

/* ---------------- TEXT CONFIG ---------------- */

const TEXT = [
  { word: "EL", emphasis: false },
  { word: "DR.", emphasis: false },
  { word: "JAIME", emphasis: true },
  { word: "LUMBÁN", emphasis: true },
  { word: "es", emphasis: false },
  { word: "especialista", emphasis: false },
  { word: "dedicado", emphasis: false },
  { word: "al", emphasis: false },
  { word: "tratamiento", emphasis: false },
  { word: "de", emphasis: false },
  { word: "OÍDOS,", emphasis: true },
  { word: "NARIZ", emphasis: true },
  { word: "y", emphasis: false },
  { word: "GARGANTA.", emphasis: true },
  { word: "Miembro", emphasis: false },
  { word: "de", emphasis: false },
  { word: "la", emphasis: false },
  { word: "Sociedad", emphasis: false },
  { word: "mexicana", emphasis: false },
  { word: "de", emphasis: false },
  { word: "Rinología.", emphasis: true },
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
    ]
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
  const ref = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 40%"],
  });

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
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

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

/* ---------------- CONFIG ---------------- */

const IMAGE_SIZE = 260;
const MOVE_DISTANCE = 12;
const MOVES_REQUIRED = 5;
const REMOVE_DELAY = 5000;
const MAX_IMAGES = 12;

const IMAGES = [
  "/Dr Jaime Lumban otorrinolaringologo en pared lisa y mirando de frente.png",
  "/Dr Lumban en consulta mostrando un antes y despues de una cirugia de nariz Rinoplastia.png",
  "/Imagen Dr Lumban recargado en la pared en consultorio de otorrinolaringologia.png",
  "/pose de Doctor Jaime lumban otorrino con brazos cruzados y traje azul.png",
];

interface TrailImage {
  id: number;
  src: string;
  x: number;
  y: number;
}

export default function OurWaveHero() {
  const [images, setImages] = useState<TrailImage[]>([]);
  const sectionRef = useRef<HTMLElement | null>(null);

  const idRef = useRef(0);
  const imgIndexRef = useRef(0);
  const moveCounterRef = useRef(0);
  const lastMouseRef = useRef({ x: 0, y: 0 });

  /* -------- ADD IMAGE -------- */

  const addImage = (x: number, y: number) => {
    const rect = sectionRef.current!.getBoundingClientRect();

    const img: TrailImage = {
      id: idRef.current++,
      src: IMAGES[imgIndexRef.current],
      x: x - rect.left - IMAGE_SIZE / 2,
      y: y - rect.top - IMAGE_SIZE / 2,
    };

    imgIndexRef.current = (imgIndexRef.current + 1) % IMAGES.length;

    setImages((prev) => [...prev.slice(-MAX_IMAGES + 1), img]);

    setTimeout(() => {
      setImages((prev) => prev.filter((i) => i.id !== img.id));
    }, REMOVE_DELAY);
  };

  /* -------- MOUSE MOVE (LOCAL) -------- */

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const dx = e.clientX - lastMouseRef.current.x;
    const dy = e.clientY - lastMouseRef.current.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < MOVE_DISTANCE) return;

    lastMouseRef.current = { x: e.clientX, y: e.clientY };
    moveCounterRef.current += 1;

    if (moveCounterRef.current < MOVES_REQUIRED) return;

    moveCounterRef.current = 0;
    addImage(e.clientX, e.clientY);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    el.addEventListener("mousemove", handleMouseMove);
    return () => el.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  /* ---------------- RENDER ---------------- */

  return (
    <section
      ref={sectionRef}
      className="relative isolate h-screen overflow-hidden bg-[#0a0a0a]"
    >
      {/* ---------------- IMAGE LAYER ---------------- */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <AnimatePresence>
          {images.map((img, index) => {
            const depth = index / Math.max(images.length - 1, 1);

            return (
              <motion.div
                key={img.id}
                className="absolute"
                style={{
                  left: img.x,
                  top: img.y,
                }}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{
                  opacity: 1 - depth * 0.15,
                  scale: 0.95 - depth * 0.08,
                }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <img
                  src={img.src}
                  width={IMAGE_SIZE}
                  height={IMAGE_SIZE}
                  className="rounded-2xl object-cover shadow-2xl"
                  style={{ mixBlendMode: "normal" }}
                  alt=""
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* ---------------- TEXT LAYER (TOP) ---------------- */}
      <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center pointer-events-none">
        <h1 className="mt-12 text-white text-6xl md:text-8xl tracking-tight font-black">
          DR. LUMBAN
        </h1>
      </div>
    </section>
  );
}

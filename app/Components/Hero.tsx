"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { useTheme } from "./ThemeContext";

/* ---------------- CONFIG ---------------- */

const IMAGE_SIZE = 260;
const MOVE_DISTANCE = 16;
const MOVES_REQUIRED = 8;
const REMOVE_DELAY = 5000;
const MAX_IMAGES = 12;

const IMAGES = [
  // "/resultado rinoplastia antes despues paciente 1 dr lumban Tijuana.webp",
  "/Dr Jaime Lumban revision nariz otorrinolaringologia Tijuana.webp",
  "/Dr. jaime lumban en su consultorio.webp",
  "/resultado rinoplastia antes despues paciente 3 dr lumban Tijuana.webp",

  // "/Dr Jaime Lumban tratamiento especializado paciente otorrino Tijuana.webp",
  "/Dr Jaime Lumban revision oido otorrinolaringologia Tijuana.webp",
  "/resultado rinoplastia antes despues paciente 4 dr lumban Tijuana.webp",

  "/Dr Jaime Lumban atencion paciente consultorio Tijuana.webp",
  "/Dr Jaime Lumban rostro consulta otorrinolaringologia Tijuana.webp",
  "/resultado rinoplastia antes despues paciente 2 dr lumban Tijuana.webp",

  // "/Dr Jaime Lumban consulta paciente oido nariz garganta Tijuana.webp",
];

interface TrailImage {
  id: number;
  src: string;
  x: number;
  y: number;
}

export default function OurWaveHero() {
  const [images, setImages] = useState<TrailImage[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const { theme } = useTheme();

  const idRef = useRef(0);
  const imgIndexRef = useRef(0);
  const moveCounterRef = useRef(0);
  const lastMouseRef = useRef({ x: 0, y: 0 });

  /* -------- PRELOAD IMAGES -------- */
  useEffect(() => {
    let isMounted = true;

    const preloadImages = async () => {
      const imagePromises = IMAGES.map((src) => {
        return new Promise<void>((resolve, reject) => {
          const img = new window.Image();
          img.src = src;
          img.onload = () => resolve();
          img.onerror = () => reject(new Error(`Failed to load ${src}`));
        });
      });

      try {
        await Promise.all(imagePromises);
        if (isMounted) {
          setImagesLoaded(true);
        }
      } catch (err) {
        console.error("Error preloading images:", err);
        // Aún así marca como cargado para no bloquear la UI
        if (isMounted) {
          setImagesLoaded(true);
        }
      }
    };

    preloadImages();

    return () => {
      isMounted = false;
    };
  }, []);

  /* -------- ADD IMAGE -------- */
  const addImage = useCallback((x: number, y: number) => {
    if (!sectionRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();

    const img: TrailImage = {
      id: idRef.current++,
      src: IMAGES[imgIndexRef.current],
      x: x - rect.left - IMAGE_SIZE / 2,
      y: y - rect.top - IMAGE_SIZE / 2,
    };

    imgIndexRef.current = (imgIndexRef.current + 1) % IMAGES.length;

    setImages((prev) => {
      const newImages = [...prev, img];
      return newImages.slice(-MAX_IMAGES);
    });

    setTimeout(() => {
      setImages((prev) => prev.filter((i) => i.id !== img.id));
    }, REMOVE_DELAY);
  }, []);

  /* -------- MOUSE MOVE -------- */
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!imagesLoaded) return; // No crear imágenes hasta que estén precargadas

      const dx = e.clientX - lastMouseRef.current.x;
      const dy = e.clientY - lastMouseRef.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < MOVE_DISTANCE) return;

      lastMouseRef.current = { x: e.clientX, y: e.clientY };
      moveCounterRef.current += 1;

      if (moveCounterRef.current < MOVES_REQUIRED) return;

      moveCounterRef.current = 0;
      addImage(e.clientX, e.clientY);
    },
    [addImage, imagesLoaded],
  );

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
      className="relative isolate h-screen overflow-hidden bg-white"
    >
      {/* HIDDEN PRELOAD IMAGES */}
      <div className="hidden" aria-hidden="true">
        {IMAGES.map((src) => (
          <img key={src} src={src} alt="" />
        ))}
      </div>

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
                <div className="shadow-2xl rounded-2xl overflow-hidden">
                  <img
                    src={img.src}
                    width={IMAGE_SIZE}
                    height={IMAGE_SIZE}
                    className="object-cover rounded-2xl"
                    style={{ mixBlendMode: "normal" }}
                    alt=""
                    aria-hidden="true"
                    loading="eager"
                  />
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* ---------------- TEXT LAYER ---------------- */}
      <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center pointer-events-none">
        <h1
          style={{
            color:
              theme === "morado"
                ? "#A0ADD9"
                : theme === "azul"
                  ? "#4588C8"
                  : "#A2CC80",
          }}
          className="mt-12 capitalize text-7xl md:text-[200px] tracking-tighter font-black"
        >
          Dr. Lumbán
        </h1>
      </div>

      {/* ---------------- SCROLL CTA ARROW ---------------- */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 pointer-events-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <motion.button
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          onClick={() =>
            document
              .getElementById("scroll-next")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          aria-label="Ir a la siguiente sección"
          style={{
            backgroundColor:
              theme === "morado"
                ? "rgba(160, 173, 217, 0.85)"
                : theme === "azul"
                  ? "rgba(69, 136, 200, 0.85)"
                  : "rgba(162, 204, 128, 0.85)",
            borderColor:
              theme === "morado"
                ? "rgba(160, 173, 217, 1)"
                : theme === "azul"
                  ? "rgba(69, 136, 200, 1)"
                  : "rgba(162, 204, 128, 1)",
          }}
          className="w-14 h-14 rounded-full border-2 flex items-center justify-center backdrop-blur-sm hover:scale-110 transition-transform cursor-pointer shadow-lg"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ color: "#ffffff" }}
          >
            <path
              d="M6 12L16 22L26 12"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>
      </motion.div>
    </section>
  );
}

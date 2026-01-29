"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";

const CASES = [
  {
    title: "Rinoplastia Estética",
    href: "/project/rinoplastia-estetica",
    image:
      "/Dr Jaime Lumban otorrinolaringologo en pared lisa y mirando de frente.png",
    tag: "Coming soon",
  },
  {
    title: "Cirugía de Sinusitis",
    href: "/project/cirugia-sinusitis",
    image:
      "/Dr Lumban en consulta mostrando un antes y despues de una cirugia de nariz Rinoplastia.png",
  },
  {
    title: "Tratamiento de Otitis",
    href: "/project/tratamientos-otitis",
    image:
      "/Imagen Dr Lumban recargado en la pared en consultorio de otorrinolaringologia.png",
  },
  {
    title: "Desviación de Tabique",
    href: "/project/tech-repair",
    image:
      "/pose de Doctor Jaime lumban otorrino con brazos cruzados y traje azul.png",
  },
];

export default function CasesGrid() {
  return (
    <section className="px-6 py-20">
      <h2 className="text-4xl md:text-5xl font-light mb-12">
        Casos Destacados
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
              href={item.href}
              className={`group relative ${colSpan}`}
            >
              <motion.div
                className="relative h-[320px] md:h-[420px] rounded-2xl overflow-hidden"
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                {/* IMAGE */}
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  variants={{
                    rest: { scale: 1, filter: "blur(0px)" },
                    hover: { scale: 1.06 },
                  }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />

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

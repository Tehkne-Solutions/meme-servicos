"use client";
import React from "react";
import { motion } from "framer-motion";

const logos = [
  { src: "/images/clientes/clientes-logo-mr-mix-shakes.png", alt: "Mr Mix Shakes" },
  { src: "/images/clientes/clientes-logo-oticas-ipanema.png", alt: "Óticas Ipanema" },
  { src: "/images/clientes/clientes-logo-sotela.png", alt: "Sotela" },
  { src: "/images/clientes/clientes-logo-voluta-medical.png", alt: "Voluta Medical" },
  { src: "/images/clientes/clientes-logo-doutor-center.png", alt: "Doutor Center" },
  { src: "/images/clientes/clientes-logo-ecovis-bsp.png", alt: "Ecovis BSP" },
  { src: "/images/clientes/clientes-logo-lanchao-hamburgueres.png", alt: "Lanchão" },
  { src: "/images/clientes/clientes-logo-max-medical.png", alt: "Max Medical" },
];

export const LogoCarousel = () => {
  const finalLogos = [...logos, ...logos, ...logos];

  return (
    <div className="w-full py-24 bg-white overflow-hidden border-y border-gray-100">
      <div className="relative flex overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[150px] before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[150px] after:bg-gradient-to-l after:from-white after:to-transparent">
        <motion.div
          className="flex flex-nowrap items-center gap-32"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {finalLogos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-16 w-auto max-w-[200px] object-contain flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

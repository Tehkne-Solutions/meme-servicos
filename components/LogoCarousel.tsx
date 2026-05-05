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
    <div className="w-full py-12 bg-white overflow-hidden">
      <div className="relative flex overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[150px] before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[150px] after:bg-gradient-to-l after:from-white after:to-transparent">
        <motion.div
          className="flex flex-nowrap items-center"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
        >
          {finalLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[250px] h-[100px] flex items-center justify-center px-10 group"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-12 w-auto object-contain opacity-50 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

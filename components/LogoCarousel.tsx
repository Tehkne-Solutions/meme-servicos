"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const clientLogos = [
  { src: "/images/clientes/clientes-logo-doutor-center.png", alt: "Doutor Center" },
  { src: "/images/clientes/clientes-logo-ecovis-bsp.png", alt: "Ecovis BSP" },
  { src: "/images/clientes/clientes-logo-lanchao-hamburgueres.png", alt: "Lanchão" },
  { src: "/images/clientes/clientes-logo-max-medical.png", alt: "Max Medical" },
  { src: "/images/clientes/clientes-logo-mr-mix-shakes.png", alt: "Mr Mix Shakes" },
  { src: "/images/clientes/clientes-logo-oticas-ipanema.png", alt: "Óticas Ipanema" },
  { src: "/images/clientes/clientes-logo-sotela.png", alt: "Sotela" },
  { src: "/images/clientes/clientes-logo-voluta-medical.png", alt: "Voluta Medical" },
];

export const LogoCarousel = () => {
  // Duplicamos o array para o loop ser imperceptível
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <div className="w-full py-12 bg-gray-50/50 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-8 mb-8">
        <h3 className="text-gray-400 text-sm font-bold uppercase tracking-[0.2em] text-center md:text-left">
          Empresas que confiam na Meme Digital
        </h3>
      </div>

      {/* Container com máscara de transparência nas bordas (O toque Premium) */}
      <div className="relative flex overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[150px] before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[150px] after:bg-gradient-to-l after:from-white after:to-transparent">

        <motion.div
          className="flex flex-nowrap"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            ease: "linear",
            duration: 35, // Velocidade enterprise: nem muito rápido, nem muito lento
            repeat: Infinity,
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[250px] h-[100px] flex items-center justify-center px-10 group"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={180}
                height={80}
                className="object-contain opacity-50 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        isScrolled ? "bg-white/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-8 flex items-center justify-between">
        <div className="relative w-[150px] h-[40px]">
          <Image src="/images/logo-principal.png" alt="Logo" fill className="object-contain" />
        </div>

        <nav className="hidden md:flex items-center gap-10">
          {["Serviços", "Diferenciais", "Metodologia", "Contato"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[15px] font-medium text-[#1A1A1A] hover:text-[#6767F1] transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#6767F1] transition-all group-hover:w-full" />
            </a>
          ))}
          <motion.button
            className="btn-premium px-6 py-3 text-[14px]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            ORÇAMENTO
          </motion.button>
        </nav>
      </div>
    </header>
  );
};
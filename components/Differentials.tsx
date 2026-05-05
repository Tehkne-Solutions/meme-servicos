"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./MotionWrapper";

const differentials = [
  {
    title: "Equipe especializada",
    desc: "Profissionais focados em crescimento digital e marketing de performance.",
  },
  {
    title: "Processo comprovado",
    desc: "Metodologia testada em empresas de diversos segmentos.",
  },
  {
    title: "Entregas de alto valor",
    desc: "Mapas estratégicos orientados para resultados reais.",
  },
];

export default function Differentials() {
  // Duplicar os itens para efeito infinito
  const duplicatedDifferentials = [...differentials, ...differentials];

  return (
    <section className="py-section bg-white overflow-hidden">
      <div className="container-custom">
        <FadeIn delay={0.2}>
          <div className="text-center mb-10">
            <h2 className="text-h2 font-bold text-dark">Diferenciais Meme Digital</h2>
            <p className="text-body text-gray mt-4 max-w-[680px] mx-auto">
              Uma abordagem orientada por dados, performance e tecnologia para conectar pessoas e negócios.
            </p>
          </div>
        </FadeIn>

        <div className="relative">
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -100 * differentials.length], // Move baseado no número de itens
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20, // Velocidade do carrossel
                ease: "linear",
              },
            }}
            style={{ width: `${duplicatedDifferentials.length * 100}%` }}
          >
            {duplicatedDifferentials.map((item, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-[calc(100%/3)] md:w-[calc(100%/6)]"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-gray-light rounded-card p-8 shadow-card h-full">
                  <div className="w-12 h-12 bg-primary rounded-card mb-5" />
                  <h3 className="text-h3 font-bold text-dark mb-3">{item.title}</h3>
                  <p className="text-body text-gray">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

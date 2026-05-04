"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Para quem é esse serviço?",
    a: "Empresas que já faturam e querem crescer com estratégia.",
  },
  {
    q: "Em quanto tempo vejo resultado?",
    a: "Você sai com um plano claro em até 30 dias.",
  },
  {
    q: "Preciso ter equipe?",
    a: "Não. O plano é adaptado à sua realidade atual.",
  },
  {
    q: "Isso inclui execução?",
    a: "Inclui direcionamento completo para execução.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-section bg-white">
      <div className="container-custom max-w-3xl">
        <h2 className="text-h2 font-bold text-center text-dark mb-10">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border border-gray-light rounded-card p-6 cursor-pointer hover:bg-gray-light transition"
              onClick={() => setOpen(open === index ? null : index)}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-semibold text-body text-dark">{item.q}</h3>
                <span className="text-h3 font-bold text-primary">{open === index ? "−" : "+"}</span>
              </div>
              {open === index && <p className="mt-4 text-body text-gray leading-relaxed">{item.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

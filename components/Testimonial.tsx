"use client";

import { FadeIn } from "./MotionWrapper";

export default function Testimonial() {
  return (
    <section className="bg-[#6767F1] py-20 font-['Plus_Jakarta_Sans'] text-white md:py-24">
      <div className="mx-auto max-w-[1000px] px-6 text-center">
        <FadeIn delay={0.2}>
          <p className="text-[72px] font-black leading-none text-[#80D509]">“</p>
          <blockquote className="text-[32px] font-bold leading-tight md:text-[48px]">
            A Meme estruturou nosso funil e hoje temos previsibilidade de leads toda semana.
          </blockquote>
          <p className="mt-8 text-[20px] font-semibold text-white/80">
            — Diretor Comercial, indústria
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

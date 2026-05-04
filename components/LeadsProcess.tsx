"use client";

import Container from "./ui/Container";

export default function LeadsProcess() {
  return (
    <section className="py-[96px] bg-white font-jakarta">
      <Container>
        <div className="grid grid-cols-12 gap-8 items-start">

          {/* Lado Esquerdo: Fluxograma de Processos */}
          <div className="col-span-12 md:col-span-7 grid grid-cols-2 gap-4">
            {[
              "Planejamento estratégico",
              "Criação de landing pages",
              "Tráfego pago segmentado",
              "Integração com CRM",
              "Nutrição automatizada"
            ].map((text, i) => (
              <div
                key={i}
                className="border-2 border-primary p-6 h-[97px] flex items-center justify-center text-center text-primary font-poppins font-medium text-[21px]"
              >
                {text}
              </div>
            ))}
          </div>

          {/* Lado Direito: Texto e CTA */}
          <div className="col-span-12 md:col-span-5 text-right flex flex-col items-end">
            <h2 className="text-dark text-[50px] leading-[63px] font-bold mb-6">
              Processo de Aquisição de Leads + Funil de Vendas
            </h2>
            <p className="text-[20px] leading-[30px] text-black/80 mb-8 max-w-[345px]">
              Atrair os clientes certos, aumentar o reconhecimento da marca e vender muito mais!
            </p>
            <button className="bg-success hover:brightness-105 transition-all text-white w-[376px] h-[70px] uppercase font-semibold text-[20px]">
              Solicitar proposta
            </button>
          </div>

        </div>
      </Container>
    </section>
  );
}

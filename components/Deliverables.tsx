import React from 'react';

const Deliverables = () => {
  return (
    <section className="w-full flex justify-center my-32 font-['Plus_Jakarta_Sans'] overflow-visible">
      {/* Container Principal Azul - Fiel às medidas: 1220px x 450px */}
      <div className="relative w-[1220px] h-[450px] bg-[#6767F1]">

        {/* Coluna 1: Valores (Esquerda) - Offset exato calculado (155px - 110px = 45px) */}
        <div className="absolute left-[45px] top-[122px] flex flex-col gap-[84px] w-[297px]">
          <div>
            <p className="text-white opacity-80 text-[25px] font-normal leading-[34px]">
              Valor total estimado:
            </p>
            <p className="text-white text-[25px] font-bold leading-[34px]">
              R$ 80.000
            </p>
          </div>

          <div>
            <p className="text-white opacity-80 text-[25px] font-normal leading-[34px]">
              Valor percebido:
            </p>
            <p className="text-white text-[25px] font-bold leading-[34px]">
              acima de R$ 150.000
            </p>
          </div>
        </div>

        {/* Coluna 2: Lista "Incluindo" (Centro) - Offset exato calculado (492px - 110px = 382px) */}
        <div className="absolute left-[382px] top-[122px] w-[378px]">
          <h3 className="text-white text-[35px] font-bold leading-[32px] tracking-[-0.01em] mb-6">
            Incluindo:
          </h3>
          <ul className="space-y-4">
            {[
              "Auditorias completas",
              "Plano de crescimento (12 meses)",
              "Ações priorizadas",
              "Materiais prontos para uso"
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-white text-[22px] font-normal">
                <span className="text-[#1D1D1D] font-bold text-[20px]">✔</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Coluna 3: Box com Borda Preta "Valor dos Entregáveis" */}
        {/* Offset Esquerda: 792px | Offset Topo: 50px */}
        <div className="absolute left-[792px] top-[50px] w-[378px] h-[480px] border-[4px] border-[#1D1D1D] bg-transparent">
          {/* Texto alinhado à esquerda e posicionado 121px do topo da borda preta (centralizando com a azul) */}
          <h2 className="absolute top-[121px] left-[52px] text-white text-[50px] font-bold leading-[63px] tracking-[-0.03em] text-left w-[273px]">
            Valor dos Entregáveis
          </h2>
        </div>

      </div>
    </section>
  );
};

export default Deliverables;

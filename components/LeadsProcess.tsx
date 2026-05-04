"use client";

export default function LeadsProcess() {
  return (
    <section className="py-section bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 md:col-span-6">
            <h2 className="text-h2 font-bold text-dark">Processo de Aquisição de Leads + Funil de Vendas</h2>
            <p className="text-body text-gray mt-4 max-w-[520px]">
              Atinja suas metas com um fluxo claro: aquisição, qualificação e fechamento consistentes.
            </p>
            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
                <p className="font-semibold">Geração de tráfego qualificado</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-secondary rounded-full flex items-center justify-center text-white font-bold">2</div>
                <p className="font-semibold">Nutrição e qualificação de leads</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-green rounded-full flex items-center justify-center text-dark font-bold">3</div>
                <p className="font-semibold">Conversão com funil sólido</p>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="bg-gray-light rounded-card p-8 shadow-card">
              <h3 className="text-h3 font-bold mb-4">Solicite proposta</h3>
              <form className="space-y-4">
                <input className="input" placeholder="Nome completo" />
                <input className="input" placeholder="Email" />
                <input className="input" placeholder="Telefone" />
                <button className="w-full bg-primary text-white py-3 rounded-card font-semibold hover:opacity-90 transition">
                  SOLICITAR PROPOSTA
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

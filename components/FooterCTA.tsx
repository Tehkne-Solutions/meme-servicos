"use client";

export default function FooterCTA() {
  return (
    <section className="py-section bg-dark text-white">
      <div className="container-custom max-w-4xl">
        <div className="text-center">
          <h2 className="text-hero font-bold leading-tight">
            Conectamos Pessoas e Negócios no Digital.
          </h2>
          <p className="mt-6 text-body text-white/80">
            Pare de crescer no improviso. Tenha um plano claro para escalar seus resultados.
          </p>
        </div>
        <div className="mt-10 bg-white rounded-card p-8 text-dark shadow-card">
          <form className="grid gap-4 md:grid-cols-2">
            <input className="input" placeholder="Nome" />
            <input className="input" placeholder="Empresa" />
            <input className="input" placeholder="Email" />
            <input className="input" placeholder="Telefone" />
            <motion.button
              className="btn-premium md:col-span-2 py-4 text-body"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              QUERO MEU MAPA ESTRATÉGICO
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
}

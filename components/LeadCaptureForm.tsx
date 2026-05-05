"use client";

import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";

type LeadFormVariant = "hero" | "footer";

type LeadFormProps = {
  submitLabel: string;
  variant: LeadFormVariant;
};

type LeadFormData = {
  nome: string;
  email: string;
  empresa: string;
  telefone: string;
  setor: string;
  faturamento: string;
};

const initialFormData: LeadFormData = {
  nome: "",
  email: "",
  empresa: "",
  telefone: "",
  setor: "",
  faturamento: "",
};

const sharedInputClasses =
  "w-full border-2 border-[#6C5CE7] bg-white px-6 text-[17px] text-[#1A1A1A] outline-none transition-all placeholder:text-gray-400 focus:bg-[#F8F7FF] focus:ring-2 focus:ring-[#6C5CE7]/20";

const variantCopy = {
  hero: {
    formClassName: "flex flex-col gap-4",
    emailPlaceholder: "E-mail Corporativo",
    phonePlaceholder: "WhatsApp",
    sectorPlaceholder: "Setor",
    revenuePlaceholder: "Faturamento",
  },
  footer: {
    formClassName: "flex flex-col gap-5",
    emailPlaceholder: "Qual seu e-mail corporativo?",
    phonePlaceholder: "Telefone / WhatsApp",
    sectorPlaceholder: "Setor de Atuação",
    revenuePlaceholder: "Faturamento Mensal",
  },
} satisfies Record<
  LeadFormVariant,
  {
    formClassName: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    sectorPlaceholder: string;
    revenuePlaceholder: string;
  }
>;

export default function LeadCaptureForm({ submitLabel, variant }: LeadFormProps) {
  const [formData, setFormData] = useState<LeadFormData>(initialFormData);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  useEffect(() => {
    if (status !== "success") {
      return;
    }

    const timeoutId = window.setTimeout(() => setStatus("idle"), 5000);
    return () => window.clearTimeout(timeoutId);
  }, [status]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Falha ao enviar contato.");
      }

      setStatus("success");
      setFormData(initialFormData);
    } catch (error) {
      console.error("Erro ao enviar lead:", error);
      setStatus("error");
    }
  };

  const copy = variantCopy[variant];
  const inputClassName = `${sharedInputClasses} h-[62px]`;
  const buttonClassName =
    variant === "footer"
      ? "cta-premium mt-4 h-[70px] w-full bg-[#80D509] text-[18px] font-black uppercase text-white shadow-md hover:bg-[#8DEF0A] hover:shadow-[0_15px_30px_rgba(128,213,9,0.4)] disabled:cursor-not-allowed disabled:bg-gray-400 disabled:hover:translate-y-0 disabled:hover:shadow-none"
      : "cta-premium h-[70px] w-full bg-[#80D509] text-[18px] font-black uppercase text-white shadow-xl hover:bg-[#8DEF0A] hover:shadow-[0_15px_30px_rgba(128,213,9,0.4)] disabled:cursor-not-allowed disabled:bg-gray-400 disabled:hover:translate-y-0 disabled:hover:shadow-none";

  const messageClassName =
    variant === "footer"
      ? {
          success: "mt-2 text-center font-bold text-[#80D509]",
          error: "mt-2 text-center font-bold text-red-500",
        }
      : {
          success: "mt-2 text-center font-semibold text-white",
          error: "mt-2 text-center font-semibold text-red-100",
        };

  return (
    <form onSubmit={handleSubmit} className={copy.formClassName}>
      <input
        autoComplete="name"
        className={inputClassName}
        name="nome"
        onChange={handleChange}
        placeholder="Nome Completo"
        required
        type="text"
        value={formData.nome}
      />

      <input
        autoComplete="email"
        className={`${inputClassName} uppercase`}
        name="email"
        onChange={handleChange}
        placeholder={copy.emailPlaceholder}
        required
        type="email"
        value={formData.email}
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <input
          autoComplete="organization"
          className={inputClassName}
          name="empresa"
          onChange={handleChange}
          placeholder="Empresa"
          required
          type="text"
          value={formData.empresa}
        />

        <input
          autoComplete="tel"
          className={inputClassName}
          name="telefone"
          onChange={handleChange}
          placeholder={copy.phonePlaceholder}
          required
          type="tel"
          value={formData.telefone}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <input
          className={inputClassName}
          name="setor"
          onChange={handleChange}
          placeholder={copy.sectorPlaceholder}
          required
          type="text"
          value={formData.setor}
        />

        <input
          className={inputClassName}
          name="faturamento"
          onChange={handleChange}
          placeholder={copy.revenuePlaceholder}
          required
          type="text"
          value={formData.faturamento}
        />
      </div>

      <button className={buttonClassName} disabled={status === "submitting"} type="submit">
        {status === "submitting" ? "Enviando..." : submitLabel}
      </button>

      <div aria-live="polite">
        {status === "success" && (
          <p className={messageClassName.success}>Pronto! Recebemos seus dados com sucesso.</p>
        )}
        {status === "error" && (
          <p className={messageClassName.error}>
            Erro no envio. Tente novamente em alguns instantes.
          </p>
        )}
      </div>
    </form>
  );
}

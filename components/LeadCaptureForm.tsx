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
  site: string;
  cargo: string;
  telefone: string;
};

const initialFormData: LeadFormData = {
  nome: "",
  email: "",
  empresa: "",
  site: "",
  cargo: "",
  telefone: "",
};

const sharedInputClasses =
  "w-full rounded-none bg-white text-[15px] text-[#1A1A1A] outline-none transition-all placeholder:text-[#4D4D4D]";

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

  const inputClassName =
    variant === "footer"
      ? `${sharedInputClasses} h-[55px] border-[2px] border-[#6C5CE7] px-4 focus:bg-[#F8F7FF] focus:ring-2 focus:ring-[#6C5CE7]/20`
      : `${sharedInputClasses} h-[62px] border border-white/10 px-5 focus:ring-2 focus:ring-white/40`;

  const buttonClassName =
    variant === "footer"
      ? "cta-premium mt-4 h-[65px] w-full bg-[#80D509] text-[16px] font-bold uppercase text-white hover:bg-[#8DEF0A] hover:shadow-[0_15px_30px_rgba(128,213,9,0.4)] disabled:cursor-not-allowed disabled:bg-gray-400 disabled:hover:translate-y-0 disabled:hover:shadow-none"
      : "cta-premium mt-6 h-[62px] w-full bg-[#80D509] px-8 text-[15px] font-bold uppercase text-white hover:bg-[#8DEF0A] hover:shadow-[0_15px_30px_rgba(128,213,9,0.4)] disabled:cursor-not-allowed disabled:bg-gray-400 disabled:hover:translate-y-0 disabled:hover:shadow-none";

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
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
        className={inputClassName}
        name="email"
        onChange={handleChange}
        placeholder="E-mail Corporativo"
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
          autoComplete="url"
          className={inputClassName}
          name="site"
          onChange={handleChange}
          placeholder="Site da Empresa"
          type="text"
          value={formData.site}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <input
          autoComplete="organization-title"
          className={inputClassName}
          name="cargo"
          onChange={handleChange}
          placeholder="Seu Cargo"
          required
          type="text"
          value={formData.cargo}
        />

        <input
          autoComplete="tel"
          className={inputClassName}
          name="telefone"
          onChange={handleChange}
          placeholder="WhatsApp / Telefone"
          required
          type="tel"
          value={formData.telefone}
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

"use client";

import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { motion } from "framer-motion";

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
  "w-full h-[65px] border-2 border-[#6767F1] bg-white px-6 text-[18px] text-[#1A1A1A] outline-none transition-all placeholder:text-[18px] placeholder:text-gray-400 focus:bg-[#F8F7FF] focus:ring-2 focus:ring-[#6767F1]/20";

export default function LeadCaptureForm({ submitLabel, variant }: LeadFormProps) {
  const [formData, setFormData] = useState<LeadFormData>(initialFormData);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  useEffect(() => {
    if (status !== "success") return;
    const timeoutId = window.setTimeout(() => setStatus("idle"), 5000);
    return () => window.clearTimeout(timeoutId);
  }, [status]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Falha ao enviar contato.");
      setStatus("success");
      setFormData(initialFormData);
    } catch (error) {
      console.error("Erro ao enviar lead:", error);
      setStatus("error");
    }
  };

  const messageClassName =
    variant === "footer"
      ? { success: "mt-2 text-center font-bold text-[#80D509]", error: "mt-2 text-center font-bold text-red-500" }
      : { success: "mt-2 text-center font-semibold text-white", error: "mt-2 text-center font-semibold text-red-100" };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
      <input
        autoComplete="name"
        className={sharedInputClasses}
        name="nome"
        onChange={handleChange}
        placeholder="Nome completo"
        required
        type="text"
        value={formData.nome}
      />
      <input
        autoComplete="email"
        className={sharedInputClasses}
        name="email"
        onChange={handleChange}
        placeholder="Qual seu e-mail corporativo?"
        required
        type="email"
        value={formData.email}
      />
      <input
        autoComplete="organization"
        className={sharedInputClasses}
        name="empresa"
        onChange={handleChange}
        placeholder="Empresa"
        required
        type="text"
        value={formData.empresa}
      />
      <input
        autoComplete="tel"
        className={sharedInputClasses}
        name="telefone"
        onChange={handleChange}
        placeholder="Telefone / WhatsApp"
        required
        type="tel"
        value={formData.telefone}
      />
      <input
        className={sharedInputClasses}
        name="setor"
        onChange={handleChange}
        placeholder="Setor de atuação"
        required
        type="text"
        value={formData.setor}
      />
      <input
        className={sharedInputClasses}
        name="faturamento"
        onChange={handleChange}
        placeholder="Faturamento mensal"
        required
        type="text"
        value={formData.faturamento}
      />

      <motion.button
        className="cta-premium mt-2 flex h-[80px] w-full items-center justify-center bg-[#80D509] px-6 text-center text-[20px] font-black uppercase leading-tight text-white shadow-md hover:brightness-105 active:scale-[0.99] disabled:cursor-not-allowed disabled:bg-gray-400"
        disabled={status === "submitting"}
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {status === "submitting" ? "Enviando..." : submitLabel}
      </motion.button>

      <div aria-live="polite">
        {status === "success" && <p className={messageClassName.success}>Pronto! Recebemos seus dados com sucesso.</p>}
        {status === "error" && <p className={messageClassName.error}>Erro no envio. Tente novamente em alguns instantes.</p>}
      </div>
    </form>
  );
}

"use client";

import { type KeyboardEvent, useEffect, useMemo, useRef, useState } from "react";

type ChatStep = "intro" | "name" | "email" | "phone" | "department" | "done";

type ChatForm = {
  name: string;
  email: string;
  phone: string;
};

type WhatsAppDepartment = {
  id: string;
  label: string;
  subtitle: string;
  phone: string;
};

const CHAT_STEP_ORDER: ChatStep[] = ["intro", "name", "email", "phone", "department", "done"];
const AUTO_OPEN_STORAGE_KEY = "meme-whatsapp-chat-opened";
const TYPING_DELAY_MS = 760;
const DEFAULT_WHATSAPP_TEXT = "Olá! Quero atendimento da Meme Digital.";

const fallbackDepartments: WhatsAppDepartment[] = [
  {
    id: "geral",
    label: "Atendimento Meme Digital",
    subtitle: "Estratégia, proposta e dúvidas gerais",
    phone: "",
  },
];

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M16.02 3.2C9.02 3.2 3.34 8.83 3.34 15.77c0 2.23.6 4.4 1.73 6.31L3.2 28.8l6.9-1.8a12.8 12.8 0 0 0 5.91 1.5h.01c7 0 12.68-5.64 12.68-12.57S23.02 3.2 16.02 3.2Zm0 22.99h-.01c-1.88 0-3.72-.5-5.33-1.45l-.38-.22-4.1 1.07 1.1-3.96-.25-.4a10.2 10.2 0 0 1-1.57-5.46c0-5.66 4.64-10.25 10.34-10.25 2.76 0 5.36 1.07 7.31 3.01a10.16 10.16 0 0 1 3.03 7.24c0 5.65-4.64 10.24-10.34 10.24Zm5.67-7.67c-.31-.15-1.84-.9-2.12-1-.28-.1-.49-.15-.7.15-.2.3-.8 1-.98 1.2-.18.2-.36.22-.67.07-.31-.15-1.3-.47-2.48-1.52a9.26 9.26 0 0 1-1.72-2.12c-.18-.3-.02-.46.13-.61.14-.14.31-.36.46-.54.15-.18.2-.3.31-.5.1-.2.05-.38-.03-.53-.08-.15-.7-1.66-.95-2.27-.25-.6-.5-.51-.7-.52l-.59-.01c-.2 0-.54.07-.82.38-.28.3-1.08 1.05-1.08 2.56 0 1.5 1.1 2.96 1.26 3.16.15.2 2.16 3.27 5.23 4.58.73.31 1.3.5 1.75.64.73.23 1.4.2 1.93.12.59-.09 1.84-.74 2.1-1.46.26-.72.26-1.33.18-1.46-.08-.13-.28-.2-.59-.35Z"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="m13.41 12 5.3-5.29-1.42-1.42-5.29 5.3-5.29-5.3-1.42 1.42 5.3 5.29-5.3 5.29 1.42 1.42 5.29-5.3 5.29 5.3 1.42-1.42-5.3-5.29Z" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2 .01 7Z" />
    </svg>
  );
}

function normalizePhone(value: string): string {
  const digits = value.replace(/\D/g, "");
  if (!digits) return "";
  if (digits.startsWith("55")) return digits;
  return `55${digits}`;
}

function cleanDigits(value: string, maxLength: number): string {
  return value.replace(/\D/g, "").slice(0, maxLength);
}

function formatPhoneInput(value: string): string {
  const digits = cleanDigits(value, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function createWhatsAppHref(phone: string, message = DEFAULT_WHATSAPP_TEXT): string {
  const normalizedPhone = normalizePhone(phone);
  if (!normalizedPhone) return "";
  return `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(message)}`;
}

function isAgentStepVisible(current: ChatStep | null, target: ChatStep): boolean {
  if (!current) return false;
  return CHAT_STEP_ORDER.indexOf(current) >= CHAT_STEP_ORDER.indexOf(target);
}

export default function MemeWhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [departments, setDepartments] = useState<WhatsAppDepartment[]>(fallbackDepartments);
  const [loading, setLoading] = useState(false);
  const [selectedDepartmentId, setSelectedDepartmentId] = useState("geral");
  const [step, setStep] = useState<ChatStep>("intro");
  const [visibleAgentStep, setVisibleAgentStep] = useState<ChatStep | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [chatForm, setChatForm] = useState<ChatForm>({ name: "", email: "", phone: "" });
  const [currentValue, setCurrentValue] = useState("");
  const [fieldError, setFieldError] = useState("");
  const hasLoadedDepartmentsRef = useRef(false);
  const chatBodyRef = useRef<HTMLDivElement | null>(null);

  const sortedDepartments = useMemo(
    () => [...departments].sort((a, b) => a.label.localeCompare(b.label, "pt-BR")),
    [departments]
  );

  const selectedDepartment = sortedDepartments.find((department) => department.id === selectedDepartmentId) ?? sortedDepartments[0];
  const canSubmitTextStep = step === "intro" || step === "name" || step === "email" || step === "phone";
  const isCurrentStepReady = visibleAgentStep === step && !isTyping;

  useEffect(() => {
    if (!isOpen || hasLoadedDepartmentsRef.current) return;

    const controller = new AbortController();
    hasLoadedDepartmentsRef.current = true;
    setLoading(true);

    fetch("/api/whatsapp-atendimento", { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : { items: fallbackDepartments }))
      .then((payload: { items?: WhatsAppDepartment[] } | WhatsAppDepartment[]) => {
        const items = Array.isArray(payload) ? payload : payload.items;
        if (Array.isArray(items) && items.length > 0) {
          setDepartments(items);
          setSelectedDepartmentId(items[0].id);
        }
      })
      .catch(() => {
        setDepartments(fallbackDepartments);
        hasLoadedDepartmentsRef.current = false;
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [isOpen]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.sessionStorage.getItem(AUTO_OPEN_STORAGE_KEY) === "true") return;

    const timerId = window.setTimeout(() => {
      window.sessionStorage.setItem(AUTO_OPEN_STORAGE_KEY, "true");
      setIsOpen(true);
    }, 7000);

    return () => window.clearTimeout(timerId);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  useEffect(() => {
    setCurrentValue("");
    setFieldError("");
  }, [step]);

  useEffect(() => {
    if (!isOpen || step === "done" || visibleAgentStep === step) return;

    setIsTyping(true);
    const timerId = window.setTimeout(() => {
      setVisibleAgentStep(step);
      setIsTyping(false);
    }, TYPING_DELAY_MS);

    return () => window.clearTimeout(timerId);
  }, [isOpen, step, visibleAgentStep]);

  useEffect(() => {
    if (!isOpen) return;
    const chatBody = chatBodyRef.current;
    if (!chatBody) return;
    chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
  }, [chatForm.email, chatForm.name, chatForm.phone, isOpen, isTyping, visibleAgentStep]);

  const resetChat = () => {
    setStep("intro");
    setVisibleAgentStep(null);
    setIsTyping(false);
    setChatForm({ name: "", email: "", phone: "" });
    setCurrentValue("");
    setFieldError("");
  };

  const openChat = () => {
    if (!isOpen && step === "done") resetChat();
    setIsOpen((current) => !current);
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem(AUTO_OPEN_STORAGE_KEY, "true");
    }
  };

  const submitCurrentStep = () => {
    const value = currentValue.trim();

    if (step === "intro") {
      setStep("name");
      return;
    }

    if (step === "name") {
      if (!value) {
        setFieldError("Digite seu nome para continuar.");
        return;
      }
      setChatForm((current) => ({ ...current, name: value }));
      setStep("email");
      return;
    }

    if (step === "email") {
      if (!/^\S+@\S+\.\S+$/.test(value)) {
        setFieldError("Digite um e-mail válido.");
        return;
      }
      setChatForm((current) => ({ ...current, email: value }));
      setStep("phone");
      return;
    }

    if (step === "phone") {
      const phoneDigits = cleanDigits(value, 11);
      if (phoneDigits.length < 10) {
        setFieldError("Digite um telefone válido.");
        return;
      }
      setChatForm((current) => ({ ...current, phone: formatPhoneInput(value) }));
      setStep("department");
    }
  };

  const handleInputChange = (value: string) => {
    setFieldError("");
    setCurrentValue(step === "phone" ? formatPhoneInput(value) : value);
  };

  const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    submitCurrentStep();
  };

  const startWhatsApp = () => {
    if (!selectedDepartment?.phone) {
      setFieldError("WhatsApp ainda não configurado. Defina MEME_WHATSAPP_PHONE na Vercel.");
      return;
    }

    const pageText = typeof window !== "undefined" ? `\nPágina: ${window.location.href}` : "";
    const message = [
      "Olá! Vim pelo chat do site da Meme Serviços e quero atendimento.",
      `Nome: ${chatForm.name}`,
      `E-mail: ${chatForm.email}`,
      `Telefone: ${chatForm.phone}`,
      `Assunto: ${selectedDepartment.label}`,
      `Contexto: ${selectedDepartment.subtitle}${pageText}`,
    ].join("\n");

    const href = createWhatsAppHref(selectedDepartment.phone, message);
    if (!href) {
      setFieldError("Número de WhatsApp inválido. Verifique a configuração do atendimento.");
      return;
    }

    window.open(href, "_blank", "noopener,noreferrer");
    setStep("done");
    setIsOpen(false);
  };

  return (
    <>
      <button
        type="button"
        className="fixed bottom-[max(16px,env(safe-area-inset-bottom))] right-[max(16px,env(safe-area-inset-right))] z-[1650] inline-flex min-h-[56px] items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-[18px] py-0 pl-3.5 text-[14px] font-black text-white shadow-[0_16px_26px_rgba(15,71,35,0.34)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_30px_rgba(15,71,35,0.40)] hover:saturate-110"
        aria-label="Abrir chat de atendimento pelo WhatsApp"
        onClick={openChat}
      >
        <WhatsAppIcon className="h-7 w-7 shrink-0" />
        <span className="hidden sm:inline">WhatsApp</span>
      </button>

      {isOpen ? (
        <section
          className="fixed bottom-[calc(max(16px,env(safe-area-inset-bottom))+76px)] right-[max(16px,env(safe-area-inset-right))] z-[1660] grid max-h-[min(620px,calc(100vh-112px))] w-[min(390px,calc(100vw-32px))] grid-rows-[auto_minmax(0,1fr)_auto] overflow-hidden rounded-[18px] bg-[#F2F7F4] p-0 shadow-[0_22px_46px_rgba(4,23,59,0.24)] max-[620px]:left-2.5 max-[620px]:right-2.5 max-[620px]:bottom-[calc(max(12px,env(safe-area-inset-bottom))+66px)] max-[620px]:w-auto max-[620px]:max-h-[calc(100vh-96px)]"
          aria-modal="false"
          role="dialog"
          aria-labelledby="meme-whatsapp-title"
        >
          <button
            type="button"
            className="absolute right-3 top-3 grid h-7 w-7 place-items-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
            aria-label="Fechar"
            onClick={() => setIsOpen(false)}
          >
            <CloseIcon />
          </button>

          <header className="flex min-h-[72px] items-center gap-2.5 bg-[#128C4A] py-3.5 pl-4 pr-[50px] text-white">
            <WhatsAppIcon className="h-[30px] w-[30px] shrink-0" />
            <div>
              <h2 id="meme-whatsapp-title" className="m-0 text-[17px] font-black leading-tight text-white">
                Atendimento Meme Digital
              </h2>
              <p className="m-0 mt-0.5 text-[12px] font-bold text-white/80">Online agora</p>
            </div>
          </header>

          <div
            className="flex min-h-[280px] max-h-[min(390px,calc(100vh-262px))] flex-col gap-[9px] overflow-y-auto bg-[linear-gradient(rgba(242,247,244,0.92),rgba(242,247,244,0.92)),radial-gradient(circle_at_18px_18px,rgba(18,140,74,0.14)_2px,transparent_2.5px)] bg-[length:auto,34px_34px] p-4 max-[620px]:min-h-[250px] max-[620px]:max-h-[calc(100vh-250px)] max-[620px]:p-3.5"
            ref={chatBodyRef}
          >
            {isAgentStepVisible(visibleAgentStep, "intro") ? (
              <p className="m-0 w-fit max-w-[86%] self-start rounded-2xl rounded-tl-[5px] bg-white px-3 py-2.5 text-[14px] leading-snug text-[#20382D] shadow-[0_6px_14px_rgba(18,45,34,0.08)] max-[620px]:max-w-[92%]">
                Olá! Quer estruturar seu marketing com a Meme? Eu te ajudo a iniciar o atendimento.
              </p>
            ) : null}

            {step !== "intro" ? (
              <p className="m-0 w-fit max-w-[86%] self-end rounded-2xl rounded-tr-[5px] bg-[#D8F7C8] px-3 py-2.5 text-[14px] leading-snug text-[#17331F] shadow-[0_6px_14px_rgba(18,45,34,0.08)] max-[620px]:max-w-[92%]">
                Quero atendimento
              </p>
            ) : null}

            {isAgentStepVisible(visibleAgentStep, "name") ? (
              <p className="m-0 w-fit max-w-[86%] self-start rounded-2xl rounded-tl-[5px] bg-white px-3 py-2.5 text-[14px] leading-snug text-[#20382D] shadow-[0_6px_14px_rgba(18,45,34,0.08)]">
                Perfeito. Primeiro, qual é o seu nome?
              </p>
            ) : null}
            {chatForm.name ? <p className="m-0 w-fit max-w-[86%] self-end rounded-2xl rounded-tr-[5px] bg-[#D8F7C8] px-3 py-2.5 text-[14px] leading-snug text-[#17331F] shadow-[0_6px_14px_rgba(18,45,34,0.08)]">{chatForm.name}</p> : null}

            {isAgentStepVisible(visibleAgentStep, "email") ? (
              <p className="m-0 w-fit max-w-[86%] self-start rounded-2xl rounded-tl-[5px] bg-white px-3 py-2.5 text-[14px] leading-snug text-[#20382D] shadow-[0_6px_14px_rgba(18,45,34,0.08)]">
                Agora me informe seu melhor e-mail.
              </p>
            ) : null}
            {chatForm.email ? <p className="m-0 w-fit max-w-[86%] self-end rounded-2xl rounded-tr-[5px] bg-[#D8F7C8] px-3 py-2.5 text-[14px] leading-snug text-[#17331F] shadow-[0_6px_14px_rgba(18,45,34,0.08)]">{chatForm.email}</p> : null}

            {isAgentStepVisible(visibleAgentStep, "phone") ? (
              <p className="m-0 w-fit max-w-[86%] self-start rounded-2xl rounded-tl-[5px] bg-white px-3 py-2.5 text-[14px] leading-snug text-[#20382D] shadow-[0_6px_14px_rgba(18,45,34,0.08)]">
                Legal. Qual telefone/WhatsApp podemos usar para retorno?
              </p>
            ) : null}
            {chatForm.phone ? <p className="m-0 w-fit max-w-[86%] self-end rounded-2xl rounded-tr-[5px] bg-[#D8F7C8] px-3 py-2.5 text-[14px] leading-snug text-[#17331F] shadow-[0_6px_14px_rgba(18,45,34,0.08)]">{chatForm.phone}</p> : null}

            {isAgentStepVisible(visibleAgentStep, "department") ? (
              <p className="m-0 w-fit max-w-[86%] self-start rounded-2xl rounded-tl-[5px] bg-white px-3 py-2.5 text-[14px] leading-snug text-[#20382D] shadow-[0_6px_14px_rgba(18,45,34,0.08)]">
                Por último, escolha o assunto para direcionarmos melhor a conversa.
              </p>
            ) : null}

            {isTyping ? (
              <p className="m-0 inline-flex min-w-[58px] w-fit items-center gap-1.5 self-start rounded-2xl rounded-tl-[5px] bg-white px-3.5 py-3 text-[14px] leading-snug text-[#20382D] shadow-[0_6px_14px_rgba(18,45,34,0.08)]" aria-label="Atendente digitando">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#7B8F84]" />
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#7B8F84] [animation-delay:140ms]" />
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#7B8F84] [animation-delay:280ms]" />
              </p>
            ) : null}
          </div>

          <div className="grid gap-2.5 border-t border-[#128C4A]/15 bg-white p-3">
            {loading ? <p className="m-0 text-[14px] text-[#696969]">Carregando atendimento...</p> : null}

            {canSubmitTextStep && isCurrentStepReady ? (
              <div className="grid grid-cols-[minmax(0,1fr)_44px] items-center gap-2">
                {step === "intro" ? (
                  <button type="button" className="col-span-full min-h-11 rounded-xl border-0 bg-[#128C4A] text-[15px] font-black text-white shadow-[0_12px_20px_rgba(18,140,74,0.2)] transition-all hover:-translate-y-px hover:brightness-105" onClick={submitCurrentStep}>
                    Começar atendimento
                  </button>
                ) : (
                  <>
                    <input
                      className="min-h-11 w-full rounded-xl border border-[#C9DBD0] bg-[#F9FBFA] px-3 text-[15px] text-[#20382D] outline-none transition-all focus:border-[#62BF85] focus:shadow-[0_0_0_3px_rgba(18,140,74,0.12)]"
                      type={step === "email" ? "email" : "text"}
                      inputMode={step === "phone" ? "numeric" : "text"}
                      placeholder={step === "name" ? "Digite seu nome" : step === "email" ? "Digite seu e-mail" : "Digite seu telefone"}
                      value={currentValue}
                      onChange={(event) => handleInputChange(event.target.value)}
                      onKeyDown={handleInputKeyDown}
                    />
                    <button type="button" className="grid h-11 w-11 place-items-center rounded-xl border-0 bg-[#25D366] text-white" aria-label="Enviar resposta" onClick={submitCurrentStep}>
                      <SendIcon />
                    </button>
                  </>
                )}
              </div>
            ) : null}

            {step === "department" && isCurrentStepReady ? (
              <>
                <label className="block">
                  <span className="sr-only">Assunto do atendimento</span>
                  <select
                    className="min-h-11 w-full rounded-xl border border-[#C9DBD0] bg-white px-3.5 text-[15px] text-[#20382D] outline-none transition-all focus:border-[#62BF85] focus:shadow-[0_0_0_3px_rgba(18,140,74,0.12)]"
                    value={selectedDepartmentId}
                    onChange={(event) => setSelectedDepartmentId(event.target.value)}
                    disabled={loading || sortedDepartments.length === 0}
                  >
                    {sortedDepartments.map((department) => (
                      <option key={department.id} value={department.id}>
                        {department.label}
                      </option>
                    ))}
                  </select>
                </label>

                {selectedDepartment ? <p className="m-0 text-[12px] font-semibold text-[#5B6F61]">{selectedDepartment.subtitle}</p> : null}

                <button type="button" className="min-h-11 rounded-xl border-0 bg-[#128C4A] text-[15px] font-black text-white shadow-[0_12px_20px_rgba(18,140,74,0.2)] transition-all hover:-translate-y-px hover:brightness-105" onClick={startWhatsApp}>
                  Ir para o WhatsApp
                </button>
              </>
            ) : null}

            {fieldError ? <p className="m-0 text-[12px] font-black text-[#B42318]">{fieldError}</p> : null}
          </div>
        </section>
      ) : null}
    </>
  );
}

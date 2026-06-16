import MemeWhatsAppButton from "@/components/MemeWhatsAppButton";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <MemeWhatsAppButton />
    </>
  );
}

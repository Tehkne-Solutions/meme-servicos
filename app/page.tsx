import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import PainSection from "@/components/PainSection";
import Investment from "@/components/Investment";
import Authority from "@/components/Authority";
import Audience from "@/components/Audience";
import Method from "@/components/Method";
import DiferenciaisSection from "@/components/DiferenciaisSection";
import Testimonial from "@/components/Testimonial";
import NossoEcossistema from "@/components/NossoEcossistema";
import ConnectionSection from "@/components/ConnectionSection";
import StrategicDiagnosis from "@/components/StrategicDiagnosis";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <SocialProof />
      <PainSection />
      <Investment />
      <Authority />
      <Audience />
      <Method />
      <DiferenciaisSection />
      <Testimonial />
      <NossoEcossistema />
      <ConnectionSection />
      <StrategicDiagnosis />
      <FinalCTA />
      <Footer />
    </main>
  );
}

import Hero from "@/components/Hero";
import StrategicMap from "@/components/StrategicMap";
import Audience from "@/components/Audience";
import Timeline30Days from "@/components/Timeline30Days";
import Deliverables from "@/components/Deliverables";
import Method from "@/components/Method";
import FAQ from "@/components/FAQ";
import AcquisitionSection from "@/components/AcquisitionSection";
import MartechSection from "@/components/Martech";
import DiferenciaisSection from "@/components/DiferenciaisSection";
import NossoEcossistema from "@/components/NossoEcossistema";
import Footer from "@/components/Footer";
import { LogoCarousel } from "@/components/LogoCarousel";
import { FadeIn } from "@/components/MotionWrapper";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <SmoothScroll>
      <Header />
      <main className="bg-white">
        <Hero />
        <FadeIn delay={0.2}>
          <LogoCarousel />
        </FadeIn>
        <StrategicMap />
        <Audience />
        <Timeline30Days />
        <Deliverables />
        <FAQ />
        <Method />
        <MartechSection />
        <AcquisitionSection />
        <DiferenciaisSection />
        <NossoEcossistema />
        <Footer />
      </main>
    </SmoothScroll>
  );
}

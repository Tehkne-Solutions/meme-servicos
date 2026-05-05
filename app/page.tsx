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
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <StrategicMap />
      <Audience />
      <Timeline30Days />
      <Deliverables />
      <FAQ />
      <Method />
      <MartechSection />
      <AcquisitionSection />
      <DiferenciaisSection />
      <Footer />
    </main>
  );
}

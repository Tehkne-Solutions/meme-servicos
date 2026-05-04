import Hero from "@/components/Hero";
import StrategicMap from "@/components/StrategicMap";
import Audience from "@/components/Audience";
import Timeline30Days from "@/components/Timeline30Days";
import Deliverables from "@/components/Deliverables";
import Method from "@/components/Method";
import FAQ from "@/components/FAQ";
import MartechSection from "@/components/Martech";
import LeadsProcess from "@/components/LeadsProcess";
import Differentials from "@/components/Differentials";
import Ecosystem from "@/components/Ecosystem";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <StrategicMap />
      <Audience />
      <Timeline30Days />
      <Deliverables />
      <Method />
      <FAQ />
      <MartechSection />
      <LeadsProcess />
      <Differentials />
      <Ecosystem />
      <FooterCTA />
      <Footer />
    </main>
  );
}

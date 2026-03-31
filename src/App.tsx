import Navbar from "@/components/fifuc/Navbar";
import HeroSection from "@/components/fifuc/HeroSection";
import AboutSection from "@/components/fifuc/AboutSection";
import StatsSection from "@/components/fifuc/StatsSection";
import ProgramSection from "@/components/fifuc/ProgramSection";
import SpeakersSection from "@/components/fifuc/SpeakersSection";
import StartupsSection from "@/components/fifuc/StartupsSection";
import PartnersSection from "@/components/fifuc/PartnersSection";
import LocationSection from "@/components/fifuc/LocationSection";
import CTASection from "@/components/fifuc/CTASection";
import Footer from "@/components/fifuc/Footer";
import StickyTicketBar from "@/components/fifuc/StickyTicketBar";

export default function App() {
  return (
    <>
      <Navbar />
      <StickyTicketBar />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ProgramSection />
      <SpeakersSection />
      <StartupsSection />
      <PartnersSection />
      <LocationSection />
      <CTASection />
      <Footer />
    </>
  );
}

import { ThemeProvider, useTheme } from "@/lib/ThemeContext";
import Navbar from "@/components/fifuc/Navbar";
import HeroSection from "@/components/fifuc/HeroSection";
import AboutSection from "@/components/fifuc/AboutSection";
import StatsSection from "@/components/fifuc/StatsSection";
import ProgramSection from "@/components/fifuc/ProgramSection";
import SpeakersSection from "@/components/fifuc/SpeakersSection";
import StartupsSection from "@/components/fifuc/StartupsSection";
import PartnersSection from "@/components/fifuc/PartnersSection";
import LocationSection from "@/components/fifuc/LocationSection";
import RegistrationSection from "@/components/fifuc/RegistrationSection";
import Footer from "@/components/fifuc/Footer";
import StickyTicketBar from "@/components/fifuc/StickyTicketBar";

function AppContent() {
  const { isLight } = useTheme();
  return (
    <div data-theme={isLight ? "light" : "dark"}>
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
      <RegistrationSection />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

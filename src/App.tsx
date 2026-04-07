import { ThemeProvider } from "@/lib/ThemeContext";
import HeroSection from "@/components/fifuc/HeroSection";
import RegistrationSection from "@/components/fifuc/RegistrationSection";
import StickyTicketBar from "@/components/fifuc/StickyTicketBar";

function AppContent() {
  return (
    <div data-theme="light">
      <StickyTicketBar />
      <HeroSection />
      <RegistrationSection />
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

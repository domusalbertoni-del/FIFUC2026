import { ThemeProvider, useTheme } from "@/lib/ThemeContext";
import Navbar from "@/components/fifuc/Navbar";
import HeroSection from "@/components/fifuc/HeroSection";
import RegistrationSection from "@/components/fifuc/RegistrationSection";
import StickyTicketBar from "@/components/fifuc/StickyTicketBar";

function AppContent() {
  const { isLight } = useTheme();
  return (
    <div data-theme={isLight ? "light" : "dark"}>
      <Navbar />
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

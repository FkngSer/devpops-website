import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Header from "./components/Header";
import MobileMenu from "./components/MobileMenu";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import BlogSection from "./components/BlogSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import PortalBackground from "./components/PortalBackground";
import { useState } from "react";
import { Route, Switch } from "wouter";
import BlogDetailPage from "./pages/BlogDetailPage";
import CaseStudyDetailPage from "./pages/CaseStudyDetailPage";
import NotFound from "./pages/not-found";

function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-spaceblack font-sans">
      <PortalBackground />
      
      <Header onMenuToggle={toggleMobileMenu} />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      
      <main className="pt-20">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <BlogSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-spaceblack font-sans text-cleanwhite">
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/blog/:id" component={BlogDetailPage} />
          <Route path="/case-study/:id" component={CaseStudyDetailPage} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;

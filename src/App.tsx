
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import WebDesign from "./pages/services/WebDesign";
import WebDevelopment from "./pages/services/WebDevelopment";
import ECommerce from "./pages/services/ECommerce";
import SEOOptimization from "./pages/services/SEOOptimization";
import AboutUs from "./pages/company/AboutUs";
import OurTeam from "./pages/company/OurTeam";
import Blog from "./pages/company/Blog";
import FAQ from "./pages/support/FAQ";
import ContactSupport from "./pages/support/Contact";
import HelpCenter from "./pages/support/HelpCenter";
import Documentation from "./pages/support/Documentation";
import TermsOfService from "./pages/legal/TermsOfService";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import CookiesPolicy from "./pages/legal/CookiesPolicy";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* Main Pages */}
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Services Routes */}
            <Route path="/services/web-design" element={<WebDesign />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/ecommerce" element={<ECommerce />} />
            <Route path="/services/seo-optimization" element={<SEOOptimization />} />
            
            {/* Company Routes */}
            <Route path="/company/about-us" element={<AboutUs />} />
            <Route path="/company/our-team" element={<OurTeam />} />
            <Route path="/company/blog" element={<Blog />} />
            
            {/* Support Routes */}
            <Route path="/support/faq" element={<FAQ />} />
            <Route path="/support/contact" element={<ContactSupport />} />
            <Route path="/support/help-center" element={<HelpCenter />} />
            <Route path="/support/documentation" element={<Documentation />} />
            
            {/* Legal Routes */}
            <Route path="/legal/terms-of-service" element={<TermsOfService />} />
            <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/legal/cookies-policy" element={<CookiesPolicy />} />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

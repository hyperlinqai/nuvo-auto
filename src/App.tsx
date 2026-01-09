import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import CompanyProfile from "./pages/CompanyProfile";
import TaxSavingSupport from "./pages/TaxSavingSupport";
import ChildFutureSaving from "./pages/ChildFutureSaving";
import RetirementSaving from "./pages/RetirementSaving";
import LifeInsurance from "./pages/LifeInsurance";
import MutualFunds from "./pages/MutualFunds";
import GeneralInsurance from "./pages/GeneralInsurance";
import PMSAIF from "./pages/PMSAIF";
import HealthInsurance from "./pages/HealthInsurance";
import CorporateFixedDeposits from "./pages/CorporateFixedDeposits";
import KnowledgeCentre from "./pages/KnowledgeCentre";
import NriCorner from "./pages/NriCorner";
import AdvisorCorner from "./pages/AdvisorCorner";
import UsefulLinks from "./pages/UsefulLinks";
import Careers from "./pages/Careers";
import Feedback from "./pages/Feedback";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import LatestNAV from "./pages/LatestNAV";
import CheckKYC from "./pages/CheckKYC";
import RecentDividends from "./pages/RecentDividends";
import Downloads from "./pages/Downloads";
import CurrentNFO from "./pages/CurrentNFO";
import Calculators from "./pages/Calculators";
import SIPCalculator from "./pages/calculators/SIPCalculator";
import LumpsumCalculator from "./pages/calculators/LumpsumCalculator";
import SIPPerformance from "./pages/calculators/SIPPerformance";
import FundPerformance from "./pages/calculators/FundPerformance";
import RetirementCalculator from "./pages/calculators/RetirementCalculator";
import MarriagePlanning from "./pages/calculators/MarriagePlanning";
import EducationPlanning from "./pages/calculators/EducationPlanning";
import CarPlanning from "./pages/calculators/CarPlanning";
import HomeLoanCalculator from "./pages/calculators/HomeLoanCalculator";
import LifeInsuranceCalculator from "./pages/calculators/LifeInsuranceCalculator";
import TaxCalculator from "./pages/calculators/TaxCalculator";
import Disclaimer from "./pages/legal/Disclaimer";
import TermsAndConditions from "./pages/legal/TermsAndConditions";
import Disclosure from "./pages/legal/Disclosure";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import WhatsAppButton from "./components/ui/WhatsAppButton";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <ScrollToTop />
        <HelmetProvider>
          <WhatsAppButton />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/company-profile" element={<CompanyProfile />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/products/mutual-funds" element={<MutualFunds />} />
            <Route path="/products/life-insurance" element={<LifeInsurance />} />
            <Route path="/products/general-insurance" element={<GeneralInsurance />} />
            <Route path="/products/pms-aif" element={<PMSAIF />} />
            <Route path="/products/health-insurance" element={<HealthInsurance />} />
            <Route path="/products/corporate-fixed-deposits" element={<CorporateFixedDeposits />} />
            <Route path="/services/tax-saving-support" element={<TaxSavingSupport />} />
            <Route path="/services/child-future-saving" element={<ChildFutureSaving />} />
            <Route path="/services/retirement-saving" element={<RetirementSaving />} />
            <Route path="/knowledge-centre" element={<KnowledgeCentre />} />
            <Route path="/nri-corner" element={<NriCorner />} />
            <Route path="/advisor-corner" element={<AdvisorCorner />} />
            <Route path="/useful-links" element={<UsefulLinks />} />
            <Route path="/latest-nav" element={<LatestNAV />} />
            {/* <Route path="/recent-dividends" element={<RecentDividends />} /> */}
            <Route path="/check-kyc" element={<CheckKYC />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/current-nfo" element={<CurrentNFO />} />
            <Route path="/calculators" element={<Calculators />} />
            {/* Calculator Pages */}
            <Route path="/calculators/sip" element={<SIPCalculator />} />
            <Route path="/calculators/lumpsum" element={<LumpsumCalculator />} />
            <Route path="/calculators/sip-performance" element={<SIPPerformance />} />
            <Route path="/calculators/fund-performance" element={<FundPerformance />} />
            <Route path="/calculators/retirement" element={<RetirementCalculator />} />
            <Route path="/calculators/marriage" element={<MarriagePlanning />} />
            <Route path="/calculators/education" element={<EducationPlanning />} />
            <Route path="/calculators/car" element={<CarPlanning />} />
            <Route path="/calculators/home-loan" element={<HomeLoanCalculator />} />
            <Route path="/calculators/insurance" element={<LifeInsuranceCalculator />} />
            <Route path="/calculators/tax" element={<TaxCalculator />} />

            {/* Legal Pages */}
            <Route path="/legal/disclaimer" element={<Disclaimer />} />
            <Route path="/legal/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/legal/disclosure" element={<Disclosure />} />
            <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="/feedback" element={<Feedback />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HelmetProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

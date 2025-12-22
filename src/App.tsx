import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import CompanyProfile from "./pages/CompanyProfile";
import TaxSavingSupport from "./pages/TaxSavingSupport";
import ChildFutureSaving from "./pages/ChildFutureSaving";
import RetirementSaving from "./pages/RetirementSaving";
import MutualFunds from "./pages/MutualFunds";
import NotFound from "./pages/NotFound";

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
            <Route path="/company-profile" element={<CompanyProfile />} />
            <Route path="/services/tax-saving-support" element={<TaxSavingSupport />} />
            <Route path="/services/child-future-saving" element={<ChildFutureSaving />} />
            <Route path="/services/retirement-saving" element={<RetirementSaving />} />
            <Route path="/products/mutual-funds" element={<MutualFunds />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

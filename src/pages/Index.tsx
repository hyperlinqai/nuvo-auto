import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProcessSection from "@/components/sections/ProcessSection";
import OfferingsSection from "@/components/sections/OfferingsSection";
import AdditionalOfferingsSection from "@/components/sections/AdditionalOfferingsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Mutual Fund Distributor in Indore | Sats Finserv</title>
        <meta 
          name="description" 
          content="Sats Finserv is a trusted mutual fund distributor in Indore with 20+ years of experience, supporting investors through transparent processes and long term service." 
        />
        <meta name="keywords" content="mutual fund distributor indore, AMFI registered distributor, mutual fund services, sats finserv" />
        <link rel="canonical" href="https://satsfinserv.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Sats Finserv - Trusted Mutual Fund Distributor in Indore" />
        <meta property="og:description" content="AMFI registered mutual fund distributor with 20+ years of experience serving investors in Indore." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://satsfinserv.com" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sats Finserv - Mutual Fund Distributor" />
        <meta name="twitter:description" content="Trusted mutual fund distribution services in Indore with 20+ years of experience." />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ProcessSection />
          <OfferingsSection />
          <AdditionalOfferingsSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;

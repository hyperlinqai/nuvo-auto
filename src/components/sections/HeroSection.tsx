import { Button } from "@/components/ui/button";
import { Award, Users, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  const scrollToEnquiry = () => {
    document.getElementById("enquiry")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/20" />

      <div className="container-narrow section-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/10 backdrop-blur-sm rounded-full border border-card/20 mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <img src={logo} alt="" className="w-5 h-5 brightness-0 invert" />
            <span className="text-sm font-medium text-card/90">AMFI Registered Mutual Fund Distributor</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-card leading-[1.1] mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Trusted Mutual Fund{" "}
            <span className="text-orange-light">Distribution Services</span>{" "}
            in Indore
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-card/80 max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            Supporting investors with transparent processes, disciplined documentation, 
            and long-term operational support for over two decades.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 opacity-0 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="lg" onClick={scrollToEnquiry}>
              Quick Enquiry
            </Button>
            <Button variant="heroOutline" size="lg" onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>
              Learn More
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <div className="trust-badge bg-card/10 text-card/90 border-card/20">
              <Award className="w-4 h-4" />
              <span>20+ Years Experience</span>
            </div>
            <div className="trust-badge bg-card/10 text-card/90 border-card/20">
              <Users className="w-4 h-4" />
              <span>200+ Clients Served</span>
            </div>
            <div className="trust-badge bg-card/10 text-card/90 border-card/20">
              <Clock className="w-4 h-4" />
              <span>Process-Driven Approach</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(210 20% 98%)" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

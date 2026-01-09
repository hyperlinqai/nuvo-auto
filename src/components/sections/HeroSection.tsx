import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Award, Users, Clock, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";
import heroImage from "@/assets/hero-bg-finance.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const HeroSection = () => {
  const scrollToEnquiry = () => {
    document.getElementById("enquiry")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Financial Growth"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-slate-900/40" />
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
      </div>

      <div className="container-narrow hero-section-padding relative z-10 w-full">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 glass-card mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
          >
            <img src={logo} alt="" className="w-4 h-4 brightness-0 invert" />
            <span className="text-xs md:text-sm font-medium text-white/90">
              AMFI Registered Mutual Fund Distributor
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight drop-shadow-lg"
          >
            Trusted Mutual Fund <br className="hidden md:block" />
            <span className="text-blue-200">Distribution Services</span> in Indore
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed font-light drop-shadow-md"
          >
            Supporting investors with transparent processes, disciplined documentation,
            and long term operational support for over two decades.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              variant="default"
              size="lg"
              onClick={scrollToEnquiry}
              className="bg-primary hover:bg-primary/90 text-white h-12 px-8 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 group"
            >
              Quick Enquiry
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 md:gap-6"
          >
            {[
              { icon: Award, text: "20+ Years Experience" },
              { icon: Users, text: "200+ Clients Served" },
              { icon: Clock, text: "Process Driven Approach" },
            ].map((badge, index) => {
              const Icon = badge.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 text-white/90 text-sm"
                >
                  <Icon className="w-4 h-4 text-blue-300" />
                  <span>{badge.text}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-[1px]">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path
            d="M0 80L60 75C120 70 240 60 360 55C480 50 600 50 720 52C840 54 960 60 1080 65C1200 70 1320 75 1380 78L1440 80V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

import { useState, useEffect } from "react";
import { motion, AnimatePresence, type HTMLMotionProps, type Transition } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import MarketTicker from "@/components/ui/MarketTicker";

type HeaderProps = {
  solid?: boolean;
  topBar?: React.ReactNode;
};

const Header = ({ solid = false, topBar }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const isSolid = solid || isScrolled;

  // Global, tighter slide-in for header across the site
  const slideTransition: Transition = { duration: 0.35, ease: "easeOut" };

  const headerMotionProps: HTMLMotionProps<"header"> = isSolid
    ? { initial: false, animate: { y: 0 } }
    : {
      initial: { y: -60 },
      animate: { y: 0 },
      transition: slideTransition,
    };

  return (
    <motion.header
      {...headerMotionProps}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex flex-col ${isSolid
        ? "bg-white/80 backdrop-blur-xl shadow-[var(--shadow-md)]"
        : "bg-transparent"
        }`}
    >
      {topBar && (
        <div className="w-full relative z-50">
          {topBar}
        </div>
      )}
      {/* Global Market Ticker */}
      {!topBar && (
        <div className="w-full relative z-50">
          <MarketTicker />
        </div>
      )}
      <div className={`w-full ${isSolid ? "py-3" : "py-6"} transition-all duration-300`}>
        <div className="container-narrow px-4 md:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="/"
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={logo}
                alt="Sats Finserv"
                className={`transition-all duration-300 h-10 md:h-12 ${isSolid ? "" : "brightness-0 invert"
                  }`}
              />
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {/* Company Dropdown */}
              <div
                className="relative group"
              >
                <motion.button
                  whileHover={{ y: -2 }}
                  type="button"
                  className={`text-sm font-semibold transition-colors hover:text-primary ${isSolid ? "text-foreground" : "text-white"
                    } flex items-center gap-1`}
                >
                  Company
                  <span className="text-xs transition-transform duration-200 group-hover:rotate-180">▾</span>
                </motion.button>
                <div
                  className="absolute left-0 top-full pt-4 hidden group-hover:block"
                >
                  <div className="bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl border border-white/20 min-w-[240px] py-3 overflow-hidden">
                    <a
                      href="/company-profile"
                      className="block px-5 py-3 text-sm font-medium text-slate-600 hover:text-primary hover:bg-slate-50/80 transition-all duration-200 hover:translate-x-1"
                    >
                      About Us
                    </a>
                    <a
                      href="/careers"
                      className="block px-5 py-3 text-sm font-medium text-slate-600 hover:text-primary hover:bg-slate-50/80 transition-all duration-200 hover:translate-x-1"
                    >
                      Careers
                    </a>
                  </div>
                </div>
              </div>
              {/* Products Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <motion.button
                  whileHover={{ y: -2 }}
                  type="button"
                  className={`text-sm font-semibold transition-colors hover:text-primary ${isSolid ? "text-foreground" : "text-white"
                    } flex items-center gap-1`}
                  aria-expanded={isProductsOpen}
                  aria-haspopup="true"
                >
                  Products
                  <span className={`text-xs transition-transform duration-200 ${isProductsOpen ? "rotate-180" : ""}`}>▾</span>
                </motion.button>
                <div
                  className={`absolute left-0 top-full pt-4 ${isProductsOpen ? "block" : "hidden"}`}
                >
                  <div className="bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl border border-white/20 min-w-[240px] py-3 overflow-hidden">
                    <a
                      href="/products/mutual-funds"
                      className="block px-5 py-3 text-sm font-medium text-slate-600 hover:text-primary hover:bg-slate-50/80 transition-all duration-200 hover:translate-x-1"
                    >
                      Mutual Funds
                    </a>
                    <a
                      href="/products/life-insurance"
                      className="block px-5 py-3 text-sm font-medium text-slate-600 hover:text-primary hover:bg-slate-50/80 transition-all duration-200 hover:translate-x-1"
                    >
                      Life Insurance
                    </a>
                    <a
                      href="/products/general-insurance"
                      className="block px-5 py-3 text-sm font-medium text-slate-600 hover:text-primary hover:bg-slate-50/80 transition-all duration-200 hover:translate-x-1"
                    >
                      General Insurance
                    </a>
                  </div>
                </div>
              </div>
              {/* Services Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <motion.button
                  whileHover={{ y: -2 }}
                  type="button"
                  className={`text-sm font-semibold transition-colors hover:text-primary ${isSolid ? "text-foreground" : "text-white"
                    } flex items-center gap-1`}
                  aria-expanded={isServicesOpen}
                  aria-haspopup="true"
                >
                  Services
                  <span className={`text-xs transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}>▾</span>
                </motion.button>
                <div
                  className={`absolute left-0 top-full pt-4 ${isServicesOpen ? "block" : "hidden"}`}
                >
                  <div className="bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl border border-white/20 min-w-[240px] py-3 overflow-hidden">
                    <a
                      href="/services/tax-saving-support"
                      className="block px-5 py-3 text-sm font-medium text-slate-600 hover:text-primary hover:bg-slate-50/80 transition-all duration-200 hover:translate-x-1"
                    >
                      Tax Saving Support
                    </a>
                    <a
                      href="/services/child-future-saving"
                      className="block px-5 py-3 text-sm font-medium text-slate-600 hover:text-primary hover:bg-slate-50/80 transition-all duration-200 hover:translate-x-1"
                    >
                      Child Future Saving
                    </a>
                    <a
                      href="/services/retirement-saving"
                      className="block px-5 py-3 text-sm font-medium text-slate-600 hover:text-primary hover:bg-slate-50/80 transition-all duration-200 hover:translate-x-1"
                    >
                      Retirement Saving
                    </a>
                  </div>
                </div>
              </div>
              {/* Resources Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
              >
                <motion.button
                  whileHover={{ y: -2 }}
                  type="button"
                  className={`text-sm font-semibold transition-colors hover:text-primary ${isSolid ? "text-foreground" : "text-white"
                    } flex items-center gap-1`}
                  aria-expanded={isResourcesOpen}
                  aria-haspopup="true"
                >
                  Resources
                  <span className={`text-xs transition-transform duration-200 ${isResourcesOpen ? "rotate-180" : ""}`}>▾</span>
                </motion.button>
                <div
                  className={`absolute left-0 top-full pt-4 ${isResourcesOpen ? "block" : "hidden"}`}
                >
                  <div className="bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl border border-white/20 min-w-[240px] py-3 overflow-hidden">
                    <a
                      href="/knowledge-centre"
                      className="block px-5 py-2 text-sm font-medium text-slate-600 hover:text-primary hover:bg-slate-50/80 transition-all duration-200 hover:translate-x-1"
                    >
                      Knowledge Centre
                    </a>
                    <a
                      href="/nri-corner"
                      className="block px-5 py-2 text-sm font-medium text-slate-600 hover:text-primary hover:bg-slate-50/80 transition-all duration-200 hover:translate-x-1"
                    >
                      NRI Corner
                    </a>
                    <a
                      href="/advisor-corner"
                      className="block px-5 py-2 text-sm font-medium text-slate-600 hover:text-primary hover:bg-slate-50/80 transition-all duration-200 hover:translate-x-1"
                    >
                      Advisor Corner
                    </a>
                    <a
                      href="/useful-links"
                      className="block px-5 py-2 text-sm font-medium text-slate-600 hover:text-primary hover:bg-slate-50/80 transition-all duration-200 hover:translate-x-1"
                    >
                      Useful Links
                    </a>
                    <a
                      href="/latest-nav"
                      className="block px-5 py-2 text-sm font-medium text-slate-600 hover:text-primary hover:bg-slate-50/80 transition-all duration-200 hover:translate-x-1"
                    >
                      Latest NAV
                    </a>
                    {/* <a
                      href="/recent-dividends"
                      className="block px-5 py-2 text-sm font-medium text-slate-600 hover:text-primary hover:bg-slate-50/80 transition-all duration-200 hover:translate-x-1"
                    >
                      Recent Dividends
                    </a> */}
                    <div className="h-px bg-slate-100 my-1 mx-4"></div>
                    <a
                      href="/check-kyc"
                      className="block px-5 py-2 text-sm font-medium text-slate-600 hover:text-primary hover:bg-slate-50/80 transition-all duration-200 hover:translate-x-1"
                    >
                      Check KYC
                    </a>
                    <a
                      href="/downloads"
                      className="block px-5 py-2 text-sm font-medium text-slate-600 hover:text-primary hover:bg-slate-50/80 transition-all duration-200 hover:translate-x-1"
                    >
                      Downloads
                    </a>
                    <a
                      href="/current-nfo"
                      className="block px-5 py-2 text-sm font-medium text-slate-600 hover:text-primary hover:bg-slate-50/80 transition-all duration-200 hover:translate-x-1"
                    >
                      Current NFOs
                    </a>
                    <a
                      href="/calculators"
                      className="block px-5 py-2 text-sm font-medium text-slate-600 hover:text-primary hover:bg-slate-50/80 transition-all duration-200 hover:translate-x-1"
                    >
                      Calculators
                    </a>
                  </div>
                </div>
              </div>
              <motion.a
                whileHover={{ y: -2 }}
                href="/contact"
                className={`text-sm font-semibold transition-colors hover:text-primary ${isSolid ? "text-foreground" : "text-white"
                  }`}
              >
                Contact
              </motion.a>
              <Button
                asChild
                variant={isSolid ? "default" : "secondary"}
                size="sm"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white border-0"
              >
                <a href="https://satsfinserv.investwell.app/app/#/login" target="_blank" rel="noopener noreferrer">
                  Client Login
                </a>
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${isSolid ? "text-foreground" : "text-white"}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isSolid ? "text-foreground" : "text-white"}`} />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.nav
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden"
              >
                <div className="py-4 space-y-2 bg-white/95 backdrop-blur-xl rounded-2xl mt-4 shadow-[var(--shadow-lg)] border border-border/50">
                  <motion.a
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    href="/company-profile"
                    className="block w-full text-left py-3 px-4 text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors font-semibold"
                  >
                    Company Profile
                  </motion.a>
                  <motion.a
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.12 }}
                    href="/careers"
                    className="block w-full text-left py-3 px-4 text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors font-semibold"
                  >
                    Careers
                  </motion.a>
                  {/* Products Section */}
                  <div className="px-4 pt-2">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Products</p>
                  </div>
                  <motion.a
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.15 }}
                    href="/products/mutual-funds"
                    className="block w-full text-left py-3 px-4 text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors font-semibold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Mutual Funds
                  </motion.a>
                  <motion.a
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.18 }}
                    href="/products/life-insurance"
                    className="block w-full text-left py-3 px-4 text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors font-semibold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Life Insurance
                  </motion.a>
                  <motion.a
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    href="/products/general-insurance"
                    className="block w-full text-left py-3 px-4 text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors font-semibold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    General Insurance
                  </motion.a>
                  {/* Services Section */}
                  <div className="px-4 pt-2">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Services</p>
                  </div>
                  <motion.a
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    href="/services/tax-saving-support"
                    className="block w-full text-left py-3 px-4 text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors font-semibold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Tax Saving Support
                  </motion.a>
                  <motion.a
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.25 }}
                    href="/services/child-future-saving"
                    className="block w-full text-left py-3 px-4 text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors font-semibold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Child Future Saving
                  </motion.a>
                  <motion.a
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    href="/services/retirement-saving"
                    className="block w-full text-left py-3 px-4 text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors font-semibold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Retirement Saving
                  </motion.a>
                  {/* Resources Section */}
                  <div className="px-4 pt-2">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Resources</p>
                  </div>
                  <motion.a
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    href="/knowledge-centre"
                    className="block w-full text-left py-3 px-4 text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors font-semibold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Knowledge Centre
                  </motion.a>
                  <motion.a
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.31 }}
                    href="/nri-corner"
                    className="block w-full text-left py-3 px-4 text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors font-semibold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    NRI Corner
                  </motion.a>
                  <motion.a
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.32 }}
                    href="/advisor-corner"
                    className="block w-full text-left py-3 px-4 text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors font-semibold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Advisor Corner
                  </motion.a>
                  <motion.a
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.33 }}
                    href="/useful-links"
                    className="block w-full text-left py-3 px-4 text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors font-semibold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Useful Links
                  </motion.a>
                  <motion.a
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.34 }}
                    href="/latest-nav"
                    className="block w-full text-left py-3 px-4 text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors font-semibold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Latest NAV
                  </motion.a>
                  {/* <motion.a
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.34 }}
                    href="/recent-dividends"
                    className="block w-full text-left py-3 px-4 text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors font-semibold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Recent Dividends
                  </motion.a> */}
                  <motion.a
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.34 }}
                    href="/check-kyc"
                    className="block w-full text-left py-3 px-4 text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors font-semibold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Check KYC
                  </motion.a>
                  <motion.a
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.34 }}
                    href="/downloads"
                    className="block w-full text-left py-3 px-4 text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors font-semibold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Downloads
                  </motion.a>
                  <motion.a
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.34 }}
                    href="/current-nfo"
                    className="block w-full text-left py-3 px-4 text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors font-semibold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Current NFOs
                  </motion.a>
                  <motion.a
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.34 }}
                    href="/calculators"
                    className="block w-full text-left py-3 px-4 text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors font-semibold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Calculators
                  </motion.a>
                  {/* Contact */}
                  <motion.a
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.35 }}
                    href="/contact"
                    className="block w-full text-left py-3 px-4 text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors font-semibold"
                  >
                    Contact
                  </motion.a>
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="px-4 pt-2"
                  >
                    <Button
                      asChild
                      variant="default"
                      className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white"
                    >
                      <a href="https://satsfinserv.investwell.app/app/#/login" target="_blank" rel="noopener noreferrer">
                        Client Login
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;

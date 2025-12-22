import { useState, useEffect } from "react";
import { motion, AnimatePresence, type HTMLMotionProps, type Transition } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

type HeaderProps = {
  solid?: boolean;
};

const Header = ({ solid = false }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSolid
          ? "bg-white/80 backdrop-blur-xl shadow-[var(--shadow-md)] py-3"
          : "bg-transparent py-6"
      }`}
    >
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
              className={`transition-all duration-300 h-10 md:h-12 ${
                isSolid ? "" : "brightness-0 invert"
              }`}
            />
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <motion.a
              whileHover={{ y: -2 }}
              href="/company-profile"
              className={`text-sm font-semibold transition-colors hover:text-primary ${
                isSolid ? "text-foreground" : "text-white"
              }`}
            >
              Company Profile
            </motion.a>
            {/* Products Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <motion.button
                whileHover={{ y: -2 }}
                type="button"
                className={`text-sm font-semibold transition-colors hover:text-primary ${
                  isSolid ? "text-foreground" : "text-white"
                } flex items-center gap-1`}
                aria-expanded={isProductsOpen}
                aria-haspopup="true"
              >
                Products
                <span className={`text-xs transition-transform duration-200 ${isProductsOpen ? "rotate-180" : ""}`}>▾</span>
              </motion.button>
              <div
                className={`absolute left-0 top-full pt-2 ${isProductsOpen ? "block" : "hidden"}`}
              >
                <div className="bg-white shadow-[var(--shadow-lg)] rounded-xl border border-border/60 min-w-[220px] py-2">
                  <a
                    href="/products/mutual-funds"
                    className="block px-4 py-2.5 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    Mutual Funds
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
                className={`text-sm font-semibold transition-colors hover:text-primary ${
                  isSolid ? "text-foreground" : "text-white"
                } flex items-center gap-1`}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
              >
                Services
                <span className={`text-xs transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}>▾</span>
              </motion.button>
              <div
                className={`absolute left-0 top-full pt-2 ${isServicesOpen ? "block" : "hidden"}`}
              >
                <div className="bg-white shadow-[var(--shadow-lg)] rounded-xl border border-border/60 min-w-[220px] py-2">
                  <a
                    href="/services/tax-saving-support"
                    className="block px-4 py-2.5 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    Tax Saving Support
                  </a>
                  <a
                    href="/services/child-future-saving"
                    className="block px-4 py-2.5 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    Child Future Saving
                  </a>
                  <a
                    href="/services/retirement-saving"
                    className="block px-4 py-2.5 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    Retirement Saving
                  </a>
                </div>
              </div>
            </div>
            <motion.button
              whileHover={{ y: -2 }}
              onClick={() => scrollToSection("enquiry")}
              className={`text-sm font-semibold transition-colors hover:text-primary ${
                isSolid ? "text-foreground" : "text-white"
              }`}
            >
              Contact
            </motion.button>
            <Button
              variant={isSolid ? "default" : "secondary"}
              size="sm"
              onClick={() => scrollToSection("enquiry")}
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white border-0"
            >
              Quick Enquiry
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
                {/* Contact */}
                <motion.button
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.35 }}
                  onClick={() => scrollToSection("enquiry")}
                  className="block w-full text-left py-3 px-4 text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors font-semibold"
                >
                  Contact
                </motion.button>
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="px-4 pt-2"
                >
                  <Button
                    variant="default"
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white"
                    onClick={() => scrollToSection("enquiry")}
                  >
                    Quick Enquiry
                  </Button>
                </motion.div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;

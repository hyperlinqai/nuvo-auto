import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import googlePlayBadge from "@/assets/google-play-badge.png";
import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white border-t border-white/5">
      {/* Main Footer */}
      <div className="section-padding py-16 md:py-24">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8"
          >
            {/* Brand & Social - Spans 2 cols on LG */}
            <div className="lg:col-span-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="mb-8"
              >
                <img
                  src={logo}
                  alt="Sats Finserv"
                  className="h-14 brightness-0 invert opacity-90"
                />
              </motion.div>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm font-light">
                AMFI Registered Mutual Fund Distributor serving investors in Indore
                with transparent processes and long term support.
              </p>

              {/* Social Icons */}
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/sats_finserv/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.facebook.com/satsfinserv/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all duration-300">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>

              {/* App Download Button */}
              <div className="mt-8">
                <a
                  href="https://play.google.com/store/apps/details?id=com.iw.satsfinserv&hl=en_IN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-transform hover:scale-105"
                >
                  <img src={googlePlayBadge} alt="Get it on Google Play" className="w-48 h-auto" />
                </a>
              </div>
            </div>

            {/* Quick Links (Company) */}
            <div className="lg:pl-8">
              <h4 className="font-semibold text-lg mb-8 text-slate-100">Company</h4>
              <ul className="space-y-4">
                <li>
                  <a href="/company-profile" className="text-slate-400 hover:text-primary transition-colors text-sm font-medium inline-block">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/careers" className="text-slate-400 hover:text-primary transition-colors text-sm font-medium inline-block">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="/feedback" className="text-slate-400 hover:text-primary transition-colors text-sm font-medium inline-block">
                    Feedback
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-slate-400 hover:text-primary transition-colors text-sm font-medium inline-block">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Offerings */}
            <div>
              <h4 className="font-semibold text-lg mb-8 text-slate-100">Offerings</h4>
              <ul className="space-y-4">
                <li>
                  <a href="/products/mutual-funds" className="text-slate-400 hover:text-primary transition-colors text-sm font-medium inline-block">
                    Mutual Funds
                  </a>
                </li>
                <li>
                  <a href="/products/life-insurance" className="text-slate-400 hover:text-primary transition-colors text-sm font-medium inline-block">
                    Life Insurance
                  </a>
                </li>
                <li>
                  <a href="/services/tax-saving-support" className="text-slate-400 hover:text-primary transition-colors text-sm font-medium inline-block">
                    Tax Saving
                  </a>
                </li>
                <li>
                  <a href="/services/retirement-saving" className="text-slate-400 hover:text-primary transition-colors text-sm font-medium inline-block">
                    Retirement Planning
                  </a>
                </li>
                <li>
                  <a href="/nri-corner" className="text-slate-400 hover:text-primary transition-colors text-sm font-medium inline-block">
                    NRI Services
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources (merged contact into bottom or separate) */}
            <div>
              <h4 className="font-semibold text-lg mb-8 text-slate-100">Resources</h4>
              <ul className="space-y-4 mb-8">
                <li>
                  <a href="/knowledge-centre" className="text-slate-400 hover:text-primary transition-colors text-sm font-medium inline-block">
                    Knowledge Centre
                  </a>
                </li>
                <li>
                  <a href="/advisor-corner" className="text-slate-400 hover:text-primary transition-colors text-sm font-medium inline-block">
                    Advisor Corner
                  </a>
                </li>
                <li>
                  <a href="/useful-links" className="text-slate-400 hover:text-primary transition-colors text-sm font-medium inline-block">
                    Useful Links
                  </a>
                </li>
                <li>
                  <a href="/media" className="text-slate-400 hover:text-primary transition-colors text-sm font-medium inline-block">
                    Media
                  </a>
                </li>
                <li>
                  <a href="/latest-nav" className="text-slate-400 hover:text-primary transition-colors text-sm font-medium inline-block">
                    Check Latest NAV
                  </a>
                </li>
                {/* <li>
                  <a href="/recent-dividends" className="text-slate-400 hover:text-primary transition-colors text-sm font-medium inline-block">
                    Recent Dividends
                  </a>
                </li> */}
                <li>
                  <a href="/check-kyc" className="text-slate-400 hover:text-primary transition-colors text-sm font-medium inline-block">
                    Check KYC
                  </a>
                </li>
                <li>
                  <a href="/downloads" className="text-slate-400 hover:text-primary transition-colors text-sm font-medium inline-block">
                    Downloads
                  </a>
                </li>
                <li>
                  <a href="/current-nfo" className="text-slate-400 hover:text-primary transition-colors text-sm font-medium inline-block">
                    Current NFOs
                  </a>
                </li>
                <li>
                  <a href="/calculators" className="text-slate-400 hover:text-primary transition-colors text-sm font-medium inline-block">
                    Calculators
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Detailed Contact Row */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-16 pt-12 border-t border-white/5 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <div>
              <h5 className="text-white font-medium mb-3">Visit Us</h5>
              <address className="not-italic text-slate-400 text-sm leading-relaxed font-light">
                409 & 411, Shalimar Corporate Centre<br />
                Beside Cosmos Bank, South Tukoganj<br />
                Indore – 452001 (M.P)
              </address>
            </div>
            <div>
              <h5 className="text-white font-medium mb-3">Contact</h5>
              <div className="space-y-2">
                <a href="mailto:support@satsfinserv.in" className="block text-slate-400 hover:text-white transition-colors text-sm">
                  support@satsfinserv.in
                </a>
                <a href="tel:+919009999833" className="block text-slate-400 hover:text-white transition-colors text-sm">
                  +91-9009999833
                </a>
              </div>
            </div>
            <div>
              <h5 className="text-white font-medium mb-3">Important</h5>
              <p className="text-xs text-slate-500 leading-relaxed">
                Mutual Fund investments are subject to market risks, read all scheme related documents carefully.
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Copyright & Legal Bar */}
      <div className="border-t border-white/5 bg-slate-950 py-6">
        <div className="container-narrow px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500 text-center md:text-left">
            © {currentYear} SATS FINSERV Pvt Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-500 font-medium">
            <a href="/legal/disclaimer" className="hover:text-white transition-colors">Disclaimer</a>
            <span className="text-slate-700">|</span>
            <a href="/legal/terms-and-conditions" className="hover:text-white transition-colors">T & C</a>
            <span className="text-slate-700">|</span>
            <a href="/legal/disclosure" className="hover:text-white transition-colors">Disclosure</a>
            <span className="text-slate-700">|</span>
            <a href="/legal/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

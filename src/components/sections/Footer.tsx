import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-primary via-primary/95 to-secondary/90 text-white">
      {/* Main Footer */}
      <div className="section-padding py-16 md:py-20">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16"
          >
            {/* Brand */}
            <div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="mb-6"
              >
                <img
                  src={logo}
                  alt="Sats Finserv"
                  className="h-14 brightness-0 invert"
                />
              </motion.div>
              <p className="text-white/80 text-sm leading-relaxed mb-6 font-light">
                AMFI Registered Mutual Fund Distributor serving investors in Indore 
                with transparent processes and long term support.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <motion.a
                    whileHover={{ x: 4 }}
                    href="#about"
                    className="text-white/70 hover:text-white transition-colors text-sm font-medium inline-block"
                  >
                    Who We Are
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    whileHover={{ x: 4 }}
                    href="#"
                    className="text-white/70 hover:text-white transition-colors text-sm font-medium inline-block"
                  >
                    Our Offerings
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    whileHover={{ x: 4 }}
                    href="#enquiry"
                    className="text-white/70 hover:text-white transition-colors text-sm font-medium inline-block"
                  >
                    Contact Us
                  </motion.a>
                </li>
              </ul>
            </div>

            {/* Address */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Visit Us</h4>
              <address className="not-italic text-white/70 text-sm leading-relaxed mb-6 font-light">
                409 & 411, Shalimar Corporate Centre<br />
                Beside Cosmos Bank<br />
                South Tukoganj, Behind High Court<br />
                Indore – 452001 (M.P)
              </address>
              <div className="space-y-3">
                <motion.a
                  whileHover={{ x: 4 }}
                  href="mailto:support@satsfinserv.in"
                  className="block text-white/70 hover:text-white transition-colors text-sm font-medium"
                >
                  support@satsfinserv.in
                </motion.a>
                <motion.a
                  whileHover={{ x: 4 }}
                  href="tel:+919009999833"
                  className="block text-white/70 hover:text-white transition-colors text-sm font-medium"
                >
                  +91-9009999833
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Disclaimer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="border-t border-white/10 py-8"
      >
        <div className="container-narrow px-4 md:px-8">
          <p className="text-xs text-white/60 text-center leading-relaxed max-w-4xl mx-auto">
            <strong className="text-white/80">Disclaimer:</strong> Mutual fund investments are subject to market risks. Please read all scheme related documents carefully. 
            SATS FINSERV Pvt Ltd is a Mutual Fund Distributor registered with AMFI and does not provide investment advisory services or guarantee returns. 
            All transactions are executed solely based on investor instructions.
          </p>
        </div>
      </motion.div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-6">
        <div className="container-narrow px-4 md:px-8">
          <p className="text-xs text-white/50 text-center">
            © {currentYear} SATS FINSERV Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

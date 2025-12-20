import { Shield } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="section-padding py-12 md:py-16">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-6 h-6 text-teal-light" />
                <span className="font-display font-bold text-xl">Sats Finserv</span>
              </div>
              <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
                AMFI Registered Mutual Fund Distributor serving investors in Indore 
                with transparent processes and long-term support since 2004.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-primary-foreground/70 hover:text-teal-light transition-colors text-sm">
                    Who We Are
                  </a>
                </li>
                <li>
                  <a href="#" className="text-primary-foreground/70 hover:text-teal-light transition-colors text-sm">
                    Our Offerings
                  </a>
                </li>
                <li>
                  <a href="#enquiry" className="text-primary-foreground/70 hover:text-teal-light transition-colors text-sm">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Address */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Visit Us</h4>
              <address className="not-italic text-primary-foreground/70 text-sm leading-relaxed">
                Unit No. 509, Block B<br />
                The One, 5 RNT Marg<br />
                Indore – 452001
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-primary-foreground/10 py-6">
        <div className="container-narrow px-4 md:px-8">
          <p className="text-xs text-primary-foreground/60 text-center leading-relaxed max-w-4xl mx-auto">
            <strong>Disclaimer:</strong> Sats Finserv is a Mutual Fund Distributor registered with AMFI. 
            Mutual fund investments are subject to market risks. Please read all scheme related documents carefully. 
            Sats Finserv does not provide investment advisory services or guarantee returns. 
            All transactions are executed solely based on investor instructions.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/10 py-4">
        <div className="container-narrow px-4 md:px-8">
          <p className="text-xs text-primary-foreground/50 text-center">
            © {currentYear} Sats Finserv. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

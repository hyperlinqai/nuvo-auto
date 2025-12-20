import { FileSpreadsheet, Settings, BarChart, GraduationCap } from "lucide-react";

const offerings = [
  {
    icon: FileSpreadsheet,
    title: "Mutual Fund Distribution",
    description: "Facilitating mutual fund transactions through both Direct and Regular plans as applicable, based on client requirements and instructions."
  },
  {
    icon: Settings,
    title: "Transaction & Operational Support",
    description: "Complete assistance with purchase, redemption, switch, and SIP transactions along with all operational requirements."
  },
  {
    icon: BarChart,
    title: "Portfolio Reporting & Statements",
    description: "Regular portfolio statements, consolidated reports, and assistance with accessing account information and records."
  },
  {
    icon: GraduationCap,
    title: "Investor Education & Awareness",
    description: "Supporting investor understanding of mutual fund concepts, risk factors, and investment processes through informational resources."
  }
];

const OfferingsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-title">Our Offerings</p>
          <h2 className="section-heading mb-6">
            Comprehensive Distribution <span className="text-accent">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide structured mutual fund distribution services focused on 
            operational excellence and complete transparency.
          </p>
        </div>

        {/* Offerings Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {offerings.map((offering, index) => {
            const Icon = offering.icon;
            return (
              <div
                key={index}
                className="group bg-card rounded-2xl p-8 shadow-[var(--shadow-sm)] border border-border/50 hover:shadow-[var(--shadow-md)] hover:border-accent/30 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-xl text-foreground mb-3">
                      {offering.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {offering.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 p-4 bg-muted/50 rounded-lg border border-border/50">
          <p className="text-sm text-muted-foreground text-center">
            <strong>Note:</strong> Sats Finserv acts as a distributor only and does not provide 
            investment advisory services, scheme recommendations, or return guarantees. All 
            transactions are executed based on investor instructions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;

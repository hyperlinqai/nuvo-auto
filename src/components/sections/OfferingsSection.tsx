import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  TrendingUp,
  Building2,
  PiggyBank,
  Users,
  Heart,
  Shield,
  Coins,
  FileSpreadsheet,
  GraduationCap,
  Calendar,
  Sparkles,
} from "lucide-react";

const products = [
  {
    icon: TrendingUp,
    title: "Mutual Funds",
    description: "Access to various mutual fund categories including equity, debt, hybrid, and solution oriented schemes. Detailed information available under 'About Mutual Fund' section.",
  },
  {
    icon: Building2,
    title: "Bonds",
    description: "Corporate and government bonds with defined tenure and interest structure, including options with half yearly payout and long term tenure.",
  },
  {
    icon: PiggyBank,
    title: "Fixed Deposits",
    description: "Fixed deposit options offering assured returns, premature encashment facilities, and access across multiple institutions.",
  },
  {
    icon: Users,
    title: "New Pension Scheme (NPS)",
    description: "Pension oriented long term savings product regulated by PFRDA, designed for retirement savings and long term wealth accumulation.",
  },
  {
    icon: Shield,
    title: "Insurance (Life & Health)",
    description: "Insurance products focused on financial protection, long term security, and health coverage including hospitalization support.",
  },
  {
    icon: Coins,
    title: "Sovereign Gold Bonds (SGBs)",
    description: "Government issued gold linked securities as an alternative to holding physical gold, providing gold exposure with additional benefits.",
  },
];

const services = [
  {
    icon: FileSpreadsheet,
    title: "Tax Saving Support",
    description: "Information and facilitation for investments eligible under prevailing tax regulations, helping you understand tax saving investment options.",
  },
  {
    icon: GraduationCap,
    title: "Child Future Saving",
    description: "Support in accessing suitable investment and insurance products aligned with education and future needs, facilitating goal based investment facilitation.",
  },
  {
    icon: Calendar,
    title: "Retirement Saving",
    description: "Long term investment product facilitation with periodic information sharing and monitoring support, designed for retirement savings objectives.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const OfferingsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            <Sparkles className="w-4 h-4" />
            Our Offerings
          </div>
          <h2 className="section-heading mb-4">
            Products & <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Access to regulated investment and insurance products, supported by facilitation services that keep you informed and in control.
          </p>
        </motion.div>

        {/* Tabs */}
        <Tabs defaultValue="products" className="w-full">
          <TabsList className="grid w-full max-w-xl mx-auto grid-cols-2 mb-10 h-14 bg-muted/60 backdrop-blur-sm rounded-2xl">
            <TabsTrigger
              value="products"
              className="text-base font-semibold data-[state=active]:bg-primary data-[state=active]:text-white rounded-xl"
            >
              Products
            </TabsTrigger>
            <TabsTrigger
              value="services"
              className="text-base font-semibold data-[state=active]:bg-primary data-[state=active]:text-white rounded-xl"
            >
              Services
            </TabsTrigger>
          </TabsList>

          <TabsContent value="products">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {products.map((product) => {
                const Icon = product.icon;
                return (
                  <motion.div
                    key={product.title}
                    variants={cardVariants}
                    whileHover={{ y: -6, scale: 1.01 }}
                    className="group bg-card rounded-2xl p-7 shadow-[var(--shadow-md)] border border-border/60 hover:border-primary/30 hover:shadow-[var(--shadow-xl)] transition-all duration-300"
                  >
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/12 to-secondary/12 flex items-center justify-center text-primary shadow-[var(--shadow-sm)] group-hover:scale-105 transition-transform duration-300">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h4 className="font-semibold text-xl text-foreground leading-tight">
                          {product.title}
                        </h4>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {product.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </TabsContent>

          <TabsContent value="services">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              className="grid md:grid-cols-3 gap-6 lg:gap-8"
            >
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    variants={cardVariants}
                    whileHover={{ y: -6, scale: 1.01 }}
                    className="group bg-card rounded-2xl p-8 shadow-[var(--shadow-md)] border border-border/60 hover:border-primary/30 hover:shadow-[var(--shadow-xl)] transition-all duration-300 text-center"
                  >
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/12 to-secondary/12 flex items-center justify-center text-primary shadow-[var(--shadow-sm)] group-hover:scale-105 transition-transform duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="font-semibold text-xl text-foreground leading-tight">
                        {service.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </TabsContent>
        </Tabs>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 p-8 bg-card/60 backdrop-blur-sm rounded-2xl border border-border/60 shadow-[var(--shadow-md)]"
        >
          <p className="text-sm text-muted-foreground text-center leading-relaxed">
            <strong className="text-foreground">Disclaimer:</strong> Mutual fund investments are subject to market risks. Please read all scheme related documents carefully.
            SATS FINSERV Pvt Ltd is a Mutual Fund Distributor registered with AMFI and does not provide investment advisory services or guarantee returns.
            All transactions are executed solely based on investor instructions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferingsSection;

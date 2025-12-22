import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  Users,
  PieChart,
  Wallet,
  RefreshCw,
  Sparkles,
  CheckCircle2,
  Coins,
  ArrowRightLeft,
  ShieldCheck,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const howItWorks = [
  {
    icon: Users,
    title: "Pool Your Money",
    desc: "Multiple investors pool their money together with a predetermined investment objective through the mutual fund.",
  },
  {
    icon: TrendingUp,
    title: "Professional Management",
    desc: "A fund manager invests the pooled money into specific securities like stocks, bonds, or other instruments.",
  },
  {
    icon: Coins,
    title: "Earn Returns",
    desc: "Interest, dividends, or capital gains from investments are distributed proportionally to unit holders.",
  },
];

const advantages = [
  {
    icon: ShieldCheck,
    title: "Professional Management",
    desc: "Investors purchase funds because they do not have the time or expertise to manage their own portfolio. A mutual fund provides a full time manager to make and monitor investments.",
  },
  {
    icon: PieChart,
    title: "Diversification",
    desc: "By owning units in a mutual fund instead of individual stocks or bonds, your risk is spread out. Large funds typically own hundreds of different stocks across many industries.",
  },
  {
    icon: Wallet,
    title: "Economies of Scale",
    desc: "Because mutual funds buy and sell large amounts of securities at a time, transaction costs are lower than what an individual investor would pay.",
  },
  {
    icon: RefreshCw,
    title: "Liquidity",
    desc: "Just like an individual stock, a mutual fund allows you to sell your units at any time, providing flexibility when you need access to your money.",
  },
  {
    icon: Sparkles,
    title: "Simplicity",
    desc: "Buying a mutual fund is easy! The minimum investment is also very small. As little as Rs 500 can be invested on a monthly basis.",
  },
];

const keyPoints = [
  "Mutual funds are one of the best investments ever created because they are cost efficient and easy to invest in.",
  "You don't have to figure out which stocks or bonds to buy—the fund manager handles that for you.",
  "Helps individual investors to invest in equity and debt securities simultaneously for diversification.",
  "The more stocks and bonds you own through a fund, the less any one of them can hurt you.",
];

const MutualFunds = () => {
  return (
    <>
      <Helmet>
        <title>Mutual Funds | SATS FINSERV</title>
        <meta
          name="description"
          content="Learn about Mutual Funds at SATS FINSERV: understand how mutual funds work, their advantages including professional management, diversification, and liquidity."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header solid />

        <main className="flex-1">
          {/* Hero */}
          <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-secondary/80" />
            <div className="absolute inset-0 opacity-[0.05]">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)",
                  backgroundSize: "24px 24px",
                }}
              />
            </div>
            <div className="container-narrow section-padding relative z-10">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="max-w-4xl text-center mx-auto"
              >
                <p className="section-title text-white/80">Product</p>
                <h1 className="section-heading text-white mb-6">
                  Mutual Funds
                </h1>
                <p className="text-lg md:text-xl text-white/85 leading-relaxed">
                  A mutual fund is a financial intermediary that allows a group of investors to pool their money together with a predetermined investment objective, managed by professional fund managers.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Button
                    variant="default"
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90 px-7 h-12 font-semibold"
                    onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Start Investing
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/50 text-white hover:bg-white/10 px-7 h-12 font-semibold"
                    onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    How It Works
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* What is Mutual Fund */}
          <section className="section-padding bg-background">
            <div className="container-narrow max-w-5xl">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-120px" }}
                className="text-center mb-12"
              >
                <p className="section-title">Overview</p>
                <h2 className="section-heading mb-4">What is a Mutual Fund?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  A mutual fund is simply a financial intermediary that allows a group of investors to pool their money together with a predetermined investment objective. The mutual fund will have a fund manager who is responsible for investing the pooled money into specific securities (usually stocks or bonds).
                </p>
              </motion.div>

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-120px" }}
                className="grid md:grid-cols-2 gap-6"
              >
                {keyPoints.map((point, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeUp}
                    className="bg-card rounded-2xl p-6 border border-border/60 shadow-[var(--shadow-md)] flex gap-4"
                  >
                    <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{point}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* How It Works */}
          <section id="how-it-works" className="section-padding bg-muted/40">
            <div className="container-narrow max-w-5xl">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-120px" }}
                className="text-center mb-12"
              >
                <p className="section-title">Process</p>
                <h2 className="section-heading mb-4">How Mutual Funds Work</h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  A mutual fund is a collection of stocks, bonds, or other securities owned by a group of investors and managed by a professional investment company. When investors invest a particular amount, they become unit holders of corresponding units.
                </p>
              </motion.div>

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-120px" }}
                className="grid md:grid-cols-3 gap-6"
              >
                {howItWorks.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      variants={fadeUp}
                      className="bg-card rounded-2xl p-6 shadow-[var(--shadow-md)] border border-border/60 hover:shadow-[var(--shadow-xl)] transition-all duration-300 relative"
                    >
                      <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center text-sm font-bold">
                        {idx + 1}
                      </div>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                    </motion.div>
                  );
                })}
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-120px" }}
                className="mt-10 bg-card rounded-2xl p-6 border border-border/60 shadow-[var(--shadow-md)]"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0">
                    <ArrowRightLeft className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Returns Distribution</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Mutual funds invest unit holders' money in stocks, bonds, or other securities that earn interest or dividend. This money is distributed to the unit holders. If the fund gets money by selling some stocks at higher price, the unit holders are liable to get the capital gains.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Advantages */}
          <section className="section-padding bg-background">
            <div className="container-narrow max-w-5xl">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-120px" }}
                className="text-center mb-12"
              >
                <p className="section-title">Benefits</p>
                <h2 className="section-heading mb-4">Advantages of Mutual Funds</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Mutual funds offer several compelling advantages for individual investors of all sizes.
                </p>
              </motion.div>

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-120px" }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {advantages.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      variants={fadeUp}
                      className="bg-card rounded-2xl p-6 shadow-[var(--shadow-md)] border border-border/60 hover:shadow-[var(--shadow-xl)] transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </section>

          {/* Diversification Highlight */}
          <section className="section-padding bg-muted/40">
            <div className="container-narrow max-w-4xl">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-120px" }}
                className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-10 border border-border/60"
              >
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <PieChart className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-3">Why Diversification Matters</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The idea behind diversification is to invest in a number of assets so that a loss in any particular investment is minimized by gains in others. In other words, the more stocks and bonds you own, the less any one of them can hurt you.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Large mutual funds typically own hundreds of different stocks in many different industries. It wouldn't be possible for a small investor to build this kind of portfolio with a small amount of money—but through mutual funds, this becomes accessible to everyone.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* CTA & Disclaimer */}
          <section id="cta" className="section-padding bg-background">
            <div className="container-narrow max-w-4xl text-center">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-120px" }}
                className="glass-card bg-white/80 border border-white/40 shadow-[var(--shadow-lg)] p-10 rounded-3xl"
              >
                <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                  Start Your Mutual Fund Journey
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Buying a mutual fund is easy! The minimum investment is very small—as little as Rs 500 can be invested on a monthly basis. Contact us to know more about how to get started.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button
                    variant="default"
                    size="lg"
                    className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-7 h-12 font-semibold"
                    asChild
                  >
                    <a href="/#enquiry">Quick Enquiry</a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary text-primary hover:bg-primary/10 px-7 h-12 font-semibold"
                    asChild
                  >
                    <a href="/">Back to Home</a>
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-6 leading-relaxed">
                  Disclaimer: Mutual fund investments are subject to market risks. Please read all scheme related documents carefully. SATS FINSERV Pvt Ltd is a Mutual Fund Distributor registered with AMFI and does not provide investment advisory services or guarantee returns. All transactions are executed solely based on investor instructions.
                </p>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default MutualFunds;



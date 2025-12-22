import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Target,
  TrendingUp,
  Clock,
  Calendar,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  PiggyBank,
  Landmark,
  BarChart3,
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

const points = [
  {
    icon: Target,
    title: "Goal-Based Corpus Building",
    desc: "Facilitation for building retirement corpus through systematic investment options aligned with your post-retirement lifestyle goals.",
  },
  {
    icon: Clock,
    title: "Early Start Advantage",
    desc: "Information on how starting early—even with modest amounts—can help accumulate meaningful corpus over time through compounding.",
  },
  {
    icon: Landmark,
    title: "Regulated Investment Options",
    desc: "Access to pension-oriented products like NPS and other long-term investment avenues regulated by PFRDA and SEBI.",
  },
];

const benefits = [
  "Retirement investment facilitation helps build corpus for financial goals after work life ends.",
  "Start with modest sums at an early age to leverage time and systematic contributions.",
  "Align investment choices with clearly defined life goals for structured progress.",
];

const features = [
  "Determine your post-retirement income needs based on lifestyle and expenses.",
  "Calculate required investment amounts to achieve targeted corpus.",
  "Choose appropriate investment-cum-retirement products for lump sum or periodic income.",
];

const steps = [
  {
    icon: Sparkles,
    title: "Define Retirement Goals",
    desc: "Clarify how much monthly income you'd need post-retirement and desired lifestyle expectations.",
  },
  {
    icon: BarChart3,
    title: "Assess Current Position",
    desc: "Evaluate existing savings, investments, and projected expenses to understand the gap.",
  },
  {
    icon: PiggyBank,
    title: "Select Suitable Products",
    desc: "Access pension plans, NPS, and retirement-focused mutual fund categories based on your timeline.",
  },
  {
    icon: ShieldCheck,
    title: "Monitor & Review",
    desc: "Periodic reviews to ensure your retirement corpus is on track with adjustments as needed.",
  },
];

const RetirementSaving = () => {
  return (
    <>
      <Helmet>
        <title>Retirement Saving | SATS FINSERV</title>
        <meta
          name="description"
          content="Retirement Saving facilitation from SATS FINSERV: structured support for building retirement corpus through NPS, pension plans, and long-term investment products."
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
                <p className="section-title text-white/80">Service</p>
                <h1 className="section-heading text-white mb-6">
                  Retirement Saving
                </h1>
                <p className="text-lg md:text-xl text-white/85 leading-relaxed">
                  Retirement is the ultimate reality for every working professional—and it should be the most enjoyable phase of life. Effective retirement assessment helps you retain financial independence even after your work life ends.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Button
                    variant="default"
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90 px-7 h-12 font-semibold"
                    onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Start a Conversation
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/50 text-white hover:bg-white/10 px-7 h-12 font-semibold"
                    onClick={() => document.getElementById("benefits")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    View Benefits
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Overview */}
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
                <h2 className="section-heading mb-4">Why Retirement Saving Matters</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Retirement assessment is never too late—though ideal if you start at a young age. Your future largely depends on choices you make today. An individual can maintain high standards of living with effective retirement planning.
                </p>
              </motion.div>

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-120px" }}
                className="grid md:grid-cols-3 gap-6"
              >
                {points.map((item) => {
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
                      <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </section>

          {/* Benefits */}
          <section id="benefits" className="section-padding bg-muted/40">
            <div className="container-narrow max-w-5xl">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-120px" }}
                className="text-center mb-10"
              >
                <p className="section-title">Benefits</p>
                <h2 className="section-heading mb-4">Benefits of Retirement Saving</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Retirement products help build large corpuses that can be utilized to achieve financial goals after you stop working.
                </p>
              </motion.div>

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-120px" }}
                className="grid md:grid-cols-3 gap-6"
              >
                {benefits.map((note) => (
                  <motion.div
                    key={note}
                    variants={fadeUp}
                    className="bg-card rounded-2xl p-6 border border-border/60 shadow-[var(--shadow-md)] flex gap-3"
                  >
                    <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm">{note}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Features */}
          <section className="section-padding bg-background">
            <div className="container-narrow max-w-5xl">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-120px" }}
                className="text-center mb-10"
              >
                <p className="section-title">Features</p>
                <h2 className="section-heading mb-4">Features of Retirement Saving</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  While longevity is uncertain, effective retirement planning addresses key considerations to help you live comfortably.
                </p>
              </motion.div>

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-120px" }}
                className="grid md:grid-cols-3 gap-6"
              >
                {features.map((feature, idx) => (
                  <motion.div
                    key={feature}
                    variants={fadeUp}
                    className="bg-card rounded-2xl p-6 border border-border/60 shadow-[var(--shadow-md)] flex gap-3"
                  >
                    <div className="w-9 h-9 rounded-full bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0 font-semibold text-sm">
                      {idx + 1}
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm">{feature}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Process */}
          <section className="section-padding bg-muted/40">
            <div className="container-narrow max-w-5xl">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-120px" }}
                className="text-center mb-12"
              >
                <p className="section-title">How We Facilitate</p>
                <h2 className="section-heading mb-4">Simple 4-Step Flow</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A structured approach to help you build and monitor your retirement corpus systematically.
                </p>
              </motion.div>

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-120px" }}
                className="grid md:grid-cols-2 gap-6"
              >
                {steps.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={step.title}
                      variants={fadeUp}
                      className="bg-card rounded-2xl p-6 border border-border/60 shadow-[var(--shadow-md)]"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-primary mb-1">Step {idx + 1}</p>
                          <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                          <p className="text-muted-foreground leading-relaxed text-sm">{step.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
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
                  Plan Your Retirement Journey
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Share your retirement goals and current situation. We'll help you understand suitable investment options and the corpus needed for a comfortable retirement.
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
                  Disclaimer: This page is for informational facilitation only. SATS FINSERV Pvt Ltd is a Mutual Fund Distributor registered with AMFI and does not provide investment advisory services or guarantee returns. All transactions are executed solely based on investor instructions. Investment outcomes depend on individual circumstances and market conditions.
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

export default RetirementSaving;


import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Baby,
  GraduationCap,
  HeartPulse,
  PiggyBank,
  ShieldCheck,
  Target,
  Sparkles,
  CheckCircle2,
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
    icon: GraduationCap,
    title: "Education Readiness",
    desc: "Estimate education milestones early and map timelines for fees, accommodation, and academic resources.",
  },
  {
    icon: PiggyBank,
    title: "Systematic Saving",
    desc: "Structure periodic contributions to spread costs and reduce last-minute funding pressure.",
  },
  {
    icon: ShieldCheck,
    title: "Protection Layer",
    desc: "Identify suitable life and medical insurance for children to safeguard planned objectives.",
  },
];

const keynotes = [
  "Start early to benefit from compounding and smoother cash flows.",
  "Break goals into milestones (education, skill-building, contingencies).",
  "Use child-focused protection (life/medical) to secure planned objectives.",
];

const steps = [
  {
    icon: Target,
    title: "Define Child Goals",
    desc: "List key milestones—education phases, skill programs, and major life events—and estimate timelines.",
  },
  {
    icon: Sparkles,
    title: "Plan Contributions",
    desc: "Use monthly/periodic saving to align with each milestone and reduce funding gaps.",
  },
  {
    icon: HeartPulse,
    title: "Secure with Protection",
    desc: "Evaluate appropriate life and medical coverage to keep plans on track despite uncertainties.",
  },
  {
    icon: CheckCircle2,
    title: "Monitor & Adjust",
    desc: "Review progress, update costs, and adjust contributions as timelines or needs evolve.",
  },
];

const ChildFutureSaving = () => {
  return (
    <>
      <Helmet>
        <title>Child Future Saving | SATS FINSERV</title>
        <meta
          name="description"
          content="Informational Child Future Saving support: map education and life milestones, structure periodic saving, and add protection layers for your child's goals."
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
                  Child Future Saving
                </h1>
                <p className="text-lg md:text-xl text-white/85 leading-relaxed">
                  Plan education and life milestones early, spread contributions, and add appropriate protection so your child’s goals stay on track.
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
                    onClick={() => document.getElementById("keynotes")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    View Keynotes
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
                <h2 className="section-heading mb-4">Structured Child Goal Facilitation</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Break down your child’s key milestones—education, skills, contingencies—and align saving, documentation, and protection so each goal is prepared for in advance.
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

          {/* Keynotes */}
          <section id="keynotes" className="section-padding bg-muted/40">
            <div className="container-narrow max-w-5xl">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-120px" }}
                className="text-center mb-10"
              >
                <p className="section-title">Keynotes</p>
                <h2 className="section-heading mb-4">Practical Takeaways</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Simple reminders to keep your child’s goals funded and protected in time.
                </p>
              </motion.div>

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-120px" }}
                className="grid md:grid-cols-3 gap-6"
              >
                {keynotes.map((note) => (
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

          {/* Process */}
          <section className="section-padding bg-background">
            <div className="container-narrow max-w-5xl">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-120px" }}
                className="text-center mb-12"
              >
                <p className="section-title">How We Facilitate</p>
                <h2 className="section-heading mb-4">Structured 4-Step Flow</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A simple, repeatable process to keep your child’s objectives organized and funded.
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
          <section id="cta" className="section-padding bg-muted/50">
            <div className="container-narrow max-w-4xl text-center">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-120px" }}
                className="glass-card bg-white/80 border border-white/40 shadow-[var(--shadow-lg)] p-10 rounded-3xl"
              >
                <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                  Plan Your Child’s Future
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Outline your child’s milestones and we’ll help align saving, documentation, and protection in a structured, compliant manner.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button
                    variant="default"
                    size="lg"
                    className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-7 h-12 font-semibold"
                    onClick={() => document.getElementById("enquiry")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Quick Enquiry
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary text-primary hover:bg-primary/10 px-7 h-12 font-semibold"
                    onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Back to Home
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-6 leading-relaxed">
                  Disclaimer: This page is for informational facilitation only. SATS FINSERV Pvt Ltd is a Mutual Fund Distributor registered with AMFI and does not provide investment advisory services or guarantee returns. All transactions are executed solely based on investor instructions. Tax and financial outcomes depend on individual circumstances and prevailing regulations.
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

export default ChildFutureSaving;


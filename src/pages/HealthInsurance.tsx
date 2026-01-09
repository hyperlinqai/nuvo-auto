import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
    HeartPulse,
    Shield,
    Users,
    Hospital,
    Stethoscope,
    CheckCircle2,
    Wallet,
    FileCheck,
    Ambulance,
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
        icon: FileCheck,
        title: "Choose Coverage",
        desc: "Select a health insurance plan based on your medical needs, family size, and budget. Compare sum insured, network hospitals, and features.",
    },
    {
        icon: Wallet,
        title: "Pay Premium",
        desc: "Pay annual premiums to keep your policy active. Premiums depend on age, sum insured, and coverage type.",
    },
    {
        icon: Hospital,
        title: "Claim Benefits",
        desc: "In case of hospitalization, avail cashless treatment at network hospitals or claim reimbursement for medical expenses.",
    },
];

const coverageTypes = [
    {
        icon: Users,
        title: "Family Floater",
        desc: "Single policy covering your entire family – spouse, children, and parents – under one sum insured.",
    },
    {
        icon: HeartPulse,
        title: "Critical Illness",
        desc: "Lump sum payout on diagnosis of specified critical illnesses like cancer, heart attack, or stroke.",
    },
    {
        icon: Stethoscope,
        title: "Individual Health",
        desc: "Personal health coverage with dedicated sum insured for comprehensive medical protection.",
    },
    {
        icon: Ambulance,
        title: "Accident Cover",
        desc: "Coverage for accidental injuries, hospitalization, and disability arising from accidents.",
    },
    {
        icon: Hospital,
        title: "Super Top-Up",
        desc: "Additional coverage that kicks in after your base policy limit is exhausted, at affordable premiums.",
    },
];

const keyPoints = [
    "Health insurance provides financial protection against medical expenses including hospitalization, surgeries, and treatments.",
    "Pre and post hospitalization expenses are typically covered for 30-60 days before and 60-90 days after hospitalization.",
    "Cashless treatment facility is available at network hospitals, eliminating out-of-pocket expenses during emergencies.",
    "Tax benefits under Section 80D of the Income Tax Act for premiums paid towards health insurance.",
];

const HealthInsurance = () => {
    return (
        <>
            <Helmet>
                <title>Health Insurance | SATS FINSERV</title>
                <meta
                    name="description"
                    content="Get comprehensive Health Insurance coverage with SATS FINSERV. Protect your family with cashless hospitalization, critical illness cover, and tax benefits."
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
                        <div className="container-narrow hero-section-padding relative z-10">
                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                                className="max-w-4xl text-center mx-auto"
                            >
                                <p className="section-title text-white/80">Product</p>
                                <h1 className="section-heading text-white mb-6">
                                    Health Insurance
                                </h1>
                                <p className="text-lg md:text-xl text-white/85 leading-relaxed">
                                    Comprehensive health coverage that protects you and your family from the financial burden of medical expenses and ensures access to quality healthcare.
                                </p>
                                <div className="mt-8 flex flex-wrap justify-center gap-4">
                                    <Button
                                        variant="default"
                                        size="lg"
                                        className="bg-white text-primary hover:bg-white/90 px-7 h-12 font-semibold"
                                        onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
                                    >
                                        Get Covered
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

                    {/* What is Health Insurance */}
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
                                <h2 className="section-heading mb-4">Why Health Insurance?</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                                    Medical costs in India are rising rapidly. A single hospitalization can cost lakhs of rupees, potentially depleting your savings. Health insurance ensures you receive the best medical care without financial stress.
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
                                <h2 className="section-heading mb-4">How It Works</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                                    Getting health insurance is simple. Select a plan that suits your needs, pay regular premiums, and enjoy peace of mind knowing your medical expenses are covered.
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
                                        <Hospital className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-foreground mb-2">Cashless Hospitalization</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            With cashless facility at network hospitals, you don't need to pay upfront for treatment. The insurance company settles bills directly with the hospital, so you can focus on recovery.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* Coverage Types */}
                    <section className="section-padding bg-background">
                        <div className="container-narrow max-w-5xl">
                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-120px" }}
                                className="text-center mb-12"
                            >
                                <p className="section-title">Coverage</p>
                                <h2 className="section-heading mb-4">Types of Health Insurance</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Choose from a variety of health insurance products based on your specific needs.
                                </p>
                            </motion.div>

                            <motion.div
                                variants={stagger}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-120px" }}
                                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                            >
                                {coverageTypes.map((item) => {
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

                    {/* Asset Highlight */}
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
                                        <Shield className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-semibold text-foreground mb-3">Protect Your Health, Secure Your Future</h3>
                                        <p className="text-muted-foreground leading-relaxed mb-4">
                                            Health insurance is not just about covering medical bills – it's about ensuring you and your loved ones have access to the best healthcare without compromising your financial goals.
                                        </p>
                                        <p className="text-muted-foreground leading-relaxed">
                                            With rising medical costs and new-age diseases, having comprehensive health coverage is no longer optional. Start young, stay covered, and enjoy peace of mind.
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
                                    Get Comprehensive Health Coverage
                                </h2>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                    Don't wait for a medical emergency to realize the importance of health insurance. Contact us today to find the right plan for you and your family.
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
                                    Disclaimer: Insurance is a subject matter of solicitation. Please read the policy document carefully before concluding a sale. SATS FINSERV Pvt Ltd acts as a facilitator for insurance products and does not guarantee claims settlement, which is the sole discretion of the insurer.
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

export default HealthInsurance;

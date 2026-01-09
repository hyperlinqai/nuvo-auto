import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
    Shield,
    Heart,
    Umbrella,
    Users,
    Briefcase,
    Clock,
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
        title: "Assess Needs",
        desc: "Evaluate your financial obligations and future goals to determine the right coverage amount for your family.",
    },
    {
        icon: Shield,
        title: "Choose Policy",
        desc: "Select a life insurance plan that offers the protection and benefits that align with your specific requirements.",
    },
    {
        icon: Heart,
        title: "Secure Future",
        desc: "Regular premium payments ensure your loved ones are financially protected against life's uncertainties.",
    },
];

const advantages = [
    {
        icon: ShieldCheck,
        title: "Financial Protection",
        desc: "The primary benefit is providing financial security to your family in your absence, ensuring their lifestyle and goals are compromised.",
    },
    {
        icon: Coins,
        title: "Tax Benefits",
        desc: "Life insurance premiums and death benefits often come with tax advantages under prevailing tax laws, helping you save money.",
    },
    {
        icon: Umbrella,
        title: "Risk Cover",
        desc: "It covers the risk of loss of life, providing a safety net that can help your family pay off debts or meet daily expenses.",
    },
    {
        icon: Briefcase,
        title: "Wealth Creation",
        desc: "Certain life insurance plans offer investment components that help in building wealth over the long term along with protection.",
    },
    {
        icon: Clock,
        title: "Long-term Planning",
        desc: "Life insurance is a disciplined way to save for long-term goals like retirement or children's education.",
    },
];

const keyPoints = [
    "Life insurance acts as a financial safety net for your family in case of unforeseen events.",
    "It can help replace lost income, paying for essential living expenses and debts.",
    "Various types of plans are available, including Term Life, Whole Life, and Endowment plans.",
    "We facilitate the process of selecting and purchasing the right insurance policy for your needs.",
];

const LifeInsurance = () => {
    return (
        <>
            <Helmet>
                <title>Life Insurance | SATS FINSERV</title>
                <meta
                    name="description"
                    content="Explore Life Insurance options with SATS FINSERV. Secure your family's future with financial protection, tax benefits, and disciplined savings facilitation."
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
                                    Life Insurance
                                </h1>
                                <p className="text-lg md:text-xl text-white/85 leading-relaxed">
                                    Life insurance is a contract that pledges payment of an amount to the person assured (or his nominee) on the happening of the event insured against.
                                </p>
                                <div className="mt-8 flex flex-wrap justify-center gap-4">
                                    <Button
                                        variant="default"
                                        size="lg"
                                        className="bg-white text-primary hover:bg-white/90 px-7 h-12 font-semibold"
                                        onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
                                    >
                                        Get Insured
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

                    {/* What is Life Insurance */}
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
                                <h2 className="section-heading mb-4">What is Life Insurance?</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                                    Life insurance is a financial product that guarantees the payment of a death benefit to beneficiaries upon the death of the insured. It is designed to provide financial security and peace of mind, ensuring that your loved ones are taken care of financially in your absence.
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
                                <h2 className="section-heading mb-4">How Life Insurance Works</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                                    A life insurance policy implies that the insurer agrees to pay a sum of money upon the occurrence of a specified event or after a certain period, in exchange for regular premium payments.
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
                                        <h3 className="text-lg font-semibold text-foreground mb-2">Payout Mechanism</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            In the event of the policyholder's demise during the policy term, the nominee receives the sum assured. For certain policies like endowment plans, a maturity benefit is paid if the policyholder survives the term.
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
                                <h2 className="section-heading mb-4">Advantages of Life Insurance</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Life insurance is an essential component of a sound financial plan, offering multiple benefits.
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

                    {/* Protection Highlight */}
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
                                        <h3 className="text-2xl font-semibold text-foreground mb-3">Why Protection Matters</h3>
                                        <p className="text-muted-foreground leading-relaxed mb-4">
                                            The future is unpredictable. Life insurance ensures that your family's dreams and financial needs are not compromised in case of any eventuality. It buys you peace of mind, knowing your loved ones are secure.
                                        </p>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Beyond just protection, many life insurance products today serve as effective tools for long-term savings and wealth creation, enforcing a disciplined approach to financial planning.
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
                                    Secure Your Family's Future
                                </h2>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                    Starting a life insurance plan is a crucial step towards financial responsibility. Contact us to discuss the options available that best suit your needs.
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
                                    Disclaimer: Insurance is a subject matter of solicitation. Please read the policy document carefully before concluding a sale. SATS FINSERV Pvt Ltd acts as a facilitator and does not guarantee the performance of any insurance product.
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

export default LifeInsurance;

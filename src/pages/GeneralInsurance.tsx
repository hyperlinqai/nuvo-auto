import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
    Shield,
    HeartPulse,
    Car,
    Home,
    Briefcase,
    Plane,
    CheckCircle2,
    Coins,
    ArrowRightLeft,
    Umbrella,
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
        icon: Shield,
        title: "Assess Risk",
        desc: "Identify the assets or liabilities you need to protect, whether it's your health, vehicle, home, or business.",
    },
    {
        icon: Umbrella,
        title: "Choose Cover",
        desc: "Select a general insurance plan that provides adequate coverage for potential risks and damages.",
    },
    {
        icon: CheckCircle2,
        title: "Stay Protected",
        desc: "Pay premiums to safeguard against financial losses arising from unforeseen events like accidents, illness, or theft.",
    },
];

const advantages = [
    {
        icon: HeartPulse,
        title: "Health Protection",
        desc: "Health insurance covers medical expenses, ensuring you receive quality healthcare without depleting your savings.",
    },
    {
        icon: Car,
        title: "Motor Insurance",
        desc: "Mandatory by law, it protects against liability and damages to your vehicle, as well as third-party liabilities.",
    },
    {
        icon: Home,
        title: "Home Insurance",
        desc: "Safeguards your home and its contents against risks like fire, theft, and natural calamities.",
    },
    {
        icon: Plane,
        title: "Travel Insurance",
        desc: "Covers trip cancellations, medical emergencies, and lost luggage while you are traveling domestically or abroad.",
    },
    {
        icon: Briefcase,
        title: "Business Protection",
        desc: "Protects businesses against operational risks, including property damage, liability claims, and employee-related risks.",
    },
];

const keyPoints = [
    "General insurance contracts are typically for a shorter duration, usually one year, renewable annually.",
    "It provides financial protection against loss or damage to your assets.",
    "Covers a wide range of needs including Health, Motor, Travel, and Home insurance.",
    "We help facilitate the purchase of policies that best fit your specific protection needs.",
];

const GeneralInsurance = () => {
    return (
        <>
            <Helmet>
                <title>General Insurance | SATS FINSERV</title>
                <meta
                    name="description"
                    content="Explore General Insurance solutions including Health, Motor, and Home insurance with SATS FINSERV. Protect your assets and health with our compliant facilitation."
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
                                    General Insurance
                                </h1>
                                <p className="text-lg md:text-xl text-white/85 leading-relaxed">
                                    General insurance covers non-life assets such as your home, vehicle, and health, providing financial protection against unforeseen liabilities and damages.
                                </p>
                                <div className="mt-8 flex flex-wrap justify-center gap-4">
                                    <Button
                                        variant="default"
                                        size="lg"
                                        className="bg-white text-primary hover:bg-white/90 px-7 h-12 font-semibold"
                                        onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
                                    >
                                        Get Protected
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

                    {/* What is General Insurance */}
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
                                <h2 className="section-heading mb-4">What is General Insurance?</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                                    General Insurance refers to any insurance that is not determined to be life insurance. It basically comprises of insurance of property against fire, burglary, etc., personal insurance such as Accident and Health Insurance, and liability insurance covering legal liabilities.
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
                                    By paying a premium, you transfer the risk of financial loss to the insurance company. In the event of a covered loss, the insurer compensates you, helping you recover financially.
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
                                        <h3 className="text-lg font-semibold text-foreground mb-2">Claim Settlement</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            In case of an eventuality, such as hospitalization or an accident, you file a claim with the insurer. Based on the policy terms, the insurer settles the claim by reimbursing the expenses or paying directly to the service provider (cashless).
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
                                <p className="section-title">Coverage</p>
                                <h2 className="section-heading mb-4">Types of General Insurance</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    We facilitate a variety of general insurance products to ensure comprehensive coverage for your needs.
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
                                        <h3 className="text-2xl font-semibold text-foreground mb-3">Secure Your World</h3>
                                        <p className="text-muted-foreground leading-relaxed mb-4">
                                            From your health to your car and home, your assets are valuable. Protecting them against risks like accidents, theft, fire, and illness is crucial for maintaining your financial stability.
                                        </p>
                                        <p className="text-muted-foreground leading-relaxed">
                                            General insurance ensures that a sudden loss doesn't derail your financial plans, providing you with the necessary support to recover and rebuild.
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
                                    Get Comprehensive Protection
                                </h2>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                    Don't leave your assets explicitly exposed to risk. Contact us to find the right general insurance coverage for you and your family.
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

export default GeneralInsurance;

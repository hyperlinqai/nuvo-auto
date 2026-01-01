import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
    Handshake,
    Laptop,
    Users,
    TrendingUp,
    BadgeCheck,
    GraduationCap,
    Briefcase,
    Building2,
    LineChart
} from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
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

const benefits = [
    {
        icon: Laptop,
        title: "Digital Platform",
        desc: "Access our state-of-the-art technology platform for seamless client onboarding, transaction execution, and portfolio reporting.",
    },
    {
        icon: Users,
        title: "Operational Support",
        desc: "Dedicated back-office support to handle documentation, query resolution, and service requests, allowing you to focus on client relationships.",
    },
    {
        icon: LineChart,
        title: "Diverse Product Basket",
        desc: "Offer a wide range of financial products including Mutual Funds, Insurance, and Fixed Income instruments to meet varied client needs.",
    },
    {
        icon: GraduationCap,
        title: "Training & Development",
        desc: "Regular training sessions on market trends, product knowledge, and soft skills to keep you ahead of the curve.",
    },
];

const whoCanJoin = [
    {
        title: "Insurance Agents",
        desc: "Expand your product offerings and increase wallet share by adding Mutual Funds to your portfolio.",
        icon: BadgeCheck
    },
    {
        title: "Chartered Accountants",
        desc: "Provide comprehensive financial solutions to your clients by integrating investment services.",
        icon: Building2
    },
    {
        title: "Retired Bankers",
        desc: "Leverage your financial expertise and network to build a second career as a Mutual Fund Distributor.",
        icon: Briefcase
    },
    {
        title: "Financial Enthusiasts",
        desc: "If you have a passion for finance and helping people achieve their goals, join us to start your journey.",
        icon: TrendingUp
    }
];

const AdvisorCorner = () => {
    return (
        <>
            <Helmet>
                <title>Advisor Corner | Partner with SATS FINSERV</title>
                <meta
                    name="description"
                    content="Join SATS FINSERV as a Channel Partner. We provide technology, operational support, and training for Mutual Fund Distributors to grow their business."
                />
            </Helmet>

            <div className="min-h-screen flex flex-col bg-background">
                <Header solid />

                <main className="flex-1">
                    {/* Hero Section */}
                    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-secondary/80" />
                        <div className="absolute inset-0 opacity-[0.1]">
                            <div
                                className="absolute inset-0"
                                style={{
                                    backgroundImage:
                                        "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)",
                                    backgroundSize: "32px 32px",
                                }}
                            />
                        </div>
                        <div className="container-narrow px-4 relative z-10 text-center text-white">
                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                                className="max-w-3xl mx-auto"
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-6">
                                    <Handshake className="w-4 h-4" />
                                    <span>Join Our Network</span>
                                </div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                                    Grow with SATS FINSERV
                                </h1>
                                <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl mx-auto">
                                    Become a Channel Partner and leverage our technology, expertise, and support system to build a successful financial distribution business.
                                </p>
                                <div className="mt-8">
                                    <Button
                                        variant="default"
                                        size="lg"
                                        className="bg-white text-primary hover:bg-white/90 px-8 h-12 font-semibold"
                                        onClick={() => document.getElementById("benefits")?.scrollIntoView({ behavior: "smooth" })}
                                    >
                                        Why Partner With Us?
                                    </Button>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* Benefits Section */}
                    <section id="benefits" className="section-padding bg-background">
                        <div className="container-narrow max-w-5xl">
                            <div className="text-center mb-12">
                                <p className="section-title">Our Support</p>
                                <h2 className="section-heading">Empowering Your Growth</h2>
                            </div>

                            <motion.div
                                variants={stagger}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-120px" }}
                                className="grid md:grid-cols-2 gap-8"
                            >
                                {benefits.map((item, index) => {
                                    const Icon = item.icon;
                                    return (
                                        <motion.div
                                            key={index}
                                            variants={fadeUp}
                                            className="bg-card rounded-2xl p-8 shadow-[var(--shadow-md)] border border-border/60 hover:shadow-[var(--shadow-xl)] transition-all duration-300 flex gap-5"
                                        >
                                            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                                                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </div>
                    </section>

                    {/* Who Can Join Section */}
                    <section className="section-padding bg-muted/40">
                        <div className="container-narrow max-w-5xl">
                            <div className="text-center mb-12">
                                <p className="section-title">Eligibility</p>
                                <h2 className="section-heading">Who Can Partner With Us?</h2>
                            </div>

                            <motion.div
                                variants={stagger}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-120px" }}
                                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                            >
                                {whoCanJoin.map((item, idx) => {
                                    const Icon = item.icon;
                                    return (
                                        <motion.div
                                            key={idx}
                                            variants={fadeUp}
                                            className="bg-white rounded-xl p-6 text-center shadow-sm border border-border/50 hover:-translate-y-1 transition-transform duration-300"
                                        >
                                            <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mx-auto mb-4">
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                                        </motion.div>
                                    )
                                })}
                            </motion.div>
                        </div>
                    </section>

                    {/* Process Section */}
                    <section className="section-padding bg-background">
                        <div className="container-narrow max-w-4xl text-center">
                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-120px" }}
                            >
                                <h2 className="section-heading mb-8">Simple Onboarding Process</h2>
                                <div className="space-y-6 max-w-2xl mx-auto text-left">
                                    <div className="flex gap-4">
                                        <div className="flex flex-col items-center">
                                            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">1</div>
                                            <div className="w-0.5 h-full bg-border mt-2"></div>
                                        </div>
                                        <div className="pb-8">
                                            <h4 className="text-lg font-semibold text-foreground">Obtain ARN Card</h4>
                                            <p className="text-muted-foreground mt-1">Pass the NISM Series V-A exam and register with AMFI to get your ARN (AMFI Registration Number) card.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex flex-col items-center">
                                            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">2</div>
                                            <div className="w-0.5 h-full bg-border mt-2"></div>
                                        </div>
                                        <div className="pb-8">
                                            <h4 className="text-lg font-semibold text-foreground">Empanelment</h4>
                                            <p className="text-muted-foreground mt-1">Complete the empanelment process with SATS FINSERV by submitting necessary KYC documents.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex flex-col items-center">
                                            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">3</div>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-foreground">Start Business</h4>
                                            <p className="text-muted-foreground mt-1">Access our platform, training, and marketing support to start acquiring and serving clients.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12">
                                    <Button
                                        variant="default"
                                        size="lg"
                                        className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 h-12 font-semibold shadow-lg shadow-primary/25"
                                        asChild
                                    >
                                        <a href="/contact">Join Us Today</a>
                                    </Button>
                                </div>
                            </motion.div>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default AdvisorCorner;

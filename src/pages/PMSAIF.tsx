import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
    TrendingUp,
    Users,
    Shield,
    Target,
    CheckCircle2,
    Briefcase,
    BarChart3,
    Gem,
    IndianRupee,
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
        title: "Choose Manager",
        desc: "Select a SEBI-registered portfolio manager or AIF based on their track record, strategy, and investment philosophy.",
    },
    {
        icon: Briefcase,
        title: "Invest Capital",
        desc: "Meet the minimum investment threshold (₹50 Lakhs for PMS, ₹1 Crore for AIF) and sign the investment agreement.",
    },
    {
        icon: BarChart3,
        title: "Portfolio Creation",
        desc: "The fund manager creates a personalized portfolio based on your risk profile and investment objectives.",
    },
];

const advantages = [
    {
        icon: TrendingUp,
        title: "Higher Return Potential",
        desc: "Professional managers can generate alpha through active management, stock selection, and tactical decisions.",
    },
    {
        icon: Target,
        title: "Customized Strategy",
        desc: "PMS offers personalized portfolios tailored to your specific financial goals, risk appetite, and investment horizon.",
    },
    {
        icon: Shield,
        title: "SEBI Regulated",
        desc: "Both PMS and AIFs are regulated by SEBI, ensuring transparency, investor protection, and professional governance.",
    },
    {
        icon: Gem,
        title: "Exclusive Access",
        desc: "Gain access to sophisticated investment strategies, pre-IPO opportunities, and alternative asset classes not available to retail investors.",
    },
    {
        icon: Users,
        title: "Expert Management",
        desc: "Your money is managed by seasoned investment professionals with deep market expertise and research capabilities.",
    },
];

const keyPoints = [
    "PMS (Portfolio Management Services) provides individualized portfolio management with a minimum investment of ₹50 Lakhs.",
    "AIFs (Alternative Investment Funds) pool money from sophisticated investors to invest in alternative asset classes.",
    "Category I AIFs invest in startups, SMEs, and social ventures. Category II includes private equity and debt funds. Category III focuses on hedge funds.",
    "We help facilitate access to top-rated PMS and AIF products from leading fund houses.",
];

const PMSAIF = () => {
    return (
        <>
            <Helmet>
                <title>PMS & AIF | SATS FINSERV</title>
                <meta
                    name="description"
                    content="Explore Portfolio Management Services (PMS) and Alternative Investment Funds (AIF) with SATS FINSERV. Access professional wealth management for high net worth investors."
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
                                    PMS & AIF
                                </h1>
                                <p className="text-lg md:text-xl text-white/85 leading-relaxed">
                                    Portfolio Management Services and Alternative Investment Funds offer sophisticated investment strategies for high net worth individuals seeking professional wealth management.
                                </p>
                                <div className="mt-8 flex flex-wrap justify-center gap-4">
                                    <Button
                                        variant="default"
                                        size="lg"
                                        className="bg-white text-primary hover:bg-white/90 px-7 h-12 font-semibold"
                                        onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
                                    >
                                        Get Started
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

                    {/* What is PMS/AIF */}
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
                                <h2 className="section-heading mb-4">What are PMS & AIF?</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                                    PMS and AIF are premium investment vehicles designed for sophisticated investors. PMS offers personalized portfolio management with direct stock ownership, while AIFs provide access to alternative investment strategies including private equity, venture capital, and hedge funds.
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
                                    Investing in PMS or AIF involves selecting a qualified manager, completing the investment formalities, and receiving ongoing professional management of your portfolio.
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
                                        <IndianRupee className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-foreground mb-2">Minimum Investment</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            PMS requires a minimum investment of ₹50 Lakhs as per SEBI regulations. AIFs have a higher threshold with Category I and II requiring ₹1 Crore minimum, while Category III requires ₹1 Crore with no upper limit.
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
                                <h2 className="section-heading mb-4">Why Choose PMS & AIF?</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Premium investment solutions that offer professional management and exclusive opportunities.
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
                                        <Gem className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-semibold text-foreground mb-3">Exclusive Wealth Management</h3>
                                        <p className="text-muted-foreground leading-relaxed mb-4">
                                            PMS and AIF products are designed for investors who seek more than what traditional mutual funds offer. With higher investment thresholds come greater flexibility, personalization, and access to sophisticated investment strategies.
                                        </p>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Whether you're looking to maximize returns through concentrated equity portfolios, access pre-IPO opportunities, or diversify into alternative assets, our facilitation services connect you with top-rated fund managers.
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
                                    Explore Premium Investments
                                </h2>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                    Ready to take your investments to the next level? Contact us to learn more about PMS and AIF opportunities suited to your wealth goals.
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
                                    Disclaimer: PMS and AIF are subject to market risks. Past performance is not indicative of future results. Please read all scheme-related documents carefully before investing. SATS FINSERV Pvt Ltd acts as a facilitator and does not guarantee returns.
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

export default PMSAIF;

import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
    Globe,
    TrendingUp,
    ShieldCheck,
    FileText,
    Landmark,
    PieChart,
    Phone
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

const services = [
    {
        icon: TrendingUp,
        title: "Mutual Funds for NRIs",
        desc: "Access to top-performing Indian Mutual Funds compliant with FEMA regulations. We help you build a diversified portfolio tailored to your risk profile.",
    },
    {
        icon: ShieldCheck,
        title: "Tax Compliance (FATCA/CRS)",
        desc: "Complete assistance with FATCA (Foreign Account Tax Compliance Act) and CRS (Common Reporting Standard) documentation to ensure hassle-free investing.",
    },
    {
        icon: Landmark,
        title: "NRE/NRO Portfolio Management",
        desc: "Strategic advice on managing investments through NRE (repatriable) and NRO (non-repatriable) accounts to optimize returns and tax efficiency.",
    },
    {
        icon: PieChart,
        title: "Financial Planning",
        desc: "Comprehensive financial planning covering retirement in India, children's education, and wealth creation, keeping currency fluctuations in mind.",
    },
];

const faqs = [
    {
        question: "Can NRIs invest in Mutual Funds in India?",
        answer: "Yes, NRIs can invest in Mutual Funds in India. The investment must be made in Indian Rupees (INR) through NRE or NRO bank accounts. We assist you with the KYC and account setup process."
    },
    {
        question: "What is KYC for NRIs?",
        answer: "KYC (Know Your Customer) is mandatory. For NRIs, this involves submitting a copy of the passport, overseas address proof, and Indian PAN card. In-person verification (IPV) may be required."
    },
    {
        question: "Are returns repatriable?",
        answer: "Investments made through an NRE account are fully repatriable (both principal and appreciation). Investments made through an NRO account are generally non-repatriable, with certain limits subject to RBI guidelines."
    },
    {
        question: "What about taxes on Mutual Fund gains for NRIs?",
        answer: "Capital gains tax applies to NRIs similar to resident Indians, but TDS (Tax Deducted at Source) is deducted on capital gains for NRIs at the time of redemption."
    }
];

const NriCorner = () => {
    return (
        <>
            <Helmet>
                <title>NRI Corner | SATS FINSERV</title>
                <meta
                    name="description"
                    content="Specialized investment services for NRIs. Invest in Indian Mutual Funds with expert guidance on FEMA compliance, NRE/NRO accounts, and portfolio management."
                />
            </Helmet>

            <div className="min-h-screen flex flex-col bg-background">
                <Header solid />

                <main className="flex-1">
                    {/* Hero Section */}
                    <section className="relative overflow-hidden">
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
                        <div className="container-narrow hero-section-padding relative z-10 text-center text-white">
                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                                className="max-w-3xl mx-auto"
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-6">
                                    <Globe className="w-4 h-4" />
                                    <span>Global Indians</span>
                                </div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                                    Invest in India's Growth Story
                                </h1>
                                <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl mx-auto">
                                    Trusted financial services for Non-Resident Indians. We simplify investing in India with compliant, transparent, and expert facilitation.
                                </p>
                                <div className="mt-8">
                                    <Button
                                        variant="default"
                                        size="lg"
                                        className="bg-white text-primary hover:bg-white/90 px-8 h-12 font-semibold"
                                        onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                                    >
                                        Explore Services
                                    </Button>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* Why Invest Section */}
                    <section className="section-padding bg-background">
                        <div className="container-narrow max-w-5xl text-center">
                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-120px" }}
                            >
                                <h2 className="section-heading mb-6">Why Invest in India?</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10">
                                    India is one of the fastest-growing major economies in the world. For NRIs, investing in India offers the dual benefit of participating in this growth and diversifying their global portfolio. With regulated financial markets and digital infrastructure, investing has never been easier.
                                </p>
                            </motion.div>
                        </div>
                    </section>

                    {/* Services Section */}
                    <section id="services" className="section-padding bg-muted/40">
                        <div className="container-narrow max-w-5xl">
                            <div className="text-center mb-12">
                                <p className="section-title">What We Offer</p>
                                <h2 className="section-heading">Specialized NRI Services</h2>
                            </div>

                            <motion.div
                                variants={stagger}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-120px" }}
                                className="grid md:grid-cols-2 gap-6"
                            >
                                {services.map((service, index) => {
                                    const Icon = service.icon;
                                    return (
                                        <motion.div
                                            key={index}
                                            variants={fadeUp}
                                            className="bg-card rounded-2xl p-8 shadow-[var(--shadow-md)] border border-border/60 hover:shadow-[var(--shadow-xl)] transition-all duration-300"
                                        >
                                            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                                            <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </div>
                    </section>

                    {/* Process Section */}
                    <section className="section-padding bg-background">
                        <div className="container-narrow max-w-5xl">
                            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
                                <div className="flex-1">
                                    <motion.div
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <p className="section-title">Getting Started</p>
                                        <h2 className="section-heading mb-6">Simple Onboarding Process</h2>
                                        <ul className="space-y-4">
                                            <li className="flex items-start gap-4">
                                                <div className="w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center font-bold text-sm shrink-0">1</div>
                                                <div>
                                                    <h4 className="font-semibold text-foreground">KYC Compliance</h4>
                                                    <p className="text-sm text-muted-foreground mt-1">Submit PAN, Passport, and Overseas Address Proof. Complete In-Person Verification (IPV) digitally.</p>
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-4">
                                                <div className="w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center font-bold text-sm shrink-0">2</div>
                                                <div>
                                                    <h4 className="font-semibold text-foreground">Bank Account</h4>
                                                    <p className="text-sm text-muted-foreground mt-1">Link your NRE or NRO bank account for transactions.</p>
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-4">
                                                <div className="w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center font-bold text-sm shrink-0">3</div>
                                                <div>
                                                    <h4 className="font-semibold text-foreground">Start Investing</h4>
                                                    <p className="text-sm text-muted-foreground mt-1">Choose suitable funds based on your goals and risk appetite.</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </motion.div>
                                </div>
                                <div className="flex-1 w-full">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5 }}
                                        className="bg-muted/50 rounded-3xl p-8 border border-border/50"
                                    >
                                        <FileText className="w-16 h-16 text-primary mb-4 opacity-50" />
                                        <h3 className="text-2xl font-bold text-foreground mb-2">Documents Required</h3>
                                        <p className="text-muted-foreground mb-4">Keep these handy for a smooth process:</p>
                                        <ul className="list-disc list-inside space-y-2 text-sm text-foreground/80">
                                            <li>PAN Card</li>
                                            <li>Passport Copy</li>
                                            <li>Overseas Address Proof</li>
                                            <li>Indian Address Proof (if available)</li>
                                            <li>Cancelled Cheque of NRE/NRO Account</li>
                                            <li>Passport Size Photo</li>
                                        </ul>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section className="section-padding bg-muted/30">
                        <div className="container-narrow max-w-4xl">
                            <div className="text-center mb-12">
                                <h2 className="section-heading">Common Questions</h2>
                            </div>
                            <div className="space-y-4">
                                {faqs.map((faq, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-white rounded-xl p-6 shadow-sm border border-border/50"
                                    >
                                        <h3 className="font-semibold text-lg text-foreground mb-2">{faq.question}</h3>
                                        <p className="text-muted-foreground">{faq.answer}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="section-padding bg-background">
                        <div className="container-narrow max-w-4xl text-center">
                            <motion.div
                                viewport={{ once: true }}
                                className="glass-card bg-primary/5 border border-primary/10 p-10 rounded-3xl"
                            >
                                <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
                                <h2 className="text-3xl font-bold text-foreground mb-4">
                                    Consult with an Expert
                                </h2>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                                    Navigating NRI investments can be complex. Schedule a call with us to understand your options and tax implications better.
                                </p>
                                <Button
                                    variant="default"
                                    size="lg"
                                    className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 h-14 text-lg font-semibold shadow-lg shadow-primary/25"
                                    asChild
                                >
                                    <a href="/contact">Get in Touch</a>
                                </Button>
                            </motion.div>
                        </div>
                    </section>

                </main>
                <Footer />
            </div>
        </>
    );
};

export default NriCorner;

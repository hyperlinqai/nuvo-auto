import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { ExternalLink, Building, Scale, Landmark, FileText, Globe } from "lucide-react";

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

const resourceCategories = [
    {
        title: "Regulatory Bodies",
        icon: Scale,
        description: "Governing authorities for Indian financial markets.",
        links: [
            { name: "Securities and Exchange Board of India (SEBI)", url: "https://www.sebi.gov.in" },
            { name: "Reserve Bank of India (RBI)", url: "https://www.rbi.org.in" },
            { name: "Insurance Regulatory and Development Authority (IRDAI)", url: "https://www.irdai.gov.in" },
            { name: "Pension Fund Regulatory and Development Authority (PFRDA)", url: "https://www.pfrda.org.in" },
        ]
    },
    {
        title: "Industry Organizations",
        icon: Building,
        description: "Associations representing mutual funds and insurers.",
        links: [
            { name: "Association of Mutual Funds in India (AMFI)", url: "https://www.amfiindia.com" },
            { name: "General Insurance Council", url: "https://www.gicouncil.in" },
            { name: "Life Insurance Council", url: "https://www.lifeinsurancecouncil.org" },
        ]
    },
    {
        title: "Exchanges & Depositories",
        icon: Landmark,
        description: "Market infrastructure institutions.",
        links: [
            { name: "Bombay Stock Exchange (BSE)", url: "https://www.bseindia.com" },
            { name: "National Stock Exchange (NSE)", url: "https://www.nseindia.com" },
            { name: "Central Depository Services Ltd (CDSL)", url: "https://www.cdslindia.com" },
            { name: "National Securities Depository Ltd (NSDL)", url: "https://nsdl.co.in" },
        ]
    },
    {
        title: "KYC & Grievances",
        icon: FileText,
        description: "Important portals for investor services.",
        links: [
            { name: "SEBI Complaints Redress System (SCORES)", url: "https://scores.gov.in" },
            { name: "Central KYC Registry (CKYCR)", url: "https://www.ckycindia.in" },
            { name: "CAMS KRA", url: "https://www.camskra.com" },
            { name: "KFintech KRA", url: "https://www.kfintech.com" },
            { name: "Check PAN Card Status", url: "https://tin.tin.proteantech.in/pantan/StatusTrack.html" },
            { name: "Check Aadhaar Card Status", url: "https://myaadhaar.uidai.gov.in/CheckAadhaar" },
            { name: "Check Aadhaar & PAN Link Status", url: "https://eportal.incometax.gov.in/iec/foservices/#/pre-login/link-aadhaar-status" },
        ]
    }
];

const UsefulLinks = () => {
    return (
        <>
            <Helmet>
                <title>Useful Links | SATS FINSERV</title>
                <meta
                    name="description"
                    content="Important links for investors including SEBI, AMFI, RBI, and other regulatory bodies, exchanges, and KYC portals."
                />
            </Helmet>

            <div className="min-h-screen flex flex-col bg-background">
                <Header solid />

                <main className="flex-1">
                    {/* Hero Section */}
                    <section className="relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/70" />
                        <div className="container-narrow hero-section-padding relative z-10 text-center text-white">
                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                                className="max-w-3xl mx-auto"
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-6">
                                    <Globe className="w-4 h-4" />
                                    <span>Investor Resources</span>
                                </div>
                                <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                                    Useful Links
                                </h1>
                                <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl mx-auto">
                                    A curated list of important websites for regulatory information, grievances, and market updates.
                                </p>
                            </motion.div>
                        </div>
                    </section>

                    {/* Links Section */}
                    <section className="section-padding bg-muted/30">
                        <div className="container-narrow max-w-5xl">
                            <motion.div
                                variants={stagger}
                                initial="hidden"
                                animate="visible"
                                className="grid md:grid-cols-2 gap-8"
                            >
                                {resourceCategories.map((category, index) => {
                                    const Icon = category.icon;
                                    return (
                                        <motion.div
                                            key={index}
                                            variants={fadeUp}
                                            className="bg-white rounded-2xl p-8 shadow-sm border border-border/60 hover:shadow-md transition-all duration-300"
                                        >
                                            <div className="flex items-start gap-4 mb-6">
                                                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                                    <Icon className="w-6 h-6" />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                                                    <p className="text-sm text-muted-foreground mt-1">{category.description}</p>
                                                </div>
                                            </div>

                                            <ul className="space-y-3">
                                                {category.links.map((link, idx) => (
                                                    <li key={idx}>
                                                        <a
                                                            href={link.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="group flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors border border-transparent hover:border-border/40"
                                                        >
                                                            <span className="text-foreground group-hover:text-primary font-medium transition-colors">{link.name}</span>
                                                            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default UsefulLinks;

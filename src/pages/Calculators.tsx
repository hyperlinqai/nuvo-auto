import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/sections/Footer";
import { Helmet } from "react-helmet-async";
import {
    Calculator,
    TrendingUp,
    PiggyBank,
    Baby,
    GraduationCap,
    Car,
    Home,
    HeartPulse,
    FileText,
    BarChart3,
    IndianRupee,
    Briefcase
} from "lucide-react";
import { Link } from "react-router-dom";

const calculators = [
    {
        category: "Investments",
        tools: [
            { name: "SIP Calculator", path: "/calculators/sip", icon: TrendingUp, desc: "Calculate returns on your monthly investments." },
            { name: "Lumpsum Calculator", path: "/calculators/lumpsum", icon: PiggyBank, desc: "Estimate returns on one-time investments." },
            { name: "SIP Performance", path: "/calculators/sip-performance", icon: BarChart3, desc: "Check how different SIP amounts grow over time." },
            { name: "Fund Performance", path: "/calculators/fund-performance", icon: Calculator, desc: "Calculate CAGR & XIRR for your funds." },
        ]
    },
    {
        category: "Goals",
        tools: [
            { name: "Retirement Planning", path: "/calculators/retirement", icon: Briefcase, desc: "Plan for a stress-free retirement." },
            { name: "Child Education", path: "/calculators/education", icon: GraduationCap, desc: "Estimate costs for your child's future education." },
            { name: "Marriage Planning", path: "/calculators/marriage", icon: HeartPulse, desc: "Save up for your dream wedding expenses." },
            { name: "Car Planning", path: "/calculators/car", icon: Car, desc: "Plan your finances to buy your dream car." },
        ]
    },
    {
        category: "Loans & Tax",
        tools: [
            { name: "Home Loan EMI", path: "/calculators/home-loan", icon: Home, desc: "Calculate your monthly home loan EMIs." },
            { name: "Income Tax", path: "/calculators/tax", icon: FileText, desc: "Estimate taxes under the new regime." },
            { name: "Life Insurance", path: "/calculators/insurance", icon: IndianRupee, desc: "Calculate how much life insurance cover you need." },
        ]
    }
];

const Calculators = () => {
    return (
        <>
            <Helmet>
                <title>Financial Calculators | SATS FINSERV</title>
                <meta
                    name="description"
                    content="Free financial calculators for SIP, Lumpsum, Retirement, Loan EMI, Income Tax and more. Plan your financial future with SATS FINSERV."
                />
            </Helmet>

            <div className="min-h-screen flex flex-col bg-slate-50">
                <Header solid />

                <main className="flex-1 pt-24 pb-20 md:pt-32 md:pb-28">
                    {/* Hero Section for Calculators */}
                    <section className="mb-16 container-narrow px-4 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="max-w-3xl mx-auto"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                                <Calculator className="w-4 h-4" />
                                <span>Financial Tools</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight">
                                Calculators & Tools
                            </h1>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Plan your investments and goals with accuracy. Our suite of financial calculators helps you make informed decisions for a secure future.
                            </p>
                        </motion.div>
                    </section>

                    <div className="container-narrow px-4 space-y-16">
                        {calculators.map((section, idx) => (
                            <motion.div
                                key={section.category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <h2 className="text-2xl font-bold mb-8 text-slate-800 border-l-4 border-primary pl-4">
                                    {section.category}
                                </h2>
                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {section.tools.map((tool, tIdx) => (
                                        <Link
                                            key={tool.name}
                                            to={tool.path}
                                            className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                                        >
                                            <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                                                <tool.icon className="w-6 h-6" />
                                            </div>
                                            <h3 className="font-semibold text-lg mb-2 text-slate-900 group-hover:text-primary transition-colors">
                                                {tool.name}
                                            </h3>
                                            <p className="text-sm text-slate-500 leading-relaxed">
                                                {tool.desc}
                                            </p>
                                        </Link>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
};

export default Calculators;

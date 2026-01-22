import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/sections/Footer";
import { Helmet } from "react-helmet-async";
import {
    Calculator,
    ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

import sipImage from "@/assets/images/calculators/1.png";
import lumpsumImage from "@/assets/images/calculators/2.png";
import sipPerformanceImage from "@/assets/images/calculators/3.png";
import fundPerformanceImage from "@/assets/images/calculators/4.png";
import retirementImage from "@/assets/images/calculators/retirement-banner.png";
import educationImage from "@/assets/images/calculators/6.png";
import marriageImage from "@/assets/images/calculators/marriage-banner.png";
import carImage from "@/assets/images/calculators/car-banner.png";
import homeloanImage from "@/assets/images/calculators/5.png";
import taxImage from "@/assets/images/calculators/7.png";
import lifeInsuranceImage from "@/assets/images/calculators/8.png";

const calculators = [
    {
        category: "Investments",
        tools: [
            { name: "SIP Calculator", path: "/calculators/sip", image: sipImage, desc: "Calculate returns on your monthly investments." },
            { name: "Lumpsum Calculator", path: "/calculators/lumpsum", image: lumpsumImage, desc: "Estimate returns on one-time investments." },
            { name: "SIP Performance", path: "/calculators/sip-performance", image: sipPerformanceImage, desc: "Check how different SIP amounts grow over time." },
            { name: "Fund Performance", path: "/calculators/fund-performance", image: fundPerformanceImage, desc: "Calculate CAGR & XIRR for your funds." },
        ]
    },
    {
        category: "Goals",
        tools: [
            { name: "Retirement Planning", path: "/calculators/retirement", image: retirementImage, desc: "Plan for a stress-free retirement." },
            { name: "Child Education", path: "/calculators/education", image: educationImage, desc: "Estimate costs for your child's future education." },
            { name: "Marriage Planning", path: "/calculators/marriage", image: marriageImage, desc: "Save up for your dream wedding expenses." },
            { name: "Car Planning", path: "/calculators/car", image: carImage, desc: "Plan your finances to buy your dream car." },
        ]
    },
    {
        category: "Loans & Tax",
        tools: [
            { name: "Home Loan EMI", path: "/calculators/home-loan", image: homeloanImage, desc: "Calculate your monthly home loan EMIs." },
            { name: "Income Tax", path: "/calculators/tax", image: taxImage, desc: "Estimate taxes under the new regime." },
            { name: "Life Insurance", path: "/calculators/insurance", image: lifeInsuranceImage, desc: "Calculate how much life insurance cover you need." },
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

                <main className="flex-1 pt-36 pb-16 md:pt-40 md:pb-24">
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
                                            className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
                                        >
                                            <div className="w-full aspect-[2/1] relative overflow-hidden bg-slate-100 group-hover:bg-slate-200 transition-colors duration-500">
                                                <img
                                                    src={tool.image}
                                                    alt={tool.name}
                                                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                                                />
                                            </div>
                                            <div className="p-6 flex flex-col flex-1">
                                                <h3 className="font-bold text-lg mb-2 text-slate-900 group-hover:text-primary transition-colors">
                                                    {tool.name}
                                                </h3>
                                                <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-1">
                                                    {tool.desc}
                                                </p>
                                                <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                                                    Calculate Now <ArrowRight className="w-4 h-4 ml-1" />
                                                </div>
                                            </div>
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

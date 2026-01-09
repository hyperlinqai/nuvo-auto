import { ReactNode } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/sections/Footer";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface CalculatorLayoutProps {
    title: string;
    description: string;
    children: ReactNode;
    seoTitle?: string;
    seoDescription?: string;
}

const CalculatorLayout = ({
    title,
    description,
    children,
    seoTitle,
    seoDescription
}: CalculatorLayoutProps) => {
    const navigate = useNavigate();

    return (
        <>
            <Helmet>
                <title>{seoTitle || `${title} - Financial Calculator | SATS FINSERV`}</title>
                <meta
                    name="description"
                    content={seoDescription || `Use our free ${title} to plan your finances better. Best financial calculators for Indian investors.`}
                />
            </Helmet>

            <div className="min-h-screen flex flex-col bg-slate-50">
                <Header solid />

                <main className="flex-1 pt-36 pb-20 md:pt-40 md:pb-28">
                    <div className="container-narrow px-4">
                        {/* Breadcrumb / Back */}
                        <div className="mb-6">
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => navigate("/calculators")}
                                className="text-muted-foreground hover:text-primary pl-0 gap-1"
                            >
                                <ChevronLeft className="w-4 h-4" />
                                Back to Calculators
                            </Button>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-center mb-10 md:mb-14"
                        >
                            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">{title}</h1>
                            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                                {description}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden"
                        >
                            {children}
                        </motion.div>
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
};

export default CalculatorLayout;

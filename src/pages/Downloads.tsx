import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/sections/Footer";
import { Helmet } from "react-helmet-async";
import { FileText, Download, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const forms = [
    {
        id: "kyc-individual",
        name: "CKYC KRA KYC Form (Individual)",
        description: "Standard KYC application form for individual investors. Required for first-time mutual fund investors.",
        file: "CKYC-KRA-KYC-FormforIndividuals.pdf",
        category: "KYC"
    },
    {
        id: "form-a",
        name: "Common Transaction Form A",
        description: "General purpose transaction form for purchase, redemption, or switching of units.",
        file: "form-a.pdf",
        category: "Transaction"
    },
    {
        id: "form-b",
        name: "Common Transaction Form B",
        description: "Additional transaction form for specific fund houses or systematic plans.",
        file: "form-b.pdf",
        category: "Transaction"
    }
];

const Downloads = () => {
    return (
        <>
            <Helmet>
                <title>Downloads & Forms | SATS FINSERV</title>
                <meta
                    name="description"
                    content="Download necessary forms for Mutual Fund investments, KYC, and other financial services."
                />
            </Helmet>

            <div className="min-h-screen flex flex-col bg-slate-50">
                <Header solid />

                <main className="flex-1 pt-24 pb-20 md:pt-32 md:pb-28">
                    <div className="container-narrow px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="max-w-5xl mx-auto"
                        >
                            <div className="text-center mb-12">
                                <div className="inline-flex p-3 bg-primary/10 rounded-full text-primary mb-6">
                                    <FileDown className="w-8 h-8" />
                                </div>
                                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Downloads & Resources</h1>
                                <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                                    Access and download important forms for your investment journey.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {forms.map((form, idx) => (
                                    <motion.div
                                        key={form.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 hover:shadow-md transition-shadow flex flex-col"
                                    >
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="p-2 bg-slate-100 rounded-lg text-slate-600">
                                                <FileText className="w-6 h-6" />
                                            </div>
                                            <span className="text-xs font-medium px-2 py-1 bg-slate-100 text-slate-600 rounded-full">
                                                {form.category}
                                            </span>
                                        </div>

                                        <h3 className="text-lg font-semibold text-slate-900 mb-2">{form.name}</h3>
                                        <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-1">
                                            {form.description}
                                        </p>

                                        <Button
                                            variant="outline"
                                            className="w-full gap-2 border-slate-200 hover:border-primary hover:text-primary transition-colors"
                                            onClick={() => window.open(`/forms/${form.file}`, "_blank")}
                                        >
                                            Download PDF <Download className="w-4 h-4" />
                                        </Button>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
};

export default Downloads;

import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/sections/Footer";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileSearch, ShieldCheck, UserCheck } from "lucide-react";

const CheckKYC = () => {
    return (
        <>
            <Helmet>
                <title>Check KYC Status | SATS FINSERV</title>
                <meta
                    name="description"
                    content="Verify your KYC status easily. Essential for all mutual fund investors to ensure compliance and uninterrupted investing."
                />
            </Helmet>

            <div className="min-h-screen flex flex-col bg-slate-50">
                <Header solid />

                <main className="flex-1 pt-36 pb-16 md:pt-40 md:pb-24">
                    <div className="container-narrow px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="max-w-4xl mx-auto"
                        >
                            {/* Hero Card */}
                            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden mb-12">
                                <div className="bg-primary/5 p-8 md:p-12 text-center">
                                    <div className="mb-6 inline-flex p-4 bg-white rounded-full shadow-sm text-primary">
                                        <FileSearch className="w-10 h-10" />
                                    </div>
                                    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Check Your KYC Status</h1>
                                    <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                                        Know Your Customer (KYC) compliance is mandatory for investing in Mutual Funds.
                                        Check your current status instantly through the official KRA portal.
                                    </p>
                                </div>

                                <div className="p-8 md:p-12 flex flex-col items-center">
                                    <div className="w-full max-w-md space-y-4 text-center">
                                        <Button
                                            size="lg"
                                            className="w-full h-14 text-base gap-2 rounded-xl shadow-lg shadow-primary/20"
                                            onClick={() => window.open("https://www.cvlkra.com/kycpaninquiry.aspx", "_blank")}
                                        >
                                            Check Status on CVL KRA <ExternalLink className="w-4 h-4" />
                                        </Button>
                                        <p className="text-xs text-slate-400">
                                            You will be redirected to the official CVL KRA website.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Info Section */}
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                                            <ShieldCheck className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-slate-900">Why is it important?</h3>
                                    </div>
                                    <p className="text-slate-600 leading-relaxed text-sm">
                                        Valid KYC is crucial for preventing fraud and ensuring the integrity of the financial system.
                                        Without it, you cannot open new accounts or make fresh investments.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                                            <UserCheck className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-slate-900">How to check?</h3>
                                    </div>
                                    <p className="text-slate-600 leading-relaxed text-sm">
                                        Visit the CVL KRA website link above, click on "KYC Inquiry", and enter your PAN number.
                                        It will display whether your status is "Verified", "On Hold", or "Not Available".
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
};

export default CheckKYC;

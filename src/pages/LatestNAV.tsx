import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, LineChart, TrendingUp } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/sections/Footer";
import { Helmet } from "react-helmet-async";

const LatestNAV = () => {
    return (
        <>
            <Helmet>
                <title>Latest Unit Prices (NAV) | SATS FINSERV</title>
                <meta
                    name="description"
                    content="Check the latest Net Asset Value (NAV) for your mutual fund investments. SATS FINSERV provides direct access to official AMFI NAV data."
                />
            </Helmet>
            <div className="min-h-screen flex flex-col bg-background">
                <Header solid />
                <main className="flex-1">
                    {/* Header Section */}
                    <section className="bg-muted/30 pt-32 pb-16 md:pt-40 md:pb-20 border-b border-border/40">
                        <div className="container-narrow px-4 text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="max-w-2xl mx-auto"
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                                    <TrendingUp className="w-4 h-4" />
                                    <span>Market Updates</span>
                                </div>
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
                                    Check Latest NAV
                                </h1>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Track the performance of your mutual fund investments with real-time Net Asset Value updates.
                                </p>
                            </motion.div>
                        </div>
                    </section>

                    <section className="section-padding">
                        <div className="container-narrow">
                            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                                        <TrendingUp className="w-6 h-6 text-primary" />
                                    </div>
                                    <h2 className="text-3xl font-bold mb-4">What is NAV?</h2>
                                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                                        <p>
                                            Net Asset Value (NAV) represents the market value of each unit of a mutual fund scheme.
                                            It is calculated by dividing the total value of all the cash and securities in a fund's portfolio,
                                            minus any liabilities, by the number of outstanding units.
                                        </p>
                                        <p>
                                            Tracking NAV helps investors understand the performance of their mutual fund schemes
                                            on a daily basis. The NAV is updated every business day by the fund houses.
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    className="bg-muted/30 p-8 rounded-3xl border border-border/50 relative overflow-hidden group"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110 duration-500" />

                                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                        <LineChart className="w-5 h-5 text-primary" />
                                        Official AMFI Source
                                    </h3>
                                    <p className="text-muted-foreground mb-8">
                                        For the most accurate and up-to-date NAV information, we recommend using the official
                                        Association of Mutual Funds in India (AMFI) website. You can search by scheme name
                                        or fund house.
                                    </p>

                                    <Button
                                        asChild
                                        size="lg"
                                        className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                                    >
                                        <a
                                            href="https://www.amfiindia.com/net-asset-value"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex justify-between items-center"
                                        >
                                            Check Latest NAV on AMFI
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    </Button>
                                    <p className="text-xs text-muted-foreground mt-4 text-center">
                                        You will be redirected to the official AMFI India website.
                                    </p>
                                </motion.div>
                            </div>

                            {/* Additional Info Cards */}
                            <div className="grid md:grid-cols-3 gap-6">
                                {[
                                    {
                                        title: "Daily Updates",
                                        desc: "NAV is updated at the end of every market day."
                                    },
                                    {
                                        title: "Historical Data",
                                        desc: "View past performance to analyze trends."
                                    },
                                    {
                                        title: "Compare Funds",
                                        desc: "Compare NAVs across different schemes."
                                    }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                                        className="p-6 rounded-2xl bg-white shadow-sm border border-border/50 hover:shadow-md transition-shadow"
                                    >
                                        <h4 className="font-semibold mb-2">{item.title}</h4>
                                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default LatestNAV;

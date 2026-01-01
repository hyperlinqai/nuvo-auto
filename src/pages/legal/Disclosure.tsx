import Header from "@/components/layout/Header";
import Footer from "@/components/sections/Footer";
import { Helmet } from "react-helmet-async";

const Disclosure = () => {
    return (
        <>
            <Helmet>
                <title>Disclosure | SATS FINSERV</title>
                <meta name="description" content="Regulatory disclosures and commission details for SATS FINSERV." />
            </Helmet>
            <div className="min-h-screen flex flex-col bg-background">
                <Header solid />
                <main className="flex-1 pt-32 pb-20 md:pt-40 md:pb-28">
                    <div className="container-narrow px-4">
                        <h1 className="text-3xl md:text-4xl font-bold mb-8">Disclosure</h1>
                        <div className="prose prose-gray max-w-none space-y-6 text-muted-foreground">
                            <p>
                                <strong>SATS FINSERV Pvt Ltd</strong> is an AMFI Registered Mutual Fund Distributor (ARN: [Insert ARN Here]).
                            </p>

                            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Commission Disclosure</h3>
                            <p>
                                In accordance with the SEBI circular: SEBI/IMD/CIR No. 4/ 168230/09, following are the details of the comparative commission earned by SATS FINSERV from various Asset Management Companies (AMCs), whose products are being distributed:
                            </p>
                            <ul className="list-disc pl-5 mt-4 space-y-2">
                                <li>SATS FINSERV earns commission from AMCs for distribution of Mutual Fund schemes.</li>
                                <li>The commission ranges from 0.10% to 1.50% (annualized) of the AUM, depending on the scheme and asset class (Equity, Debt, Hybrid, etc.).</li>
                                <li>This commission is paid by the AMCs out of the Total Expense Ratio (TER) charged to the scheme.</li>
                                <li>There is no direct charge to the investor for our services.</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Conflict of Interest</h3>
                            <p>
                                We distribute products from multiple AMCs. We do not have any conflict of interest with any specific AMC. Our recommendations are based on the suitability of the product for the investor's needs.
                            </p>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Disclosure;

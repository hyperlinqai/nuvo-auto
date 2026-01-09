import Header from "@/components/layout/Header";
import Footer from "@/components/sections/Footer";
import { Helmet } from "react-helmet-async";

const Disclaimer = () => {
    return (
        <>
            <Helmet>
                <title>Disclaimer | SATS FINSERV</title>
                <meta name="description" content="Read the disclaimer for SATS FINSERV regarding mutual fund investments and website usage." />
            </Helmet>
            <div className="min-h-screen flex flex-col bg-background">
                <Header solid />
                <main className="flex-1 pt-36 pb-16 md:pt-40 md:pb-24">
                    <div className="container-narrow px-4">
                        <h1 className="text-3xl md:text-4xl font-bold mb-8">Disclaimer</h1>
                        <div className="prose prose-gray max-w-none space-y-6 text-muted-foreground">
                            <p>
                                <strong>Mutual Fund investments are subject to market risks, read all scheme related documents carefully.</strong>
                            </p>
                            <p>
                                The information provided on this website is for general information purposes only. While SATS FINSERV Pvt Ltd strives to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
                            </p>
                            <p>
                                In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
                            </p>
                            <p>
                                Through this website, you only get access to mutual fund schemes and other financial products. SATS FINSERV does not guarantee any returns. Past performance of mutual funds is not necessarily indicative of future performance.
                            </p>
                            <p>
                                The data and information provided on the web site is not advice, professional or otherwise, and should not be relied upon as such. Investors are requested to check the latest NAV, load structure, and other scheme related documents before investing.
                            </p>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Disclaimer;

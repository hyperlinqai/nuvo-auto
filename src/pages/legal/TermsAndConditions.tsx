import Header from "@/components/layout/Header";
import Footer from "@/components/sections/Footer";
import { Helmet } from "react-helmet-async";

const TermsAndConditions = () => {
    return (
        <>
            <Helmet>
                <title>Terms & Conditions | SATS FINSERV</title>
                <meta name="description" content="Terms and Conditions for using SATS FINSERV website and services." />
            </Helmet>
            <div className="min-h-screen flex flex-col bg-background">
                <Header solid />
                <main className="flex-1 pt-36 pb-16 md:pt-40 md:pb-24">
                    <div className="container-narrow px-4">
                        <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms & Conditions</h1>
                        <div className="prose prose-gray max-w-none space-y-6 text-muted-foreground">
                            <p>
                                Welcome to SATS FINSERV. These terms and conditions outline the rules and regulations for the use of SATS FINSERV's Website.
                            </p>

                            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">1. Acceptance of Terms</h3>
                            <p>
                                By accessing this website, we assume you accept these terms and conditions. Do not continue to use SATS FINSERV if you do not agree to take all of the terms and conditions stated on this page.
                            </p>

                            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">2. Use of License</h3>
                            <p>
                                Unless otherwise stated, SATS FINSERV and/or its licensors own the intellectual property rights for all material on SATS FINSERV. All intellectual property rights are reserved. You may access this from SATS FINSERV for your own personal use subjected to restrictions set in these terms and conditions.
                            </p>

                            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">3. User Obligations</h3>
                            <p>
                                You agree not to use the website for any purpose that is unlawful or prohibited by these terms. You are personally responsible for the material that you submit to the website as feedback or contact enquiries.
                            </p>

                            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">4. Limitation of Liability</h3>
                            <p>
                                SATS FINSERV shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that are rising on your Website.
                            </p>

                            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">5. Updates</h3>
                            <p>
                                SATS FINSERV reserves the right to revise these terms and conditions at any time. By using this website, you are expected to review these terms on a regular basis.
                            </p>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default TermsAndConditions;

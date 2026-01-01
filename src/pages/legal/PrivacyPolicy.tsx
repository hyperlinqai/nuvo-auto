import Header from "@/components/layout/Header";
import Footer from "@/components/sections/Footer";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
    return (
        <>
            <Helmet>
                <title>Privacy Policy | SATS FINSERV</title>
                <meta name="description" content="SATS FINSERV Privacy Policy regarding collection and use of user data." />
            </Helmet>
            <div className="min-h-screen flex flex-col bg-background">
                <Header solid />
                <main className="flex-1 pt-32 pb-20 md:pt-40 md:pb-28">
                    <div className="container-narrow px-4">
                        <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
                        <div className="prose prose-gray max-w-none space-y-6 text-muted-foreground">
                            <p>
                                At SATS FINSERV, accessible from satsfinserv.in, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by SATS FINSERV and how we use it.
                            </p>

                            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Information We Collect</h3>
                            <p>
                                The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
                            </p>
                            <p>
                                If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
                            </p>

                            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">How We Use Your Information</h3>
                            <ul className="list-disc pl-5 mt-4 space-y-2">
                                <li>Provide, operate, and maintain our website</li>
                                <li>Improve, personalize, and expand our website</li>
                                <li>Understand and analyze how you use our website</li>
                                <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
                                <li>Send you emails</li>
                                <li>Find and prevent fraud</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Security of Data</h3>
                            <p>
                                The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                            </p>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default PrivacyPolicy;

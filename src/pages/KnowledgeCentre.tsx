import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const videos = [
    {
        title: "What is an ELSS? | The Smart Way to Save Taxes and Invest",
        url: "https://www.youtube.com/embed/nke3160rCas"
    },
    {
        title: "Risk ko soch samjh kar invest karna sahi hai | Mutual Funds Sahi Hai",
        url: "https://www.youtube.com/embed/QISY70zukng"
    },
    {
        title: "Mutual Funds can give better results by the virtue of patience",
        url: "https://www.youtube.com/embed/5ThhgoWFHyc"
    },
    {
        title: "#MarchToInvest with an understanding of Mutual Funds.",
        url: "https://www.youtube.com/embed/r1qQpXWcDNQ"
    },
    {
        title: "Options in Mutual Funds are as diverse as your music playlist.",
        url: "https://www.youtube.com/embed/PmEhyAWcSz0"
    },
    {
        title: "Risk Ki Tayyari",
        url: "https://www.youtube.com/embed/v8WKrBjC1dc"
    }
];

const KnowledgeCentre = () => {
    return (
        <>
            <Helmet>
                <title>Knowledge Centre | SATS FINSERV</title>
                <meta
                    name="description"
                    content="Learn about investing, mutual funds, and financial planning through our curated educational videos."
                />
            </Helmet>

            <div className="min-h-screen flex flex-col bg-background">
                <Header solid />

                <main className="flex-1">
                    {/* Hero Section */}
                    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-secondary/80" />
                        <div className="container-narrow px-4 relative z-10 text-center text-white">
                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                                className="max-w-3xl mx-auto"
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-6">
                                    <PlayCircle className="w-4 h-4" />
                                    <span>Educational Resources</span>
                                </div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                                    Knowledge Centre
                                </h1>
                                <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl mx-auto">
                                    Empower yourself with financial knowledge. Watch our expert videos to make informed investment decisions.
                                </p>
                            </motion.div>
                        </div>
                    </section>

                    {/* Video Grid Section */}
                    <section className="section-padding bg-background">
                        <div className="container-narrow">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {videos.map((video, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-card rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-md transition-shadow"
                                    >
                                        <div className="aspect-video w-full bg-black/5">
                                            <iframe
                                                src={video.url}
                                                title={video.title}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                className="w-full h-full border-0"
                                            ></iframe>
                                        </div>
                                        <div className="p-5">
                                            <h3 className="font-semibold text-lg leading-snug text-foreground">
                                                {video.title}
                                            </h3>
                                        </div>
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

export default KnowledgeCentre;

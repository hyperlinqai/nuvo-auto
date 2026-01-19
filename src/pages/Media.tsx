import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/sections/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Newspaper, X, ZoomIn } from "lucide-react";

// Images
const mediaItems = [
    {
        title: "Success Stories",
        image: "/media/ICICI Prudential AMC Succes Stories.jpeg",
        description: "Featured in ICICI Prudential AMC Success Stories",
        date: "2024"
    },
    {
        title: "Outlook Money Feature",
        image: "/media/Featured on Outlook Money November 2025 Edition.jpeg",
        description: "Featured on Outlook Money November 2025 Edition",
        date: "November 2025"
    }
];

const Media = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [selectedImage]);

    return (
        <>
            <Helmet>
                <title>Media Coverage | SATS FINSERV</title>
                <meta
                    name="description"
                    content="SATS FINSERV in the news. Check out our latest media appearances, articles, and features in top financial publications."
                />
            </Helmet>

            <div className="min-h-screen flex flex-col bg-background">
                <Header solid />

                <main className="flex-1">
                    {/* Hero Section */}
                    <section className="relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/70" />
                        <div className="container-narrow hero-section-padding relative z-10 text-center text-white">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="max-w-3xl mx-auto"
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-6">
                                    <Newspaper className="w-4 h-4" />
                                    <span>Press & Media</span>
                                </div>
                                <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                                    Media Coverage
                                </h1>
                                <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl mx-auto">
                                    Our journey and expertise recognized by leading financial publications and industry platforms.
                                </p>
                            </motion.div>
                        </div>
                    </section>

                    {/* Media Grid */}
                    <section className="section-padding bg-muted/30">
                        <div className="container-narrow">
                            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                                {mediaItems.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.2 }}
                                        className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 cursor-pointer"
                                        onClick={() => setSelectedImage(item.image)}
                                    >
                                        <div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                <div className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-2 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                    <ZoomIn className="w-4 h-4" />
                                                    <span className="font-medium">View Full Image</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <div className="text-sm text-primary font-semibold mb-2">{item.date}</div>
                                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="text-muted-foreground">
                                                {item.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>
                </main>

                <Footer />
            </div>

            {/* Image Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-2 rounded-full"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="w-6 h-6 md:w-8 md:h-8" />
                        </button>
                        <motion.img
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            src={selectedImage}
                            alt="Full view"
                            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Media;

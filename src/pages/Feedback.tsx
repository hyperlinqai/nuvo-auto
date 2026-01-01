import { useState, FormEvent, ChangeEvent } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Star, MessageSquare } from "lucide-react";
import { Captcha } from "@/components/ui/Captcha";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const Feedback = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        rating: "5",
        feedback: "",
    });
    const [isCaptchaValid, setIsCaptchaValid] = useState(false);
    const [captchaKey, setCaptchaKey] = useState(0);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (!isCaptchaValid) {
            toast.error("Please correctly answer the security question.");
            return;
        }

        // Determine the subject line correctly for mailto
        const subject = encodeURIComponent(`New Feedback from ${formData.name}`);

        // Construct the email body
        const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\nRating: ${formData.rating}/5 Stars\n\nFeedback:\n${formData.feedback}`
        );

        // Notify user
        toast.success("Feedback Drafted!", {
            description: "Opening your email client to send the feedback.",
        });

        // Short delay to allow toast to appear
        setTimeout(() => {
            window.location.href = `mailto:satsfinserv@gmail.com?subject=${subject}&body=${body}`;
        }, 1500);

        // Reset form
        setFormData({
            name: "",
            email: "",
            rating: "5",
            feedback: "",
        });
        setCaptchaKey(prev => prev + 1);
        setIsCaptchaValid(false);
    };

    return (
        <>
            <Helmet>
                <title>Feedback | SATS FINSERV</title>
                <meta
                    name="description"
                    content="We value your feedback. Let us know how we can improve our services."
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
                                    <MessageSquare className="w-4 h-4" />
                                    <span>We're Listening</span>
                                </div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                                    Your Feedback Matters
                                </h1>
                                <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl mx-auto">
                                    Help us serve you better. We appreciate your thoughts and suggestions.
                                </p>
                            </motion.div>
                        </div>
                    </section>

                    {/* Form Section */}
                    <section className="section-padding bg-background">
                        <div className="container-narrow max-w-2xl">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-card rounded-2xl shadow-[var(--shadow-lg)] border border-border/60 p-6 md:p-10"
                            >
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Name *</Label>
                                            <Input
                                                id="name"
                                                name="name"
                                                placeholder="Your Name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email *</Label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="your@email.com"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="rating">Rating *</Label>
                                        <div className="relative">
                                            <select
                                                id="rating"
                                                name="rating"
                                                value={formData.rating}
                                                onChange={handleInputChange}
                                                className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none"
                                            >
                                                <option value="5">5 - Excellent</option>
                                                <option value="4">4 - Very Good</option>
                                                <option value="3">3 - Good</option>
                                                <option value="2">2 - Fair</option>
                                                <option value="1">1 - Poor</option>
                                            </select>
                                            <Star className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground pointer-events-none" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="feedback">Your Feedback *</Label>
                                        <Textarea
                                            id="feedback"
                                            name="feedback"
                                            placeholder="Tell us what you think..."
                                            rows={6}
                                            value={formData.feedback}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>

                                    {/* Captcha */}
                                    <Captcha key={captchaKey} onValidate={setIsCaptchaValid} />

                                    <Button type="submit" size="lg" className="w-full bg-primary text-white hover:bg-primary/90">
                                        Send Feedback
                                    </Button>
                                </form>
                            </motion.div>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Feedback;

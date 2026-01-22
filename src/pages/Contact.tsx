import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, Send, CheckCircle, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Captcha } from "@/components/ui/Captcha";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    mobile: z.string().min(10, "Please enter a valid mobile number"),
    email: z.string().email("Please enter a valid email address"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const Contact = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isCaptchaValid, setIsCaptchaValid] = useState(false);
    const [captchaKey, setCaptchaKey] = useState(0);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        if (!isCaptchaValid) {
            toast({
                title: "Security Check Failed",
                description: "Please correctly answer the security question.",
                variant: "destructive",
            });
            return;
        }
        setIsSubmitting(true);
        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
        reset();
        setCaptchaKey(prev => prev + 1);
        setIsCaptchaValid(false);
        toast({
            title: "Enquiry Submitted!",
            description: "We'll get back to you within 24 hours.",
        });

        setTimeout(() => {
            setIsSubmitted(false);
        }, 3000);
    };

    return (
        <>
            <Helmet>
                <title>Contact Us | SATS FINSERV</title>
                <meta
                    name="description"
                    content="Get in touch with SATS FINSERV. Visit our office in Indore, call us, or send an enquiry for mutual fund investment services."
                />
            </Helmet>

            <div className="min-h-screen flex flex-col bg-background">
                <Header solid />

                <main className="flex-1">
                    {/* Hero Section */}
                    <section className="relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-secondary/80" />
                        <div className="container-narrow hero-section-padding relative z-10 text-center text-white">
                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                                className="max-w-3xl mx-auto"
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-6">
                                    <MapPin className="w-4 h-4" />
                                    <span>Locate Us</span>
                                </div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                                    Get in Touch
                                </h1>
                                <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl mx-auto">
                                    We are here to help you with your investment journey. Reach out to us for any queries or support.
                                </p>
                            </motion.div>
                        </div>
                    </section>

                    <section className="section-padding bg-background">
                        <div className="container-narrow">
                            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                                {/* Contact Info & Map */}
                                <div className="space-y-12">
                                    {/* Info Cards */}
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div className="bg-card p-6 rounded-2xl border border-border/50 shadow-sm">
                                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                                <Phone className="w-5 h-5 text-primary" />
                                            </div>
                                            <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                                            <p className="text-muted-foreground text-sm mb-1">Mon-Fri from 8am to 5pm</p>
                                            <a href="tel:+919009999833" className="text-foreground font-medium hover:text-primary transition-colors">
                                                +91-9009999833
                                            </a>
                                        </div>
                                        <div className="bg-card p-6 rounded-2xl border border-border/50 shadow-sm">
                                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                                <Mail className="w-5 h-5 text-primary" />
                                            </div>
                                            <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                                            <p className="text-muted-foreground text-sm mb-1">We'll respond within 24h</p>
                                            <a href="mailto:support@satsfinserv.in" className="text-foreground font-medium hover:text-primary transition-colors">
                                                support@satsfinserv.in
                                            </a>
                                        </div>
                                    </div>

                                    {/* Head Office - Indore */}
                                    <div className="bg-card p-8 rounded-2xl border border-border/50 shadow-sm">
                                        <div className="flex items-start gap-5">
                                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                <MapPin className="w-5 h-5 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-xl mb-1">Head Office - Indore</h3>
                                                <address className="not-italic text-muted-foreground leading-relaxed mb-4">
                                                    409 & 411, Shalimar Corporate Centre<br />
                                                    Beside Cosmos Bank<br />
                                                    South Tukoganj, Behind High Court<br />
                                                    Indore – 452001 (M.P), India
                                                </address>
                                            </div>
                                        </div>
                                        <div className="aspect-video w-full rounded-xl overflow-hidden border border-border mt-6">
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.1472551327!2d75.8814755760434!3d22.7165842274488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd0e68d371cf%3A0xc3af8c734008779!2sShalimar%20Corporate%20Centre!5e0!3m2!1sen!2sin!4v1703164800000!5m2!1sen!2sin"
                                                width="100%"
                                                height="100%"
                                                style={{ border: 0 }}
                                                allowFullScreen
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                                title="Indore Office Location"
                                            ></iframe>
                                        </div>
                                    </div>

                                    {/* Branch Offices */}
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        {/* Bhopal Branch */}
                                        <div className="bg-card p-6 rounded-2xl border border-border/50 shadow-sm">
                                            <div className="flex items-start gap-4">
                                                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                                                    <MapPin className="w-5 h-5 text-secondary" />
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-lg mb-1">Bhopal Branch</h3>
                                                    <address className="not-italic text-muted-foreground text-sm leading-relaxed">
                                                        HIG 10, Rishi Nagar, Char Imli,<br />
                                                        Behind Akshay Heart Hospital,<br />
                                                        Bhopal (M.P) 462016
                                                    </address>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Dewas Branch */}
                                        <div className="bg-card p-6 rounded-2xl border border-border/50 shadow-sm">
                                            <div className="flex items-start gap-4">
                                                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                                                    <MapPin className="w-5 h-5 text-secondary" />
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-lg mb-1">Dewas Branch</h3>
                                                    <address className="not-italic text-muted-foreground text-sm leading-relaxed">
                                                        45/A Kalani Bagh,<br />
                                                        Behind ICICI Bank,<br />
                                                        Dewas (M.P) 455001
                                                    </address>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Contact Form */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-card rounded-2xl shadow-[var(--shadow-lg)] border border-border/60 p-8 lg:p-10 h-fit"
                                >
                                    <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
                                    {isSubmitted ? (
                                        <motion.div
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            className="text-center py-16"
                                        >
                                            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                                                <CheckCircle className="w-10 h-10 text-primary" />
                                            </div>
                                            <h4 className="font-semibold text-2xl text-foreground mb-2">
                                                Thank You!
                                            </h4>
                                            <p className="text-muted-foreground">
                                                Your enquiry has been submitted successfully.
                                            </p>
                                        </motion.div>
                                    ) : (
                                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                            <div>
                                                <Input
                                                    {...register("name")}
                                                    placeholder="Your Name"
                                                    className="h-12"
                                                />
                                                {errors.name && (
                                                    <p className="text-sm text-destructive mt-2">{errors.name.message}</p>
                                                )}
                                            </div>
                                            <div>
                                                <Input
                                                    {...register("mobile")}
                                                    type="tel"
                                                    placeholder="Mobile Number"
                                                    className="h-12"
                                                />
                                                {errors.mobile && (
                                                    <p className="text-sm text-destructive mt-2">{errors.mobile.message}</p>
                                                )}
                                            </div>
                                            <div>
                                                <Input
                                                    {...register("email")}
                                                    type="email"
                                                    placeholder="Email Address"
                                                    className="h-12"
                                                />
                                                {errors.email && (
                                                    <p className="text-sm text-destructive mt-2">{errors.email.message}</p>
                                                )}
                                            </div>
                                            <div>
                                                <Textarea
                                                    {...register("message")}
                                                    placeholder="Your Message"
                                                    rows={5}
                                                    className="resize-none"
                                                />
                                                {errors.message && (
                                                    <p className="text-sm text-destructive mt-2">{errors.message.message}</p>
                                                )}
                                            </div>

                                            <div>
                                                <Captcha key={captchaKey} onValidate={setIsCaptchaValid} />
                                            </div>

                                            <Button
                                                type="submit"
                                                size="lg"
                                                className="w-full h-12 text-base font-semibold bg-primary text-white hover:bg-primary/90"
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? "Submitting..." : (
                                                    <>
                                                        Submit Enquiry
                                                        <Send className="w-5 h-5 ml-2" />
                                                    </>
                                                )}
                                            </Button>
                                        </form>
                                    )}
                                    {/* Form Disclaimer */}
                                    <p className="text-xs text-muted-foreground mt-6 leading-relaxed">
                                        <strong className="text-foreground">Disclaimer:</strong> Mutual fund investments are subject to market risks. Please read all scheme related documents carefully.
                                        SATS FINSERV Pvt Ltd is a Mutual Fund Distributor registered with AMFI.
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Contact;

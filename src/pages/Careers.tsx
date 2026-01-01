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
import { Briefcase, Upload, CheckCircle2 } from "lucide-react";
import { Captcha } from "@/components/ui/Captcha";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const Careers = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        position: "",
        message: "",
    });
    const [resume, setResume] = useState<File | null>(null);
    const [isCaptchaValid, setIsCaptchaValid] = useState(false);
    const [captchaKey, setCaptchaKey] = useState(0);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setResume(e.target.files[0]);
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (!isCaptchaValid) {
            toast.error("Please correctly answer the security question.");
            return;
        }

        if (!resume) {
            toast.error("Please upload your resume.");
            return;
        }

        // Determine the subject line correctly for mailto
        const subject = encodeURIComponent(`Job Application: ${formData.position} - ${formData.name}`);

        // Construct the email body
        const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\nMobile: ${formData.mobile}\nPosition: ${formData.position}\n\nMessage:\n${formData.message}\n\n(Resume attached needed)`
        );

        // Since we can't attach files via mailto, we notify the user
        toast.success("Application Prepared!", {
            description: "Opening your email client. Please attach your resume manually before sending.",
        });

        // Short delay to allow toast to appear
        setTimeout(() => {
            window.location.href = `mailto:satsfinserv@gmail.com?subject=${subject}&body=${body}`;
        }, 1500);

        // Reset form
        setFormData({
            name: "",
            email: "",
            mobile: "",
            position: "",
            message: "",
        });
        setResume(null);
        setCaptchaKey(prev => prev + 1);
        setIsCaptchaValid(false);
    };

    return (
        <>
            <Helmet>
                <title>Careers | SATS FINSERV</title>
                <meta
                    name="description"
                    content="Join the SATS FINSERV team. Apply for open positions and build a rewarding career in financial services."
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
                                    <Briefcase className="w-4 h-4" />
                                    <span>We're Hiring</span>
                                </div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                                    Build Your Career with <span className="text-secondary-foreground">SATS</span>
                                </h1>
                                <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl mx-auto">
                                    Join a dynamic team dedicated to financial excellence. We are looking for passionate individuals to help us deliver the best service to our clients.
                                </p>
                            </motion.div>
                        </div>
                    </section>

                    {/* Application Form Section */}
                    <section className="section-padding bg-background">
                        <div className="container-narrow max-w-4xl">
                            <div className="grid md:grid-cols-5 gap-10">
                                {/* Sidebar / Info */}
                                <div className="md:col-span-2 space-y-8">
                                    <div>
                                        <h3 className="text-xl font-semibold mb-3">Why Join Us?</h3>
                                        <ul className="space-y-3">
                                            {[
                                                "Growth Opportunities",
                                                "Collaborative Culture",
                                                "Competitive Compensation",
                                                "Learning & Development",
                                            ].map((item) => (
                                                <li key={item} className="flex items-center gap-3 text-muted-foreground">
                                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-muted/30 p-6 rounded-2xl border border-border/50">
                                        <h3 className="font-semibold mb-2">Current Openings</h3>
                                        <p className="text-sm text-muted-foreground mb-4">
                                            We are always looking for talent. Even if you don't see a specific role, send us your resume!
                                        </p>
                                        <div className="space-y-2">
                                            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                                                Financial Distributor
                                            </span>
                                            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                                                Relationship Manager
                                            </span>
                                            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                                                Operations Executive
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Form */}
                                <div className="md:col-span-3">
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="bg-card rounded-2xl shadow-[var(--shadow-lg)] border border-border/60 p-6 md:p-8"
                                    >
                                        <h2 className="text-2xl font-semibold mb-6">Apply Now</h2>
                                        <form onSubmit={handleSubmit} className="space-y-5">
                                            <div className="grid md:grid-cols-2 gap-5">
                                                <div className="space-y-2">
                                                    <Label htmlFor="name">Full Name *</Label>
                                                    <Input
                                                        id="name"
                                                        name="name"
                                                        placeholder="John Doe"
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="mobile">Mobile Number *</Label>
                                                    <Input
                                                        id="mobile"
                                                        name="mobile"
                                                        placeholder="+91 98765 43210"
                                                        value={formData.mobile}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="email">Email Address *</Label>
                                                <Input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    placeholder="john@example.com"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="position">Position Applied For *</Label>
                                                <Input
                                                    id="position"
                                                    name="position"
                                                    placeholder="e.g. Relationship Manager"
                                                    value={formData.position}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="resume">Resume (PDF/Doc) *</Label>
                                                <div className="flex items-center gap-3">
                                                    <label
                                                        htmlFor="resume"
                                                        className="cursor-pointer flex items-center justify-center gap-2 px-4 py-2 border border-input rounded-md hover:bg-muted/50 transition-colors w-full text-sm text-muted-foreground"
                                                    >
                                                        <Upload className="w-4 h-4" />
                                                        {resume ? resume.name : "Click to upload resume"}
                                                    </label>
                                                    <Input
                                                        id="resume"
                                                        name="resume"
                                                        type="file"
                                                        accept=".pdf,.doc,.docx"
                                                        onChange={handleFileChange}
                                                        className="hidden"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="message">Cover Letter / Message</Label>
                                                <Textarea
                                                    id="message"
                                                    name="message"
                                                    placeholder="Tell us a bit about yourself..."
                                                    rows={4}
                                                    value={formData.message}
                                                    onChange={handleInputChange}
                                                />
                                            </div>

                                            {/* Captcha */}
                                            <Captcha key={captchaKey} onValidate={setIsCaptchaValid} />

                                            <Button type="submit" size="lg" className="w-full bg-primary text-white hover:bg-primary/90 mt-2">
                                                Submit Application
                                            </Button>
                                        </form>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Careers;

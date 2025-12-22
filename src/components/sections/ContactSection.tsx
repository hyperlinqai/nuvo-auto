import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  mobile: z.string().min(10, "Please enter a valid mobile number"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    toast({
      title: "Enquiry Submitted!",
      description: "We'll get back to you within 24 hours.",
    });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="enquiry" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Address Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="section-title">Get In Touch</p>
            <h2 className="section-heading mb-6">
              Visit Our <span className="text-gradient">Office</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed text-lg font-light">
              We welcome you to visit our office for any enquiries or to 
              discuss how we can assist with your mutual fund requirements.
            </p>

            {/* Address Card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              className="bg-card rounded-2xl p-8 shadow-[var(--shadow-lg)] border border-border/50 mb-8"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-foreground mb-3">
                    SATS FINSERV Pvt Ltd
                  </h3>
                  <address className="not-italic text-muted-foreground leading-relaxed">
                    409 & 411, Shalimar Corporate Centre<br />
                    Beside Cosmos Bank<br />
                    South Tukoganj, Behind High Court<br />
                    Indore – 452001 (M.P)<br />
                    India
                  </address>
                </div>
              </div>
            </motion.div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <motion.a
                whileHover={{ x: 4 }}
                href="mailto:support@satsfinserv.in"
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-secondary/20 transition-all">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium">support@satsfinserv.in</span>
              </motion.a>
              <motion.a
                whileHover={{ x: 4 }}
                href="tel:+919009999833"
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-secondary/20 transition-all">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium">+91-9009999833</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="glass-card p-8 lg:p-10">
              <h3 className="font-semibold text-3xl text-foreground mb-3">
                Quick Enquiry
              </h3>
              <p className="text-muted-foreground mb-8 text-lg font-light">
                Fill in your details and we'll get back to you shortly.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-16"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle className="w-10 h-10 text-primary" />
                  </motion.div>
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
                      className="h-14 bg-white/50 backdrop-blur-sm border-border/50 focus:border-primary text-base"
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
                      className="h-14 bg-white/50 backdrop-blur-sm border-border/50 focus:border-primary text-base"
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
                      className="h-14 bg-white/50 backdrop-blur-sm border-border/50 focus:border-primary text-base"
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
                      className="bg-white/50 backdrop-blur-sm border-border/50 focus:border-primary resize-none text-base"
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive mt-2">{errors.message.message}</p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-14 text-base font-semibold bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 btn-glow"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
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
                SATS FINSERV Pvt Ltd is a Mutual Fund Distributor registered with AMFI and does not provide investment advisory services or guarantee returns. 
                All transactions are executed solely based on investor instructions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

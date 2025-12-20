import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Enquiry Submitted!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form after delay
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", mobile: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section id="enquiry" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Address Section */}
          <div>
            <p className="section-title">Get In Touch</p>
            <h2 className="section-heading mb-6">
              Visit Our <span className="text-accent">Office</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We welcome you to visit our office for any enquiries or to 
              discuss how we can assist with your mutual fund requirements.
            </p>

            {/* Address Card */}
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-[var(--shadow-md)] border border-border/50 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                    Sats Finserv
                  </h3>
                  <address className="not-italic text-muted-foreground leading-relaxed">
                    Unit No. 509, Block B<br />
                    The One<br />
                    5 RNT Marg<br />
                    Indore – 452001<br />
                    Madhya Pradesh, India
                  </address>
                </div>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <a 
                href="mailto:info@satsfinserv.com" 
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>info@satsfinserv.com</span>
              </a>
              <a 
                href="tel:+919876543210" 
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+91 98765 43210</span>
              </a>
            </div>
          </div>

          {/* Enquiry Form */}
          <div>
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-[var(--shadow-md)] border border-border/50">
              <h3 className="font-display font-semibold text-2xl text-foreground mb-2">
                Quick Enquiry
              </h3>
              <p className="text-muted-foreground mb-6">
                Fill in your details and we'll get back to you shortly.
              </p>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="font-display font-semibold text-xl text-foreground mb-2">
                    Thank You!
                  </h4>
                  <p className="text-muted-foreground">
                    Your enquiry has been submitted successfully.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12 bg-background border-border focus:border-accent"
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      name="mobile"
                      placeholder="Mobile Number"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                      className="h-12 bg-background border-border focus:border-accent"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12 bg-background border-border focus:border-accent"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="bg-background border-border focus:border-accent resize-none"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        Submit Enquiry
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              )}

              {/* Form Disclaimer */}
              <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
                By submitting this enquiry, you acknowledge that the information 
                shared is for contact and service facilitation purposes only and 
                does not constitute investment advice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

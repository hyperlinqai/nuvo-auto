import { motion } from "framer-motion";
import { Video, Lock, MapPin } from "lucide-react";

const additionalOfferings = [
  {
    icon: Video,
    title: "Educational Videos",
    description: "Access to educational videos for investor awareness and learning, helping you understand investment concepts and make informed decisions.",
  },
  {
    icon: Lock,
    title: "Secure Client Login",
    description: "Secure client login access for portfolio and statement viewing, enabling you to monitor your investments conveniently and safely.",
  },
  {
    icon: MapPin,
    title: "In-Person Support",
    description: "In-person support available at our Indore office, providing personalized assistance and addressing your queries face-to-face.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const AdditionalOfferingsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="section-title">Additional Offerings</p>
          <h2 className="section-heading mb-6">
            Enhanced <span className="text-gradient">Support Services</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Beyond our core products and services, we offer additional resources 
            and support to enhance your investment experience.
          </p>
        </motion.div>

        {/* Offerings Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8 lg:gap-10"
        >
          {additionalOfferings.map((offering, index) => {
            const Icon = offering.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -12, scale: 1.03 }}
                className="group bg-card rounded-2xl p-8 lg:p-10 shadow-[var(--shadow-md)] border border-border/50 hover:shadow-[var(--shadow-xl)] hover:border-primary/30 transition-all duration-500"
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-6 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300"
                  >
                    <Icon className="w-10 h-10 text-primary" />
                  </motion.div>
                  <h3 className="font-semibold text-xl lg:text-2xl text-foreground mb-4">
                    {offering.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {offering.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AdditionalOfferingsSection;

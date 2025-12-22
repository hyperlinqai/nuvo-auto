import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Param Deep Singh",
    duration: "Client for 15+ Years",
    content: "Our association with Sats Finserv spans over fifteen years. What stands out is their consistent approach and unwavering commitment to transparent processes. They have been a reliable partner in facilitating our mutual fund transactions, always ensuring complete clarity in documentation and regular updates. Their disciplined methodology and long term relationship focus make them truly dependable.",
  },
  {
    name: "Murli Dhar Gandhi",
    duration: "Client for 12+ Years",
    content: "I have experienced exceptional service consistency with Sats Finserv. Their attention to detail, prompt responses to queries, and systematic approach to handling transactions give me complete confidence. They focus on understanding individual requirements and provide personalized operational support. The reliability and professionalism demonstrated over the years have made this association truly valuable.",
  },
  {
    name: "Jagdish Kaur",
    duration: "Client for 18+ Years",
    content: "Working with Sats Finserv has been a journey of comfort and clarity spanning nearly two decades. Their patient approach in explaining processes, meticulous record-keeping, and consistent communication have built tremendous trust. They treat every client with respect and ensure all transactions are handled with utmost care and transparency. This continuity of service is rare and greatly appreciated.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-narrow">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <p className="section-title">Client Experiences</p>
          <h2 className="section-heading mb-6">
            Trusted by <span className="text-gradient">Generations</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Long-term relationships built on transparency, reliability, and 
            consistent service quality over decades.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8 lg:gap-10"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="testimonial-card group"
            >
              {/* Quote Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-6 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300"
              >
                <Quote className="w-7 h-7 text-primary" />
              </motion.div>

              {/* Content */}
              <p className="text-foreground/80 leading-relaxed mb-8 text-[15px] min-h-[200px]">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="pt-6 border-t border-border">
                <p className="font-semibold text-foreground text-lg mb-1">
                  {testimonial.name}
                </p>
                <p className="text-sm text-primary font-medium">
                  {testimonial.duration}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

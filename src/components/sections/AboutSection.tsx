import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { TrendingUp, Briefcase, Award, Users } from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  number: string;
  label: string;
  delay: number;
  isInView: boolean;
}

const StatCard = ({ icon, number, label, delay, isInView }: StatCardProps) => {
  const numericValue = parseInt(number.replace(/\D/g, ""));
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, numericValue]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="stat-card"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay + 0.2, type: "spring" }}
        className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary mb-6"
      >
        {icon}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.3 }}
        className="text-5xl md:text-6xl font-bold text-primary mb-3 font-sans"
      >
        {count}{number.includes("+") ? "+" : ""}
      </motion.div>
      <div className="text-muted-foreground font-medium text-base">{label}</div>
    </motion.div>
  );
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container-narrow">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <p className="section-title">Who We Are</p>
          <h2 className="section-heading mb-6">
            A Legacy of Trust & <span className="text-gradient">Reliability</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            SATS FINSERV Pvt Ltd is an AMFI registered Mutual Fund Distributor committed to
            supporting investors through structured processes, transparent operations,
            and long term professional relationships.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <StatCard
            icon={<TrendingUp className="w-8 h-8" />}
            number="20+"
            label="Years of Experience"
            delay={0.1}
            isInView={isInView}
          />
          <StatCard
            icon={<Briefcase className="w-8 h-8" />}
            number="15+"
            label="Mutual Fund Products"
            delay={0.2}
            isInView={isInView}
          />
          <StatCard
            icon={<Award className="w-8 h-8" />}
            number="50"
            label="Certifications"
            delay={0.3}
            isInView={isInView}
          />
          <StatCard
            icon={<Users className="w-8 h-8" />}
            number="8000+"
            label="Happy Clients"
            delay={0.4}
            isInView={isInView}
          />
        </div>

        {/* Additional Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 text-center"
        >
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Our approach emphasizes continuity, trust, and long term client relationships.
            We focus on delivering consistent service quality while maintaining complete
            transparency in all our interactions and documentation processes.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

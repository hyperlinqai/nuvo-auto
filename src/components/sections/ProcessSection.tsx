import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  UserCircle,
  BookOpen,
  FileText,
  ArrowRightLeft,
  Eye,
  BarChart3,
  HeadphonesIcon,
} from "lucide-react";

const steps = [
  {
    icon: UserCircle,
    title: "Understanding Your Background",
    description:
      "We begin by understanding your personal and financial background to ensure appropriate service delivery.",
  },
  {
    icon: BookOpen,
    title: "Explaining Mutual Fund Concepts",
    description:
      "Providing clear explanations of mutual fund concepts and product categories for informed decision-making.",
  },
  {
    icon: FileText,
    title: "Documentation & Onboarding",
    description:
      "Assisting with complete documentation requirements and smooth onboarding processes.",
  },
  {
    icon: ArrowRightLeft,
    title: "Transaction Facilitation",
    description:
      "Facilitating mutual fund transactions accurately as per your specific instructions.",
  },
  {
    icon: Eye,
    title: "Transparency & Reporting",
    description:
      "Ensuring complete transparency in all records, statements, and reporting processes.",
  },
  {
    icon: BarChart3,
    title: "Portfolio Information Sharing",
    description:
      "Periodic sharing of portfolio information and statements for your review.",
  },
  {
    icon: HeadphonesIcon,
    title: "Ongoing Support",
    description:
      "Continuous monitoring and operational support throughout your investment journey.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const ProcessSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="section-padding bg-muted/30" ref={containerRef}>
      <div className="container-narrow">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="section-title">How We Do It</p>
          <h2 className="section-heading mb-6">
            Our Structured <span className="text-gradient">7-Step Process</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            A disciplined, compliant methodology ensuring transparency and operational excellence at every stage.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-10 items-start">
          {/* Steps timeline */}
          <div className="relative">
            {/* Vertical line with animated progress */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden lg:block">
              <motion.div
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary to-secondary rounded-full origin-top"
                style={{ height: progress }}
              />
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              className="space-y-6"
            >
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    variants={itemVariants}
                    whileHover={{ y: -4, scale: 1.01 }}
                    className="relative flex gap-4 lg:gap-6 pl-12"
                  >
                    {/* Step badge */}
                    <div className="absolute left-0 top-4 hidden lg:block">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", duration: 0.5, delay: index * 0.05 }}
                        className="w-10 h-10 rounded-full bg-white shadow-[var(--shadow-md)] border border-border/60 flex items-center justify-center font-semibold text-primary"
                      >
                        {index + 1}
                      </motion.div>
                    </div>

                    <div className="flex-1 bg-card rounded-2xl p-6 shadow-[var(--shadow-md)] border border-border/60 hover:border-primary/40 hover:shadow-[var(--shadow-xl)] transition-all duration-300">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/12 to-secondary/12 flex items-center justify-center text-primary">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold text-foreground leading-tight">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed ml-14 lg:ml-14">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Summary card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="bg-card rounded-2xl p-8 shadow-[var(--shadow-lg)] border border-border/60 sticky top-28"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Structured, Transparent, Compliant
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              A Clear Path for Every Investor
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Each step is designed to keep you informed, maintain transparency, and ensure every instruction is executed accurately.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-primary" />
                <span>Step-by-step visibility with documented checkpoints.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-primary" />
                <span>Consistent communication and record-sharing at key milestones.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-primary" />
                <span>Operations executed solely on investor instructions with transparent reporting.</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

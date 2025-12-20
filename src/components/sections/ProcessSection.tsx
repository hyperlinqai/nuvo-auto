import { useEffect, useRef, useState } from "react";
import { 
  UserCircle, 
  BookOpen, 
  FileText, 
  ArrowRightLeft, 
  Eye, 
  BarChart3, 
  HeadphonesIcon 
} from "lucide-react";

const steps = [
  {
    icon: UserCircle,
    title: "Understanding Your Background",
    description: "We begin by understanding your personal and financial background to ensure appropriate service delivery."
  },
  {
    icon: BookOpen,
    title: "Explaining Mutual Fund Concepts",
    description: "Providing clear explanations of mutual fund concepts and product categories for informed decision-making."
  },
  {
    icon: FileText,
    title: "Documentation & Onboarding",
    description: "Assisting with complete documentation requirements and smooth onboarding processes."
  },
  {
    icon: ArrowRightLeft,
    title: "Transaction Facilitation",
    description: "Facilitating mutual fund transactions accurately as per your specific instructions."
  },
  {
    icon: Eye,
    title: "Transparency & Reporting",
    description: "Ensuring complete transparency in all records, statements, and reporting processes."
  },
  {
    icon: BarChart3,
    title: "Portfolio Information Sharing",
    description: "Periodic sharing of portfolio information and statements for your review."
  },
  {
    icon: HeadphonesIcon,
    title: "Ongoing Support",
    description: "Continuous monitoring and operational support throughout your investment journey."
  }
];

const ProcessSection = () => {
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = refs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSteps(prev => new Set([...prev, index]));
          }
        },
        { threshold: 0.2 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-title">How We Do It</p>
          <h2 className="section-heading mb-6">
            Our Structured <span className="text-accent">7-Step Process</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A disciplined, compliant methodology ensuring transparency and 
            operational excellence at every stage.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isVisible = visibleSteps.has(index);

              return (
                <div
                  key={index}
                  ref={el => refs.current[index] = el}
                  className={`process-step relative opacity-0 ${isVisible ? 'animate-slide-in-left' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Step Number */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-display font-bold text-lg md:text-xl shadow-md">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <div className="flex items-start gap-3 mb-2">
                      <Icon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <h3 className="font-semibold text-foreground text-lg">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground ml-8">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

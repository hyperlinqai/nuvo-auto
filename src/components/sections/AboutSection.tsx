import { useEffect, useRef, useState } from "react";
import { TrendingUp, Briefcase, Award, Users } from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  number: string;
  label: string;
  delay: number;
}

const StatCard = ({ icon, number, label, delay }: StatCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const numericValue = parseInt(number.replace(/\D/g, ''));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

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
  }, [isVisible, numericValue]);

  return (
    <div 
      ref={ref}
      className={`stat-card opacity-0 ${isVisible ? 'animate-fade-up' : ''}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 text-accent mb-4">
        {icon}
      </div>
      <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
        {count}{number.includes('+') ? '+' : ''}
      </div>
      <div className="text-muted-foreground font-medium">{label}</div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-title">Who We Are</p>
          <h2 className="section-heading mb-6">
            A Legacy of Trust & <span className="text-accent">Reliability</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Sats Finserv is a SEBI-registered Mutual Fund Distribution firm committed to 
            supporting investors through structured processes, transparent operations, 
            and long-term professional relationships.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <StatCard
            icon={<TrendingUp className="w-6 h-6" />}
            number="20+"
            label="Years of Experience"
            delay={0.1}
          />
          <StatCard
            icon={<Briefcase className="w-6 h-6" />}
            number="15+"
            label="Mutual Fund Products"
            delay={0.2}
          />
          <StatCard
            icon={<Award className="w-6 h-6" />}
            number="10+"
            label="Certifications"
            delay={0.3}
          />
          <StatCard
            icon={<Users className="w-6 h-6" />}
            number="200+"
            label="Happy Clients"
            delay={0.4}
          />
        </div>

        {/* Additional Content */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our approach emphasizes continuity, trust, and long-term client relationships. 
            We focus on delivering consistent service quality while maintaining complete 
            transparency in all our interactions and documentation processes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

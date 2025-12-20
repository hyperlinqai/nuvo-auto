import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Param Deep Singh",
    duration: "Client for 15+ Years",
    content: "Our association with Sats Finserv spans over fifteen years. What stands out is their consistent approach and unwavering commitment to transparent processes. They have been a reliable partner in facilitating our mutual fund transactions, always ensuring complete clarity in documentation and regular updates. Their disciplined methodology and long-term relationship focus make them truly dependable."
  },
  {
    name: "Murli Dhar Gandhi",
    duration: "Client for 12+ Years",
    content: "I have experienced exceptional service consistency with Sats Finserv. Their attention to detail, prompt responses to queries, and systematic approach to handling transactions give me complete confidence. They focus on understanding individual requirements and provide personalized operational support. The reliability and professionalism demonstrated over the years have made this association truly valuable."
  },
  {
    name: "Jagdish Kaur",
    duration: "Client for 18+ Years",
    content: "Working with Sats Finserv has been a journey of comfort and clarity spanning nearly two decades. Their patient approach in explaining processes, meticulous record-keeping, and consistent communication have built tremendous trust. They treat every client with respect and ensure all transactions are handled with utmost care and transparency. This continuity of service is rare and greatly appreciated."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-title">Client Experiences</p>
          <h2 className="section-heading mb-6">
            Trusted by <span className="text-accent">Generations</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Long-term relationships built on transparency, reliability, and 
            consistent service quality over decades.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card group hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <Quote className="w-5 h-5 text-accent" />
              </div>

              {/* Content */}
              <p className="text-foreground/80 leading-relaxed mb-6 text-[15px]">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="pt-6 border-t border-border">
                <p className="font-display font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-accent font-medium">
                  {testimonial.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Eye, Target, ShieldCheck, Building2, Users, Award } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const teamMembers = [
  {
    name: "Mr. Sanjeev Kumar Sharma",
    role: "Founder & Director",
    bio: "20 years of industry experience across portfolio planning, risk management, and investment management. Qualified 8 times for the Million Dollar Round Table Club.",
    image: "/team/Mr%20sanjeev%20kumar.png",
  },
  {
    name: "Rahul Joshi",
    role: "Director",
    bio: "17+ years of expertise in the Asset Management Industry. Held key positions at ICICI Prudential and L&T Investment Management, specializing in Investment strategies and Risk management.",
    image: "/team/Rahul%20Joshi.png",
  },
  {
    name: "Mrs. Amita Sharma",
    role: "Director",
    bio: "13 years of experience in the insurance industry. Qualified 8 times for the Million Dollar Round Table Club.",
    image: "/team/Mrs.%20Amita%20Sharma.png",
  },
];

const stats = [
  { icon: Building2, value: "2017", label: "Established" },
  { icon: Users, value: "4000+", label: "Families Served" },
  { icon: Award, value: "9+", label: "Years Experience" },
];

const CompanyProfile = () => {
  return (
    <>
      <Helmet>
        <title>Company Profile | SATS FINSERV</title>
        <meta
          name="description"
          content="Learn about SATS FINSERV Pvt Ltd, established in 2017 and registered with AMFI as a Mutual Fund Distributor, serving families, HNIs, and businesses with disciplined, compliant facilitation."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header solid />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-secondary/80" />
            <div className="absolute inset-0 opacity-[0.05]">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)",
                  backgroundSize: "24px 24px",
                }}
              />
            </div>
            <div className="container-narrow hero-section-padding relative z-10">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="max-w-4xl text-center mx-auto"
              >
                <p className="section-title text-white/80">About Us</p>
                <h1 className="section-heading text-white mb-6">
                  SATS FINSERV Private Limited
                </h1>
                <p className="text-lg md:text-xl text-white/85 leading-relaxed">
                  Established in 2017, SATS FINSERV is an AMFI registered Mutual Fund Distributor with 9+ years of experience, serving 4000+ families across India and abroad.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Button
                    variant="default"
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90 px-7 h-12 font-semibold"
                    asChild
                  >
                    <a href="/#enquiry">Contact Us</a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/50 text-white hover:bg-white/10 px-7 h-12 font-semibold"
                    onClick={() => document.getElementById("team")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Meet Our Team
                  </Button>
                </div>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={stagger}
                initial="hidden"
                animate="visible"
                className="mt-12 grid grid-cols-3 gap-4 max-w-2xl mx-auto"
              >
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      variants={fadeUp}
                      className="text-center"
                    >
                      <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-3">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                      <p className="text-sm text-white/70">{stat.label}</p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </section>

          {/* Industry Experience Section */}
          <section className="section-padding bg-background">
            <div className="container-narrow max-w-5xl">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-120px" }}
                className="text-center mb-12"
              >
                <p className="section-title">Our Story</p>
                <h2 className="section-heading mb-4">Industry Experience</h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  Originally known as "SATS SOLUTIONS PVT", the company was registered as SATS FINSERV Private Limited under the Companies Act 2013 on 24th March 2017.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8 items-start">
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-120px" }}
                  className="bg-card rounded-2xl p-8 shadow-[var(--shadow-md)] border border-border/60"
                >
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Who We Are</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    SATS FINSERV Pvt Ltd is registered with AMFI as a Mutual Fund Distributor. With a
                    combined experience of more than 9+ years in Risk Management and Investment
                    Management, the team offers financial services to HNIs, corporates, and family run
                    businesses.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Success is measured by helping clients meet their financial goals and objectives.
                    SATS FINSERV facilitates well researched financial products and currently works
                    with 4000+ families across India and abroad.
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-120px" }}
                  className="bg-card rounded-2xl p-8 shadow-[var(--shadow-md)] border border-border/60"
                >
                  <h3 className="text-xl font-semibold text-foreground mb-4">At a Glance</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                      <span>Established: 24 March 2017 under Companies Act 2013</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                      <span>AMFI registered Mutual Fund Distributor</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                      <span>9+ years of combined risk and investment management experience</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                      <span>Serving HNIs, corporates, and family run businesses</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                      <span>4000+ families served across India and abroad</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Vision, Mission, Philosophy Section */}
          <section className="section-padding bg-muted/40">
            <div className="container-narrow max-w-5xl">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-120px" }}
                className="text-center mb-12"
              >
                <p className="section-title">Our Values</p>
                <h2 className="section-heading mb-4">Vision, Mission & Philosophy</h2>
              </motion.div>

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-120px" }}
                className="grid gap-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Vision",
                      icon: Eye,
                      copy:
                        "To be a trusted distribution partner known for transparent processes, disciplined execution, and long term client relationships.",
                    },
                    {
                      title: "Mission",
                      icon: Target,
                      copy:
                        "To facilitate well researched financial products, keep investors informed at every step, and execute instructions accurately and efficiently.",
                    },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.title}
                        variants={fadeUp}
                        className="relative overflow-hidden rounded-2xl border border-primary/15 bg-white/80 backdrop-blur-lg shadow-[var(--shadow-lg)] p-6"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-white/40 to-secondary/10 pointer-events-none" />
                        <div className="relative flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-white/70 backdrop-blur-md flex items-center justify-center text-primary shadow-[var(--shadow-sm)]">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{item.copy}</p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                <motion.div
                  variants={fadeUp}
                  className="relative overflow-hidden rounded-2xl border border-secondary/20 bg-white/85 backdrop-blur-lg shadow-[var(--shadow-xl)] p-7"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary/12 via-white/40 to-primary/10 pointer-events-none" />
                  <div className="relative flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
                    <div className="w-12 h-12 rounded-xl bg-white/70 backdrop-blur-md flex items-center justify-center text-secondary shadow-[var(--shadow-sm)]">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Philosophy</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We believe in compliance first operations, clarity in documentation, and consistent
                        communication so investors can make informed decisions.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Team Section */}
          <section id="team" className="section-padding bg-background">
            <div className="container-narrow max-w-5xl">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-120px" }}
                className="text-center mb-12"
              >
                <p className="section-title">Our Team</p>
                <h2 className="section-heading mb-4">Leadership</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Meet the experienced professionals behind SATS FINSERV's success.
                </p>
              </motion.div>

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-120px" }}
                className="grid md:grid-cols-3 gap-6"
              >
                {teamMembers.map((member) => (
                  <motion.div
                    key={member.name}
                    variants={fadeUp}
                    className="bg-card rounded-2xl overflow-hidden border border-border/60 shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-xl)] transition-all duration-300"
                  >
                    <div className="relative h-72 md:h-80 w-full overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
                    </div>
                    <div className="p-6 space-y-2">
                      <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                      <p className="text-sm font-medium text-primary">{member.role}</p>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {member.bio}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="section-padding bg-muted/50">
            <div className="container-narrow max-w-4xl text-center">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-120px" }}
                className="glass-card bg-white/80 border border-white/40 shadow-[var(--shadow-lg)] p-10 rounded-3xl"
              >
                <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                  Ready to Start Your Financial Journey?
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Connect with our experienced team for disciplined, compliant financial facilitation tailored to your goals.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button
                    variant="default"
                    size="lg"
                    className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-7 h-12 font-semibold"
                    asChild
                  >
                    <a href="/#enquiry">Quick Enquiry</a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary text-primary hover:bg-primary/10 px-7 h-12 font-semibold"
                    asChild
                  >
                    <a href="/">Back to Home</a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CompanyProfile;

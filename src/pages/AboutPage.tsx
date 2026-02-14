import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import GlowCard from "@/components/GlowCard";
import AnimatedCounter from "@/components/AnimatedCounter";
import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { highlights, values, education, hobbies } from "@/lib/data";

const AboutPage = () => {
  return (
    <Layout>
      <PageHeader
        badge="About Me"
        title="Who I Am"
        description="A passionate technologist on a mission to bridge the gap between AI research and real-world applications"
      />

      {/* Main About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Introduction */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Hello, I'm <span className="text-gradient">Praveen Kumar</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a final-year B.Tech student specializing in Computer Science at Swami Vivekananda University, 
                  with a current CGPA of 8.45. My journey in tech began with curiosity and has evolved into a deep 
                  passion for Machine Learning and Full Stack Development.
                </p>
                <p>
                  What sets me apart is my hands-on research experience at prestigious institutions like IIT BHU, 
                  where I worked on energy consumption prediction models for smart buildings under the mentorship 
                  of Dr. Vinayak Srivastava.
                </p>
                <p>
                  I believe in the power of technology to solve real-world problems. Whether it's detecting brain 
                  tumors using CNNs or building comprehensive job portals, I approach each project with dedication 
                  and a commitment to excellence.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                {["Python", "TensorFlow", "React", "Node.js", "SQL", "OpenCV", "Keras", "Git"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-sm rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right: Stats & Quick Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <GlowCard>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 rounded-lg bg-primary/5">
                    <div className="text-4xl font-display font-bold text-gradient">
                      <AnimatedCounter end={4} suffix="+" />
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">Internships Completed</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-secondary/5">
                    <div className="text-4xl font-display font-bold text-gradient-secondary">
                      <AnimatedCounter end={10} suffix="+" />
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">Certifications</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-neon-purple/5">
                    <div className="text-4xl font-display font-bold text-gradient">
                      8.45
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">Current CGPA</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-primary/5">
                    <div className="text-4xl font-display font-bold text-gradient-secondary">
                      <AnimatedCounter end={4} suffix="+" />
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">Major Projects</p>
                  </div>
                </div>
              </GlowCard>

              <GlowCard>
                <h3 className="font-display font-semibold text-lg text-foreground mb-4">Quick Info</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location</span>
                    <span className="text-foreground">Dhanbad, India</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Education</span>
                    <span className="text-foreground">B.Tech CSE (2022-26)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Languages</span>
                    <span className="text-foreground">English, Hindi, Bangla</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Availability</span>
                    <span className="text-primary">Open to Opportunities</span>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-20 neural-grid">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium tracking-widest text-sm uppercase">Expertise</span>
            <h2 className="section-title text-gradient mt-2">Core Competencies</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <GlowCard key={item.title} delay={index * 0.1}>
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} p-0.5 mb-4`}>
                  <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium tracking-widest text-sm uppercase">Education</span>
            <h2 className="section-title text-gradient mt-2">Academic Journey</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {education.map((edu, index) => (
              <GlowCard key={edu.degree + edu.period} delay={index * 0.15}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-display font-semibold text-foreground">
                          {edu.degree}
                        </h3>
                        {edu.current && (
                          <span className="px-2 py-0.5 text-xs rounded-full bg-primary/20 text-primary">
                            Current
                          </span>
                        )}
                      </div>
                      {edu.field && (
                        <p className="text-primary font-medium text-sm">{edu.field}</p>
                      )}
                      <p className="text-muted-foreground text-sm">
                        {edu.institution} • {edu.location}
                      </p>
                    </div>
                  </div>
                  <div className="text-right md:text-right ml-16 md:ml-0">
                    <div className="text-2xl font-display font-bold text-gradient">{edu.grade}</div>
                    <div className="text-sm text-muted-foreground">{edu.period}</div>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 neural-grid">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium tracking-widest text-sm uppercase">What Drives Me</span>
            <h2 className="section-title text-gradient mt-2">My Values</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <GlowCard key={value.title} delay={index * 0.15}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Hobbies */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium tracking-widest text-sm uppercase">Beyond Code</span>
            <h2 className="section-title text-gradient mt-2">Hobbies & Interests</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {hobbies.map((hobby, index) => (
              <GlowCard key={hobby.name} delay={index * 0.15}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <hobby.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{hobby.name}</h3>
                    <p className="text-sm text-muted-foreground">{hobby.description}</p>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <GlowCard className="max-w-3xl mx-auto" hoverEffect={false}>
            <div className="text-center py-8">
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                Want to know more?
              </h2>
              <p className="text-muted-foreground mb-6">
                Check out my skills, experience, and projects to see what I can bring to your team.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/skills" className="btn-primary">
                  View My Skills
                </Link>
                <Link to="/experience" className="btn-outline">
                  See Experience
                </Link>
              </div>
            </div>
          </GlowCard>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;

import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import GlowCard from "@/components/GlowCard";
import { Link } from "react-router-dom";
import { Briefcase, Calendar, MapPin, Award, ChevronRight, Building2, GraduationCap } from "lucide-react";

const experiences = [
  {
    title: "AI/ML Research Intern",
    company: "Banaras Hindu University (IIT BHU)",
    location: "Varanasi, India",
    period: "2025",
    duration: "6 Weeks",
    type: "Research",
    description: "Developed a machine learning model for predicting energy consumption in smart buildings, gaining practical experience in data handling and model development.",
    achievements: [
      "Built ML model for energy consumption prediction in residential smart buildings",
      "Worked under the mentorship of Dr. Vinayak Srivastava",
      "Focused on sustainable tech solutions and performance analysis",
      "Applied advanced data handling and preprocessing techniques",
    ],
    skills: ["Python", "Scikit-learn", "Pandas", "Research"],
    featured: true,
  },
  {
    title: "AI and Data Analytics Intern",
    company: "AICTE, Shell & Edunet Foundation",
    location: "Virtual",
    period: "2025",
    duration: "4 Weeks",
    type: "Virtual",
    description: "Completed the Skills4Future Program focused on AI, Data Analytics, and Green Skills.",
    achievements: [
      "Gained hands-on experience with data-driven techniques",
      "Applied analytics to sustainability-related challenges",
      "Completed comprehensive AI and data analytics training",
      "Developed solutions for green technology applications",
    ],
    skills: ["Data Analytics", "AI", "Python", "Green Tech"],
    featured: false,
  },
  {
    title: "Python Programming Intern",
    company: "Vault of Codes",
    location: "Remote",
    period: "2025",
    duration: "4 Weeks",
    type: "Remote",
    description: "Built Python-based applications and automation scripts, enhancing coding proficiency and logical thinking.",
    achievements: [
      "Developed multiple Python automation scripts",
      "Worked on data structures and file handling projects",
      "Implemented modular coding practices",
      "Collaborated in a team-oriented environment",
    ],
    skills: ["Python", "Automation", "Data Structures", "Problem Solving"],
    featured: false,
  },
  {
    title: "Machine Learning Intern",
    company: "Encryptix",
    location: "Remote",
    period: "2024",
    duration: "4 Weeks",
    type: "Remote",
    description: "Gained hands-on experience in applying machine learning concepts from development to deployment.",
    achievements: [
      "Applied ML concepts from development to deployment",
      "Contributed to team projects effectively",
      "Demonstrated strong analytical and problem-solving skills",
      "Completed comprehensive ML training program",
    ],
    skills: ["Machine Learning", "Python", "Data Analysis", "Teamwork"],
    featured: false,
  },
];

const ExperiencePage = () => {
  return (
    <Layout>
      <PageHeader
        badge="Career Journey"
        title="Work Experience"
        description="My professional journey through internships and research positions"
      />

      {/* Experience Stats */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { value: "4+", label: "Internships" },
              { value: "IIT BHU", label: "Research Experience" },
              { value: "6+", label: "Months Experience" },
              { value: "ML/AI", label: "Primary Focus" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-4 rounded-xl bg-card border border-border/50"
              >
                <div className="text-2xl font-display font-bold text-gradient">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-8 pb-12 last:pb-0"
              >
                {/* Timeline line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-[11px] top-6 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/20" />
                )}
                
                {/* Timeline dot */}
                <div className={`absolute left-0 top-6 w-6 h-6 rounded-full flex items-center justify-center ${
                  exp.featured 
                    ? "bg-primary glow" 
                    : "bg-muted border-2 border-primary/50"
                }`}>
                  <div className={`w-2 h-2 rounded-full ${exp.featured ? "bg-primary-foreground" : "bg-primary"}`} />
                </div>

                <GlowCard className={exp.featured ? "border-primary/30" : ""}>
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        {exp.featured && (
                          <span className="px-2 py-0.5 text-xs rounded-full bg-primary/20 text-primary font-medium">
                            Featured
                          </span>
                        )}
                        <span className="px-2 py-0.5 text-xs rounded-full bg-secondary/20 text-secondary">
                          {exp.type}
                        </span>
                      </div>
                      <h3 className="text-xl font-display font-bold text-foreground">
                        {exp.title}
                      </h3>
                    </div>
                    <div className="text-right">
                      <div className="font-display font-semibold text-primary">{exp.period}</div>
                      <div className="text-sm text-muted-foreground">{exp.duration}</div>
                    </div>
                  </div>

                  {/* Company & Location */}
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Building2 className="w-4 h-4 text-primary" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Gained */}
      <section className="py-20 neural-grid">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium tracking-widest text-sm uppercase">
              Growth
            </span>
            <h2 className="section-title text-gradient mt-2">What I Gained</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: Briefcase,
                title: "Industry Experience",
                description: "Real-world exposure to AI/ML applications in various domains including sustainability and healthcare",
              },
              {
                icon: GraduationCap,
                title: "Research Skills",
                description: "Hands-on research experience at IIT BHU with mentorship from leading academics",
              },
              {
                icon: Award,
                title: "Professional Growth",
                description: "Developed strong analytical, problem-solving, and teamwork skills across multiple projects",
              },
            ].map((item, index) => (
              <GlowCard key={item.title} delay={index * 0.15}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <GlowCard className="max-w-3xl mx-auto" hoverEffect={false}>
            <div className="text-center py-8">
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                See what I've built
              </h2>
              <p className="text-muted-foreground mb-6">
                Explore the projects where I've applied my skills and experience
              </p>
              <Link to="/projects" className="btn-primary inline-flex items-center gap-2">
                View Projects
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </GlowCard>
        </div>
      </section>
    </Layout>
  );
};

export default ExperiencePage;

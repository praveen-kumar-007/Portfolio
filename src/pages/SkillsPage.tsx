import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import GlowCard from "@/components/GlowCard";
import { Link } from "react-router-dom";
import { Code2, Brain, Server, Wrench, ChevronRight } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Programming Languages",
    description: "Core languages I use for development and data science",
    color: "from-primary to-neon-blue",
    skills: [
      { name: "Python", level: 90, description: "Primary language for ML/AI and automation" },
      { name: "JavaScript", level: 85, description: "Full stack web development" },
      { name: "TypeScript", level: 75, description: "Type-safe React applications" },
      { name: "SQL", level: 80, description: "Database queries and management" },
      { name: "C#", level: 65, description: "Foundation certified by Microsoft" },
    ],
  },
  {
    icon: Brain,
    title: "Machine Learning & AI",
    description: "Frameworks and techniques for building intelligent systems",
    color: "from-secondary to-neon-pink",
    skills: [
      { name: "TensorFlow/Keras", level: 85, description: "Deep learning model development" },
      { name: "Scikit-learn", level: 80, description: "Classical ML algorithms" },
      { name: "OpenCV", level: 75, description: "Computer vision applications" },
      { name: "CNN & Deep Learning", level: 80, description: "Image classification & neural networks" },
      { name: "Data Analysis", level: 85, description: "EDA, feature engineering" },
    ],
  },
  {
    icon: Server,
    title: "Web Development",
    description: "Modern technologies for building scalable web applications",
    color: "from-neon-purple to-secondary",
    skills: [
      { name: "React.js", level: 85, description: "Component-based UI development" },
      { name: "Node.js", level: 80, description: "Backend API development" },
      { name: "HTML/CSS", level: 90, description: "Responsive web design" },
      { name: "REST APIs", level: 80, description: "API design and integration" },
      { name: "Git/GitHub", level: 85, description: "Version control & collaboration" },
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    description: "Development tools and cloud platforms I work with",
    color: "from-neon-blue to-primary",
    skills: [
      { name: "Google Cloud", level: 70, description: "NPTEL certified" },
      { name: "Pandas/NumPy", level: 85, description: "Data manipulation & analysis" },
      { name: "Jupyter Notebook", level: 90, description: "Interactive development" },
      { name: "VS Code", level: 95, description: "Primary development environment" },
      { name: "Postman", level: 75, description: "API testing and documentation" },
    ],
  },
];

const SkillsPage = () => {
  return (
    <Layout>
      <PageHeader
        badge="Technical Expertise"
        title="Skills & Technologies"
        description="A comprehensive overview of my technical skills across various domains"
      />

      {/* Skills Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} p-0.5`}>
                    <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground">
                      {category.title}
                    </h2>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                </div>

                {/* Skills */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <GlowCard 
                      key={skill.name} 
                      delay={skillIndex * 0.05}
                      className="group"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {skill.name}
                          </h3>
                          <p className="text-xs text-muted-foreground mt-1">
                            {skill.description}
                          </p>
                        </div>
                        <span className="text-lg font-display font-bold text-primary">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-bar-fill"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: 0.3 + skillIndex * 0.1,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </GlowCard>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skill Highlights */}
      <section className="py-20 neural-grid">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium tracking-widest text-sm uppercase">
              Key Strengths
            </span>
            <h2 className="section-title text-gradient mt-2">What I Do Best</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <GlowCard delay={0}>
              <div className="text-center py-4">
                <div className="text-5xl font-display font-bold text-gradient mb-2">90%</div>
                <h3 className="font-display font-semibold text-foreground mb-2">Python Proficiency</h3>
                <p className="text-sm text-muted-foreground">
                  Deep expertise in Python for ML, data science, and automation
                </p>
              </div>
            </GlowCard>
            <GlowCard delay={0.1}>
              <div className="text-center py-4">
                <div className="text-5xl font-display font-bold text-gradient-secondary mb-2">85%</div>
                <h3 className="font-display font-semibold text-foreground mb-2">TensorFlow/Keras</h3>
                <p className="text-sm text-muted-foreground">
                  Building and deploying deep learning models for real applications
                </p>
              </div>
            </GlowCard>
            <GlowCard delay={0.2}>
              <div className="text-center py-4">
                <div className="text-5xl font-display font-bold text-gradient mb-2">85%</div>
                <h3 className="font-display font-semibold text-foreground mb-2">React.js</h3>
                <p className="text-sm text-muted-foreground">
                  Creating modern, responsive, and interactive user interfaces
                </p>
              </div>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <GlowCard className="max-w-3xl mx-auto" hoverEffect={false}>
            <div className="text-center py-8">
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                See my skills in action
              </h2>
              <p className="text-muted-foreground mb-6">
                Check out my projects where I've applied these technologies to solve real problems
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

export default SkillsPage;

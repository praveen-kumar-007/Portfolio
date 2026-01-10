import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import GlowCard from "@/components/GlowCard";
import { Link } from "react-router-dom";
import { ExternalLink, Github, Brain, Server, Lock, Zap, ChevronRight, Code2, Layers } from "lucide-react";

const projects = [
  {
    title: "Brain Tumor Detection Model",
    subtitle: "Medical AI Application",
    description: "A deep learning model utilizing Convolutional Neural Networks (CNNs) to detect brain tumors from MRI images. This project demonstrates the practical application of AI in healthcare diagnostics.",
    longDescription: "Developed during my exploration of medical AI applications, this project uses state-of-the-art CNN architectures to classify MRI brain scans. The model was trained on real-world medical datasets and achieves high accuracy in distinguishing between healthy and tumor-affected brain scans.",
    features: [
      "MRI image preprocessing and augmentation",
      "Custom CNN architecture design",
      "Binary classification for tumor detection",
      "Model evaluation with precision/recall metrics",
      "Visualization of detection results",
    ],
    tags: ["Python", "TensorFlow", "Keras", "CNN", "OpenCV", "NumPy"],
    icon: Brain,
    category: "ML/AI",
    color: "from-primary to-neon-blue",
    featured: true,
    github: "https://github.com/praveen-kumar-007",
  },
  {
    title: "HireMe - Job Portal",
    subtitle: "Full Stack Web Application",
    description: "A comprehensive job portal built as part of 100-hour Full Stack Development training with IBM. Features both front-end and back-end components for complete job marketplace functionality.",
    longDescription: "This full-stack application serves as a complete job marketplace where employers can post jobs and candidates can apply. Built with modern web technologies, it demonstrates end-to-end application development skills.",
    features: [
      "User authentication and authorization",
      "Job posting and management for employers",
      "Job search and application for candidates",
      "Resume upload and management",
      "Real-time notifications",
      "Responsive design for all devices",
    ],
    tags: ["React", "Node.js", "MongoDB", "Express", "REST API", "JWT"],
    icon: Server,
    category: "Full Stack",
    color: "from-secondary to-neon-pink",
    featured: true,
    github: "https://github.com/praveen-kumar-007",
  },
  {
    title: "Energy Consumption Prediction",
    subtitle: "Smart Building Analytics",
    description: "ML model developed during IIT BHU internship to predict energy usage in residential smart buildings, contributing to sustainable technology solutions.",
    longDescription: "Developed under the mentorship of Dr. Vinayak Srivastava at IIT BHU, this project applies machine learning to predict and optimize energy consumption patterns in smart buildings. The model helps in reducing energy waste and promoting sustainable living.",
    features: [
      "Time-series data analysis",
      "Feature engineering for energy patterns",
      "Multiple regression model comparison",
      "Hyperparameter tuning for optimization",
      "Performance visualization dashboards",
    ],
    tags: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "XGBoost"],
    icon: Zap,
    category: "ML/AI",
    color: "from-neon-purple to-secondary",
    featured: false,
    github: "https://github.com/praveen-kumar-007",
  },
  {
    title: "Password Manager",
    subtitle: "Desktop Security Application",
    description: "A secure password manager application built with Python and Tkinter, featuring password generation, encryption, and secure local storage.",
    longDescription: "This desktop application provides a secure way to generate, store, and manage passwords. Built with security best practices in mind, it uses encryption to protect stored credentials while providing an intuitive GUI for easy access.",
    features: [
      "Secure password generation",
      "Encrypted local storage using JSON",
      "Copy to clipboard functionality",
      "Search and retrieve passwords",
      "Intuitive Tkinter GUI",
    ],
    tags: ["Python", "Tkinter", "JSON", "Cryptography", "GUI"],
    icon: Lock,
    category: "Desktop App",
    color: "from-neon-blue to-primary",
    featured: false,
    github: "https://github.com/praveen-kumar-007",
  },
];

const ProjectsPage = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <Layout>
      <PageHeader
        badge="My Work"
        title="Projects Portfolio"
        description="A showcase of my work spanning Machine Learning, Full Stack Development, and Desktop Applications"
      />

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-primary font-medium tracking-widest text-sm uppercase">
              Highlighted Work
            </span>
            <h2 className="text-3xl font-display font-bold text-foreground mt-2">
              Featured Projects
            </h2>
          </motion.div>

          <div className="space-y-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="relative group">
                  {/* Glow effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.color} rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-sm`} />
                  
                  <div className="relative card-glass overflow-hidden">
                    <div className="grid lg:grid-cols-5 gap-8">
                      {/* Left: Icon & Category */}
                      <div className="lg:col-span-1 flex lg:flex-col items-center lg:items-start gap-4">
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${project.color} p-0.5`}>
                          <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                            <project.icon className="w-8 h-8 text-primary" />
                          </div>
                        </div>
                        <div>
                          <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                            {project.category}
                          </span>
                        </div>
                      </div>

                      {/* Right: Content */}
                      <div className="lg:col-span-4">
                        <h3 className="text-2xl font-display font-bold text-foreground mb-1">
                          {project.title}
                        </h3>
                        <p className="text-primary font-medium text-sm mb-4">
                          {project.subtitle}
                        </p>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {project.longDescription}
                        </p>

                        {/* Features */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                            <Layers className="w-4 h-4 text-primary" />
                            Key Features
                          </h4>
                          <div className="grid md:grid-cols-2 gap-2">
                            {project.features.map((feature, i) => (
                              <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <ChevronRight className="w-3 h-3 text-primary shrink-0" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Links */}
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-outline inline-flex items-center gap-2"
                        >
                          <Github className="w-4 h-4" />
                          View on GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-20 neural-grid">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-primary font-medium tracking-widest text-sm uppercase">
              More Projects
            </span>
            <h2 className="text-3xl font-display font-bold text-foreground mt-2">
              Other Notable Work
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <GlowCard key={project.title} delay={index * 0.15}>
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} p-0.5 shrink-0`}>
                    <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                      <project.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <span className="px-2 py-0.5 text-xs rounded-full bg-secondary/20 text-secondary">
                      {project.category}
                    </span>
                    <h3 className="font-display font-bold text-lg text-foreground mt-1">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features Preview */}
                <ul className="space-y-1 mb-4">
                  {project.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <ChevronRight className="w-3 h-3 text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <GlowCard className="max-w-3xl mx-auto" hoverEffect={false}>
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-foreground/10 flex items-center justify-center mx-auto mb-6">
                <Github className="w-8 h-8 text-foreground" />
              </div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                Explore More on GitHub
              </h2>
              <p className="text-muted-foreground mb-6">
                These are just highlights. Check out my GitHub for more projects, code samples, and contributions.
              </p>
              <a
                href="https://github.com/praveen-kumar-007"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                Visit GitHub Profile
              </a>
            </div>
          </GlowCard>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;

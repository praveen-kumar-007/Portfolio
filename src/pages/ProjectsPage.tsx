import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import GlowCard from "@/components/GlowCard";
import { Link } from "react-router-dom";
import { ExternalLink, Github, Brain, Server, Lock, Zap, ChevronRight, Code2, Layers } from "lucide-react";

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

const projects = [
  {
    title: "Multimarg Logistics Platform",
    slug: "multimarg-logistics",
    subtitle: "Enterprise B2B Logistics Application",
    description: "A scalable B2B logistics application focusing on modular component design, responsive UI/UX, and robust backend architecture.",
    longDescription: "Built as a comprehensive full-stack logistics platform during my freelance work with Multimarg Private Limited. The application handles complex booking, billing, and carrier coordination workflows. It features a secure Identity and Access Management (IAM) system using Role-Based Access Control (RBAC) with JWT authentication to manage granular permissions across varying operational roles (admin, finance, logistics). It also includes dynamic administrative dashboards utilizing advanced state management for efficient data visualization and centralized service tracking.",
    features: [
      "Modular component design and responsive UI/UX",
      "Robust RESTful APIs for complex workflows",
      "Secure IAM with token-based authentication (JWT)",
      "Role-Based Access Control (RBAC) for data isolation",
      "Dynamic administrative dashboards with advanced state management",
    ],
    tags: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT"],
    icon: Server,
    category: "Full Stack",
    color: "from-secondary to-neon-pink",
    featured: true,
    github: "https://github.com/praveen-kumar-007",
    live: "https://multimarg.vercel.app/",
  },
  {
    title: "Methane Detection in Coal Mining",
    slug: "methane-detection",
    subtitle: "Gas Detection & Early Warning System",
    description: "A time-series and CNN-LSTM based system to detect methane presence in coal mine environments and provide early warnings.",
    longDescription: "Developed during an internship at IIT (ISM) Dhanbad under the supervision of Dr. Rajendra Pamula. The project explores sensor data preprocessing and multiple sequence models (LSTM, GRU, Bi-LSTM, CNN-LSTM) to detect methane anomalies and trigger warnings for mine safety.",
    features: [
      "Sensor data preprocessing and noise filtering",
      "Time-series modeling with LSTM/GRU/Bi-LSTM",
      "CNN-LSTM for combined spatial-temporal feature extraction",
      "Model comparison and evaluation (precision/recall, F1, ROC)",
      "Prototype early-warning pipeline and deployment considerations",
    ],
    tags: ["LSTM", "GRU", "Bi-LSTM", "CNN-LSTM", "Python", "TensorFlow", "Keras", "Pandas"],
    icon: Brain,
    category: "ML/AI",
    color: "from-primary to-neon-blue",
    featured: true,
    github: "https://github.com/praveen-kumar-007",
  },
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
    title: "SP Kabaddi - Club Website",
    slug: "sp-kabaddi",
    subtitle: "Official site for SP Kabaddi Group (spkabaddi.me)",
    description: "A fully functional sports club website for SP Kabaddi Group, featuring news, admin dashboard, player registration, and an attractive UI. SP Kabaddi is registered with DDKA.",
    longDescription: "Built as a production site for SP Kabaddi Group Dhanbad and deployed at spkabaddi.me. The site includes news management, player registration, an admin dashboard for content and user management, responsive UI, and an in-built player ID card generation feature. SP Kabaddi is registered with DDKA.",
    features: [
      "News management and media gallery",
      "Admin dashboard with role-based access",
      "Player registration and profile management",
      "Responsive, polished UI built with React + JSS",
      "In-built player ID card generation",
      "Cloudinary integration for image handling",
    ],
    tags: ["React", "JSS", "Vite", "Node.js", "MongoDB", "Cloudinary"],
    icon: Server,
    category: "Web",
    color: "from-secondary to-neon-pink",
    featured: true,
    github: "https://github.com/praveen-kumar-007",
    live: "https://spkabaddi.me",
  },
  {
    title: "Dhanbad District Kabaddi Association",
    slug: "dhanbad-district-kabaddi-association",
    subtitle: "DDKA Official Website (dhanbaddistrictkabaddi.tech)",
    description: "Official governing body website for Kabaddi in Dhanbad with admin & super-admin panels, player and institute registration, gallery, news, and ID card generation.",
    longDescription: "Developed while serving as Media In-Charge for the Dhanbad District Kabaddi Association (DDKA). The platform (dhanbaddistrictkabaddi.tech) is the official governing body site for kabaddi in Dhanbad — super-admins can manage admins, and admins can manage galleries, news, player registrations, institute registrations, and technical referee registrations. The system includes an in-built player ID card generation feature.",
    features: [
      "Super-admin and admin role management",
      "Gallery and news publishing",
      "Player and institute registration workflows",
      "Admin panel with full website management capabilities",
      "Production deployment with CDN-backed media",
    ],
    tags: ["React", "JSS", "Vite", "Node.js", "MongoDB", "Cloudinary"],
    icon: Code2,
    category: "Web",
    color: "from-neon-blue to-primary",
    featured: true,
    github: "https://github.com/praveen-kumar-007",
    live: "https://dhanbadkabaddiassociation.tech/",
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
        <div className="container mx-auto px-4 sm:px-6">
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
                <div
                  id={project.slug ?? slugify(project.title)}
                  className="relative group"
                >
                  {/* Glow effect (also for focus/touch) */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.color} rounded-2xl opacity-0 group-hover:opacity-50 group-focus-within:opacity-50 transition-opacity duration-500 blur-sm`} />
                  
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
                        <div className="flex items-center gap-3">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline inline-flex items-center gap-2"
                          >
                            <Github className="w-4 h-4" />
                            View on GitHub
                          </a>
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-primary inline-flex items-center gap-2"
                            >
                              <ExternalLink className="w-4 h-4" />
                              Live Site
                            </a>
                          )}
                        </div>
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
        <div className="container mx-auto px-4 sm:px-6">
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
              <GlowCard key={project.title} delay={index * 0.15} id={project.slug}>
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

                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-foreground hover:text-primary/80 transition-colors inline-flex items-center gap-1"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Site
                    </a>
                  )}
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
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

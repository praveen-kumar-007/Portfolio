import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Brain, Server, Lock, Zap } from "lucide-react";

const projects = [
  {
    title: "Brain Tumor Detection Model",
    description:
      "Deep learning model using CNNs to detect brain tumors from MRI images. Includes preprocessing, training, and evaluation using Python and TensorFlow.",
    tags: ["Python", "TensorFlow", "CNN", "OpenCV"],
    icon: Brain,
    featured: true,
    category: "ML/AI",
  },
  {
    title: "Multimarg Logistics Platform",
    description:
      "Scalable B2B logistics application with a secure Role-Based Access Control (RBAC) architecture using JWT authentication and RESTful APIs.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "REST API", "JWT"],
    icon: Server,
    featured: true,
    category: "Full Stack",
  },
  {
    title: "Energy Consumption Prediction",
    description:
      "ML model to predict energy usage in residential smart buildings. Focused on model design, data handling, and sustainable tech solutions.",
    tags: ["Python", "Scikit-learn", "Pandas", "ML"],
    icon: Zap,
    featured: false,
    category: "ML/AI",
  },
  {
    title: "Password Manager",
    description:
      "Secure password manager using Python and Tkinter. Features password generation, secure storage using JSON, and intuitive GUI.",
    tags: ["Python", "Tkinter", "JSON", "Security"],
    icon: Lock,
    featured: false,
    category: "Desktop App",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative neural-grid">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-widest text-sm uppercase">
            My Work
          </span>
          <h2 className="section-title text-gradient mt-2">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`card-glass group relative overflow-hidden ${
                project.featured ? "md:row-span-1" : ""
              }`}
            >
              {/* Background gradient on hover (also activate on focus/touch) */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="px-3 py-1 text-xs rounded-full bg-secondary/20 text-secondary">
                    {project.category}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href="https://github.com/praveen-kumar-007"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/praveen-kumar-007"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <Github className="w-4 h-4" />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

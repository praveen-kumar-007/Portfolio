import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden neural-grid"
    >
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow delay-1000" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="relative mb-8"
          >
            <div className="w-40 h-40 rounded-full border-glow p-1 glow">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
                <span className="text-5xl font-display font-bold text-gradient">
                  PK
                </span>
              </div>
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 bg-card rounded-full border border-primary/30">
              <span className="text-xs font-medium text-primary">
                Available for hire
              </span>
            </div>
          </motion.div>

          {/* Name & Title */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-4 tracking-wider">
              <span className="text-gradient">PRAVEEN</span>{" "}
              <span className="text-foreground">KUMAR</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">
              Machine Learning & Full Stack Developer
            </p>
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              📍 Dhanbad, India
            </p>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl text-muted-foreground mt-6 leading-relaxed"
          >
            A passionate and self-driven learner with a deep interest in AI/ML
            and development. Building intelligent solutions through hands-on
            projects and real-world problem solving.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 mt-8 justify-center"
          >
            <a href="#contact" className="btn-primary flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Get in Touch
            </a>
            <a
              href="#projects"
              className="btn-outline flex items-center gap-2"
            >
              View Projects
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex gap-4 mt-8"
          >
            <a
              href="https://github.com/praveen-kumar-007"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted/50 hover:bg-primary/20 hover:text-primary transition-all duration-300 glow"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/praveen-kumar-307697221"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted/50 hover:bg-primary/20 hover:text-primary transition-all duration-300 glow"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:praveen.pr105@gmail.com"
              className="p-3 rounded-full bg-muted/50 hover:bg-primary/20 hover:text-primary transition-all duration-300 glow"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 group">
          <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
            Scroll to explore
          </span>
          <ChevronDown className="w-5 h-5 text-primary animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;

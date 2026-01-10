import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { value: 4, suffix: "+", label: "Internships" },
  { value: 10, suffix: "+", label: "Certifications" },
  { value: 8.45, suffix: "", label: "CGPA" },
  { value: 4, suffix: "+", label: "Projects" },
];

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden neural-grid">
      {/* Enhanced Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] animate-pulse-glow delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-neon-purple/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Open to Opportunities
            </span>
          </motion.div>

          {/* Avatar */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="relative mb-8"
          >
            <div className="w-44 h-44 rounded-full p-1 glow-lg relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-neon-purple animate-spin-slow opacity-50" style={{ animationDuration: "8s" }} />
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center backdrop-blur-sm border border-primary/20">
                <span className="text-6xl font-display font-bold text-gradient">
                  PK
                </span>
              </div>
            </div>
          </motion.div>

          {/* Name & Title */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 tracking-wider">
              <span className="text-gradient">PRAVEEN</span>{" "}
              <span className="text-foreground">KUMAR</span>
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
              <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary font-medium">
                Machine Learning
              </span>
              <span className="text-muted-foreground">•</span>
              <span className="px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 text-secondary font-medium">
                Full Stack Development
              </span>
            </div>
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              📍 Dhanbad, India • B.Tech CSE @ SVU
            </p>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl text-muted-foreground mt-6 leading-relaxed text-lg"
          >
            Transforming ideas into intelligent solutions. Research experience at IIT BHU, 
            passionate about building AI-powered applications that make a difference.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10"
          >
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-gradient">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 mt-10 justify-center"
          >
            <Link to="/contact" className="btn-primary flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Get in Touch
            </Link>
            <Link
              to="/projects"
              className="btn-outline flex items-center gap-2"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
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
              className="p-3 rounded-full bg-muted/50 hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/praveen-kumar-307697221"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted/50 hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:praveen.pr105@gmail.com"
              className="p-3 rounded-full bg-muted/50 hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:scale-110"
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
        <Link to="/about" className="flex flex-col items-center gap-2 group">
          <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
            Explore More
          </span>
          <ChevronDown className="w-5 h-5 text-primary animate-bounce" />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;

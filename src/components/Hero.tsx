import { motion } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail, ChevronDown, Sparkles, ArrowRight, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
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
    <section className="min-h-[85vh] sm:min-h-screen flex items-center justify-center relative overflow-hidden neural-grid">
      {/* Subtle professional gradient orbs (hidden on small screens) */}
      <div className="hidden sm:block absolute top-1/4 left-1/4 sm:w-[420px] sm:h-[420px] md:w-[600px] md:h-[600px] bg-gradient-to-tr from-sky-800/18 to-indigo-900/8 rounded-full blur-[140px]" />
      <div className="hidden sm:block absolute bottom-1/4 right-1/4 sm:w-[360px] sm:h-[360px] md:w-[500px] md:h-[500px] bg-gradient-to-bl from-slate-800/10 to-sky-900/8 rounded-full blur-[110px]" />
      <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] bg-gradient-to-br from-sky-700/8 to-indigo-900/6 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
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
            <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full p-1 ring ring-slate-800/20 relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-700/20 via-indigo-700/10 to-slate-800/8 opacity-30" />
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-slate-800/8 to-slate-900/6 flex items-center justify-center backdrop-blur-sm border border-slate-700/20">
                <img src="https://res.cloudinary.com/dmmll82la/image/upload/v1765632491/sp-club/passports/passport-1765632490936-299511838.jpg" alt="Praveen Kumar" className="rounded-full w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>

          {/* Name & Title */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-display font-bold mb-6 tracking-wider md:whitespace-nowrap">
              <span className="text-gradient">PRAVEEN</span>{" "}
              <span className="text-foreground">KUMAR</span>
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-2 mb-4 text-sm">
              <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary font-medium">
                IIT (ISM) Dhanbad
              </span>
              <span className="px-3 py-1 rounded-full bg-secondary/10 border border-secondary/30 text-secondary font-medium">
                IIT BHU
              </span>
              <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary font-medium">
                Media In-Charge — DDKA
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
            Transforming ideas into intelligent solutions — research at IIT (ISM) Dhanbad and IIT BHU. Media In-Charge for DDKA and passionate about building AI-powered applications.
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

          {/* CTA + Scrollable Project Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row sm:items-center gap-4 mt-10 justify-center"
          >
            <div className="flex flex-col sm:flex-row gap-3 items-center">
              <Link to="/contact" className="btn-primary flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Get in Touch
              </Link>
              <Link to="/projects" className="btn-outline flex items-center gap-2">
                View Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <ScrollableProjects />
            </div>
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

// ScrollableProjects component placed after export to keep file organized
function ScrollableProjects() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const scrollBy = (offset: number) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
  };

  const buttons = [
    { label: "SP Kabaddi (Live)", href: "/projects#sp-kabaddi", liveExternal: "https://spkabaddi.me" },
    { label: "DDKA (Live)", href: "/projects#dhanbad-district-kabaddi-association", liveExternal: "https://dhanbadkabaddiassociation.tech/" },
    { label: "Methane Detection", href: "/projects#methane-detection" },
  ];

  return (
    <div className="relative w-full max-w-3xl">
      <button
        onClick={() => scrollBy(-220)}
        aria-label="Scroll left"
        className="hidden sm:inline-flex items-center justify-center p-2 bg-muted/20 rounded-full hover:bg-muted/30 transition"
      >
        <ChevronLeft className="w-5 h-5 text-foreground" />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto no-scrollbar px-2 py-1 mx-2"
        style={{ scrollBehavior: "smooth" }}
      >
        {buttons.map((b) => (
          <Link
            key={b.label}
            to={b.href}
            className="btn-outline whitespace-nowrap px-4 py-2 inline-flex items-center gap-2"
          >
            <ExternalLink className="w-4 h-4" />
            {b.label}
          </Link>
        ))}
      </div>

      <button
        onClick={() => scrollBy(220)}
        aria-label="Scroll right"
        className="hidden sm:inline-flex items-center justify-center p-2 bg-muted/20 rounded-full hover:bg-muted/30 transition"
      >
        <ChevronRight className="w-5 h-5 text-foreground" />
      </button>
    </div>
  );
}

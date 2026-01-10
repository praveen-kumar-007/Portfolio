import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  { name: "Full Stack Development", issuer: "IBM", icon: "💻" },
  { name: "Introduction to Machine Learning", issuer: "NPTEL", icon: "🤖" },
  { name: "ML with Python", issuer: "FreeCodeCamp", icon: "🐍" },
  { name: "Artificial Intelligence Primer", issuer: "Infosys", icon: "🧠" },
  { name: "Getting Started with AI", issuer: "IBM SkillsBuild", icon: "🚀" },
  { name: "Google Cloud Computing", issuer: "NPTEL", icon: "☁️" },
  { name: "Implementation of Algorithms", issuer: "Ardent", icon: "📊" },
  { name: "Python Certification", issuer: "HackerRank", icon: "🏆" },
  { name: "SQL Certification", issuer: "OneRoadMap", icon: "📁" },
  { name: "Foundation C#", issuer: "Microsoft", icon: "🔷" },
];

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-widest text-sm uppercase">
            Achievements
          </span>
          <h2 className="section-title text-gradient mt-2">
            Certifications
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="card-glass text-center group cursor-pointer"
            >
              <div className="text-3xl mb-3">{cert.icon}</div>
              <h4 className="font-medium text-foreground text-sm mb-1 group-hover:text-primary transition-colors line-clamp-2">
                {cert.name}
              </h4>
              <p className="text-xs text-muted-foreground">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

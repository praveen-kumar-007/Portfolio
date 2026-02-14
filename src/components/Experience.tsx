import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "AI/ML Research Intern",
    company: "Banaras Hindu University (IIT BHU)",
    location: "Varanasi",
    period: "2025",
    description:
      "Developed a machine learning model for predicting energy consumption in smart buildings. Gained practical experience in data handling and model development under the mentorship of Dr. Vinayak Srivastava.",
    highlight: true,
  },
  {
    title: "AI and Data Analytics Intern",
    company: "AICTE, Shell & Edunet Foundation",
    location: "Virtual",
    period: "2025",
    description:
      "Completed a 4-week virtual internship focused on AI, Data Analytics, and Green Skills. Applied data-driven techniques to sustainability-related challenges.",
    highlight: false,
  },
  {
    title: "Python Programming Intern",
    company: "Vault of Codes",
    location: "Remote",
    period: "2025",
    description:
      "Built Python-based applications and automation scripts. Worked on data structures, file handling, and modular coding in a collaborative environment.",
    highlight: false,
  },
  {
    title: "Machine Learning Intern",
    company: "Encryptix",
    location: "Remote",
    period: "2024",
    description:
      "Gained hands-on experience in applying machine learning concepts from development to deployment. Contributed effectively to team projects during the four-week program.",
    highlight: false,
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-widest text-sm uppercase">
            Career Journey
          </span>
          <h2 className="section-title text-gradient mt-2">
            Experience
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px w-0.5 h-full bg-gradient-to-b from-primary via-secondary to-primary/20" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? "md:pr-8 md:text-right md:ml-0 md:mr-auto md:w-1/2" : "md:pl-8 md:ml-auto md:w-1/2"
                } pl-8 md:pl-0`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute w-4 h-4 rounded-full bg-primary glow top-6 ${
                    index % 2 === 0 ? "left-[-8px] md:left-auto md:right-[-8px]" : "left-[-8px] md:left-[-8px]"
                  }`}
                />

                <div
                  className={`card-glass ${
                    exp.highlight ? "border-primary/50" : ""
                  }`}
                >
                  {exp.highlight && (
                    <span className="inline-block px-2 py-1 text-xs rounded-full bg-primary/20 text-primary mb-3">
                      Featured
                    </span>
                  )}
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

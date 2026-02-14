import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 75 },
      { name: "SQL", level: 80 },
      { name: "C#", level: 65 },
    ],
  },
  {
    title: "Machine Learning & AI",
    skills: [
      { name: "TensorFlow/Keras", level: 85 },
      { name: "Scikit-learn", level: 80 },
      { name: "OpenCV", level: 75 },
      { name: "Deep Learning/CNN", level: 80 },
      { name: "Data Analysis", level: 85 },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "React.js", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "HTML/CSS", level: 90 },
      { name: "REST APIs", level: 80 },
      { name: "Git/GitHub", level: 85 },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Google Cloud", level: 70 },
      { name: "Pandas/NumPy", level: 85 },
      { name: "Jupyter", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 60 },
    ],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative neural-grid">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-widest text-sm uppercase">
            Technical Expertise
          </span>
          <h2 className="section-title text-gradient mt-2">
            Skills & Technologies
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
              className="card-glass"
            >
              <h3 className="font-display text-lg font-semibold text-foreground mb-6">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-muted-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-primary font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.15 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

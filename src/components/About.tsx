import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Brain, Database, Cloud } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "Machine Learning",
    description: "CNN, Deep Learning, TensorFlow, Keras",
  },
  {
    icon: Code2,
    title: "Full Stack Dev",
    description: "React, Node.js, Python, JavaScript",
  },
  {
    icon: Database,
    title: "Data Science",
    description: "Pandas, NumPy, Data Visualization",
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "Google Cloud, Deployment, APIs",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-widest text-sm uppercase">
            About Me
          </span>
          <h2 className="section-title text-gradient mt-2">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card-glass">
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                B.Tech in Computer Science
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Currently pursuing my degree at Swami Vivekananda University,
                Kolkata with a CGPA of 8.45. I'm passionate about bridging the
                gap between theoretical knowledge and practical applications in
                AI/ML.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                With multiple internships under my belt at prestigious
                organizations like IIT BHU and AICTE, I've gained hands-on
                experience in developing ML models for real-world applications
                including energy prediction and medical diagnostics.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {["Python", "TensorFlow", "React", "Node.js", "SQL", "Git"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>

          {/* Right: Highlight Cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="card-glass group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-display font-semibold text-foreground mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import { Code2, Brain, Database, Cloud, GraduationCap, Target, Lightbulb, Users, BookOpen, Heart, Mail, Phone, MapPin, Linkedin, Github, Briefcase, Award, Building2 } from "lucide-react";

export const highlights = [
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Deep expertise in CNN, neural networks, TensorFlow, and Keras for building intelligent systems",
    color: "from-primary to-neon-blue",
  },
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "End-to-end application development with React, Node.js, and modern web technologies",
    color: "from-secondary to-neon-pink",
  },
  {
    icon: Database,
    title: "Data Science",
    description: "Data analysis, visualization, and insights extraction using Pandas, NumPy, and SQL",
    color: "from-neon-purple to-secondary",
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "Google Cloud certified with experience in deployment, APIs, and scalable solutions",
    color: "from-neon-blue to-primary",
  },
];

export const values = [
  {
    icon: Target,
    title: "Problem Solver",
    description: "I thrive on tackling complex challenges and finding elegant solutions through analytical thinking.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learner",
    description: "Always exploring new technologies, frameworks, and methodologies to stay at the cutting edge.",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Excellent collaboration skills developed through multiple internships and team projects.",
  },
];

export const education = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering",
    institution: "Swami Vivekananda University",
    location: "Kolkata, West Bengal",
    period: "2022 - 2026",
    grade: "8.45 CGPA",
    current: true,
  },
  {
    degree: "Intermediate (12th)",
    field: "Science",
    institution: "JLSM DAV College Bhaga",
    location: "Dhanbad",
    period: "2022",
    grade: "79%",
    current: false,
  },
  {
    degree: "Matriculation (10th)",
    field: "",
    institution: "Rajkamal Saraswati Vidya Mandir",
    location: "Dhanbad",
    period: "2020",
    grade: "78%",
    current: false,
  },
];

export const hobbies = [
  { icon: BookOpen, name: "Writing Hindi Poems", description: "Creative expression through traditional poetry" },
  { icon: Heart, name: "Playing Kabaddi", description: "Staying active with this traditional Indian sport" },
];

export const quickContactInfo = [
  { icon: Mail, label: "Email", value: "praveen.pr105@gmail.com", href: "mailto:praveen.pr105@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 9504904499", href: "tel:+919504904499" },
  { icon: MapPin, label: "Location", value: "Dhanbad, India", href: null },
];

export const whatImLookingFor = [
  "Full-time ML/AI Engineer positions",
  "Full Stack Development opportunities",
  "Research collaborations in AI/ML",
  "Freelance projects",
  "Open source collaborations",
];

export const availability = {
  status: "Open to opportunities",
  responseTime: "Usually within 24-48 hours",
  timezone: "IST (UTC+5:30)",
};

export const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/praveen-kumar-307697221",
    icon: Linkedin,
    bgColor: "bg-[#0077B5]/10",
    borderColor: "border-[#0077B5]/30",
    textColor: "text-[#0077B5]",
    hoverBgColor: "hover:bg-[#0077B5]/20",
  },
  {
    name: "GitHub",
    href: "https://github.com/praveen-kumar-007",
    icon: Github,
    bgColor: "bg-foreground/5",
    borderColor: "border-foreground/20",
    textColor: "text-foreground",
    hoverBgColor: "hover:bg-foreground/10",
  },
];

export const experiences = [
  {
    title: "Research Intern",
    company: "IIT (ISM) Dhanbad",
    location: "Dhanbad, India",
    period: "2025",
    duration: "Ongoing",
    type: "Research",
    description: "Working on methane gas detection in coal mining environments using sequence models and hybrid CNN-LSTM architectures to provide early warning signals.",
    achievements: [
      "Designed and compared LSTM, GRU, Bidirectional LSTM, and CNN-LSTM models for methane detection",
      "Implemented sensor preprocessing pipelines and handled noisy time-series data",
      "Built prototype early-warning logic and evaluation dashboards",
      "Project supervised by Dr. Rajendra Pamula",
    ],
    skills: ["LSTM", "GRU", "Bi-LSTM", "CNN-LSTM", "Python", "TensorFlow", "Keras", "Time-series"],
    featured: true,
  },
  {
    title: "AI/ML Research Intern",
    company: "Banaras Hindu University (IIT BHU)",
    location: "Varanasi, India",
    period: "2025",
    duration: "6 Weeks",
    type: "Research",
    description: "Developed a machine learning model for predicting energy consumption in smart buildings, gaining practical experience in data handling and model development.",
    achievements: [
      "Built ML model for energy consumption prediction in residential smart buildings",
      "Worked under the mentorship of Dr. Vinayak Srivastava",
      "Focused on sustainable tech solutions and performance analysis",
      "Applied advanced data handling and preprocessing techniques",
    ],
    skills: ["Python", "Scikit-learn", "Pandas", "Research"],
    featured: true,
  },
  {
    title: "AI and Data Analytics Intern",
    company: "AICTE, Shell & Edunet Foundation",
    location: "Virtual",
    period: "2025",
    duration: "4 Weeks",
    type: "Virtual",
    description: "Completed the Skills4Future Program focused on AI, Data Analytics, and Green Skills.",
    achievements: [
      "Gained hands-on experience with data-driven techniques",
      "Applied analytics to sustainability-related challenges",
      "Completed comprehensive AI and data analytics training",
      "Developed solutions for green technology applications",
    ],
    skills: ["Data Analytics", "AI", "Python", "Green Tech"],
    featured: false,
  },
  {
    title: "Python Programming Intern",
    company: "Vault of Codes",
    location: "Remote",
    period: "2025",
    duration: "4 Weeks",
    type: "Remote",
    description: "Built Python-based applications and automation scripts, enhancing coding proficiency and logical thinking.",
    achievements: [
      "Developed multiple Python automation scripts",
      "Worked on data structures and file handling projects",
      "Implemented modular coding practices",
      "Collaborated in a team-oriented environment",
    ],
    skills: ["Python", "Automation", "Data Structures", "Problem Solving"],
    featured: false,
  },
  {
    title: "Machine Learning Intern",
    company: "Encryptix",
    location: "Remote",
    period: "2024",
    duration: "4 Weeks",
    type: "Remote",
    description: "Gained hands-on experience in applying machine learning concepts from development to deployment.",
    achievements: [
      "Applied ML concepts from development to deployment",
      "Contributed to team projects effectively",
      "Demonstrated strong analytical and problem-solving skills",
      "Completed comprehensive ML training program",
    ],
    skills: ["Machine Learning", "Python", "Data Analysis", "Teamwork"],
    featured: false,
  },
  {
    title: "Media In-Charge",
    company: "Dhanbad District Kabaddi Association (DDKA)",
    location: "Dhanbad, India",
    period: "2024 - Present",
    duration: "Ongoing",
    type: "Volunteer / Leadership",
    description: "Serving as Media In-Charge for DDKA, responsible for digital presence, content management, and website media coordination.",
    achievements: [
      "Led media and communications for district-level kabaddi events",
      "Co-developed and maintained the official DDKA website with admin/super-admin features",
      "Implemented player ID card generation workflow and media galleries",
    ],
    skills: ["React", "Node.js", "Content Management", "Media Production"],
    featured: true,
  },
];

export const experienceStats = [
  { value: "4+", label: "Internships" },
  { value: "IIT BHU", label: "Research Experience" },
  { value: "6+", label: "Months Experience" },
  { value: "ML/AI", label: "Primary Focus" },
];

export const whatIGained = [
  {
    icon: Briefcase,
    title: "Industry Experience",
    description: "Real-world exposure to AI/ML applications in various domains including sustainability and healthcare",
  },
  {
    icon: GraduationCap,
    title: "Research Skills",
    description: "Hands-on research experience at IIT BHU with mentorship from leading academics",
  },
  {
    icon: Award,
    title: "Professional Growth",
    description: "Developed strong analytical, problem-solving, and teamwork skills across multiple projects",
  },
];

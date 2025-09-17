import { motion } from "framer-motion";
import { 
  Code, Database, Cloud, Wrench, 
  Brain, Monitor, Server, Smartphone 
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["Python", "Java", "C/C++", "JavaScript", "SQL"],
      color: "from-blue-500/20 to-indigo-500/20"
    },
    {
      title: "Frontend",
      icon: Monitor,
      skills: ["React.js", "HTML5", "CSS3", "TailwindCSS", "Responsive Design"],
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Node.js", "Express.js", "FastAPI", "Flask", "RESTful APIs"],
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MongoDB", "MySQL", "SQLite", "Firebase", "Database Design"],
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS", "Docker", "Linux", "GitHub", "CI/CD"],
      color: "from-cyan-500/20 to-blue-500/20"
    },
    {
      title: "Data & AI",
      icon: Brain,
      skills: ["Pandas", "NumPy", "Power BI", "Tableau", "Machine Learning"],
      color: "from-yellow-500/20 to-orange-500/20"
    },
    {
      title: "Mobile",
      icon: Smartphone,
      skills: ["Flutter", "Cross-platform", "Mobile UI/UX", "App Development"],
      color: "from-indigo-500/20 to-purple-500/20"
    },
    {
      title: "Tools",
      icon: Wrench,
      skills: ["Git", "VS Code", "Postman", "Figma", "Project Management"],
      color: "from-gray-500/20 to-slate-500/20"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build 
            scalable, efficient, and innovative solutions.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="card-gradient card-hover p-6"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-8 h-8 text-primary" />
              </div>

              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {category.title}
              </h3>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.4, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {skill}
                      </span>
                    </div>
                    <div className="w-full bg-muted/50 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${Math.random() * 30 + 70}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                        className="h-full bg-gradient-to-r from-primary to-primary-glow rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-gradient">Certifications</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              "AWS Solutions Architect Associate",
              "Web Development Bootcamp (Udemy)",
              "Oracle Cloud Infrastructure 2023",
              "Fortinet Cybersecurity Foundation"
            ].map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card-gradient p-6 text-center card-hover"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-foreground">{cert}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
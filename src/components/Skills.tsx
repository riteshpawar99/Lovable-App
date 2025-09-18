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
            <span className="text-gradient">Technical Skills</span>
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
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gradient">Certifications</span>
            </h3>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              Professional certifications that validate my expertise in modern technologies
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
            {[
              {
                title: "AWS Solutions Architect Associate",
                issuer: "Amazon Web Services",
                year: "2024",
                description: "Cloud architecture and infrastructure design",
                color: "from-orange-500/20 to-red-500/20",
                iconColor: "text-orange-500"
              },
              {
                title: "Web Development Bootcamp",
                issuer: "Udemy",
                year: "2023",
                description: "Full-stack web development and modern frameworks",
                color: "from-purple-500/20 to-pink-500/20",
                iconColor: "text-purple-500"
              },
              {
                title: "Oracle Cloud Infrastructure",
                issuer: "Oracle",
                year: "2023",
                description: "Cloud computing and database management",
                color: "from-cyan-500/20 to-blue-500/20",
                iconColor: "text-cyan-500"
              }
            ].map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`card-gradient card-hover p-8 relative overflow-hidden bg-gradient-to-br ${cert.color}`}
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-background/20 to-background/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/10">
                    <svg className={`w-8 h-8 ${cert.iconColor}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>

                  <h4 className="text-xl font-bold text-foreground mb-2 leading-tight">
                    {cert.title}
                  </h4>
                  
                  <p className="text-primary font-semibold mb-1">
                    {cert.issuer}
                  </p>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    {cert.year}
                  </p>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Background decoration */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl"></div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <p>Continuously learning and staying updated with industry standards</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
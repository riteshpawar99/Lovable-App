import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code, Trophy } from "lucide-react";

const Timeline = () => {
  const timelineItems = [
    {
      id: 1,
      type: "work",
      icon: Briefcase,
      title: "Internship Trainee",
      company: "QSpiders Software Testing",
      period: "Jan 2025 - July 2025",
      description: "Developing RESTful APIs in Node.js and Express within microservices setup. Optimized database queries and indexing strategies in MySQL, reducing API response time by 40%. Contributing to Agile SCRUM team processes.",
      skills: ["Node.js", "Express.js", "MySQL", "Microservices", "Agile SCRUM"],
      isOngoing: true
    },
    {
      id: 2,
      type: "work",
      icon: Code,
      title: "Software Development Intern",
      company: "Prodigy Infotech",
      period: "July 2024 (1 month)",
      description: "Built a feedback classifier using OpenAI and scikit-learn, served via Flask and deployed on AWS EC2 for scalable deployment with S3 storage. Documented integration workflows and APIs.",
      skills: ["OpenAI", "Flask", "AWS EC2", "S3", "scikit-learn"],
      isOngoing: false
    },
    {
      id: 3,
      type: "education",
      icon: GraduationCap,
      title: "Bachelor of Technology",
      company: "Sandip University, Nashik",
      period: "2022 - 2025",
      description: "Computer Engineering with focus on web development, data structures, algorithms, and software engineering. Maintaining 8.10 CGPA while working on innovative projects.",
      skills: ["Data Structures", "Algorithms", "Software Engineering", "Database Systems"],
      isOngoing: true
    },
    {
      id: 4,
      type: "education",
      icon: Trophy,
      title: "Diploma in Computer Engineering", 
      company: "MET Bhujbal Knowledge City, Nashik",
      period: "2019 - 2022",
      description: "Completed with 83.37% marks. Built strong foundation in programming fundamentals, computer networks, and system design.",
      skills: ["Programming Fundamentals", "Computer Networks", "System Design"],
      isOngoing: false
    }
  ];

  const getIconColor = (type: string, isOngoing: boolean) => {
    if (isOngoing) return "text-primary glow-primary";
    return type === "work" ? "text-green-500" : type === "education" ? "text-blue-500" : "text-purple-500";
  };

  const getBgColor = (type: string, isOngoing: boolean) => {
    if (isOngoing) return "bg-primary/20 border-primary/40";
    return type === "work" ? "bg-green-500/20 border-green-500/40" : type === "education" ? "bg-blue-500/20 border-blue-500/40" : "bg-purple-500/20 border-purple-500/40";
  };

  return (
    <section id="timeline" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A timeline of my educational background, work experience, and professional growth 
            in the field of software development and technology.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

            {timelineItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex items-start gap-8 pb-12 last:pb-0"
              >
                {/* Timeline Icon */}
                <div className={`relative z-10 w-16 h-16 rounded-2xl border-2 flex items-center justify-center ${getBgColor(item.type, item.isOngoing)}`}>
                  <item.icon className={`w-8 h-8 ${getIconColor(item.type, item.isOngoing)}`} />
                  {item.isOngoing && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full animate-pulse">
                      <div className="absolute inset-1 bg-background rounded-full"></div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 card-gradient card-hover p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-primary font-medium">{item.company}</p>
                    </div>
                    <div className="flex items-center gap-2 mt-2 sm:mt-0">
                      <span className="text-sm text-muted-foreground px-3 py-1 bg-muted/50 rounded-full">
                        {item.period}
                      </span>
                      {item.isOngoing && (
                        <span className="text-xs text-primary font-medium px-2 py-1 bg-primary/10 rounded-full border border-primary/20">
                          Current
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Strengths */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Key <span className="text-gradient">Strengths</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              "Issue Resolving", "Team Work", "Effective Communication", 
              "Critical Thinking", "Precise Observation", "Leadership",
              "Analytical Thinking", "Time Management", "Confidence"
            ].map((strength, index) => (
              <motion.div
                key={strength}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="card-gradient p-4 text-center card-hover"
              >
                <span className="text-sm font-medium text-foreground">{strength}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
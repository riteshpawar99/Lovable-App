import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Shield, Bot, Database } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Certificate-less Public Integrity Checking",
      description: "Engineered a certificate-less public integrity verification protocol for secure and scalable group data auditing in cloud environments with dynamic data operation support.",
      tags: ["Cloud Security", "Cryptography", "Python", "Identity-based Encryption"],
      icon: Shield,
      github: "#",
      demo: "#",
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      id: 2,
      title: "AI-Powered Rail-Madad Enhancement",
      description: "Integrated AI-driven complaint classification and prioritization into Rail-Madad platform, streamlining response workflows and reducing manual intervention.",
      tags: ["AI/ML", "React.js", "Node.js", "Analytics Dashboard"],
      icon: Bot,
      github: "#",
      demo: "#",
      color: "from-green-500/20 to-blue-500/20"
    },
    {
      id: 3,
      title: "Feedback Classification System",
      description: "Built a feedback classifier using OpenAI and scikit-learn, served via Flask and deployed on AWS EC2 with S3 storage for scalable deployment.",
      tags: ["OpenAI", "Flask", "AWS EC2", "S3", "Machine Learning"],
      icon: Database,
      github: "#",
      demo: "#",
      color: "from-orange-500/20 to-red-500/20"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development,
            cloud computing, and AI integration.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="card-gradient card-hover p-6 h-full flex flex-col group">
                <div className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className="w-8 h-8 text-primary" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t border-border/50">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1 btn-ghost"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    asChild
                    className="flex-1 btn-hero"
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            asChild
            className="btn-ghost"
          >
            <a href="https://github.com/riteshpawar99" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
import { motion } from "framer-motion";
import { GraduationCap, Award, Target, Code2 } from "lucide-react";
const About = () => {
  const stats = [{
    icon: GraduationCap,
    label: "CGPA",
    value: "8.10",
    desc: "B.Tech Computer Engineering"
  }, {
    icon: Award,
    label: "Certifications",
    value: "4+",
    desc: "AWS, Oracle, Fortinet"
  }, {
    icon: Target,
    label: "Projects",
    value: "10+",
    desc: "Full Stack Applications"
  }, {
    icon: Code2,
    label: "Experience",
    value: "2+",
    desc: "Years in Development"
  }];
  return <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a proficient Computer Engineering graduate with expertise in web applications, 
            backend development and data visualization tools and analysis. Adept at building 
            backend architectures with efficient APIs and analyzing data for valuable insights.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }}>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">Currently completed Bachelor of Technology in Computer Engineering at Sandip University, Nashik, I've maintained a strong academic record with 8.64 CGPA while gaining practical experience through internships and personal projects.</p>
                <p className="text-muted-foreground leading-relaxed">
                  Always committed to contributing innovative solutions with long-term value within teams. 
                  I specialize in building scalable web applications, optimizing database performance, 
                  and implementing AI-powered solutions.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">What I Do</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Develop RESTful APIs with Node.js and Express in microservices architecture</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Build responsive web applications using React.js and modern frameworks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Deploy scalable solutions on AWS with containerization using Docker</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Create data visualization tools and analytics dashboards</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat, index) => <motion.div key={stat.label} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.6 + index * 0.1
          }} className="card-gradient card-hover p-6 text-center">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.desc}</div>
              </motion.div>)}
          </motion.div>
        </div>
      </div>
    </section>;
};
export default About;
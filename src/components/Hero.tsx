import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-mesh">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/60 to-primary/10" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-32 right-20 w-32 h-32 bg-primary-glow/20 rounded-full blur-2xl animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6"
            >
              <span className="text-primary font-medium text-lg mb-2 block">Hello, I'm</span>
              <h1 className="text-5xl lg:text-7xl font-bold mb-4 leading-tight">
                <span className="text-gradient">Ritesh</span>{" "}
                <span className="text-foreground">Pawar</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground font-light mb-6">
                Full Stack Developer & Cloud Solutions Architect
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed"
            >
              Computer Engineering graduate with expertise in web applications, backend development, 
              and data visualization. Building innovative solutions with React.js, Node.js, and AWS.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Button 
                className="btn-hero"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline"
                className="btn-ghost"
                onClick={() => scrollToSection("contact")}
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex gap-4"
            >
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <a href="https://github.com/riteshpawar99" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <a href="https://linkedin.com/riteshpawar" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <a href="mailto:riteshpawar754@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Animated Code Block */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="card-gradient p-6 font-mono text-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-muted-foreground ml-2">ritesh-portfolio.js</span>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1.5 }}
              >
                <div className="text-primary">const</div>{" "}
                <div className="text-foreground">developer = {`{`}</div>
                <div className="ml-4 text-muted-foreground">name: <span className="text-green-400">'Ritesh Pawar'</span>,</div>
                <div className="ml-4 text-muted-foreground">role: <span className="text-green-400">'Full Stack Developer'</span>,</div>
                <div className="ml-4 text-muted-foreground">skills: <span className="text-yellow-400">[</span></div>
                <div className="ml-8 text-green-400">'React.js', 'Node.js',</div>
                <div className="ml-8 text-green-400">'AWS', 'Python', 'MongoDB'</div>
                <div className="ml-4 text-yellow-400">],</div>
                <div className="ml-4 text-muted-foreground">experience: <span className="text-blue-400">'2+ years'</span>,</div>
                <div className="ml-4 text-muted-foreground">passion: <span className="text-green-400">'Building innovative solutions'</span></div>
                <div className="text-foreground">{`}`};</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={() => scrollToSection("about")}
          className="animate-bounce hover:bg-transparent"
        >
          <ArrowDown className="h-5 w-5 text-primary" />
        </Button>
      </motion.div>
    </section>
  );
};

export default Hero;
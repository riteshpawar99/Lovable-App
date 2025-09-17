import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import Prism from "@/components/Prism";
import { ThemeToggle } from "@/components/ThemeToggle";
import RotatingText from "@/components/RotatingText";
const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-mesh">
      {/* Theme Toggle - Fixed Position */}
      <motion.div initial={{
      opacity: 0,
      y: -20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 0.5,
      duration: 0.6
    }} className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </motion.div>

      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{
      backgroundImage: `url(${heroImage})`
    }} />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/60 to-primary/10" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-32 right-20 w-32 h-32 bg-primary-glow/20 rounded-full blur-2xl animate-float" style={{
      animationDelay: "1s"
    }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          ease: "easeOut"
        }} className="text-left">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2,
            duration: 0.6
          }} className="mb-6">
              <span className="text-primary font-medium text-lg mb-2 block">Hello, I'm</span>
              <h1 className="text-5xl lg:text-7xl font-bold mb-4 leading-tight">
                <span className="text-gradient">Ritesh</span>{" "}
                <span className="text-foreground">Pawar</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground font-light mb-6">Software Developer & AI Generalist</h2>
            </motion.div>

            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.4,
            duration: 0.6
          }} className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">Proficient Computer Engineering graduate with expertise in web applications, backend development, and data visualization. Building innovative solutions with React.js, Node.js, and AWS.</motion.p>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.6,
            duration: 0.6
          }} className="flex flex-wrap gap-4 mb-8">
              <Button className="btn-hero" onClick={() => scrollToSection("projects")}>
                View My Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="btn-ghost" onClick={() => scrollToSection("contact")}>
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.8,
            duration: 0.6
          }} className="flex gap-4">
              <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10 hover:text-primary transition-colors">
                <a href="https://github.com/riteshpawar99" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10 hover:text-primary transition-colors">
                <a href="https://linkedin.com/riteshpawar" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10 hover:text-primary transition-colors">
                <a href="mailto:riteshpawar754@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* 3D Prism Animation */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }} className="hidden lg:block relative">
            <div className="relative w-full h-[500px] overflow-hidden rounded-lg">
              {/* Prism Animation Container */}
              <div className="absolute inset-0 pointer-events-none">
                <Prism animationType="rotate" timeScale={0.3} height={3.5} baseWidth={5.5} scale={2.8} hueShift={0.2} colorFrequency={0.8} noise={0.3} glow={1.2} bloom={1.5} transparent={true} suspendWhenOffscreen={true} />
              </div>
              
              {/* Overlay Code Block */}
              <div className="relative z-10 card-gradient p-6 font-mono text-sm backdrop-blur-sm border border-primary/10 bg-cyan-100 rounded-none">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-muted-foreground ml-2">ritesh-portfolio</span>
                </div>
                <motion.div initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} transition={{
                delay: 1,
                duration: 1.5
              }}>
                  <div className="text-primary">const</div>{" "}
                  <div className="text-foreground">developer = {`{`}</div>
                  <div className="ml-4 text-muted-foreground">name: <span className="text-green-400">'Ritesh Pawar'</span>,</div>
                  <div className="ml-4 text-muted-foreground">role: <span className="text-green-400">'</span>
                    <RotatingText texts={['Full Stack Developer', 'React Developer', 'Node.js Expert', 'Cloud Architect']} mainClassName="text-green-400 inline-block" staggerFrom="last" initial={{
                    y: "100%"
                  }} animate={{
                    y: 0
                  }} exit={{
                    y: "-120%"
                  }} staggerDuration={0.02} splitLevelClassName="overflow-hidden" transition={{
                    type: "spring",
                    damping: 30,
                    stiffness: 400
                  }} rotationInterval={2500} />
                    <span className="text-green-400">'</span>,</div>
                  <div className="ml-4 text-muted-foreground">skills: <span className="text-yellow-400">[</span></div>
                  <div className="ml-8">
                    <RotatingText texts={['React.js', 'Node.js', 'TypeScript', 'Python', 'AWS', 'MongoDB', 'Next.js', 'Express']} mainClassName="text-green-400 inline-block" staggerFrom="first" initial={{
                    y: "100%"
                  }} animate={{
                    y: 0
                  }} exit={{
                    y: "-120%"
                  }} staggerDuration={0.03} splitLevelClassName="overflow-hidden" transition={{
                    type: "spring",
                    damping: 25,
                    stiffness: 350
                  }} rotationInterval={2000} />, 
                    <RotatingText texts={['Docker', 'GraphQL', 'Redis', 'PostgreSQL', 'Tailwind', 'Framer Motion']} mainClassName="text-green-400 inline-block ml-1" staggerFrom="center" initial={{
                    y: "100%"
                  }} animate={{
                    y: 0
                  }} exit={{
                    y: "-120%"
                  }} staggerDuration={0.025} splitLevelClassName="overflow-hidden" transition={{
                    type: "spring",
                    damping: 28,
                    stiffness: 380
                  }} rotationInterval={2200} />
                  </div>
                  <div className="ml-4 text-yellow-400">],</div>
                  <div className="ml-4 text-muted-foreground">experience: <span className="text-blue-400">'2+ years'</span>,</div>
                  <div className="ml-4 text-muted-foreground">passion: <span className="text-green-400">'</span>
                    <RotatingText texts={['Building innovative solutions', 'Creating amazing experiences', 'Solving complex problems', 'Crafting beautiful interfaces']} mainClassName="text-green-400 inline-block" staggerFrom="random" initial={{
                    y: "100%"
                  }} animate={{
                    y: 0
                  }} exit={{
                    y: "-120%"
                  }} staggerDuration={0.015} splitLevelClassName="overflow-hidden" transition={{
                    type: "spring",
                    damping: 35,
                    stiffness: 450
                  }} rotationInterval={3000} />
                    <span className="text-green-400">'</span></div>
                  <div className="text-foreground">{`}`};</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          {/* Mobile 3D Animation */}
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.5
        }} className="lg:hidden relative w-full h-[300px] rounded-xl overflow-hidden mt-8">
            <Prism animationType="rotate" timeScale={0.2} height={2.5} baseWidth={4} scale={2.2} hueShift={0.15} colorFrequency={0.6} noise={0.2} glow={0.8} bloom={1.2} transparent={true} suspendWhenOffscreen={true} />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 1.2,
      duration: 0.6
    }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <Button variant="ghost" size="icon" onClick={() => scrollToSection("about")} className="animate-bounce hover:bg-transparent">
          <ArrowDown className="h-5 w-5 text-primary" />
        </Button>
      </motion.div>
    </section>;
};
export default Hero;
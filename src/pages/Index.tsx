import { motion } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { GradientBackground } from "@/components/GradientBackground";

const Index = () => {
  return (
    <GradientBackground 
      overlay={true} 
      overlayOpacity={0.7}
      animationDuration={12}
      className="relative"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen relative z-10 w-full"
      >
        <Header />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Timeline />
        <Contact />
        <Footer />
      </motion.div>
    </GradientBackground>
  );
};

export default Index;

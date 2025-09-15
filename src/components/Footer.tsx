import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold text-gradient mb-2">
              Ritesh Pawar
            </h3>
            <p className="text-muted-foreground text-sm">
              Full Stack Developer & Cloud Solutions Architect
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center gap-4"
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

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <p className="text-muted-foreground text-sm mb-2">
              © {currentYear} Ritesh Pawar. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs flex items-center justify-center md:justify-end gap-1">
              Built with <Heart className="h-3 w-3 text-red-500" fill="currentColor" /> using React & TailwindCSS
            </p>
          </motion.div>
        </div>

        <div className="flex justify-center mt-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToTop}
            className="hover:bg-primary/10 hover:text-primary transition-colors"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
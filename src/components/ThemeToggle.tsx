import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
export function ThemeToggle() {
  const {
    setTheme,
    theme
  } = useTheme();
  return <Button variant="ghost" size="lg" onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="relative h-12 w-12 rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm hover:bg-card/90 hover:border-primary/20 transition-all duration-300 text-sm">
      <motion.div initial={false} animate={{
      scale: theme === "light" ? 1 : 0,
      opacity: theme === "light" ? 1 : 0,
      rotate: theme === "light" ? 0 : 180
    }} transition={{
      duration: 0.2
    }} className="absolute">
        <Sun className="h-5 w-5 text-primary" />
      </motion.div>
      <motion.div initial={false} animate={{
      scale: theme === "dark" ? 1 : 0,
      opacity: theme === "dark" ? 1 : 0,
      rotate: theme === "dark" ? 0 : -180
    }} transition={{
      duration: 0.2
    }} className="absolute">
        <Moon className="h-5 w-5 text-primary" />
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </Button>;
}
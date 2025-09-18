import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navItems = [{
    name: "About",
    href: "#about"
  }, {
    name: "Projects",
    href: "#projects"
  }, {
    name: "Skills",
    href: "#skills"
  }, {
    name: "Experience",
    href: "#timeline"
  }, {
    name: "Contact",
    href: "#contact"
  }];
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
      setIsMenuOpen(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setIsMenuOpen(false);
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "glass-water border-b border-white/10" : "bg-transparent"}`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div onClick={scrollToTop} className="text-xl font-bold cursor-pointer hover:text-primary transition-colors">RP</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <button key={item.name} onClick={() => scrollToSection(item.href)} className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium">
                {item.name}
              </button>)}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50">
            <div className="px-4 py-6 space-y-4">
              {navItems.map(item => <button key={item.name} onClick={() => scrollToSection(item.href)} className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium py-2">
                  {item.name}
                </button>)}
            </div>
          </div>}
      </nav>
    </header>;
};
export default Header;
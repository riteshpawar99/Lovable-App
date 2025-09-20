import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { GradientBackground } from "@/components/GradientBackground";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <GradientBackground 
      overlay={true} 
      overlayOpacity={0.7}
      animationDuration={12}
      className="relative"
    >
      <div className="flex min-h-screen items-center justify-center relative z-10">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-white">404</h1>
          <p className="mb-4 text-xl text-gray-200">Oops! Page not found</p>
          <a href="/" className="text-primary underline hover:text-primary-glow transition-colors">
            Return to Home
          </a>
        </div>
      </div>
    </GradientBackground>
  );
};

export default NotFound;

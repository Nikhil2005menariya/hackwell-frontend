import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>
      
      <div className="relative z-10 text-center max-w-md">
        {/* Logo */}
        <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-floating animate-float">
          <Heart className="w-10 h-10 text-primary" />
        </div>
        
        {/* 404 Content */}
        <div className="glass-card p-8 shadow-floating animate-scale-in">
          <h1 className="text-6xl font-heading font-bold text-white mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-white mb-4">Page Not Found</h2>
          <p className="text-white/80 mb-8 leading-relaxed">
            Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
          
          <div className="space-y-3">
            <Link to="/" className="block">
              <Button variant="hero" size="lg" className="w-full bg-white text-primary shadow-glow hover:scale-105">
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Button>
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="w-full text-white/80 hover:text-white transition-smooth flex items-center justify-center py-2"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </button>
          </div>
        </div>
        
        {/* Brand */}
        <div className="mt-6">
          <h3 className="text-white font-heading font-semibold">HealthAI</h3>
          <p className="text-white/60 text-sm">Risk Prediction Engine</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

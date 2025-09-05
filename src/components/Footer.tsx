import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-card border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-gradient-primary">
                  HealthAI
                </h3>
                <p className="text-sm text-muted-foreground">Risk Prediction Engine</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Empowering healthcare providers and patients with AI-driven insights for chronic disease prediction and prevention. Building a healthier future through advanced machine learning.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center text-white hover-glow transition-smooth"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center text-white hover-glow transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center text-white hover-glow transition-smooth"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contact@healthai.com" 
                className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center text-white hover-glow transition-smooth"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-3">
              <Link 
                to="/" 
                className="block text-muted-foreground hover:text-primary transition-smooth"
              >
                Home
              </Link>
              <Link 
                to="/try-now" 
                className="block text-muted-foreground hover:text-primary transition-smooth"
              >
                Try Now
              </Link>
              <Link 
                to="/about" 
                className="block text-muted-foreground hover:text-primary transition-smooth"
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                className="block text-muted-foreground hover:text-primary transition-smooth"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Legal</h4>
            <div className="space-y-3">
              <a 
                href="#" 
                className="block text-muted-foreground hover:text-primary transition-smooth"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="block text-muted-foreground hover:text-primary transition-smooth"
              >
                Terms of Service
              </a>
              <a 
                href="#" 
                className="block text-muted-foreground hover:text-primary transition-smooth"
              >
                Data Security
              </a>
              <a 
                href="#" 
                className="block text-muted-foreground hover:text-primary transition-smooth"
              >
                HIPAA Compliance
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 HealthAI Risk Prediction Engine. All rights reserved. | 
            <span className="text-primary"> Advancing Healthcare Through AI</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
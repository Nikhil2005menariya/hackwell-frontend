import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Brain, 
  Users, 
  Target, 
  Award, 
  Github, 
  Linkedin, 
  Mail,
  Heart,
  TrendingUp,
  Shield,
  Zap,
  CheckCircle
} from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Lead AI Researcher',
      image: '/api/placeholder/150/150',
      bio: 'PhD in Machine Learning from Stanford. 10+ years in healthcare AI.',
      social: { github: '#', linkedin: '#', email: 'sarah@healthai.com' }
    },
    {
      name: 'Dr. Michael Rodriguez',
      role: 'Clinical Director',
      image: '/api/placeholder/150/150',
      bio: 'MD with 15 years in internal medicine and chronic disease management.',
      social: { github: '#', linkedin: '#', email: 'michael@healthai.com' }
    },
    {
      name: 'Alex Kumar',
      role: 'Senior ML Engineer',
      image: '/api/placeholder/150/150',
      bio: 'Expert in deep learning and healthcare data systems.',
      social: { github: '#', linkedin: '#', email: 'alex@healthai.com' }
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Data Science Lead',
      image: '/api/placeholder/150/150',
      bio: 'Specialist in biostatistics and predictive modeling.',
      social: { github: '#', linkedin: '#', email: 'emily@healthai.com' }
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: '92% Average Accuracy',
      description: 'Across all four chronic disease predictions'
    },
    {
      icon: Users,
      title: '50+ Healthcare Partners',
      description: 'Trusted by hospitals and clinics worldwide'
    },
    {
      icon: TrendingUp,
      title: '25,000+ Lives Impacted',
      description: 'Through early detection and prevention'
    },
    {
      icon: Shield,
      title: 'HIPAA Compliant',
      description: 'Highest standards of data security and privacy'
    }
  ];

  const features = [
    {
      icon: Brain,
      title: 'Hybrid AI Architecture',
      description: 'Combines the power of Transformers for sequence modeling with XGBoost for structured data analysis, creating unprecedented accuracy in chronic disease prediction.'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Lightning-fast predictions with results delivered in seconds, enabling immediate clinical decision-making and patient care optimization.'
    },
    {
      icon: Target,
      title: 'Personalized Risk Assessment',
      description: 'Tailored predictions based on individual patient profiles, medical history, and demographic factors for precise risk stratification.'
    },
    {
      icon: CheckCircle,
      title: 'Clinical Validation',
      description: 'Extensively tested and validated in real-world healthcare settings with continuous monitoring and improvement of model performance.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
            About Our Mission
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            We use a hybrid AI model combining <span className="text-accent font-semibold">Transformers</span> and 
            <span className="text-accent font-semibold"> XGBoost</span> to predict chronic disease risk. 
            Our mission is to empower healthcare providers and patients with actionable insights to improve care and reduce complications.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold text-gradient-primary mb-6">
                Transforming Healthcare Through AI
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center">
                    <Target className="w-6 h-6 text-primary mr-3" />
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To democratize access to advanced chronic disease prediction through cutting-edge AI technology, 
                    enabling early intervention and personalized healthcare that saves lives and reduces healthcare costs.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center">
                    <Heart className="w-6 h-6 text-red-500 mr-3" />
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A world where chronic diseases are predicted and prevented before they become life-threatening, 
                    where every patient receives personalized care based on their unique risk profile, 
                    and where healthcare providers have the tools they need to make informed decisions.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <Card 
                    key={index} 
                    className="glass-card text-center p-6 hover-float transition-smooth animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-0">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-foreground mb-2">
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gradient-primary mb-6">
              Advanced AI Technology
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proprietary hybrid model combines the best of deep learning and ensemble methods
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card 
                  key={index} 
                  className="glass-card p-8 hover-glow transition-smooth animate-slide-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gradient-primary mb-6">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A diverse team of healthcare professionals, AI researchers, and engineers dedicated to improving patient outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card 
                key={index} 
                className="glass-card text-center hover-float transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="flex justify-center space-x-3">
                    <a 
                      href={member.social.github}
                      className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center text-white hover-glow transition-smooth"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a 
                      href={member.social.linkedin}
                      className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center text-white hover-glow transition-smooth"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a 
                      href={`mailto:${member.social.email}`}
                      className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center text-white hover-glow transition-smooth"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Join Our Healthcare Revolution
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Partner with us to bring advanced AI-powered chronic disease prediction to your healthcare practice
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="xl" 
              className="bg-white text-primary hover:scale-105 shadow-floating"
            >
              Get Started Today
            </Button>
            <Button 
              variant="ghost" 
              size="xl" 
              className="text-white border-white/30 hover:bg-white/10"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  Heart, 
  Users, 
  MessageSquare,
  CheckCircle,
  Building
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        organization: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'contact@healthai.com',
      description: 'Get in touch with our team'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      description: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: '123 Health Innovation Blvd\nSan Francisco, CA 94102',
      description: 'Our headquarters'
    },
    {
      icon: Clock,
      title: 'Support Hours',
      content: '24/7 Emergency Support',
      description: 'Critical healthcare needs'
    }
  ];

  const reasons = [
    {
      icon: Users,
      title: 'Partnership Inquiries',
      description: 'Interested in integrating our AI into your healthcare system?'
    },
    {
      icon: Heart,
      title: 'Clinical Collaboration',
      description: 'Medical professionals seeking to validate or improve our models'
    },
    {
      icon: Building,
      title: 'Enterprise Solutions',
      description: 'Large-scale deployment and custom integration needs'
    },
    {
      icon: MessageSquare,
      title: 'General Support',
      description: 'Questions about our platform, pricing, or technical assistance'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Ready to transform healthcare with AI? Let's discuss how our chronic disease prediction engine can benefit your practice.
          </p>
        </div>
      </section>

      <div className="py-16">
        <div className="container mx-auto px-6">
          {/* Contact Reasons */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gradient-primary mb-4">
                Why Contact Us?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're here to help healthcare providers leverage AI for better patient outcomes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {reasons.map((reason, index) => {
                const IconComponent = reason.icon;
                return (
                  <Card 
                    key={index} 
                    className="glass-card text-center p-6 hover-glow transition-smooth animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-0">
                      <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {reason.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {reason.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="glass-card shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-heading text-gradient-primary">
                    Send Us a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-12 animate-scale-in">
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Thank you for contacting us. We'll respond within 24 hours.
                      </p>
                      <Button 
                        onClick={() => setIsSubmitted(false)}
                        variant="hero"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="name" className="text-sm font-medium">
                            Full Name *
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Dr. John Smith"
                            className="mt-2 h-12 glass transition-smooth focus:shadow-glow"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-sm font-medium">
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john@hospital.com"
                            className="mt-2 h-12 glass transition-smooth focus:shadow-glow"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="organization" className="text-sm font-medium">
                            Organization
                          </Label>
                          <Input
                            id="organization"
                            name="organization"
                            type="text"
                            value={formData.organization}
                            onChange={handleInputChange}
                            placeholder="City General Hospital"
                            className="mt-2 h-12 glass transition-smooth focus:shadow-glow"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone" className="text-sm font-medium">
                            Phone Number
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+1 (555) 123-4567"
                            className="mt-2 h-12 glass transition-smooth focus:shadow-glow"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="subject" className="text-sm font-medium">
                          Subject *
                        </Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="Partnership Inquiry - AI Integration"
                          className="mt-2 h-12 glass transition-smooth focus:shadow-glow"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-sm font-medium">
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about your healthcare organization and how you'd like to use our AI prediction engine..."
                          rows={6}
                          className="mt-2 glass transition-smooth focus:shadow-glow resize-none"
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        variant="hero"
                        size="lg"
                        className="w-full h-12 shadow-glow"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center">
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                            Sending Message...
                          </div>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        By submitting this form, you agree to our Privacy Policy and Terms of Service.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="glass-card shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl font-heading text-gradient-primary">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">
                            {info.title}
                          </h4>
                          <p className="text-sm font-medium text-primary mb-1">
                            {info.content}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="glass-card border-red-200 bg-red-50/50">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Heart className="w-6 h-6 text-red-500 mr-3" />
                    <h3 className="font-semibold text-foreground">
                      Emergency Support
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    For critical healthcare system issues or urgent technical support.
                  </p>
                  <Button variant="destructive" size="sm" className="w-full">
                    Call Emergency Line
                  </Button>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="glass-card bg-primary/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">
                    Quick Response
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We typically respond to all inquiries within <strong>2-4 hours</strong> during business hours.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Heart, 
  Brain, 
  Activity, 
  Shield, 
  BarChart3, 
  Users, 
  TrendingUp, 
  CheckCircle,
  ArrowRight,
  Zap,
  Target,
  Sparkles,
  Database,
  Clock,
  Award,
  LineChart
} from 'lucide-react';
import { 
  LineChart as RechartsLineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart as RechartsBarChart,
  Bar,
  RadialBarChart,
  RadialBar,
  Legend
} from 'recharts';
import heroImage from '@/assets/hero-medical-ai.jpg';
import dashboardImage from '@/assets/healthcare-dashboard.jpg';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeMetric, setActiveMetric] = useState(0);
  const [counters, setCounters] = useState({
    accuracy: 0,
    predictions: 0,
    partners: 0,
    patients: 0
  });

  useEffect(() => {
    setIsVisible(true);
    
    // Animate counters
    const targets = { accuracy: 92, predictions: 10000, partners: 50, patients: 25000 };
    const duration = 2000;
    const steps = 60;
    const increment = {
      accuracy: targets.accuracy / steps,
      predictions: targets.predictions / steps,
      partners: targets.partners / steps,
      patients: targets.patients / steps
    };

    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCounters({
        accuracy: Math.min(Math.floor(increment.accuracy * step), targets.accuracy),
        predictions: Math.min(Math.floor(increment.predictions * step), targets.predictions),
        partners: Math.min(Math.floor(increment.partners * step), targets.partners),
        patients: Math.min(Math.floor(increment.patients * step), targets.patients)
      });
      
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    // Cycle through metrics
    const metricTimer = setInterval(() => {
      setActiveMetric(prev => (prev + 1) % 4);
    }, 3000);

    return () => {
      clearInterval(timer);
      clearInterval(metricTimer);
    };
  }, []);

  // Chart data
  const accuracyData = [
    { month: 'Jan', accuracy: 85 },
    { month: 'Feb', accuracy: 87 },
    { month: 'Mar', accuracy: 89 },
    { month: 'Apr', accuracy: 90 },
    { month: 'May', accuracy: 91 },
    { month: 'Jun', accuracy: 92 }
  ];

  const diseaseDistribution = [
    { name: 'Diabetes', value: 35, color: '#3B82F6' },
    { name: 'Heart Disease', value: 30, color: '#EF4444' },
    { name: 'Kidney Disease', value: 20, color: '#10B981' },
    { name: 'Obesity', value: 15, color: '#8B5CF6' }
  ];

  const performanceData = [
    { disease: 'Diabetes', accuracy: 92, precision: 89, recall: 94 },
    { disease: 'Heart', accuracy: 94, precision: 91, recall: 96 },
    { disease: 'Kidney', accuracy: 89, precision: 87, recall: 91 },
    { disease: 'Obesity', accuracy: 91, precision: 88, recall: 93 }
  ];

  const diseases = [
    {
      name: 'Diabetes',
      icon: Activity,
      description: 'Early detection and risk assessment for Type 2 diabetes using advanced ML algorithms.',
      stats: '92% Accuracy',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Heart Disease',
      icon: Heart,
      description: 'Cardiovascular risk prediction with comprehensive analysis of key health indicators.',
      stats: '94% Accuracy',
      color: 'from-red-500 to-pink-600'
    },
    {
      name: 'Kidney Disease',
      icon: Shield,
      description: 'Chronic kidney disease risk assessment for early intervention and prevention.',
      stats: '89% Accuracy',
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Obesity',
      icon: TrendingUp,
      description: 'BMI and obesity risk analysis with personalized health recommendations.',
      stats: '91% Accuracy',
      color: 'from-purple-500 to-violet-600'
    }
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Predictions',
      description: 'Hybrid Transformers + XGBoost model for superior accuracy'
    },
    {
      icon: BarChart3,
      title: 'Real-time Analysis',
      description: 'Instant risk assessment with detailed probability scores'
    },
    {
      icon: Users,
      title: 'Healthcare Integration',
      description: 'Seamless integration with existing healthcare workflows'
    },
    {
      icon: Zap,
      title: 'Fast & Scalable',
      description: 'Process thousands of predictions in seconds'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>
          <div className="absolute inset-0 medical-pattern opacity-10"></div>
          <div className="floating-orbs">
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>
            <div className="orb orb-3"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-yellow-300 mr-2" />
                <span className="text-white text-sm font-medium">AI-Powered Healthcare Revolution</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
                Predicting Risk for
                <span className="block text-gradient-hero bg-clip-text text-transparent bg-white relative">
                  Chronic Diseases
                </span>
                with AI
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
                Transformers + XGBoost Hybrid Model for Personalized Health Predictions
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link to="/try-now">
                  <Button 
                    variant="hero" 
                    size="xl" 
                    className="bg-white text-primary hover:scale-105 shadow-floating animate-pulse-glow relative overflow-hidden"
                  >
                    <span className="relative z-10">Try Now</span>
                    <ArrowRight className="w-5 h-5 ml-2 relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                  </Button>
                </Link>
                <Link to="/about">
                  <Button 
                    variant="ghost" 
                    size="xl" 
                    className="text-white border-white/30 hover:bg-white/10 backdrop-blur-sm"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>

              {/* Live Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'Accuracy Rate', value: counters.accuracy, suffix: '%', icon: Target },
                  { label: 'Predictions Made', value: counters.predictions.toLocaleString(), suffix: '+', icon: Database },
                  { label: 'Healthcare Partners', value: counters.partners, suffix: '+', icon: Users },
                  { label: 'Patient Lives Impacted', value: counters.patients.toLocaleString(), suffix: '+', icon: Heart }
                ].map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div 
                      key={index} 
                      className={`glass-card p-4 rounded-xl animate-fade-in transition-all duration-300 ${
                        activeMetric === index ? 'scale-110 shadow-glow' : ''
                      }`}
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <IconComponent className="w-5 h-5 text-white/70 mb-2" />
                      <div className="text-2xl font-bold text-white mb-1">
                        {stat.value}{stat.suffix}
                      </div>
                      <div className="text-white/80 text-xs">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column - Interactive Chart */}
            <div className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="glass-card p-6 rounded-2xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-semibold text-lg">Model Accuracy Trend</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white/70 text-sm">Live Data</span>
                  </div>
                </div>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsLineChart data={accuracyData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                      <XAxis dataKey="month" stroke="rgba(255,255,255,0.7)" />
                      <YAxis stroke="rgba(255,255,255,0.7)" />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: 'rgba(255,255,255,0.1)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255,255,255,0.2)',
                          borderRadius: '12px',
                          color: 'white'
                        }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="accuracy" 
                        stroke="#10B981" 
                        strokeWidth={3}
                        dot={{ fill: '#10B981', strokeWidth: 2, r: 6 }}
                        activeDot={{ r: 8, stroke: '#10B981', strokeWidth: 2 }}
                      />
                    </RechartsLineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Dashboard Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gradient-primary mb-6">
              Real-Time Analytics Dashboard
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Live insights into our AI model performance and healthcare impact
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Disease Distribution Chart */}
            <div className="lg:col-span-1">
              <Card className="glass-card h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <PieChart className="w-5 h-5 mr-2 text-primary" />
                    Prediction Distribution
                  </h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={diseaseDistribution}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={100}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {diseaseDistribution.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip 
                          contentStyle={{
                            backgroundColor: 'rgba(255,255,255,0.95)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(0,0,0,0.1)',
                            borderRadius: '12px'
                          }}
                        />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Performance Metrics */}
            <div className="lg:col-span-2">
              <Card className="glass-card h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2 text-primary" />
                    Model Performance by Disease
                  </h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsBarChart data={performanceData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis dataKey="disease" />
                        <YAxis />
                        <Tooltip 
                          contentStyle={{
                            backgroundColor: 'rgba(255,255,255,0.95)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(0,0,0,0.1)',
                            borderRadius: '12px'
                          }}
                        />
                        <Bar dataKey="accuracy" fill="#3B82F6" name="Accuracy %" />
                        <Bar dataKey="precision" fill="#10B981" name="Precision %" />
                        <Bar dataKey="recall" fill="#8B5CF6" name="Recall %" />
                      </RechartsBarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Disease Cards with Enhanced Visuals */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {diseases.map((disease, index) => {
              const IconComponent = disease.icon;
              const accuracy = performanceData.find(d => d.disease.toLowerCase().includes(disease.name.toLowerCase()))?.accuracy || 90;
              
              return (
                <Card 
                  key={index} 
                  className="glass-card hover-float transition-smooth cursor-pointer group animate-slide-up relative overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardContent className="p-6 relative z-10">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${disease.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">
                      {disease.name}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                      {disease.description}
                    </p>
                    
                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">Accuracy</span>
                        <span className="text-sm font-semibold text-primary">{accuracy}%</span>
                      </div>
                      <Progress value={accuracy} className="h-2" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {disease.stats}
                      </span>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <Award className="w-4 h-4 text-yellow-500" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-gradient-card relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={dashboardImage} 
            alt="Healthcare Dashboard" 
            className="w-full h-full object-cover opacity-10 mix-blend-overlay"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gradient-primary mb-6">
              Advanced AI Technology Stack
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cutting-edge machine learning meets healthcare expertise for unprecedented accuracy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card
                  key={index} 
                  className="glass-card group hover-float transition-smooth animate-fade-in relative overflow-hidden"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Animated Border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                  
                  <CardContent className="p-8 text-center relative z-10">
                    <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-smooth shadow-glow">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold mb-4 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Technology Showcase */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-heading font-bold mb-6">
                Hybrid AI Model Architecture
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our innovative approach combines the power of Transformer neural networks with 
                XGBoost ensemble learning, creating a robust prediction system that adapts to 
                diverse patient profiles and medical conditions.
              </p>
              
              <div className="space-y-4">
                {[
                  { name: 'Transformer Accuracy', value: 94 },
                  { name: 'XGBoost Precision', value: 91 },
                  { name: 'Hybrid Model Performance', value: 96 },
                  { name: 'Real-time Processing', value: 99 }
                ].map((metric, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{metric.name}</span>
                      <span className="text-sm text-primary font-semibold">{metric.value}%</span>
                    </div>
                    <Progress value={metric.value} className="h-2" />
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <h4 className="text-lg font-semibold mb-4 flex items-center">
                <LineChart className="w-5 h-5 mr-2 text-primary" />
                Model Comparison
              </h4>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RadialBarChart cx="50%" cy="50%" innerRadius="20%" outerRadius="80%" data={[
                    { name: 'Traditional ML', value: 78, fill: '#94A3B8' },
                    { name: 'Transformer Only', value: 85, fill: '#3B82F6' },
                    { name: 'XGBoost Only', value: 82, fill: '#10B981' },
                    { name: 'Our Hybrid Model', value: 92, fill: '#8B5CF6' }
                  ]}>
                    <RadialBar dataKey="value" cornerRadius={10} fill="#8884d8" />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'rgba(255,255,255,0.95)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(0,0,0,0.1)',
                        borderRadius: '12px'
                      }}
                    />
                    <Legend />
                  </RadialBarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Ready to Transform Healthcare?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join healthcare providers worldwide who trust our AI for chronic disease prediction
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/try-now">
              <Button 
                variant="hero" 
                size="xl" 
                className="bg-white text-primary hover:scale-105 shadow-floating"
              >
                Start Free Trial <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                variant="ghost" 
                size="xl" 
                className="text-white border-white/30 hover:bg-white/10"
              >
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
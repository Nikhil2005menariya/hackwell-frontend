import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Upload, 
  FileText, 
  Brain, 
  Activity, 
  Heart, 
  Shield, 
  TrendingUp,
  Download,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

interface PredictionHistory {
  id: string;
  filename: string;
  diseaseType: string;
  probability: number;
  riskLevel: 'Low' | 'Medium' | 'High';
  timestamp: Date;
  status: 'completed' | 'processing' | 'failed';
}

const TryNow = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [diseaseType, setDiseaseType] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [currentPrediction, setCurrentPrediction] = useState<any>(null);

  // Mock prediction history
  const [predictionHistory] = useState<PredictionHistory[]>([
    {
      id: '1',
      filename: 'patient_data_batch_01.csv',
      diseaseType: 'Diabetes',
      probability: 0.73,
      riskLevel: 'High',
      timestamp: new Date('2024-01-15T10:30:00'),
      status: 'completed'
    },
    {
      id: '2',
      filename: 'heart_screening_data.csv',
      diseaseType: 'Heart Disease',
      probability: 0.42,
      riskLevel: 'Medium',
      timestamp: new Date('2024-01-14T15:45:00'),
      status: 'completed'
    },
    {
      id: '3',
      filename: 'kidney_health_assessment.csv',
      diseaseType: 'Kidney Disease',
      probability: 0.28,
      riskLevel: 'Low',
      timestamp: new Date('2024-01-13T09:15:00'),
      status: 'completed'
    }
  ]);

  const diseaseOptions = [
    { value: 'diabetes', label: 'Diabetes', icon: Activity, color: 'text-blue-500' },
    { value: 'heart', label: 'Heart Disease', icon: Heart, color: 'text-red-500' },
    { value: 'kidney', label: 'Kidney Disease', icon: Shield, color: 'text-green-500' },
    { value: 'obesity', label: 'Obesity', icon: TrendingUp, color: 'text-purple-500' }
  ];

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    const csvFile = files.find(file => file.type === 'text/csv' || file.name.endsWith('.csv'));
    
    if (csvFile) {
      setSelectedFile(csvFile);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && (file.type === 'text/csv' || file.name.endsWith('.csv'))) {
      setSelectedFile(file);
    }
  };

const handleSubmit = async () => {
  if (!selectedFile || !diseaseType) return;

  setIsLoading(true);

  const formData = new FormData();
  formData.append("file", selectedFile);

  try {
    const response = await fetch(`https://hackwell-backend.onrender.com/predict/${diseaseType}/`, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.predictions && data.predictions.length > 0) {
      const prediction = data.predictions[0]; // take first patient for now

      // 🔹 Add mock features so UI can render them
      const enrichedPrediction = {
        ...prediction,
        features: [
          { name: "Age", importance: 0.23, value: "65 years" },
          { name: "BMI", importance: 0.19, value: "28.5" },
          { name: "Blood Pressure", importance: 0.17, value: "140/90" },
          { name: "Cholesterol", importance: 0.15, value: "240 mg/dL" },
          { name: "Family History", importance: 0.12, value: "Positive" },
        ],
      };

      setCurrentPrediction(enrichedPrediction);
    } else {
      setCurrentPrediction(null);
    }
  } catch (err) {
    console.error("Prediction error:", err);
  } finally {
    setIsLoading(false);
  }
};


  const getRiskLevel = (probability: number): { level: string; color: string } => {
    if (probability < 0.3) return { level: 'Low Risk', color: 'text-green-500' };
    if (probability < 0.7) return { level: 'Medium Risk', color: 'text-orange-500' };
    return { level: 'High Risk', color: 'text-red-500' };
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'processing':
        return <Clock className="w-5 h-5 text-orange-500" />;
      case 'failed':
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gradient-primary mb-4">
              AI Risk Prediction
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Upload your patient data and get instant chronic disease risk predictions powered by our hybrid AI model
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* History Panel */}
            <div className="lg:col-span-1">
              <Card className="glass-card shadow-card h-fit">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <Clock className="w-5 h-5 mr-2 text-primary" />
                    Prediction History
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {predictionHistory.map((prediction) => (
                    <div 
                      key={prediction.id}
                      className="p-4 bg-gradient-card rounded-xl border border-border/50 hover-glow transition-smooth cursor-pointer"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center">
                          {getStatusIcon(prediction.status)}
                          <span className="text-sm font-medium text-foreground ml-2">
                            {prediction.diseaseType}
                          </span>
                        </div>
                        <span className={`text-sm font-semibold px-2 py-1 rounded-full ${
                          prediction.riskLevel === 'Low' ? 'bg-green-100 text-green-700' :
                          prediction.riskLevel === 'Medium' ? 'bg-orange-100 text-orange-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {prediction.riskLevel}
                        </span>
                      </div>
                      
                      <p className="text-xs text-muted-foreground mb-2 truncate">
                        {prediction.filename}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-mono">
                          {(prediction.probability * 100).toFixed(1)}%
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {prediction.timestamp.toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Main Prediction Panel */}
            <div className="lg:col-span-2">
              <Card className="glass-card shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <Brain className="w-6 h-6 mr-3 text-primary" />
                    New Prediction
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* File Upload */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      Upload CSV File
                    </label>
                    <div
                      className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-smooth cursor-pointer ${
                        dragOver 
                          ? 'border-primary bg-primary/5' 
                          : selectedFile 
                            ? 'border-green-500 bg-green-50/50' 
                            : 'border-border hover:border-primary/50'
                      }`}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      onClick={() => document.getElementById('file-upload')?.click()}
                    >
                      <input
                        id="file-upload"
                        type="file"
                        accept=".csv"
                        onChange={handleFileSelect}
                        className="hidden"
                      />
                      
                      {selectedFile ? (
                        <div className="animate-scale-in">
                          <FileText className="w-12 h-12 text-green-500 mx-auto mb-3" />
                          <p className="text-foreground font-medium">{selectedFile.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {(selectedFile.size / 1024).toFixed(1)} KB
                          </p>
                        </div>
                      ) : (
                        <div>
                          <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                          <p className="text-foreground font-medium mb-1">
                            Drop your CSV file here, or click to browse
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Supports CSV files up to 10MB
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Disease Selection */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      Select Disease Type
                    </label>
                    <Select value={diseaseType} onValueChange={setDiseaseType}>
                      <SelectTrigger className="h-12 glass">
                        <SelectValue placeholder="Choose the disease to predict..." />
                      </SelectTrigger>
                      <SelectContent className="glass-card">
                        {diseaseOptions.map((option) => {
                          const IconComponent = option.icon;
                          return (
                            <SelectItem key={option.value} value={option.value}>
                              <div className="flex items-center">
                                <IconComponent className={`w-5 h-5 mr-3 ${option.color}`} />
                                {option.label}
                              </div>
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Submit Button */}
                  <Button
                    onClick={handleSubmit}
                    disabled={!selectedFile || !diseaseType || isLoading}
                    variant="hero"
                    size="lg"
                    className="w-full h-12 shadow-glow"
                  >
                    {isLoading ? (
                      <div className="flex items-center">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                        AI Processing...
                      </div>
                    ) : (
                      <>
                        <Brain className="w-5 h-5 mr-2" />
                        Generate Prediction
                      </>
                    )}
                  </Button>

                  {/* Loading Animation */}
                  {isLoading && (
                    <Card className="glass-card animate-fade-in">
                      <CardContent className="p-6">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                            <Brain className="w-8 h-8 text-white animate-pulse" />
                          </div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">
                            AI Analysis in Progress
                          </h3>
                          <p className="text-muted-foreground mb-4">
                            Our hybrid Transformers + XGBoost model is analyzing your data...
                          </p>
                          <div className="w-full bg-border rounded-full h-2 mb-2">
                            <div className="bg-gradient-primary h-2 rounded-full animate-pulse" style={{ width: '70%' }}></div>
                          </div>
                          <p className="text-xs text-muted-foreground">Processing patient records</p>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Results */}
                  {currentPrediction && !isLoading && (
                    <Card className="glass-card border-primary/20 animate-scale-in">
                      <CardHeader>
                        <CardTitle className="text-foreground">Prediction Results</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        {/* Risk Score */}
                        <div className="text-center">
                          <div className="relative w-32 h-32 mx-auto mb-4">
                            <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                              <circle
                                cx="60"
                                cy="60"
                                r="50"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="8"
                                className="text-border"
                              />
                              <circle
                                cx="60"
                                cy="60"
                                r="50"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="8"
                                strokeLinecap="round"
                                className={getRiskLevel(currentPrediction.probability).color}
                                strokeDasharray={`${currentPrediction.probability * 314} 314`}
                              />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-center">
                                <div className="text-2xl font-bold text-foreground">
                                  {(currentPrediction.probability * 100).toFixed(1)}%
                                </div>
                                <div className="text-xs text-muted-foreground">Risk Score</div>
                              </div>
                            </div>
                          </div>
                          <div className={`text-lg font-semibold ${getRiskLevel(currentPrediction.probability).color}`}>
                            {getRiskLevel(currentPrediction.probability).level}
                          </div>
                        </div>

                        {/* Feature Importance */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Key Contributing Factors</h4>
                          <div className="space-y-3">
                            {currentPrediction.features.map((feature: any, index: number) => (
                              <div key={index} className="flex items-center justify-between">
                                <div className="flex-1">
                                  <div className="flex justify-between items-center mb-1">
                                    <span className="text-sm font-medium text-foreground">
                                      {feature.name}
                                    </span>
                                    <span className="text-xs text-muted-foreground">
                                      {feature.value}
                                    </span>
                                  </div>
                                  <div className="w-full bg-border rounded-full h-2">
                                    <div 
                                      className="bg-gradient-primary h-2 rounded-full transition-smooth" 
                                      style={{ width: `${feature.importance * 100}%` }}
                                    ></div>
                                  </div>
                                </div>
                                <span className="text-xs text-muted-foreground ml-4">
                                  {(feature.importance * 100).toFixed(1)}%
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Download Report */}
                        <Button variant="outline" className="w-full">
                          <Download className="w-4 h-4 mr-2" />
                          Download Detailed Report
                        </Button>
                      </CardContent>
                    </Card>
                  )}
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

export default TryNow;

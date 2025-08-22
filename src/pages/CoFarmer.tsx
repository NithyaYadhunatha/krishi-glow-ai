import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { GlassCard } from "@/components/GlassCard";
import { Navigation } from "@/components/Navigation";
import { ChatBot } from "@/components/ChatBot";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Bot, 
  TrendingUp, 
  Camera, 
  BookOpen, 
  Upload,
  BarChart3,
  Brain,
  Languages,
  Lightbulb
} from "lucide-react";
import agriculturalBg from "@/assets/agricultural-background.jpg";

const CoFarmer = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [priceQuery, setPriceQuery] = useState("");
  const [demandQuery, setDemandQuery] = useState("");

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const aiModules = [
    {
      title: "Price Recommender",
      description: "Get AI-powered price recommendations based on market trends",
      icon: TrendingUp,
      color: "text-primary"
    },
    {
      title: "Demand Forecasting",
      description: "Predict market demand for your crops",
      icon: BarChart3,
      color: "text-secondary"
    },
    {
      title: "Crop Health Analysis",
      description: "Upload crop images for AI health assessment",
      icon: Camera,
      color: "text-accent"
    },
    {
      title: "Smart Advisory",
      description: "Get personalized farming recommendations",
      icon: Brain,
      color: "text-muted"
    }
  ];

  const knowledgeTopics = [
    { title: "Water-Saving Techniques", language: "English", category: "Conservation" },
    { title: "ಮಣ್ಣಿನ ಆರೋಗ್ಯ ನಿರ್ವಹಣೆ", language: "Kannada", category: "Soil Health" },
    { title: "सरकारी योजनाएं", language: "Hindi", category: "Government Schemes" },
    { title: "நவீன விவசாய முறைகள்", language: "Tamil", category: "Modern Farming" },
  ];

  return (
    <div 
      className="min-h-screen agricultural-bg"
      style={{
        backgroundImage: `linear-gradient(180deg, hsl(0 0% 0% / 0.5), hsl(114 40% 3% / 0.7)), url(${agriculturalBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <Navigation />
      
      <main className="pt-20 pb-16 px-4 lg:px-8">
        <div className="container mx-auto">
          {/* Header */}
          <div className="mb-8 text-center animate-fade-in">
            <div className="flex items-center justify-center mb-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-secondary glow-primary animate-float">
                <Bot className="w-8 h-8 text-secondary-foreground" />
              </div>
            </div>
            <h1 className="font-heading text-4xl font-bold mb-4">Co-Farmer AI Hub</h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Your intelligent farming companion powered by artificial intelligence
            </p>
          </div>

          {/* AI Modules Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {aiModules.map((module, index) => (
              <GlassCard key={module.title} className="text-center animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-glass-subtle mx-auto mb-3">
                  <module.icon className={`w-6 h-6 ${module.color}`} />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">{module.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{module.description}</p>
              </GlassCard>
            ))}
          </div>

          {/* AI Tools */}
          <GlassCard className="mb-8">
            <Tabs defaultValue="price" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4 bg-glass-subtle">
                <TabsTrigger value="price">Price AI</TabsTrigger>
                <TabsTrigger value="demand">Demand AI</TabsTrigger>
                <TabsTrigger value="analysis">Image AI</TabsTrigger>
                <TabsTrigger value="chat">Chat AI</TabsTrigger>
              </TabsList>

              <TabsContent value="price" className="space-y-4">
                <div className="text-center mb-6">
                  <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h2 className="font-heading text-2xl font-semibold mb-2">Price Recommender</h2>
                  <p className="font-body text-muted-foreground">Get AI-powered price recommendations based on current market data</p>
                </div>
                
                <div className="space-y-4">
                  <Input
                    placeholder="Enter crop name (e.g., Tomatoes, Rice, Wheat)"
                    value={priceQuery}
                    onChange={(e) => setPriceQuery(e.target.value)}
                  />
                  <Button className="w-full bg-primary hover:bg-primary-glow shadow-glow">
                    Get Price Recommendation
                  </Button>
                  
                  {priceQuery && (
                    <GlassCard className="bg-glass-subtle">
                      <h3 className="font-heading text-lg font-semibold mb-2">Price Analysis for {priceQuery}</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Recommended Price</p>
                          <p className="text-2xl font-bold text-primary">₹25/kg</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Market Trend</p>
                          <p className="text-lg font-semibold text-secondary">+12% ↗</p>
                        </div>
                      </div>
                    </GlassCard>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="demand" className="space-y-4">
                <div className="text-center mb-6">
                  <BarChart3 className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h2 className="font-heading text-2xl font-semibold mb-2">Demand Forecasting</h2>
                  <p className="font-body text-muted-foreground">Predict future demand for your crops</p>
                </div>
                
                <div className="space-y-4">
                  <Input
                    placeholder="Enter crop and region (e.g., Tomatoes in Karnataka)"
                    value={demandQuery}
                    onChange={(e) => setDemandQuery(e.target.value)}
                  />
                  <Button className="w-full bg-secondary hover:bg-secondary-glow shadow-glow">
                    Forecast Demand
                  </Button>
                  
                  {demandQuery && (
                    <GlassCard className="bg-glass-subtle">
                      <h3 className="font-heading text-lg font-semibold mb-4">Demand Forecast</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Next Week</span>
                          <span className="text-secondary font-semibold">High Demand</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Next Month</span>
                          <span className="text-primary font-semibold">Medium Demand</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Peak Season</span>
                          <span className="text-accent font-semibold">March - May</span>
                        </div>
                      </div>
                    </GlassCard>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="analysis" className="space-y-4">
                <div className="text-center mb-6">
                  <Camera className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h2 className="font-heading text-2xl font-semibold mb-2">Crop Health Analysis</h2>
                  <p className="font-body text-muted-foreground">Upload crop images for AI-powered health assessment</p>
                </div>
                
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="image-upload"
                    />
                    <label htmlFor="image-upload" className="cursor-pointer">
                      {uploadedImage ? (
                        <img src={uploadedImage} alt="Uploaded crop" className="max-w-full h-48 mx-auto rounded-lg" />
                      ) : (
                        <div className="space-y-4">
                          <Upload className="w-12 h-12 text-muted-foreground mx-auto" />
                          <p className="font-body text-muted-foreground">Click to upload crop image</p>
                        </div>
                      )}
                    </label>
                  </div>
                  
                  {uploadedImage && (
                    <Button className="w-full bg-accent hover:bg-accent/80 text-accent-foreground">
                      Analyze Crop Health
                    </Button>
                  )}
                  
                  {uploadedImage && (
                    <GlassCard className="bg-glass-subtle">
                      <h3 className="font-heading text-lg font-semibold mb-2">Analysis Results</h3>
                      <div className="space-y-2">
                        <p><span className="font-semibold">Health Status:</span> <span className="text-secondary">Good</span></p>
                        <p><span className="font-semibold">Disease Risk:</span> <span className="text-primary">Low</span></p>
                        <p><span className="font-semibold">Recommendations:</span> Continue current care routine</p>
                      </div>
                    </GlassCard>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="chat" className="space-y-4">
                <div className="text-center mb-6">
                  <Bot className="w-12 h-12 text-muted mx-auto mb-4" />
                  <h2 className="font-heading text-2xl font-semibold mb-2">AI Assistant</h2>
                  <p className="font-body text-muted-foreground">Chat with our AI for farming advice and support</p>
                </div>
                
                <div className="space-y-4">
                  <div className="h-64 bg-glass-subtle rounded-lg p-4 overflow-y-auto">
                    <div className="space-y-4">
                      <div className="bg-primary/20 rounded-lg p-3">
                        <p className="font-body text-sm">Hello! I'm your AI farming assistant. How can I help you today?</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Textarea placeholder="Ask about farming techniques, weather, subsidies..." className="flex-1" />
                    <Button size="sm" className="px-4">
                      Send
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </GlassCard>

          {/* Knowledge Section */}
          <GlassCard>
            <div className="flex items-center mb-6">
              <BookOpen className="w-8 h-8 text-primary mr-3" />
              <div>
                <h2 className="font-heading text-2xl font-semibold">Knowledge & Advisory</h2>
                <p className="font-body text-muted-foreground">Multilingual farming guides and resources</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {knowledgeTopics.map((topic, index) => (
                <div key={index} className="p-4 rounded-lg bg-glass-subtle border border-border/20 hover:border-primary/30 transition-all cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-body font-semibold mb-1">{topic.title}</h3>
                      <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                        <span className="flex items-center">
                          <Languages className="w-4 h-4 mr-1" />
                          {topic.language}
                        </span>
                        <span>{topic.category}</span>
                      </div>
                    </div>
                    <Lightbulb className="w-5 h-5 text-secondary" />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </main>

      <ChatBot />
    </div>
  );
};

export default CoFarmer;
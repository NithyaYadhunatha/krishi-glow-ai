import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/GlassCard";
import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Leaf, ArrowRight, Users, Bot, TrendingUp, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: TrendingUp,
      title: "Transparent Trading",
      description: "Fair market prices with real-time data and transparent transactions"
    },
    {
      icon: Bot,
      title: "AI-Driven Insights",
      description: "Smart recommendations powered by machine learning and data analytics"
    },
    {
      icon: Users,
      title: "Equipment Sharing",
      description: "Connect with fellow farmers to share resources and reduce costs"
    },
    {
      icon: Shield,
      title: "Digital Assistance",
      description: "24/7 support with multilingual guidance and expert advice"
    }
  ];

  return (
    <div className="min-h-screen agricultural-bg">
      <Navigation />
      
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center px-4 lg:px-8 pt-20">
        <div className="container mx-auto text-center space-y-8 animate-fade-in">
          {/* Logo and Brand */}
          <div className="space-y-6">
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center w-24 h-24 lg:w-28 lg:h-28 rounded-3xl bg-gradient-to-br from-neon to-primary neon-glow animate-float animate-neon-pulse">
              <Leaf className="w-12 h-12 lg:w-14 lg:h-14 text-black" />
            </div>
          </div>
            
            <div className="space-y-6">
              <h1 className="font-heading text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight gradient-text animate-fade-in">
                Krishify
              </h1>
              <p className="font-heading text-3xl lg:text-4xl xl:text-5xl neon-text font-bold animate-fade-in" style={{animationDelay: '0.2s'}}>
                Every Crop Counts
              </p>
              <p className="font-body text-xl lg:text-2xl text-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.4s'}}>
                Transparent trade, AI insights, and smarter farming for everyone. 
                Empowering farmers with technology that understands agriculture.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{animationDelay: '0.6s'}}>
            <Button 
              size="lg" 
              onClick={() => navigate("/auth")}
              className="bg-gradient-to-r from-neon to-primary text-black hover:shadow-neon text-xl px-12 py-6 h-auto font-bold transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              Start Selling
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate("/marketplace")}
              className="text-xl px-12 py-6 h-auto border-2 border-neon/30 text-neon hover:bg-neon/10 hover:border-neon transition-all duration-300 hover:scale-105"
            >
              <TrendingUp className="w-6 h-6 mr-2" />
              Explore Marketplace
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
            {features.map((feature, index) => (
              <GlassCard 
                key={feature.title} 
                className="text-center p-8 group hover:neon-glow transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                style={{ animationDelay: `${0.8 + index * 0.2}s` }}
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-neon/20 to-primary/20 mx-auto mb-6 group-hover:shadow-neon transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-neon group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3 text-foreground group-hover:text-neon transition-colors duration-300">{feature.title}</h3>
                <p className="font-body text-muted-foreground group-hover:text-foreground transition-colors duration-300">{feature.description}</p>
              </GlassCard>
            ))}
          </div>

          {/* AI Insights Card */}
          <GlassCard className="mt-20 text-center max-w-5xl mx-auto p-12 neon-glow animate-fade-in relative overflow-hidden" style={{animationDelay: '1.6s'}}>
            <div className="absolute inset-0 bg-gradient-to-r from-neon/5 to-primary/5 rounded-lg"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-neon to-primary mx-auto mb-6 animate-neon-pulse">
                <Bot className="w-10 h-10 text-black" />
              </div>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6 gradient-text">
                Today's AI Insight
              </h2>
              <div className="text-center mb-8">
                <p className="text-3xl lg:text-4xl font-bold neon-text mb-2">₹2,340/quintal</p>
                <p className="text-xl text-foreground mb-4">Onion Price Forecast</p>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  AI predicts 15% price increase in next 3 days. Best time to sell!
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  size="lg" 
                  onClick={() => navigate("/auth")}
                  className="bg-gradient-to-r from-neon to-primary text-black hover:shadow-neon text-lg px-10 py-4 h-auto font-bold transition-all duration-300 hover:scale-105"
                >
                  Get Live Prices
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => navigate("/co-farmer")}
                  className="text-lg px-10 py-4 h-auto border-2 border-neon/30 text-neon hover:bg-neon/10 hover:border-neon transition-all duration-300"
                >
                  Try AI Assistant
                </Button>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Homepage;
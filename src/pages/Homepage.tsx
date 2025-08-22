import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/GlassCard";
import { Leaf, ArrowRight, Users, Bot, TrendingUp, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import agriculturalBg from "@/assets/agricultural-background.jpg";

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
    <div 
      className="min-h-screen agricultural-bg"
      style={{
        backgroundImage: `linear-gradient(180deg, hsl(0 0% 0% / 0.6), hsl(114 40% 3% / 0.8)), url(${agriculturalBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center px-4 lg:px-8">
        <div className="container mx-auto text-center space-y-8 animate-fade-in">
          {/* Logo and Brand */}
          <div className="space-y-6">
            <div className="flex items-center justify-center">
              <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-primary glow-primary animate-float">
                <Leaf className="w-10 h-10 text-primary-foreground" />
              </div>
            </div>
            
            <div className="space-y-4">
              <h1 className="font-heading text-6xl lg:text-7xl font-bold tracking-tight">
                Krishify
              </h1>
              <p className="font-heading text-2xl lg:text-3xl text-primary font-medium">
                Every Crop Counts
              </p>
              <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Empowering farmers through transparent trading, AI-driven insights, 
                equipment sharing, and smart digital assistance for modern agriculture.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              onClick={() => navigate("/auth")}
              className="bg-primary hover:bg-primary-glow shadow-glow-strong text-lg px-8 py-4 h-auto"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate("/auth")}
              className="text-lg px-8 py-4 h-auto"
            >
              <Users className="w-5 h-5 mr-2" />
              Join Community
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {features.map((feature, index) => (
              <GlassCard 
                key={feature.title} 
                className="text-center p-6"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20 mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{feature.description}</p>
              </GlassCard>
            ))}
          </div>

          {/* Call to Action */}
          <GlassCard className="mt-16 text-center max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold mb-4">
              Ready to Transform Your Farming?
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-6">
              Join thousands of farmers already using AI-powered agriculture tools
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => navigate("/auth")}
                className="bg-secondary hover:bg-secondary-glow text-secondary-foreground shadow-glow"
              >
                Start Free Trial
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => navigate("/auth")}
              >
                Learn More
              </Button>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
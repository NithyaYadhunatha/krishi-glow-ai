import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/GlassCard";
import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Leaf, Target, Eye, Users, TrendingUp, Shield, Bot, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const values = [
    {
      icon: Heart,
      title: "Farmer-First",
      description: "Every decision we make is centered around improving the lives of farmers"
    },
    {
      icon: Shield,
      title: "Transparency",
      description: "Fair, honest trading with complete price transparency and no hidden fees"
    },
    {
      icon: Bot,
      title: "AI Innovation",
      description: "Cutting-edge AI technology made simple and accessible for farmers"
    },
    {
      icon: Users,
      title: "Community",
      description: "Building strong networks that connect farmers, buyers, and agricultural experts"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Farmers Connected" },
    { number: "₹50 Cr+", label: "Trade Volume" },
    { number: "25+", label: "Crops Supported" },
    { number: "95%", label: "Price Accuracy" }
  ];

  return (
    <div className="min-h-screen agricultural-bg">
      <Navigation />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 px-4 lg:px-8">
        <div className="container mx-auto text-center space-y-8">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-neon to-primary neon-glow animate-float">
              <Leaf className="w-10 h-10 text-black" />
            </div>
          </div>
          
          <h1 className="font-heading text-5xl lg:text-6xl font-bold gradient-text mb-6">
            About Krishify
          </h1>
          <p className="font-body text-xl lg:text-2xl text-foreground max-w-4xl mx-auto leading-relaxed">
            We're on a mission to revolutionize agriculture through technology, 
            transparency, and community-driven innovation.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="px-4 lg:px-8 pb-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <GlassCard className="p-8 neon-glow">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon/20 to-primary/20 flex items-center justify-center mr-4">
                  <Target className="w-8 h-8 text-neon" />
                </div>
                <h2 className="font-heading text-3xl font-bold gradient-text">Our Mission</h2>
              </div>
              <p className="text-foreground text-lg leading-relaxed">
                To empower farmers with cutting-edge AI technology, transparent market access, 
                and data-driven insights that increase their income and improve their quality of life. 
                We believe every farmer deserves fair prices, modern tools, and the support of a 
                thriving agricultural community.
              </p>
            </GlassCard>

            <GlassCard className="p-8 neon-glow">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon/20 to-primary/20 flex items-center justify-center mr-4">
                  <Eye className="w-8 h-8 text-neon" />
                </div>
                <h2 className="font-heading text-3xl font-bold gradient-text">Our Vision</h2>
              </div>
              <p className="text-foreground text-lg leading-relaxed">
                To create a world where agriculture is smart, sustainable, and profitable for everyone. 
                We envision a future where AI-powered insights help farmers make better decisions, 
                transparent marketplaces ensure fair trade, and technology bridges the gap between 
                traditional farming and modern commerce.
              </p>
            </GlassCard>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="px-4 lg:px-8 pb-16">
        <div className="container mx-auto">
          <h2 className="font-heading text-4xl font-bold text-center gradient-text mb-12">
            Impact by Numbers
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <GlassCard key={stat.label} className="text-center p-6 hover:neon-glow transition-all duration-300">
                <p className="text-3xl lg:text-4xl font-bold neon-text mb-2">{stat.number}</p>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="px-4 lg:px-8 pb-16">
        <div className="container mx-auto">
          <h2 className="font-heading text-4xl font-bold text-center gradient-text mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <GlassCard 
                key={value.title} 
                className="p-8 group hover:neon-glow transition-all duration-500 hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-neon/20 to-primary/20 flex items-center justify-center group-hover:shadow-neon transition-all duration-300">
                    <value.icon className="w-7 h-7 text-neon group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold mb-3 text-foreground group-hover:text-neon transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {value.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>

      {/* How We Help Section */}
      <div className="px-4 lg:px-8 pb-16">
        <div className="container mx-auto">
          <GlassCard className="p-12 text-center neon-glow">
            <h2 className="font-heading text-4xl font-bold gradient-text mb-8">
              How Krishify Empowers Farmers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="space-y-4">
                <TrendingUp className="w-12 h-12 text-neon mx-auto md:mx-0" />
                <h3 className="font-heading text-xl font-bold text-foreground">AI-Powered Insights</h3>
                <p className="text-muted-foreground">
                  Get real-time price predictions, demand forecasts, and personalized 
                  recommendations based on your crop type and local market conditions.
                </p>
              </div>
              <div className="space-y-4">
                <Shield className="w-12 h-12 text-neon mx-auto md:mx-0" />
                <h3 className="font-heading text-xl font-bold text-foreground">Transparent Trading</h3>
                <p className="text-muted-foreground">
                  Direct access to buyers with transparent pricing, secure payments, 
                  and no middleman exploitation. Fair trade for every farmer.
                </p>
              </div>
              <div className="space-y-4">
                <Users className="w-12 h-12 text-neon mx-auto md:mx-0" />
                <h3 className="font-heading text-xl font-bold text-foreground">Community Support</h3>
                <p className="text-muted-foreground">
                  Connect with fellow farmers, share equipment, access expert advice, 
                  and build a network that supports your farming journey.
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-4 lg:px-8 pb-20">
        <div className="container mx-auto">
          <GlassCard className="p-12 text-center neon-glow">
            <h2 className="font-heading text-4xl font-bold gradient-text mb-6">
              Ready to Join the Revolution?
            </h2>
            <p className="text-xl text-foreground mb-8 max-w-2xl mx-auto">
              Experience the future of farming today. Join thousands of farmers 
              who are already increasing their profits with Krishify.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                onClick={() => navigate("/auth")}
                className="bg-gradient-to-r from-neon to-primary text-black hover:shadow-neon text-lg px-10 py-4 h-auto font-bold transition-all duration-300 hover:scale-105"
              >
                Start Your Journey
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => navigate("/contact")}
                className="text-lg px-10 py-4 h-auto border-2 border-neon/30 text-neon hover:bg-neon/10 hover:border-neon transition-all duration-300"
              >
                Get in Touch
              </Button>
            </div>
          </GlassCard>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
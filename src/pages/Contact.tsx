import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { GlassCard } from "@/components/GlassCard";
import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "support@krishify.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 98765 43210",
      description: "Mon-Fri from 8am to 5pm"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "Bangalore, Karnataka",
      description: "Come say hello at our office"
    },
    {
      icon: Clock,
      title: "Support Hours",
      value: "24/7 AI Support",
      description: "Get help whenever you need it"
    }
  ];

  return (
    <div className="min-h-screen agricultural-bg">
      <Navigation />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 px-4 lg:px-8">
        <div className="container mx-auto text-center space-y-8">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-neon to-primary neon-glow animate-float">
              <MessageCircle className="w-10 h-10 text-black" />
            </div>
          </div>
          
          <h1 className="font-heading text-5xl lg:text-6xl font-bold gradient-text mb-6">
            Get in Touch
          </h1>
          <p className="font-body text-xl lg:text-2xl text-foreground max-w-4xl mx-auto leading-relaxed">
            Have questions? We're here to help. Reach out to our team and we'll 
            get back to you as soon as possible.
          </p>
        </div>
      </div>

      {/* Contact Form & Info */}
      <div className="px-4 lg:px-8 pb-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <GlassCard className="p-8 neon-glow">
              <h2 className="font-heading text-3xl font-bold gradient-text mb-8">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="bg-glass-dark border-neon/30 text-foreground placeholder:text-muted-foreground focus:border-neon"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    className="bg-glass-dark border-neon/30 text-foreground placeholder:text-muted-foreground focus:border-neon"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us how we can help you..."
                    rows={6}
                    className="bg-glass-dark border-neon/30 text-foreground placeholder:text-muted-foreground focus:border-neon resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-neon to-primary text-black hover:shadow-neon text-lg py-4 h-auto font-bold transition-all duration-300 hover:scale-105"
                >
                  Send Message
                  <Send className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </GlassCard>

            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="font-heading text-3xl font-bold gradient-text mb-8">
                Contact Information
              </h2>
              
              {contactInfo.map((info, index) => (
                <GlassCard 
                  key={info.title} 
                  className="p-6 group hover:neon-glow transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon/20 to-primary/20 flex items-center justify-center group-hover:shadow-neon transition-all duration-300">
                      <info.icon className="w-6 h-6 text-neon group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-lg font-bold mb-1 text-foreground group-hover:text-neon transition-colors duration-300">
                        {info.title}
                      </h3>
                      <p className="text-neon font-semibold mb-1">{info.value}</p>
                      <p className="text-muted-foreground text-sm">{info.description}</p>
                    </div>
                  </div>
                </GlassCard>
              ))}

              {/* Map Placeholder */}
              <GlassCard className="p-6 neon-glow">
                <h3 className="font-heading text-lg font-bold mb-4 text-foreground">Our Location</h3>
                <div className="w-full h-48 bg-glass-darker rounded-lg flex items-center justify-center border border-neon/20">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-neon mx-auto mb-2" />
                    <p className="text-muted-foreground">Interactive Map</p>
                    <p className="text-sm text-muted-foreground">Bangalore, Karnataka, India</p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="px-4 lg:px-8 pb-20">
        <div className="container mx-auto">
          <GlassCard className="p-12 text-center neon-glow">
            <h2 className="font-heading text-4xl font-bold gradient-text mb-8">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <h3 className="font-heading text-xl font-bold text-foreground">How does AI price prediction work?</h3>
                <p className="text-muted-foreground">
                  Our AI analyzes market trends, weather patterns, demand-supply data, and historical prices 
                  to provide accurate price forecasts for your crops.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-heading text-xl font-bold text-foreground">Is Krishify free to use?</h3>
                <p className="text-muted-foreground">
                  Yes! Basic features are completely free. Premium AI insights and advanced tools 
                  are available with our subscription plans.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-heading text-xl font-bold text-foreground">How do I list my crops for sale?</h3>
                <p className="text-muted-foreground">
                  Simply create an account, go to your dashboard, and click "List Crops". 
                  Add photos, set your price, and connect with buyers instantly.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-heading text-xl font-bold text-foreground">What languages does Krishify support?</h3>
                <p className="text-muted-foreground">
                  We support multiple Indian languages including Hindi, Kannada, Tamil, Telugu, 
                  and more to make farming accessible for everyone.
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
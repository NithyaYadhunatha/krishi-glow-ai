import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/GlassCard";
import { Navigation } from "@/components/Navigation";
import { ChatBot } from "@/components/ChatBot";
import { 
  PlusCircle, 
  BarChart3, 
  Users, 
  Sprout, 
  Bot,
  TrendingUp,
  Calendar,
  Bell
} from "lucide-react";
import agriculturalBg from "@/assets/agricultural-background.jpg";

const Dashboard = () => {
  const quickStats = [
    { label: "Active Listings", value: "12", icon: Sprout, trend: "+3" },
    { label: "Total Sales", value: "₹24,560", icon: TrendingUp, trend: "+12%" },
    { label: "Market Price", value: "₹18/kg", icon: BarChart3, trend: "+5%" },
    { label: "Co-Farmers", value: "128", icon: Users, trend: "+8" },
  ];

  const recentActivities = [
    { action: "New order received", time: "2 hours ago", type: "order" },
    { action: "Price alert: Tomatoes up 15%", time: "4 hours ago", type: "alert" },
    { action: "Equipment shared with Ram", time: "1 day ago", type: "share" },
    { action: "AI recommendation: Plant season", time: "2 days ago", type: "ai" },
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
          {/* Welcome Section */}
          <div className="mb-8 animate-fade-in">
            <GlassCard className="text-center">
              <h1 className="font-heading text-4xl font-bold mb-4">
                Welcome to Krishify
              </h1>
              <p className="font-body text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Your AI-powered agriculture platform for transparent trading, smart insights, 
                and collaborative farming success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-primary hover:bg-primary-glow shadow-glow">
                  <PlusCircle className="w-5 h-5 mr-2" />
                  List Your Crops
                </Button>
                <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                  <Bot className="w-5 h-5 mr-2" />
                  AI Assistant
                </Button>
              </div>
            </GlassCard>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {quickStats.map((stat, index) => (
              <GlassCard key={stat.label} className="text-center animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20 mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-1">{stat.value}</h3>
                <p className="font-body text-sm text-muted-foreground mb-2">{stat.label}</p>
                <span className="text-secondary text-sm font-medium">{stat.trend}</span>
              </GlassCard>
            ))}
          </div>

          {/* Main Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <GlassCard>
              <h2 className="font-heading text-2xl font-semibold mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button className="h-20 flex-col gap-2">
                  <Sprout className="w-6 h-6" />
                  <span>List Crops</span>
                </Button>
                <Button variant="outline" className="h-20 flex-col gap-2">
                  <PlusCircle className="w-6 h-6" />
                  <span>Add Equipment</span>
                </Button>
                <Button variant="outline" className="h-20 flex-col gap-2">
                  <BarChart3 className="w-6 h-6" />
                  <span>View Analytics</span>
                </Button>
                <Button variant="outline" className="h-20 flex-col gap-2">
                  <Users className="w-6 h-6" />
                  <span>Find Co-Farmers</span>
                </Button>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-heading text-2xl font-semibold">Recent Activity</h2>
                <Bell className="w-5 h-5 text-muted-foreground" />
              </div>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-glass-subtle">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
                    <div className="flex-1">
                      <p className="font-body text-sm font-medium">{activity.action}</p>
                      <p className="font-body text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* AI Features Preview */}
          <GlassCard className="text-center">
            <h2 className="font-heading text-3xl font-bold mb-4">AI-Powered Agriculture</h2>
            <p className="font-body text-muted-foreground mb-6 max-w-3xl mx-auto">
              Leverage cutting-edge artificial intelligence for price recommendations, 
              demand forecasting, crop health analysis, and smart farming insights.
            </p>
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary-glow text-secondary-foreground shadow-glow"
            >
              <Bot className="w-5 h-5 mr-2" />
              Explore Co-Farmer AI
            </Button>
          </GlassCard>
        </div>
      </main>

      <ChatBot />
    </div>
  );
};

export default Dashboard;
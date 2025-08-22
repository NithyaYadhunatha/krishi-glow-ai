import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GlassCard } from "@/components/GlassCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Leaf, Mail, Lock, User, Chrome } from "lucide-react";
import { useNavigate } from "react-router-dom";
import agriculturalBg from "@/assets/agricultural-background.jpg";

const Auth = () => {
  const [userRole, setUserRole] = useState("farmer");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Mock authentication - redirect to dashboard
    navigate("/dashboard");
  };

  const handleSignup = () => {
    // Mock registration - redirect to dashboard
    navigate("/dashboard");
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 agricultural-bg"
      style={{
        backgroundImage: `linear-gradient(180deg, hsl(0 0% 0% / 0.6), hsl(114 40% 3% / 0.8)), url(${agriculturalBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="w-full max-w-md space-y-6 animate-fade-in">
        {/* Logo and Welcome */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-primary glow-primary animate-float">
              <Leaf className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
          <div>
            <h1 className="font-heading text-4xl font-bold">Krishify</h1>
            <p className="font-body text-muted-foreground">Every Crop Counts</p>
          </div>
        </div>

        {/* Auth Forms */}
        <GlassCard className="p-6 glow">
          <Tabs defaultValue="login" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 bg-glass-subtle">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>

            <TabsContent value="login" className="space-y-4">
              <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-body">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="font-body">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary-glow shadow-glow">
                  Sign In
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-border" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-glass-dark px-2 text-muted-foreground">Or continue with</span>
                  </div>
                </div>

                <Button variant="outline" type="button" className="w-full">
                  <Chrome className="w-4 h-4 mr-2" />
                  Google
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="signup" className="space-y-4">
              <form onSubmit={(e) => { e.preventDefault(); handleSignup(); }} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-body">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signup-email" className="font-body">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="Enter your email"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signup-password" className="font-body">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="signup-password"
                      type="password"
                      placeholder="Create a password"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label className="font-body">I am a:</Label>
                  <RadioGroup value={userRole} onValueChange={setUserRole}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="farmer" id="farmer" />
                      <Label htmlFor="farmer" className="font-body text-sm">Farmer</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="wholesaler" id="wholesaler" />
                      <Label htmlFor="wholesaler" className="font-body text-sm">Wholesaler</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="customer" id="customer" />
                      <Label htmlFor="customer" className="font-body text-sm">Customer</Label>
                    </div>
                  </RadioGroup>
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary-glow shadow-glow">
                  Create Account
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-border" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-glass-dark px-2 text-muted-foreground">Or continue with</span>
                  </div>
                </div>

                <Button variant="outline" type="button" className="w-full">
                  <Chrome className="w-4 h-4 mr-2" />
                  Google
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </GlassCard>

        {/* Footer */}
        <div className="text-center">
          <p className="font-body text-sm text-muted-foreground">
            By signing up, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
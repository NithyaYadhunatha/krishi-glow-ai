import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { GlassCard } from "./GlassCard";

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      // Mock response for demo
      setMessage("");
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-secondary hover:bg-secondary-glow shadow-glow-strong animate-glow-pulse z-50"
        size="sm"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-secondary-foreground" />
        ) : (
          <MessageCircle className="w-6 h-6 text-secondary-foreground" />
        )}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 z-50 animate-slide-up">
          <GlassCard className="h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-heading text-lg font-semibold">AI Assistant</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 p-0"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto mb-4 space-y-3">
              <div className="p-3 rounded-lg bg-glass-subtle">
                <p className="text-sm font-body">
                  Hello! I'm your agricultural AI assistant. How can I help you today?
                </p>
              </div>
            </div>

            <div className="flex space-x-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1"
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
              />
              <Button onClick={handleSend} size="sm" className="px-3">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </GlassCard>
        </div>
      )}
    </>
  );
};
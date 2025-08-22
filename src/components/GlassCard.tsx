import { ReactNode, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export const GlassCard = ({ children, className, hover = true, glow = false, ...props }: GlassCardProps) => {
  return (
    <div 
      className={cn(
        "glass-card p-6",
        hover && "glow-hover",
        glow && "glow-primary",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
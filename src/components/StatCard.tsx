import { ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface StatCardProps {
  stat: string;
  label: string;
  description?: string;
  icon?: ReactNode;
  variant?: "default" | "gold" | "red";
}

const StatCard = ({ stat, label, description, icon, variant = "default" }: StatCardProps) => {
  const variantStyles = {
    default: "border-border hover:border-primary/50",
    gold: "border-primary/30 hover:border-primary",
    red: "border-accent/30 hover:border-accent",
  };

  return (
    <Card 
      className={`
        p-6 bg-card/50 backdrop-blur-sm border-2 transition-all duration-500 
        hover:scale-105 hover:shadow-lg group
        ${variantStyles[variant]}
      `}
    >
      <div className="space-y-3 text-center">
        {icon && (
          <div className="flex justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
            {icon}
          </div>
        )}
        <div className={`text-5xl font-bold font-serif ${
          variant === "gold" ? "text-primary" : 
          variant === "red" ? "text-accent" : 
          "text-foreground"
        }`}>
          {stat}
        </div>
        <div className="text-lg font-semibold text-foreground">
          {label}
        </div>
        {description && (
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </Card>
  );
};

export default StatCard;

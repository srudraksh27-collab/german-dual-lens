import StatCard from "./StatCard";
import { Home, TrendingUp, Users } from "lucide-react";

const HousingSection = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6">
            The Housing <span className="text-accent">Strain</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Rising costs and limited availability challenge millions of Germans
          </p>
        </div>

        {/* Animated Progress Bar */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border">
            <div className="mb-4 flex justify-between items-center">
              <span className="text-lg font-semibold">Rental Population</span>
              <span className="text-3xl font-bold text-primary">52.4%</span>
            </div>
            <div className="h-4 bg-secondary rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary to-primary/70 animate-slide-right"
                style={{ width: "52.4%" }}
              />
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Over half of Germans rent their homes, facing increasing pressure from rising costs
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
          <StatCard 
            stat="13%"
            label="High Burden"
            description="Spend over 40% of income on housing"
            icon={<TrendingUp className="h-8 w-8 text-accent" />}
            variant="red"
          />
          <StatCard 
            stat="11%"
            label="Overcrowding"
            description="Living in overcrowded conditions"
            icon={<Users className="h-8 w-8 text-accent" />}
            variant="red"
          />
          <StatCard 
            stat="52.4%"
            label="Renters"
            description="Population renting vs. owning"
            icon={<Home className="h-8 w-8 text-accent" />}
            variant="red"
          />
        </div>
      </div>
    </section>
  );
};

export default HousingSection;

import urbanRuralImage from "@/assets/urban-rural.jpg";
import StatCard from "./StatCard";
import { Building2, TreePine } from "lucide-react";

const SplitSection = () => {
  return (
    <section id="urban-rural" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6">
            Urban Pulse <span className="text-primary">vs</span> Rural Peace
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Germany's dual reality unfolds between bustling cities and serene countryside
          </p>
        </div>

        {/* Split Image */}
        <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden mb-16 shadow-2xl">
          <img 
            src={urbanRuralImage} 
            alt="Urban vs Rural Germany"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
          <StatCard 
            stat="77%"
            label="Urban Population"
            description="Live in metropolitan areas"
            icon={<Building2 className="h-8 w-8 text-primary" />}
            variant="gold"
          />
          <StatCard 
            stat="44%"
            label="Rural Preference"
            description="Prefer countryside living"
            icon={<TreePine className="h-8 w-8 text-primary" />}
            variant="gold"
          />
          <StatCard 
            stat="3.6M"
            label="Berlin"
            description="Population of the capital"
          />
          <StatCard 
            stat="1.9M"
            label="Hamburg"
            description="Major port city"
          />
        </div>
      </div>
    </section>
  );
};

export default SplitSection;

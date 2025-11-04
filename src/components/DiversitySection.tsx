import diversityImage from "@/assets/diversity.jpg";
import StatCard from "./StatCard";
import { Globe, Heart, Users } from "lucide-react";

const DiversitySection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6">
            Integration & <span className="text-primary">Diversity</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A nation shaped by countless cultures, united in diversity
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden mb-16 shadow-2xl group">
          <img 
            src={diversityImage} 
            alt="Diverse faces of Germany"
            className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 text-center">
            <p className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Together we are stronger
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
          <StatCard 
            stat="1 in 3"
            label="Migrant Background"
            description="Of Germany's population has migration roots"
            icon={<Globe className="h-8 w-8 text-primary" />}
            variant="gold"
          />
          <StatCard 
            stat="190+"
            label="Nationalities"
            description="Contributing to German society"
            icon={<Users className="h-8 w-8 text-primary" />}
            variant="gold"
          />
          <StatCard 
            stat="Unity"
            label="Shared Values"
            description="Democracy, freedom, and respect"
            icon={<Heart className="h-8 w-8 text-primary" />}
            variant="gold"
          />
        </div>
      </div>
    </section>
  );
};

export default DiversitySection;

import youthImage from "@/assets/youth.jpg";
import StatCard from "./StatCard";
import { Lightbulb, Heart, Vote } from "lucide-react";

const YouthSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6">
            Youth & The <span className="text-primary">Future</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A generation rising with hope, energy, and determination
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden mb-16 shadow-2xl group">
          <img 
            src={youthImage} 
            alt="Youth activism in Germany"
            className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 animate-fade-in">
          <StatCard 
            stat="61%"
            label="Optimistic"
            description="About their personal future"
            icon={<Lightbulb className="h-8 w-8 text-primary" />}
            variant="gold"
          />
          <StatCard 
            stat="68%"
            label="Democracy"
            description="Strong support for democratic values"
            icon={<Vote className="h-8 w-8 text-primary" />}
            variant="gold"
          />
          <StatCard 
            stat="75%"
            label="Climate Action"
            description="Prioritize environmental issues"
            icon={<Heart className="h-8 w-8 text-primary" />}
            variant="gold"
          />
        </div>

        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
            Germany's youth are not just inheriting the future — they're actively shaping it through 
            activism, innovation, and unwavering commitment to social justice and environmental sustainability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default YouthSection;

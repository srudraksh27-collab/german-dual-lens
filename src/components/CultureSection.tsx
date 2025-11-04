import cultureImage from "@/assets/culture.jpg";
import { Beer, Music, Mountain } from "lucide-react";

const CultureSection = () => {
  const traditions = [
    {
      icon: <Beer className="h-10 w-10" />,
      title: "Beer Culture",
      description: "Historic breweries and Biergärten unite communities"
    },
    {
      icon: <Mountain className="h-10 w-10" />,
      title: "Outdoor Life",
      description: "Hiking trails and nature connect people to the land"
    },
    {
      icon: <Music className="h-10 w-10" />,
      title: "Musical Heritage",
      description: "From classical composers to modern electronic scenes"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6">
            Culture & <span className="text-primary">Lifestyle</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-8 text-2xl md:text-3xl font-light text-muted-foreground mb-8">
            <span className="hover:text-primary transition-colors">Punctuality.</span>
            <span className="hover:text-primary transition-colors">Order.</span>
            <span className="hover:text-primary transition-colors">Fellowship.</span>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden mb-16 shadow-2xl group">
          <img 
            src={cultureImage} 
            alt="German Culture and Traditions"
            className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {traditions.map((tradition, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-xl bg-card/30 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex justify-center mb-4 text-primary">
                {tradition.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{tradition.title}</h3>
              <p className="text-muted-foreground">{tradition.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CultureSection;

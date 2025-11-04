import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const ConclusionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-slow">
          <h2 className="font-serif text-4xl md:text-7xl font-bold leading-tight">
            Germany's Story <span className="text-primary">Continues</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Strong, diverse, and striving for balance
          </p>

          <div className="pt-8 space-y-6">
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              From bustling cities to peaceful countryside, from challenges to triumphs, 
              Germany navigates its dual reality with resilience and hope. The journey continues, 
              shaped by every voice, every struggle, and every act of courage.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full transition-all hover:scale-105"
              >
                Discover More
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full transition-all hover:scale-105"
              >
                Learn How You Can Help
              </Button>
            </div>
          </div>

          <div className="pt-12 border-t border-border mt-16">
            <p className="text-sm text-muted-foreground">
              A modern exploration of everyday life and social issues in Germany
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConclusionSection;

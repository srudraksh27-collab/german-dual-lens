import StatCard from "./StatCard";
import { AlertTriangle, Shield, Scale } from "lucide-react";

const SocialTensionsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6">
            Social Tensions & <span className="text-accent">Discrimination</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Confronting the challenges that test Germany's commitment to equality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 animate-fade-in">
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-accent/20">
            <div className="flex items-center gap-4 mb-6">
              <AlertTriangle className="h-12 w-12 text-accent" />
              <div>
                <div className="text-4xl font-bold text-accent">58,000</div>
                <div className="text-sm text-muted-foreground">Reported hate crimes in 2023</div>
              </div>
            </div>
            <p className="text-foreground/80">
              A concerning rise in discrimination cases challenges Germany's inclusive values
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-primary/20">
            <div className="flex items-center gap-4 mb-6">
              <Shield className="h-12 w-12 text-primary" />
              <div>
                <div className="text-4xl font-bold text-primary">Action</div>
                <div className="text-sm text-muted-foreground">Government response programs</div>
              </div>
            </div>
            <p className="text-foreground/80">
              Initiatives promoting tolerance and protecting vulnerable communities
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border animate-fade-in">
          <div className="flex items-start gap-4">
            <Scale className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-3">The Reality Check</h3>
              <p className="text-muted-foreground leading-relaxed">
                While Germany leads in many social policies, discrimination remains a persistent challenge. 
                The gap between legislative action and lived experience reveals the ongoing work needed 
                to achieve true social equality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialTensionsSection;

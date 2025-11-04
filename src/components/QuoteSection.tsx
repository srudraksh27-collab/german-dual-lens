import { Quote } from "lucide-react";

interface QuoteSectionProps {
  quotes: string[];
  title: string;
  variant?: "default" | "dark";
}

const QuoteSection = ({ quotes, title, variant = "default" }: QuoteSectionProps) => {
  return (
    <section className={`py-20 ${variant === "dark" ? "bg-accent/10" : "bg-background"}`}>
      <div className="container mx-auto px-6">
        <h2 className="font-serif text-4xl md:text-6xl font-bold text-center mb-16 animate-fade-in">
          {title}
        </h2>
        
        <div className="max-w-5xl mx-auto space-y-12">
          {quotes.map((quote, index) => (
            <div 
              key={index}
              className="relative p-8 md:p-12 rounded-2xl bg-card/30 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-500 animate-fade-in group"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <Quote className="absolute top-4 left-4 h-12 w-12 text-primary/20 group-hover:text-primary/40 transition-colors" />
              <blockquote className="text-2xl md:text-3xl font-light leading-relaxed text-foreground/90 italic pl-8">
                "{quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;

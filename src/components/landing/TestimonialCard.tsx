import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  company: string;
  text: string;
  rating: number;
}

const TestimonialCard = ({ name, company, text, rating }: TestimonialCardProps) => {
  return (
    <article className="p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/20 transition-colors">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "fill-yellow-400 text-yellow-400" : "text-muted"
            }`}
          />
        ))}
      </div>
      
      {/* Quote */}
      <blockquote className="text-foreground leading-relaxed mb-6">
        "{text}"
      </blockquote>
      
      {/* Author */}
      <footer className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
          {name.split(" ").map((n) => n[0]).join("")}
        </div>
        <div>
          <cite className="not-italic font-semibold text-foreground block">
            {name}
          </cite>
          <span className="text-sm text-muted-foreground">{company}</span>
        </div>
      </footer>
    </article>
  );
};

export default TestimonialCard;

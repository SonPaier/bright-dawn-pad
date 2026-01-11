import { LucideIcon } from "lucide-react";

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const BenefitCard = ({ icon: Icon, title, description }: BenefitCardProps) => {
  return (
    <article
      className="group relative p-6 rounded-2xl border bg-card border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
      >
        <Icon className="w-6 h-6" />
      </div>
      
      <h3 className="text-lg font-semibold text-foreground mb-2">
        {title}
      </h3>
      
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </article>
  );
};

export default BenefitCard;

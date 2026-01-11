import {
  UserX,
  PhoneOff,
  BookOpen,
  Users,
  FileText,
  Smartphone,
  LucideIcon,
} from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import BenefitCard from "./BenefitCard";

const iconMap: Record<string, LucideIcon> = {
  UserX,
  PhoneOff,
  BookOpen,
  Users,
  FileText,
  Smartphone,
};

const Benefits = () => {
  const { t } = useTranslation();
  const benefits = t("benefits");

  return (
    <section id="benefits" className="py-20 md:py-32">
      <div className="container px-4">
        <header className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {benefits.sectionTitle}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {benefits.sectionSubtitle}
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {benefits.items.map((benefit, index) => {
            const Icon = iconMap[benefit.icon] || Smartphone;
            return (
              <BenefitCard
                key={index}
                icon={Icon}
                title={benefit.title}
                description={benefit.description}
              />
            );
          })}
        </div>

        <p className="text-center mt-10 text-lg text-muted-foreground font-medium">
          {benefits.moreText}
        </p>
      </div>
    </section>
  );
};

export default Benefits;

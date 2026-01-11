import { Check } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import PricingCalculator from "./PricingCalculator";

interface PricingProps {
  onScrollToContact: () => void;
}

const Pricing = ({ onScrollToContact }: PricingProps) => {
  const { t } = useTranslation();
  const pricing = t("pricing");

  return (
    <section id="pricing" className="py-20 md:py-32 bg-section-alt">
      <div className="container px-4">
        <header className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {pricing.sectionTitle}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {pricing.sectionSubtitle}
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto items-start">
          {/* Calculator */}
          <PricingCalculator onScrollToContact={onScrollToContact} />

          {/* Additional modules */}
          <div className="bg-card rounded-3xl border border-border p-6 md:p-10">
            <h3 className="text-xl font-bold text-foreground mb-2">
              {pricing.additionalModules.title}
            </h3>
            <p className="text-muted-foreground mb-6">
              {pricing.additionalModules.subtitle}
            </p>

            <ul className="space-y-4">
              {pricing.additionalModules.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 rounded-xl bg-muted/50 text-center">
              <p className="text-sm text-muted-foreground">
                Potrzebujesz więcej? Skontaktuj się z nami, aby otrzymać indywidualną wycenę.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

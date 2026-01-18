import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import PricingCard from "./PricingCard";

interface PricingProps {
  onScrollToContact: () => void;
}

const myjniaFeatures = [
  { text: "Główny kalendarz" },
  { text: "Rezerwacje online 24/7" },
  {
    text: "100 powiadomień SMS",
    tooltip:
      "Sam decyduj, o czym chcesz powiadamiać swoich klientów. Po przekroczeniu 100 SMSów, kolejne podlegają opłacie (13 gr netto / SMS)",
  },
  { text: "Zarządzanie relacjami z klientami" },
  { text: "Zarządzanie zespołem" },
  {
    text: "Obsługa aut z placu",
    tooltip:
      "Klient może pozostawić Ci pojazd przed halą - wprowadź go do systemu, ale zajmij się nim w dogodnym dla siebie czasie",
  },
  { text: "Widok dla pracowników" },
  { text: "Analityka i raporty" },
];

const detailingFeatures = [
  { text: "Tworzenie i zarządzanie ofertami detailingu" },
  { text: "Protokół przyjęcia pojazdu" },
  { text: "Wsparcie sprzedaży" },
  { text: "Automatyczne przypomnienia o przeglądach serwisowych" },
];

const Pricing = ({ onScrollToContact }: PricingProps) => {
  const { t } = useTranslation();
  const pricing = t("pricing");
  const [isYearly, setIsYearly] = useState(false);

  const scrollToHero = () => {
    const hero = document.querySelector("#hero");
    hero?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-20 md:py-32 bg-section-alt">
      <div className="container px-4">
        <header className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {pricing.sectionTitle}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {pricing.sectionSubtitle}
          </p>
        </header>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-10 md:mb-14">
          <Label
            htmlFor="billing-toggle"
            className={`cursor-pointer transition-colors text-base ${
              !isYearly ? "text-foreground font-medium" : "text-muted-foreground"
            }`}
          >
            Miesięcznie
          </Label>
          <Switch
            id="billing-toggle"
            checked={isYearly}
            onCheckedChange={setIsYearly}
          />
          <div className="flex items-center gap-2">
            <Label
              htmlFor="billing-toggle"
              className={`cursor-pointer transition-colors text-base ${
                isYearly ? "text-foreground font-medium" : "text-muted-foreground"
              }`}
            >
              Rocznie
            </Label>
            <span className="text-xs font-semibold px-2 py-1 rounded-full bg-green-500/10 text-green-600">
              20% taniej
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto items-stretch">
          {/* Myjnia Package */}
          <PricingCard
            title="Myjnia"
            firstStationPrice={129}
            additionalStationPrice={49}
            features={myjniaFeatures}
            isYearly={isYearly}
            onScrollToHero={scrollToHero}
          />

          {/* Detailing Package */}
          <PricingCard
            title="Detailing"
            firstStationPrice={199}
            additionalStationPrice={49}
            features={detailingFeatures}
            includesPackage="Myjnia"
            isYearly={isYearly}
            onScrollToHero={scrollToHero}
            isHighlighted
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;

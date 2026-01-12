import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { Stepper } from "@/components/ui/stepper";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Check, HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface PricingCalculatorProps {
  onScrollToContact: () => void;
}

const PricingCalculator = ({ onScrollToContact }: PricingCalculatorProps) => {
  const { t } = useTranslation();
  const pricing = t("pricing");
  const [stations, setStations] = useState(1);
  const [isYearly, setIsYearly] = useState(false);

  const basePrice = pricing.pricePerStation;
  const discount = 0.2; // 20%
  
  const monthlyPrice = basePrice * stations;
  const yearlyMonthlyPrice = basePrice * (1 - discount) * stations;
  const yearlyTotalPrice = yearlyMonthlyPrice * 12;

  const displayPrice = isYearly ? yearlyMonthlyPrice : monthlyPrice;
  const pricePerStation = isYearly ? basePrice * (1 - discount) : basePrice;

  return (
    <div className="bg-card rounded-3xl border border-border p-6 md:p-10 shadow-xl max-w-lg mx-auto">
      {/* Yearly toggle - moved to top */}
      <div className="flex items-center justify-center gap-4 mb-8 p-4 rounded-xl bg-muted/50">
        <Label
          htmlFor="billing-toggle"
          className={`cursor-pointer transition-colors ${!isYearly ? "text-foreground font-medium" : "text-muted-foreground"}`}
        >
          {pricing.monthly}
        </Label>
        <Switch
          id="billing-toggle"
          checked={isYearly}
          onCheckedChange={setIsYearly}
        />
        <div className="flex items-center gap-2">
          <Label
            htmlFor="billing-toggle"
            className={`cursor-pointer transition-colors ${isYearly ? "text-foreground font-medium" : "text-muted-foreground"}`}
          >
            {pricing.yearly}
          </Label>
          <span className="text-xs font-semibold px-2 py-1 rounded-full bg-green-500/10 text-green-600">
            {pricing.yearlyDiscount}
          </span>
        </div>
      </div>

      {/* Price display */}
      <div className="text-center mb-8">
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-5xl md:text-6xl font-bold text-foreground">
            {pricePerStation.toFixed(0)}
          </span>
          <span className="text-2xl text-muted-foreground">{pricing.currency}</span>
        </div>
        <p className="text-muted-foreground mt-1">
          {pricing.netPrice} {pricing.perStation} / {isYearly ? pricing.perYear.split(" ")[0].toLowerCase() : pricing.perMonth.split(" ")[0].toLowerCase()}
        </p>
        
        {/* Included features */}
        <TooltipProvider delayDuration={100}>
          <div className="mt-4 text-left inline-block">
            <p className="font-semibold text-foreground text-sm mb-2">Zawarte w cenie:</p>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-green-600" />
                </div>
                <span className="text-sm text-muted-foreground">Główny kalendarz</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-green-600" />
                </div>
                <span className="text-sm text-muted-foreground">Rezerwacje online 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-green-600" />
                </div>
                <span className="text-sm text-muted-foreground">100 powiadomień SMS</span>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <HelpCircle className="w-4 h-4 text-muted-foreground/60 cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <p>Sam decyduj, o czym chcesz powiadamiać swoich klientów. Po przekroczeniu 100 SMSów, kolejne podlegają opłacie (13 gr netto / SMS)</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-green-600" />
                </div>
                <span className="text-sm text-muted-foreground">Obsługa aut z placu</span>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <HelpCircle className="w-4 h-4 text-muted-foreground/60 cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <p>Klient może pozostawić Ci pojazd przed halą - wprowadź go do systemu, ale zajmij się nim w dogodnym dla siebie czasie</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-green-600" />
                </div>
                <span className="text-sm text-muted-foreground">Podstawowa analityka</span>
              </div>
            </div>
          </div>
        </TooltipProvider>
      </div>

      {/* Stations stepper */}
      <div className="mb-8">
        <Label className="block text-center text-sm text-muted-foreground mb-3">
          Liczba stanowisk dla pojazdów w Twojej firmie
        </Label>
        <div className="flex justify-center">
          <Stepper
            value={stations}
            onChange={setStations}
            min={1}
            max={20}
          />
        </div>
      </div>

      {/* Total */}
      <div className="text-center p-4 rounded-xl bg-primary/5 border border-primary/10 mb-6">
        <p className="text-sm text-muted-foreground mb-1">
          {isYearly ? pricing.totalYearly : pricing.totalMonthly}
        </p>
        <p className="text-2xl font-bold text-foreground">
          {isYearly
            ? `${yearlyTotalPrice.toFixed(0)} ${pricing.currency}`
            : `${monthlyPrice.toFixed(0)} ${pricing.currency}`}
          <span className="text-base font-normal text-muted-foreground ml-1">
            {pricing.netPrice}
          </span>
        </p>
      </div>

      {/* CTA */}
      <button
        onClick={onScrollToContact}
        className="w-full h-14 text-base font-semibold rounded-xl bg-gradient-to-r from-primary to-sky-500 text-primary-foreground hover:from-primary/90 hover:to-sky-500/90 shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
      >
        {pricing.cta}
      </button>
    </div>
  );
};

export default PricingCalculator;

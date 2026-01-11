import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { Stepper } from "@/components/ui/stepper";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

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
      </div>

      {/* Yearly toggle */}
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
          {isYearly && (
            <span className="text-xs font-semibold px-2 py-1 rounded-full bg-green-500/10 text-green-600">
              {pricing.yearlyDiscount}
            </span>
          )}
        </div>
      </div>

      {/* Stations stepper */}
      <div className="mb-8">
        <Label className="block text-center text-sm text-muted-foreground mb-3">
          Liczba stanowisk
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



## Plan: Dodanie sekcji "Pomagamy Ci wystartować" pod cennikiem

### Zakres zmian

Dodam nową sekcję informacyjną bezpośrednio pod kartami cennika w komponencie `Pricing.tsx`. Sekcja będzie zawierać ikonę rakiety i tekst o pomocy w konfiguracji.

### Szczegóły implementacji

**Plik:** `src/components/landing/Pricing.tsx`

1. **Import ikony** - Dodam import `Rocket` z `lucide-react`

2. **Nowa sekcja** - Pod siatką z kartami cennika (`grid lg:grid-cols-2`) dodam:
   - Kontener z subtelnym tłem i zaokrąglonymi rogami
   - Ikona rakiety w kolorze primary
   - Nagłówek: **"Pomagamy Ci wystartować"**
   - Opis: *"Pomagamy ustawić aplikację dokładnie pod Twoje usługi i cennik. Przenosimy też Twoją bazę klientów – z Excela, zeszytu, czy dowolnego innego systemu, którego używasz. Bez stresu, bez dodatkowych opłat."*

### Wygląd sekcji

```text
┌─────────────────────────────────────────────────────────┐
│                                                         │
│              🚀 Pomagamy Ci wystartować                 │
│                                                         │
│   Pomagamy ustawić aplikację dokładnie pod Twoje        │
│   usługi i cennik. Przenosimy też Twoją bazę klientów   │
│   – z Excela, zeszytu, czy dowolnego innego systemu,    │
│   którego używasz. Bez stresu, bez dodatkowych opłat.   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Opcjonalnie: Tłumaczenia

Tekst można również przenieść do `src/locales/pl.json` dla spójności z resztą strony, ale na początek dodam go bezpośrednio w komponencie, a w razie potrzeby przeniesiemy później.


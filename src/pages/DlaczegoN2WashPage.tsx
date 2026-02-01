import { useEffect } from "react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import {
  Users,
  Target,
  Sparkles,
  Zap,
  Phone,
  Mail,
  Check,
  X,
  Minus,
  ArrowRight,
} from "lucide-react";

const DlaczegoN2WashPage = () => {
  useEffect(() => {
    document.title = "Dlaczego N2Wash? – System Stworzony z Doświadczonymi Detailerami";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Dlaczego warto wybrać N2Wash? Stworzony przy udziale detailerów, dedykowany dla branży automotive, prosty w użyciu, polski support. Porównaj z konkurencją."
      );
    }
  }, []);

  const differentiators = [
    {
      icon: Users,
      title: "Stworzony PRZEZ detailerów DLA detailerów",
      description:
        "Rozumiemy specyfikę branży automotive. System powstał we współpracy z doświadczonymi właścicielami myjni i studiów detailingu.",
    },
    {
      icon: Target,
      title: "Dedykowany dla Twojej branży",
      description:
        "Nie jesteśmy uniwersalnym CRM. Każda funkcja została zaprojektowana z myślą o myjniach ręcznych i studiach detailingu.",
    },
    {
      icon: Zap,
      title: "Prosty w użyciu",
      description:
        "Szkolenie trwa 30 minut. Intuicyjny interfejs sprawia, że działasz od pierwszego dnia bez czytania instrukcji.",
    },
    {
      icon: Phone,
      title: "Polski support",
      description:
        "Pomoc przez telefon i email w języku polskim. Nie zostawiamy Cię samego z problemem.",
    },
  ];

  const byDetailersFeatures = [
    {
      title: "Rozumiemy specyfikę branży",
      description:
        "Wiemy, że detailing to nie tylko mycie auta. Protokoły przyjęcia, dokumentacja stanu pojazdu, zarządzanie długimi zleceniami – to wszystko mamy.",
    },
    {
      title: "Funkcje, których naprawdę potrzebujesz",
      description:
        "Każda funkcja w N2Wash powstała na podstawie realnych potrzeb właścicieli myjni i studiów detailingu. Nic zbędnego.",
    },
    {
      title: "Bez zbędnych modułów",
      description:
        "Nie płacisz za funkcje do zarządzania hotelem czy restauracją. Płacisz tylko za to, czego używasz w swojej branży.",
    },
  ];

  const excelComparison = [
    { feature: "Rezerwacje online 24/7", n2wash: true, excel: false },
    { feature: "Automatyczne przypomnienia SMS", n2wash: true, excel: false },
    { feature: "Historia klientów i pojazdów", n2wash: true, excel: "partial" },
    { feature: "Generator profesjonalnych ofert", n2wash: true, excel: false },
    { feature: "Protokół przyjęcia ze zdjęciami", n2wash: true, excel: false },
    { feature: "Widok dla pracowników na hali", n2wash: true, excel: false },
    { feature: "Raporty i analityka", n2wash: true, excel: "partial" },
    { feature: "Dostęp z telefonu", n2wash: true, excel: "partial" },
    { feature: "Backup danych", n2wash: true, excel: false },
  ];

  const crmComparison = [
    { feature: "Protokół przyjęcia pojazdu", n2wash: true, crm: false },
    { feature: "Diagram uszkodzeń", n2wash: true, crm: false },
    { feature: "Obsługa aut z placu", n2wash: true, crm: false },
    { feature: "Widok na żywo dla hali", n2wash: true, crm: false },
    { feature: "Generator ofert detailingowych", n2wash: true, crm: false },
    { feature: "Dedykowany dla automotive", n2wash: true, crm: false },
    { feature: "Polski support telefoniczny", n2wash: true, crm: "partial" },
    { feature: "Szybkie wdrożenie (30 min)", n2wash: true, crm: false },
    { feature: "Cena dopasowana do branży", n2wash: true, crm: false },
  ];

  const renderComparisonIcon = (value: boolean | string) => {
    if (value === true) {
      return (
        <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
          <Check className="w-5 h-5 text-green-600" />
        </div>
      );
    }
    if (value === "partial") {
      return (
        <div className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center">
          <Minus className="w-5 h-5 text-yellow-600" />
        </div>
      );
    }
    return (
      <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center">
        <X className="w-5 h-5 text-red-500" />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-48 md:pb-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Dlaczego N2Wash? – System Stworzony z Doświadczonymi Detailerami
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Poznaj powody, dla których właściciele myjni i studiów detailingu wybierają właśnie nas
              </p>
            </div>
          </div>
        </section>

        {/* Differentiators Grid */}
        <section className="py-20 md:py-28 bg-section-alt">
          <div className="container px-4">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Co wyróżnia N2Wash na tle konkurencji?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Nie jesteśmy kolejnym uniwersalnym CRM. Jesteśmy systemem stworzonym specjalnie dla Twojej branży.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {differentiators.map((item, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl border border-border p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-5">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* By Detailers Section */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12 md:mb-16">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Stworzony PRZEZ detailerów DLA detailerów
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  System powstał we współpracy z właścicielami myjni i studiów detailingu z całej Polski
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {byDetailersFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-2xl border border-border p-8 hover:shadow-lg transition-shadow"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Sparkles className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Simple to Use Section */}
        <section className="py-20 md:py-28 bg-section-alt">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Prosty w użyciu
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="bg-card rounded-2xl border border-border p-8">
                  <p className="text-4xl font-bold text-primary mb-2">30 min</p>
                  <h3 className="text-lg font-bold text-foreground mb-2">Szkolenie</h3>
                  <p className="text-sm text-muted-foreground">
                    Tyle zajmuje pełne wdrożenie. Bez tygodni nauki.
                  </p>
                </div>
                <div className="bg-card rounded-2xl border border-border p-8">
                  <p className="text-4xl font-bold text-primary mb-2">0</p>
                  <h3 className="text-lg font-bold text-foreground mb-2">Instrukcji do czytania</h3>
                  <p className="text-sm text-muted-foreground">
                    Intuicyjny interfejs nie wymaga czytania dokumentacji.
                  </p>
                </div>
                <div className="bg-card rounded-2xl border border-border p-8">
                  <p className="text-4xl font-bold text-primary mb-2">1</p>
                  <h3 className="text-lg font-bold text-foreground mb-2">Dzień do startu</h3>
                  <p className="text-sm text-muted-foreground">
                    Działasz od pierwszego dnia. Bez czekania.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Polish Support Section */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Polski support
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Nie zostawiamy Cię samego z problemem. Nasz zespół wsparcia mówi po polsku 
                i rozumie specyfikę Twojej branży.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <div className="flex items-center justify-center gap-3 bg-card rounded-xl border border-border px-6 py-4">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="font-medium text-foreground">Pomoc telefoniczna</span>
                </div>
                <div className="flex items-center justify-center gap-3 bg-card rounded-xl border border-border px-6 py-4">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="font-medium text-foreground">Wsparcie email</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison: N2Wash vs Excel */}
        <section className="py-20 md:py-28 bg-section-alt">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  N2Wash vs Excel / Zeszyt
                </h2>
                <p className="text-lg text-muted-foreground">
                  Zobacz, co zyskujesz przechodząc z ręcznego zarządzania na N2Wash
                </p>
              </div>

              <div className="bg-card rounded-2xl border border-border overflow-hidden">
                <div className="grid grid-cols-3 gap-4 p-4 bg-muted/50 font-semibold text-sm">
                  <div className="text-foreground">Funkcja</div>
                  <div className="text-center text-primary">N2Wash</div>
                  <div className="text-center text-muted-foreground">Excel / Zeszyt</div>
                </div>
                {excelComparison.map((row, index) => (
                  <div
                    key={index}
                    className={`grid grid-cols-3 gap-4 p-4 items-center ${
                      index % 2 === 0 ? "bg-background" : "bg-muted/30"
                    }`}
                  >
                    <div className="text-sm text-foreground">{row.feature}</div>
                    <div className="flex justify-center">
                      {renderComparisonIcon(row.n2wash)}
                    </div>
                    <div className="flex justify-center">
                      {renderComparisonIcon(row.excel)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Comparison: N2Wash vs Universal CRM */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  N2Wash vs Uniwersalne CRM
                </h2>
                <p className="text-lg text-muted-foreground">
                  Dlaczego dedykowany system dla automotive jest lepszy niż uniwersalne rozwiązanie
                </p>
              </div>

              <div className="bg-card rounded-2xl border border-border overflow-hidden">
                <div className="grid grid-cols-3 gap-4 p-4 bg-muted/50 font-semibold text-sm">
                  <div className="text-foreground">Funkcja</div>
                  <div className="text-center text-primary">N2Wash</div>
                  <div className="text-center text-muted-foreground">Uniwersalne CRM</div>
                </div>
                {crmComparison.map((row, index) => (
                  <div
                    key={index}
                    className={`grid grid-cols-3 gap-4 p-4 items-center ${
                      index % 2 === 0 ? "bg-background" : "bg-muted/30"
                    }`}
                  >
                    <div className="text-sm text-foreground">{row.feature}</div>
                    <div className="flex justify-center">
                      {renderComparisonIcon(row.n2wash)}
                    </div>
                    <div className="flex justify-center">
                      {renderComparisonIcon(row.crm)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-primary/5 to-background">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Przekonaj się sam
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Wypróbuj N2Wash za darmo przez 7 dni. Bez karty, bez zobowiązań.
              </p>
              <a
                href="/#hero"
                className="inline-flex h-14 px-8 items-center justify-center gap-2 text-base font-semibold rounded-xl bg-gradient-to-r from-primary to-sky-500 text-primary-foreground hover:from-primary/90 hover:to-sky-500/90 shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
              >
                Umów prezentację
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DlaczegoN2WashPage;

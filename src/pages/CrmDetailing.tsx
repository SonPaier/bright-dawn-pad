import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FileText, Camera, Bell, TrendingUp, Palette, Shield, Clock, CheckCircle } from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";

const CrmDetailing = () => {
  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Oprogramowanie CRM dla studiów detailingu. Generator ofert PPF i ceramic coating, protokoły przyjęcia, przypomnienia o przeglądach. Od 199 zł/msc."
      );
    }
    document.title = "CRM dla Studia Detailingu – System Rezerwacji i Ofert Detailingowych | N2Wash";
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary/90 to-sky-900 text-white py-32 md:py-48">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-4xl leading-tight">CRM dla studia detailingu – System rezerwacji i ofert detailingowych

            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl">Oprogramowanie CRM dla studiów detailingu. Generator ofert, kalendarz, protokoły przyjęcia, przypomnienia o przeglądach powłok.

            </p>

            <div className="mt-8">
              <Button
                asChild
                className="h-12 px-8 text-base font-semibold rounded-xl bg-white text-primary hover:bg-white/90">

                <Link to="/umow-prezentacje">Umów prezentację</Link>
              </Button>
            </div>

            <p className="mt-4 text-sm text-white/60">
              Od 199 zł/msc • Bez zobowiązań • 14 dni za darmo
            </p>
          </div>
        </section>

        {/* What's Different Section */}
        <section className="py-16 md:py-20 border-b border-border">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-6">
              Czym różni się CRM dla detailingu od zwykłego CRM?
            </h2>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto text-lg">
              [Placeholder: Opis różnic między standardowym CRM a dedykowanym dla detailingu - wielodniowe zlecenia, złożone wyceny, dokumentacja fotograficzna, cykl życia powłoki.]
            </p>
          </div>
        </section>

        {/* Specific Needs Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
              Specyficzne potrzeby studiów detailingu
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Need 1 */}
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Wielodniowe zlecenia (PPF, ceramic coating)
                    </h3>
                    <p className="text-muted-foreground">
                      [Placeholder: Opis problemu z rezerwacjami na kilka dni - blokowanie stanowiska, planowanie etapów pracy, informowanie klienta o postępach.]
                    </p>
                  </div>
                </div>
              </div>

              {/* Need 2 */}
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Złożone oferty z wariantami cenowymi
                    </h3>
                    <p className="text-muted-foreground">
                      [Placeholder: Problem tworzenia profesjonalnych ofert - różne warianty (basic/standard/premium), opcje dodatkowe, rabaty, długi czas na ręczne przygotowanie.]
                    </p>
                  </div>
                </div>
              </div>

              {/* Need 3 */}
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                    <Camera className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Protokoły przyjęcia pojazdu ze zdjęciami
                    </h3>
                    <p className="text-muted-foreground">
                      [Placeholder: Konieczność dokumentowania stanu pojazdu przed pracą - istniejące uszkodzenia, rysy, odpryski, ochrona przed reklamacjami.]
                    </p>
                  </div>
                </div>
              </div>

              {/* Need 4 */}
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                    <Bell className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Przypomnienia o przeglądach powłoki ceramicznej
                    </h3>
                    <p className="text-muted-foreground">
                      [Placeholder: Utracone przychody z przeglądów - klienci zapominają o terminach, brak systemu follow-up, konkurencja przejmuje klientów.]
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section with Images */}
        <section className="py-16 md:py-20 border-b border-border">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
              Funkcje dedykowane dla detailingu w N2Wash
            </h2>

            {/* Feature 1 - Image Right */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-16 lg:mb-20">
              <div className="flex-1 order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Palette className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                    Generator ofert z wariantami (basic/standard/premium)
                  </h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  [Placeholder: Opis generatora ofert - szablony dla PPF, ceramic coating, korekty lakieru, warianty cenowe, opcje dodatkowe, automatyczne wyliczanie cen, eksport do PDF.]
                </p>
              </div>
              <div className="flex-1 order-1 lg:order-2">
                <div className="bg-muted rounded-2xl aspect-[4/3] flex items-center justify-center border border-border">
                  <div className="text-center p-8">
                    <FileText className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                    <p className="text-muted-foreground font-medium">generator-ofert-detailing.jpg</p>
                    <p className="text-sm text-muted-foreground/70">Screenshot generatora ofert z wariantami</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 - Image Left */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-16 lg:mb-20">
              <div className="flex-1">
                <div className="bg-muted rounded-2xl aspect-[4/3] flex items-center justify-center border border-border">
                  <div className="text-center p-8">
                    <Shield className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                    <p className="text-muted-foreground font-medium">protokol-diagram-uszkodzen.jpg</p>
                    <p className="text-sm text-muted-foreground/70">Protokół przyjęcia z diagramem uszkodzeń</p>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Camera className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                    Protokół przyjęcia z diagramem uszkodzeń
                  </h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  [Placeholder: Opis protokołu przyjęcia - interaktywny diagram pojazdu, zaznaczanie uszkodzeń, zdjęcia przed/po, podpis cyfrowy klienta, automatyczne generowanie PDF.]
                </p>
              </div>
            </div>

            {/* Feature 3 - Image Right */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-16 lg:mb-20">
              <div className="flex-1 order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Bell className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                    Automatyczne przypomnienia o serwisach
                  </h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  [Placeholder: Opis systemu przypomnień - automatyczne SMS przed końcem gwarancji, przypomnienie o przeglądzie ceramiki, personalizacja terminów, statystyki konwersji.]
                </p>
              </div>
              <div className="flex-1 order-1 lg:order-2">
                <div className="bg-muted rounded-2xl aspect-[4/3] flex items-center justify-center border border-border">
                  <div className="text-center p-8">
                    <Bell className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                    <p className="text-muted-foreground font-medium">przypomnienie-ceramic-coating.jpg</p>
                    <p className="text-sm text-muted-foreground/70">Przykład SMS przypomnienia o przeglądzie</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 4 - Full Width */}
            <div className="bg-card rounded-2xl p-8 md:p-12 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                  Wsparcie sprzedaży (upsell usług dodatkowych)
                </h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
                [Placeholder: Opis funkcji upsellingu - sugestie dodatkowych usług przy ofercie, pakiety promocyjne, historia zakupów klienta, automatyczne propozycje na podstawie pojazdu.]
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Plan Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
              Plan Detailing – pełna funkcjonalność
            </h2>

            <div className="max-w-3xl mx-auto">
              <div className="bg-card rounded-2xl p-8 md:p-12 border-2 border-primary shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      199 zł za pierwsze stanowisko
                    </h3>
                    <p className="text-muted-foreground">
                      + 49 zł za każde kolejne stanowisko/miesiąc
                    </p>
                  </div>
                  <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                    -20% przy płatności rocznej
                  </div>
                </div>

                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Co dodatkowo w planie Detailing?
                </h4>
                
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Wszystko z planu Myjnia</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Generator ofert detailingowych</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Protokoły przyjęcia ze zdjęciami</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Diagram uszkodzeń pojazdu</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Przypomnienia o przeglądach</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Wsparcie upsellingu</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Podpis cyfrowy klienta</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Eksport ofert do PDF</span>
                  </div>
                </div>

                <Button
                  asChild
                  className="w-full h-12 text-base font-semibold rounded-xl">

                  <Link to="/umow-prezentacje">Umów bezpłatną prezentację</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Examples Section */}
        <section className="py-16 md:py-20 border-b border-border">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-6">
              Przykłady ofert stworzonych w N2Wash
            </h2>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto text-lg mb-12">
              [Placeholder: Wprowadzenie do galerii przykładowych ofert - różne typy usług, warianty cenowe, profesjonalny wygląd.]
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-muted rounded-2xl aspect-[3/4] flex items-center justify-center border border-border">
                <div className="text-center p-6">
                  <FileText className="w-12 h-12 text-muted-foreground/50 mx-auto mb-3" />
                  <p className="text-muted-foreground font-medium text-sm">Oferta PPF</p>
                  <p className="text-xs text-muted-foreground/70">Przykład oferty na folię ochronną</p>
                </div>
              </div>
              <div className="bg-muted rounded-2xl aspect-[3/4] flex items-center justify-center border border-border">
                <div className="text-center p-6">
                  <FileText className="w-12 h-12 text-muted-foreground/50 mx-auto mb-3" />
                  <p className="text-muted-foreground font-medium text-sm">Oferta Ceramic</p>
                  <p className="text-xs text-muted-foreground/70">Przykład oferty na powłokę ceramiczną</p>
                </div>
              </div>
              <div className="bg-muted rounded-2xl aspect-[3/4] flex items-center justify-center border border-border">
                <div className="text-center p-6">
                  <FileText className="w-12 h-12 text-muted-foreground/50 mx-auto mb-3" />
                  <p className="text-muted-foreground font-medium text-sm">Oferta Korekta</p>
                  <p className="text-xs text-muted-foreground/70">Przykład oferty na korektę lakieru</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-primary via-primary/90 to-sky-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
              Gotowy, by profesjonalizować swoje studio?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Dołącz do studiów detailingu, które już korzystają z N2Wash. Zacznij bezpłatny okres próbny już dziś.
            </p>
            <Button
              asChild
              className="h-12 px-8 text-base font-semibold rounded-xl bg-white text-primary hover:bg-white/90">

              <Link to="/umow-prezentacje">Umów bezpłatną prezentację</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>);

};

export default CrmDetailing;
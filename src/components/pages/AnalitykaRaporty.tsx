"use client";

import Link from "next/link";
import { BarChart3, TrendingUp, Calendar, Users, DollarSign, PieChart, Target, Lightbulb } from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";

const AnalitykaRaporty = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary/90 to-sky-900 text-white py-32 md:py-48">
          <div className="container mx-auto px-4">
            <h1 id="analityka-i-raporty-dla-myjni-i-detailingu-dane-do-lepszych-decyzji" className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-4xl leading-tight">
              Analityka i Raporty dla Myjni i Detailingu – Dane Do Lepszych Decyzji
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl">
              Raporty sprzedaży, analityka rezerwacji, statystyki pracowników. Które usługi się najlepiej sprzedają? Kiedy są szczyty?
            </p>

            <div className="mt-8">
              <Button 
                asChild
                className="h-12 px-8 text-base font-semibold rounded-xl bg-white text-primary hover:bg-white/90"
              >
                <Link href="/umow-prezentacje">Umów prezentację</Link>
              </Button>
            </div>
          </div>
        </section>

        <article>
        {/* Why Data Section */}
        <section className="py-16 md:py-20 border-b border-border">
          <div className="container mx-auto px-4">
            <h2 id="dlaczego-potrzebujesz-danych-o-swoim-biznesie" className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-6">
              Dlaczego potrzebujesz danych o swoim biznesie?
            </h2>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto text-lg mb-12">
              [Placeholder: Wprowadzenie - intuicja vs dane, podejmowanie lepszych decyzji biznesowych, identyfikacja trendów, optymalizacja cen i oferty, zrozumienie klientów.]
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-card rounded-2xl p-6 border border-border text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-7 h-7 text-primary" />
                </div>
                <h3 id="identyfikuj-trendy" className="text-lg font-semibold text-foreground mb-2">Identyfikuj trendy</h3>
                <p className="text-sm text-muted-foreground">
                  [Placeholder: Widzisz wzrosty i spadki sprzedaży, sezonowość, zmiany w preferencjach klientów]
                </p>
              </div>
              <div className="bg-card rounded-2xl p-6 border border-border text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 id="optymalizuj-oferte" className="text-lg font-semibold text-foreground mb-2">Optymalizuj ofertę</h3>
                <p className="text-sm text-muted-foreground">
                  [Placeholder: Dowiedz się które usługi się sprzedają, a które warto zmienić lub usunąć]
                </p>
              </div>
              <div className="bg-card rounded-2xl p-6 border border-border text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-7 h-7 text-primary" />
                </div>
                <h3 id="zwiekszaj-przychody" className="text-lg font-semibold text-foreground mb-2">Zwiększaj przychody</h3>
                <p className="text-sm text-muted-foreground">
                  [Placeholder: Decyzje oparte na danych przekładają się na wyższe przychody i zyski]
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Available Reports Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 id="dostepne-raporty-w-n2wash" className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
              Dostępne raporty w N2Wash
            </h2>

            {/* Report 1 - Sales */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-16 max-w-5xl mx-auto">
              <div className="flex-1">
                <div className="bg-muted rounded-2xl aspect-video flex items-center justify-center border border-border">
                  <div className="text-center p-8">
                    <DollarSign className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                    <p className="text-muted-foreground font-medium">raport-sprzedazy.jpg</p>
                    <p className="text-sm text-muted-foreground/70">Wykres sprzedaży dziennej/miesięcznej</p>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-primary" />
                  </div>
                  <h3 id="raporty-sprzedazy" className="text-xl md:text-2xl font-semibold text-foreground">
                    Raporty sprzedaży
                  </h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  [Placeholder: Opis raportów sprzedaży - dzienna/tygodniowa/miesięczna/roczna sprzedaż, przychody brutto i netto, porównanie okresów, najlepsze dni i godziny, eksport do Excel.]
                </p>
              </div>
            </div>

            {/* Report 2 - Reservations */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-16 max-w-5xl mx-auto">
              <div className="flex-1 order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <h3 id="statystyki-rezerwacji" className="text-xl md:text-2xl font-semibold text-foreground">
                    Statystyki rezerwacji
                  </h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  [Placeholder: Opis statystyk rezerwacji - liczba rezerwacji, no-show rate, średni czas usługi, obłożenie stanowisk, szczyty rezerwacyjne (dni tygodnia, godziny), źródła rezerwacji (online vs telefon).]
                </p>
              </div>
              <div className="flex-1 order-1 lg:order-2">
                <div className="bg-muted rounded-2xl aspect-video flex items-center justify-center border border-border">
                  <div className="text-center p-8">
                    <Calendar className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                    <p className="text-muted-foreground font-medium">statystyki-rezerwacji.jpg</p>
                    <p className="text-sm text-muted-foreground/70">Wykres obłożenia stanowisk</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Report 3 - Popular Services */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-16 max-w-5xl mx-auto">
              <div className="flex-1">
                <div className="bg-muted rounded-2xl aspect-video flex items-center justify-center border border-border">
                  <div className="text-center p-8">
                    <PieChart className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                    <p className="text-muted-foreground font-medium">popularne-uslugi.jpg</p>
                    <p className="text-sm text-muted-foreground/70">Wykres kołowy popularności usług</p>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <PieChart className="w-5 h-5 text-primary" />
                  </div>
                  <h3 id="najpopularniejsze-uslugi" className="text-xl md:text-2xl font-semibold text-foreground">
                    Najpopularniejsze usługi
                  </h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  [Placeholder: Opis analizy usług - ranking usług według ilości i przychodu, średnia wartość usługi, najczęściej kupowane pakiety, usługi z najwyższą marżą, sezonowość poszczególnych usług.]
                </p>
              </div>
            </div>

            {/* Report 4 - Employee Performance */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-5xl mx-auto">
              <div className="flex-1 order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <h3 id="wydajnosc-pracownikow" className="text-xl md:text-2xl font-semibold text-foreground">
                    Wydajność pracowników
                  </h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  [Placeholder: Opis raportów pracowników - liczba wykonanych usług, wygenerowany przychód, średni czas usługi, godziny pracy, porównanie między pracownikami, podstawa do premii.]
                </p>
              </div>
              <div className="flex-1 order-1 lg:order-2">
                <div className="bg-muted rounded-2xl aspect-video flex items-center justify-center border border-border">
                  <div className="text-center p-8">
                    <Users className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                    <p className="text-muted-foreground font-medium">wydajnosc-pracownikow.jpg</p>
                    <p className="text-sm text-muted-foreground/70">Porównanie wydajności zespołu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data-Driven Decisions Section */}
        <section className="py-16 md:py-20 border-b border-border">
          <div className="container mx-auto px-4">
            <h2 id="decyzje-oparte-na-danych" className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
              Decyzje oparte na danych
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Decision 1 */}
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 id="ktore-uslugi-promowac" className="text-xl font-semibold text-foreground mb-3">
                      Które usługi promować?
                    </h3>
                    <p className="text-muted-foreground">
                      [Placeholder: Opis jak wykorzystać dane - identyfikacja usług z wysoką marżą ale niską sprzedażą, usługi rosnące w popularności, sezonowe promocje bazujące na danych historycznych.]
                    </p>
                  </div>
                </div>
              </div>

              {/* Decision 2 */}
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 id="jak-lepiej-wyceniac-uslugi" className="text-xl font-semibold text-foreground mb-3">
                      Jak lepiej wyceniać usługi?
                    </h3>
                    <p className="text-muted-foreground">
                      [Placeholder: Opis optymalizacji cen - analiza elastyczności cenowej, porównanie z konkurencją, identyfikacja usług gdzie można podnieść ceny, pakietowanie usług dla wyższej wartości.]
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Insight Box */}
            <div className="max-w-3xl mx-auto mt-12">
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <Lightbulb className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 id="przyklad-z-zycia" className="text-lg font-semibold text-foreground mb-2">
                      Przykład z życia
                    </h3>
                    <p className="text-muted-foreground">
                      [Placeholder: Case study - "Studio X zauważyło w raportach, że usługa korekty lakieru ma najwyższą marżę ale tylko 5% rezerwacji. Po wprowadzeniu promocji na social media sprzedaż wzrosła o 300% w ciągu 2 miesięcy."]
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Preview */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 id="dashboard-analityczny" className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
              Dashboard analityczny
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              [Placeholder: Opis dashboardu - wszystkie najważniejsze metryki w jednym miejscu, aktualizacja w czasie rzeczywistym, personalizacja widoków.]
            </p>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-muted rounded-2xl aspect-video flex items-center justify-center border border-border">
                <div className="text-center p-8">
                  <BarChart3 className="w-20 h-20 text-muted-foreground/50 mx-auto mb-4" />
                  <p className="text-muted-foreground font-medium">dashboard-analityczny.jpg</p>
                  <p className="text-sm text-muted-foreground/70">Główny dashboard z kluczowymi metrykami</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Features */}
        <section className="py-16 md:py-20 border-b border-border">
          <div className="container mx-auto px-4">
            <h2 id="powiazane-funkcje" className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
              Powiązane funkcje
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Link
                href="/funkcje/zarzadzanie-zespolem"
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors group"
              >
                <Users className="w-8 h-8 text-primary mb-3" />
                <h3 id="zarzadzanie-zespolem" className="font-semibold text-foreground group-hover:text-primary transition-colors">Zarządzanie zespołem</h3>
                <p className="text-sm text-muted-foreground mt-1">Grafik i ewidencja czasu pracy</p>
              </Link>
              <Link 
                href="/funkcje/kalendarz-rezerwacji"
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors group"
              >
                <Calendar className="w-8 h-8 text-primary mb-3" />
                <h3 id="kalendarz-rezerwacji" className="font-semibold text-foreground group-hover:text-primary transition-colors">Kalendarz rezerwacji</h3>
                <p className="text-sm text-muted-foreground mt-1">Dane o rezerwacjach w czasie rzeczywistym</p>
              </Link>
              <Link 
                href="/crm/crm-dla-myjni-samochodowych"
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors group"
              >
                <BarChart3 className="w-8 h-8 text-primary mb-3" />
                <h3 id="crm-dla-myjni" className="font-semibold text-foreground group-hover:text-primary transition-colors">CRM dla myjni</h3>
                <p className="text-sm text-muted-foreground mt-1">Pełne rozwiązanie z analityką</p>
              </Link>
            </div>
          </div>
        </section>

        </article>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-primary via-primary/90 to-sky-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 id="podejmuj-lepsze-decyzje-dzieki-danym" className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
              Podejmuj lepsze decyzje dzięki danym
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Przestań zgadywać. Zacznij podejmować decyzje oparte na rzeczywistych danych z Twojego biznesu.
            </p>
            <Button 
              asChild
              className="h-12 px-8 text-base font-semibold rounded-xl bg-white text-primary hover:bg-white/90"
            >
              <Link href="/umow-prezentacje">Umów bezpłatną prezentację</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AnalitykaRaporty;

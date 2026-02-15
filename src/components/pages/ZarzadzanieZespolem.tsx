"use client";

import Link from "next/link";
import { Users, Clock, Calendar, Layers, Monitor, Tablet, Eye, BarChart3, AlertTriangle, Lock } from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";

const ZarzadzanieZespolem = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary/90 to-sky-900 text-white py-32 md:py-48">
          <div className="container mx-auto px-4">
            <h1 id="zarzadzaj-zespolem-bez-chaosu-i-zbednych-arkuszy" className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-4xl leading-tight">
              Zarządzaj zespołem bez chaosu i zbędnych arkuszy
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl">
              Zmień żmudne liczenie godzin w zautomatyzowany proces. Od rejestracji czasu pracy po gotowe listy płac – wszystko w jednym miejscu.
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
        {/* Challenges Section */}
        <section className="py-16 md:py-20 border-b border-border">
          <div className="container mx-auto px-4">
            <h2 id="wyzwania-w-zarzadzaniu-zespolem-myjni-detailingu" className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-6">
              Wyzwania w zarządzaniu zespołem myjni/detailingu
            </h2>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto text-lg mb-12">
              [Placeholder: Wprowadzenie do wyzwań - rotacja pracowników, zmienne grafiki, brak przejrzystości godzin pracy, trudności w planowaniu.]
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="bg-card rounded-xl p-6 border border-border text-center">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-6 h-6 text-amber-600" />
                </div>
                <h3 id="reczna-ewidencja" className="font-semibold text-foreground mb-2">Ręczna ewidencja</h3>
                <p className="text-sm text-muted-foreground">
                  [Placeholder: Papierowe listy, błędy, brak kontroli]
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border text-center">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-6 h-6 text-amber-600" />
                </div>
                <h3 id="chaos-w-grafiku" className="font-semibold text-foreground mb-2">Chaos w grafiku</h3>
                <p className="text-sm text-muted-foreground">
                  [Placeholder: Nakładające się zmiany, brak widoczności]
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border text-center">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-6 h-6 text-amber-600" />
                </div>
                <h3 id="kto-robi-co" className="font-semibold text-foreground mb-2">Kto robi co?</h3>
                <p className="text-sm text-muted-foreground">
                  [Placeholder: Brak przypisań, niejasna odpowiedzialność]
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border text-center">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-6 h-6 text-amber-600" />
                </div>
                <h3 id="brak-raportow" className="font-semibold text-foreground mb-2">Brak raportów</h3>
                <p className="text-sm text-muted-foreground">
                  [Placeholder: Trudność w analizie wydajności]
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 id="funkcje-zarzadzania-zespolem-w-n2wash" className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
              Funkcje zarządzania zespołem w N2Wash
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Feature 1 */}
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 id="ewidencja-czasu-pracy" className="text-xl font-semibold text-foreground mb-3">
                      Ewidencja czasu pracy
                    </h3>
                    <p className="text-muted-foreground">
                      [Placeholder: Opis ewidencji - rozpoczynanie/kończenie pracy przez tablet/telefon, przerwy, nadgodziny, historia godzin, eksport do Excel dla księgowości.]
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 id="grafik-pracownikow" className="text-xl font-semibold text-foreground mb-3">
                      Grafik pracowników
                    </h3>
                    <p className="text-muted-foreground">
                      [Placeholder: Opis grafiku - planowanie zmian z wyprzedzeniem, widok tygodniowy/miesięczny, urlopy i nieobecności, powiadomienia o zmianach.]
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Layers className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 id="przypisywanie-do-stanowisk" className="text-xl font-semibold text-foreground mb-3">
                      Przypisywanie do stanowisk
                    </h3>
                    <p className="text-muted-foreground">
                      [Placeholder: Opis przypisywania - każde stanowisko może mieć przypisanego pracownika, widoczność w kalendarzu, automatyczne sugestie na podstawie dostępności.]
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 id="przypisywanie-do-konkretnych-zlecen" className="text-xl font-semibold text-foreground mb-3">
                      Przypisywanie do konkretnych zleceń
                    </h3>
                    <p className="text-muted-foreground">
                      [Placeholder: Opis przypisywania do zleceń - dla detailingu wielodniowego, rozliczanie za zlecenie, historia wykonanych prac przez pracownika.]
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Live View Section */}
        <section className="py-16 md:py-20 border-b border-border">
          <div className="container mx-auto px-4">
            <h2 id="widok-na-zywo-dla-pracownikow" className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
              Widok na żywo dla pracowników
            </h2>

            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-12">
              <div className="flex-1">
                <div className="bg-muted rounded-2xl aspect-video flex items-center justify-center border border-border">
                  <div className="text-center p-8">
                    <Monitor className="w-20 h-20 text-muted-foreground/50 mx-auto mb-4" />
                    <p className="text-muted-foreground font-medium">widok-hala-tablet.jpg</p>
                    <p className="text-sm text-muted-foreground/70">Widok tabletu/monitora na hali myjni</p>
                  </div>
                </div>
              </div>
              <div className="flex-1 space-y-6">
                {/* Sub-feature 1 */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Tablet className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 id="tablet-monitor-na-hali" className="text-lg font-semibold text-foreground mb-1">
                      Tablet/monitor na hali
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      [Placeholder: Opis instalacji - duży ekran lub tablet, widoczny dla wszystkich pracowników, automatyczne odświeżanie.]
                    </p>
                  </div>
                </div>

                {/* Sub-feature 2 */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Eye className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 id="harmonogram-w-czasie-rzeczywistym" className="text-lg font-semibold text-foreground mb-1">
                      Harmonogram w czasie rzeczywistym
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      [Placeholder: Pracownicy widzą aktualne i nadchodzące zlecenia, przypisania, czasy, informacje o pojeździe i usłudze.]
                    </p>
                  </div>
                </div>

                {/* Sub-feature 3 */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Lock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 id="bez-dostepu-do-ustawien-i-wybranych-detali" className="text-lg font-semibold text-foreground mb-1">
                      Bez dostępu do ustawień i wybranych detali
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      [Placeholder: Opis uprawnień - pracownicy widzą tylko potrzebne informacje, brak dostępu do cen, danych kontaktowych klientów, ustawień systemu.]
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reports Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="flex-1 order-2 lg:order-1">
                <h2 id="raporty-z-pracy-zespolu" className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Raporty z pracy zespołu
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  [Placeholder: Opis raportów - godziny pracy każdego pracownika, ilość wykonanych usług, przychód wygenerowany przez pracownika, porównanie wydajności, eksport danych.]
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <BarChart3 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Godziny pracy i nadgodziny</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <BarChart3 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Liczba wykonanych usług</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <BarChart3 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Przychód na pracownika</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <BarChart3 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Porównanie okresów</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1 order-1 lg:order-2">
                <div className="bg-muted rounded-2xl aspect-[4/3] flex items-center justify-center border border-border">
                  <div className="text-center p-8">
                    <BarChart3 className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                    <p className="text-muted-foreground font-medium">raport-zespol.jpg</p>
                    <p className="text-sm text-muted-foreground/70">Przykładowy raport z pracy zespołu</p>
                  </div>
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
                href="/funkcje/kalendarz-rezerwacji"
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors group"
              >
                <Calendar className="w-8 h-8 text-primary mb-3" />
                <h3 id="kalendarz-rezerwacji" className="font-semibold text-foreground group-hover:text-primary transition-colors">Kalendarz rezerwacji</h3>
                <p className="text-sm text-muted-foreground mt-1">Zarządzanie terminami i stanowiskami</p>
              </Link>
              <Link 
                href="/funkcje/analityka-raporty"
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors group"
              >
                <BarChart3 className="w-8 h-8 text-primary mb-3" />
                <h3 id="analityka-i-raporty" className="font-semibold text-foreground group-hover:text-primary transition-colors">Analityka i raporty</h3>
                <p className="text-sm text-muted-foreground mt-1">Szczegółowe statystyki biznesowe</p>
              </Link>
              <Link 
                href="/crm/crm-dla-myjni-samochodowych"
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors group"
              >
                <Users className="w-8 h-8 text-primary mb-3" />
                <h3 id="crm-dla-myjni" className="font-semibold text-foreground group-hover:text-primary transition-colors">CRM dla myjni</h3>
                <p className="text-sm text-muted-foreground mt-1">Pełne rozwiązanie dla myjni</p>
              </Link>
            </div>
          </div>
        </section>

        </article>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-primary via-primary/90 to-sky-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 id="uporzadkuj-prace-swojego-zespolu" className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
              Uporządkuj pracę swojego zespołu
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Ewidencja czasu, grafik i widok na żywo dla hali. Zacznij zarządzać zespołem profesjonalnie.
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

export default ZarzadzanieZespolem;

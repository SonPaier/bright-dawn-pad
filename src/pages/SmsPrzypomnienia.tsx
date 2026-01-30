import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MessageSquare, Bell, Check, Car, Sparkles, BarChart3, TrendingUp, Package, AlertTriangle } from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";

const SmsPrzypomnienia = () => {
  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Automatyczne SMS przypomnienia o wizytach. Zmniejsz no-show o 80%. Przypomnienia o przeglądach powłoki. 100 SMS miesięcznie w cenie pakietu."
      );
    }
    document.title = "Automatyczne SMS Przypomnienia dla Myjni i Detailingu | N2Wash";
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary/90 to-sky-900 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-4xl leading-tight">
              Automatyczne SMS Przypomnienia dla Myjni i Detailingu
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl">
              Zmniejsz no-show o 80%. Przypomnienia o przeglądach powłoki. 100 SMS miesięcznie w cenie pakietu.
            </p>

            <div className="mt-8">
              <Button 
                asChild
                className="h-12 px-8 text-base font-semibold rounded-xl bg-white text-primary hover:bg-white/90"
              >
                <Link to="/umow-prezentacje">Umów prezentację</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* No-show Problem Section */}
        <section className="py-16 md:py-20 border-b border-border">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-6">
              Problem no-show w branży automotive
            </h2>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto text-lg mb-12">
              [Placeholder: Opis problemu no-show - ile rezerwacji przepada, koszt pustego stanowiska, frustracja zespołu, utracone przychody, wpływ na planowanie dnia.]
            </p>

            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-5xl mx-auto">
              <div className="flex-1">
                <div className="bg-destructive/10 rounded-2xl p-8 border border-destructive/20">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="w-8 h-8 text-destructive" />
                    <h3 className="text-xl font-semibold text-foreground">Bez przypomnień</h3>
                  </div>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-destructive font-bold">✕</span>
                      <span>[Placeholder: 15-25% rezerwacji nie dochodzi do skutku]</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive font-bold">✕</span>
                      <span>[Placeholder: Puste stanowiska = utracone przychody]</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive font-bold">✕</span>
                      <span>[Placeholder: Ręczne dzwonienie do klientów]</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-primary/10 rounded-2xl p-8 border border-primary/20">
                  <div className="flex items-center gap-3 mb-4">
                    <Check className="w-8 h-8 text-primary" />
                    <h3 className="text-xl font-semibold text-foreground">Z SMS N2Wash</h3>
                  </div>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>[Placeholder: Tylko 3-5% no-show]</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>[Placeholder: Automatyczne przypomnienia]</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>[Placeholder: Więcej czasu na obsługę klientów]</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SMS Types Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
              Rodzaje SMS w N2Wash
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
              {/* SMS Type 1 */}
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Potwierdzenie rezerwacji
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      [Placeholder: Opis SMS potwierdzenia - wysyłany natychmiast po rezerwacji, data, godzina, adres, możliwość anulowania.]
                    </p>
                    <div className="bg-muted rounded-lg p-4 text-sm">
                      <p className="text-muted-foreground italic">
                        "Dziękujemy za rezerwację w [Nazwa]. Czekamy na Ciebie 15.02 o 10:00. Adres: ul. Przykładowa 1. Odwołaj: odpisz ANULUJ"
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* SMS Type 2 */}
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Bell className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Przypomnienie 24h i 1h przed wizytą
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      [Placeholder: Opis przypomnień - automatyczne wysyłanie, konfigurowalny czas, personalizacja treści.]
                    </p>
                    <div className="bg-muted rounded-lg p-4 text-sm">
                      <p className="text-muted-foreground italic">
                        "Przypomnienie: jutro o 10:00 masz wizytę w [Nazwa]. Do zobaczenia! Pytania? Zadzwoń: 123 456 789"
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* SMS Type 3 */}
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Car className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Informacja o gotowym pojeździe
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      [Placeholder: Opis SMS o gotowości - wysyłany po zakończeniu usługi, informacja o odbiorze, godziny otwarcia.]
                    </p>
                    <div className="bg-muted rounded-lg p-4 text-sm">
                      <p className="text-muted-foreground italic">
                        "Twój pojazd BMW X5 jest gotowy do odbioru! Czekamy do 18:00. [Nazwa], ul. Przykładowa 1"
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* SMS Type 4 */}
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Przypomnienie o odświeżeniu powłoki i serwisach
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      [Placeholder: Opis przypomnień serwisowych - automatyczne po X miesiącach, przeglądy ceramiki, PPF, odświeżenie wosku.]
                    </p>
                    <div className="bg-muted rounded-lg p-4 text-sm">
                      <p className="text-muted-foreground italic">
                        "Minęło 6 miesięcy od aplikacji powłoki ceramicznej. Czas na przegląd! Zarezerwuj: [link]"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Connection */}
            <div className="max-w-3xl mx-auto">
              <div className="bg-card rounded-2xl p-8 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Powiązanie z usługami
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  [Placeholder: Opis powiązania SMS z usługami - każda usługa może mieć swój szablon SMS, różne przypomnienia dla różnych typów usług (mycie vs detailing), automatyczne dopasowanie treści do kontekstu.]
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 md:py-20 border-b border-border">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
              Statystyki i efektywność
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Stat 1 */}
              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  80%
                </h3>
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  mniej no-show dzięki przypomnieniom
                </h4>
                <p className="text-muted-foreground">
                  [Placeholder: Szczegóły statystyki - badania branżowe, doświadczenia klientów N2Wash, porównanie przed/po wdrożeniu.]
                </p>
              </div>

              {/* Stat 2 */}
              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  +35%
                </h3>
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  większy zysk z usług premium
                </h4>
                <p className="text-muted-foreground">
                  [Placeholder: Szczegóły statystyki - przychody z przeglądów powłok, powracający klienci, wartość życiowa klienta.]
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
              100 SMS miesięcznie w cenie
            </h2>

            <div className="max-w-3xl mx-auto">
              <div className="bg-card rounded-2xl p-8 md:p-12 border-2 border-primary shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Package className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      100 SMS w każdym pakiecie
                    </h3>
                    <p className="text-muted-foreground">
                      Zarówno Myjnia jak i Detailing
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-8">
                  [Placeholder: Opis pakietu SMS - co wliczone w cenę, typy wiadomości, brak ukrytych opłat, statystyki wykorzystania w panelu.]
                </p>

                <div className="border-t border-border pt-8">
                  <h4 className="text-lg font-semibold text-foreground mb-4">
                    Co dalej? Dokup pakiety SMS
                  </h4>
                  <p className="text-muted-foreground mb-6">
                    [Placeholder: Opis dokupowania pakietów - elastyczne pakiety (100, 500, 1000 SMS), atrakcyjne ceny hurtowe, automatyczne doładowanie, powiadomienia o niskim stanie.]
                  </p>
                  
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="bg-muted rounded-xl p-4 text-center">
                      <p className="text-2xl font-bold text-foreground">100 SMS</p>
                      <p className="text-muted-foreground text-sm">od XX zł</p>
                    </div>
                    <div className="bg-muted rounded-xl p-4 text-center">
                      <p className="text-2xl font-bold text-foreground">500 SMS</p>
                      <p className="text-muted-foreground text-sm">od XX zł</p>
                    </div>
                    <div className="bg-muted rounded-xl p-4 text-center">
                      <p className="text-2xl font-bold text-foreground">1000 SMS</p>
                      <p className="text-muted-foreground text-sm">od XX zł</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Features */}
        <section className="py-16 md:py-20 border-b border-border">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
              Powiązane funkcje
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Link 
                to="/funkcje/kalendarz-rezerwacji"
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors group"
              >
                <Bell className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">Kalendarz rezerwacji</h3>
                <p className="text-sm text-muted-foreground mt-1">Zarządzanie terminami i stanowiskami</p>
              </Link>
              <Link 
                to="/funkcje/zarzadzanie-zespolem"
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors group"
              >
                <MessageSquare className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">Zarządzanie zespołem</h3>
                <p className="text-sm text-muted-foreground mt-1">Grafiki i uprawnienia pracowników</p>
              </Link>
              <Link 
                to="/funkcje/analityka-raporty"
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors group"
              >
                <BarChart3 className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">Analityka i raporty</h3>
                <p className="text-sm text-muted-foreground mt-1">Statystyki SMS i konwersji</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-primary via-primary/90 to-sky-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
              Zacznij wysyłać przypomnienia już dziś
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              100 SMS miesięcznie w cenie pakietu. Zmniejsz no-show i zwiększ przychody z przeglądów.
            </p>
            <Button 
              asChild
              className="h-12 px-8 text-base font-semibold rounded-xl bg-white text-primary hover:bg-white/90"
            >
              <Link to="/umow-prezentacje">Umów bezpłatną prezentację</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SmsPrzypomnienia;

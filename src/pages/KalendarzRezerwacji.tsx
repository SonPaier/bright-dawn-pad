import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, CalendarDays, Clock, Edit3, Layers, Pause, Users, Globe, MessageSquare, ChevronRight } from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";

const KalendarzRezerwacji = () => {
  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Kalendarz rezerwacji online dla myjni i studia detailingu. Widok dzienny i tygodniowy, przypisanie rezerwacji do stanowisk. Rezerwacje 24/7 bez telefonów."
      );
    }
    document.title = "Kalendarz Rezerwacji dla Myjni i Detailingu | N2Wash";
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary/90 to-sky-900 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Strona główna
            </Link>

            <div className="flex items-center gap-2 text-white/60 text-sm mb-4">
              <Link to="/funkcje" className="hover:text-white transition-colors">Funkcje</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-white">Kalendarz rezerwacji</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-4xl leading-tight">
              Kalendarz Rezerwacji dla Myjni i Detailingu
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl">
              Widok dzienny i tygodniowy, przypisanie rezerwacji do stanowisk. Rezerwacje 24/7 bez telefonów.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                className="h-12 px-8 text-base font-semibold rounded-xl bg-white text-primary hover:bg-white/90"
              >
                <Link to="/umow-prezentacje">Umów prezentację</Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                className="h-12 px-8 text-base font-semibold rounded-xl border-white/30 text-white hover:bg-white/10"
              >
                <Link to="/demo">Wypróbuj demo</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 md:py-20 border-b border-border">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-6">
              Jak działa kalendarz rezerwacji N2Wash?
            </h2>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto text-lg mb-12">
              [Placeholder: Ogólny opis działania kalendarza - intuicyjny interfejs, szybkie dodawanie rezerwacji, widok na żywo dla całego zespołu, synchronizacja w czasie rzeczywistym.]
            </p>

            {/* Placeholder for screenshot/video */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-muted rounded-2xl aspect-video flex items-center justify-center border border-border">
                <div className="text-center p-8">
                  <Calendar className="w-20 h-20 text-muted-foreground/50 mx-auto mb-4" />
                  <p className="text-muted-foreground font-medium">kalendarz-glowny-widok.jpg</p>
                  <p className="text-sm text-muted-foreground/70">Główny widok kalendarza z rezerwacjami</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Calendar Views Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
              Widoki kalendarza
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* View 1 */}
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <CalendarDays className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Widok dzienny
                </h3>
                <p className="text-muted-foreground">
                  [Placeholder: Szczegółowy widok jednego dnia - podział na godziny, wszystkie stanowiska obok siebie, łatwe przenoszenie rezerwacji.]
                </p>
              </div>

              {/* View 2 */}
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Widok tygodniowy
                </h3>
                <p className="text-muted-foreground">
                  [Placeholder: Przegląd całego tygodnia - planowanie z wyprzedzeniem, identyfikacja wolnych terminów, optymalizacja grafiku.]
                </p>
              </div>

              {/* View 3 */}
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Layers className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Widok stanowisk
                </h3>
                <p className="text-muted-foreground">
                  [Placeholder: Podział na stanowiska pracy - każde stanowisko jako osobna kolumna, kolorowe oznaczenia usług, jasna organizacja.]
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Easy Editing Section */}
        <section className="py-16 md:py-20 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="flex-1">
                <div className="bg-muted rounded-2xl aspect-[4/3] flex items-center justify-center border border-border">
                  <div className="text-center p-8">
                    <Edit3 className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                    <p className="text-muted-foreground font-medium">edycja-rezerwacji.jpg</p>
                    <p className="text-sm text-muted-foreground/70">Szybka edycja rezerwacji drag & drop</p>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Wygodna edycja
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  [Placeholder: Opis funkcji edycji - drag & drop przenoszenie rezerwacji, szybka zmiana godziny, zmiana stanowiska, edycja szczegółów jednym kliknięciem, historia zmian.]
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Multi-day Reservations Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="flex-1 order-2 lg:order-1">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Rezerwacje wielodniowe
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  [Placeholder: Opis rezerwacji wielodniowych - idealne dla detailingu (PPF, ceramic coating), automatyczne blokowanie stanowiska na kilka dni, wizualizacja postępu pracy, informowanie klienta o statusie.]
                </p>
              </div>
              <div className="flex-1 order-1 lg:order-2">
                <div className="bg-muted rounded-2xl aspect-[4/3] flex items-center justify-center border border-border">
                  <div className="text-center p-8">
                    <Clock className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                    <p className="text-muted-foreground font-medium">rezerwacja-wielodniowa.jpg</p>
                    <p className="text-sm text-muted-foreground/70">Rezerwacja rozciągnięta na kilka dni</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Breaks & Closed Days Section */}
        <section className="py-16 md:py-20 border-b border-border">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
              Przerwy techniczne i dni zamknięte
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Block hours */}
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                    <Pause className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Blokowanie godzin lub całych dni
                    </h3>
                    <p className="text-muted-foreground">
                      [Placeholder: Opis blokowania - przerwy techniczne, dni wolne, święta, konserwacje sprzętu, szkolenia, automatyczne blokowanie rezerwacji online.]
                    </p>
                  </div>
                </div>
              </div>

              {/* Employee vacations */}
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Urlopy pracowników
                    </h3>
                    <p className="text-muted-foreground">
                      [Placeholder: Opis zarządzania urlopami - planowanie nieobecności, automatyczne przekierowanie rezerwacji, powiadomienia dla managera, widok dostępności zespołu.]
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Online Booking Integration Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
              Integracja z rezerwacjami online
            </h2>

            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-12">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                    Klienci rezerwują przez widget 24/7
                  </h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  [Placeholder: Opis widgetu rezerwacji online - osadzenie na stronie WWW, wybór usługi i terminu, automatyczne dodawanie do kalendarza, bez telefonów i wiadomości.]
                </p>
              </div>
              <div className="flex-1">
                <div className="bg-muted rounded-2xl aspect-[4/3] flex items-center justify-center border border-border">
                  <div className="text-center p-8">
                    <Globe className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                    <p className="text-muted-foreground font-medium">widget-rezerwacji-online.jpg</p>
                    <p className="text-sm text-muted-foreground/70">Widget rezerwacji na stronie WWW</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="flex-1 order-2 lg:order-1">
                <div className="bg-muted rounded-2xl aspect-[4/3] flex items-center justify-center border border-border">
                  <div className="text-center p-8">
                    <MessageSquare className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                    <p className="text-muted-foreground font-medium">sms-potwierdzenie.jpg</p>
                    <p className="text-sm text-muted-foreground/70">Przykład SMS potwierdzenia</p>
                  </div>
                </div>
              </div>
              <div className="flex-1 order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                    Automatyczne potwierdzenia SMS
                  </h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  [Placeholder: Opis automatycznych SMS - potwierdzenie rezerwacji, przypomnienia 24h i 1h przed wizytą, możliwość odpowiedzi przez klienta, statystyki dostarczenia.]
                </p>
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
                to="/funkcje/rezerwacje-online"
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors group"
              >
                <Globe className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">Rezerwacje online</h3>
                <p className="text-sm text-muted-foreground mt-1">Widget do osadzenia na Twojej stronie</p>
              </Link>
              <Link 
                to="/funkcje/sms-przypomnienia"
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors group"
              >
                <MessageSquare className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">SMS przypomnienia</h3>
                <p className="text-sm text-muted-foreground mt-1">Automatyczne powiadomienia dla klientów</p>
              </Link>
              <Link 
                to="/funkcje/zarzadzanie-zespolem"
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors group"
              >
                <Users className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">Zarządzanie zespołem</h3>
                <p className="text-sm text-muted-foreground mt-1">Grafiki, urlopy i uprawnienia</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-primary via-primary/90 to-sky-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
              Wypróbuj kalendarz N2Wash
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Zobacz jak łatwo zarządzać rezerwacjami w Twojej myjni lub studiu detailingu. 14 dni za darmo, bez zobowiązań.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                className="h-12 px-8 text-base font-semibold rounded-xl bg-white text-primary hover:bg-white/90"
              >
                <Link to="/umow-prezentacje">Umów bezpłatną prezentację</Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                className="h-12 px-8 text-base font-semibold rounded-xl border-white/30 text-white hover:bg-white/10"
              >
                <Link to="/cennik-crm-myjnia-detailing">Zobacz cennik</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default KalendarzRezerwacji;

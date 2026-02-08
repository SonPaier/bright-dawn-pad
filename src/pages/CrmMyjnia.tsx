import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, Users, MessageSquare, BarChart3, Monitor, Smartphone, Clock, Car } from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
const CrmMyjnia = () => {
  useEffect(() => {
    // Update meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "System CRM dedykowany dla myjni ręcznych. Rezerwacje, kalendarz, baza klientów, SMS. Idealne dla myjni 1-5 stanowisk. Zacznij za 129 zł/msc.");
    }
    document.title = "CRM dla Myjni Samochodowej – Oprogramowanie dla Małych i Średnich Myjni | N2Wash";
  }, []);
  return <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary/90 to-sky-900 text-white py-32 md:py-48">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-4xl leading-tight">CRM dla ręcznej myjni samochodowej</h1>
            
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl">System CRM dedykowany dla myjni ręcznych. Rezerwacje, kalendarz, baza klientów, przypomnienia SMS, raportowanie czasu pracy.</p>

            <div className="mt-8">
              <Button asChild className="h-12 px-8 text-base font-semibold rounded-xl bg-white text-primary hover:bg-white/90">
                <Link to="/umow-prezentacje">Umów prezentację</Link>
              </Button>
            </div>

            <p className="mt-4 text-sm text-white/60">
              Od 129 zł/msc • Bez zobowiązań • 14 dni za darmo
            </p>
          </div>
        </section>

        {/* Why CRM Section */}
        <section className="py-16 md:py-20 border-b border-border">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-6">
              Dlaczego myjnie ręczne potrzebują dedykowanego CRM?
            </h2>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto text-lg">Prowadzenie myjni to nie tylko mycie aut – to walka o optymalne obłożenie grafiku. Uniwersalne programy do zarządzania czy arkusze w Excelu nie rozumieją specyfiki Twojej pracy. Dedykowany system CRM zamienia chaos w uporządkowaną maszynę do zarabiania pieniędzy. </p>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
              Największe wyzwania właścicieli myjni
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Challenge 1 */}
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Rezerwacje przez telefon w godzinach pracy
                    </h3>
                    <p className="text-muted-foreground">
                      [Placeholder: Opis problemu z odbieraniem telefonów podczas pracy, utracone rezerwacje, frustracja klientów którzy nie mogą się dodzwonić.]
                    </p>
                  </div>
                </div>
              </div>

              {/* Challenge 2 */}
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Klienci zapominają o umówionych wizytach
                    </h3>
                    <p className="text-muted-foreground">
                      [Placeholder: Problem no-show, puste stanowiska, utracone przychody, brak systemu przypomnień.]
                    </p>
                  </div>
                </div>
              </div>

              {/* Challenge 3 */}
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <Car className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Brak historii mycia pojazdu
                    </h3>
                    <p className="text-muted-foreground">
                      [Placeholder: Niemożność sprawdzenia co było robione przy poprzedniej wizycie, brak personalizacji usługi, utracone szanse na upselling.]
                    </p>
                  </div>
                </div>
              </div>

              {/* Challenge 4 */}
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Trudności z organizacją pracy stanowisk
                    </h3>
                    <p className="text-muted-foreground">
                      [Placeholder: Chaos przy wielu stanowiskach, nakładające się rezerwacje, nieefektywne wykorzystanie zasobów.]
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section with Images */}
        <section className="py-16 md:py-20 border-b border-border">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
              Jak N2Wash pomaga zarządzać myjnią?
            </h2>

            {/* Solution 1 - Image Right */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-16 lg:mb-20">
              <div className="flex-1 order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                    Kalendarz rezerwacji dla 1-10 stanowisk
                  </h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  [Placeholder: Opis funkcji kalendarza - podział na stanowiska, drag & drop, widok dzienny/tygodniowy, szybkie dodawanie rezerwacji, kolory dla różnych usług.]
                </p>
              </div>
              <div className="flex-1 order-1 lg:order-2">
                <div className="bg-muted rounded-2xl aspect-[4/3] flex items-center justify-center border border-border">
                  <div className="text-center p-8">
                    <Calendar className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                    <p className="text-muted-foreground font-medium">kalendarz-stanowiska-myjni.jpg</p>
                    <p className="text-sm text-muted-foreground/70">Kalendarz z podziałem na stanowiska myjni</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Solution 2 - Image Left */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-16 lg:mb-20">
              <div className="flex-1">
                <div className="bg-muted rounded-2xl aspect-[4/3] flex items-center justify-center border border-border">
                  <div className="text-center p-8">
                    <Monitor className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                    <p className="text-muted-foreground font-medium">widok-ekranu-hala.jpg</p>
                    <p className="text-sm text-muted-foreground/70">Widok ekranu dla pracowników na hali</p>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Monitor className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                    Widok na żywo dla pracowników na hali
                  </h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  [Placeholder: Opis trybu halowego - duży ekran TV/monitor, aktualne i nadchodzące rezerwacje, informacje o pojeździe i usłudze, bez konieczności pytania managera.]
                </p>
              </div>
            </div>

            {/* Solution 3 - Image Right */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-16 lg:mb-20">
              <div className="flex-1 order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                    Automatyczne SMS przypomnienia
                  </h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  [Placeholder: Opis systemu SMS - przypomnienia 24h i 1h przed wizytą, potwierdzenia rezerwacji, możliwość personalizacji treści, statystyki dostarczenia.]
                </p>
              </div>
              <div className="flex-1 order-1 lg:order-2">
                <div className="bg-muted rounded-2xl aspect-[4/3] flex items-center justify-center border border-border">
                  <div className="text-center p-8">
                    <Smartphone className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                    <p className="text-muted-foreground font-medium">wlasciciel-myjni-telefon.jpg</p>
                    <p className="text-sm text-muted-foreground/70">Właściciel myjni zarządzający przez telefon</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Solution 4 - Full Width */}
            <div className="bg-card rounded-2xl p-8 md:p-12 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                  Raporty i analityka sprzedaży
                </h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
                [Placeholder: Opis raportów - dzienna/tygodniowa/miesięczna sprzedaż, najpopularniejsze usługi, statystyki pracowników, porównanie okresów, eksport do Excel.]
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-primary via-primary/90 to-sky-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
              Gotowy, by usprawnić swoją myjnię?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Dołącz do setek myjni, które już korzystają z N2Wash. Zacznij bezpłatny okres próbny już dziś.
            </p>
            <Button asChild className="h-12 px-8 text-base font-semibold rounded-xl bg-white text-primary hover:bg-white/90">
              <Link to="/umow-prezentacje">Umów bezpłatną prezentację</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default CrmMyjnia;
import { useEffect } from "react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import StatBox from "@/components/case-study/StatBox";
import QuoteCard from "@/components/case-study/QuoteCard";
import ImagePlaceholder from "@/components/case-study/ImagePlaceholder";
import logoArmcar from "@/assets/logo-armcar.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  MessageSquare,
  FileText,
  Users,
  RefreshCw,
  ArrowRight
} from "lucide-react";

const CaseStudiesPage = () => {
  useEffect(() => {
    document.title = "ARM-CAR Detailing Case Study – Jak Odzyskać 10h Tygodniowo | N2Wash";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Case study ARM-CAR Detailing z Gdańska. Zobacz jak N2Wash pomógł zwiększyć obroty o 10% i zaoszczędzić 10 godzin tygodniowo."
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-32 md:py-48 bg-gradient-to-b from-muted to-background">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-8">
                <img 
                  src={logoArmcar} 
                  alt="ARM-CAR Detailing & Wrapping" 
                  className="h-16 md:h-20 object-contain"
                />
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Jak studio Arm Car Detailing odzyskało{" "}
                <span className="text-primary">10 godzin tygodniowo</span>{" "}
                i zwiększyło obroty dzięki N2Wash
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Armen, właściciel gdańskiego studia Arm Car Detailing & Wrapping, zna swój fach jak mało kto. 
                Od lat buduje markę kojarzoną z precyzją – od mycia premium, przez zabezpieczanie lakieru 
                foliami PPF, aż po kompleksowy wrapping. Jednak sukces przyniósł ze sobą niespodziewanego 
                przeciwnika: chaos organizacyjny.
              </p>
            </div>
          </div>
        </section>

        {/* Wyzwanie Section */}
        <section className="py-20 md:py-32">
          <div className="container px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-12 text-center">
                Wyzwanie: Codzienność w cieniu papierowego zeszytu
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                <ImagePlaceholder 
                  description="Zdjęcie papierowego zeszytu z rezerwacjami lub chaotycznego biurka studia"
                  aspectRatio="4:3"
                />
                
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Przed wdrożeniem N2Wash, sercem firmy był papierowy kalendarz i arkusz w Excelu. 
                    Każda rezerwacja wymagała fizycznej obecności właściciela przy zeszycie lub dziesiątek 
                    telefonów po godzinach pracy.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Statystyki były nieubłagane: <strong className="text-foreground">co dziesiąty zapis 
                    kończył się pomyłką w terminach</strong>, a <strong className="text-foreground">5-10% 
                    klientów po prostu nie pojawiało się na wizycie</strong>. Armen pracował po 50 godzin 
                    tygodniowo, czując narastające zmęczenie ciągłą koniecznością bycia „pod telefonem" 
                    przez całą dobę.
                  </p>
                </div>
              </div>
              
              <QuoteCard
                text="Musiałem być dostępny non-stop. Pół dnia spędzałem na telefonach zamiast rozwijać biznes. Bałem się, że stracę klienta, jeśli nie odbieram wieczorem."
                author="Armen"
                role="Właściciel, ARM-CAR Detailing & Wrapping"
                logo={logoArmcar}
                size="lg"
              />
            </div>
          </div>
        </section>

        {/* Rozwiązanie Section */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-12 text-center">
                Rozwiązanie: Cyfrowa rewolucja w trzy dni
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Decyzja o przejściu na system SaaS często wiąże się z obawą o skomplikowane wdrożenie. 
                    W przypadku Arm Car Detailing proces ten został skrócony do minimum.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Zespół N2Wash <strong className="text-foreground">w zaledwie trzy dni</strong> przeniósł 
                    bazę klientów i cennik do aplikacji. Armen, zamiast tracić czas na naukę systemu, 
                    otrzymał gotowe narzędzie, które od pierwszego dnia wyeliminowało błędy i puste przebiegi.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Koszt systemu okazał się inwestycją</strong>, która 
                    zwraca się już przy jednej uratowanej rezerwacji.
                  </p>
                </div>
                
                <div className="order-1 lg:order-2">
                  <ImagePlaceholder 
                    description="Screenshot kalendarza N2Wash lub widok aplikacji na tablecie"
                    aspectRatio="4:3"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Grid */}
        <section className="py-20 md:py-32">
          <div className="container px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4 text-center">
                Kluczowe zmiany w liczbach
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Konkretne rezultaty, które mówią same za siebie
              </p>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatBox
                  value="10h"
                  label="odzyskanego czasu"
                  sublabel="tygodniowo"
                  variant="primary"
                  size="lg"
                />
                <StatBox
                  value="+10%"
                  label="wzrost obrotów"
                  sublabel="miesięcznie"
                  variant="success"
                  size="lg"
                />
                <StatBox
                  value="0%"
                  label="pomyłek"
                  sublabel="w rezerwacjach"
                  variant="success"
                  size="lg"
                />
                <StatBox
                  value="425 zł"
                  label="brutto miesięcznie"
                  sublabel="dla 4 stanowisk"
                  variant="neutral"
                  size="lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Rezultaty Section */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-12 text-center">
                Rezultaty: Zarządzanie oparte na danych
              </h2>
              
              <div className="space-y-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      N2Wash zmienił studio w organizację sterowaną danymi. Funkcja ewidencji czasu pracy 
                      pozwoliła Armenowi zrozumieć, ile realnie trwają poszczególne usługi, co umożliwiło
                      <strong className="text-foreground"> precyzyjną korektę cennika i wyższą rentowność</strong>.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Najbardziej spektakularnym efektem była jednak <strong className="text-foreground">niemal 
                      całkowita eliminacja zjawiska „no-show"</strong> dzięki automatycznym przypomnieniom SMS 
                      wysyłanym do klientów.
                    </p>
                  </div>
                  
                  <ImagePlaceholder 
                    description="Dashboard z raportami i statystykami lub widok tabletu pracownika"
                    aspectRatio="4:3"
                  />
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                  Pracownicy zyskali autonomię – sami raportują postępy na tabletach, dodają dokumentację 
                  zdjęciową i wysyłają powiadomienia o odbiorze auta. Dzięki temu Armen może zarządzać 
                  studiem zdalnie, mając wgląd w każdą rezerwację i czas pracy zespołu bezpośrednio 
                  ze swojego telefonu, bez konieczności ciągłego dzwonienia do pracowników.
                </p>
                
                <QuoteCard
                  text="Dzięki lepszej skuteczności ofert i zerowym no-show zarabiam więcej, pracując mniej. Koszt aplikacji zwraca się wielokrotnie już w pierwszym miesiącu."
                  author="Armen"
                  role="Właściciel, ARM-CAR Detailing & Wrapping"
                  logo={logoArmcar}
                  size="lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits List Section */}
        <section className="py-20 md:py-32">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-12 text-center">
                Co zyskało studio?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card rounded-2xl border border-border p-6 hover:border-primary/20 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-sky-500/10 flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-lg mb-2">Automatyczne przypomnienia SMS</h3>
                      <p className="text-muted-foreground">
                        Koniec z zapominalskimi klientami – no-show spadło niemal do zera.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-card rounded-2xl border border-border p-6 hover:border-primary/20 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-sky-500/10 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-lg mb-2">Generator ofert</h3>
                      <p className="text-muted-foreground">
                        Tworzenie profesjonalnych ofert w kilka minut, nawet z poziomu telefonu podczas treningu.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-card rounded-2xl border border-border p-6 hover:border-primary/20 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-sky-500/10 flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-lg mb-2">Autonomia zespołu</h3>
                      <p className="text-muted-foreground">
                        Pracownicy sami zarządzają statusami prac i raportują czas wykonania usług.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-card rounded-2xl border border-border p-6 hover:border-primary/20 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-sky-500/10 flex items-center justify-center flex-shrink-0">
                      <RefreshCw className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-lg mb-2">Powracalność klientów</h3>
                      <p className="text-muted-foreground">
                        System automatycznie przypomina o przeglądach powłok, co zwiększyło liczbę powracających klientów o 30%.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-primary/3 to-sky-500/5">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6">
                Twój biznes też może działać bez Twojej ciągłej obecności
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                Jeśli masz dość zeszytów i uciekających rezerwacji – umów się na bezpłatną prezentację N2Wash.
              </p>
              <Button asChild size="lg" className="text-lg px-8 py-6 h-auto rounded-full">
                <Link to="/kontakt">
                  Umów bezpłatną prezentację
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;

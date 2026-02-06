import { useEffect } from "react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import StatBox from "@/components/case-study/StatBox";
import ImagePlaceholder from "@/components/case-study/ImagePlaceholder";

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
        <section className="pt-24 md:pt-32 pb-10 md:pb-14 bg-gradient-to-b from-muted to-background">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-center">
                Jak studio Arm Car Detailing odzyskało{" "}
                <span className="text-primary">10 godzin tygodniowo</span>{" "}
                i zwiększyło obroty dzięki N2Wash
              </h1>
            </div>
          </div>
        </section>

        {/* O kliencie Section */}
        <section className="py-10 md:py-14">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-xl md:text-3xl font-bold text-foreground mb-6">
                O kliencie
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Armen, właściciel gdańskiego studia Arm Car Detailing & Wrapping, zna swój fach jak mało kto. 
                Od lat buduje markę kojarzoną z precyzją – od mycia premium, przez zabezpieczanie lakieru 
                foliami PPF, aż po kompleksowy wrapping. Jednak sukces przyniósł ze sobą niespodziewanego 
                przeciwnika: chaos organizacyjny.
              </p>
            </div>
          </div>
        </section>

        {/* Wyzwanie Section */}
        <section className="py-10 md:py-14">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-xl md:text-3xl font-bold text-foreground mb-6">
                Wyzwanie: Codzienność w cieniu papierowego zeszytu
              </h2>
              
              <ImagePlaceholder 
                description="Zdjęcie papierowego zeszytu z rezerwacjami lub chaotycznego biurka studia"
                aspectRatio="16:9"
                className="mb-6"
              />
              
              <p className="text-foreground/80 leading-relaxed mb-4">
                Przed wdrożeniem N2Wash, sercem firmy był papierowy kalendarz i arkusz w Excelu. 
                Każda rezerwacja wymagała fizycznej obecności właściciela przy zeszycie lub dziesiątek 
                telefonów po godzinach pracy.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Statystyki były nieubłagane: <strong className="text-foreground">co dziesiąty zapis 
                kończył się pomyłką w terminach</strong>, a <strong className="text-foreground">5-10% 
                klientów po prostu nie pojawiało się na wizycie</strong>. Armen pracował po 50 godzin 
                tygodniowo, czując narastające zmęczenie ciągłą koniecznością bycia „pod telefonem" 
                przez całą dobę.
              </p>
              
              <blockquote className="border-l-4 border-primary pl-6 py-2 my-6 bg-muted/30 rounded-r-lg">
                <p className="text-foreground italic text-lg">
                  „Musiałem być dostępny non-stop. Pół dnia spędzałem na telefonach zamiast rozwijać biznes. Bałem się, że stracę klienta, jeśli nie odbieram wieczorem."
                </p>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Rozwiązanie Section */}
        <section className="py-10 md:py-14 bg-muted/30">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-xl md:text-3xl font-bold text-foreground mb-6">
                Rozwiązanie: Cyfrowa rewolucja w trzy dni
              </h2>
              
              <ImagePlaceholder 
                description="Screenshot kalendarza N2Wash lub widok aplikacji na tablecie"
                aspectRatio="16:9"
                className="mb-6"
              />
              
              <p className="text-foreground/80 leading-relaxed mb-4">
                Decyzja o przejściu na system SaaS często wiąże się z obawą o skomplikowane wdrożenie. 
                W przypadku Arm Car Detailing proces ten został skrócony do minimum.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Zespół N2Wash <strong className="text-foreground">w zaledwie trzy dni</strong> przeniósł 
                bazę klientów i cennik do aplikacji. Armen, zamiast tracić czas na naukę systemu, 
                otrzymał gotowe narzędzie, które od pierwszego dnia wyeliminowało błędy i puste przebiegi.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                <strong className="text-foreground">Koszt systemu okazał się inwestycją</strong>, która 
                zwraca się już przy jednej uratowanej rezerwacji.
              </p>
            </div>
          </div>
        </section>

        {/* Metrics Grid */}
        <section className="py-10 md:py-14">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-xl md:text-3xl font-bold text-foreground mb-2 text-center">
                Kluczowe zmiany w liczbach
              </h2>
              <p className="text-foreground/70 text-center mb-6">
                Konkretne rezultaty, które mówią same za siebie
              </p>
              
              <div className="grid grid-cols-3 gap-4">
                <StatBox
                  value="40h"
                  label="odzyskanego czasu"
                  sublabel="miesięcznie"
                  variant="primary"
                  size="md"
                />
                <StatBox
                  value="+10%"
                  label="wzrost obrotów"
                  sublabel="miesięcznie"
                  variant="success"
                  size="md"
                />
                <StatBox
                  value="0%"
                  label="pomyłek"
                  sublabel="w rezerwacjach"
                  variant="success"
                  size="md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Rezultaty Section */}
        <section className="py-10 md:py-14 bg-muted/30">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-xl md:text-3xl font-bold text-foreground mb-6">
                Rezultaty: Zarządzanie oparte na danych
              </h2>
              
              <p className="text-foreground/80 leading-relaxed mb-4">
                N2Wash zmienił studio w organizację sterowaną danymi. Funkcja ewidencji czasu pracy 
                pozwoliła Armenowi zrozumieć, ile realnie trwają poszczególne usługi, co umożliwiło
                <strong className="text-foreground"> precyzyjną korektę cennika i wyższą rentowność</strong>.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Najbardziej spektakularnym efektem była jednak <strong className="text-foreground">niemal 
                całkowita eliminacja zjawiska „no-show"</strong> dzięki automatycznym przypomnieniom SMS 
                wysyłanym do klientów.
              </p>
              
              <ImagePlaceholder 
                description="Dashboard z raportami i statystykami lub widok tabletu pracownika"
                aspectRatio="16:9"
                className="mb-6"
              />
              
              <p className="text-foreground/80 leading-relaxed mb-6">
                Pracownicy zyskali autonomię – sami raportują postępy na tabletach, dodają dokumentację 
                zdjęciową i wysyłają powiadomienia o odbiorze auta. Dzięki temu Armen może zarządzać 
                studiem zdalnie, mając wgląd w każdą rezerwację i czas pracy zespołu bezpośrednio 
                ze swojego telefonu, bez konieczności ciągłego dzwonienia do pracowników.
              </p>
              
              <blockquote className="border-l-4 border-primary pl-6 py-2 my-6 bg-background/50 rounded-r-lg">
                <p className="text-foreground italic text-lg">
                  „Dzięki lepszej skuteczności ofert i zerowym no-show zarabiam więcej, pracując mniej. Koszt aplikacji zwraca się wielokrotnie już w pierwszym miesiącu."
                </p>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Benefits List Section */}
        <section className="py-10 md:py-14">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-xl md:text-3xl font-bold text-foreground mb-6">
                Co zyskało studio?
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Automatyczne przypomnienia SMS</h3>
                    <p className="text-foreground/70 text-sm">
                      Koniec z zapominalskimi klientami – no-show spadło niemal do zera.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Generator ofert</h3>
                    <p className="text-foreground/70 text-sm">
                      Tworzenie profesjonalnych ofert w kilka minut, nawet z poziomu telefonu podczas treningu.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Autonomia zespołu</h3>
                    <p className="text-foreground/70 text-sm">
                      Pracownicy sami zarządzają statusami prac i raportują czas wykonania usług.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <RefreshCw className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Powracalność klientów</h3>
                    <p className="text-foreground/70 text-sm">
                      System automatycznie przypomina o przeglądach powłok, co zwiększyło liczbę powracających klientów o 30%.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 via-primary/3 to-sky-500/5">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-xl md:text-3xl font-bold text-foreground mb-4">
                Twój biznes też może działać bez Twojej ciągłej obecności
              </h2>
              <p className="text-foreground/70 mb-8">
                Jeśli masz dość zeszytów i uciekających rezerwacji – umów się na bezpłatną prezentację N2Wash.
              </p>
              <Button asChild size="lg" className="text-base px-6 py-5 h-auto rounded-full">
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

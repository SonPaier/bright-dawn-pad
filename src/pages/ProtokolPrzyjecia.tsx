import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, Camera, PenTool, Link2, Shield, Award, FolderOpen, ChevronRight, CheckCircle } from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";

const ProtokolPrzyjecia = () => {
  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Cyfrowy protokół przyjęcia pojazdu. Diagram uszkodzeń, zdjęcia, podpis klienta online. Koniec z papierowymi kartkami. Publiczny link dla klienta."
      );
    }
    document.title = "Protokół Przyjęcia Pojazdu dla Studia Detailingu – Cyfrowy Protokół ze Zdjęciami | N2Wash";
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
              <span className="text-white">Protokół przyjęcia pojazdu</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-4xl leading-tight">
              Protokół Przyjęcia Pojazdu dla Studia Detailingu – Cyfrowy Protokół ze Zdjęciami
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl">
              Diagram uszkodzeń, zdjęcia, podpis klienta online. Koniec z papierowymi kartkami. Publiczny link dla klienta.
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

        {/* Why Protocol Section */}
        <section className="py-16 md:py-20 border-b border-border">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-6">
              Dlaczego warto mieć protokół przyjęcia i wydania pojazdu?
            </h2>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto text-lg mb-12">
              [Placeholder: Wprowadzenie - ochrona przed reklamacjami, dokumentacja istniejących uszkodzeń, profesjonalizm, budowanie zaufania klienta, podstawa prawna w sporach.]
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-card rounded-2xl p-6 border border-border text-center">
                <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-7 h-7 text-destructive" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Ochrona przed reklamacjami</h3>
                <p className="text-sm text-muted-foreground">
                  [Placeholder: Dokumentacja stanu przed pracą chroni przed nieuzasadnionymi roszczeniami]
                </p>
              </div>
              <div className="bg-card rounded-2xl p-6 border border-border text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Dowód fotograficzny</h3>
                <p className="text-sm text-muted-foreground">
                  [Placeholder: Zdjęcia z datą i godziną - niepodważalny dowód stanu pojazdu]
                </p>
              </div>
              <div className="bg-card rounded-2xl p-6 border border-border text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <PenTool className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Podpis klienta</h3>
                <p className="text-sm text-muted-foreground">
                  [Placeholder: Cyfrowy podpis potwierdza akceptację stanu pojazdu przez klienta]
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Looks Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
              Jak wygląda protokół w N2Wash?
            </h2>

            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-5xl mx-auto">
              <div className="flex-1">
                <div className="bg-muted rounded-2xl aspect-[3/4] flex items-center justify-center border border-border">
                  <div className="text-center p-8">
                    <FileText className="w-20 h-20 text-muted-foreground/50 mx-auto mb-4" />
                    <p className="text-muted-foreground font-medium">protokol-widok-pelny.jpg</p>
                    <p className="text-sm text-muted-foreground/70">Pełny widok protokołu przyjęcia</p>
                  </div>
                </div>
              </div>
              <div className="flex-1 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Interaktywny diagram pojazdu</h3>
                    <p className="text-muted-foreground text-sm">
                      [Placeholder: Zaznaczanie uszkodzeń na schemacie auta - rysy, wgniecenia, odpryski]
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Galeria zdjęć</h3>
                    <p className="text-muted-foreground text-sm">
                      [Placeholder: Zdjęcia z aparatu telefonu, automatyczna data i godzina]
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Dane pojazdu i klienta</h3>
                    <p className="text-muted-foreground text-sm">
                      [Placeholder: Automatycznie uzupełniane z CRM lub ręcznie wprowadzane]
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Notatki i uwagi</h3>
                    <p className="text-muted-foreground text-sm">
                      [Placeholder: Dodatkowe informacje o stanie, życzenia klienta, historia pojazdu]
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                    5
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Podpis cyfrowy</h3>
                    <p className="text-muted-foreground text-sm">
                      [Placeholder: Klient podpisuje palcem na ekranie tabletu lub telefonu]
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Creating Protocol Section */}
        <section className="py-16 md:py-20 border-b border-border">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
              Tworzenie protokołu
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
              <div className="bg-muted rounded-2xl aspect-video flex items-center justify-center border border-border">
                <div className="text-center p-8">
                  <Camera className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                  <p className="text-muted-foreground font-medium">tworzenie-protokolu-tablet.jpg</p>
                  <p className="text-sm text-muted-foreground/70">Tworzenie protokołu na tablecie</p>
                </div>
              </div>
              <div className="bg-muted rounded-2xl aspect-video flex items-center justify-center border border-border">
                <div className="text-center p-8">
                  <FileText className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                  <p className="text-muted-foreground font-medium">diagram-uszkodzen.jpg</p>
                  <p className="text-sm text-muted-foreground/70">Zaznaczanie uszkodzeń na diagramie</p>
                </div>
              </div>
            </div>

            <div className="max-w-3xl mx-auto">
              <p className="text-muted-foreground text-lg text-center">
                [Placeholder: Opis procesu tworzenia protokołu - od przyjęcia pojazdu przez robienie zdjęć, zaznaczanie uszkodzeń, po podpis klienta. Cały proces trwa 3-5 minut i jest w pełni cyfrowy.]
              </p>
            </div>
          </div>
        </section>

        {/* Public Link Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-5xl mx-auto">
              <div className="flex-1 order-2 lg:order-1">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Publiczny link dla klienta
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  [Placeholder: Opis publicznego linku - klient otrzymuje link do protokołu, może go przejrzeć w dowolnym momencie, wszystkie zdjęcia i uszkodzenia widoczne, może pobrać PDF, historia wszystkich protokołów.]
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Klient widzi protokół w przeglądarce</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Wszystkie zdjęcia w pełnej rozdzielczości</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Możliwość pobrania PDF</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Historia protokołów tego pojazdu</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1 order-1 lg:order-2">
                <div className="bg-muted rounded-2xl aspect-[3/4] flex items-center justify-center border border-border">
                  <div className="text-center p-8">
                    <Link2 className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                    <p className="text-muted-foreground font-medium">protokol-widok-klienta.jpg</p>
                    <p className="text-sm text-muted-foreground/70">Jak klient widzi protokół na telefonie</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-20 border-b border-border">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
              Korzyści
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Benefit 1 */}
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Brak sporów o stan pojazdu
                </h3>
                <p className="text-muted-foreground">
                  [Placeholder: Opis korzyści - zdjęcia i diagram są dowodem stanu przed pracą, klient potwierdził podpisem, brak podstaw do reklamacji o istniejące wcześniej uszkodzenia.]
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Profesjonalny wizerunek
                </h3>
                <p className="text-muted-foreground">
                  [Placeholder: Opis korzyści - cyfrowy protokół robi wrażenie na klientach, wyróżnia od konkurencji, buduje zaufanie, pokazuje profesjonalne podejście.]
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <FolderOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Wszystko w jednym systemie
                </h3>
                <p className="text-muted-foreground">
                  [Placeholder: Opis korzyści - koniec z szukaniem kartek w szafie, wszystkie protokoły w chmurze, szybkie wyszukiwanie po numerze rejestracyjnym, powiązanie z rezerwacją i ofertą.]
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Features */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
              Powiązane funkcje
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Link 
                to="/funkcje/generator-ofert"
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors group"
              >
                <FileText className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">Generator ofert</h3>
                <p className="text-sm text-muted-foreground mt-1">Twórz profesjonalne wyceny</p>
              </Link>
              <Link 
                to="/crm/crm-dla-studia-detailingu"
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors group"
              >
                <Camera className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">CRM dla detailingu</h3>
                <p className="text-sm text-muted-foreground mt-1">Pełne rozwiązanie dla studia</p>
              </Link>
              <Link 
                to="/funkcje/sms-przypomnienia"
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors group"
              >
                <Shield className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">SMS przypomnienia</h3>
                <p className="text-sm text-muted-foreground mt-1">Automatyczne powiadomienia</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-primary via-primary/90 to-sky-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
              Koniec z papierowymi protokołami
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Przejdź na cyfrowe protokoły przyjęcia i chroń swoje studio przed nieuzasadnionymi reklamacjami.
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

export default ProtokolPrzyjecia;

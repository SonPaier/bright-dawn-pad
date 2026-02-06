import { useEffect } from "react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import StatBox from "@/components/case-study/StatBox";
import QuoteCard from "@/components/case-study/QuoteCard";
import ImagePlaceholder from "@/components/case-study/ImagePlaceholder";
import BeforeAfterTable from "@/components/case-study/BeforeAfterTable";
import FeatureCard from "@/components/case-study/FeatureCard";
import logoArmcar from "@/assets/logo-armcar.png";
import { 
  MapPin, 
  Car, 
  Wrench, 
  AlertTriangle,
  DollarSign,
  Clock,
  Users,
  CheckCircle,
  TrendingUp,
  Calendar,
  FileText,
  MessageSquare,
  BarChart3,
  ArrowRight,
  Play,
  Square,
  UserCheck,
  Timer
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

  const problemStats = [
    { value: "10%", label: "rezerwacji z pomyłką", sublabel: "nakładające się terminy" },
    { value: "5-10%", label: "no-show klientów", sublabel: "bez przypomnień SMS" },
    { value: "2-4", label: "utracone rezerwacje", sublabel: "tygodniowo po godzinach" },
  ];

  const ownerStats = [
    { value: "50h", label: "pracy tygodniowo" },
    { value: "25h", label: "na obsłudze klientów" },
  ];

  const beforeAfterData = [
    { label: "No-show klientów", before: "5-10%", after: "~0%" },
    { label: "Pomyłki w rezerwacjach", before: "10%", after: "0%" },
    { label: "Telefony od klientów", before: "100%", after: "-20%" },
  ];

  const businessGrowthStats = [
    { value: "+40-50", label: "rezerwacji", sublabel: "miesięcznie (+13-17%)" },
    { value: "~10%", label: "wzrost obrotów", sublabel: "miesięcznie" },
    { value: "+10%", label: "średni koszyk", sublabel: "na myjni" },
    { value: "+5%", label: "średni koszyk", sublabel: "w ofertach detailingowych" },
  ];

  const teamFeatures = [
    "Kto przyjeżdża i jakim samochodem",
    "Jakie usługi mają wykonać",
    "Historia wizyt klienta",
    "Zmiana statusów rezerwacji",
    "Wysyłanie SMS o odbiorze auta",
    "Dodawanie usług na miejscu",
    "Tworzenie protokołów przyjęcia",
    "Dodawanie zdjęć uszkodzeń",
  ];

  const summaryPoints = [
    "Odzyskało pełną kontrolę nad chaosem organizacyjnym",
    "Uwolniło właściciela od konieczności bycia 'na telefonie' 24/7",
    "Zwiększyło obroty o 10% przy mniejszym nakładzie pracy właściciela",
    "Stworzyło autonomiczny, efektywny zespół",
    "Zoptymalizowało cennik na podstawie twardych danych",
    "Dało właścicielowi czas na rozwój firmy i życie prywatne",
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-64 pb-32 md:pt-96 md:pb-48 bg-gradient-to-b from-primary/5 to-background">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span>Case Study</span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Jak studio z Gdańska odzyskało <span className="text-primary">10 godzin tygodniowo</span> i zwiększyło obroty o <span className="text-primary">10%</span> dzięki N2Wash
              </h1>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
                <img
                  src={logoArmcar}
                  alt="ARM-CAR Detailing & Wrapping"
                  className="h-16 w-auto"
                />
                <div className="text-center md:text-left">
                  <p className="font-semibold text-foreground">ARM-CAR Detailing & Wrapping</p>
                  <p className="text-muted-foreground flex items-center gap-1 justify-center md:justify-start">
                    <MapPin className="w-4 h-4" /> Gdańsk, Al. Grunwaldzka 229
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* O kliencie */}
        <section className="py-20 md:py-28 bg-section-alt">
          <div className="container px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-8 text-center">
                O kliencie
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="bg-card rounded-2xl border border-border p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <img src={logoArmcar} alt="ARM-CAR" className="h-14 w-auto" />
                    <div>
                      <h3 className="font-bold text-foreground text-lg">ARM-CAR Detailing & Wrapping</h3>
                      <p className="text-muted-foreground text-sm">Studio detailingowe z Gdańska</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Lokalizacja</p>
                        <p className="text-muted-foreground text-sm">Aleja Grunwaldzka 229, Gdańsk</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Car className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">4 stanowiska</p>
                        <p className="text-muted-foreground text-sm">2× myjnia ręczna, 1× detailing, 1× PPF/wrapping</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Wrench className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Zakres usług</p>
                        <p className="text-muted-foreground text-sm">Od mycia premium, przez korekty lakieru i powłoki ceramiczne, aż po wrapping i zmianę koloru karoserii</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <ImagePlaceholder 
                  description="Zdjęcie zewnętrzne lub wnętrze studia ARM-CAR" 
                  aspectRatio="4:3"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Wyzwanie */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-6 justify-center">
                <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-destructive" />
                </div>
                <h2 className="text-2xl md:text-4xl font-bold text-foreground">
                  Wyzwanie
                </h2>
              </div>
              <p className="text-center text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                Chaos organizacyjny i przepracowanie właściciela
              </p>

              {/* Intro Quote */}
              <QuoteCard
                text="Musiałem być dostępny non-stop. Pół dnia spędzałem na telefonach zamiast rozwijać biznes. Bałem się że stracę klienta jeśli nie odbieram wieczorem."
                author="Armen"
                role="Właściciel, ARM-CAR Detailing & Wrapping"
                logo={logoArmcar}
                size="lg"
                className="mb-12"
              />

              {/* Problem Cards */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Chaos organizacyjny */}
                <div className="bg-card rounded-2xl border border-border p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                      <span className="text-lg font-bold text-destructive">1</span>
                    </div>
                    <h3 className="font-bold text-foreground text-lg">Chaos organizacyjny</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Zarządzanie rezerwacjami za pomocą Excela i papierowego zeszytu. Nakładające się terminy, zgubione rezerwacje i nieczytelne, przekreślone wpisy.
                  </p>
                  <StatBox 
                    value="10%" 
                    label="rezerwacji z pomyłką" 
                    variant="warning"
                    size="sm"
                  />
                </div>

                {/* Utracone pieniądze */}
                <div className="bg-card rounded-2xl border border-border p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                      <span className="text-lg font-bold text-destructive">2</span>
                    </div>
                    <h3 className="font-bold text-foreground text-lg">Utracone pieniądze</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Bez automatycznych przypomnień SMS klienci zapominali o rezerwacjach. Dziury w grafiku i tracone rezerwacje po godzinach pracy.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <StatBox 
                      value="5-10%" 
                      label="no-show" 
                      variant="warning"
                      size="sm"
                    />
                    <StatBox 
                      value="2-4" 
                      label="utracone/tydzień" 
                      variant="warning"
                      size="sm"
                    />
                  </div>
                </div>

                {/* Przepracowanie właściciela */}
                <div className="bg-card rounded-2xl border border-border p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                      <span className="text-lg font-bold text-destructive">3</span>
                    </div>
                    <h3 className="font-bold text-foreground text-lg">Przepracowanie właściciela</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Notowanie tych samych danych, odpowiadanie na pytania „na którą mam wizytę?", brak szybkiego podglądu wolnych terminów.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <StatBox 
                      value="50h" 
                      label="pracy/tydzień" 
                      variant="warning"
                      size="sm"
                    />
                    <StatBox 
                      value="25h" 
                      label="na obsłudze klientów" 
                      variant="warning"
                      size="sm"
                    />
                  </div>
                </div>

                {/* Sparaliżowani pracownicy */}
                <div className="bg-card rounded-2xl border border-border p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                      <span className="text-lg font-bold text-destructive">4</span>
                    </div>
                    <h3 className="font-bold text-foreground text-lg">Sparaliżowani pracownicy</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Zespół nie wiedział co robić, gdy Armen nie odbierał telefonu. Brakowało informacji o nadchodzących rezerwacjach – kto przyjeżdża, jakim autem, jakie usługi mają wykonać.
                  </p>
                </div>
              </div>

              <ImagePlaceholder 
                description="Papierowy zeszyt z rezerwacjami, chaos, przekreślone wpisy" 
                aspectRatio="16:9"
                className="max-w-2xl mx-auto"
              />
            </div>
          </div>
        </section>

        {/* Rozwiązanie */}
        <section className="py-20 md:py-28 bg-section-alt">
          <div className="container px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-6 justify-center">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl md:text-4xl font-bold text-foreground">
                  Rozwiązanie
                </h2>
              </div>
              <p className="text-center text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                Wdrożenie N2Wash
              </p>

              <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
                {/* Obawy przed zmianą */}
                <div className="bg-card rounded-2xl border border-border p-8">
                  <h3 className="font-bold text-foreground text-xl mb-4">Obawy przed zmianą</h3>
                  <p className="text-muted-foreground mb-4">
                    Jak każdy właściciel biznesu, Armen miał wątpliwości:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Czy aplikacja nie będzie skomplikowana?",
                      "Czy będzie działać sprawnie na telefonie?",
                      "Czy pracownicy przestawią się na nową technologię?",
                      "Czy system będzie dostosowany do specyfiki detailingu?",
                      "Czy wsparcie techniczne będzie odpowiadać?",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-muted-foreground/50">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 font-medium text-foreground">
                    Największą obawą było: <span className="text-destructive">„Czy to nie będą wyrzucone pieniądze?"</span>
                  </p>
                </div>

                {/* Bezbolesne wdrożenie */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-500/20 p-8">
                    <h3 className="font-bold text-foreground text-xl mb-4">Bezbolesne wdrożenie</h3>
                    <p className="text-muted-foreground mb-6">
                      Armen przekazał swoją bazę klientów i cennik usług. Zespół N2Wash wprowadził wszystkie dane i stworzył gotowe szablony ofert.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <StatBox 
                        value="3 dni" 
                        label="do pełnej konfiguracji" 
                        variant="success"
                        size="md"
                      />
                      <StatBox 
                        value="~425 zł" 
                        label="brutto/miesiąc" 
                        sublabel="4 stanowiska"
                        variant="success"
                        size="md"
                      />
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    <strong>Pakiet Detailing:</strong> 199 zł netto za pierwsze stanowisko + 3×49 zł za kolejne
                  </p>
                </div>
              </div>

              <ImagePlaceholder 
                description="Screenshot kalendarza N2Wash z rezerwacjami na 4 stanowiskach" 
                aspectRatio="16:9"
                className="max-w-3xl mx-auto"
              />
            </div>
          </div>
        </section>

        {/* Rezultaty */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-6 justify-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-4xl font-bold text-foreground">
                  Rezultaty
                </h2>
              </div>
              <p className="text-center text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                Konkretne liczby, które mówią wszystko
              </p>

              {/* Wzrost biznesu */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  Wzrost biznesu
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {businessGrowthStats.map((stat, index) => (
                    <StatBox 
                      key={index}
                      value={stat.value} 
                      label={stat.label}
                      sublabel={stat.sublabel}
                      variant="success"
                      size="md"
                    />
                  ))}
                </div>
              </div>

              {/* Eliminacja problemów */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Eliminacja problemów
                </h3>
                <BeforeAfterTable rows={beforeAfterData} className="max-w-2xl" />
              </div>

              {/* Grid: Oszczędność czasu + Autonomia */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Oszczędność czasu */}
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Oszczędność czasu właściciela
                  </h3>
                  <StatBox 
                    value="10h" 
                    label="oszczędności tygodniowo" 
                    sublabel="~1h dziennie mniej na telefonach + 1h na ofertowaniu"
                    variant="primary"
                    size="lg"
                    className="mb-4"
                  />
                  <p className="text-muted-foreground text-sm">
                    <strong>Co robi Armen z tym czasem?</strong> Skupia się na marketingu, rozwoju biznesu, swoim hobby i czasie dla rodziny.
                  </p>
                </div>

                {/* Autonomia zespołu */}
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Autonomia zespołu
                  </h3>
                  <div className="bg-card rounded-2xl border border-border p-6">
                    <p className="text-muted-foreground mb-4">
                      Pracownicy widzą na tablecie w czasie rzeczywistym i mogą samodzielnie:
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {teamFeatures.map((feature, index) => (
                        <div key={index} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <p className="mt-4 font-medium text-foreground text-sm">
                      Nie muszą już pytać szefa o wszystko – system dał im autonomię.
                    </p>
                  </div>
                </div>
              </div>

              <ImagePlaceholder 
                description="Dashboard N2Wash z wykresami i statystykami" 
                aspectRatio="16:9"
                className="max-w-3xl mx-auto mt-12"
              />
            </div>
          </div>
        </section>

        {/* Zarządzanie zespołem */}
        <section className="py-20 md:py-28 bg-section-alt">
          <div className="container px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4 text-center">
                Pełna kontrola nad zespołem i czasem pracy
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                System N2Wash całkowicie zmienił sposób zarządzania pracownikami
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-card rounded-2xl border border-border p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Play className="w-6 h-6 text-primary ml-1" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Ewidencja czasu pracy</h3>
                  <p className="text-muted-foreground text-sm">
                    Pracownicy klikają „Start" i „Stop" – bezpośrednio z tableta. Gotowe zestawienie na koniec miesiąca.
                  </p>
                </div>

                <div className="bg-card rounded-2xl border border-border p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <UserCheck className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Kontrola obecności</h3>
                  <p className="text-muted-foreground text-sm">
                    Armen widzi w aplikacji w czasie rzeczywistym kto jest aktualnie w pracy – nawet jeśli sam jest poza studiem.
                  </p>
                </div>

                <div className="bg-card rounded-2xl border border-border p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Planowanie grafiku</h3>
                  <p className="text-muted-foreground text-sm">
                    System pokazuje kiedy pracownicy mają wolne dni. Nie przyjmuje zleceń gdy brakuje załogi.
                  </p>
                </div>
              </div>

              <ImagePlaceholder 
                description="Tablet pracownika z widokiem ewidencji czasu pracy" 
                aspectRatio="16:9"
                className="max-w-2xl mx-auto"
              />
            </div>
          </div>
        </section>

        {/* Optymalizacja cennika */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4 text-center">
                Optymalizacja cennika dzięki danym
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Pracownicy klikają „Rozpocznij" i „Zakończ" przy każdej obsłudze pojazdu – system zbiera twarde dane
              </p>

              <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                <div className="bg-card rounded-2xl border border-border p-8">
                  <h3 className="font-bold text-foreground text-lg mb-6 flex items-center gap-2">
                    <Timer className="w-5 h-5 text-primary" />
                    Przykładowe dane o czasie usług
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b border-border">
                      <div>
                        <p className="font-medium text-foreground">Korekta lakieru – małe auto</p>
                        <p className="text-sm text-muted-foreground">Segment A/B</p>
                      </div>
                      <span className="text-lg font-bold text-primary">~3,5h</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-border">
                      <div>
                        <p className="font-medium text-foreground">Korekta lakieru – duży SUV</p>
                        <p className="text-sm text-muted-foreground">Segment E</p>
                      </div>
                      <span className="text-lg font-bold text-primary">~6h</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-foreground">Mycie detailingowe + wnętrze</p>
                        <p className="text-sm text-muted-foreground">Małe vs duże auto</p>
                      </div>
                      <span className="text-lg font-bold text-primary">2h vs 3,5h</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
                    <p className="font-medium text-green-700">✓ Lepsze dostosowanie cen do czasu trwania usługi</p>
                  </div>
                  <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
                    <p className="font-medium text-green-700">✓ Wyłapanie mniej rentownych usług</p>
                  </div>
                  <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
                    <p className="font-medium text-green-700">✓ Precyzyjniejsze planowanie grafiku</p>
                  </div>
                </div>
              </div>

              <QuoteCard
                text="Wcześniej zgadywaliśmy. Teraz mam dane i mogę podejmować decyzje biznesowe oparte na faktach, nie intuicji. Skorygowałem cennik i okazało się że niektóre usługi sprzedawałem za tanio – traciłem pieniądze nie wiedząc o tym."
                author="Armen"
                role="Właściciel, ARM-CAR Detailing & Wrapping"
                logo={logoArmcar}
                size="md"
              />
            </div>
          </div>
        </section>

        {/* TOP 5 funkcji */}
        <section className="py-20 md:py-28 bg-section-alt">
          <div className="container px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4 text-center">
                TOP 5 funkcji według Armena
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Które funkcje właściciel ceni najbardziej?
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <FeatureCard
                  number={1}
                  icon={FileText}
                  title="Generator ofert"
                  description="Wcześniej tworzenie oferty zajmowało 15-30 minut. Teraz Armen tworzy profesjonalne oferty w kilka minut – nawet podczas treningu na siłowni."
                  highlight="Klient dostaje ofertę tego samego dnia"
                  quote="Porządek z ofertami pozwala na bieżąco śledzić pipeline sprzedażowy."
                />

                <FeatureCard
                  number={2}
                  icon={MessageSquare}
                  title="SMS przypomnienia"
                  description="Automatyczne przypomnienia dzień przed wizytą oraz godzinę przed, wraz z linkiem do nawigacji i możliwością zmiany rezerwacji."
                  highlight="No-show spadł do zera"
                />

                <FeatureCard
                  number={3}
                  icon={Calendar}
                  title="Prosty, jasny kalendarz"
                  description="Błyskawiczne dodawanie rezerwacji, widok wszystkich 4 stanowisk naraz, synchronizacja na żywo z tabletami pracowników."
                  quote="Wcześniej musiałem przeszukiwać zeszyt. Teraz klikam w rezerwację i dzwonię bezpośrednio z aplikacji."
                />

                <FeatureCard
                  number={4}
                  icon={Users}
                  title="Zarządzanie zespołem"
                  description="Pracownicy raportują godziny klikając start/stop. Armen widzi aktualne podsumowanie w aplikacji w czasie rzeczywistym."
                  highlight="Szybsze rozliczanie wypłat"
                />

                <FeatureCard
                  number={5}
                  icon={BarChart3}
                  title="Dane o czasie usług"
                  description="System zbiera dane o realnym czasie wykonania każdej usługi. Precyzyjne dane pozwalają na optymalizację cennika."
                  highlight="Decyzje oparte na danych, nie intuicji"
                />
              </div>

              <ImagePlaceholder 
                description="Screenshot generatora ofert z przykładową ofertą" 
                aspectRatio="16:9"
                className="max-w-3xl mx-auto mt-12"
              />
            </div>
          </div>
        </section>

        {/* Finalna opinia */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <QuoteCard
                text="Miałem obawy czy to nie będą wyrzucone pieniądze, ale koszt aplikacji zwraca się wielokrotnie już w pierwszym miesiącu. Dzięki lepszej skuteczności ofert, zerowym no-show i ratowaniu rezerwacji zarabiam więcej pracując mniej. Mam teraz czas na marketing, rozwój biznesu i wreszcie życie prywatne. To najlepsza inwestycja w mój biznes."
                author="Armen"
                role="Właściciel, ARM-CAR Detailing & Wrapping"
                logo={logoArmcar}
                size="lg"
              />
            </div>
          </div>
        </section>

        {/* Podsumowanie */}
        <section className="py-20 md:py-28 bg-section-alt">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-8 text-center">
                Podsumowanie
              </h2>
              
              <div className="bg-card rounded-2xl border border-border p-8 mb-8">
                <p className="text-lg text-muted-foreground mb-6">
                  ARM-CAR Detailing & Wrapping to przykład studia, które dzięki N2Wash:
                </p>
                <ul className="space-y-3">
                  {summaryPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <StatBox 
                value="425 zł brutto/mies" 
                label="zwraca się wielokrotnie" 
                sublabel="dzięki większej liczbie rezerwacji, wyższym średnim kosztom i wyeliminowaniu strat"
                variant="success"
                size="lg"
                className="max-w-md mx-auto"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-background to-primary/5">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6">
                Jeśli Ty też masz dość zeszytów, zgubionych rezerwacji i bycia przykutym do telefonu...
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Umów się na bezpłatną prezentację N2Wash i sprawdź, jak możemy pomóc Twojemu studiu.
              </p>
              <a
                href="/#hero"
                className="inline-flex h-14 px-8 items-center justify-center gap-2 text-base font-semibold rounded-xl bg-gradient-to-r from-primary to-sky-500 text-primary-foreground hover:from-primary/90 hover:to-sky-500/90 shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
              >
                Umów bezpłatną prezentację
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

export default CaseStudiesPage;

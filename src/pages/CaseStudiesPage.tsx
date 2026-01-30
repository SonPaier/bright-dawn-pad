import { useEffect } from "react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Quote, Target, Lightbulb, TrendingUp, ArrowRight } from "lucide-react";
import logoArmcar from "@/assets/logo-armcar.png";

const CaseStudiesPage = () => {
  useEffect(() => {
    document.title = "Case Studies N2Wash – Jak Myjnie i Studia Detailingu Rosną z nami";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Szczegółowe studia przypadków klientów N2Wash. Poznaj wyniki, liczby, wyzwania i rozwiązania prawdziwych firm z branży detailingu samochodów."
      );
    }
  }, []);

  const caseStudies = [
    {
      id: 1,
      company: "ARM-CAR Detailing & Wrapping",
      location: "Gdańsk",
      logo: logoArmcar,
      owner: "Armen",
      industry: "Detailing & Oklejanie",
      challenges: [
        "Chaos w kalendarzu – rezerwacje na kartkach, częste pomyłki",
        "Brak profesjonalnych ofert – wyceny wysyłane SMS-em lub przez telefon",
        "Trudność w śledzeniu historii klientów i ich pojazdów",
        "Czasochłonne odbieranie telefonów w trakcie pracy",
      ],
      solutions: [
        "Wdrożenie kalendarza online z rezerwacjami 24/7",
        "Generator ofert ze zdjęciami i szczegółowymi opisami usług",
        "CRM z pełną historią klientów i pojazdów",
        "Automatyczne przypomnienia SMS przed wizytą",
      ],
      results: [
        { value: "+40%", label: "więcej rezerwacji miesięcznie" },
        { value: "-70%", label: "mniej telefonów od klientów" },
        { value: "3h", label: "oszczędności czasu dziennie" },
      ],
      quote:
        "Odkąd korzystam z N2Wash, mój kalendarz rezerwacji jest uporządkowany, klienci otrzymują automatyczne przypomnienia, a ja oszczędzam mnóstwo czasu. Generator ofert pomógł mi domykać więcej zleceń – klienci są pod wrażeniem profesjonalnych wycen.",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Case Studies N2Wash – Jak Myjnie i Studia Detailingu Rosną z nami
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Szczegółowe historie sukcesu naszych klientów z branży automotive
              </p>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 md:py-20 bg-section-alt">
          <div className="container px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Prawdziwe firmy, prawdziwe wyniki
              </h2>
              <p className="text-lg text-muted-foreground">
                Poznaj historie właścicieli myjni i studiów detailingu, którzy z pomocą N2Wash 
                uporządkowali swój biznes, zaoszczędzili czas i zwiększyli przychody.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        {caseStudies.map((study) => (
          <section key={study.id} className="py-20 md:py-28 bg-background">
            <div className="container px-4">
              {/* Case Study Header */}
              <div className="max-w-4xl mx-auto mb-12 md:mb-16">
                <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
                  <img
                    src={study.logo}
                    alt={study.company}
                    className="w-24 h-24 rounded-2xl object-cover shadow-lg"
                  />
                  <div className="text-center md:text-left">
                    <span className="text-sm font-medium text-primary mb-2 block">
                      Case Study #{study.id}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      {study.company}
                    </h2>
                    <p className="text-muted-foreground mt-1">
                      {study.location} • {study.industry}
                    </p>
                  </div>
                </div>

                {/* Results Summary */}
                <div className="grid grid-cols-3 gap-4 md:gap-8 bg-gradient-to-r from-primary/10 to-sky-500/10 rounded-2xl p-6 md:p-8 border border-primary/20">
                  {study.results.map((result, index) => (
                    <div key={index} className="text-center">
                      <p className="text-2xl md:text-4xl font-bold text-primary">
                        {result.value}
                      </p>
                      <p className="text-xs md:text-sm text-muted-foreground mt-1">
                        {result.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges & Solutions Grid */}
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
                {/* Challenges */}
                <div className="bg-card rounded-2xl border border-border p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                      <Target className="w-6 h-6 text-red-500" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Wyzwania</h3>
                  </div>
                  <ul className="space-y-4">
                    {study.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-red-500">
                            {index + 1}
                          </span>
                        </div>
                        <p className="text-muted-foreground">{challenge}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solutions */}
                <div className="bg-card rounded-2xl border border-border p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-green-500" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Rozwiązanie N2Wash</h3>
                  </div>
                  <ul className="space-y-4">
                    {study.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-green-500">
                            {index + 1}
                          </span>
                        </div>
                        <p className="text-muted-foreground">{solution}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Owner Quote */}
              <div className="max-w-3xl mx-auto">
                <div className="bg-gradient-to-br from-primary/5 to-sky-500/5 rounded-2xl p-8 md:p-10 border border-primary/10">
                  <Quote className="w-12 h-12 text-primary/30 mb-4" />
                  <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                    "{study.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={study.logo}
                      alt={study.owner}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-foreground">{study.owner}</p>
                      <p className="text-sm text-muted-foreground">
                        Właściciel, {study.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-section-alt">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Twoja firma może być następna
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Dołącz do grona właścicieli, którzy uporządkowali swój biznes z N2Wash.
                Zacznij od bezpłatnego okresu próbnego.
              </p>
              <a
                href="/#hero"
                className="inline-flex h-14 px-8 items-center justify-center gap-2 text-base font-semibold rounded-xl bg-gradient-to-r from-primary to-sky-500 text-primary-foreground hover:from-primary/90 hover:to-sky-500/90 shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
              >
                Wypróbuj N2Wash za darmo
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

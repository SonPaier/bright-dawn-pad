import { useEffect } from "react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { useTranslation } from "@/hooks/useTranslation";
import { Mail, Phone, Globe, MapPin, Clock, ArrowRight } from "lucide-react";

const KontaktPage = () => {
  const { t } = useTranslation();
  const footer = t("footer");

  useEffect(() => {
    document.title = "Kontakt – N2Wash CRM dla Myjni i Detailingu";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Skontaktuj się z N2Wash. Email: hello@n2wash.com. Telefon: +48 666 610 222 (Tomek), +48 666 610 011 (Rafał). Umów prezentację systemu."
      );
    }
  }, []);

  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: footer.email,
      href: `mailto:${footer.email}`,
      description: "Odpowiadamy w ciągu 24h",
    },
    {
      icon: Phone,
      label: "Telefon (Tomek)",
      value: footer.phone1,
      href: `tel:${footer.phone1.replace(/\s/g, "")}`,
      description: "Dział sprzedaży i wdrożeń",
    },
    {
      icon: Phone,
      label: "Telefon (Rafał)",
      value: footer.phone2,
      href: `tel:${footer.phone2.replace(/\s/g, "")}`,
      description: "Dział wsparcia technicznego",
    },
    {
      icon: Globe,
      label: "Strona www",
      value: footer.website,
      href: `https://${footer.website}`,
      description: "Nasza strona główna",
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
                Kontakt
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Masz pytania? Chętnie pomożemy. Skontaktuj się z nami telefonicznie, mailowo lub umów prezentację.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-20 md:py-28 bg-section-alt">
          <div className="container px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {contacts.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.icon === Globe ? "_blank" : undefined}
                  rel={contact.icon === Globe ? "noopener noreferrer" : undefined}
                  className="bg-card rounded-2xl border border-border p-6 text-center hover:shadow-lg hover:border-primary/30 transition-all group"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                    <contact.icon className="w-7 h-7 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{contact.label}</p>
                  <p className="text-lg font-bold text-foreground mb-2">{contact.value}</p>
                  <p className="text-xs text-muted-foreground">{contact.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Info Section */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Working Hours */}
                <div className="bg-card rounded-2xl border border-border p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-xl font-bold text-foreground">Godziny pracy</h2>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Poniedziałek - Piątek</span>
                      <span className="font-medium text-foreground">9:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Sobota</span>
                      <span className="font-medium text-foreground">10:00 - 14:00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Niedziela</span>
                      <span className="font-medium text-foreground">Zamknięte</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    * Wsparcie techniczne dla klientów dostępne również poza godzinami pracy
                  </p>
                </div>

                {/* Location */}
                <div className="bg-card rounded-2xl border border-border p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-xl font-bold text-foreground">Lokalizacja</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Działamy zdalnie na terenie całej Polski. Prezentacje i wdrożenia przeprowadzamy online.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Możliwe spotkania osobiste po wcześniejszym umówieniu w regionie Trójmiasta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-primary/5 to-background">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Wolisz zobaczyć system w akcji?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Umów bezpłatną prezentację i przekonaj się, jak N2Wash może usprawnić Twój biznes.
              </p>
              <a
                href="/#hero"
                className="inline-flex h-14 px-8 items-center justify-center gap-2 text-base font-semibold rounded-xl bg-gradient-to-r from-primary to-sky-500 text-primary-foreground hover:from-primary/90 hover:to-sky-500/90 shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
              >
                Umów prezentację
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

export default KontaktPage;

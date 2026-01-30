import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";
import HeaderNav from "./HeaderNav";
import logoN2Wash from "@/assets/n2washcom-logo.svg";

const Header = () => {
  const { t } = useTranslation();
  const nav = t("nav");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      label: nav.crm,
      href: "/crm",
      children: [
        { label: nav.crmMyjnia, href: "/crm/crm-dla-myjni-samochodowych" },
        { label: nav.crmDetailing, href: "/crm/crm-dla-studia-detailingu" },
      ],
    },
    {
      label: nav.funkcje,
      href: "/funkcje",
      children: [
        { label: nav.kalendarzRezerwacji, href: "/funkcje/kalendarz-rezerwacji" },
        { label: nav.generatorOfert, href: "/funkcje/generator-ofert" },
        { label: nav.smsPrzypomnienia, href: "/funkcje/sms-przypomnienia" },
        { label: nav.zarzadzanieZespolem, href: "/funkcje/zarzadzanie-zespolem" },
        { label: nav.protokolPrzyjecia, href: "/funkcje/protokol-przyjecia-pojazdu" },
        { label: nav.analitykaRaporty, href: "/funkcje/analityka-raporty" },
      ],
    },
    { label: nav.cennik, href: "/cennik-crm-myjnia-detailing" },
    { label: nav.opinie, href: "/opinie" },
    { label: nav.dlaczegoN2wash, href: "/dlaczego-n2wash" },
    { label: nav.kontakt, href: "/kontakt" },
  ];

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="transition-all hover:opacity-80"
          >
            <img
              src={logoN2Wash}
              alt="N2Wash.com"
              className={`h-6 md:h-7 w-auto transition-all duration-300 ${
                isScrolled ? "" : "brightness-0 invert"
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <HeaderNav items={navItems} isScrolled={isScrolled} />

          {/* CTA Button - Desktop */}
          <Link
            to="/umow-prezentacje"
            className={`hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-medium rounded-lg transition-colors ${
              isScrolled
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "bg-white text-primary hover:bg-white/90"
            }`}
          >
            {nav.umowPrezentacje}
          </Link>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden ${!isScrolled ? "text-white hover:text-white/80 hover:bg-white/10" : ""}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md max-h-[70vh] overflow-y-auto">
            <HeaderNav
              items={navItems}
              isScrolled={true}
              onItemClick={closeMobileMenu}
              isMobile
            />
            <div className="px-4 pb-4">
              <Link
                to="/umow-prezentacje"
                onClick={closeMobileMenu}
                className="block w-full text-center px-5 py-3 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                {nav.umowPrezentacje}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

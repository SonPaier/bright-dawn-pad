import { Mail, Phone, Globe } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const Footer = () => {
  const { t } = useTranslation();
  const footer = t("footer");

  return (
    <footer id="contact" className="bg-foreground text-background py-12 md:py-16">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gradient-water mb-4">
              N2WASH
            </h3>
            <p className="text-background/70 text-sm leading-relaxed max-w-xs">
              CRM i system rezerwacji dla myjni samochodowych i studiów detailingu.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{footer.contact}</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${footer.email}`}
                  className="flex items-center gap-3 text-background/70 hover:text-background transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  {footer.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${footer.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-background/70 hover:text-background transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  {footer.phone}
                </a>
              </li>
              <li>
                <a
                  href={`https://${footer.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-background/70 hover:text-background transition-colors text-sm"
                >
                  <Globe className="w-4 h-4" />
                  {footer.website}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Informacje</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  {footer.privacy}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  {footer.terms}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-background/10 text-center">
          <p className="text-background/50 text-sm">
            {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

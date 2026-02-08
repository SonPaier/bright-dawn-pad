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
  return;
};
export default CrmMyjnia;
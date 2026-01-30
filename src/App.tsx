import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import PlaceholderPage from "./pages/PlaceholderPage";
import CrmMyjnia from "./pages/CrmMyjnia";
import CrmDetailing from "./pages/CrmDetailing";
import KalendarzRezerwacji from "./pages/KalendarzRezerwacji";
import GeneratorOfert from "./pages/GeneratorOfert";
import SmsPrzypomnienia from "./pages/SmsPrzypomnienia";
import ZarzadzanieZespolem from "./pages/ZarzadzanieZespolem";
import ProtokolPrzyjecia from "./pages/ProtokolPrzyjecia";
import AnalitykaRaporty from "./pages/AnalitykaRaporty";
import CennikPage from "./pages/CennikPage";
import OpiniePage from "./pages/OpiniePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* CRM Routes */}
          <Route path="/crm" element={<PlaceholderPage />} />
          <Route path="/crm/crm-dla-myjni-samochodowych" element={<CrmMyjnia />} />
          <Route path="/crm/crm-dla-studia-detailingu" element={<CrmDetailing />} />

          {/* Funkcje Routes */}
          <Route path="/funkcje" element={<PlaceholderPage />} />
          <Route path="/funkcje/kalendarz-rezerwacji" element={<KalendarzRezerwacji />} />
          <Route path="/funkcje/generator-ofert" element={<GeneratorOfert />} />
          <Route path="/funkcje/sms-przypomnienia" element={<SmsPrzypomnienia />} />
          <Route path="/funkcje/zarzadzanie-zespolem" element={<ZarzadzanieZespolem />} />
          <Route path="/funkcje/protokol-przyjecia-pojazdu" element={<ProtokolPrzyjecia />} />
          <Route path="/funkcje/analityka-raporty" element={<AnalitykaRaporty />} />

          {/* Main Pages */}
          <Route path="/cennik-crm-myjnia-detailing" element={<CennikPage />} />
          <Route path="/opinie" element={<OpiniePage />} />
          <Route path="/case-studies" element={<PlaceholderPage />} />
          <Route path="/dlaczego-n2wash" element={<PlaceholderPage />} />

          {/* Blog Routes */}
          <Route path="/blog" element={<PlaceholderPage />} />
          <Route path="/blog/jak-zwiekszyc-zyski-w-myjni" element={<PlaceholderPage />} />
          <Route path="/blog/jak-nie-zgubic-rezerwacji-w-myjni" element={<PlaceholderPage />} />
          <Route path="/blog/jak-zarzadzac-klientami-w-detailingu" element={<PlaceholderPage />} />
          <Route path="/blog/crm-vs-zeszyt-w-myjni" element={<PlaceholderPage />} />

          {/* Contact & Demo */}
          <Route path="/umow-prezentacje" element={<PlaceholderPage />} />
          <Route path="/demo" element={<PlaceholderPage />} />
          <Route path="/kontakt" element={<PlaceholderPage />} />

          {/* Legal */}
          <Route path="/polityka-prywatnosci" element={<PrivacyPolicy />} />
          <Route path="/regulamin" element={<TermsOfService />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

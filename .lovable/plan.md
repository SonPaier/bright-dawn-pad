
# Plan: Redesign strony "Historie Klientow" (Case Studies)

## Cel
Przeprojektowanie strony `/case-studies` na podstawie szczegolowego case study ARM-CAR Detailing & Wrapping, z profesjonalnymi sekcjami, wyrozniajacymi sie cytatami, boksami statystyk i placeholderami na obrazki.

---

## Struktura strony

### 1. Hero Section
- Tytul H1: "Jak studio z Gdanska odzyskalo 10 godzin tygodniowo i zwiekszylo obroty o 10% dzieki N2Wash"
- Podtytul z nazwa klienta i lokalizacja
- Logo ARM-CAR

### 2. Sekcja "O kliencie"
- Karta z podstawowymi informacjami:
  - Nazwa: ARM-CAR Detailing & Wrapping
  - Lokalizacja: Gdansk, Al. Grunwaldzka 229
  - Stanowiska: 4 (2x myjnia reczna, 1x detailing, 1x PPF/wrapping)
  - Zakres uslug
- **Placeholder na zdjecie studia** (zewnetrzne lub wnetrze)

### 3. Sekcja "Wyzwanie" (z czerwonym akcentem)
- H2: "Wyzwanie: Chaos organizacyjny i przepracowanie wlasciciela"
- Powiekszona karta z cytatem Armena (intro)
- 4 podsekcje z problemami:
  1. Chaos organizacyjny - z boksem statystyki "10% rezerwacji z pomylka"
  2. Utracone pieniadze - z boksem "5-10% no-show", "2-4 utracone rezerwacje tygodniowo"
  3. Przepracowanie wlasciciela - z boksem "50h/tydzien", "25h na obsludze klientow"
  4. Sparalizowani pracownicy
- **Placeholder na zdjecie** (np. papierowy zeszyt, chaos)

### 4. Sekcja "Rozwiazanie" (z zielonym akcentem)
- H2: "Rozwiazanie: Wdrozenie N2Wash"
- Podsekcja "Obawy przed zmiana" - lista punktow
- Podsekcja "Bezbolesne wdrozenie w 3 dni":
  - Boks: "3 dni" do pelnej konfiguracji
  - Boks: "~425 zl brutto/mies" koszt
- **Placeholder na screenshot aplikacji**

### 5. Sekcja "Rezultaty" - glowna sekcja statystyk
- H2: "Rezultaty: Konkretne liczby, ktore mowia wszystko"
- Grid z 4 kategoriami:

**Wzrost biznesu:**
| Statystyka | Wartosc |
|------------|---------|
| Nowe rezerwacje | +40-50/mies (+13-17%) |
| Wzrost obrotow | ~10%/mies |
| Sredni koszyk myjnia | +10% |
| Sredni koszyk detailing | +5% |

**Eliminacja problemow:**
| Problem | Przed | Po |
|---------|-------|------|
| No-show | 5-10% | ~0% |
| Pomylki rezerwacji | 10% | 0% |
| Telefony | 100% | -20% |

**Oszczednosc czasu:**
- Wielki boks: "10h tygodniowo" oszczednosci

**Autonomia zespolu:**
- Lista funkcji dostepnych dla pracownikow

### 6. Sekcja "Zarzadzanie zespolem" 
- Ewidencja czasu pracy (start/stop)
- Kontrola obecnosci
- Planowanie grafiku
- **Placeholder na zdjecie tabletu pracownika**

### 7. Sekcja "Optymalizacja cennika"
- Dane o czasie trwania uslug
- Przyklad: maly samochod vs duzy SUV
- Powieksony cytat Armena o decyzjach opartych na danych
- **Placeholder na screenshot raportow**

### 8. Sekcja "TOP 5 funkcji wedlug Armena"
- 5 kart z funkcjami:
  1. Generator ofert - z cytatem "oferta tego samego dnia"
  2. SMS przypomnienia - z wynikiem "no-show = 0"
  3. Prosty kalendarz - z cytatem o szybkim dostepe
  4. Zarzadzanie zespolem
  5. Dane o czasie uslug

### 9. Sekcja "Finalna opinia" - duzy powieksony cytat
- Pelny cytat Armena o zwrocie inwestycji
- Podpis z logo i stanowiskiem

### 10. Sekcja "Podsumowanie"
- Lista punktow z glownymi osiagnieciami
- Boks z kosztem: "425 zl brutto/mies zwraca sie wielokrotnie"

### 11. CTA Section
- H2: "Jesli Ty tez masz dosc zeszytow..."
- Przycisk: "Umow bezplatna prezentacje"

---

## Elementy UI do uzycia

### Powiekszone cytaty (Blockquote)
```
+--------------------------------------------------+
|  "                                               |
|  Mialem obawy czy to nie beda wyrzucone         |
|  pieniadze, ale koszt aplikacji zwraca sie      |
|  wielokrotnie juz w pierwszym miesiacu...       |
|                                                  |
|  [Logo] Armen                                    |
|         Wlasciciel, ARM-CAR Detailing            |
+--------------------------------------------------+
```
Styl: gradient tlo, duza ikona cytatu, wieksza czcionka

### Boksy statystyk
```
+----------------+
|     +40-50     |
|   rezerwacji   |
|   miesiecznie  |
|  (+13-17%)     |
+----------------+
```
Styl: gradient border, duza wartosc, mniejszy opis

### Porownanie "Przed vs Po"
```
+------------------+------------------+
|      PRZED       |        PO        |
+------------------+------------------+
| 5-10% no-show    |     ~0%          |
| 10% pomylek      |      0%          |
| 100% telefonow   |    -20%          |
+------------------+------------------+
```

### Placeholdery na obrazki
6 miejsc na obrazki (800x600px):
1. Hero/intro - zewnetrzne zdjecie studia
2. Wyzwanie - papierowy zeszyt/chaos
3. Rozwiazanie - screenshot kalendarza N2Wash
4. Rezultaty - dashboard z wykresami
5. Zespol - tablet pracownika
6. TOP funkcje - generator ofert

---

## Szczegoly techniczne

### Plik do edycji
- `src/pages/CaseStudiesPage.tsx` - pelne przepisanie

### Komponenty do wykorzystania
- Istniejace style z `OpiniePage.tsx` i `BenefitsZigZag.tsx`
- Ikony z lucide-react
- Gradient tla dla cytatow i statystyk
- Karty z border i shadow

### SEO
- Title: "Arm Car Detailing Case Study - Jak Odzyskac 10h Tygodniowo | N2Wash"
- Meta: "Case study ARM-CAR Detailing z Gdanska. Zobacz jak N2Wash pomogl zwiekszyc obroty o 10% i zaoszczedzic 10 godzin tygodniowo."

### Obrazki placeholder
Uzyje komponentu z ikona Image i tekstem "Placeholder: [opis]" w szarym tle, aby latwo bylo pozniej zamienic na prawdziwe zdjecia.


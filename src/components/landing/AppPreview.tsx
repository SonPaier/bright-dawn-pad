import { useTranslation } from "@/hooks/useTranslation";

const AppPreview = () => {
  const { t } = useTranslation();
  const preview = t("appPreview");

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {preview.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {preview.subtitle}
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0">
          {/* Laptop mockup */}
          <div className="relative z-10 w-full max-w-3xl">
            <div className="relative bg-card rounded-2xl shadow-2xl border border-border overflow-hidden">
              {/* Laptop top bar */}
              <div className="h-8 bg-muted flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="h-5 w-48 bg-muted-foreground/10 rounded-md" />
                </div>
              </div>
              
              {/* Screen content - Calendar placeholder */}
              <div className="aspect-[16/10] bg-gradient-to-br from-background to-muted p-6">
                <div className="h-full rounded-lg border border-border/50 bg-card/50 p-4">
                  {/* Calendar header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-6 w-32 bg-primary/20 rounded-md" />
                    <div className="flex gap-2">
                      <div className="h-8 w-8 bg-muted rounded-md" />
                      <div className="h-8 w-8 bg-muted rounded-md" />
                    </div>
                  </div>
                  
                  {/* Calendar grid */}
                  <div className="grid grid-cols-7 gap-2">
                    {Array.from({ length: 7 }).map((_, i) => (
                      <div key={`header-${i}`} className="h-6 bg-muted-foreground/10 rounded text-center text-xs flex items-center justify-center text-muted-foreground font-medium">
                        {["Pn", "Wt", "Śr", "Cz", "Pt", "Sb", "Nd"][i]}
                      </div>
                    ))}
                    {Array.from({ length: 35 }).map((_, i) => (
                      <div
                        key={`day-${i}`}
                        className={`aspect-square rounded-md flex items-center justify-center text-sm ${
                          [5, 12, 18, 24].includes(i)
                            ? "bg-primary/30 text-primary-foreground font-semibold"
                            : [8, 15, 22].includes(i)
                            ? "bg-sky-400/30"
                            : "bg-muted/50"
                        }`}
                      >
                        {i + 1 <= 31 ? i + 1 : ""}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Laptop stand */}
            <div className="h-4 bg-gradient-to-b from-muted to-muted-foreground/20 rounded-b-lg mx-12" />
            <div className="h-2 bg-muted-foreground/20 rounded-b-2xl mx-4" />
          </div>

          {/* Phone mockup */}
          <div className="lg:absolute lg:right-0 lg:bottom-0 lg:translate-x-1/4 z-20">
            <div className="relative w-48 md:w-56 bg-card rounded-[2rem] shadow-2xl border-4 border-foreground/10 overflow-hidden">
              {/* Phone notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-foreground/10 rounded-b-xl z-10" />
              
              {/* Screen content */}
              <div className="aspect-[9/19] bg-gradient-to-br from-background to-muted p-3 pt-8">
                <div className="h-full rounded-lg border border-border/50 bg-card/50 p-2 overflow-hidden">
                  {/* Mobile calendar header */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="h-4 w-16 bg-primary/20 rounded" />
                    <div className="h-4 w-4 bg-muted rounded" />
                  </div>
                  
                  {/* Mini calendar */}
                  <div className="grid grid-cols-7 gap-0.5 mb-2">
                    {Array.from({ length: 7 }).map((_, i) => (
                      <div key={`mobile-header-${i}`} className="h-3 text-[8px] text-muted-foreground text-center">
                        {["P", "W", "Ś", "C", "P", "S", "N"][i]}
                      </div>
                    ))}
                    {Array.from({ length: 35 }).map((_, i) => (
                      <div
                        key={`mobile-day-${i}`}
                        className={`aspect-square rounded text-[7px] flex items-center justify-center ${
                          [5, 12].includes(i)
                            ? "bg-primary/40 text-primary-foreground"
                            : "bg-muted/30"
                        }`}
                      >
                        {i + 1 <= 31 ? i + 1 : ""}
                      </div>
                    ))}
                  </div>
                  
                  {/* Appointments list */}
                  <div className="space-y-1.5">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-8 bg-primary/10 rounded-md flex items-center px-2 gap-2">
                        <div className="w-1 h-5 bg-primary rounded-full" />
                        <div className="flex-1">
                          <div className="h-2 w-12 bg-foreground/20 rounded mb-1" />
                          <div className="h-1.5 w-16 bg-muted-foreground/20 rounded" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;

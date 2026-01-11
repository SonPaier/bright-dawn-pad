import { useTranslation } from "@/hooks/useTranslation";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const { t } = useTranslation();
  const testimonials = t("testimonials");

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <header className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {testimonials.sectionTitle}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {testimonials.sectionSubtitle}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.items.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              company={testimonial.company}
              text={testimonial.text}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

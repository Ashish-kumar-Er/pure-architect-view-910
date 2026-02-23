import { useTranslation } from "react-i18next";
import ScrollReveal from "@/components/ScrollReveal";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    { number: "01", titleKey: "s1_title", descKey: "s1_desc" },
    { number: "02", titleKey: "s2_title", descKey: "s2_desc" },
    { number: "03", titleKey: "s3_title", descKey: "s3_desc" },
    { number: "04", titleKey: "s4_title", descKey: "s4_desc" },
    { number: "05", titleKey: "s5_title", descKey: "s5_desc" },
    { number: "06", titleKey: "s6_title", descKey: "s6_desc" },
    { number: "07", titleKey: "s7_title", descKey: "s7_desc" },
  ];

  return (
    <section id="services" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="mb-20">
            <h2 className="text-minimal text-muted-foreground mb-4">{t("services.label")}</h2>
            <h3 className="text-4xl md:text-6xl font-light text-architectural">
              {t("services.heading")}
            </h3>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="group">
                  <div className="flex items-start space-x-6">
                    <span className="text-minimal text-muted-foreground font-medium">
                      {service.number}
                    </span>
                    <div>
                      <h4 className="text-xl font-light mb-4 text-architectural group-hover:text-muted-foreground transition-colors duration-500">
                        {t(`services.${service.titleKey}`)}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {t(`services.${service.descKey}`)}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

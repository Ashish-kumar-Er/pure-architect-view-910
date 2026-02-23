import { useTranslation } from "react-i18next";
import ScrollReveal from "@/components/ScrollReveal";

const About = () => {
  const { t } = useTranslation();

  const promises = [
    { titleKey: "p1_title", descKey: "p1_desc" },
    { titleKey: "p2_title", descKey: "p2_desc" },
    { titleKey: "p3_title", descKey: "p3_desc" },
    { titleKey: "p4_title", descKey: "p4_desc" },
    { titleKey: "p5_title", descKey: "p5_desc" },
  ];

  return (
    <section id="about" className="py-32 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <ScrollReveal direction="left">
              <h2 className="text-minimal text-muted-foreground mb-4">{t("about.label")}</h2>
              <h3 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                {t("about.heading")}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("about.description")}
              </p>
            </ScrollReveal>
            
            <div className="space-y-12">
              <div>
                <ScrollReveal direction="right">
                  <h4 className="text-minimal text-muted-foreground mb-6">{t("about.promise_label")}</h4>
                </ScrollReveal>
                <div className="space-y-6">
                  {promises.map((item, i) => (
                    <ScrollReveal key={i} direction="right" delay={i * 0.1}>
                      <div className="border-l-2 border-foreground pl-6">
                        <h5 className="text-lg font-medium mb-2">{t(`about.${item.titleKey}`)}</h5>
                        <p className="text-muted-foreground">{t(`about.${item.descKey}`)}</p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
              
              <ScrollReveal direction="right" delay={0.3}>
                <div className="pt-8 border-t border-border">
                  <h4 className="text-minimal text-muted-foreground mb-2">{t("about.location_label")}</h4>
                  <address className="text-xl not-italic whitespace-pre-line">
                    {t("about.location")}
                  </address>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

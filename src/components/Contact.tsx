import { useTranslation } from "react-i18next";
import ScrollReveal from "@/components/ScrollReveal";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <ScrollReveal>
                <h2 className="text-minimal text-muted-foreground mb-4">{t("contact.label")}</h2>
                <h3 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                  {t("contact.heading1")}
                  <br />
                  {t("contact.heading2")}
                </h3>
              </ScrollReveal>
              
              <div className="space-y-8">
                <ScrollReveal delay={0.1}>
                  <div>
                    <h4 className="text-minimal text-muted-foreground mb-2">{t("contact.email_label")}</h4>
                    <a href="mailto:alinearchitects02@gmail.com" className="text-xl hover:text-muted-foreground transition-colors duration-300">
                      alinearchitects02@gmail.com
                    </a>
                  </div>
                </ScrollReveal>
                
                <ScrollReveal delay={0.2}>
                  <div>
                    <h4 className="text-minimal text-muted-foreground mb-2">{t("contact.phone_label")}</h4>
                    <a href="tel:+919793637683" className="text-xl hover:text-muted-foreground transition-colors duration-300">
                      +91 97936 37683
                    </a>
                  </div>
                </ScrollReveal>
                
                <ScrollReveal delay={0.3}>
                  <div>
                    <h4 className="text-minimal text-muted-foreground mb-2">{t("contact.studio_label")}</h4>
                    <address className="text-xl not-italic whitespace-pre-line">
                      {t("about.location")}
                    </address>
                  </div>
                </ScrollReveal>
              </div>
            </div>
            
            <div className="space-y-8">
              <ScrollReveal direction="right">
                <div>
                  <h4 className="text-minimal text-muted-foreground mb-6">{t("contact.follow_label")}</h4>
                  <div className="space-y-4">
                    <a href="https://www.youtube.com/@a-linearchitects" target="_blank" rel="noopener noreferrer" className="block text-xl hover:text-muted-foreground transition-colors duration-300">
                      YouTube
                    </a>
                    <a href="https://www.instagram.com/a-line_architects" target="_blank" rel="noopener noreferrer" className="block text-xl hover:text-muted-foreground transition-colors duration-300">
                      Instagram
                    </a>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal direction="right" delay={0.2}>
                <div className="pt-12 border-t border-border">
                  <p className="text-muted-foreground">
                    {t("contact.tagline")}
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ScrollReveal from "@/components/ScrollReveal";

const EnquiryForm = () => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const serviceKeys = [
    "architectural",
    "residential",
    "commercial",
    "interior",
    "3d",
    "renovation",
    "consultancy",
  ] as const;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    const { error } = await supabase.from("enquiries").insert({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim() || null,
      service: form.service || null,
      message: form.message.trim(),
    });

    if (error) {
      setStatus("error");
    } else {
      setStatus("success");
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    }
    setIsSubmitting(false);
  };

  return (
    <section id="enquiry" className="py-32 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-minimal text-muted-foreground mb-4">
              {t("enquiry.label")}
            </h2>
            <h3 className="text-4xl md:text-6xl font-light text-architectural mb-12">
              {t("enquiry.heading")}
            </h3>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="enquiry-name" className="text-minimal text-muted-foreground mb-2 block">
                    {t("enquiry.name")} *
                  </label>
                  <Input
                    id="enquiry-name"
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label htmlFor="enquiry-email" className="text-minimal text-muted-foreground mb-2 block">
                    {t("enquiry.email")} *
                  </label>
                  <Input
                    id="enquiry-email"
                    type="email"
                    required
                    maxLength={200}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="bg-background border-border"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="enquiry-phone" className="text-minimal text-muted-foreground mb-2 block">
                    {t("enquiry.phone")}
                  </label>
                  <Input
                    id="enquiry-phone"
                    type="tel"
                    maxLength={20}
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label htmlFor="enquiry-service" className="text-minimal text-muted-foreground mb-2 block">
                    {t("enquiry.service")}
                  </label>
                  <Select value={form.service} onValueChange={(val) => setForm({ ...form, service: val })}>
                    <SelectTrigger id="enquiry-service" className="bg-background border-border">
                      <SelectValue placeholder={t("enquiry.service_placeholder")} />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceKeys.map((key) => (
                        <SelectItem key={key} value={key}>
                          {t(`enquiry.services.${key}`)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label htmlFor="enquiry-message" className="text-minimal text-muted-foreground mb-2 block">
                  {t("enquiry.message")} *
                </label>
                <Textarea
                  id="enquiry-message"
                  required
                  maxLength={2000}
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="bg-background border-border resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-12 py-6 text-minimal"
              >
                {isSubmitting ? t("enquiry.sending") : t("enquiry.submit")}
              </Button>

              {status === "success" && (
                <p className="text-primary mt-4" role="alert">
                  {t("enquiry.success")}
                </p>
              )}
              {status === "error" && (
                <p className="text-destructive mt-4" role="alert">
                  {t("enquiry.error")}
                </p>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;

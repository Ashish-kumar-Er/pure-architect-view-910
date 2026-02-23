import ScrollReveal from "@/components/ScrollReveal";

const About = () => {
  const promises = [
    { title: "Client-Focused Design", desc: "A design approach centered entirely around your vision and needs" },
    { title: "Practical & Budget-Friendly", desc: "Solutions that balance quality with cost-effectiveness" },
    { title: "Attention to Detail", desc: "Meticulous quality in every aspect of design and execution" },
    { title: "On-Time Delivery", desc: "Committed to meeting deadlines without compromising quality" },
    { title: "End-to-End Support", desc: "Complete design support from concept to completion" },
  ];

  return (
    <section id="about" className="py-32 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <ScrollReveal direction="left">
              <h2 className="text-minimal text-muted-foreground mb-4">ABOUT</h2>
              <h3 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                Why Choose Us
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                A-Line Architects is a Kanpur-based architecture and design firm delivering 
                thoughtful, functional, and aesthetic solutions. We specialize in creating 
                modern, cost-effective, and practical designs tailored to client needs.
              </p>
            </ScrollReveal>
            
            <div className="space-y-12">
              <div>
                <ScrollReveal direction="right">
                  <h4 className="text-minimal text-muted-foreground mb-6">OUR PROMISE</h4>
                </ScrollReveal>
                <div className="space-y-6">
                  {promises.map((item, i) => (
                    <ScrollReveal key={i} direction="right" delay={i * 0.1}>
                      <div className="border-l-2 border-foreground pl-6">
                        <h5 className="text-lg font-medium mb-2">{item.title}</h5>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
              
              <ScrollReveal direction="right" delay={0.3}>
                <div className="pt-8 border-t border-border">
                  <div>
                    <h4 className="text-minimal text-muted-foreground mb-2">LOCATION</h4>
                    <address className="text-xl not-italic">
                      IA Resort, Jajmau
                      <br />
                      Kanpur
                    </address>
                  </div>
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

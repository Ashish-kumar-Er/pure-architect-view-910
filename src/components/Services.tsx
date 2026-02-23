const Services = () => {
  const services = [
    {
      number: "01",
      title: "ARCHITECTURAL DESIGN & PLANNING",
      description: "Complete architectural design and planning services tailored to your vision and requirements"
    },
    {
      number: "02", 
      title: "RESIDENTIAL ARCHITECTURE",
      description: "Villas, houses, and apartments designed with modern aesthetics and practical functionality"
    },
    {
      number: "03",
      title: "COMMERCIAL ARCHITECTURE",
      description: "Shops, offices, and complexes built for business success and user experience"
    },
    {
      number: "04",
      title: "INTERIOR DESIGN & TURNKEY",
      description: "End-to-end interior design and turnkey solutions that transform spaces completely"
    },
    {
      number: "05",
      title: "3D ELEVATION & WALKTHROUGHS",
      description: "Realistic 3D visualizations and walkthroughs to experience your project before construction"
    },
    {
      number: "06",
      title: "RENOVATION & REDEVELOPMENT",
      description: "Breathing new life into existing structures with contemporary design and smart planning"
    },
    {
      number: "07",
      title: "PROJECT CONSULTANCY",
      description: "Expert consultancy and on-site coordination to ensure smooth project execution"
    }
  ];

  return (
    <section id="services" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-minimal text-muted-foreground mb-4">OUR SERVICES</h2>
            <h3 className="text-4xl md:text-6xl font-light text-architectural">
              What We Do
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="flex items-start space-x-6">
                  <span className="text-minimal text-muted-foreground font-medium">
                    {service.number}
                  </span>
                  <div>
                    <h4 className="text-xl font-light mb-4 text-architectural group-hover:text-muted-foreground transition-colors duration-500">
                      {service.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

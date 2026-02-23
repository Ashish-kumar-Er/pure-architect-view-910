import { useState } from "react";
import Navigation from "@/components/Navigation";
import ScrollReveal from "@/components/ScrollReveal";
import projectVilla from "@/assets/project-villa-kanpur.jpg";
import projectOffice from "@/assets/project-office-kanpur.jpg";
import projectApartment from "@/assets/project-apartment-kanpur.jpg";
import projectInterior from "@/assets/project-interior-kanpur.jpg";
import projectShop from "@/assets/project-shop-kanpur.jpg";
import projectRenovation from "@/assets/project-renovation-kanpur.jpg";

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const projects = [
    {
      image: projectVilla,
      title: "MODERN VILLA — SWAROOP NAGAR",
      location: "KANPUR, 2024",
      category: "RESIDENTIAL",
      description: "A contemporary 4BHK villa with clean lines, open-plan living, and a landscaped garden. Designed for comfort and modern Indian family living.",
      area: "320 SQM",
      year: "2024"
    },
    {
      image: projectOffice,
      title: "CORPORATE OFFICE — MALL ROAD",
      location: "KANPUR, 2024",
      category: "COMMERCIAL",
      description: "A modern glass-facade office building with flexible workspaces, energy-efficient systems, and a welcoming lobby designed for a leading Kanpur business.",
      area: "850 SQM",
      year: "2024"
    },
    {
      image: projectApartment,
      title: "GREEN HEIGHTS APARTMENTS",
      location: "KIDWAI NAGAR, KANPUR, 2023",
      category: "RESIDENTIAL",
      description: "A residential apartment complex with balcony gardens, cross-ventilation design, and community spaces. Built for sustainable urban living.",
      area: "4500 SQM",
      year: "2023"
    },
    {
      image: projectInterior,
      title: "LUXURY LIVING ROOM INTERIORS",
      location: "CIVIL LINES, KANPUR, 2024",
      category: "INTERIOR",
      description: "Complete turnkey interior design for a premium residence. Featuring marble flooring, custom lighting, and warm contemporary aesthetics.",
      area: "180 SQM",
      year: "2024"
    },
    {
      image: projectShop,
      title: "RETAIL COMPLEX — GT ROAD",
      location: "KANPUR, 2023",
      category: "COMMERCIAL",
      description: "A multi-brand retail complex with modern storefronts, smart signage, and inviting customer flow designed to maximize footfall.",
      area: "600 SQM",
      year: "2023"
    },
    {
      image: projectRenovation,
      title: "HERITAGE HOME RENOVATION",
      location: "OLD KANPUR, 2023",
      category: "RENOVATION",
      description: "Sensitive renovation of a traditional Kanpur home, preserving heritage character while introducing modern amenities and structural upgrades.",
      area: "250 SQM",
      year: "2023"
    }
  ];

  const categories = ["ALL", "RESIDENTIAL", "COMMERCIAL", "INTERIOR", "RENOVATION"];

  const filteredProjects = activeCategory === "ALL" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main id="main-content">
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <ScrollReveal className="mb-12">
                <h1 className="text-6xl md:text-8xl font-light text-architectural mb-8">
                  OUR WORK
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl">
                  A selection of projects delivered across Kanpur — from modern villas and 
                  commercial spaces to turnkey interiors and heritage renovations.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Filter Categories */}
        <section className="pb-16">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-wrap gap-8 justify-center md:justify-start" role="tablist" aria-label="Filter projects by category">
                {categories.map((category) => (
                  <button
                    key={category}
                    role="tab"
                    aria-selected={activeCategory === category}
                    onClick={() => setActiveCategory(category)}
                    className={`text-minimal transition-colors duration-300 relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm px-1 py-0.5 ${
                      activeCategory === category 
                        ? "text-foreground" 
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {category}
                    <span className={`absolute bottom-0 left-0 w-full h-px bg-foreground transition-transform duration-300 origin-left ${
                      activeCategory === category 
                        ? "scale-x-100" 
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}></span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-32" role="tabpanel" aria-label={`${activeCategory} projects`}>
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-16 lg:gap-20">
                {filteredProjects.map((project, index) => (
                  <ScrollReveal key={`${activeCategory}-${index}`} delay={index * 0.1}>
                    <article className="group cursor-pointer">
                      <div className="relative overflow-hidden mb-8">
                        <img 
                          src={project.image} 
                          alt={`${project.title} — ${project.description}`}
                          className="w-full h-[60vh] object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <div className="absolute top-6 left-6 bg-background/90 backdrop-blur-sm px-4 py-2">
                          <span className="text-minimal text-foreground">
                            {project.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-2xl lg:text-3xl font-light text-architectural mb-2 group-hover:text-muted-foreground transition-colors duration-500">
                            {project.title}
                          </h3>
                          <p className="text-minimal text-muted-foreground">
                            {project.location}
                          </p>
                        </div>
                        
                        <p className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                        
                        <div className="flex gap-8 pt-4 border-t border-border">
                          <div>
                            <p className="text-minimal text-muted-foreground mb-1">AREA</p>
                            <p className="text-foreground">{project.area}</p>
                          </div>
                          <div>
                            <p className="text-minimal text-muted-foreground mb-1">YEAR</p>
                            <p className="text-foreground">{project.year}</p>
                          </div>
                        </div>
                      </div>
                    </article>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-32 bg-muted">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-6xl font-light text-architectural mb-8">
                  Ready to Start
                  <br />
                  Your Project?
                </h2>
                <p className="text-xl text-muted-foreground mb-12">
                  Let's discuss how A-Line Architects can bring your vision to life
                </p>
                <a 
                  href="/contact" 
                  className="inline-block text-minimal text-foreground hover:text-muted-foreground transition-colors duration-300 relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  GET IN TOUCH
                  <span className="absolute bottom-0 left-0 w-full h-px bg-foreground group-hover:bg-muted-foreground transition-colors duration-300"></span>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Work;

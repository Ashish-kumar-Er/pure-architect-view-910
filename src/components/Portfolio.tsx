import ScrollReveal from "@/components/ScrollReveal";
import projectVilla from "@/assets/project-villa-kanpur.jpg";
import projectOffice from "@/assets/project-office-kanpur.jpg";
import projectInterior from "@/assets/project-interior-kanpur.jpg";

const Portfolio = () => {
  const projects = [
    {
      image: projectVilla,
      title: "MODERN VILLA — SWAROOP NAGAR",
      location: "KANPUR, 2024",
      description: "A contemporary 4BHK villa with clean lines, open-plan living, and a landscaped garden"
    },
    {
      image: projectOffice,
      title: "CORPORATE OFFICE — MALL ROAD",
      location: "KANPUR, 2024",
      description: "Modern glass-facade office with flexible workspaces and energy-efficient design"
    },
    {
      image: projectInterior,
      title: "LUXURY LIVING ROOM INTERIORS",
      location: "CIVIL LINES, KANPUR, 2024",
      description: "Complete turnkey interior with marble flooring, custom lighting, and warm contemporary aesthetics"
    }
  ];

  return (
    <section id="work" className="py-32 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="mb-20">
            <h2 className="text-minimal text-muted-foreground mb-4">SELECTED WORK</h2>
            <h3 className="text-4xl md:text-6xl font-light text-architectural">
              Our Projects
            </h3>
          </ScrollReveal>
          
          <div className="space-y-32">
            {projects.map((project, index) => (
              <ScrollReveal key={index}>
                <div className="group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={`${project.title} — ${project.description}`}
                      className="w-full h-[70vh] object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  <div className="mt-8 grid md:grid-cols-3 gap-8">
                    <div>
                      <h4 className="text-2xl font-light text-architectural mb-2">
                        {project.title}
                      </h4>
                      <p className="text-minimal text-muted-foreground">
                        {project.location}
                      </p>
                    </div>
                    
                    <div className="md:col-span-2">
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
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

export default Portfolio;

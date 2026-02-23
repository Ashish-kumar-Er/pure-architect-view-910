const About = () => {
  return (
    <section id="about" className="py-32 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-minimal text-muted-foreground mb-4">ABOUT</h2>
              <h3 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                Why Choose Us
              </h3>
              
              <div className="space-y-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A-Line Architects is a Kanpur-based architecture and design firm delivering 
                  thoughtful, functional, and aesthetic solutions. We specialize in creating 
                  modern, cost-effective, and practical designs tailored to client needs.
                </p>
              </div>
            </div>
            
            <div className="space-y-12">
              <div>
                <h4 className="text-minimal text-muted-foreground mb-6">OUR PROMISE</h4>
                <div className="space-y-6">
                  <div className="border-l-2 border-foreground pl-6">
                    <h5 className="text-lg font-medium mb-2">Client-Focused Design</h5>
                    <p className="text-muted-foreground">A design approach centered entirely around your vision and needs</p>
                  </div>
                  <div className="border-l-2 border-foreground pl-6">
                    <h5 className="text-lg font-medium mb-2">Practical & Budget-Friendly</h5>
                    <p className="text-muted-foreground">Solutions that balance quality with cost-effectiveness</p>
                  </div>
                  <div className="border-l-2 border-foreground pl-6">
                    <h5 className="text-lg font-medium mb-2">Attention to Detail</h5>
                    <p className="text-muted-foreground">Meticulous quality in every aspect of design and execution</p>
                  </div>
                  <div className="border-l-2 border-foreground pl-6">
                    <h5 className="text-lg font-medium mb-2">On-Time Delivery</h5>
                    <p className="text-muted-foreground">Committed to meeting deadlines without compromising quality</p>
                  </div>
                  <div className="border-l-2 border-foreground pl-6">
                    <h5 className="text-lg font-medium mb-2">End-to-End Support</h5>
                    <p className="text-muted-foreground">Complete design support from concept to completion</p>
                  </div>
                </div>
              </div>
              
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

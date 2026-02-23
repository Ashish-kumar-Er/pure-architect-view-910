const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-minimal text-muted-foreground mb-4">GET IN TOUCH</h2>
              <h3 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                Let's Build Your
                <br />
                Dream Space
              </h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-minimal text-muted-foreground mb-2">EMAIL</h4>
                  <a href="mailto:alinearchitects02@gmail.com" className="text-xl hover:text-muted-foreground transition-colors duration-300">
                    alinearchitects02@gmail.com
                  </a>
                </div>
                
                <div>
                  <h4 className="text-minimal text-muted-foreground mb-2">PHONE</h4>
                  <a href="tel:+919793637683" className="text-xl hover:text-muted-foreground transition-colors duration-300">
                    +91 97936 37683
                  </a>
                </div>
                
                <div>
                  <h4 className="text-minimal text-muted-foreground mb-2">STUDIO</h4>
                  <address className="text-xl not-italic">
                    IA Resort, Jajmau
                    <br />
                    Kanpur
                  </address>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-minimal text-muted-foreground mb-6">FOLLOW US</h4>
                <div className="space-y-4">
                  <a href="https://www.youtube.com/@a-linearchitects" target="_blank" rel="noopener noreferrer" className="block text-xl hover:text-muted-foreground transition-colors duration-300">
                    YouTube
                  </a>
                  <a href="https://www.instagram.com/a-line_architects" target="_blank" rel="noopener noreferrer" className="block text-xl hover:text-muted-foreground transition-colors duration-300">
                    Instagram
                  </a>
                </div>
              </div>
              
              <div className="pt-12 border-t border-border">
                <p className="text-muted-foreground">
                  We specialize in creating modern, cost-effective, and practical designs 
                  tailored to your needs. From concept to completion, A-Line Architects 
                  is your trusted partner in building exceptional spaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Eye, Code, Smartphone } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      description: "Modern e-commerce solution with advanced filtering and checkout process.",
      technologies: ["React", "TypeScript", "Tailwind"],
    },
    {
      title: "Corporate Website", 
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      description: "Professional corporate website with sleek design and smooth animations.",
      technologies: ["Next.js", "Framer Motion", "CSS3"],
    },
    {
      title: "Mobile App Landing",
      category: "Landing Page", 
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
      description: "Converting landing page for mobile app with interactive elements.",
      technologies: ["React", "Three.js", "GSAP"],
    }
  ];

  return (
    <section id="portfolio" className="py-16 sm:py-20 lg:py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-56 h-56 bg-gradient-primary rounded-full opacity-10 blur-3xl float-animation"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-secondary rounded-full opacity-8 blur-3xl float-animation" style={{ animationDelay: '-4s' }}></div>
      </div>

      <div className="container-xl responsive-padding relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="heading-lg mb-6 sm:mb-8 text-foreground animate-fade-up">
            Our <span className="text-gradient-accent">Portfolio</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-up delay-200">
            Explore our latest projects showcasing creativity, functionality, 
            and results-driven design solutions.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-16 sm:mb-20">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className={`border-2 border-muted hover:border-accent/30 transition-all duration-500 scale-hover animate-fade-up delay-${(index + 1) * 150} group bg-card/60 backdrop-blur-sm relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardContent className="p-0 relative z-10">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="secondary" className="w-8 h-8 p-0">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="w-8 h-8 p-0">
                      <Code className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="p-6 sm:p-8">
                  <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-semibold mb-4">
                    {project.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">{project.title}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-up delay-400">
          <Button className="btn-secondary scale-hover">
            <ExternalLink className="mr-3 h-5 w-5" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

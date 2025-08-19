
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Eye, Code } from "lucide-react";

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
    <section id="portfolio" className="section-padding bg-muted">
      <div className="container-custom">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="heading-lg mb-6 text-foreground animate-fade-up">
            Our <span className="bg-primary text-primary-foreground px-4 py-2">Portfolio</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-up delay-200">
            Explore our latest projects showcasing creativity, functionality, 
            and results-driven design solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className={`border-2 border-border hover:border-primary transition-all duration-300 hover-lift animate-fade-up delay-${(index + 1) * 150} group bg-card overflow-hidden`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" variant="secondary" className="w-8 h-8 p-0 bg-background">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="w-8 h-8 p-0 bg-background">
                    <Code className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6 lg:p-8">
                <span className="inline-block px-3 py-1 bg-muted text-muted-foreground text-xs font-semibold mb-4 uppercase tracking-wide">
                  {project.category}
                </span>
                <h3 className="heading-sm mb-3 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-muted text-muted-foreground text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-up delay-400">
          <Button className="btn-secondary hover-scale">
            <ExternalLink className="mr-2 h-5 w-5" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

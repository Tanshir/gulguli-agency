
import PageLayout from "@/components/PageLayout";
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
    },
    {
      title: "Restaurant Website",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      description: "Beautiful restaurant website with online ordering system.",
      technologies: ["React", "Stripe", "Firebase"],
    },
    {
      title: "SaaS Dashboard",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      description: "Complex dashboard interface for SaaS application with data visualization.",
      technologies: ["React", "D3.js", "Node.js"],
    },
    {
      title: "Portfolio Website",
      category: "Personal Branding",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80",
      description: "Creative portfolio website for a digital artist with custom animations.",
      technologies: ["Next.js", "GSAP", "WebGL"],
    }
  ];

  return (
    <PageLayout 
      title="Our Portfolio" 
      description="Explore our latest projects showcasing creativity, functionality, and results-driven design solutions."
      keywords="web design portfolio, website examples, case studies, project showcase"
    >
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">Our Portfolio</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our latest projects showcasing creativity, functionality, 
              and results-driven design solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
            {projects.map((project, index) => (
              <Card 
                key={project.title} 
                className="bg-card border-border hover:border-foreground transition-all duration-300 group overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300"></div>
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="secondary" className="w-8 h-8 p-0 bg-background text-foreground">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="w-8 h-8 p-0 bg-background text-foreground">
                      <Code className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-6 lg:p-8">
                  <span className="inline-block px-3 py-1 bg-muted text-muted-foreground text-xs font-semibold mb-4 uppercase tracking-wide">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{project.title}</h3>
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

          <div className="text-center">
            <Button className="bg-foreground text-background hover:bg-foreground/90 px-8 py-3 text-lg font-semibold">
              <ExternalLink className="mr-2 h-5 w-5" />
              View All Projects
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Portfolio;

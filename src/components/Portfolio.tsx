
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      description: "Modern e-commerce solution with advanced filtering and payment integration",
      tech: ["React", "Node.js", "Stripe", "MongoDB"],
    },
    {
      title: "SaaS Dashboard",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      description: "Clean and intuitive dashboard design for analytics platform",
      tech: ["Figma", "React", "TypeScript", "Tailwind"],
    },
    {
      title: "Mobile Banking App",
      category: "Mobile Design",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
      description: "Secure and user-friendly mobile banking interface",
      tech: ["React Native", "Firebase", "Biometrics"],
    },
    {
      title: "Restaurant Website",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      description: "Elegant restaurant website with online reservation system",
      tech: ["Next.js", "Sanity CMS", "Vercel"],
    },
    {
      title: "Portfolio Website",
      category: "Creative Design",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80",
      description: "Creative portfolio showcasing photography and digital art",
      tech: ["Gatsby", "GraphQL", "Netlify"],
    },
    {
      title: "Fitness App",
      category: "Mobile App",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
      description: "Comprehensive fitness tracking app with social features",
      tech: ["Flutter", "AWS", "Machine Learning"],
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
            Our <span className="text-electric">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-up delay-100">
            Discover our latest projects and see how we transform ideas into exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className={`group hover-lift overflow-hidden border-0 shadow-lg animate-fade-up delay-${(index + 1) * 100}`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <Button size="sm" className="bg-white/20 glass text-white hover:bg-white/30">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View
                    </Button>
                    <Button size="sm" className="bg-white/20 glass text-white hover:bg-white/30">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="text-sm text-electric font-medium mb-2">{project.category}</div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-electric/10 text-electric text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-electric text-electric hover:bg-electric hover:text-white magnetic">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

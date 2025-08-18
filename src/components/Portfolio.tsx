
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Award, Zap } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Empire",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      description: "Revolutionary e-commerce platform with AI-powered recommendations and seamless payment integration",
      tech: ["React", "Node.js", "Stripe", "MongoDB"],
      gradient: "bg-gradient-primary",
      impact: "300% Sales Increase"
    },
    {
      title: "SaaS Dashboard Pro",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      description: "Next-generation analytics dashboard with real-time data visualization and intuitive user experience",
      tech: ["Figma", "React", "TypeScript", "D3.js"],
      gradient: "bg-gradient-secondary",
      impact: "95% User Satisfaction"
    },
    {
      title: "FinTech Mobile App",
      category: "Mobile Design",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
      description: "Ultra-secure mobile banking app with biometric authentication and instant transactions",
      tech: ["React Native", "Firebase", "Biometrics"],
      gradient: "bg-gradient-accent",
      impact: "1M+ Downloads"
    },
    {
      title: "Gourmet Restaurant Hub",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      description: "Elegant restaurant ecosystem with online reservations, menu management, and loyalty programs",
      tech: ["Next.js", "Sanity CMS", "Stripe"],
      gradient: "bg-gradient-primary",
      impact: "250% Bookings Up"
    },
    {
      title: "Creative Portfolio Studio",
      category: "Creative Design",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80",
      description: "Immersive portfolio experience showcasing photography and digital art with 3D interactions",
      tech: ["Three.js", "GSAP", "WebGL"],
      gradient: "bg-gradient-secondary",
      impact: "500% Engagement"
    },
    {
      title: "Fitness Revolution App",
      category: "Mobile App",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
      description: "AI-powered fitness companion with personalized workouts and social challenges",
      tech: ["Flutter", "AWS", "TensorFlow"],
      gradient: "bg-gradient-accent",
      impact: "Top 10 Health App"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-muted/10 via-background to-muted/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-32 w-80 h-80 bg-gradient-primary rounded-full blur-3xl opacity-15 float-animation"></div>
        <div className="absolute bottom-32 right-32 w-96 h-96 bg-gradient-secondary rounded-full blur-3xl opacity-10 float-animation" style={{ animationDelay: '-3s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-white/20 mb-6 animate-fade-up-bold">
            <Award className="h-5 w-5 text-primary mr-2" />
            <span className="text-primary font-bold">Our Masterpieces</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-8 animate-fade-up-bold delay-100 text-shadow">
            Portfolio of <span className="text-gradient-rainbow">Excellence</span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto animate-fade-up-bold delay-200 font-medium">
            Discover our latest projects and see how we transform 
            <span className="text-gradient-primary font-bold"> bold ideas</span> into 
            <span className="text-gradient-secondary font-bold"> extraordinary digital experiences</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className={`group hover-lift-bold overflow-hidden border-0 shadow-2xl animate-fade-up-bold delay-${(index + 1) * 75} glass border-white/30 relative`}
            >
              <div className="absolute top-4 right-4 z-20">
                <div className={`px-3 py-1 rounded-full text-xs font-bold text-white ${project.gradient} shadow-lg`}>
                  {project.impact}
                </div>
              </div>
              
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                    <Button size="sm" className="bg-white/20 glass text-white hover:bg-white/30 magnetic-bold rounded-full font-bold">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button size="sm" className="bg-white/20 glass text-white hover:bg-white/30 magnetic-bold rounded-full font-bold">
                      <Github className="h-4 w-4 mr-2" />
                      Source
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-8">
                <div className={`text-sm font-bold mb-3 text-gradient-primary`}>{project.category}</div>
                <h3 className="text-2xl font-black mb-4 group-hover:text-gradient-primary transition-colors duration-300">{project.title}</h3>
                <p className="text-muted-foreground mb-6 text-base leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary text-sm rounded-full font-bold border border-primary/20 hover:scale-105 transition-transform duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="bg-gradient-rainbow hover:opacity-90 text-white font-bold px-12 py-6 text-xl magnetic-bold rounded-full shadow-2xl neon-glow">
            <Zap className="mr-3 h-6 w-6" />
            Explore All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

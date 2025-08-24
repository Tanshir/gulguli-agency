
import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Book, Search, Code, Layers, Zap, Shield, Globe, Smartphone } from "lucide-react";

const Documentation = () => {
  const categories = [
    {
      icon: Book,
      title: "Getting Started",
      description: "Learn the basics and get up and running quickly",
      articles: [
        "Quick Start Guide",
        "Project Setup",
        "Initial Configuration",
        "First Steps"
      ]
    },
    {
      icon: Code,
      title: "Development",
      description: "Technical documentation for developers",
      articles: [
        "API Reference",
        "Code Examples",
        "Best Practices",
        "Troubleshooting"
      ]
    },
    {
      icon: Layers,
      title: "Design System",
      description: "Guidelines for design and branding",
      articles: [
        "Brand Guidelines",
        "Color Palette",
        "Typography",
        "Component Library"
      ]
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimization and performance tips",
      articles: [
        "Speed Optimization",
        "Image Compression",
        "Caching Strategies",
        "Core Web Vitals"
      ]
    },
    {
      icon: Shield,
      title: "Security",
      description: "Security best practices and guidelines",
      articles: [
        "Security Checklist",
        "SSL Configuration",
        "Data Protection",
        "Regular Updates"
      ]
    },
    {
      icon: Globe,
      title: "SEO & Marketing",
      description: "Search optimization and marketing guides",
      articles: [
        "SEO Basics",
        "Meta Tags Guide",
        "Schema Markup",
        "Analytics Setup"
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile",
      description: "Mobile optimization and responsive design",
      articles: [
        "Responsive Design",
        "Mobile Performance",
        "Touch Interactions",
        "Progressive Web Apps"
      ]
    }
  ];

  const popularArticles = [
    "How to optimize your website for search engines",
    "Setting up Google Analytics and tracking",
    "Creating mobile-friendly responsive designs",
    "Improving website loading speed",
    "Implementing SSL certificates",
    "Best practices for user experience design"
  ];

  return (
    <PageLayout 
      title="Documentation" 
      description="Comprehensive documentation and guides for web design, development, SEO, and digital marketing best practices."
      keywords="web design documentation, development guides, SEO tutorials, best practices"
    >
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Documentation</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Everything you need to know about web design, development, and digital marketing best practices.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input 
                placeholder="Search documentation..." 
                className="pl-12 py-3 bg-card border-border text-lg text-foreground"
              />
            </div>
          </div>

          {/* Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {categories.map((category, index) => (
              <Card key={index} className="bg-card border-border hover:border-foreground transition-colors duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-foreground flex items-center justify-center mb-4 group-hover:bg-muted-foreground transition-colors">
                    <category.icon className="h-6 w-6 text-background" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{category.title}</CardTitle>
                  <p className="text-muted-foreground">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.articles.map((article, articleIndex) => (
                      <li key={articleIndex}>
                        <Button variant="link" className="text-muted-foreground hover:text-foreground p-0 h-auto text-left justify-start">
                          {article}
                        </Button>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Popular Articles */}
          <div className="bg-muted rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Popular Articles</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {popularArticles.map((article, index) => (
                <Button 
                  key={index}
                  variant="ghost" 
                  className="text-left justify-start text-foreground hover:text-muted-foreground hover:bg-card p-4 h-auto"
                >
                  <span className="text-muted-foreground mr-3">{String(index + 1).padStart(2, '0')}.</span>
                  {article}
                </Button>
              ))}
            </div>
          </div>

          {/* Help Section */}
          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Need More Help?</h2>
            <p className="text-muted-foreground mb-6">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary">
                Contact Support
              </Button>
              <Button variant="outline" className="border-border text-foreground hover:border-foreground">
                Request Feature
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Documentation;

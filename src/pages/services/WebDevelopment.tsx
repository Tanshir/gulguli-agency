
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Shield, Zap, Globe, Settings } from "lucide-react";

const WebDevelopment = () => {
  const technologies = [
    { name: "React", description: "Modern JavaScript library for building user interfaces" },
    { name: "TypeScript", description: "Type-safe JavaScript for better code quality" },
    { name: "Node.js", description: "Server-side JavaScript runtime for backend development" },
    { name: "Next.js", description: "React framework for production-ready applications" }
  ];

  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Well-structured, maintainable code following industry best practices."
    },
    {
      icon: Database,
      title: "Database Integration",
      description: "Seamless integration with various databases and content management systems."
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Built-in security measures to protect your website and user data."
    },
    {
      icon: Zap,
      title: "Performance Optimized",
      description: "Fast loading times and optimized performance across all devices."
    },
    {
      icon: Globe,
      title: "SEO Ready",
      description: "Search engine optimized structure for better visibility."
    },
    {
      icon: Settings,
      title: "Easy Maintenance",
      description: "Built for easy updates and long-term maintenance."
    }
  ];

  return (
    <PageLayout 
      title="Web Development Services" 
      description="Professional web development services using modern technologies like React, TypeScript, and Node.js to build fast, secure, and scalable websites."
      keywords="web development, React, TypeScript, Node.js, full-stack development, custom websites"
    >
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Web Development
            <span className="block text-muted-foreground">Built to Last</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Custom web development solutions using cutting-edge technologies to create fast, secure, and scalable websites.
          </p>
          <Button className="btn-primary px-8 py-3 text-lg font-semibold">
            Start Building
          </Button>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Technologies We Use</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We leverage the latest technologies to build modern, efficient web applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {technologies.map((tech, index) => (
              <Card key={tech.name} className="bg-card border-border hover:border-foreground transition-colors duration-300">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-3 text-foreground">{tech.name}</h3>
                  <p className="text-muted-foreground text-sm">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={feature.title} className="bg-card border-border hover:border-foreground transition-colors duration-300">
                <CardContent className="p-8">
                  <feature.icon className="h-12 w-12 text-foreground mb-6" />
                  <h3 className="text-xl font-bold mb-4 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Ready to Build Something Amazing?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a custom solution that fits your needs.
          </p>
          <Button className="btn-primary px-8 py-3 text-lg font-semibold">
            Get Quote
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default WebDevelopment;

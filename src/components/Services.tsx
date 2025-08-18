
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Code, Smartphone, Search, Zap, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that prioritize user experience and drive engagement.",
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design"]
    },
    {
      icon: Code,
      title: "Web Development", 
      description: "Custom websites built with modern technologies for performance and scalability.",
      features: ["Frontend Development", "Backend Integration", "CMS Setup", "Performance Optimization"]
    },
    {
      icon: Smartphone,
      title: "Mobile Responsive",
      description: "Pixel-perfect designs that look stunning on all devices and screen sizes.",
      features: ["Mobile-First Design", "Cross-Browser Testing", "Touch Optimization", "Progressive Web Apps"]
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Strategic SEO implementation to boost your visibility and search rankings.",
      features: ["Technical SEO", "Content Strategy", "Local SEO", "Analytics Setup"]
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Lightning-fast websites optimized for speed, conversion, and user satisfaction.",
      features: ["Speed Optimization", "Core Web Vitals", "CDN Setup", "Image Optimization"]
    },
    {
      icon: Shield,
      title: "Security & Maintenance",
      description: "Ongoing support and security measures to keep your website running smoothly.",
      features: ["SSL Certificates", "Security Monitoring", "Regular Updates", "Backup Solutions"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
            Our <span className="text-electric">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-up delay-100">
            Comprehensive web design and development solutions tailored to elevate your digital presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className={`hover-lift glass border-white/20 animate-fade-up delay-${(index + 1) * 100}`}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-electric rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-electric rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

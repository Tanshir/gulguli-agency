
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Code, Smartphone, Search, Zap, Shield, Sparkles, Rocket } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that prioritize user experience and drive massive engagement.",
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
      gradient: "bg-gradient-primary",
      iconColor: "text-white"
    },
    {
      icon: Code,
      title: "Web Development", 
      description: "Custom websites built with cutting-edge technologies for lightning performance and scalability.",
      features: ["Frontend Magic", "Backend Power", "CMS Integration", "Speed Optimization"],
      gradient: "bg-gradient-secondary",
      iconColor: "text-white"
    },
    {
      icon: Smartphone,
      title: "Mobile Experience",
      description: "Pixel-perfect responsive designs that look absolutely stunning on every device and screen size.",
      features: ["Mobile-First Design", "Cross-Platform", "Touch Optimization", "Progressive Web Apps"],
      gradient: "bg-gradient-accent",
      iconColor: "text-white"
    },
    {
      icon: Search,
      title: "SEO Mastery",
      description: "Strategic SEO implementation to skyrocket your visibility and dominate search rankings.",
      features: ["Technical SEO", "Content Strategy", "Local SEO", "Analytics Magic"],
      gradient: "bg-gradient-primary",
      iconColor: "text-white"
    },
    {
      icon: Zap,
      title: "Performance Beast",
      description: "Lightning-fast websites optimized for speed, conversion, and ultimate user satisfaction.",
      features: ["Speed Optimization", "Core Web Vitals", "CDN Setup", "Image Compression"],
      gradient: "bg-gradient-secondary",
      iconColor: "text-white"
    },
    {
      icon: Shield,
      title: "Security & Care",
      description: "Rock-solid security measures and ongoing support to keep your website running flawlessly.",
      features: ["SSL Certificates", "Security Monitoring", "Regular Updates", "Backup Solutions"],
      gradient: "bg-gradient-accent",
      iconColor: "text-white"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background via-muted/10 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-primary rounded-full blur-3xl opacity-20 float-animation"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-secondary rounded-full blur-3xl opacity-15 float-animation" style={{ animationDelay: '-2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-white/20 mb-6 animate-fade-up-bold">
            <Sparkles className="h-5 w-5 text-primary mr-2" />
            <span className="text-primary font-bold">What We Do</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-8 animate-fade-up-bold delay-100 text-shadow">
            Our <span className="text-gradient-rainbow">Super Powers</span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto animate-fade-up-bold delay-200 font-medium">
            Comprehensive digital solutions designed to <span className="text-gradient-primary font-bold">elevate your brand</span> and 
            <span className="text-gradient-secondary font-bold"> dominate your market</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className={`hover-lift-bold glass border-white/30 animate-fade-up-bold delay-${(index + 1) * 75} group overflow-hidden relative`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="relative z-10">
                <div className={`w-16 h-16 ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 neon-glow`}>
                  <service.icon className={`h-8 w-8 ${service.iconColor}`} />
                </div>
                <CardTitle className="text-2xl font-bold group-hover:text-gradient-primary transition-colors duration-300">{service.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-base font-medium">
                      <div className="w-3 h-3 bg-gradient-primary rounded-full mr-4 pulse-glow"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full glass border border-white/20 animate-fade-up-bold delay-500">
            <Rocket className="h-6 w-6 text-gradient-primary mr-3" />
            <span className="text-lg font-bold text-gradient-secondary">Ready to Launch Your Project?</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

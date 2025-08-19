
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Code, Smartphone, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Web Design",
      description: "Beautiful, modern designs that capture your brand essence and engage your audience effectively.",
      features: ["Custom UI/UX Design", "Brand Identity", "Responsive Layouts"],
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Fast, secure, and scalable websites built with the latest technologies and best practices.",
      features: ["React & TypeScript", "Performance Optimization", "SEO Ready"],
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Mobile-optimized experiences that look perfect on any device, from phones to desktops.",
      features: ["Responsive Design", "Touch Optimization", "Cross-browser Testing"],
    },
  ];

  return (
    <section id="services" className="section-padding bg-muted">
      <div className="container-custom">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="heading-lg mb-6 text-foreground animate-fade-up">
            Our <span className="bg-primary text-primary-foreground px-4 py-2">Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-up delay-200">
            We offer comprehensive web design and development services to help your 
            business stand out in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className={`border-2 border-border hover:border-primary transition-all duration-300 hover-lift animate-fade-up delay-${(index + 1) * 200} group bg-card`}
            >
              <CardContent className="p-8 lg:p-10">
                <div className="w-16 h-16 bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                
                <h3 className="heading-sm mb-4 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button variant="ghost" className="group/btn w-full justify-between text-foreground hover:text-primary font-semibold p-0">
                  Learn More
                  <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

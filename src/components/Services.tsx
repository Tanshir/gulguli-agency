
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Shield, Globe, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "Vault Management",
      description: "Create and manage over-collateralized vaults with multiple crypto assets for maximum security.",
      features: ["Multi-asset collateral", "Dynamic risk management", "Automated liquidation protection"],
    },
    {
      icon: Shield,
      title: "Governance Participation",
      description: "Participate in Economic Committee decisions and help shape the future of IST protocol.",
      features: ["Community voting", "Proposal submission", "Economic parameter control"],
    },
    {
      icon: Globe,
      title: "Cross-Chain Integration",
      description: "Seamlessly move IST across multiple blockchain networks with our interchain technology.",
      features: ["Multi-chain support", "Bridge functionality", "Universal compatibility"],
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-secondary rounded-full opacity-10 blur-3xl float-animation"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-accent rounded-full opacity-5 blur-2xl float-animation" style={{ animationDelay: '-3s' }}></div>
      </div>

      <div className="container-xl responsive-padding relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="heading-lg mb-6 sm:mb-8 text-foreground animate-fade-up">
            Our <span className="text-gradient-secondary">Ecosystem</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-up delay-200">
            Discover the comprehensive tools and features that make IST the most robust stablecoin 
            in the multi-chain ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className={`border-2 border-muted hover:border-primary/30 transition-all duration-500 scale-hover animate-fade-up delay-${(index + 1) * 200} group bg-card/70 backdrop-blur-sm overflow-hidden relative`}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardContent className="p-8 sm:p-10 relative z-10">
                <div className="w-20 h-20 bg-gradient-accent rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-10 w-10 text-white" />
                </div>
                
                <h3 className="heading-md mb-6 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed text-base sm:text-lg">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm sm:text-base">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button variant="ghost" className="group/btn w-full justify-between text-foreground hover:text-primary font-semibold">
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

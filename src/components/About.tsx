
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Users, Award, TrendingUp } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising on quality or attention to detail.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled designers and developers with years of industry experience.",
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence in web design and user experience.",
    },
    {
      icon: TrendingUp,
      title: "Results Driven",
      description: "Websites that not only look great but also drive conversions and growth.",
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-background relative overflow-hidden">
      {/* Background geometric elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-secondary rounded-full opacity-20 blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 sm:w-64 sm:h-64 bg-gradient-accent rounded-full opacity-10 blur-2xl"></div>
      </div>

      <div className="container-xl responsive-padding relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="heading-lg mb-6 sm:mb-8 text-foreground animate-fade-up">
            Why Choose <span className="text-gradient-secondary">PixelCraft</span>?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-up delay-200">
            We combine creativity with technical expertise to deliver websites that 
            make a lasting impression and drive business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className={`border-2 border-muted hover:border-secondary/30 transition-all duration-300 scale-hover animate-fade-up delay-${(index + 1) * 100} group bg-card/50 backdrop-blur-sm`}
            >
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="heading-md mb-4 group-hover:text-secondary transition-colors duration-300">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          {[
            { number: "500+", label: "Projects Completed", color: "text-gradient-secondary" },
            { number: "98%", label: "Client Satisfaction", color: "text-gradient-accent" },
            { number: "5+", label: "Years Experience", color: "text-gradient-secondary" },
            { number: "50+", label: "Happy Clients", color: "text-gradient-accent" }
          ].map((stat, index) => (
            <div key={stat.label} className={`text-center animate-fade-up delay-${(index + 1) * 100}`}>
              <div className={`text-3xl sm:text-4xl lg:text-5xl font-black mb-2 ${stat.color}`}>{stat.number}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

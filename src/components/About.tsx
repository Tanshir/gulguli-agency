
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
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="heading-lg mb-6 text-foreground animate-fade-up">
            Why Choose <span className="bg-primary text-primary-foreground px-4 py-2">PixelCraft</span>?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-up delay-200">
            We combine creativity with technical expertise to deliver websites that 
            make a lasting impression and drive business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className={`border-2 border-border hover:border-primary transition-all duration-300 hover-lift animate-fade-up delay-${(index + 1) * 100} group bg-card text-center`}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="heading-sm mb-4 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

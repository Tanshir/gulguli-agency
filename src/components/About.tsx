
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Clock, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our priority. We work closely with you to understand your goals."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for perfection in every pixel, every line of code, every user interaction."
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "We respect deadlines and deliver projects on time without compromising quality."
    },
    {
      icon: Heart,
      title: "Passionate",
      description: "We love what we do, and it shows in every project we create for our clients."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-electric">PixelCraft</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We are a passionate team of designers and developers who believe in the power of 
              beautiful, functional web experiences. Founded in 2019, we've helped over 150 businesses 
              transform their digital presence.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our mission is simple: create websites that not only look stunning but also drive 
              real business results. We combine cutting-edge design with robust development to 
              deliver exceptional digital solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <div>
                <div className="text-3xl font-bold text-electric mb-2">150+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-electric mb-2">98%</div>
                <div className="text-muted-foreground">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-electric mb-2">24/7</div>
                <div className="text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card 
                key={value.title} 
                className={`hover-lift glass border-white/20 animate-fade-up delay-${(index + 1) * 100}`}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-electric rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Clock, Heart, Target, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Users,
      title: "Client Obsessed",
      description: "Your success is our priority. We work collaboratively to exceed expectations.",
      gradient: "bg-gradient-primary"
    },
    {
      icon: Award,
      title: "Excellence Driven",
      description: "We strive for quality in every detail, ensuring exceptional results.",
      gradient: "bg-gradient-secondary"
    },
    {
      icon: Clock,
      title: "Reliable Delivery",
      description: "We deliver outstanding results on time without compromising quality.",
      gradient: "bg-gradient-accent"
    },
    {
      icon: Heart,
      title: "Passionate Team",
      description: "We love what we do, and that passion reflects in every project.",
      gradient: "bg-gradient-primary"
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-background via-muted/5 to-background relative overflow-hidden">
      {/* Softer Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-48 h-48 lg:w-72 lg:h-72 bg-gradient-accent rounded-full blur-3xl opacity-10 float-animation"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 lg:w-64 lg:h-64 bg-gradient-secondary rounded-full blur-3xl opacity-8 float-animation" style={{ animationDelay: '-4s' }}></div>
      </div>

      <div className="container mx-auto responsive-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="animate-fade-up-bold">
            <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 rounded-full glass border border-white/10 mb-6 sm:mb-8">
              <Lightbulb className="h-4 w-4 sm:h-5 sm:w-5 text-primary mr-2" />
              <span className="text-primary font-bold text-sm sm:text-base">About Our Studio</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 text-shadow">
              Meet <span className="text-gradient-rainbow">CreativeStudio</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed font-medium">
              We are a passionate team of <span className="text-gradient-primary font-bold">visionary designers</span> and 
              <span className="text-gradient-secondary font-bold"> innovative developers</span> who believe in creating 
              exceptional digital experiences.
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 sm:mb-10 leading-relaxed font-medium">
              Since 2020, we've helped over <span className="text-gradient-accent font-bold">500 businesses</span> transform 
              their online presence and achieve remarkable growth.
            </p>
            
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {[
                { number: "500+", label: "Happy Clients", color: "text-gradient-primary" },
                { number: "99%", label: "Success Rate", color: "text-gradient-secondary" },
                { number: "24/7", label: "Support", color: "text-gradient-accent" },
                { number: "50+", label: "Awards Won", color: "text-gradient-rainbow" }
              ].map((stat, index) => (
                <div key={stat.label} className={`text-center animate-fade-in-scale delay-${(index + 1) * 100}`}>
                  <div className={`text-2xl sm:text-3xl lg:text-4xl font-black mb-2 ${stat.color}`}>{stat.number}</div>
                  <div className="text-muted-foreground font-medium text-sm sm:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title} 
                className={`hover-lift-bold glass border-white/20 animate-fade-up-bold delay-${(index + 1) * 100} group overflow-hidden relative`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardContent className="p-6 sm:p-8 text-center relative z-10">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 ${value.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg group-hover:scale-105 transition-transform duration-300 neon-glow`}>
                    <value.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <h3 className="font-black text-lg sm:text-xl mb-3 sm:mb-4 group-hover:text-gradient-primary transition-colors duration-300">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-medium text-sm sm:text-base">{value.description}</p>
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

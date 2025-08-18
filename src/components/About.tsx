
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Clock, Heart, Target, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Users,
      title: "Client Obsessed",
      description: "Your success is our obsession. We work tirelessly to exceed your wildest expectations.",
      gradient: "bg-gradient-primary"
    },
    {
      icon: Award,
      title: "Excellence Driven",
      description: "We strive for perfection in every pixel, every animation, every user interaction.",
      gradient: "bg-gradient-secondary"
    },
    {
      icon: Clock,
      title: "Lightning Fast",
      description: "We deliver stunning results ahead of schedule without ever compromising on quality.",
      gradient: "bg-gradient-accent"
    },
    {
      icon: Heart,
      title: "Passionate Creators",
      description: "We absolutely love what we do, and that passion shows in every project we create.",
      gradient: "bg-gradient-primary"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background via-muted/5 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-accent rounded-full blur-3xl opacity-20 float-animation"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-secondary rounded-full blur-3xl opacity-15 float-animation" style={{ animationDelay: '-4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div className="animate-fade-up-bold">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-white/20 mb-8">
              <Lightbulb className="h-5 w-5 text-primary mr-2" />
              <span className="text-primary font-bold">About Our Studio</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black mb-8 text-shadow">
              Meet <span className="text-gradient-rainbow">CreativeStudio</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed font-medium">
              We are a passionate team of <span className="text-gradient-primary font-bold">visionary designers</span> and 
              <span className="text-gradient-secondary font-bold"> innovative developers</span> who believe in the transformative power of 
              exceptional digital experiences.
            </p>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed font-medium">
              Founded in 2020 with a mission to revolutionize the digital landscape, we've helped over 
              <span className="text-gradient-accent font-bold"> 500 businesses</span> transform their online presence 
              and achieve unprecedented growth.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: "500+", label: "Happy Clients", color: "text-gradient-primary" },
                { number: "99%", label: "Success Rate", color: "text-gradient-secondary" },
                { number: "24/7", label: "Support", color: "text-gradient-accent" },
                { number: "50+", label: "Awards Won", color: "text-gradient-rainbow" }
              ].map((stat, index) => (
                <div key={stat.label} className={`text-center animate-fade-in-scale delay-${(index + 1) * 100}`}>
                  <div className={`text-3xl md:text-4xl font-black mb-2 ${stat.color}`}>{stat.number}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title} 
                className={`hover-lift-bold glass border-white/30 animate-fade-up-bold delay-${(index + 1) * 100} group overflow-hidden relative`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardContent className="p-8 text-center relative z-10">
                  <div className={`w-16 h-16 ${value.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 neon-glow`}>
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-black text-xl mb-4 group-hover:text-gradient-primary transition-colors duration-300">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-medium">{value.description}</p>
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

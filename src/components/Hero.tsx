
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap, Star, Heart } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-primary rounded-full blur-3xl opacity-30 float-animation"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-secondary rounded-full blur-3xl opacity-25 float-animation" style={{ animationDelay: '-2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-accent rounded-full blur-3xl opacity-20 float-animation" style={{ animationDelay: '-4s' }}></div>
        
        {/* Floating Icons */}
        <div className="absolute top-32 right-32 text-primary/20 float-animation">
          <Zap className="h-12 w-12" />
        </div>
        <div className="absolute bottom-32 left-32 text-secondary/20 float-animation" style={{ animationDelay: '-1s' }}>
          <Star className="h-10 w-10" />
        </div>
        <div className="absolute top-1/2 right-16 text-accent/20 float-animation" style={{ animationDelay: '-3s' }}>
          <Heart className="h-8 w-8" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Enhanced Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full glass border border-white/30 mb-10 animate-fade-up-bold pulse-glow">
            <span className="text-lg font-bold text-gradient-rainbow">✨ Award-Winning Creative Studio</span>
          </div>

          {/* Bold Main Headline */}
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight animate-fade-up-bold delay-100 text-shadow-bold">
            We Create{" "}
            <span className="text-gradient-rainbow relative inline-block">
              Digital Magic
              <div className="absolute -bottom-4 left-0 w-full h-2 bg-gradient-rainbow rounded-full animate-pulse"></div>
            </span>{" "}
            That Converts
          </h1>

          {/* Enhanced Subtitle */}
          <p className="text-2xl md:text-3xl text-muted-foreground mb-14 max-w-4xl mx-auto leading-relaxed animate-fade-up-bold delay-200 font-medium">
            Transform your vision into stunning digital experiences with 
            <span className="text-gradient-primary font-bold"> bold creativity</span> and 
            <span className="text-gradient-secondary font-bold"> cutting-edge technology</span>
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-up-bold delay-300 mb-16">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white font-bold px-12 py-6 text-xl magnetic-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 neon-glow">
              Start Your Project
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            
            <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-gradient-primary hover:text-white font-bold px-12 py-6 text-xl magnetic-bold rounded-full border-gradient shadow-xl">
              <Play className="mr-3 h-6 w-6" />
              Watch Our Magic
            </Button>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 animate-fade-up-bold delay-400">
            {[
              { number: "500+", label: "Projects Delivered", color: "text-gradient-primary" },
              { number: "99%", label: "Client Satisfaction", color: "text-gradient-secondary" },
              { number: "50+", label: "Awards Won", color: "text-gradient-accent" },
              { number: "24/7", label: "Creative Support", color: "text-gradient-rainbow" }
            ].map((stat, index) => (
              <div key={stat.label} className={`text-center glass rounded-2xl p-6 hover-lift-bold animate-fade-in-scale delay-${(index + 1) * 75}`}>
                <div className={`text-4xl md:text-5xl font-black mb-3 ${stat.color}`}>{stat.number}</div>
                <div className="text-muted-foreground font-medium text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-3 border-primary rounded-full flex justify-center glass neon-glow">
          <div className="w-2 h-4 bg-gradient-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

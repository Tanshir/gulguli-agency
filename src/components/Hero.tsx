
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap, Star, Heart } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/10 to-background">
      {/* Softer Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 lg:w-96 lg:h-96 bg-gradient-primary rounded-full blur-3xl opacity-20 float-animation"></div>
        <div className="absolute bottom-20 right-20 w-56 h-56 lg:w-80 lg:h-80 bg-gradient-secondary rounded-full blur-3xl opacity-15 float-animation" style={{ animationDelay: '-2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 lg:w-72 lg:h-72 bg-gradient-accent rounded-full blur-3xl opacity-10 float-animation" style={{ animationDelay: '-4s' }}></div>
        
        {/* Floating Icons */}
        <div className="absolute top-20 sm:top-32 right-8 sm:right-32 text-primary/15 float-animation">
          <Zap className="h-8 w-8 sm:h-12 sm:w-12" />
        </div>
        <div className="absolute bottom-20 sm:bottom-32 left-8 sm:left-32 text-secondary/15 float-animation" style={{ animationDelay: '-1s' }}>
          <Star className="h-6 w-6 sm:h-10 sm:w-10" />
        </div>
        <div className="absolute top-1/2 right-4 sm:right-16 text-accent/15 float-animation" style={{ animationDelay: '-3s' }}>
          <Heart className="h-6 w-6 sm:h-8 sm:w-8" />
        </div>
      </div>

      <div className="container mx-auto responsive-padding relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Enhanced Badge */}
          <div className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 rounded-full glass border border-white/20 mb-8 sm:mb-10 animate-fade-up-bold pulse-glow">
            <span className="text-sm sm:text-lg font-bold text-gradient-rainbow">✨ Award-Winning Creative Studio</span>
          </div>

          {/* Responsive Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8 leading-tight animate-fade-up-bold delay-100 text-shadow">
            We Create{" "}
            <span className="text-gradient-rainbow relative inline-block">
              Digital Magic
              <div className="absolute -bottom-2 sm:-bottom-4 left-0 w-full h-1 sm:h-2 bg-gradient-rainbow rounded-full opacity-60"></div>
            </span>{" "}
            <br className="hidden sm:inline" />
            That Converts
          </h1>

          {/* Responsive Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-10 sm:mb-14 max-w-5xl mx-auto leading-relaxed animate-fade-up-bold delay-200 font-medium px-4">
            Transform your vision into stunning digital experiences with 
            <span className="text-gradient-primary font-bold"> bold creativity</span> and 
            <span className="text-gradient-secondary font-bold"> cutting-edge technology</span>
          </p>

          {/* Responsive CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-fade-up-bold delay-300 mb-12 sm:mb-16 px-4">
            <Button size="lg" className="w-full sm:w-auto bg-gradient-primary hover:opacity-90 text-white font-bold px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl magnetic-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 neon-glow">
              Start Your Project
              <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
            
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-gradient-primary hover:text-white font-bold px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl magnetic-bold rounded-full shadow-lg">
              <Play className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
              Watch Our Magic
            </Button>
          </div>

          {/* Responsive Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 animate-fade-up-bold delay-400 px-4">
            {[
              { number: "500+", label: "Projects Delivered", color: "text-gradient-primary" },
              { number: "99%", label: "Client Satisfaction", color: "text-gradient-secondary" },
              { number: "50+", label: "Awards Won", color: "text-gradient-accent" },
              { number: "24/7", label: "Creative Support", color: "text-gradient-rainbow" }
            ].map((stat, index) => (
              <div key={stat.label} className={`text-center glass rounded-xl sm:rounded-2xl p-4 sm:p-6 hover-lift-bold animate-fade-in-scale delay-${(index + 1) * 75}`}>
                <div className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-2 sm:mb-3 ${stat.color}`}>{stat.number}</div>
                <div className="text-muted-foreground font-medium text-sm sm:text-base lg:text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 sm:w-8 sm:h-12 border-2 sm:border-3 border-primary rounded-full flex justify-center glass neon-glow">
          <div className="w-1 h-3 sm:w-2 sm:h-4 bg-gradient-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

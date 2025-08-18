
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-electric-subtle rounded-full blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-electric-subtle rounded-full blur-3xl opacity-10 animate-float" style={{ animationDelay: '-3s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-white/20 mb-8 animate-fade-up">
            <span className="text-sm font-medium text-electric">✨ Award-Winning Design Studio</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-up delay-100">
            We Design{" "}
            <span className="text-electric relative">
              Websites
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-electric rounded-full"></div>
            </span>{" "}
            That Convert
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-up delay-200">
            Transform your vision into stunning digital experiences that captivate users and drive business growth with our expert design and development services.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up delay-300">
            <Button size="lg" className="bg-electric hover:opacity-90 text-white font-semibold px-8 py-4 text-lg magnetic">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button size="lg" variant="outline" className="border-electric text-electric hover:bg-electric hover:text-white font-semibold px-8 py-4 text-lg magnetic">
              <Play className="mr-2 h-5 w-5" />
              Watch Our Work
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 animate-fade-up delay-400">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-electric mb-2">150+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-electric mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-electric mb-2">5+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-electric rounded-full flex justify-center">
          <div className="w-1 h-3 bg-electric rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

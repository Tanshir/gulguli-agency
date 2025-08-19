
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden pt-16 lg:pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Geometric shapes */}
        <div className="absolute top-20 right-4 sm:right-10 lg:right-20 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-primary/5 rounded-full"></div>
        <div className="absolute bottom-20 left-4 sm:left-10 lg:left-20 w-24 h-24 sm:w-36 sm:h-36 lg:w-48 lg:h-48 bg-primary/10"></div>
        <div className="absolute top-1/2 right-8 sm:right-16 lg:right-32 w-2 h-2 sm:w-4 sm:h-4 bg-primary"></div>
        <div className="absolute top-1/3 left-8 sm:left-16 lg:left-32 w-1 h-16 sm:h-24 lg:h-32 bg-primary/30"></div>
      </div>

      <div className="container-custom relative z-10 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Main Headline */}
          <h1 className="heading-xl mb-6 sm:mb-8 lg:mb-12 text-foreground animate-fade-up">
            WE CREATE<br />
            <span className="bg-primary text-primary-foreground px-4 py-2 inline-block mt-2 sm:mt-4">STUNNING</span><br />
            WEBSITES<br />
            <span className="text-muted-foreground">THAT CONVERT</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-12 lg:mb-16 max-w-3xl mx-auto leading-relaxed animate-fade-up delay-200">
            Transform your business with cutting-edge web design. We craft beautiful, 
            responsive websites that engage users and drive results.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-fade-up delay-300">
            <Button className="btn-primary text-lg px-8 py-4 hover-scale w-full sm:w-auto">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button className="btn-secondary text-lg px-8 py-4 hover-scale w-full sm:w-auto">
              <Play className="mr-2 h-5 w-5" />
              View Our Work
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 sm:mt-20 lg:mt-24 animate-fade-up delay-400">
            {[
              { number: "500+", label: "Projects" },
              { number: "98%", label: "Satisfaction" },
              { number: "5+", label: "Years" },
              { number: "50+", label: "Clients" }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground mb-2">{stat.number}</div>
                <div className="text-sm sm:text-base text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

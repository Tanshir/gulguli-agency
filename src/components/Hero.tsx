
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0">
        {/* Wireframe geometric shapes */}
        <div className="absolute top-20 right-10 sm:right-20 w-48 h-48 sm:w-72 sm:h-72 opacity-30">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path
              d="M20 20 L180 20 L180 180 L20 180 Z M40 40 L160 40 L160 160 L40 160 Z M60 60 L140 60 L140 140 L60 140 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-foreground/20"
            />
          </svg>
        </div>
        
        {/* Purple gradient circles */}
        <div className="absolute top-32 right-16 sm:right-32 geometric-circle float-animation"></div>
        <div className="absolute bottom-24 right-8 sm:right-24 w-20 h-20 sm:w-32 sm:h-32 geometric-ring float-animation" style={{ animationDelay: '-2s' }}></div>
        
        {/* Additional geometric elements */}
        <div className="absolute bottom-32 right-40 w-16 h-16 sm:w-24 sm:h-24 bg-secondary rounded-full opacity-60 float-animation" style={{ animationDelay: '-4s' }}></div>
      </div>

      <div className="container-xl responsive-padding relative z-10">
        <div className="max-w-4xl">
          {/* Main Headline - matching the bold typography style */}
          <h1 className="heading-xl mb-8 sm:mb-12 text-foreground animate-fade-up leading-[0.9] tracking-tight">
            A STABLE TOKEN<br />
            BUILT FOR THE<br />
            <span className="text-gradient-secondary">MULTI-CHAIN</span><br />
            WORLD
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl lg:text-2xl text-foreground/80 mb-12 sm:mb-16 max-w-2xl leading-relaxed font-medium animate-fade-up delay-200">
            IST is over-collateralized with a wide-range of crypto assets. It's decentralized and risk-managed via a community voted Economic Committee. It is the stabletoken for the interchain.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-fade-up delay-300">
            <Button className="btn-primary text-lg px-8 py-4 scale-hover">
              Launch App
            </Button>
            
            <Button variant="ghost" className="btn-secondary text-lg px-8 py-4 scale-hover">
              <Play className="mr-3 h-5 w-5" />
              Learn about vaults
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground/30 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

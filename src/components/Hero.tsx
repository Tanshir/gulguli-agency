
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star, Users, Award, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative pt-20">
      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Top Badge */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm font-bold uppercase tracking-wider">
              <Star className="w-4 h-4 fill-current" />
              Award-Winning Web Design Agency
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center mb-20">
            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight mb-8 text-foreground">
              WE BUILD
              <span className="block mt-4">
                <span className="bg-foreground text-background px-8 py-4 inline-block">DIGITAL</span>
              </span>
              <span className="block mt-4">EXPERIENCES</span>
            </h1>

            {/* Subheadline */}
            <div className="mb-12">
              <p className="text-2xl lg:text-3xl text-muted-foreground font-medium mb-8">
                That Drive Real Results
              </p>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                From concept to conversion, we create websites that don't just look incredible—they perform exceptionally.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="px-4 py-2 border-2 border-foreground text-foreground font-semibold text-sm">
                Custom Design
              </div>
              <div className="px-4 py-2 border-2 border-foreground text-foreground font-semibold text-sm">
                Mobile-First
              </div>
              <div className="px-4 py-2 border-2 border-foreground text-foreground font-semibold text-sm">
                SEO Optimized
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
              <Button className="btn-primary text-lg px-12 py-6 group w-full sm:w-auto">
                Start Your Project
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
              
              <Button className="btn-secondary text-lg px-12 py-6 group w-full sm:w-auto">
                <Play className="mr-3 h-5 w-5" />
                See Our Work
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { icon: Users, number: "500+", label: "Happy Clients" },
              { icon: Award, number: "98%", label: "Success Rate" },
              { icon: Zap, number: "3x", label: "Faster Loading" },
              { icon: Star, number: "5.0", label: "Average Rating" }
            ].map((stat) => {
              const IconComponent = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <div className="mb-4">
                    <IconComponent className="w-8 h-8 mx-auto mb-4 text-foreground" />
                    <div className="text-4xl lg:text-5xl font-black text-foreground mb-2">{stat.number}</div>
                    <div className="text-sm font-bold text-foreground uppercase tracking-wider">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Trust Indicators */}
          <div className="mt-24 text-center">
            <p className="text-sm text-muted-foreground mb-8 font-bold uppercase tracking-wider">
              Trusted by Industry Leaders
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40">
              {["TECH CORP", "INNOVATE", "FUTURE CO", "DIGITAL+"].map((company) => (
                <div key={company} className="text-xl font-black text-foreground">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

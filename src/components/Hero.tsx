
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star, Users, Award, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden pt-16 lg:pt-20">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-2 h-2 bg-foreground rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-foreground rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 border border-foreground rotate-45 animate-pulse delay-500"></div>
        <div className="absolute top-1/2 left-10 w-1 h-20 bg-foreground/20"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 border border-foreground/10 rounded-full"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Top Badge */}
          <div className="flex justify-center mb-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background text-sm font-medium">
              <Star className="w-4 h-4 fill-current" />
              AWARD-WINNING WEB DESIGN AGENCY
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center mb-16">
            {/* Headline */}
            <h1 className="heading-xl mb-8 text-foreground animate-fade-up delay-100">
              WE BUILD
              <span className="block mt-2">
                <span className="bg-foreground text-background px-6 py-3 inline-block">DIGITAL</span>
              </span>
              <span className="block mt-2">EXPERIENCES</span>
              <span className="block mt-4 text-muted-foreground text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                THAT DRIVE RESULTS
              </span>
            </h1>

            {/* Description */}
            <div className="max-w-2xl mx-auto mb-12 animate-fade-up delay-200">
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-6">
                From concept to conversion, we create websites that don't just look incredible—they perform exceptionally.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-foreground"></div>
                  Custom Design
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-foreground"></div>
                  Mobile-First
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-foreground"></div>
                  SEO Optimized
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16 animate-fade-up delay-300">
              <Button className="btn-primary text-lg px-10 py-6 hover-scale group w-full sm:w-auto">
                START YOUR PROJECT
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button className="btn-secondary text-lg px-10 py-6 hover-scale group w-full sm:w-auto">
                <Play className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                SEE OUR WORK
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 animate-fade-up delay-400">
            {[
              { icon: Users, number: "500+", label: "Happy Clients", description: "Successful projects delivered" },
              { icon: Award, number: "98%", label: "Success Rate", description: "Client satisfaction score" },
              { icon: Zap, number: "3x", label: "Faster Loading", description: "Average speed improvement" },
              { icon: Star, number: "5.0", label: "Rating", description: "Average client review" }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={stat.label} className="text-center group hover-lift">
                  <div className="mb-4">
                    <IconComponent className="w-8 h-8 mx-auto mb-3 text-foreground group-hover:scale-110 transition-transform" />
                    <div className="text-3xl lg:text-4xl font-black text-foreground mb-1">{stat.number}</div>
                    <div className="text-sm font-bold text-foreground mb-1">{stat.label}</div>
                    <div className="text-xs text-muted-foreground">{stat.description}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Trust Indicators */}
          <div className="mt-20 text-center animate-fade-up delay-500">
            <p className="text-sm text-muted-foreground mb-6 font-medium">TRUSTED BY INDUSTRY LEADERS</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40">
              {["TECH CORP", "INNOVATE", "FUTURE CO", "DIGITAL+"].map((company, index) => (
                <div key={company} className="text-lg font-black text-foreground">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <div className="text-xs font-medium tracking-wider">SCROLL</div>
          <div className="w-0.5 h-12 bg-muted-foreground"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

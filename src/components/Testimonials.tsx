
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80",
      content: "PixelCraft transformed our outdated website into a modern, conversion-focused platform. Our online sales increased by 300% within the first month!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Marketing Director, GrowthCo",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      content: "The team's attention to detail is incredible. They delivered exactly what we envisioned, on time and within budget. Highly recommended!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, Creative Studio",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      content: "Working with PixelCraft was a game-changer. Their design expertise and technical skills are unmatched. Our new website perfectly represents our brand.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-48 h-48 bg-gradient-primary rounded-full opacity-10 blur-3xl float-animation"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-secondary rounded-full opacity-8 blur-3xl float-animation" style={{ animationDelay: '-4s' }}></div>
      </div>

      <div className="container-xl responsive-padding relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="heading-lg mb-6 sm:mb-8 text-foreground animate-fade-up">
            What Our <span className="text-gradient-secondary">Clients Say</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-up delay-200">
            Don't just take our word for it. Here's what our satisfied clients have to say about our work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name} 
              className={`border-2 border-muted hover:border-secondary/30 transition-all duration-300 scale-hover animate-fade-up delay-${(index + 1) * 100} bg-card/50 backdrop-blur-sm`}
            >
              <CardContent className="p-6 sm:p-8">
                {/* Stars */}
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-primary fill-current" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

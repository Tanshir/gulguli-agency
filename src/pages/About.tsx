
import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Users, Award, TrendingUp } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising on quality or attention to detail.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled designers and developers with years of industry experience.",
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence in web design and user experience.",
    },
    {
      icon: TrendingUp,
      title: "Results Driven",
      description: "Websites that not only look great but also drive conversions and growth.",
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "5+", label: "Years Experience" },
    { number: "15+", label: "Team Members" }
  ];

  return (
    <PageLayout 
      title="About PixelCraft" 
      description="Learn more about PixelCraft, our mission, values, and the passionate team behind our award-winning web design and development services."
      keywords="about pixelcraft, web design agency, our story, company values, web development team"
    >
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">About PixelCraft</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine creativity with technical expertise to deliver websites that 
              make a lasting impression and drive business growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Our Story</h2>
              <p className="text-muted-foreground mb-6">
                Founded in 2019, PixelCraft began as a small team of passionate designers and developers 
                who believed that every business deserves a website that truly represents their brand and drives results.
              </p>
              <p className="text-muted-foreground mb-6">
                Over the years, we've grown into a full-service digital agency, but our core values remain the same: 
                creativity, quality, and client satisfaction above all else.
              </p>
              <p className="text-muted-foreground">
                Today, we're proud to have helped over 500 businesses transform their online presence 
                and achieve their digital goals.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold mb-2 text-foreground">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Why Choose PixelCraft?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're more than just a web design agency - we're your partners in digital success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={feature.title} 
                className="bg-card border-border hover:border-foreground transition-all duration-300 group text-center"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-foreground flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-background" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;

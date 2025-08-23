
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
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About PixelCraft</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We combine creativity with technical expertise to deliver websites that 
              make a lasting impression and drive business growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-400 mb-6">
                Founded in 2019, PixelCraft began as a small team of passionate designers and developers 
                who believed that every business deserves a website that truly represents their brand and drives results.
              </p>
              <p className="text-gray-400 mb-6">
                Over the years, we've grown into a full-service digital agency, but our core values remain the same: 
                creativity, quality, and client satisfaction above all else.
              </p>
              <p className="text-gray-400">
                Today, we're proud to have helped over 500 businesses transform their online presence 
                and achieve their digital goals.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose PixelCraft?</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We're more than just a web design agency - we're your partners in digital success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={feature.title} 
                className="bg-black border-gray-800 hover:border-white transition-all duration-300 group text-center"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-white flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{feature.description}</p>
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

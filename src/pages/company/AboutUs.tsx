
import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, Users } from "lucide-react";

const AboutUs = () => {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To create stunning, conversion-focused websites that help businesses grow and succeed in the digital world."
    },
    {
      icon: Eye,
      title: "Vision", 
      description: "To be the leading web design agency known for exceptional creativity, technical excellence, and client satisfaction."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every project, ensuring the highest quality standards in design and development."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building long-term relationships with our clients and contributing positively to the digital community."
    }
  ];

  return (
    <PageLayout 
      title="About Us" 
      description="Learn more about PixelCraft, our mission, values, and the passionate team behind our award-winning web design and development services."
      keywords="about pixelcraft, web design agency, our story, company values, web development team"
    >
      {/* Hero Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About PixelCraft</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We're passionate about creating digital experiences that make a difference. 
              Since our founding, we've been dedicated to helping businesses succeed online.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <h3 className="text-2xl font-bold mb-6">By the Numbers</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Projects Completed</span>
                  <span className="font-bold">500+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Years in Business</span>
                  <span className="font-bold">5+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Client Satisfaction</span>
                  <span className="font-bold">98%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Team Members</span>
                  <span className="font-bold">15+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              These core values guide everything we do and shape our approach to every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={value.title} className="bg-gray-900 border-gray-800 hover:border-white transition-colors duration-300">
                <CardContent className="p-8 text-center">
                  <value.icon className="h-12 w-12 text-white mx-auto mb-6" />
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutUs;

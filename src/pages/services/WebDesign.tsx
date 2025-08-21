
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Palette, Layers, Smartphone, Eye, Users, Award } from "lucide-react";

const WebDesign = () => {
  const features = [
    {
      icon: Palette,
      title: "Custom UI/UX Design",
      description: "Tailored designs that reflect your brand identity and engage your target audience."
    },
    {
      icon: Layers,
      title: "Wireframing & Prototyping",
      description: "Detailed wireframes and interactive prototypes to visualize your website before development."
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Designs that look perfect on all devices, from mobile phones to desktop computers."
    },
    {
      icon: Eye,
      title: "Visual Hierarchy",
      description: "Strategic layout design that guides users through your content effectively."
    },
    {
      icon: Users,
      title: "User Experience Focus",
      description: "Design decisions based on user research and best UX practices."
    },
    {
      icon: Award,
      title: "Brand Integration",
      description: "Seamless integration of your brand elements throughout the design."
    }
  ];

  return (
    <PageLayout 
      title="Web Design Services" 
      description="Professional web design services that create stunning, user-friendly websites tailored to your brand and business goals."
      keywords="web design, UI/UX design, responsive design, brand identity, user experience"
    >
      {/* Hero Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Web Design
            <span className="block text-gray-400">That Converts</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Create stunning, user-friendly websites that not only look amazing but also drive results for your business.
          </p>
          <Button className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg font-semibold">
            Get Started
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Design Process</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We follow a comprehensive design process to ensure your website meets your goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={feature.title} className="bg-black border-gray-800 hover:border-white transition-colors duration-300">
                <CardContent className="p-8">
                  <feature.icon className="h-12 w-12 text-white mb-6" />
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Online Presence?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's create a website that truly represents your brand and drives business growth.
          </p>
          <Button className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg font-semibold">
            Start Your Project
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default WebDesign;

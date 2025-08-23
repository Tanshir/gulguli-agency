
import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Code, Smartphone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Web Design",
      description: "Beautiful, modern designs that capture your brand essence and engage your audience effectively.",
      features: ["Custom UI/UX Design", "Brand Identity", "Responsive Layouts"],
      link: "/services/web-design"
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Fast, secure, and scalable websites built with the latest technologies and best practices.",
      features: ["React & TypeScript", "Performance Optimization", "SEO Ready"],
      link: "/services/web-development"
    },
    {
      icon: Smartphone,
      title: "E-Commerce",
      description: "Complete e-commerce solutions with secure payment processing and inventory management.",
      features: ["Shopping Cart", "Payment Integration", "Analytics"],
      link: "/services/ecommerce"
    },
  ];

  return (
    <PageLayout 
      title="Our Services" 
      description="Comprehensive web design and development services to help your business stand out in the digital landscape."
      keywords="web design services, web development, e-commerce, SEO optimization, digital agency"
    >
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We offer comprehensive web design and development services to help your 
              business stand out in the digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <Card 
                key={service.title} 
                className="bg-gray-900 border-gray-800 hover:border-white transition-all duration-300 group"
              >
                <CardContent className="p-8 lg:p-10">
                  <div className="w-16 h-16 bg-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-black" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-white mr-3 flex-shrink-0"></div>
                        <span className="text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to={service.link}>
                    <Button variant="ghost" className="group/btn w-full justify-between text-white hover:text-white font-semibold p-0">
                      Learn More
                      <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Additional Services</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link to="/services/seo-optimization">
              <Card className="bg-black border-gray-800 hover:border-white transition-colors duration-300 cursor-pointer">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">SEO Optimization</h3>
                  <p className="text-gray-400">Improve your search engine rankings and drive more organic traffic.</p>
                </CardContent>
              </Card>
            </Link>
            <Card className="bg-black border-gray-800 hover:border-white transition-colors duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Maintenance & Support</h3>
                <p className="text-gray-400">Ongoing website maintenance and technical support services.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Services;

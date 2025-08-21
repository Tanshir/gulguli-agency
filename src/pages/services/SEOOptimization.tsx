
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, TrendingUp, Target, FileText, Link, BarChart } from "lucide-react";

const SEOOptimization = () => {
  const services = [
    {
      icon: Search,
      title: "Keyword Research",
      description: "Comprehensive keyword analysis to target the right audience."
    },
    {
      icon: FileText,
      title: "Content Optimization",
      description: "SEO-optimized content that ranks well and engages users."
    },
    {
      icon: Link,
      title: "Link Building",
      description: "Strategic link building to improve domain authority."
    },
    {
      icon: Target,
      title: "Local SEO",
      description: "Local search optimization for location-based businesses."
    },
    {
      icon: TrendingUp,
      title: "Performance Tracking",
      description: "Regular monitoring and reporting of SEO performance."
    },
    {
      icon: BarChart,
      title: "Analytics Setup",
      description: "Complete analytics setup to track website performance."
    }
  ];

  return (
    <PageLayout 
      title="SEO Optimization Services" 
      description="Professional SEO optimization services to improve your website's search engine rankings and drive more organic traffic to your business."
      keywords="SEO, search engine optimization, keyword research, content optimization, link building"
    >
      {/* Hero Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            SEO Optimization
            <span className="block text-gray-400">Drive Organic Traffic</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Improve your search engine rankings and attract more qualified leads with our comprehensive SEO optimization services.
          </p>
          <Button className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg font-semibold">
            Boost Your Rankings
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete SEO Solutions</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From keyword research to performance tracking, we handle all aspects of SEO.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className="bg-black border-gray-800 hover:border-white transition-colors duration-300">
                <CardContent className="p-8">
                  <service.icon className="h-12 w-12 text-white mb-6" />
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Proven Results</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">500%</div>
              <div className="text-gray-400">Average Traffic Increase</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">90%</div>
              <div className="text-gray-400">First Page Rankings</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">6 Months</div>
              <div className="text-gray-400">Average Time to Results</div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default SEOOptimization;

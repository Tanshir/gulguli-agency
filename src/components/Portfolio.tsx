
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp, BarChart3, PieChart } from "lucide-react";

const Portfolio = () => {
  const metrics = [
    {
      icon: TrendingUp,
      title: "Price Stability",
      value: "$1.00",
      change: "+0.01%",
      description: "Maintaining stable value across market conditions",
      chart: "Linear growth trend"
    },
    {
      icon: BarChart3,
      title: "Total Supply",
      value: "45.2M IST",
      change: "+12.5%",
      description: "Growing adoption across multiple chains",
      chart: "Volume distribution"
    },
    {
      icon: PieChart,
      title: "Collateralization",
      value: "155%",
      change: "+3.2%",
      description: "Over-collateralized for maximum security",
      chart: "Asset allocation"
    }
  ];

  const integrations = [
    { name: "Osmosis", type: "DEX", status: "Live" },
    { name: "Cosmos Hub", type: "Network", status: "Live" },
    { name: "Juno", type: "Smart Contracts", status: "Live" },
    { name: "Stargaze", type: "NFT Platform", status: "Live" },
    { name: "Secret Network", type: "Privacy", status: "Coming Soon" },
    { name: "Evmos", type: "EVM", status: "Coming Soon" }
  ];

  return (
    <section id="portfolio" className="py-16 sm:py-20 lg:py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-56 h-56 bg-gradient-primary rounded-full opacity-10 blur-3xl float-animation"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-secondary rounded-full opacity-8 blur-3xl float-animation" style={{ animationDelay: '-4s' }}></div>
      </div>

      <div className="container-xl responsive-padding relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="heading-lg mb-6 sm:mb-8 text-foreground animate-fade-up">
            IST <span className="text-gradient-accent">Analytics</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-up delay-200">
            Real-time metrics and performance data showcasing IST's stability and growth 
            across the interchain ecosystem.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-16 sm:mb-20">
          {metrics.map((metric, index) => (
            <Card 
              key={metric.title} 
              className={`border-2 border-muted hover:border-accent/30 transition-all duration-500 scale-hover animate-fade-up delay-${(index + 1) * 150} group bg-card/60 backdrop-blur-sm relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardContent className="p-8 sm:p-10 relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-gradient-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <metric.icon className="h-7 w-7 text-white" />
                  </div>
                  <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                    metric.change.startsWith('+') ? 'bg-success/20 text-success' : 'bg-destructive/20 text-destructive'
                  }`}>
                    {metric.change}
                  </span>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-accent transition-colors duration-300">{metric.title}</h3>
                <div className="text-3xl sm:text-4xl font-black mb-4 text-gradient-accent">{metric.value}</div>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{metric.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Integrations Section */}
        <div className="animate-fade-up delay-400">
          <h3 className="heading-md text-center mb-12 sm:mb-16 text-foreground">
            Multi-Chain <span className="text-gradient-secondary">Integrations</span>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {integrations.map((integration, index) => (
              <Card 
                key={integration.name} 
                className={`border-2 border-muted hover:border-secondary/30 transition-all duration-300 scale-hover animate-fade-up delay-${(index + 1) * 100} group bg-card/50 backdrop-blur-sm`}
              >
                <CardContent className="p-6 sm:p-8 text-center">
                  <h4 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-secondary transition-colors duration-300">{integration.name}</h4>
                  <p className="text-muted-foreground mb-4 text-sm sm:text-base">{integration.type}</p>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                    integration.status === 'Live' 
                      ? 'bg-success/20 text-success' 
                      : 'bg-warning/20 text-warning'
                  }`}>
                    {integration.status}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button className="btn-secondary scale-hover">
              <ExternalLink className="mr-3 h-5 w-5" />
              View Full Analytics Dashboard
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

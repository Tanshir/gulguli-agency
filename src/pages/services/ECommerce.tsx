
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, CreditCard, Truck, BarChart3, Shield, Users } from "lucide-react";

const ECommerce = () => {
  const features = [
    {
      icon: ShoppingCart,
      title: "Custom Shopping Cart",
      description: "Intuitive shopping cart experience with easy checkout process."
    },
    {
      icon: CreditCard,
      title: "Payment Integration",
      description: "Secure payment processing with multiple payment gateway options."
    },
    {
      icon: Truck,
      title: "Inventory Management",
      description: "Complete inventory tracking and management system."
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Detailed sales analytics and customer behavior insights."
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "PCI DSS compliance and advanced security measures."
    },
    {
      icon: Users,
      title: "Customer Management",
      description: "Comprehensive customer profiles and order history."
    }
  ];

  return (
    <PageLayout 
      title="E-Commerce Solutions" 
      description="Complete e-commerce solutions with secure payment processing, inventory management, and analytics to help your online store succeed."
      keywords="e-commerce, online store, shopping cart, payment processing, inventory management"
    >
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            E-Commerce
            <span className="block text-muted-foreground">Solutions</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Complete e-commerce solutions that drive sales and provide exceptional shopping experiences for your customers.
          </p>
          <Button className="bg-foreground text-background hover:bg-foreground/90 px-8 py-3 text-lg font-semibold">
            Launch Your Store
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Everything You Need to Sell Online</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From payment processing to inventory management, we provide all the tools you need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={feature.title} className="bg-card border-border hover:border-foreground transition-colors duration-300">
                <CardContent className="p-8">
                  <feature.icon className="h-12 w-12 text-foreground mb-6" />
                  <h3 className="text-xl font-bold mb-4 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2 text-foreground">300%</div>
              <div className="text-muted-foreground">Average Sales Increase</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 text-foreground">99.9%</div>
              <div className="text-muted-foreground">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 text-foreground">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ECommerce;

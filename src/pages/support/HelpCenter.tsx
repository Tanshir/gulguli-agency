
import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, HelpCircle, MessageSquare, Book, Phone, Mail, Clock, Users } from "lucide-react";

const HelpCenter = () => {
  const helpCategories = [
    {
      icon: HelpCircle,
      title: "Getting Started",
      description: "New to PixelCraft? Start here for the basics",
      count: "12 articles"
    },
    {
      icon: MessageSquare,
      title: "Account & Billing",
      description: "Manage your account and billing information",
      count: "8 articles"
    },
    {
      icon: Book,
      title: "Project Management",
      description: "Learn how to manage your projects effectively",
      count: "15 articles"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work with your team and manage permissions",
      count: "10 articles"
    }
  ];

  const contactOptions = [
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with our support team",
      availability: "Available 24/7",
      action: "Start Chat"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us an email",
      availability: "We'll respond within 24 hours",
      action: "Send Email"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Call our support line",
      availability: "Mon-Fri 8AM-6PM PST",
      action: "Call Now"
    }
  ];

  const popularArticles = [
    {
      title: "How to start your first project",
      category: "Getting Started",
      views: "2.5k views"
    },
    {
      title: "Understanding our pricing plans",
      category: "Billing",
      views: "1.8k views"
    },
    {
      title: "Setting up your project timeline",
      category: "Project Management", 
      views: "1.6k views"
    },
    {
      title: "Inviting team members to your project",
      category: "Team Collaboration",
      views: "1.4k views"
    },
    {
      title: "How to request revisions",
      category: "Project Management",
      views: "1.2k views"
    },
    {
      title: "Payment methods and billing cycles",
      category: "Billing",
      views: "1.1k views"
    }
  ];

  return (
    <PageLayout 
      title="Help Center" 
      description="Find answers to your questions and get the support you need. Browse our comprehensive help documentation and contact our support team."
      keywords="help center, support, FAQ, customer service, documentation"
    >
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Help Center</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              How can we help you today? Search our knowledge base or get in touch with our support team.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input 
                placeholder="Search for help..." 
                className="pl-12 py-3 bg-card border-border text-lg text-foreground"
              />
            </div>
          </div>

          {/* Help Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {helpCategories.map((category, index) => (
              <Card key={index} className="bg-card border-border hover:border-foreground transition-colors duration-300 group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-foreground flex items-center justify-center mx-auto mb-4 group-hover:bg-muted-foreground transition-colors">
                    <category.icon className="h-6 w-6 text-background" />
                  </div>
                  <h3 className="font-bold mb-2 text-foreground">{category.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{category.description}</p>
                  <span className="text-xs text-muted-foreground">{category.count}</span>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Popular Articles */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Popular Articles</h2>
              <div className="space-y-4">
                {popularArticles.map((article, index) => (
                  <Card key={index} className="bg-card border-border hover:border-foreground transition-colors duration-300">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold mb-2 text-foreground hover:text-muted-foreground cursor-pointer">
                            {article.title}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="bg-muted px-2 py-1 rounded text-xs text-foreground">
                              {article.category}
                            </span>
                            <span>{article.views}</span>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                          Read →
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Support */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-foreground">Contact Support</h2>
              <div className="space-y-4">
                {contactOptions.map((option, index) => (
                  <Card key={index} className="bg-card border-border">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-foreground flex items-center justify-center flex-shrink-0">
                          <option.icon className="h-5 w-5 text-background" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1 text-foreground">{option.title}</h3>
                          <p className="text-muted-foreground text-sm mb-2">{option.description}</p>
                          <p className="text-xs text-muted-foreground mb-3">{option.availability}</p>
                          <Button size="sm" className="btn-primary">
                            {option.action}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Status */}
              <Card className="bg-green-50 border-green-200 mt-6">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div>
                      <p className="font-semibold text-green-700">All Systems Operational</p>
                      <p className="text-xs text-green-600">Last updated: 2 minutes ago</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default HelpCenter;

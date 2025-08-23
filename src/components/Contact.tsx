
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-muted">
      <div className="container-custom">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="heading-lg mb-6 text-foreground">
            Let's <span className="bg-foreground text-background px-4 py-2">Connect</span>
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your digital presence? Get in touch and let's discuss your project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="space-y-6">
            <Card className="border-2 border-border hover:border-foreground transition-all duration-300 bg-card">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-foreground flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-background" />
                </div>
                <h3 className="font-bold mb-2 text-foreground">Email Us</h3>
                <p className="text-foreground/70 text-sm">hello@pixelcraft.design</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-foreground transition-all duration-300 bg-card">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-foreground flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-background" />
                </div>
                <h3 className="font-bold mb-2 text-foreground">Call Us</h3>
                <p className="text-foreground/70 text-sm">+1 (555) 123-4567</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-foreground transition-all duration-300 bg-card">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-foreground flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-background" />
                </div>
                <h3 className="font-bold mb-2 text-foreground">Visit Us</h3>
                <p className="text-foreground/70 text-sm">San Francisco, CA</p>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="border-2 border-border hover:border-foreground transition-all duration-300 bg-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">Start Your Project</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Name</label>
                    <Input placeholder="Your name" className="border-2" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <Input type="email" placeholder="your@email.com" className="border-2" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Project Type</label>
                  <Input placeholder="e.g., E-commerce, Portfolio, Corporate" className="border-2" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Project Details</label>
                  <Textarea 
                    placeholder="Tell us about your project requirements..." 
                    rows={6}
                    className="border-2"
                  />
                </div>
                
                <Button className="w-full btn-primary hover-scale">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
            Let's <span className="text-electric">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-up delay-100">
            Ready to transform your digital presence? Get in touch and let's discuss your project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-up delay-200">
            <Card className="hover-lift glass border-white/20">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-electric rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold mb-2">Email Us</h3>
                <p className="text-muted-foreground">hello@pixelcraft.design</p>
              </CardContent>
            </Card>

            <Card className="hover-lift glass border-white/20">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-electric rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold mb-2">Call Us</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </CardContent>
            </Card>

            <Card className="hover-lift glass border-white/20">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-electric rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold mb-2">Visit Us</h3>
                <p className="text-muted-foreground">San Francisco, CA</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="hover-lift glass border-white/20 animate-fade-up delay-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Start Your Project</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <Input placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input placeholder="Project subject" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea 
                    placeholder="Tell us about your project..." 
                    rows={6}
                  />
                </div>
                
                <Button className="w-full bg-electric hover:opacity-90 text-white font-semibold magnetic">
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

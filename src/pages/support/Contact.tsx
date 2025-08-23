
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@pixelcraft.design",
      description: "Send us an email anytime!"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "San Francisco, CA",
      description: "123 Design Street, Suite 100"
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Mon - Fri: 8am - 6pm",
      description: "Weekend support available"
    }
  ];

  return (
    <PageLayout 
      title="Contact Us" 
      description="Get in touch with PixelCraft for your web design and development needs. We're here to help bring your digital vision to life."
      keywords="contact PixelCraft, web design consultation, project inquiry, get quote"
    >
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to start your project? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <p className="text-gray-400 mb-8">
                  Say something to start a live chat! We're here to help you succeed.
                </p>
              </div>

              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{info.title}</h3>
                    <p className="text-white mb-1">{info.content}</p>
                    <p className="text-gray-400 text-sm">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">First Name *</label>
                      <Input placeholder="John" className="bg-black border-gray-700" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Last Name *</label>
                      <Input placeholder="Doe" className="bg-black border-gray-700" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email *</label>
                      <Input type="email" placeholder="john@example.com" className="bg-black border-gray-700" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Phone Number</label>
                      <Input placeholder="+1 (555) 000-0000" className="bg-black border-gray-700" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Subject *</label>
                    <Input placeholder="Project Inquiry" className="bg-black border-gray-700" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message *</label>
                    <Textarea 
                      placeholder="Tell us about your project..." 
                      rows={6}
                      className="bg-black border-gray-700"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="terms" className="rounded" />
                    <label htmlFor="terms" className="text-sm text-gray-400">
                      I agree to the Terms of Service and Privacy Policy
                    </label>
                  </div>
                  
                  <Button className="w-full bg-white text-black hover:bg-gray-200 font-semibold py-3">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;

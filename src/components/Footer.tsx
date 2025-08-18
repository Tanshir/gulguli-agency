
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Sparkles, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:text-blue-400" },
    { icon: Twitter, href: "#", color: "hover:text-cyan-400" },
    { icon: Instagram, href: "#", color: "hover:text-pink-400" },
    { icon: Linkedin, href: "#", color: "hover:text-blue-600" },
  ];

  const footerLinks = {
    Services: ["Web Design", "Development", "UI/UX Design", "SEO", "Maintenance"],
    Company: ["About Us", "Our Team", "Careers", "Contact", "Blog"],
    Resources: ["Portfolio", "Case Studies", "Testimonials", "FAQ", "Support"],
  };

  return (
    <footer className="bg-gradient-to-br from-gray-50 via-gray-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-black text-foreground relative overflow-hidden">
      {/* Softer Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-48 h-48 lg:w-64 lg:h-64 bg-gradient-primary rounded-full blur-3xl opacity-8 float-animation"></div>
        <div className="absolute bottom-20 right-20 w-56 h-56 lg:w-80 lg:h-80 bg-gradient-secondary rounded-full blur-3xl opacity-5 float-animation" style={{ animationDelay: '-2s' }}></div>
      </div>

      <div className="container mx-auto responsive-padding py-16 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-lg sm:rounded-xl flex items-center justify-center rotate-slow">
                <Sparkles className="h-5 w-5 sm:h-7 sm:w-7 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-gradient-rainbow">CreativeStudio</h3>
            </div>
            <p className="text-muted-foreground mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg font-medium max-w-md">
              We craft <span className="text-gradient-primary font-bold">beautiful</span>, 
              <span className="text-gradient-secondary font-bold"> functional websites</span> that drive 
              <span className="text-gradient-accent font-bold"> extraordinary results</span>. 
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  size="sm"
                  variant="outline"
                  className={`border-border text-muted-foreground hover:bg-gradient-primary hover:border-primary hover:text-white ${social.color} transition-all duration-300 rounded-full w-10 h-10 sm:w-12 sm:h-12 p-0`}
                >
                  <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h4 className="font-black mb-4 sm:mb-6 text-lg sm:text-xl text-gradient-primary">{category}</h4>
              <ul className="space-y-2 sm:space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium text-sm sm:text-base hover:translate-x-1 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-border mt-12 sm:mt-16 pt-8 sm:pt-12">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="text-center lg:text-left">
              <h4 className="font-black mb-2 sm:mb-3 text-xl sm:text-2xl text-gradient-primary">Stay in the Loop</h4>
              <p className="text-muted-foreground text-base sm:text-lg font-medium">Subscribe for design tips and updates</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 sm:px-6 py-3 sm:py-4 bg-background border border-border rounded-full focus:border-primary focus:outline-none text-foreground flex-1 lg:w-80 glass text-sm sm:text-base"
              />
              <Button className="bg-gradient-primary hover:opacity-90 px-6 sm:px-8 py-3 sm:py-4 rounded-full magnetic-bold">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg font-medium flex flex-col sm:flex-row items-center justify-center gap-2">
            <span>&copy; 2024 CreativeStudio. All rights reserved.</span>
            <span className="flex items-center gap-2">
              Designed with <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-red-500 animate-pulse" /> for amazing businesses.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

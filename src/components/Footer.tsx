
import { Button } from "@/components/ui/button";
import { Twitter, Github, Dribbble, Linkedin, Palette } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Services: ["Web Design", "Web Development", "E-commerce", "SEO Optimization"],
    Company: ["About Us", "Our Team", "Careers", "Blog"],
    Support: ["Help Center", "Documentation", "Contact", "FAQ"],
    Legal: ["Terms of Service", "Privacy Policy", "Cookies Policy"]
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Dribbble, href: "#", label: "Dribbble" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-background border-t border-muted relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-48 h-48 bg-gradient-secondary rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-accent rounded-full opacity-3 blur-3xl"></div>
      </div>

      <div className="container-xl responsive-padding py-16 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 sm:gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-foreground rounded-lg flex items-center justify-center">
                <Palette className="h-6 w-6 text-background" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-muted-foreground">PIXEL</span>
                <span className="text-sm font-bold text-foreground -mt-1">CRAFT</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-8 leading-relaxed max-w-md">
              We create stunning, conversion-focused websites that help businesses 
              grow and succeed in the digital world.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  size="sm"
                  variant="outline"
                  className="border-muted text-muted-foreground hover:border-secondary hover:text-secondary transition-all duration-300 w-10 h-10 p-0"
                >
                  <social.icon className="h-4 w-4" />
                </Button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold mb-6 text-foreground">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-muted pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            &copy; 2024 PixelCraft. All rights reserved. Crafting digital experiences that matter.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

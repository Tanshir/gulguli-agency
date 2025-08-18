
import { Button } from "@/components/ui/button";
import { Twitter, Github, BookOpen, MessageCircle, Zap } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Protocol: ["Documentation", "Whitepaper", "Audit Reports", "Bug Bounty"],
    Community: ["Discord", "Twitter", "Telegram", "Forum"],
    Developers: ["GitHub", "API Docs", "SDK", "Tutorials"],
    Legal: ["Terms of Service", "Privacy Policy", "Disclaimer"]
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: MessageCircle, href: "#", label: "Discord" },
    { icon: BookOpen, href: "#", label: "Documentation" }
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
                <Zap className="h-6 w-6 text-background" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-muted-foreground">INTER</span>
                <span className="text-sm font-bold text-foreground -mt-1">PROTOCOL</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-8 leading-relaxed max-w-md">
              The decentralized stablecoin built for the multi-chain world. 
              Secure, stable, and community-governed.
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
            &copy; 2024 Inter Protocol. All rights reserved. Built for the interchain.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Twitter, Github, Dribbble, Linkedin } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Services: [
      { name: "Web Design", href: "/services/web-design" },
      { name: "Web Development", href: "/services/web-development" },
      { name: "E-commerce", href: "/services/ecommerce" },
      { name: "SEO Optimization", href: "/services/seo-optimization" }
    ],
    Company: [
      { name: "About Us", href: "/about" },
      { name: "Our Team", href: "/company/our-team" },
      { name: "Blog", href: "/company/blog" },
      { name: "Careers", href: "/company/careers" }
    ],
    Support: [
      { name: "Help Center", href: "/support/help-center" },
      { name: "Documentation", href: "/support/documentation" },
      { name: "Contact", href: "/contact" },
      { name: "FAQ", href: "/support/faq" }
    ],
    Legal: [
      { name: "Terms of Service", href: "/legal/terms-of-service" },
      { name: "Privacy Policy", href: "/legal/privacy-policy" },
      { name: "Cookies Policy", href: "/legal/cookies-policy" }
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Dribbble, href: "#", label: "Dribbble" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-foreground border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-background flex items-center justify-center">
                <span className="text-foreground font-black">P</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-background/70">PIXEL</span>
                <span className="text-sm font-bold text-background -mt-1">CRAFT</span>
              </div>
            </Link>
            <p className="text-background/70 mb-8 leading-relaxed max-w-md text-sm">
              We create stunning, conversion-focused websites that help businesses 
              grow and succeed in the digital world.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  size="sm"
                  variant="outline"
                  className="border border-background/30 text-background/70 hover:border-background hover:text-background transition-all duration-300 w-10 h-10 p-0 bg-transparent"
                >
                  <social.icon className="h-4 w-4" />
                </Button>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold mb-6 text-background text-sm uppercase tracking-wide">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-background/70 hover:text-background transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-background/30 pt-8 text-center">
          <p className="text-background/70 text-sm">
            &copy; 2024 PixelCraft. All rights reserved. Crafting digital experiences that matter.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

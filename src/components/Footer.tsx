
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
      { name: "About Us", href: "/company/about-us" },
      { name: "Our Team", href: "/company/our-team" },
      { name: "Blog", href: "/company/blog" },
      { name: "Careers", href: "/company/careers" }
    ],
    Support: [
      { name: "Help Center", href: "/support/help-center" },
      { name: "Documentation", href: "/support/documentation" },
      { name: "Contact", href: "/support/contact" },
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
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-white flex items-center justify-center">
                <span className="text-black font-black">P</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-400">PIXEL</span>
                <span className="text-sm font-bold text-white -mt-1">CRAFT</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-8 leading-relaxed max-w-md text-sm">
              We create stunning, conversion-focused websites that help businesses 
              grow and succeed in the digital world.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  size="sm"
                  variant="outline"
                  className="border border-gray-700 text-gray-400 hover:border-white hover:text-white transition-all duration-300 w-10 h-10 p-0 bg-transparent"
                >
                  <social.icon className="h-4 w-4" />
                </Button>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold mb-6 text-white text-sm uppercase tracking-wide">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2024 PixelCraft. All rights reserved. Crafting digital experiences that matter.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

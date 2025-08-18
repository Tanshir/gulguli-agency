
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

  const footerLinks = {
    Services: ["Web Design", "Development", "UI/UX Design", "SEO", "Maintenance"],
    Company: ["About Us", "Our Team", "Careers", "Contact", "Blog"],
    Resources: ["Portfolio", "Case Studies", "Testimonials", "FAQ", "Support"],
  };

  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-electric mb-4">PixelCraft</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We craft beautiful, functional websites that drive results. 
              Transform your digital presence with our expert design and development services.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-electric hover:border-electric hover:text-white"
                >
                  <social.icon className="h-4 w-4" />
                </Button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4 text-electric">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-electric transition-colors duration-200"
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
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="font-semibold mb-2">Stay Updated</h4>
              <p className="text-gray-300">Subscribe to our newsletter for design tips and updates</p>
            </div>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-navy-light border border-gray-600 rounded-lg focus:border-electric focus:outline-none text-white"
              />
              <Button className="bg-electric hover:opacity-90">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 PixelCraft. All rights reserved. Designed with ❤️ for amazing businesses.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

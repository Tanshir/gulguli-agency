
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
    Services: ["Web Design", "Development", "UI/UX Design", "SEO Magic", "Maintenance"],
    Company: ["About Us", "Our Team", "Careers", "Contact", "Blog"],
    Resources: ["Portfolio", "Case Studies", "Testimonials", "FAQ", "Support"],
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-primary rounded-full blur-3xl opacity-10 float-animation"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-secondary rounded-full blur-3xl opacity-5 float-animation" style={{ animationDelay: '-2s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center rotate-slow">
                <Sparkles className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-3xl font-black text-gradient-rainbow">CreativeStudio</h3>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg font-medium">
              We craft <span className="text-gradient-primary font-bold">beautiful</span>, 
              <span className="text-gradient-secondary font-bold"> functional websites</span> that drive 
              <span className="text-gradient-accent font-bold"> extraordinary results</span>. 
              Transform your digital presence with our expert design and development magic.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  size="sm"
                  variant="outline"
                  className={`border-gray-600 text-gray-300 hover:bg-gradient-primary hover:border-primary hover:text-white ${social.color} transition-all duration-300 rounded-full w-12 h-12 p-0`}
                >
                  <social.icon className="h-5 w-5" />
                </Button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-black mb-6 text-xl text-gradient-primary">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-gradient-secondary transition-all duration-300 font-medium text-lg hover:translate-x-1 inline-block"
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
        <div className="border-t border-gray-700/50 mt-16 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h4 className="font-black mb-3 text-2xl text-gradient-primary">Stay in the Loop</h4>
              <p className="text-gray-300 text-lg font-medium">Subscribe for exclusive design tips, trends, and project updates</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-4 bg-gray-800/50 border border-gray-600 rounded-full focus:border-primary focus:outline-none text-white flex-1 md:w-80 glass"
              />
              <Button className="bg-gradient-primary hover:opacity-90 px-8 py-4 rounded-full magnetic-bold">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700/50 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-lg font-medium flex items-center justify-center gap-2">
            &copy; 2024 CreativeStudio. All rights reserved. Designed with 
            <Heart className="h-5 w-5 text-red-500 animate-pulse" /> 
            for amazing businesses.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

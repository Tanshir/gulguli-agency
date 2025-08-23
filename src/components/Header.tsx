
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-black text-sm lg:text-base">P</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs lg:text-sm font-medium text-muted-foreground">PIXEL</span>
                <span className="text-xs lg:text-sm font-black text-foreground -mt-1">CRAFT</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <div className="flex items-center space-x-12">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground hover:text-muted-foreground transition-colors duration-200 font-medium text-base"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <Link to="/contact">
              <Button className="btn-primary text-sm lg:text-base px-6 py-3">
                Start Project
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t">
            <div className="px-2 pt-4 pb-6 space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-4 py-3 text-foreground hover:bg-muted transition-all duration-200 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 py-3">
                <Link to="/contact">
                  <Button className="w-full btn-primary" onClick={() => setIsOpen(false)}>
                    Start Project
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

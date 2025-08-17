import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { STUDIO_CONFIG } from "@/lib/config";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Chi sono", href: "/chi-sono" },
    { name: "Servizi", href: "/servizi" },
    { name: "Contatti", href: "/contatti" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <h1 className="text-xl font-bold text-primary hover:text-primary/80 smooth-transition" data-testid="logo">
                {STUDIO_CONFIG.name}
              </h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium smooth-transition ${
                    isActive(item.href)
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                  data-testid={`nav-${item.name.toLowerCase().replace(" ", "-")}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Link href="/prenotazioni">
              <Button 
                className="bg-accent text-accent-foreground hover:bg-accent/90 smooth-transition font-semibold"
                data-testid="button-prenota"
              >
                Prenota
              </Button>
            </Link>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4" data-testid="mobile-menu">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`py-2 font-medium smooth-transition ${
                    isActive(item.href)
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  data-testid={`mobile-nav-${item.name.toLowerCase().replace(" ", "-")}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

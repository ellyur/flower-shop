import { useState, useEffect } from "react";
import { LOGO_URL, MESSENGER_LINK, flowerSections } from "@/data/flowerCatalog";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Carnation", href: "#carnation" },
    { label: "Roses", href: "#roses" },
    { label: "Best Sellers", href: "#special" },
    { label: "Sunflower", href: "#sunflower" },
    { label: "Tulips", href: "#tulips" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled
          ? "transform translate-y-0 opacity-100 bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
          : "transform -translate-y-full opacity-0 pointer-events-none"
        }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Shop Name */}
          <a href="#" className="flex items-center gap-3 transition-transform hover:scale-105 duration-300">
            <img
              src={LOGO_URL}
              alt="Liceria Rose Flower Shop"
              className="h-20 w-auto object-contain drop-shadow-md"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Messenger Button */}
          <a
            href={MESSENGER_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.936 1.444 5.545 3.697 7.247.194.145.31.377.302.624l-.074 1.979a.748.748 0 001.06.672l2.208-.974a.748.748 0 01.49-.033c.81.219 1.676.335 2.573.335 5.523 0 10-4.145 10-9.243S17.523 2 12 2z" />
              <path fill="hsl(var(--background))" d="M6.75 13.5l3.5-5.5 2 2 3.5-2-3.5 5.5-2-2z" />
            </svg>
            Message Us
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={MESSENGER_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors mt-2"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.936 1.444 5.545 3.697 7.247.194.145.31.377.302.624l-.074 1.979a.748.748 0 001.06.672l2.208-.974a.748.748 0 01.49-.033c.81.219 1.676.335 2.573.335 5.523 0 10-4.145 10-9.243S17.523 2 12 2z" />
                  <path fill="hsl(var(--background))" d="M6.75 13.5l3.5-5.5 2 2 3.5-2-3.5 5.5-2-2z" />
                </svg>
                Message Us
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Quiénes somos", href: "/quienes-somos" },
    { name: "Qué ofrecemos", href: "/que-ofrecemos" },
    { name: "Calidad", href: "/calidad" },
    { name: "Sostenibilidad", href: "/sostenibilidad" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        {/* Logo Placeholder */}
        <Link href="/">
          <a className="font-heading font-bold text-2xl tracking-tighter text-primary flex items-center gap-2">
            <span className="w-8 h-8 rounded-md bg-primary text-primary-foreground flex items-center justify-center text-sm">ABM</span>
            Crops
          </a>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === link.href ? "text-primary border-b-2 border-primary pb-1" : "text-foreground/80"
                }`}
              >
                {link.name}
              </a>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-border shadow-lg">
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <a
                  className={`text-base font-medium py-2 border-b border-border/50 ${
                    location === link.href ? "text-primary" : "text-foreground/80"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

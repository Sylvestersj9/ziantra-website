import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { label: "Solutions", href: "#solutions" },
    { label: "Process", href: "#process" },
    { label: "Work", href: "#work" },
    { label: "FAQ", href: "#faq" },
  ];

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (location.pathname !== "/") {
      navigate("/" + href);
    } else {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogoClick = () => {
    setMobileOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="section-padding py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <button onClick={handleLogoClick} className="font-display text-2xl font-bold tracking-tight">
            Ziantra
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
            <ThemeToggle />
            <a href="/bookings" className="btn-filled text-sm py-2.5 px-5">
              Book a Call
            </a>
          </nav>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              className="text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="md:hidden pt-4 pb-2 flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2 text-left"
              >
                {link.label}
              </button>
            ))}
            <a
              href="/bookings"
              onClick={() => setMobileOpen(false)}
              className="btn-filled text-sm py-2.5 px-5 text-center mt-2"
            >
              Book a Call
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

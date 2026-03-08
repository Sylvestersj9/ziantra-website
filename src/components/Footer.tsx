const Footer = () => {
  const quickLinks = [
    { label: "Solutions", href: "#solutions" },
    { label: "Process", href: "#process" },
    { label: "Work", href: "#work" },
    { label: "Book a Call", href: "#contact" },
  ];

  return (
    <footer className="border-t border-border bg-background">
      <div className="section-padding py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-3">Ziantra</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              AI automation agency helping businesses scale through intelligent automation and custom AI agents.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-muted-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <a key={link.label} href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-muted-foreground">Get in Touch</h4>
            <nav className="flex flex-col gap-2">
              <a href="mailto:sylvester@ziantra.co.uk" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                sylvester@ziantra.co.uk
              </a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Schedule a call
              </a>
            </nav>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Ziantra. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

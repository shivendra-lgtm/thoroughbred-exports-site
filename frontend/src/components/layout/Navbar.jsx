import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { COMPANY } from "@/data/site";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/licenses", label: "Licenses" },
  { to: "/catalogues", label: "Catalogues" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-brand-cream/85 backdrop-blur-xl border-b border-brand-dark/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            data-testid="navbar-logo-link"
            className="flex items-center group"
          >
            <img
              src="/images/logo.png"
              alt="Thoroughbred Exports"
              className="h-10 md:h-11 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                data-testid={`nav-link-${l.label.toLowerCase()}`}
                className={({ isActive }) =>
                  `overline transition-colors ${
                    isActive
                      ? "text-brand-terracotta"
                      : "text-brand-dark hover:text-brand-terracotta"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <a
            href={COMPANY.emailHref}
            data-testid="navbar-cta-enquire"
            className="hidden md:inline-flex items-center bg-brand-green text-brand-cream px-6 py-3 text-xs uppercase tracking-[0.22em] hover:bg-brand-dark transition-colors"
          >
            Enquire
          </a>

          <button
            data-testid="navbar-menu-toggle"
            className="md:hidden p-2 text-brand-dark"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          data-testid="mobile-menu"
          className="md:hidden bg-brand-cream border-t border-brand-dark/10"
        >
          <nav className="px-6 py-6 flex flex-col gap-5">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                data-testid={`mobile-nav-link-${l.label.toLowerCase()}`}
                className={({ isActive }) =>
                  `overline ${
                    isActive ? "text-brand-terracotta" : "text-brand-dark"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <a
              href={COMPANY.emailHref}
              data-testid="mobile-cta-enquire"
              className="mt-2 inline-block bg-brand-green text-brand-cream px-6 py-3 text-xs uppercase tracking-[0.22em] w-fit"
            >
              Enquire
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { COMPANY } from "@/data/site";

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="relative bg-brand-dark text-brand-cream overflow-hidden"
    >
      <div className="absolute inset-0 grain-dark pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 relative">
        {/* Massive brandmark */}
        <div className="border-b border-brand-cream/10 pb-16 mb-16">
          <p className="overline text-brand-saffron mb-6">
            {COMPANY.closer}
          </p>
          <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter text-brand-cream">
            Thoroughbred
            <span className="block italic text-brand-saffron/90">Exports</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <p className="overline text-brand-cream/50 mb-4">The Firm</p>
            <p className="font-serif text-2xl md:text-3xl leading-snug text-brand-cream/95 max-w-md">
              A merchant export house based in Thane, India — connecting the
              country&rsquo;s finest produce and ingredients to buyers across the
              world.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="overline text-brand-cream/50 mb-5">Navigate</p>
            <ul className="flex flex-col gap-3 text-brand-cream/80">
              {[
                ["Home", "/"],
                ["Services", "/services"],
                ["Licenses", "/licenses"],
                ["Catalogues", "/catalogues"],
                ["Contact", "/contact"],
              ].map(([label, to]) => (
                <li key={to}>
                  <Link
                    to={to}
                    data-testid={`footer-link-${label.toLowerCase()}`}
                    className="hover:text-brand-saffron transition-colors inline-flex items-center gap-1"
                  >
                    {label}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="overline text-brand-cream/50 mb-5">Reach Us</p>
            <ul className="flex flex-col gap-4 text-brand-cream/85 text-sm">
              <li className="flex gap-3">
                <MapPin size={16} className="mt-1 shrink-0 text-brand-saffron" />
                <span className="leading-relaxed">
                  {COMPANY.addressLines.map((l, i) => (
                    <span key={i} className="block">
                      {l}
                    </span>
                  ))}
                </span>
              </li>
              <li>
                <a
                  href={COMPANY.phoneHref}
                  data-testid="footer-phone"
                  className="flex gap-3 items-center hover:text-brand-saffron transition-colors"
                >
                  <Phone size={16} className="text-brand-saffron" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={COMPANY.emailHref}
                  data-testid="footer-email"
                  className="flex gap-3 items-center hover:text-brand-saffron transition-colors break-all"
                >
                  <Mail size={16} className="text-brand-saffron shrink-0" />
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <a
                  href={COMPANY.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="footer-linkedin"
                  className="flex gap-3 items-center hover:text-brand-saffron transition-colors"
                >
                  <Linkedin size={16} className="text-brand-saffron" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-brand-cream/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-brand-cream/50 uppercase tracking-[0.2em]">
          <span>© {new Date().getFullYear()} Thoroughbred Exports</span>
          <span>Registered under IEC · APEDA · FIEO · Spices Board</span>
        </div>
      </div>
    </footer>
  );
}

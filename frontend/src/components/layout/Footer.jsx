import React from "react";
import { Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { COMPANY } from "@/data/site";

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="relative bg-brand-dark text-brand-cream overflow-hidden"
    >
      <div className="absolute inset-0 grain-dark pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20 relative">
        <p className="overline text-brand-cream/50 mb-5">Reach Us</p>
        <ul className="grid gap-4 text-brand-cream/85 text-sm md:text-base">
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
    </footer>
  );
}

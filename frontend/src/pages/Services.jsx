import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <div data-testid="services-page">
      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 text-center">
        <p className="overline text-brand-terracotta mb-6">Ready to move?</p>
        <h2 className="font-serif text-4xl md:text-6xl tracking-tight text-brand-dark max-w-3xl mx-auto">
          Tell us what you need. We&rsquo;ll come back within{" "}
          <span className="italic text-brand-green">24 hours.</span>
        </h2>
        <Link
          to="/contact"
          data-testid="services-cta-contact"
          className="mt-12 inline-flex items-center gap-3 bg-brand-green text-brand-cream px-10 py-5 text-xs uppercase tracking-[0.22em] hover:bg-brand-dark transition-colors"
        >
          Start an Enquiry
          <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  );
}

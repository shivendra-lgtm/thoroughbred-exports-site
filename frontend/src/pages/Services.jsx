import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <div data-testid="services-page">
      {/* ABOUT US */}
      <section
        data-testid="about-us"
        className="relative bg-brand-cream"
      >
        <div className="max-w-3xl mx-auto px-6 md:px-8 py-20 md:py-28">
          <p className="overline text-brand-terracotta mb-6">About Us</p>

          <div className="space-y-6 text-base md:text-lg leading-relaxed text-brand-ink">
            <p>
              Thoroughbred Exports is primarily built with the objective of
              simplifying the sourcing of high-quality commodities from across
              India and delivering them at competitive prices globally. In
              addition to exports, we also undertake imports to serve diverse
              business requirements.
            </p>
            <p>
              At Thoroughbred Exports, we are committed to clear communication,
              dependable execution, and high ethical standards in every
              transaction. Our journey began with hands-on experience across
              multiple export-import businesses in India, where we learned the
              practical aspects of the trade and developed solutions to the
              challenges faced by businesses in this space.
            </p>
            <p>
              Over the years, we have worked closely with farmers, suppliers,
              workers, transporters, packers, and industry bodies, while
              continuously incorporating feedback from international buyers to
              better understand evolving market needs. Today, we work directly
              with trusted farmers, suppliers, and manufacturers across India
              to source and export quality goods efficiently and reliably.
            </p>
            <p>
              We also have a strong network of logistics and customs handling
              agents to support smooth operations and timely deliveries. We can
              accommodate bespoke buyer requirements, including white-label
              packaging and specific certifications, and we may also act as an
              international broker or export advisor within our area of
              expertise.
            </p>
          </div>

          {/* Fresh Produce */}
          <div className="mt-16 md:mt-20 border-t border-brand-dark/10 pt-12 md:pt-16">
            <h2 className="font-serif text-3xl md:text-5xl leading-tight tracking-tight text-brand-dark">
              Fresh <span className="italic text-brand-green">Produce.</span>
            </h2>
            <div className="mt-8 space-y-6 text-base md:text-lg leading-relaxed text-brand-ink">
              <p>
                India is one of the world&rsquo;s largest food-producing
                countries and offers a wide variety of fresh produce due to its
                diverse geographical and climatic conditions. We specialize
                primarily in sourcing and exporting fresh fruits and vegetables
                from India, tailored to your quality and market requirements.
              </p>
              <p>
                We can help you source produce in various forms, including
                organic, raw, cut, diced, peeled, or processed, and we ensure
                reliable delivery based on your destination and shipment
                preferences. We can arrange shipments by air and freight,
                including both LCL and FCL units, depending on your needs.
              </p>
              <p>
                Some of the most sought-after agricultural produce we handle
                includes Indian Mangoes, Table Grapes, Bananas, Purandar Figs,
                Pomegranates, Golden Custard Apples, Semi Husk Coconuts,
                Jackfruits, Chillies, Red Onions, and more.
              </p>
              <p>
                We are also engaged in the import of select fruits, including
                stone fruits, citrus fruits, and a few other seasonal varieties,
                allowing us to serve broader sourcing needs with flexibility.
              </p>
            </div>
          </div>

          {/* Ingredients and Additives */}
          <div className="mt-16 md:mt-20 border-t border-brand-dark/10 pt-12 md:pt-16">
            <h2 className="font-serif text-3xl md:text-5xl leading-tight tracking-tight text-brand-dark">
              Ingredients{" "}
              <span className="italic text-brand-green">&amp; Additives.</span>
            </h2>
            <div className="mt-8 space-y-6 text-base md:text-lg leading-relaxed text-brand-ink">
              <p>
                We also supply select ingredients and additives for
                manufacturing needs, including premium Guar Gum and Corn Starch.
                Our ingredients are sourced to meet specific technical and
                end-use requirements, with attention to quality, consistency,
                and packaging standards.
              </p>
              <p>
                Guar Gum, also known as E412, is a galactomannan polysaccharide
                extracted from guar seeds. It is widely used across food,
                pharmaceutical, cosmetic, textile, paper, and industrial
                applications for its thickening, stabilizing, and emulsifying
                properties.
              </p>
              <p>
                We also export native and gelatinized corn starch based on
                end-user requirements, whether for culinary, industrial, or
                pharmaceutical use. Our suppliers maintain strong quality
                controls and relevant certifications from production through
                shipment, and packaging can be customized or branded as
                required.
              </p>
            </div>
          </div>

          {/* Additional Trading Activities */}
          <div className="mt-16 md:mt-20 border-t border-brand-dark/10 pt-12 md:pt-16">
            <h2 className="font-serif text-3xl md:text-5xl leading-tight tracking-tight text-brand-dark">
              Additional{" "}
              <span className="italic text-brand-green">Trading Activities.</span>
            </h2>
            <div className="mt-8 space-y-6 text-base md:text-lg leading-relaxed text-brand-ink">
              <p>
                We are also involved in select local trading activities, along
                with the import and export of a range of miscellaneous
                perishables, pulses, nuts, packaging materials, and farm
                machinery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-brand-sand border-t border-brand-dark/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 text-center">
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
        </div>
      </section>
    </div>
  );
}

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { FRESH_PRODUCE, INGREDIENTS } from "@/data/site";

// Custom span pattern so we don&rsquo;t get monotonous 3-col grids
const spans = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-2 md:row-span-1",
  "md:col-span-1 md:row-span-1",
];

const heights = [
  "h-[520px]",
  "h-[250px]",
  "h-[250px]",
  "h-[250px]",
  "h-[250px]",
  "h-[250px]",
];

function BentoGrid({ items, accent }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-5">
      {items.map((it, i) => (
        <motion.article
          key={it.name}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: (i % 4) * 0.06 }}
          className={`group relative overflow-hidden ${spans[i]} ${heights[i]}`}
          data-testid={`produce-item-${i}`}
        >
          <img
            src={it.image}
            alt={it.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/85 via-brand-dark/25 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
            <div className={`overline ${accent === "terracotta" ? "text-brand-terracotta" : "text-brand-saffron"}`}>
              0{i + 1}
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-brand-cream mt-1 leading-tight">
              {it.name}
            </h3>
          </div>
        </motion.article>
      ))}
    </div>
  );
}

export default function Services() {
  return (
    <div data-testid="services-page">
      {/* Header */}
      <section className="relative">
        <div className="absolute inset-0 grain opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-16 md:pt-24 md:pb-20">
          <p className="overline text-brand-terracotta mb-6">Our Exports</p>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl leading-[0.95] tracking-tighter text-brand-dark max-w-4xl">
            From India&rsquo;s fields to your{" "}
            <span className="italic text-brand-green">port of choice.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-brand-ink leading-relaxed">
            Thoroughbred operates across two complementary verticals — Fresh
            Produce and Ingredients & Additives. Every consignment is sourced,
            inspected and shipped under a single quality mandate.
          </p>
        </div>
      </section>

      {/* Fresh Produce */}
      <section className="bg-brand-sand">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-8 items-end mb-12">
            <div className="md:col-span-7">
              <p className="overline text-brand-terracotta mb-4">Vertical 01</p>
              <h2 className="font-serif text-4xl md:text-6xl tracking-tight text-brand-dark">
                Fresh Produce.
              </h2>
            </div>
            <p className="md:col-span-5 text-brand-ink text-base md:text-lg leading-relaxed">
              Farm-fresh fruits and vegetables, dispatched with strict cold-chain
              protocols. Sourced through long-standing grower networks across
              Maharashtra, Gujarat, Karnataka and Andhra Pradesh.
            </p>
          </div>
          <BentoGrid items={FRESH_PRODUCE} accent="terracotta" testIdPrefix="produce-item" />
        </div>
      </section>

      {/* Ingredients */}
      <section className="bg-brand-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-8 items-end mb-12">
            <div className="md:col-span-7">
              <p className="overline text-brand-saffron mb-4">Vertical 02</p>
              <h2 className="font-serif text-4xl md:text-6xl tracking-tight text-brand-dark">
                Ingredients{" "}
                <span className="italic text-brand-green">&amp; Additives.</span>
              </h2>
            </div>
            <p className="md:col-span-5 text-brand-ink text-base md:text-lg leading-relaxed">
              Spices, pulses, grains, oil seeds and speciality food ingredients
              — sorted, cleaned and packed to meet international food-safety
              standards.
            </p>
          </div>
          <BentoGrid items={INGREDIENTS} accent="saffron" testIdPrefix="ingredient-item" />
        </div>
      </section>

      {/* Process */}
      <section className="bg-brand-dark text-brand-cream relative overflow-hidden">
        <div className="absolute inset-0 grain-dark pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 relative">
          <p className="overline text-brand-saffron mb-6">How we work</p>
          <h2 className="font-serif text-4xl md:text-6xl tracking-tight max-w-3xl">
            A five-step process,{" "}
            <span className="italic text-brand-saffron">
              honed over every shipment.
            </span>
          </h2>

          <div className="mt-16 grid md:grid-cols-5 gap-8 md:gap-6">
            {[
              { step: "01", title: "Enquiry", body: "Requirement, specs, incoterms, target market." },
              { step: "02", title: "Sourcing", body: "Grower-network selection, sample validation." },
              { step: "03", title: "QC & Pack", body: "Grading, inspection, custom packaging." },
              { step: "04", title: "Documentation", body: "APEDA / Spices Board / phyto certificates." },
              { step: "05", title: "Ship", body: "FCL/LCL despatch with real-time updates." },
            ].map((p) => (
              <div key={p.step} className="border-t border-brand-cream/20 pt-6">
                <div className="font-serif text-4xl text-brand-saffron">{p.step}</div>
                <div className="overline text-brand-cream mt-4">{p.title}</div>
                <p className="text-brand-cream/70 text-sm mt-3 leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

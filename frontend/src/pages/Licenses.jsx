import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Award } from "lucide-react";
import { LICENSES } from "@/data/site";

export default function Licenses() {
  return (
    <div data-testid="licenses-page">
      {/* Header */}
      <section className="relative">
        <div className="absolute inset-0 grain opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-16 md:pt-24 md:pb-20">
          <p className="overline text-brand-terracotta mb-6">Compliance</p>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl leading-[0.95] tracking-tighter text-brand-dark max-w-4xl">
            Certified for{" "}
            <span className="italic text-brand-green">global excellence.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-brand-ink leading-relaxed">
            Thoroughbred Exports operates under the full suite of registrations
            required for legitimate, quality-assured international trade from
            India.
          </p>
        </div>
      </section>

      {/* Certificate Grid */}
      <section className="bg-brand-sand">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LICENSES.map((l, i) => (
              <motion.article
                key={l.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: (i % 4) * 0.06 }}
                className="group relative bg-brand-cream border border-brand-dark/15 p-8 md:p-10 hover:border-brand-gold transition-colors"
                data-testid={`license-card-${i}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="overline text-brand-gold">
                      Registration 0{i + 1}
                    </span>
                    <div className="mt-3 font-serif text-5xl md:text-6xl text-brand-green tracking-tight">
                      {l.code}
                    </div>
                  </div>
                  <ShieldCheck
                    size={32}
                    className="text-brand-gold shrink-0 mt-1"
                  />
                </div>

                <div className="mt-6 divider-rule" />

                <h3 className="mt-6 font-serif text-2xl text-brand-dark leading-snug">
                  {l.name}
                </h3>
                <p className="mt-4 text-brand-ink leading-relaxed">
                  {l.body}
                </p>

                <div className="mt-8 flex items-center gap-2 overline text-brand-terracotta opacity-0 group-hover:opacity-100 transition-opacity">
                  <Award size={14} /> Verified · Active
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-brand-dark text-brand-cream relative overflow-hidden">
        <div className="absolute inset-0 grain-dark pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 relative text-center">
          <p className="overline text-brand-saffron mb-6">Trade the right way</p>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight tracking-tight max-w-3xl mx-auto">
            Every certificate here is{" "}
            <span className="italic text-brand-saffron">
              an unbroken promise
            </span>{" "}
            to the buyer on the other end of the shipment.
          </h2>
        </div>
      </section>
    </div>
  );
}

import React from "react";
import { motion } from "framer-motion";
import { FileText, Download, ArrowUpRight } from "lucide-react";
import { CATALOGUES } from "@/data/site";

export default function Catalogues() {
  return (
    <div data-testid="catalogues-page">
      {/* Header */}
      <section className="relative">
        <div className="absolute inset-0 grain opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-16 md:pt-24 md:pb-20">
          <p className="overline text-brand-terracotta mb-6">
            Writeups · Catalogues · Circulars
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl leading-[0.95] tracking-tighter text-brand-dark max-w-4xl">
            The paperwork,{" "}
            <span className="italic text-brand-green">at your fingertips.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-brand-ink leading-relaxed">
            Download our current catalogues, company profile and season
            circulars below. New documents are added as they are published.
          </p>
        </div>
      </section>

      {/* PDF list */}
      <section className="bg-brand-sand">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {CATALOGUES.map((c, i) => (
              <motion.a
                key={c.title}
                href={c.file}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`catalogue-download-${i}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
                className="group relative bg-brand-cream border border-brand-dark/15 p-8 md:p-10 flex flex-col hover:border-brand-terracotta hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 flex items-center justify-center bg-brand-green text-brand-cream">
                      <FileText size={22} />
                    </div>
                    <span className="overline text-brand-terracotta">
                      {c.category}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={22}
                    className="text-brand-dark/40 group-hover:text-brand-terracotta group-hover:-translate-y-1 group-hover:translate-x-1 transition-all"
                  />
                </div>

                <h3 className="mt-8 font-serif text-2xl md:text-3xl text-brand-dark leading-snug">
                  {c.title}
                </h3>
                <p className="mt-3 text-brand-ink text-sm md:text-base leading-relaxed flex-1">
                  {c.description}
                </p>

                <div className="mt-8 pt-6 border-t border-brand-dark/10 flex items-center justify-between">
                  <span className="overline text-brand-green">PDF Document</span>
                  <span className="inline-flex items-center gap-2 text-sm text-brand-dark font-medium group-hover:text-brand-terracotta transition-colors">
                    <Download size={16} /> Download
                  </span>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Note */}
          <div className="mt-16 border border-dashed border-brand-dark/25 p-8 md:p-10 bg-brand-cream/60">
            <p className="overline text-brand-terracotta mb-3">A quick note</p>
            <p className="font-serif text-xl md:text-2xl text-brand-dark leading-snug max-w-3xl">
              Some documents may be temporarily unavailable while they are being
              refreshed for the current season. If you need a specific document
              immediately, please reach out to us — we will send it across
              within a few hours.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

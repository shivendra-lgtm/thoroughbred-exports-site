import React from "react";

export default function Catalogues() {
  return (
    <div data-testid="catalogues-page">
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-6 pb-8 md:pt-10 md:pb-12">
          <p className="overline text-brand-terracotta mb-6 font-bold">
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

      <section className="bg-brand-sand">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-24">
          <div className="border border-dashed border-brand-dark/25 p-8 md:p-10 bg-brand-cream/60 max-w-4xl">
            <p className="overline text-brand-terracotta mb-3 font-bold">
              A quick note
            </p>
            <p className="font-serif text-xl md:text-2xl text-brand-dark leading-snug">
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

import React from "react";

export default function Licenses() {
  return (
    <div data-testid="licenses-page">
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-6 pb-20 md:pt-10 md:pb-28">
          <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl leading-[0.95] tracking-tighter text-brand-dark max-w-4xl">
            Certified for{" "}
            <span className="italic text-brand-green">Excellence.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-brand-ink leading-relaxed">
            Thoroughbred Exports operates under the full suite of registrations
            required for legitimate, quality-assured international trade from
            India.
          </p>
        </div>
      </section>
    </div>
  );
}

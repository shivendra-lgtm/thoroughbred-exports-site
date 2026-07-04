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

          <div
            data-testid="cert-logos"
            className="mt-14 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 max-w-5xl"
          >
            {[
              { src: "/images/cert-apeda.png", alt: "APEDA — Agricultural & Processed Food Products Export Development Authority" },
              { src: "/images/cert-fssai.png", alt: "FSSAI — Food Safety and Standards Authority of India" },
              { src: "/images/cert-dgft.png", alt: "Directorate General of Foreign Trade (DGFT), Government of India" },
            ].map((c) => (
              <div
                key={c.src}
                data-testid={`cert-tile-${c.src.split("-").pop().replace(".png","")}`}
                className="p-6 md:p-8 flex items-center justify-center"
              >
                <img
                  src={c.src}
                  alt={c.alt}
                  className="max-h-32 md:max-h-40 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

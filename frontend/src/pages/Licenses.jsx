import React, { useState } from "react";
import { Download } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CERTIFICATES } from "@/data/site";

export default function Licenses() {
  const [selectedFile, setSelectedFile] = useState("");

  const selected = CERTIFICATES.find((c) => c.file === selectedFile);

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
              { src: "/images/cert-apeda.png", alt: "APEDA" },
              { src: "/images/cert-fssai.png", alt: "FSSAI" },
              { src: "/images/cert-dgft.png", alt: "DGFT" },
            ].map((c) => (
              <div
                key={c.src}
                data-testid={`cert-tile-${c.alt.toLowerCase()}`}
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

          {/* Certificate selector */}
          <div
            data-testid="cert-selector"
            className="mt-16 md:mt-24 max-w-2xl"
          >
            <p className="overline text-brand-terracotta mb-4 font-bold">
              Download a Certificate
            </p>
            <p className="text-brand-ink leading-relaxed mb-6">
              Pick a license or certification from the list below to view or
              download the original document.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-stretch">
              <Select value={selectedFile} onValueChange={setSelectedFile}>
                <SelectTrigger
                  data-testid="cert-select-trigger"
                  className="h-14 flex-1 bg-brand-cream border-brand-dark/25 text-base text-brand-dark focus:ring-brand-green focus:border-brand-green"
                >
                  <SelectValue placeholder="Select a certificate…" />
                </SelectTrigger>
                <SelectContent className="bg-brand-cream border-brand-dark/15 max-h-72">
                  {CERTIFICATES.map((c) => (
                    <SelectItem
                      key={c.file}
                      value={c.file}
                      data-testid={`cert-option-${c.name
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, "-")}`}
                      className="text-brand-dark focus:bg-brand-green/10 focus:text-brand-green cursor-pointer"
                    >
                      {c.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <a
                href={selectedFile || undefined}
                target={selectedFile ? "_blank" : undefined}
                rel={selectedFile ? "noopener noreferrer" : undefined}
                data-testid="cert-download-button"
                aria-disabled={!selectedFile}
                onClick={(e) => {
                  if (!selectedFile) e.preventDefault();
                }}
                className={`inline-flex items-center justify-center gap-3 h-14 px-8 text-xs uppercase tracking-[0.22em] transition-colors ${
                  selectedFile
                    ? "bg-brand-green text-brand-cream hover:bg-brand-dark cursor-pointer"
                    : "bg-brand-dark/15 text-brand-dark/40 cursor-not-allowed"
                }`}
              >
                <Download size={16} />
                Download
              </a>
            </div>

            {selected && (
              <p
                data-testid="cert-selected-preview"
                className="mt-4 text-sm text-brand-ink"
              >
                Selected: <span className="text-brand-dark">{selected.name}</span>
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

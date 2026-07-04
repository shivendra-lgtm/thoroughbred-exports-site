import React, { useState } from "react";
import { Download } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CATALOGUE_FILES } from "@/data/site";

export default function Catalogues() {
  const [selectedFile, setSelectedFile] = useState("");
  const selected = CATALOGUE_FILES.find((c) => c.file === selectedFile);

  return (
    <div data-testid="catalogues-page">
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-6 pb-8 md:pt-10 md:pb-12">
          <p className="overline text-brand-terracotta mb-6 font-bold">
            Writeups · Catalogues · Circulars
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl leading-[0.95] tracking-tighter text-brand-dark max-w-4xl">
            The Documents that{" "}
            <span className="italic text-brand-green">keep you informed.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-brand-ink leading-relaxed">
            Download our current catalogues, company profile and season
            circulars below. New documents are added as they are published.
          </p>

          {/* Catalogue selector */}
          <div
            data-testid="catalogue-selector"
            className="mt-10 md:mt-12 max-w-2xl"
          >
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-stretch">
              <Select value={selectedFile} onValueChange={setSelectedFile}>
                <SelectTrigger
                  data-testid="catalogue-select-trigger"
                  className="h-14 flex-1 bg-brand-cream border-brand-dark/25 text-base text-brand-dark focus:ring-brand-green focus:border-brand-green"
                >
                  <SelectValue placeholder="Select a catalogue…" />
                </SelectTrigger>
                <SelectContent className="bg-brand-cream border-brand-dark/15 max-h-72">
                  {CATALOGUE_FILES.map((c) => (
                    <SelectItem
                      key={c.file}
                      value={c.file}
                      data-testid={`catalogue-option-${c.name
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
                data-testid="catalogue-download-button"
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
                data-testid="catalogue-selected-preview"
                className="mt-4 text-sm text-brand-ink"
              >
                Selected: <span className="text-brand-dark">{selected.name}</span>
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="bg-brand-sand">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-24">
          <div className="border border-dashed border-brand-dark/25 p-8 md:p-10 bg-brand-cream/60 max-w-4xl">
            <p className="overline text-brand-terracotta mb-3 font-bold">
              A quick note
            </p>
            <p className="font-serif text-xl md:text-2xl text-brand-dark leading-snug">
              Some documents may be temporarily unavailable, outdated or they
              are being refreshed for the current season. If you need a
              specific document please reach out to us — we will help you with
              your enquiry. Additionally feel free to enquire / reconfirm with
              us about any specifications or other details by reaching out to
              us.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

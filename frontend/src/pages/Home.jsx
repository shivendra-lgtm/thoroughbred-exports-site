import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Ship, Leaf, Globe2 } from "lucide-react";
import { COMPANY, PILLARS, FRESH_PRODUCE, INGREDIENTS } from "@/data/site";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const TV_SHIPMENT_IMAGES = [
  "/images/img_29.jpg",
  "/images/img_30.jpg",
  "/images/img_1.jpg",
  "/images/img_20.jpg",
  "/images/img_23.jpg",
  "/images/img_25.jpg",
  "/images/img_27.jpg",
];

function RetroTV({ images, intervalMs = 3200 }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(
      () => setIdx((i) => (i + 1) % images.length),
      intervalMs
    );
    return () => clearInterval(t);
  }, [images.length, intervalMs]);

  return (
    <div
      data-testid="retro-tv"
      className="relative mx-auto w-full max-w-[440px] select-none"
    >
      {/* Antenna */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-14 md:-top-20 flex items-end gap-8 pointer-events-none">
        <div className="relative">
          <div
            className="w-[3px] h-14 md:h-20 bg-gradient-to-t from-[#a8823a] to-brand-gold origin-bottom"
            style={{ transform: "rotate(-25deg)" }}
          />
          <div className="absolute -top-1 -left-1 w-2.5 h-2.5 rounded-full bg-brand-gold" />
        </div>
        <div className="relative">
          <div
            className="w-[3px] h-14 md:h-20 bg-gradient-to-t from-[#a8823a] to-brand-gold origin-bottom"
            style={{ transform: "rotate(25deg)" }}
          />
          <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-brand-gold" />
        </div>
      </div>

      {/* Cabinet */}
      <div
        className="relative rounded-[28px] p-5 md:p-6 shadow-2xl"
        style={{
          background:
            "linear-gradient(160deg, #4a3120 0%, #3a2416 45%, #2a1a0e 100%)",
          boxShadow:
            "0 30px 60px -20px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.08)",
        }}
      >
        {/* Bezel */}
        <div
          className="relative rounded-[18px] p-3 md:p-4"
          style={{
            background:
              "linear-gradient(180deg, #1a0f08 0%, #0d0805 100%)",
            boxShadow: "inset 0 2px 8px rgba(0,0,0,0.7)",
          }}
        >
          {/* Screen */}
          <div
            className="relative aspect-[4/3] overflow-hidden rounded-[10px] bg-black"
            style={{
              boxShadow:
                "inset 0 0 40px rgba(0,0,0,0.85), inset 0 0 4px rgba(255,255,255,0.05)",
            }}
          >
            {images.map((src, i) => (
              <img
                key={src}
                src={src}
                alt=""
                loading={i === 0 ? "eager" : "lazy"}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  i === idx ? "opacity-100" : "opacity-0"
                }`}
                style={{ filter: "saturate(0.9) contrast(1.05)" }}
              />
            ))}

            {/* CRT scanlines */}
            <div
              className="absolute inset-0 pointer-events-none opacity-25 mix-blend-multiply"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, rgba(0,0,0,0.7) 0px, rgba(0,0,0,0.7) 1px, transparent 1px, transparent 3px)",
              }}
            />
            {/* Screen curvature vignette */}
            <div
              className="absolute inset-0 pointer-events-none rounded-[10px]"
              style={{
                boxShadow: "inset 0 0 60px 8px rgba(0,0,0,0.8)",
              }}
            />
            {/* Glass sheen */}
            <div
              className="absolute inset-0 pointer-events-none rounded-[10px]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.06) 100%)",
              }}
            />
            {/* Live LED */}
            <div className="absolute bottom-2 right-2 flex items-center gap-1.5 pointer-events-none">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_6px_rgba(239,68,68,0.9)]" />
              <span className="text-[8px] tracking-[0.3em] text-red-400/90 uppercase">
                Live
              </span>
            </div>
          </div>
        </div>

        {/* Speaker + controls row */}
        <div className="mt-4 md:mt-5 flex items-center justify-between gap-4">
          {/* Speaker grille */}
          <div
            className="flex-1 h-8 rounded-[6px] opacity-80"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)",
            }}
          />
          {/* Brand plaque */}
          <div className="px-2.5 py-1 border border-brand-gold/50 rounded-sm">
            <span className="text-brand-gold text-[9px] uppercase tracking-[0.3em]">
              Thoroughbred
            </span>
          </div>
          {/* Knobs */}
          <div className="flex gap-2.5">
            {[0, 1].map((k) => (
              <div
                key={k}
                className="w-6 h-6 rounded-full border border-black/50 shadow-inner relative"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, #e8c56b 0%, #a8823a 45%, #6a4d1e 100%)",
                }}
              >
                <span className="absolute top-1 left-1/2 -translate-x-1/2 w-[2px] h-2 bg-black/60 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legs */}
      <div className="flex justify-between px-10 -mt-1">
        <div className="w-3 h-6 rounded-b-md bg-[#2a1a0e] shadow-md" />
        <div className="w-3 h-6 rounded-b-md bg-[#2a1a0e] shadow-md" />
      </div>

      {/* Caption */}
      <p className="mt-6 text-center overline text-brand-gold/70">
        Now Broadcasting · Shipments in Motion
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <div data-testid="home-page">
      {/* HERO */}
      <section className="relative overflow-hidden bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-24 md:pt-24 md:pb-32 grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="lg:col-span-7"
          >
            <h1
              data-testid="hero-headline"
              className="font-serif text-[2rem] sm:text-[2.7rem] lg:text-[3.375rem] leading-[1.55] tracking-tight"
            >
              <span
                style={{
                  backgroundColor: "#264635",
                  color: "#F6F4EB",
                  padding: "0.15em 0.4em",
                  boxDecorationBreak: "clone",
                  WebkitBoxDecorationBreak: "clone",
                }}
              >
                Harnessing <span className="italic">Trade</span>
                <br />
                Opportunities
                <br />
                with <span className="italic">Precision.</span>
              </span>
            </h1>
            <p className="mt-10 text-lg md:text-xl text-brand-cream max-w-xl leading-relaxed">
              Clear Communication  ·  Great Quality
              <br />
              Right Price  ·  Timely{"\u00A0"}Deliverance.
              <span className="block mt-3 font-serif italic text-brand-terracotta text-2xl md:text-3xl font-semibold">
                {COMPANY.closer}
              </span>
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-5">
              <Link
                to="/services"
                data-testid="hero-cta-services"
                className="group inline-flex items-center gap-3 bg-brand-green text-brand-cream px-8 py-4 text-xs uppercase tracking-[0.22em] hover:bg-brand-terracotta transition-colors"
              >
                Our Services
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                to="/contact"
                data-testid="hero-cta-contact"
                className="inline-flex items-center gap-3 border border-brand-cream/70 text-brand-cream px-8 py-4 text-xs uppercase tracking-[0.22em] hover:bg-brand-cream hover:text-brand-dark transition-colors"
              >
                Start an Enquiry
              </Link>
            </div>
          </motion.div>

          {/* Retro TV — auto-cycles through shipment images */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center pt-16 lg:pt-20"
          >
            <RetroTV images={TV_SHIPMENT_IMAGES} intervalMs={3200} />
          </motion.div>
        </div>
      </section>

      {/* SNAPSHOT STRIP */}
      <section className="border-y border-brand-dark/10 bg-brand-sand/60">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6">
          {[
            { icon: Globe2, label: "Countries Served", value: "20+" },
            { icon: Leaf, label: "Produce Categories", value: "30+" },
            { icon: Ship, label: "Container Load Options", value: "LCL · FCL" },
            { icon: ArrowRight, label: "Response Time", value: "< 24 hrs" },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-4">
              <s.icon size={22} className="text-brand-terracotta shrink-0" />
              <div>
                <div className="font-serif text-3xl md:text-4xl text-brand-dark leading-none">
                  {s.value}
                </div>
                <div className="overline text-brand-ink mt-1">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PILLARS */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-8 mb-16 items-end">
          <div className="md:col-span-7">
            <p className="overline text-brand-terracotta mb-4">What we stand for</p>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight tracking-tight text-brand-dark">
              Four principles.
              <br />
              <span className="italic text-brand-green">Every shipment.</span>
            </h2>
          </div>
          <div className="md:col-span-5 md:pl-8 text-brand-ink text-base md:text-lg leading-relaxed">
            Merchant exports is a business of trust. We built Thoroughbred to
            deliver on the four things buyers actually value — and we deliver on
            all four, every single time.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative h-[440px] overflow-hidden"
              data-testid={`pillar-card-${i}`}
            >
              <img
                src={p.image}
                alt={p.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="overline text-brand-saffron">
                  0{i + 1}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-brand-cream mt-2 leading-tight">
                  {p.title}
                </h3>
                <p className="text-brand-cream/80 text-sm mt-3 leading-relaxed max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500">
                  {p.body}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* SERVICES SPLIT */}
      <section className="bg-brand-sand">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
          <div className="text-center mb-16">
            <p className="overline text-brand-terracotta mb-4">What we export</p>
            <h2 className="font-serif text-4xl md:text-6xl tracking-tight text-brand-dark">
              Two verticals.{" "}
              <span className="italic text-brand-green">One standard.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-10">
            {[
              {
                title: "Fresh Produce",
                subtitle: "Fruits · Vegetables · Perishables",
                items: FRESH_PRODUCE.slice(0, 4),
                accent: "terracotta",
                hero: "/images/img_4.jpg",
              },
              {
                title: "Ingredients & Additives",
                subtitle: "Spices · Pulses · Grains · Extracts",
                items: INGREDIENTS.slice(0, 4),
                accent: "green",
                hero: "/images/img_10.jpg",
              },
            ].map((s, idx) => (
              <Link
                key={s.title}
                to="/services"
                data-testid={`services-card-${idx}`}
                className="group relative h-[560px] overflow-hidden bg-brand-dark block"
              >
                <img
                  src={s.hero}
                  alt={s.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-80 transition-all duration-1000 group-hover:scale-110 group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/40 via-brand-dark/60 to-brand-dark/90" />
                <div className="relative h-full p-8 md:p-12 flex flex-col justify-between text-brand-cream">
                  <div>
                    <span
                      className={`overline ${
                        s.accent === "terracotta"
                          ? "text-brand-terracotta"
                          : "text-brand-saffron"
                      }`}
                    >
                      0{idx + 1} · {s.subtitle}
                    </span>
                    <h3 className="font-serif text-4xl md:text-6xl mt-4 tracking-tight leading-none">
                      {s.title}
                    </h3>
                  </div>
                  <div>
                    <ul className="grid grid-cols-2 gap-y-2 gap-x-4 mb-8 text-brand-cream/85">
                      {s.items.map((it) => (
                        <li key={it.name} className="text-sm flex items-center gap-2">
                          <span className="w-1 h-1 bg-brand-saffron rounded-full" />
                          {it.name}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center gap-2 overline text-brand-saffron group-hover:gap-4 transition-all">
                      Explore Range
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative bg-brand-green text-brand-cream overflow-hidden">
        <div className="absolute inset-0 grain-dark pointer-events-none" />
        <img
          src="/images/img_25.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-15"
        />
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-40 relative text-center">
          <p className="overline text-brand-saffron mb-6">
            Precision. Quality. Reliability.
          </p>
          <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter">
            That&rsquo;s <span className="italic text-brand-saffron">all</span> we do.
          </h2>
          <p className="mt-10 max-w-2xl mx-auto text-brand-cream/85 text-lg">
            If your requirement fits our stride, we&rsquo;d love to hear from you.
          </p>
          <Link
            to="/contact"
            data-testid="home-final-cta"
            className="mt-12 inline-flex items-center gap-3 bg-brand-cream text-brand-dark px-10 py-5 text-xs uppercase tracking-[0.24em] hover:bg-brand-saffron transition-colors"
          >
            Send an Enquiry
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}

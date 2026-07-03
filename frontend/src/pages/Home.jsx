import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Ship, Leaf, Globe2 } from "lucide-react";
import { COMPANY, PILLARS, FRESH_PRODUCE, INGREDIENTS } from "@/data/site";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Home() {
  return (
    <div data-testid="home-page">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grain opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-24 md:pt-24 md:pb-32 grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="lg:col-span-7"
          >
            <h1
              data-testid="hero-headline"
              className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tighter text-brand-dark"
            >
              Harnessing{" "}
              <span className="italic text-brand-green">Trade</span>
              <br />
              Opportunities
              <br />
              with <span className="italic text-brand-terracotta">Precision.</span>
            </h1>
            <p className="mt-10 text-lg md:text-xl text-brand-ink max-w-xl leading-relaxed">
              {COMPANY.pillarsLine}
              <span className="block mt-3 font-serif italic text-brand-terracotta text-2xl md:text-3xl font-semibold">
                {COMPANY.closer}
              </span>
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-5">
              <Link
                to="/services"
                data-testid="hero-cta-services"
                className="group inline-flex items-center gap-3 bg-brand-green text-brand-cream px-8 py-4 text-xs uppercase tracking-[0.22em] hover:bg-brand-dark transition-colors"
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
                className="inline-flex items-center gap-3 border border-brand-dark/70 text-brand-dark px-8 py-4 text-xs uppercase tracking-[0.22em] hover:bg-brand-dark hover:text-brand-cream transition-colors"
              >
                Start an Enquiry
              </Link>
            </div>
          </motion.div>

          {/* Tetris collage */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.15 }}
            className="lg:col-span-5 relative h-[520px] md:h-[620px]"
          >
            <div className="absolute top-0 right-0 w-3/5 h-3/5 overflow-hidden">
              <img
                src="/images/img_30.jpg"
                alt="Banana plantation at harvest"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-2/3 h-3/5 overflow-hidden border-t-4 border-l-4 border-brand-cream shadow-xl">
              <img
                src="/images/img_29.jpg"
                alt="Thoroughbred-branded export cartons being packed"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-1/3 left-1/2 w-1/3 h-1/3 overflow-hidden border-4 border-brand-cream shadow-2xl">
              <img
                src="/images/img_1.jpg"
                alt="Grapes ready for export"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 right-4 bg-brand-saffron text-brand-dark px-4 py-2">
              <span className="overline">Global · India-Origin</span>
            </div>
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

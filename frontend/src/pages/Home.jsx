import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { COMPANY } from "@/data/site";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// Backgrounds cycled behind the hero. The first entry (containers) is ALWAYS
// shown first on page load, then the loop alternates through the rest.
const HERO_BACKGROUNDS = [
  "/images/containers-bg.jpg",
  "/images/hero-bg-1.jpg",
  "/images/hero-bg-2.jpg",
  "/images/hero-bg-3.jpg",
  "/images/hero-bg-4.jpg",
  "/images/hero-bg-5.jpg",
  "/images/hero-bg-6.jpg",
  "/images/hero-bg-7.jpg",
];
const BG_INTERVAL_MS = 3000;

export default function Home() {
  const [bgIdx, setBgIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setBgIdx((i) => (i + 1) % HERO_BACKGROUNDS.length),
      BG_INTERVAL_MS
    );
    return () => clearInterval(t);
  }, []);

  return (
    <div data-testid="home-page">
      {/* HERO — the only content section on the homepage. Below it, the footer
          ("Reach Us") takes over. */}
      <section
        data-testid="home-hero"
        className="relative overflow-hidden bg-black"
      >
        {/* Cycling faded backgrounds (containers image shows first on load) */}
        {HERO_BACKGROUNDS.map((src, i) => (
          <React.Fragment key={src}>
            {/* Base pass — uniform 50% opacity across the section */}
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none transition-opacity duration-1000"
              style={{
                backgroundImage: `url('${src}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: i === bgIdx ? 0.5 : 0,
                filter: "grayscale(0.35) contrast(1.05)",
              }}
            />
            {/* Right-side boost — adds ~10% extra visibility on the right half */}
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none transition-opacity duration-1000"
              style={{
                backgroundImage: `url('${src}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: i === bgIdx ? 0.1 : 0,
                filter: "grayscale(0.35) contrast(1.05)",
                maskImage:
                  "linear-gradient(to right, transparent 40%, black 90%)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 40%, black 90%)",
              }}
            />
          </React.Fragment>
        ))}
        {/* Vignette to keep the edges deep black */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.75) 60%, rgba(0,0,0,1) 100%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-16 md:pt-24 md:pb-24">
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <motion.h1
              data-testid="hero-headline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
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
            </motion.h1>

            <p className="mt-10 text-lg md:text-xl text-brand-cream max-w-xl leading-relaxed">
              Clear Communication &nbsp;·&nbsp; Great Quality
              <br />
              Right Price &nbsp;·&nbsp; Timely{"\u00A0"}Deliverance.
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
        </div>
      </section>
    </div>
  );
}

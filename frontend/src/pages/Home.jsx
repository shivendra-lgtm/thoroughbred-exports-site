import React from "react";
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

export default function Home() {
  return (
    <div data-testid="home-page">
      {/* HERO — the only content section on the homepage. Below it, the footer
          ("Reach Us") takes over. */}
      <section className="relative overflow-hidden bg-black">
        {/* Faded container-yard background */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url('/images/containers-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.4,
            filter: "grayscale(0.35) contrast(1.05)",
          }}
        />
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

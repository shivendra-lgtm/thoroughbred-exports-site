import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Licenses from "@/pages/Licenses";
import Catalogues from "@/pages/Catalogues";
import Contact from "@/pages/Contact";

function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-32 text-center">
      <p className="overline text-brand-terracotta mb-6">404</p>
      <h1 className="font-serif text-5xl md:text-7xl text-brand-dark tracking-tighter">
        Page not found.
      </h1>
      <a
        href="/"
        className="mt-10 inline-flex items-center bg-brand-green text-brand-cream px-8 py-4 text-xs uppercase tracking-[0.22em] hover:bg-brand-dark transition-colors"
      >
        Return Home
      </a>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/licenses" element={<Licenses />} />
          <Route path="/catalogues" element={<Catalogues />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

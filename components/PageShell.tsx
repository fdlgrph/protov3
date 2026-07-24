"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ApertureLoader from "@/components/effects/ApertureLoader";
import CursorGlow from "@/components/effects/CursorGlow";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import FloatingWhatsApp from "@/components/whatsapp/FloatingWhatsApp";
import WhatsAppModal from "@/components/whatsapp/WhatsAppModal";

export default function PageShell() {
  const [loading, setLoading] = useState(true);
  const [waOpen, setWaOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-background text-white">
      <AnimatePresence>{loading && <ApertureLoader onDone={() => setLoading(false)} />}</AnimatePresence>

      {!loading && (
        <>
          <CursorGlow />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Skills />
            <Experience />
            <Stats />
            <Testimonials />
            <FAQ />
            <Contact onOpenWhatsApp={() => setWaOpen(true)} />
          </main>
          <Footer />
          <FloatingWhatsApp onOpen={() => setWaOpen(true)} />
          <WhatsAppModal open={waOpen} onClose={() => setWaOpen(false)} />
        </>
      )}
    </div>
  );
}

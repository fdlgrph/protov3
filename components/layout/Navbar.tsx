"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Aperture, ArrowUpRight } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";
import { CONTACT } from "@/lib/site-config";
import { PrimaryButton } from "@/components/ui/Buttons";
import ScrollIris from "@/components/effects/ScrollIris";

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(
      Boolean
    ) as Element[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          solid ? "border-b border-white/5 bg-background/80 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#home" className="flex items-center gap-2">
            <Aperture className="h-6 w-6 text-primary" strokeWidth={1.4} />
            <span className="font-display text-[15px] font-bold tracking-tight text-white">
              FADHIL<span className="text-primary">GRAPHY</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2 py-1.5 backdrop-blur-md lg:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`relative rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors ${
                  active === l.href ? "text-black" : "text-gray-300 hover:text-white"
                }`}
              >
                {active === l.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{l.label}</span>
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <ScrollIris />
            <a
              href="#resume"
              className="text-[13px] font-medium text-gray-300 transition-colors hover:text-white"
            >
              Resume
            </a>
            <PrimaryButton href={CONTACT.whatsappUrl} icon={ArrowUpRight}>
              Let&apos;s Talk
            </PrimaryButton>
          </div>

          <button
            className="rounded-full border border-white/10 p-2.5 text-white lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[70] flex flex-col bg-background/98 backdrop-blur-2xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="font-display text-[15px] font-bold text-white">
                FADHIL<span className="text-primary">GRAPHY</span>
              </span>
              <button
                onClick={() => setOpen(false)}
                className="rounded-full border border-white/10 p-2.5 text-white"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex flex-1 flex-col justify-center gap-1 px-8">
              {[...NAV_LINKS, { label: "Resume", href: "#resume" }].map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="border-b border-white/5 py-4 font-display text-3xl font-semibold text-white/90"
                >
                  {l.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

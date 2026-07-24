"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import { PORTFOLIO, CATS } from "@/lib/data";

export default function Portfolio() {
  const [cat, setCat] = useState("All");
  const items = cat === "All" ? PORTFOLIO : PORTFOLIO.filter((p) => p.cat === cat);

  return (
    <section id="portfolio" className="relative border-t border-white/5 px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Eyebrow fstop="f/2.8" label="Featured Portfolio" />
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <h2 className="max-w-xl font-display text-3xl font-bold text-white sm:text-4xl">
              Selected work, shipped and live.
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="flex flex-wrap gap-2">
              {CATS.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`rounded-full border px-4 py-2 text-[12.5px] font-medium transition-colors ${
                    cat === c
                      ? "border-primary bg-primary text-black"
                      : "border-white/10 text-gray-400 hover:border-white/25 hover:text-white"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {items.map((p, i) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                whileHover="hover"
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card"
              >
                <motion.div
                  className="pointer-events-none absolute inset-0 rounded-2xl"
                  variants={{ hover: { boxShadow: "inset 0 0 0 1.5px rgba(34,197,94,0.6)" } }}
                  transition={{ duration: 0.3 }}
                />
                <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br from-[#0d0d0d] to-[#161616]">
                  <motion.div
                    variants={{ hover: { scale: 1.08 } }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 opacity-30"
                    style={{ background: "radial-gradient(circle at 60% 40%, rgba(34,197,94,0.35), transparent 60%)" }}
                  />
                  <motion.div variants={{ hover: { scale: 1.1, rotate: 4 } }} transition={{ duration: 0.5 }}>
                    <Camera className="h-12 w-12 text-white/15" strokeWidth={1} />
                  </motion.div>
                  <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/40 px-3 py-1 font-mono text-[11px] text-gray-300 backdrop-blur-md">
                    {p.cat}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-white">{p.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-gray-500">{p.desc}</p>
                  <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4">
                    <span className="font-mono text-[11px] text-gray-600">{p.tech}</span>
                    <span className="flex items-center gap-1 text-[13px] font-semibold text-primary">
                      View Project
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import Eyebrow from "@/components/ui/Eyebrow";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(t);
  }, []);

  const t = TESTIMONIALS[i];

  return (
    <section id="testimonials" className="relative border-t border-white/5 px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-4xl text-center">
        <Eyebrow fstop="f/11" label="Testimonials" />
        <div className="mb-8 flex justify-center gap-1">
          {Array.from({ length: 5 }).map((_, s) => (
            <Star key={s} className="h-4 w-4 fill-primary text-primary" />
          ))}
        </div>
        <div className="relative min-h-[160px] rounded-3xl border border-white/10 bg-card p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-display text-xl font-medium leading-relaxed text-gray-200 sm:text-2xl">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="mt-6 text-[14px] font-semibold text-white">{t.name}</p>
              <p className="text-[12.5px] text-gray-500">{t.role}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {TESTIMONIALS.map((_, s) => (
            <button
              key={s}
              onClick={() => setI(s)}
              className={`h-1.5 rounded-full transition-all ${s === i ? "w-6 bg-primary" : "w-1.5 bg-white/15"}`}
              aria-label={`Testimonial ${s + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

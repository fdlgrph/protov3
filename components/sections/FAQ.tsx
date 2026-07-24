"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import { FAQS } from "@/lib/data";

function FAQItem({
  item,
  open,
  onClick,
}: {
  item: { q: string; a: string };
  open: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-white/10">
      <button onClick={onClick} className="flex w-full items-center justify-between gap-6 py-6 text-left">
        <span className="font-display text-base font-medium text-white sm:text-lg">{item.q}</span>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-primary">
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-6 text-[14px] leading-relaxed text-gray-500">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="blog" className="relative border-t border-white/5 px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-3xl">
        <Eyebrow fstop="f/16" label="Frequently Asked" />
        <Reveal>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Questions, answered.</h2>
        </Reveal>
        <div className="mt-10">
          {FAQS.map((f, i) => (
            <FAQItem key={f.q} item={f} open={open === i} onClick={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  Layers,
  Sparkles,
  Camera,
  Video,
  Plane,
  Palette,
  Globe,
  Share2,
  Bot,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import { SERVICES } from "@/lib/data";

const ICONS: Record<string, LucideIcon> = {
  Layers,
  Sparkles,
  Camera,
  Video,
  Plane,
  Palette,
  Globe,
  Share2,
  Bot,
};

export default function Services() {
  return (
    <section id="services" className="relative border-t border-white/5 px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Eyebrow fstop="f/2" label="Services" />
        <Reveal>
          <h2 className="max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
            Everything a brand needs to look, sound and build like itself.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon];
            return (
              <Reveal key={s.title} delay={(i % 3) * 0.06}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-card p-7"
                >
                  <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-primary/0 blur-2xl transition-colors duration-500 group-hover:bg-primary/20" />
                  <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-primary transition-colors group-hover:border-primary/40">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                  <h3 className="relative mt-5 font-display text-lg font-semibold text-white">
                    {s.title}
                  </h3>
                  <p className="relative mt-2 text-[13.5px] leading-relaxed text-gray-500">{s.copy}</p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

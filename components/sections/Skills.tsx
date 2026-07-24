"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import { SKILL_GROUPS } from "@/lib/data";

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-[13.5px] font-medium text-gray-300">{name}</span>
        <span className="font-mono text-[12px] text-primary">{level}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary to-primary-300"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative border-t border-white/5 px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Eyebrow fstop="f/4" label="Skills" />
        <Reveal>
          <h2 className="max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
            Fluent across the whole production pipeline.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-3">
          {SKILL_GROUPS.map((g, gi) => (
            <Reveal key={g.group} delay={gi * 0.08}>
              <div className="rounded-2xl border border-white/10 bg-card p-7">
                <h3 className="mb-6 font-display text-base font-semibold text-white">{g.group}</h3>
                <div className="space-y-5">
                  {g.items.map((it, i) => (
                    <SkillBar key={it.name} name={it.name} level={it.level} delay={i * 0.08} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

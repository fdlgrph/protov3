"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import { STATS } from "@/lib/data";
import { MASCOT_SRC } from "@/lib/site-config";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started) {
          setStarted(true);
          const dur = 1400;
          const t0 = performance.now();
          function tick(t: number) {
            const p = Math.min(1, (t - t0) / dur);
            setVal(Math.floor(p * to));
            if (p < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [to, started]);

  return (
    <span ref={ref} className="font-display text-4xl font-extrabold text-white sm:text-5xl">
      {val}
      {suffix}
    </span>
  );
}

const FACTS = [
  "Runs four concurrent creative & dev ventures under fdhldesign",
  "Shoots weddings by day, ships code at night",
  "Built an open-source Telegram bot used well beyond Klaten",
  "Believes every brand deserves a website as considered as its visuals",
];

export default function About() {
  return (
    <section id="about" className="relative border-t border-white/5 px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Eyebrow fstop="f/1.4" label="About" />
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/10 bg-card">
              <div
                className="absolute inset-0 opacity-40"
                style={{ background: "radial-gradient(circle at 30% 20%, rgba(34,197,94,0.25), transparent 60%)" }}
              />
              <div className="absolute bottom-0 left-1/2 h-[85%] w-full -translate-x-1/2">
                <Image src={MASCOT_SRC} alt="Ahmad Nur Fadhil" fill className="object-contain object-bottom" />
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
                A one-person studio that treats every deliverable like a launch.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-gray-400">
                I&apos;m Ahmad Nur Fadhil — known online as FDHLGRPHY — a creative director, developer
                and photographer based in Kab. Klaten, Indonesia. What started as freelance
                photography grew into Visivine Creative Hub, a string of self-built products like
                ReminderBot and Difa Store, and a design practice that spans the Klaten–Jogja–Solo
                region. I move between camera, code editor and client call in the same day, which is
                exactly how I like it.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-10 grid grid-cols-2 gap-6 border-t border-white/5 pt-8 sm:grid-cols-4">
                {STATS.map((s) => (
                  <div key={s.label}>
                    <Counter to={s.value} suffix={s.suffix} />
                    <p className="mt-1 text-[12px] leading-snug text-gray-500">{s.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              <ul className="mt-10 space-y-3">
                {FACTS.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[14px] text-gray-400">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

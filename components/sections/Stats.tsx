"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/ui/Reveal";
import { STATS } from "@/lib/data";

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

export default function Stats() {
  return (
    <section className="relative border-t border-white/5 px-6 py-20 lg:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06} className="text-center lg:text-left">
            <Counter to={s.value} suffix={s.suffix} />
            <p className="mt-2 text-[13px] text-gray-500">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

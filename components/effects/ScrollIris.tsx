"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollIris() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 20 });
  const dash = useTransform(progress, [0, 1], [126, 0]);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const unsub = progress.on("change", (v) => setPct(Math.round(v * 100)));
    return unsub;
  }, [progress]);

  return (
    <div className="relative h-10 w-10">
      <svg viewBox="0 0 44 44" className="h-10 w-10 -rotate-90">
        <circle cx="22" cy="22" r="20" fill="none" stroke="#1c1c1c" strokeWidth="2" />
        <motion.circle
          cx="22"
          cy="22"
          r="20"
          fill="none"
          stroke="#22C55E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={126}
          style={{ strokeDashoffset: dash }}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center font-mono text-[9px] text-gray-400">
        {pct}
      </span>
    </div>
  );
}

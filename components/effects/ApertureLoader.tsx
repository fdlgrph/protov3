"use client";

import { motion } from "framer-motion";
import { Aperture } from "lucide-react";
import { useEffect } from "react";

export default function ApertureLoader({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 1900);
    return () => clearTimeout(t);
  }, [onDone]);

  const blades = Array.from({ length: 8 });

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-40 w-40">
        {blades.map((_, i) => (
          <motion.span
            key={i}
            className="absolute left-1/2 top-1/2 h-20 w-10 origin-top border border-primary/20 bg-[#0d0d0d]"
            style={{
              rotate: `${(360 / blades.length) * i}deg`,
              clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
            }}
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.7, 0, 0.2, 1] }}
          />
        ))}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <Aperture className="h-10 w-10 text-primary" strokeWidth={1.2} />
        </motion.div>
      </div>
      <motion.p
        className="absolute bottom-16 font-mono text-xs tracking-[0.3em] text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        f/1.4 — FADHIL GRAPHY
      </motion.p>
    </motion.div>
  );
}

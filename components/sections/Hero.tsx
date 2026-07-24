"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Download, ArrowRight, ChevronDown } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { PrimaryButton, GhostButton } from "@/components/ui/Buttons";
import { MASCOT_SRC } from "@/lib/site-config";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative flex min-h-screen items-center overflow-hidden pt-28">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -left-40 top-10 h-[520px] w-[520px] rounded-full bg-primary/20 blur-[140px]"
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-0 top-1/3 h-[420px] w-[420px] rounded-full bg-primary-400/10 blur-[130px]"
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <div className="absolute inset-0 bg-grid-pattern bg-[length:64px_64px] opacity-[0.05]" />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-10"
      >
        <div>
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 font-mono text-[12px] tracking-[0.15em] text-gray-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              AVAILABLE FOR PROJECTS · KLATEN, ID
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="font-display text-[13vw] font-extrabold leading-[0.98] tracking-[-0.03em] text-white sm:text-6xl lg:text-[4.6rem]">
              Hi, I&apos;m <span className="whitespace-nowrap">Ahmad Nur</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-primary-300 to-primary bg-clip-text text-transparent">
                Fadhil.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-6 max-w-xl font-display text-xl font-medium text-gray-300 sm:text-2xl">
              Creative ideas deserve creative execution.
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-gray-500">
              I help brands grow through content creation, branding, photography, videography, web
              development and digital experiences.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <PrimaryButton href="#portfolio">View Portfolio</PrimaryButton>
              <GhostButton icon={Download} href="/resume.pdf">
                Download CV
              </GhostButton>
              <GhostButton icon={ArrowRight} href="#contact">
                Contact Me
              </GhostButton>
            </div>
          </Reveal>
        </div>

        <div className="relative mx-auto flex h-[380px] w-[380px] items-center justify-center sm:h-[440px] sm:w-[440px]">
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-[90px]" />
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.span
              key={i}
              className="absolute h-1.5 w-1.5 rounded-full bg-primary/70"
              style={{ left: `${10 + ((i * 37) % 90)}%`, top: `${10 + ((i * 53) % 90)}%` }}
              animate={{ y: [0, -16, 0], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: i * 0.3 }}
            />
          ))}
          <motion.div
            className="relative z-10 h-full w-full"
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src={MASCOT_SRC}
              alt="Fadhil Graphy mascot"
              fill
              sizes="440px"
              className="object-contain drop-shadow-[0_25px_60px_rgba(34,197,94,0.25)]"
              priority
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <ChevronDown className="h-5 w-5 text-gray-600" />
      </motion.div>
    </section>
  );
}

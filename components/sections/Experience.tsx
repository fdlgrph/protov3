import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import { EXPERIENCE } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative border-t border-white/5 px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <Eyebrow fstop="f/5.6" label="Experience" />
        <Reveal>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">The path so far.</h2>
        </Reveal>

        <div className="relative mt-14 space-y-12 border-l border-white/10 pl-8">
          {EXPERIENCE.map((e, i) => (
            <Reveal key={e.role} delay={i * 0.08}>
              <div className="relative">
                <span className="absolute -left-[38px] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background" />
                <span className="font-mono text-[12px] tracking-wide text-primary">{e.year}</span>
                <h3 className="mt-1.5 font-display text-xl font-semibold text-white">{e.role}</h3>
                <p className="text-[13.5px] text-gray-500">{e.org}</p>
                <p className="mt-2 max-w-lg text-[14px] leading-relaxed text-gray-400">{e.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

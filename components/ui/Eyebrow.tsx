export default function Eyebrow({ fstop, label }: { fstop: string; label: string }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="rounded-full border border-primary/25 bg-primary/5 px-2.5 py-1 font-mono text-[13px] tracking-[0.15em] text-primary/90">
        {fstop}
      </span>
      <span className="h-px w-8 bg-gradient-to-r from-primary/60 to-transparent" />
      <span className="text-[13px] uppercase tracking-[0.25em] text-gray-500">{label}</span>
    </div>
  );
}

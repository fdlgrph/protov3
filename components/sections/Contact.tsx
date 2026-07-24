"use client";

import { Mail, Instagram, Github, Linkedin, MessageCircle, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import { PrimaryButton, GhostButton } from "@/components/ui/Buttons";
import { CONTACT } from "@/lib/site-config";

export default function Contact({ onOpenWhatsApp }: { onOpenWhatsApp: () => void }) {
  const LINKS = [
    { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: Instagram, label: "Instagram", value: "@fdhlgrphy", href: CONTACT.instagram },
    { icon: Github, label: "GitHub", value: "fdhldesign", href: CONTACT.github },
    { icon: Linkedin, label: "LinkedIn", value: "Ahmad Nur Fadhil", href: CONTACT.linkedin },
  ];

  return (
    <section id="contact" className="relative border-t border-white/5 px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Eyebrow fstop="f/22" label="Contact" />
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <h2 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
              Have a project in
              <br />
              mind? Let&apos;s build it.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-gray-500">
              Whether it&apos;s a wedding film, a brand system, or a full website — tell me what
              you&apos;re working on and I&apos;ll get back to you within a day.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <PrimaryButton icon={MessageCircle} onClick={onOpenWhatsApp}>
                Chat on WhatsApp
              </PrimaryButton>
              <GhostButton icon={Mail} href={`mailto:${CONTACT.email}`}>
                Send an Email
              </GhostButton>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-card p-5 transition-colors hover:border-primary/40"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 text-primary">
                    <l.icon className="h-[18px] w-[18px]" />
                  </span>
                  <span>
                    <span className="block text-[12px] text-gray-500">{l.label}</span>
                    <span className="block text-[13.5px] font-medium text-white">{l.value}</span>
                  </span>
                  <ArrowUpRight className="ml-auto h-4 w-4 text-gray-600 transition-all group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

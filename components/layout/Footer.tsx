import Image from "next/image";
import { Instagram, Github, Linkedin } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";
import { MASCOT_SRC, CONTACT } from "@/lib/site-config";

export default function Footer() {
  const socials = [
    { icon: Instagram, href: CONTACT.instagram },
    { icon: Github, href: CONTACT.github },
    { icon: Linkedin, href: CONTACT.linkedin },
  ];

  return (
    <footer className="relative border-t border-white/5 px-6 py-16 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-10 border-b border-white/5 pb-12 lg:flex-row lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <Image src={MASCOT_SRC} alt="Fadhil Graphy mascot" width={48} height={48} className="h-12 w-12 object-contain" />
              <span className="font-display text-lg font-bold text-white">
                FADHIL<span className="text-primary">GRAPHY</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-[13.5px] leading-relaxed text-gray-500">
              Creative direction, content and code — built from Klaten for brands everywhere.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-10 gap-y-2 text-[13.5px] text-gray-400 sm:grid-cols-3">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="transition-colors hover:text-primary">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-3">
            {socials.map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-8 text-[12px] text-gray-600 sm:flex-row">
          <span>© {new Date().getFullYear()} Ahmad Nur Fadhil — FADHILGRAPHY. All rights reserved.</span>
          <span className="font-mono">Designed &amp; built with f/1.4 focus.</span>
        </div>
      </div>
    </footer>
  );
}

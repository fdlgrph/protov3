"use client";

import { ArrowUpRight, ArrowRight, type LucideIcon } from "lucide-react";
import type { ReactNode, MouseEventHandler } from "react";
import Magnetic from "./Magnetic";

type ButtonProps = {
  children: ReactNode;
  icon?: LucideIcon;
  onClick?: MouseEventHandler;
  href?: string;
};

export function PrimaryButton({
  children,
  icon: Icon = ArrowUpRight,
  onClick,
  href,
}: ButtonProps) {
  const Comp: any = href ? "a" : "button";
  return (
    <Magnetic strength={10}>
      <Comp
        href={href}
        onClick={onClick}
        target={href ? "_blank" : undefined}
        rel={href ? "noopener noreferrer" : undefined}
        className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-6 py-3.5 text-[14px] font-semibold text-black transition-transform active:scale-[0.97]"
      >
        <span className="relative z-10">{children}</span>
        <Icon className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-primary-300 to-primary transition-transform duration-500 group-hover:translate-x-0" />
      </Comp>
    </Magnetic>
  );
}

export function GhostButton({
  children,
  icon: Icon = ArrowRight,
  onClick,
  href,
}: ButtonProps) {
  const Comp: any = href ? "a" : "button";
  return (
    <Magnetic strength={10}>
      <Comp
        href={href}
        onClick={onClick}
        className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-[14px] font-semibold text-white transition-colors hover:border-primary/50 hover:bg-primary/5"
      >
        {children}
        <Icon className="h-4 w-4 text-primary transition-transform duration-300 group-hover:translate-x-1" />
      </Comp>
    </Magnetic>
  );
}

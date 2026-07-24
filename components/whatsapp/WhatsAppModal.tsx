"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/site-config";

export default function WhatsAppModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 px-6 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="wa-modal-title"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-sm rounded-3xl border border-white/10 bg-card p-8"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <MessageCircle className="h-5 w-5" />
            </div>
            <h3 id="wa-modal-title" className="mt-5 text-center font-display text-xl font-semibold text-white">
              Contact via WhatsApp
            </h3>
            <p className="mt-2 text-center text-[13.5px] leading-relaxed text-gray-500">
              You are about to leave this website and continue the conversation on WhatsApp.
            </p>
            <div className="mt-7 flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 rounded-full border border-white/15 py-3 text-[13.5px] font-semibold text-gray-300 transition-colors hover:bg-white/5"
              >
                Cancel
              </button>
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex-1 rounded-full bg-primary py-3 text-center text-[13.5px] font-semibold text-black transition-transform active:scale-[0.97]"
              >
                Continue to WhatsApp
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp({ onOpen }: { onOpen: () => void }) {
  return (
    <motion.button
      onClick={onOpen}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-black shadow-[0_10px_30px_rgba(34,197,94,0.4)]"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5 }}
      aria-label="Contact via WhatsApp"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-primary/40" />
      <MessageCircle className="relative h-6 w-6" />
    </motion.button>
  );
}

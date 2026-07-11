"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_NUMBER = "919666848983"; // India country code +91
const WHATSAPP_URL    = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3">
      {/* Tooltip label */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 12, scale: 0.9 }}
            animate={{ opacity: 1, x: 0,  scale: 1   }}
            exit={{    opacity: 0, x: 12, scale: 0.9 }}
            transition={{ duration: 0.18 }}
            className="px-4 py-2 rounded-xl bg-slate-900/95 border border-slate-700 backdrop-blur-md shadow-2xl text-sm font-semibold text-white whitespace-nowrap flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Chat with us on WhatsApp
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main FAB */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <motion.div
          className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-2xl cursor-pointer"
          style={{ background: "linear-gradient(135deg, #25d366 0%, #128c5e 100%)" }}
          whileHover={{ scale: 1.12 }}
          whileTap={{  scale: 0.93  }}
        >
          {/* Pulse rings */}
          <span className="absolute inset-0 rounded-full bg-green-400 opacity-30 animate-ping" />
          <span className="absolute inset-0 rounded-full border-2 border-green-300/40 scale-110" />

          {/* WhatsApp SVG icon */}
          <svg
            viewBox="0 0 32 32"
            className="w-7 h-7 fill-white relative z-10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 2C8.268 2 2 8.268 2 16c0 2.463.659 4.821 1.916 6.881L2 30l7.363-1.879A13.935 13.935 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.574 11.574 0 01-5.908-1.617l-.424-.252-4.368 1.115 1.155-4.23-.277-.44A11.557 11.557 0 014.4 16C4.4 9.592 9.592 4.4 16 4.4S27.6 9.592 27.6 16 22.408 27.6 16 27.6zm6.36-8.674c-.349-.175-2.065-1.018-2.385-1.133-.32-.116-.553-.174-.787.175-.233.348-.903 1.133-1.107 1.368-.204.232-.407.261-.756.087-.349-.174-1.473-.543-2.806-1.73-1.037-.925-1.737-2.065-1.94-2.414-.203-.349-.022-.537.152-.71.157-.156.349-.407.524-.61.174-.204.232-.349.348-.582.117-.232.058-.437-.029-.61-.087-.174-.787-1.893-1.078-2.594-.284-.68-.573-.587-.787-.598-.203-.01-.437-.013-.67-.013a1.286 1.286 0 00-.932.437c-.32.348-1.224 1.194-1.224 2.912s1.253 3.378 1.428 3.611c.174.232 2.467 3.766 5.98 5.28.836.36 1.487.576 1.996.737.838.267 1.602.23 2.205.139.673-.1 2.065-.843 2.357-1.658.291-.815.291-1.514.204-1.66-.088-.143-.32-.23-.67-.406z" />
          </svg>
        </motion.div>
      </a>
    </div>
  );
}

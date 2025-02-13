"use client";

// STYLES
import { motion } from "framer-motion";

export default function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="flex pt-60 items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-4">
          <motion.div
            className="relative w-32 h-32"
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            {[...Array(8)].map((_, index) => (
              <motion.div
                key={index}
                className="absolute w-6 h-6 bg-[#F76641] rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: index * 0.2,
                }}
                style={{
                  top: `${Math.sin((index / 8) * Math.PI * 2) * 40 + 50}%`,
                  left: `${Math.cos((index / 8) * Math.PI * 2) * 40 + 50}%`,
                }}
              />
            ))}
          </motion.div>

          <motion.div
            className="text-2xl font-bold text-[#F76641]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            Loading...
          </motion.div>
        </div>
      </div>
    </div>
  );
}

"use client";

// NEXT
import Image from "next/image";

// STYLES
import { motion } from "framer-motion";

interface CelebrityPosterProps {
  celebrity: {
    profile_path: string | null;
    name: string;
  };
}

export default function CelebrityPoster({ celebrity }: CelebrityPosterProps) {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="md:w-1/3"
    >
      <div className="relative rounded-xl overflow-hidden shadow-[0_0_30px_rgba(247,102,65,0.15)]">
        <Image
          src={
            celebrity.profile_path
              ? `https://image.tmdb.org/t/p/w500${celebrity.profile_path}`
              : "/noProfile.png"
          }
          alt={celebrity.name}
          width={500}
          height={750}
          className="w-full rounded-xl transform transition-transform duration-300 hover:scale-105"
        />
      </div>
    </motion.div>
  );
}

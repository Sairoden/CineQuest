"use client";

// STYLES
import { motion } from "framer-motion";
import { FaGlobe, FaPlus, FaTrash } from "react-icons/fa";

// NEXT
import Image from "next/image";

interface DetailsPosterProps {
  items: {
    poster_path: string;
    title?: string;
    name?: string;
    homepage?: string;
  };
  onWatchlist: () => void;
  isPending: boolean;
  isInWatchlist: boolean;
  deleteWatchlistPending: boolean;
  onRemoveWatchlist: () => void;
}

export default function DetailsPoster({
  items,
  onWatchlist,
  isPending,
  isInWatchlist,
  deleteWatchlistPending,
  onRemoveWatchlist,
}: DetailsPosterProps) {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="md:w-1/3 w-full flex justify-center md:justify-start"
    >
      <div className="flex flex-col gap-4 w-full max-w-[350px] md:max-w-none">
        <div className="relative group shadow-[0_0_30px_rgba(247,102,65,0.15)]">
          <Image
            src={
              items.poster_path
                ? `https://image.tmdb.org/t/p/w500${items.poster_path}`
                : "/noPoster.png"
            }
            alt={items.title || items.name || "No Title"}
            width={500}
            height={750}
            className="rounded-xl shadow-2xl transform transition-transform duration-300 group-hover:scale-[1.02] w-full"
          />
        </div>

        <div className="flex flex-col gap-3 w-full">
          {items.homepage && (
            <motion.a
              href={items.homepage}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center bg-white bg-opacity-95 text-[#F76641] px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-[#F76641]/20 transition-all duration-300 group w-full"
            >
              <FaGlobe className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-semibold">Official Website</span>
            </motion.a>
          )}

          <motion.button
            disabled={isPending || deleteWatchlistPending}
            onClick={isInWatchlist ? onRemoveWatchlist : onWatchlist}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`flex items-center justify-center px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 group w-full ${
              isInWatchlist
                ? "bg-gradient-to-r from-red-600 to-red-500 text-white hover:shadow-red-500/20 bg-opacity-50"
                : "bg-gradient-to-r from-[#F76641] to-[#FF8A6A] text-white hover:shadow-[#F76641]/20"
            }`}
          >
            {isInWatchlist ? (
              <FaTrash className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
            ) : (
              <FaPlus className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
            )}

            <span className="font-semibold">
              {isInWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
            </span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

"use client";

// NEXT
import Link from "next/link";

// STYLES
import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa";

export default function NoWatchlist() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center py-20 px-4 text-center"
    >
      <div className="max-w-md">
        <div className="bg-[#F76641]/10 rounded-full p-6 mb-6 inline-block">
          <FaPlus className="text-[#F76641] text-4xl" />
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Ready to Start Your Collection?
        </h2>

        <p className="text-gray-400 text-lg mb-8">
          Browse our extensive library and add your must-watch titles to your
          watchlist.
        </p>

        <Link href="/movies">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-gradient-to-r from-[#F76641] to-[#FF8A6A] text-white px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-[#F76641]/20 transition-all duration-300"
          >
            <FaPlus className="mr-2" />

            <span className="font-semibold">Explore Movies</span>
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}

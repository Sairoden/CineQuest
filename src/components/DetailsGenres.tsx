"use client";

// STYLES
import { motion } from "framer-motion";

interface MovieGenresProps {
  items: { genres: { id: number; name: string }[] };
}

export default function DetailsGenres({ items }: MovieGenresProps) {
  return (
    <>
      {items.genres.length > 0 && (
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Genres</h2>

          <div className="flex flex-wrap gap-3">
            {items.genres.map(
              (genre: { id: number; name: string }, index: number) => (
                <motion.span
                  key={genre.id}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="bg-gradient-to-r from-[#F76641] to-[#FF8A6A] text-white px-6 py-2 rounded-xl text-sm font-medium hover:shadow-lg hover:shadow-[#F76641]/20 transition-all duration-300"
                >
                  {genre.name}
                </motion.span>
              )
            )}
          </div>
        </div>
      )}
    </>
  );
}

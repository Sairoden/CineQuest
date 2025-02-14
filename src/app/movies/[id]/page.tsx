"use client";

// STYLES
import { motion } from "framer-motion";

// COMPONENTS
import {
  LoadingSpinner,
  MovieBackdrop,
  MoviePoster,
  MovieDetailsGrid,
  MovieOverview,
  MovieGenres,
  MovieProduction,
} from "@/components";

// HOOKS
import { useGetMovie } from "@/hooks";

export default function MovieDetailsPage() {
  const { data: movie, isPending } = useGetMovie();

  if (isPending) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-[#2A2E3F] text-white py-28">
      <MovieBackdrop movie={movie} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16 relative"
      >
        <div className="flex flex-col md:flex-row gap-12">
          <MoviePoster movie={movie} />

          {/* Details Section */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="md:w-2/3"
          >
            <MovieOverview movie={movie} />

            <MovieDetailsGrid movie={movie} />

            <MovieGenres movie={movie} />

            <MovieProduction movie={movie} />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

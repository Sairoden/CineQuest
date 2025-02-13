"use client";

// NEXT
import Image from "next/image";

// STYLES
import { motion } from "framer-motion";
import { FaFire, FaCalendarAlt, FaStar } from "react-icons/fa";

// HOOKS
import { useGetTrendingMovies } from "@/hooks";

// COMPONENTS
import { LoadingSpinner } from "@/components";

interface TrendingMoviesProps {
  movies: {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
  }[];
}

export default function TrendingMovies() {
  const { data, isPending } = useGetTrendingMovies();

  if (isPending) return <LoadingSpinner />;

  return (
    <div className="bg-[#2A2E3F] py-16">
      <div className="container mx-auto px-4 max-w-[1536px]">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3 mb-12"
        >
          <FaFire className="text-4xl text-[#F76641]" />

          <h2 className="text-4xl font-bold text-white">Trending Movies</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {(data?.results as TrendingMoviesProps["movies"])?.map(
            (movie, index) => (
              <motion.div
                key={movie.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl transform transition-all duration-300 hover:shadow-[#F76641]/20 flex flex-col"
              >
                <div className="relative aspect-[2/3]">
                  <Image
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : "/noPoster.png"
                    }
                    alt={movie.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 
                         (max-width: 1024px) 50vw, 
                         (max-width: 1280px) 33vw,
                         25vw"
                    quality={85}
                    priority={index < 4}
                    className="transition-transform duration-300 hover:scale-105 object-cover"
                  />

                  {movie.vote_average && (
                    <div className="absolute top-4 right-4 bg-[#F76641] rounded-full px-3 py-1 flex items-center gap-1">
                      <FaStar className="text-yellow-300" />

                      <span className="text-white font-semibold">
                        {String(movie.vote_average?.toFixed(1))}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4 line-clamp-1">
                    {movie.title}
                  </h3>

                  <div className="flex items-center gap-2 text-gray-400">
                    <FaCalendarAlt className="text-[#F76641]" />

                    <span>
                      {movie.release_date
                        ? new Date(movie.release_date).getFullYear()
                        : "No Date"}
                    </span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full mt-6 bg-[#F76641] text-white px-6 py-3 rounded-xl hover:bg-opacity-90 transition duration-300 font-semibold"
                  >
                    View Details
                  </motion.button>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

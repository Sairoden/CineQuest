// STYLES
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

// NEXT
import Image from "next/image";

interface MoviesListProps {
  currentMovies: {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
  }[];
}

export default function MoviesList({ currentMovies }: MoviesListProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
    >
      {currentMovies.map((movie, index) => (
        <motion.div
          key={movie.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -10 }}
          className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl transform transition-all duration-300 hover:shadow-[#F76641]/20"
        >
          <div className="relative aspect-[2/3]">
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
            />

            <div className="absolute top-4 right-4 bg-[#F76641] rounded-full px-3 py-1 flex items-center gap-1">
              <FaStar className="text-yellow-300" />
              <span className="text-white font-semibold">
                {movie.vote_average.toFixed(1)}
              </span>
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">
              {movie.title}
            </h3>

            <p className="text-gray-400 text-sm mb-4">
              {new Date(movie.release_date).getFullYear()}
            </p>

            <p className="text-gray-300 text-sm line-clamp-3">
              {movie.overview}
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full mt-6 bg-[#F76641] text-white px-6 py-3 rounded-xl hover:bg-opacity-90 transition duration-300 font-semibold"
            >
              View Details
            </motion.button>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

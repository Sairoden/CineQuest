"use client";

// REACT
import { useState, useEffect, useCallback } from "react";

// STYLES
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaStar, FaPlay } from "react-icons/fa";

// NEXT
import Image from "next/image";

const movies = [
  {
    id: 1,
    title: "Dune: Part Two",
    image: "https://picsum.photos/seed/movie7/2400/1200",
    rating: 9.2,
    genre: "Sci-Fi/Adventure",
    description:
      "Follow Paul Atreides as he unites with the Fremen to restore peace to Arrakis.",
    releaseYear: 2024,
  },
  {
    id: 2,
    title: "Oppenheimer",
    image: "https://picsum.photos/seed/movie8/2400/1200",
    rating: 9.0,
    genre: "Biography/Drama",
    description:
      "The story of American scientist J. Robert Oppenheimer and the atomic bomb.",
    releaseYear: 2024,
  },
  {
    id: 3,
    title: "Poor Things",
    image: "https://picsum.photos/seed/movie9/2400/1200",
    rating: 8.8,
    genre: "Comedy/Drama",
    description:
      "A young woman brought back to life by an unorthodox scientist.",
    releaseYear: 2024,
  },
  {
    id: 4,
    title: "Killers of the Flower Moon",
    image: "https://picsum.photos/seed/movie10/2400/1200",
    rating: 8.9,
    genre: "Crime/Drama",
    description:
      "Members of the Osage tribe are murdered under mysterious circumstances.",
    releaseYear: 2024,
  },
  {
    id: 5,
    title: "The Zone of Interest",
    image: "https://picsum.photos/seed/movie11/2400/1200",
    rating: 8.7,
    genre: "Drama/History",
    description:
      "A compelling story about the commandant of Auschwitz and his family.",
    releaseYear: 2024,
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slideMovie = useCallback(
    (newDirection: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setDirection(newDirection);
      setCurrentIndex(prevIndex => {
        if (newDirection === 1) {
          return (prevIndex + 1) % movies.length;
        }
        return (prevIndex - 1 + movies.length) % movies.length;
      });
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const nextSlide = useCallback(() => slideMovie(1), [slideMovie]);
  const prevSlide = useCallback(() => slideMovie(-1), [slideMovie]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
      },
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
      },
    }),
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black shadow-2xl">
      <div className="w-full">
        <div className="relative overflow-hidden shadow-2xl shadow-black/50">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full"
            >
              <div className="relative aspect-[16/9] md:aspect-[21/9] w-full">
                <Image
                  src={movies[currentIndex].image || "/placeholder.svg"}
                  alt={movies[currentIndex].title}
                  layout="fill"
                  objectFit="cover"
                  className=""
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-transparent opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />

                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-4 md:p-16 text-white"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-2 md:mb-4">
                    {movies[currentIndex].title}
                  </h3>

                  <div className="hidden md:flex items-center gap-3 md:gap-6 mb-3 md:mb-6">
                    <span className="text-base md:text-xl lg:text-2xl font-semibold">
                      {movies[currentIndex].releaseYear}
                    </span>

                    <span className="text-base md:text-xl lg:text-2xl">
                      {movies[currentIndex].genre}
                    </span>

                    <div className="flex items-center">
                      <FaStar className="text-yellow-400 mr-1 md:mr-2 text-base md:text-xl lg:text-2xl" />
                      <span className="text-base md:text-xl lg:text-2xl font-semibold">
                        {movies[currentIndex].rating}
                      </span>
                    </div>
                  </div>

                  <p className="hidden md:block text-base md:text-lg lg:text-xl mb-4 md:mb-8 max-w-3xl opacity-90">
                    {movies[currentIndex].description}
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#F76641] text-white px-4 py-2 md:px-10 md:py-5 rounded-full text-sm md:text-xl font-semibold hover:bg-red-700 transition duration-300 flex items-center gap-2 md:gap-3"
                  >
                    <FaPlay className="text-base md:text-2xl" /> Watch Trailer
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-4 md:bottom-12 right-4 md:right-16 flex gap-1 md:gap-3">
            {movies.map((_, index) => (
              <motion.div
                key={index}
                className={`h-1 md:h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "w-6 md:w-10 bg-[#F76641]"
                    : "w-1 md:w-2 bg-white/50"
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="absolute top-1/2 left-2 md:left-8 transform -translate-y-1/2 bg-black/30 text-white p-2 md:p-5 rounded-full backdrop-blur-sm hover:bg-black/50 transition-all duration-300"
          >
            <FaChevronLeft className="text-base md:text-2xl" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="absolute top-1/2 right-2 md:right-8 transform -translate-y-1/2 bg-black/30 text-white p-2 md:p-5 rounded-full backdrop-blur-sm hover:bg-black/50 transition-all duration-300"
          >
            <FaChevronRight className="text-base md:text-2xl" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}

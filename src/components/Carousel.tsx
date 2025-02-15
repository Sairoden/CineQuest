"use client";

// REACT
import { useState, useEffect, useCallback } from "react";

// STYLES
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

// NEXT
import Image from "next/image";
import Link from "next/link";

// HOOKS
import { useGetTopRatedSeries } from "@/hooks";

// COMPONENTS
import { LoadingSpinner } from "@/components";

export default function Carousel() {
  const { data, isPending } = useGetTopRatedSeries();

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
          return (prevIndex + 1) % data?.results.length;
        }
        return (prevIndex - 1 + data?.results.length) % data?.results.length;
      });
      setTimeout(() => setIsAnimating(false), 500);
    },
    [data?.results.length, isAnimating]
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

  if (isPending) return <LoadingSpinner />;

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
              <div className="relative aspect-[16/10] md:aspect-[21/10] w-full">
                <Image
                  src={`https://image.tmdb.org/t/p/original${data?.results[currentIndex].poster_path}`}
                  alt={data?.results[currentIndex].name}
                  fill
                  objectFit="cover"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-transparent opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />

                <motion.div
                  className="absolute bottom-0 left-10 right-0 p-4 md:p-16 text-white"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-2 md:mb-4">
                    {data?.results[currentIndex].name}
                  </h3>

                  <div className="flex items-center gap-3 md:gap-6 mb-3 md:mb-6">
                    <div className="flex items-center">
                      <FaStar className="text-yellow-400 mr-1 md:mr-2 text-base md:text-xl lg:text-2xl" />

                      <span className="text-base md:text-xl lg:text-2xl font-semibold">
                        {data?.results[currentIndex].vote_average.toFixed(1)}
                      </span>
                    </div>
                  </div>

                  <p className="hidden md:block text-base md:text-lg lg:text-xl mb-4 md:mb-8 max-w-3xl opacity-90">
                    {data?.results[currentIndex].overview.length > 600
                      ? `${data?.results[currentIndex].overview
                          .slice(0, 600)
                          .split(" ")
                          .slice(0, -1)
                          .join(" ")}...`
                      : data?.results[currentIndex].overview}
                  </p>

                  <Link
                    href={`/series/${data?.results[currentIndex].id}`}
                    passHref
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#F76641] text-white px-4 py-2 md:px-10 md:py-5 rounded-full text-sm md:text-xl font-semibold hover:bg-[#2A2E3F] transition duration-300 flex items-center gap-2 md:gap-3"
                    >
                      View Details
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-4 md:bottom-12 right-4 md:right-16 flex gap-1 md:gap-3">
            {data?.results.map((_: unknown, index: number) => (
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

"use client";

// NEXT
import Image from "next/image";

// STYLES
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 min-h-screen flex items-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 text-white mb-8 md:mb-0"
        >
          <h1 className="text-5xl font-bold mb-4">
            Discover Your Next Cinematic Adventure
          </h1>

          <p className="text-xl mb-8">
            Explore thousands of movies, read reviews, and embark on your
            CineQuest journey.
          </p>

          <button className="bg-white text-red-500 px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300 flex items-center">
            <FaPlay className="mr-2" /> Start your collection now with CineQuest
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2"
        >
          <Image
            src="https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg"
            alt="Featured Movie"
            width={500}
            height={750}
            className="rounded-lg shadow-2xl"
          />
        </motion.div>
      </div>
    </div>
  );
}

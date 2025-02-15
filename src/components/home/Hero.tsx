"use client";

// NEXT
import Link from "next/link";
import Image from "next/image";

// STYLES
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import Lottie from "lottie-react";
import HeroAnimation from "@/assets/hero-animation.json";

const backgroundPositions = [140, 128, 89, 42, 5, 97, 107, 54, 57, 90];

export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 relative overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-yellow-400/30 to-transparent" />

        {backgroundPositions.map((y, i) => (
          <motion.div
            key={i}
            className="absolute text-white/20"
            initial={{ x: -100, y }}
            animate={{
              x: typeof window !== "undefined" ? window.innerWidth + 100 : 1000,
              y,
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 2,
              ease: "linear",
            }}
          >
            🎬
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 text-white mb-8 md:mb-0"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Discover Your Next Cinematic{" "}
              <span className="relative">
                Adventure
                <motion.div
                  className="absolute -bottom-2 left-0 w-full h-2 bg-yellow-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                />
              </span>
            </h1>

            <p className="text-xl mb-8 text-white/90">
              Dive into a world of cinematic wonders. Explore thousands of
              movies, read reviews, and embark on your CineQuest journey.
            </p>

            <div className="flex items-center gap-4 mb-8">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <Image
                    key={i}
                    src={`https://picsum.photos/100/100?random=${i}`}
                    alt={`Reviewer ${i + 1}`}
                    className="rounded-full border-2 border-primary object-cover"
                    width={32}
                    height={32}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <span className="text-yellow-400">★</span>
                <span className="font-semibold">5.00 Ratings</span>
                <span className="text-white/70">from 100+ reviews</span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <Link
                href="/movies"
                className="group bg-white text-[#F76641] font-bold py-4 px-8 rounded-full inline-flex items-center text-lg relative overflow-hidden hover:text-white transition-colors duration-300"
              >
                <span className="relative z-10 flex items-center">
                  <FaPlay className="mr-2 transition-transform duration-300 group-hover:rotate-90" />
                  Begin Your CineQuest Journey
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#2A2E3F] to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 hidden md:block"
          >
            <Lottie animationData={HeroAnimation} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

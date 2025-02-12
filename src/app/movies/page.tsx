"use client";

import { useState } from "react";
import { FaSearch, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

const dummyMovies = [
  {
    id: 1,
    title: "Inception",
    overview:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster...",
    poster_path: "/8bxHvsNveZwgqdrC1dKCxstsCk0.jpg",
    release_date: "2010-07-16",
    vote_average: 8.4,
  },
  {
    id: 2,
    title: "The Dark Knight",
    overview:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice...",
    poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    release_date: "2008-07-18",
    vote_average: 8.9,
  },
  {
    id: 3,
    title: "Interstellar",
    overview:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival. As time winds down on Earth, a team of explorers undertakes the most important mission...",
    poster_path: "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    release_date: "2014-11-07",
    vote_average: 8.6,
  },
  {
    id: 4,
    title: "Pulp Fiction",
    overview:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption in Los Angeles...",
    poster_path: "/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    release_date: "1994-10-14",
    vote_average: 8.7,
  },
];

export default function MoviesPage() {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Searching for:", query);
  };

  return (
    <div className="min-h-screen bg-gray-900 py-28">
      <div className="container mx-auto px-4 py-8">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-4xl font-bold text-white mb-8 tracking-tight"
        >
          Discover Movies
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <form onSubmit={handleSubmit} className="max-w-2xl">
            <div className="relative">
              <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search for movies..."
                className="w-full px-6 py-4 rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#F76641]/50 text-lg placeholder-gray-400"
              />
              <motion.button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#F76641] text-white p-4 rounded-full hover:bg-opacity-90 transition duration-300"
              >
                <FaSearch className="text-lg" />
              </motion.button>
            </div>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {dummyMovies.map((movie, index) => (
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
      </div>
    </div>
  );
}

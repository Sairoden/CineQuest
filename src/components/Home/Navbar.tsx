"use client";

// NEXT
import Link from "next/link";

// STYLES
import { motion } from "framer-motion";
import { FaFilm, FaHeart, FaUserPlus } from "react-icons/fa";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white bg-opacity-95 py-4 fixed w-full z-10 shadow-md"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold text-[#F76641]">
          CineQuest
        </Link>

        <div className="flex items-center space-x-6">
          <Link
            href="/movies"
            className="flex items-center text-gray-700 hover:text-[#F76641] transition-colors duration-300"
          >
            <FaFilm className="mr-2" />
            Movies
          </Link>

          <Link
            href="/favorites"
            className="flex items-center text-gray-700 hover:text-[#F76641] transition-colors duration-300"
          >
            <FaHeart className="mr-2" />
            Favorites
          </Link>

          <Link href="/signup">
            <button className="bg-[#F76641] text-white px-4 py-2 rounded-full hover:bg-opacity-80 transition duration-300 flex items-center">
              <FaUserPlus className="mr-2" />
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}

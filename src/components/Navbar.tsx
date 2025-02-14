"use client";

// NEXT
import Link from "next/link";

// REACT
import { useState } from "react";

// STYLES
import { motion } from "framer-motion";
import {
  FaFilm,
  FaListUl,
  FaUserPlus,
  FaTv,
  FaBars,
  FaTimes,
  FaSignOutAlt,
} from "react-icons/fa";

// HOOKS
import { useGetCurrentUser, useLogout } from "@/hooks";

export default function Navbar() {
  const { user } = useGetCurrentUser();
  const { logout, isPending } = useLogout();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignOut = () => {
    logout();
  };

  const AuthButton = () => {
    if (user)
      return (
        <button
          onClick={handleSignOut}
          disabled={isPending}
          className="bg-[#F76641] text-white px-4 py-2 rounded-full hover:bg-opacity-80 transition duration-300 flex items-center justify-center"
        >
          <FaSignOutAlt className="mr-2" />
          Sign Out
        </button>
      );

    return (
      <Link
        href="/login"
        className="bg-[#F76641] text-white px-4 py-2 rounded-full hover:bg-opacity-80 transition duration-300 flex items-center justify-center"
      >
        <FaUserPlus className="mr-2" />
        Sign in
      </Link>
    );
  };

  return (
    <motion.nav
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white bg-opacity-95 py-4 fixed w-full z-10 shadow-md"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-3xl font-bold bg-gradient-to-r from-[#F76641] to-[#FF9F59] text-transparent bg-clip-text"
          >
            CineQuest
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-[#F76641] transition-colors duration-300"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/movies"
              className="flex items-center text-gray-700 hover:text-[#F76641] transition-colors duration-300"
            >
              <FaFilm className="mr-2" />
              Movies
            </Link>

            <Link
              href="/series"
              className="flex items-center text-gray-700 hover:text-[#F76641] transition-colors duration-300"
            >
              <FaTv className="mr-2" />
              TV Shows
            </Link>

            <Link
              href="/watchlist"
              className="flex items-center text-gray-700 hover:text-[#F76641] transition-colors duration-300"
            >
              <FaListUl className="mr-2" />
              Watchlist
            </Link>

            <AuthButton />
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            height: isMenuOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="flex flex-col space-y-4 pt-4">
            <Link
              href="/movies"
              className="flex items-center text-gray-700 hover:text-[#F76641] transition-colors duration-300"
            >
              <FaFilm className="mr-2" />
              Movies
            </Link>

            <Link
              href="/series"
              className="flex items-center text-gray-700 hover:text-[#F76641] transition-colors duration-300"
            >
              <FaTv className="mr-2" />
              TV Shows
            </Link>

            <Link
              href="/watchlist"
              className="flex items-center text-gray-700 hover:text-[#F76641] transition-colors duration-300"
            >
              <FaListUl className="mr-2" />
              Watchlist
            </Link>

            <AuthButton />
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}

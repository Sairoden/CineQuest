"use client";

// REACT
import { useState } from "react";

// STYLES
import { motion } from "framer-motion";

// COMPONENTS
import { Paginations, MovieSearch, MoviesList } from "@/components";

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

  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 8;
  const totalPages = Math.ceil(dummyMovies.length / moviesPerPage);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = dummyMovies.slice(indexOfFirstMovie, indexOfLastMovie);

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

        <MovieSearch
          handleSubmit={handleSubmit}
          query={query}
          setQuery={setQuery}
        />

        <MoviesList currentMovies={currentMovies} />

        <Paginations
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

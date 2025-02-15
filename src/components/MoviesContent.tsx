"use client";

// REACT
import { useState } from "react";

// NEXT
import { usePathname, useSearchParams, useRouter } from "next/navigation";

// STYLES
import { motion } from "framer-motion";
import { FaFilm } from "react-icons/fa";

// COMPONENTS
import {
  LoadingSpinner,
  MediaList,
  MediaSearch,
  Paginations,
} from "@/components";

// HOOKS
import { useGetAllMovies } from "@/hooks";

export default function MoviesContent() {
  const [query, setQuery] = useState("");
  const { data, isPending } = useGetAllMovies();
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  if (isPending) return <LoadingSpinner />;

  const { page = 1, results: movies = [], total_pages: totalPages = 1 } = data;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);

    if (query) {
      params.set("query", query);
      params.set("page", "1");
    } else {
      params.delete("query");
    }
    router.replace(`${pathname}?${params.toString()}`);
  };

  const handlePage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(page));
    router.replace(`${pathname}?${params.toString()}`);
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

        <MediaSearch
          handleSubmit={handleSubmit}
          query={query}
          setQuery={setQuery}
          placeholder="Search for movies..."
        />

        {movies.length > 0 ? (
          <>
            <MediaList items={movies} type="movies" />

            <Paginations
              totalPages={totalPages}
              currentPage={page}
              handlePage={handlePage}
            />
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center py-20 px-4 text-center"
          >
            <div className="bg-[#F76641]/10 rounded-full p-6 mb-6 inline-block">
              <FaFilm className="text-[#F76641] text-4xl" />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              No Movies Found
            </h2>

            <p className="text-gray-400 text-lg max-w-md">
              {query
                ? `No results found for "${query}". Try different keywords or browse our movie collection.`
                : "No movies available at the moment. Try searching for something specific."}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

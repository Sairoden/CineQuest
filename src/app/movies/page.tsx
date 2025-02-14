"use client";

// REACT
import { useState } from "react";

// NEXT
import { usePathname, useSearchParams, useRouter } from "next/navigation";

// STYLES
import { motion } from "framer-motion";

// COMPONENTS
import {
  Paginations,
  MediaSearch,
  MediaList,
  LoadingSpinner,
} from "@/components";

// HOOKS
import { useGetAllMovies } from "@/hooks";

export default function MoviesPage() {
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

        <MediaList items={movies} type="movies" />

        <Paginations
          totalPages={totalPages}
          currentPage={page}
          handlePage={handlePage}
        />
      </div>
    </div>
  );
}

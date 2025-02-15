"use client";

// STYLES
import { motion } from "framer-motion";

// COMPONENTS
import { MediaCard } from "@/components";

interface MediaListProps {
  items: {
    id: number;
    title?: string;
    name?: string;
    overview: string;
    poster_path: string;
    release_date?: string;
    first_air_date?: string;
    vote_average: number;
    tmdbID: number;
  }[];
  type: string;
}

export default function MediaList({ items, type }: MediaListProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
    >
      {items.map((item, index) => (
        <MediaCard item={item} index={index} key={index} type={type} />
      ))}
    </motion.div>
  );
}

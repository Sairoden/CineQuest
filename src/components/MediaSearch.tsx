"use client";

// STYLES
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

interface MediaSearchProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
}

export default function MediaSearch({
  handleSubmit,
  query,
  setQuery,
  placeholder,
}: MediaSearchProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery((e.target as HTMLInputElement).value);
  };

  return (
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
            onChange={handleChange}
            placeholder={placeholder}
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
  );
}

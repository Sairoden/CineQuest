// STYLES
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

interface MovieSearchProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

export default function MovieSearch({
  handleSubmit,
  query,
  setQuery,
}: MovieSearchProps) {
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
  );
}

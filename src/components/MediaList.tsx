// STYLES
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

// NEXT
import Image from "next/image";

interface MediaListProps {
  items: {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
  }[];
}

export default function MediaList({ items }: MediaListProps) {
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
    >
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -10 }}
          className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl transform transition-all duration-300 hover:shadow-[#F76641]/20 flex flex-col h-full"
        >
          <div className="relative aspect-[2/3]">
            <Image
              src={
                item.poster_path
                  ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                  : "/noPoster.png"
              }
              alt={item.title}
              fill
              sizes="(max-width: 640px) 100vw, 
                     (max-width: 1024px) 50vw, 
                     (max-width: 1280px) 33vw,
                     25vw"
              quality={85}
              priority={index < 4}
              className="transition-transform duration-300 hover:scale-105 object-cover"
            />

            {item.vote_average && (
              <div className="absolute top-4 right-4 bg-[#F76641] rounded-full px-3 py-1 flex items-center gap-1">
                <FaStar className="text-yellow-300" />
                <span className="text-white font-semibold">
                  {String(item.vote_average?.toFixed(1))}
                </span>
              </div>
            )}
          </div>

          <div className="p-6 flex flex-col flex-grow">
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                {item.release_date
                  ? new Date(item.release_date).getFullYear()
                  : "No Date"}
              </p>

              <p className="text-gray-300 text-sm min-h-[4.5rem]">
                {item.overview
                  ? truncateText(item.overview, 80)
                  : "No overview"}
              </p>
            </div>

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
  );
}

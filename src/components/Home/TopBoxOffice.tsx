"use client";

// NEXT
import Image from "next/image";

// STYLES
import { motion } from "framer-motion";
import { FaDollarSign, FaTicketAlt, FaChartLine } from "react-icons/fa";

const topMovies = [
  {
    id: 1,
    title: "Avengers: Endgame",
    image: "https://picsum.photos/seed/movie1/300/450",
    boxOffice: "2.798 billion",
    weekendGross: "357.1 million",
  },
  {
    id: 2,
    title: "Avatar",
    image: "https://picsum.photos/seed/movie2/300/450",
    boxOffice: "2.847 billion",
    weekendGross: "77.0 million",
  },
  {
    id: 3,
    title: "Titanic",
    image: "https://picsum.photos/seed/movie3/300/450",
    boxOffice: "2.201 billion",
    weekendGross: "28.6 million",
  },
  {
    id: 4,
    title: "Star Wars: Episode VII",
    image: "https://picsum.photos/seed/movie4/300/450",
    boxOffice: "2.068 billion",
    weekendGross: "247.9 million",
  },
  {
    id: 5,
    title: "Jurassic World",
    image: "https://picsum.photos/seed/movie5/300/450",
    boxOffice: "1.671 billion",
    weekendGross: "208.8 million",
  },
  {
    id: 6,
    title: "The Lion King",
    image: "https://picsum.photos/seed/movie6/300/450",
    boxOffice: "1.657 billion",
    weekendGross: "191.8 million",
  },
];

export default function TopBoxOffice() {
  return (
    <div className="bg-[#2A2E3F] py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Top Box Office (US)
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {topMovies.map((movie, index) => (
            <motion.div
              key={movie.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div className="relative h-64">
                <Image
                  src={movie.image || "/placeholder.svg"}
                  alt={movie.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-110"
                />

                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xl font-bold text-center px-4">
                    {movie.title}
                  </p>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#F76641] mb-4">
                  {movie.title}
                </h3>

                <div className="space-y-2">
                  <div className="flex items-center text-gray-300">
                    <FaDollarSign className="mr-2 text-green-500" />
                    <span>Total: {movie.boxOffice}</span>
                  </div>

                  <div className="flex items-center text-gray-300">
                    <FaTicketAlt className="mr-2 text-blue-500" />
                    <span>Weekend: {movie.weekendGross}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-700 px-6 py-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Trend</span>
                  <FaChartLine className="text-[#F76641]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

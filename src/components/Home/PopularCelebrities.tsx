"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaImdb, FaTrophy } from "react-icons/fa";

// Types
interface Celebrity {
  id: number;
  name: string;
  image: string;
  role: string;
  awards: string;
  imdbId: string;
}

// Data
const celebrities: Celebrity[] = [
  {
    id: 1,
    name: "Tom Hanks",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
    role: "Forrest Gump",
    awards: "2 Academy Awards",
    imdbId: "nm0000158",
  },
  {
    id: 2,
    name: "Scarlett Johansson",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
    role: "Black Widow",
    awards: "BAFTA Award",
    imdbId: "nm0424060",
  },
  {
    id: 3,
    name: "Denzel Washington",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjE5NDU2Mzc3MV5BMl5BanBnXkFtZTcwNjAwNTE5OQ@@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
    role: "Malcolm X",
    awards: "2 Academy Awards",
    imdbId: "nm0000243",
  },
  {
    id: 4,
    name: "Viola Davis",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzUxNjM4ODI1OV5BMl5BanBnXkFtZTgwNTEwNDE2OTE@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
    role: "Ma Rainey",
    awards: "Academy Award",
    imdbId: "nm0205626",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.6,
    },
  },
  hover: {
    y: -10,
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const PopularCelebrities = () => {
  return (
    <div className="bg-gray-900 min-h-screen py-8 md:py-16">
      <div className="max-w-[2000px] mx-auto px-4 md:px-8">
        <motion.h2
          className="text-4xl font-bold mb-8 md:mb-12 text-center text-white"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            type: "spring",
            stiffness: 100,
          }}
        >
          Popular Celebrities
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {celebrities.map(celebrity => (
            <motion.div
              key={celebrity.id}
              className="relative group"
              variants={cardVariants}
              whileHover="hover"
              initial="initial"
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg overflow-hidden">
                <div className="relative w-full h-[400px] md:h-[450px] lg:h-[500px]">
                  <motion.div className="w-full h-full">
                    <Image
                      src={celebrity.image}
                      alt={celebrity.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300"
                      priority
                    />
                  </motion.div>

                  <motion.div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                  <motion.div className="absolute bottom-0 left-0 w-full p-4 md:p-6 text-white">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
                      {celebrity.name}
                    </h3>
                    <p className="text-base md:text-lg lg:text-xl opacity-90">
                      {celebrity.role}
                    </p>
                  </motion.div>
                </div>

                <motion.div className="p-4 md:p-6" initial={{ opacity: 0.8 }}>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#F76641] mb-2">
                    {celebrity.name}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base mb-4">
                    Known for: {celebrity.role}
                  </p>

                  <div className="flex items-center justify-between">
                    <motion.div className="flex items-center">
                      <FaTrophy className="text-yellow-400 mr-2 text-base md:text-lg" />
                      <p className="text-sm md:text-base text-gray-400">
                        {celebrity.awards}
                      </p>
                    </motion.div>

                    <motion.a
                      href={`https://www.imdb.com/name/${celebrity.imdbId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaImdb className="text-xl md:text-2xl" />
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PopularCelebrities;

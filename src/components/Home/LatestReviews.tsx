"use client";

// NEXT
import Image from "next/image";

// STYLES
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    author: "John Doe",
    content:
      "An absolute masterpiece! The cinematography and acting were top-notch.",
    rating: 5,
    movie: "Inception",
  },
  {
    id: 2,
    author: "Jane Smith",
    content:
      "A thrilling ride from start to finish. Kept me on the edge of my seat!",
    rating: 4,
    movie: "The Dark Knight",
  },
  {
    id: 3,
    author: "Mike Johnson",
    content: "Visually stunning and emotionally powerful. A must-see film!",
    rating: 5,
    movie: "Interstellar",
  },
];

export default function LatestReviews() {
  return (
    <div className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Latest Reviews
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div className="p-6 relative">
                <FaQuoteLeft className="absolute top-4 left-0 text-[#F76641] opacity-20 text-4xl" />
                <FaQuoteRight className="absolute bottom-4 right-0 text-[#F76641] opacity-20 text-4xl" />

                <h3 className="text-xl font-bold text-[#F76641] mb-2">
                  {review.movie}
                </h3>

                <p className="text-gray-300 italic mb-4 z-10 relative">
                  {review.content}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                      <Image
                        src={`https://picsum.photos/seed/${review.id}/100/100`}
                        alt={review.author}
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>

                    <p className="text-gray-400">{review.author}</p>
                  </div>

                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <FaStar className="text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

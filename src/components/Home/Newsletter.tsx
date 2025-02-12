"use client";

// REACT
import type React from "react";
import { useState } from "react";

// STYLES
import { motion } from "framer-motion";
import { FaPaperPlane, FaEnvelope } from "react-icons/fa";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <div className="bg-white bg-opacity-95 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg shadow-2xl p-8 max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4 text-center text-[#F76641]">
            Stay Updated
          </h2>

          <p className="mb-6 text-center text-gray-600">
            Subscribe to our newsletter for the latest movie news and exclusive
            offers.
          </p>

          <form className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full px-10 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#F76641] border border-gray-300 transition-all duration-300 hover:shadow-md"
                required
              />
            </div>

            <motion.button
              type="submit"
              className="bg-gradient-to-r from-[#F76641] to-[#FF8A6A] text-white px-6 py-3 rounded-full transition duration-300 flex items-center justify-center hover:from-[#FF8A6A] hover:to-[#F76641] hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
              <FaPaperPlane className="ml-2" />
            </motion.button>
          </form>

          <motion.div
            className="mt-6 text-center text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            By subscribing, you agree to our Privacy Policy and Terms of
            Service.
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

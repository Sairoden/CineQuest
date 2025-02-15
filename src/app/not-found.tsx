"use client";

// NEXT
import Link from "next/link";

// STYLES
import { motion } from "framer-motion";
import { FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-[#2A2E3F] flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-[150px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F76641] to-[#FF9B7B] leading-none">
            404
          </h1>

          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
            Page Not Found
          </h2>

          <p className="text-gray-400 text-lg max-w-md mx-auto mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#F76641] hover:bg-[#FF9B7B] text-white px-6 py-3 rounded-xl transition-colors duration-300 font-medium"
          >
            <FaHome className="text-xl" />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

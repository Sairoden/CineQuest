// REACT
import React from "react";

// STYLES
import { motion } from "framer-motion";

interface PaginationsProps {
  currentPage: number;
  totalPages: number;
  handlePage: (page: number) => void;
}

export default function Paginations({
  currentPage,
  totalPages,
  handlePage,
}: PaginationsProps) {
  const getPageRange = () => {
    const range = [];
    const showPages = 5;
    let start = Math.max(1, currentPage - 2);
    const end = Math.min(totalPages, start + showPages - 1);

    if (end - start + 1 < showPages) {
      start = Math.max(1, end - showPages + 1);
    }

    for (let i = start; i <= end; i++) {
      range.push(i);
    }

    return range;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-16 flex flex-col items-center gap-4"
    >
      <p className="text-gray-400 text-sm">
        Page {currentPage} of {totalPages}
      </p>

      <div className="flex items-center gap-3">
        {/* Previous button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handlePage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`flex items-center justify-center w-10 h-10 rounded-full
        transition-all duration-300 ${
          currentPage === 1
            ? "bg-gray-800 cursor-not-allowed"
            : "bg-gray-800 hover:bg-[#F76641] hover:shadow-lg hover:shadow-[#F76641]/20"
        }`}
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>

        {/* Page numbers */}
        <div className="flex items-center gap-2">
          {getPageRange().map(pageNum => (
            <motion.button
              key={pageNum}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handlePage(pageNum)}
              className={`relative w-10 h-10 flex items-center justify-center rounded-full
            font-medium transition-all duration-300 ${
              currentPage === pageNum
                ? "bg-[#F76641] text-white shadow-lg shadow-[#F76641]/20"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
            >
              {pageNum}
              {currentPage === pageNum && (
                <motion.div
                  layoutId="activePage"
                  className="absolute inset-0 bg-[#F76641] rounded-full -z-10"
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Next button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handlePage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`flex items-center justify-center w-10 h-10 rounded-full
        transition-all duration-300 ${
          currentPage === totalPages
            ? "bg-gray-800 cursor-not-allowed"
            : "bg-gray-800 hover:bg-[#F76641] hover:shadow-lg hover:shadow-[#F76641]/20"
        }`}
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>

      <div className="md:hidden flex gap-4 mt-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handlePage(1)}
          disabled={currentPage === 1}
          className="text-sm text-gray-400 hover:text-[#F76641] transition-colors"
        >
          First
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handlePage(totalPages)}
          disabled={currentPage === totalPages}
          className="text-sm text-gray-400 hover:text-[#F76641] transition-colors"
        >
          Last
        </motion.button>
      </div>
    </motion.div>
  );
}

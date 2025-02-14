// STYLES
import { motion } from "framer-motion";
import { FaCalendarAlt, FaClock, FaDollarSign } from "react-icons/fa";

interface MovieDetailsGridProps {
  movie: {
    release_date: string;
    runtime: number;
    budget: number;
    revenue: number;
  };
}

export default function MovieDetailsGrid({ movie }: MovieDetailsGridProps) {
  return (
    <div className="grid grid-cols-2 gap-6 mb-10">
      {[
        {
          icon: FaCalendarAlt,
          label: "Release Date",
          value: movie.release_date,
        },
        {
          icon: FaClock,
          label: "Runtime",
          value: `${movie.runtime} minutes`,
        },
        {
          icon: FaDollarSign,
          label: "Budget",
          value: `$${movie.budget.toLocaleString()}`,
        },
        {
          icon: FaDollarSign,
          label: "Revenue",
          value: `$${movie.revenue.toLocaleString()}`,
        },
      ].map((detail, index) => (
        <motion.div
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 + index * 0.1 }}
          className="bg-black/20 backdrop-blur-sm p-6 rounded-2xl hover:bg-black/30 transition-all duration-300"
        >
          <detail.icon className="text-[#F76641] mb-3 text-2xl" />

          <p className="text-gray-400 text-sm mb-1">{detail.label}</p>

          <p className="text-xl font-semibold">{detail.value}</p>
        </motion.div>
      ))}
    </div>
  );
}

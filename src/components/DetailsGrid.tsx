// STYLES
import { motion } from "framer-motion";
import { FaCalendarAlt, FaClock, FaDollarSign } from "react-icons/fa";

interface MovieDetailsGridProps {
  items: {
    release_date?: string;
    first_air_date?: string;
    runtime?: number;
    episode_run_time?: number;
    budget?: number;
    revenue?: number;
  };
}

export default function DetailsGrid({ items }: MovieDetailsGridProps) {
  const details = [
    {
      icon: FaCalendarAlt,
      label: "Release Date",
      value: items.release_date || items.first_air_date || "No release date",
    },
    {
      icon: FaClock,
      label: "Runtime",
      value: items.runtime ? `${items.runtime} minutes` : "Not available",
    },
    // Only add budget if it exists and is not 0
    ...(items.budget && items.budget > 0
      ? [
          {
            icon: FaDollarSign,
            label: "Budget",
            value: `$${items.budget.toLocaleString()}`,
          },
        ]
      : []),
    // Only add revenue if it exists and is not 0
    ...(items.revenue && items.revenue > 0
      ? [
          {
            icon: FaDollarSign,
            label: "Revenue",
            value: `$${items.revenue.toLocaleString()}`,
          },
        ]
      : []),
  ];

  return (
    <div className="grid grid-cols-2 gap-6 mb-10">
      {details.map((detail, index) => (
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

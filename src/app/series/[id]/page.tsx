"use client";

// STYLES
import { motion } from "framer-motion";

// COMPONENTS
import {
  LoadingSpinner,
  DetailsBackdrop,
  DetailsPoster,
  DetailsDetailsGrid,
  DetailsOverview,
  DetailsGenres,
  DetailsProduction,
} from "@/components";

// HOOKS
import { useGetSeries } from "@/hooks";

export default function MovieDetailsPage() {
  const { data: series, isPending } = useGetSeries();

  if (isPending) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-[#2A2E3F] text-white py-28">
      <DetailsBackdrop items={series} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16 relative"
      >
        <div className="flex flex-col md:flex-row gap-12">
          <DetailsPoster items={series} />

          {/* Details Section */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="md:w-2/3"
          >
            <DetailsOverview items={series} />

            <DetailsDetailsGrid items={series} />

            <DetailsGenres items={series} />

            <DetailsProduction items={series} />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

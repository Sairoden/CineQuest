"use client";

// STYLES
import { motion } from "framer-motion";

// COMPONENTS
import {
  LoadingSpinner,
  WatchlistGrid,
  NoUserWatchlist,
  NoWatchlist,
} from "@/components";

// HOOKS
import { useGetAllWatchlist, useGetCurrentUser } from "@/hooks";

export default function WatchlistContent() {
  const { user } = useGetCurrentUser();
  const { watchlist, isPending } = useGetAllWatchlist();

  if (isPending) return <LoadingSpinner />;

  const hasWatchlist = watchlist && watchlist.length > 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-[#2A2E3F] py-28">
      <div className="container mx-auto px-4 py-8">
        {user ? (
          <>
            {hasWatchlist && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-12"
              >
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Your Watchlist
                </h1>

                <p className="text-gray-400 text-lg">
                  Keep track of movies and shows you want to watch
                </p>
              </motion.div>
            )}

            {hasWatchlist ? (
              <WatchlistGrid watchlist={watchlist} />
            ) : (
              <NoWatchlist />
            )}
          </>
        ) : (
          <NoUserWatchlist />
        )}
      </div>
    </div>
  );
}

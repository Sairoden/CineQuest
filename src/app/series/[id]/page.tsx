"use client";

// NEXT
import { useRouter } from "next/navigation";

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
import {
  useGetSeries,
  usePostSeries,
  useGetCurrentUser,
  useGetAllWatchlist,
  useDeleteWatchlist,
} from "@/hooks";

export default function SeriesDetailsPage() {
  const { data: series, isPending } = useGetSeries();
  const { postSeries, isPending: postSeriesPending } = usePostSeries();
  const { user }: { user: { id?: string } | null } = useGetCurrentUser();
  const { watchlist, isPending: watchlistPending } = useGetAllWatchlist();
  const { deleteWatchlist, isPending: deleteWatchlistPending } =
    useDeleteWatchlist();

  const isInWatchlist =
    (user && watchlist?.some(item => item.tmdbID === series?.id)) ?? false;

  const router = useRouter();

  const handleWatchlist = () => {
    if (!user) {
      router.push("/login");
      return;
    }

    if (user?.id === undefined) {
      console.error("User ID is undefined");
      return;
    }

    const watchlistSeries = {
      name: series.name,
      overview: series.overview,
      poster_path: series.poster_path,
      first_air_date: series.first_air_date,
      vote_average: series.vote_average,
      type: "series",
      tmdbID: series.id,
      userId: user.id,
    };

    postSeries(watchlistSeries);
  };

  const handleRemoveWatchlist = () => {
    if (!series.id) return;

    deleteWatchlist(series.id);
  };

  if (isPending || watchlistPending) return <LoadingSpinner />;

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
          <DetailsPoster
            items={series}
            onWatchlist={handleWatchlist}
            isPending={postSeriesPending}
            isInWatchlist={isInWatchlist}
            deleteWatchlistPending={deleteWatchlistPending}
            onRemoveWatchlist={handleRemoveWatchlist}
          />

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

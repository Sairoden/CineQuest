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
  useGetMovie,
  usePostMovie,
  useGetCurrentUser,
  useGetAllWatchlist,
  useDeleteWatchlist,
} from "@/hooks";

export default function MovieDetailsPage() {
  const { data: movie, isPending } = useGetMovie();
  const { postMovie, isPending: postMoviePending } = usePostMovie();
  const { user }: { user: { id?: string } | null } = useGetCurrentUser();
  const { watchlist, isPending: watchlistPending } = useGetAllWatchlist();
  const { deleteWatchlist, isPending: deleteWatchlistPending } =
    useDeleteWatchlist();

  const isInWatchlist =
    (user && watchlist?.some(item => item.tmdbID === movie?.id)) ?? false;

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

    const watchlistMovie = {
      title: movie.title,
      overview: movie.overview,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
      vote_average: movie.vote_average,
      type: "movie",
      tmdbID: movie.id,
      userId: user.id,
    };

    postMovie(watchlistMovie);
  };

  const handleRemoveWatchlist = () => {
    if (!movie.id) return;

    deleteWatchlist(movie.id);
  };

  if (isPending || watchlistPending) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-[#2A2E3F] text-white py-28">
      <DetailsBackdrop items={movie} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16 relative"
      >
        <div className="flex flex-col md:flex-row gap-12">
          <DetailsPoster
            items={movie}
            onWatchlist={handleWatchlist}
            isPending={postMoviePending}
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
            <DetailsOverview items={movie} />

            <DetailsDetailsGrid items={movie} />

            <DetailsGenres items={movie} />

            <DetailsProduction items={movie} />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

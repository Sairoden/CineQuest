// COMPONENTS
import { MediaList } from "@/components";

interface WatchlistGridProps {
  watchlist: {
    id: number;
    title?: string;
    name?: string;
    overview: string;
    poster_path: string;
    release_date?: string;
    first_air_date?: string;
    vote_average: number;
    tmdbID: number;
    type: string;
  }[];
}

export default function WatchlistGrid({ watchlist }: WatchlistGridProps) {
  const movies = watchlist?.filter(item => item.type === "movie") || [];
  const series = watchlist?.filter(item => item.type === "series") || [];

  const hasMovies = movies.length > 0;
  const hasSeries = series.length > 0;

  return (
    <div className="space-y-12">
      {/* Movies Section */}
      {hasMovies && (
        <div>
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Movies
          </h2>

          <MediaList items={movies} type="movie" />
        </div>
      )}

      {/* Series Section */}
      {hasSeries && (
        <div>
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            TV Series
          </h2>

          <MediaList items={series} type="series" />
        </div>
      )}
    </div>
  );
}

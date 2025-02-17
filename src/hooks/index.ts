// MOVIES
import {
  useGetAllMovies,
  useGetTrendingMovies,
  useGetMovie,
  usePostMovie,
} from "./useMovies";
export { useGetAllMovies, useGetTrendingMovies, useGetMovie, usePostMovie };

// PEOPLE
import { useGetPopularPeople, useGetPeople } from "./usePeople";
export { useGetPopularPeople, useGetPeople };

// SERIES
import {
  useGetAllSeries,
  useGetTopRatedSeries,
  useGetSeries,
  usePostSeries,
} from "./useSeries";
export { useGetAllSeries, useGetTopRatedSeries, useGetSeries, usePostSeries };

// SERIES
import { useLoginWithGoogle, useLogout, useGetCurrentUser } from "./useAuth";
export { useLoginWithGoogle, useLogout, useGetCurrentUser };

// SERIES
import { useGetAllWatchlist, useDeleteWatchlist } from "./useWatchlist";
export { useGetAllWatchlist, useDeleteWatchlist };

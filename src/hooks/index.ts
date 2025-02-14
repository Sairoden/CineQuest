// MOVIES
import {
  useGetAllMovies,
  useGetTrendingMovies,
  useGetMovie,
} from "./useMovies";
export { useGetAllMovies, useGetTrendingMovies, useGetMovie };

// PEOPLE
import { useGetPopularPeople } from "./usePeople";
export { useGetPopularPeople };

// SERIES
import {
  useGetAllSeries,
  useGetTopRatedSeries,
  useGetSeries,
} from "./useSeries";
export { useGetAllSeries, useGetTopRatedSeries, useGetSeries };

// SERIES
import { useLoginWithGoogle, useLogout, useGetCurrentUser } from "./useAuth";
export { useLoginWithGoogle, useLogout, useGetCurrentUser };

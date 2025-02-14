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
import { useGetAllSeries, useGetTopRatedSeries } from "./useSeries";
export { useGetAllSeries, useGetTopRatedSeries };

// SERIES
import { useLoginWithGoogle, useLogout, useGetCurrentUser } from "./useAuth";
export { useLoginWithGoogle, useLogout, useGetCurrentUser };
